/*
 * Busca los tirones: los cuadros que tardan mucho mas que el resto mientras
 * se pasa de una vista a otra, y dice en que punto del recorrido pasaron y
 * en que se fue el tiempo de ese cuadro (hilo principal, rasterizado, GPU).
 *
 *   node scripts/tirones.mjs <url> <pc|movil> <salida> [freno=1] [gestos=8]
 */
import { chromium } from 'playwright-core'
import { mkdirSync, mkdtempSync, rmSync, writeFileSync, existsSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const BRAVE = 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe'
const [, , url, modo = 'movil', salida, freno = '1', gestos = '8'] = process.argv
mkdirSync(salida, { recursive: true })
const movil = modo === 'movil'
const VP = movil
  ? { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 3 }
  : { viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 }
const perfil = mkdtempSync(join(tmpdir(), 'tirones-'))
const ctx = await chromium.launchPersistentContext(perfil, {
  headless: true,
  colorScheme: 'light',
  executablePath: existsSync(BRAVE) ? BRAVE : undefined,
  ...VP,
})
const pg = ctx.pages()[0]
const cdp = await ctx.newCDPSession(pg)
await pg.goto(url, { waitUntil: 'networkidle' })
await pg.waitForTimeout(5000)
// INICIO=<p>: arranca el recorrido en ese punto (p. ej. 2 = primer proyecto)
if (process.env.INICIO) {
  await pg.evaluate((v) => window.__v2.ir(v), Number(process.env.INICIO))
  await pg.waitForTimeout(1500)
}
if (Number(freno) > 1) await cdp.send('Emulation.setCPUThrottlingRate', { rate: Number(freno) })

await pg.evaluate(() => {
  window.__cuadros = []
  const paso = (t) => {
    window.__cuadros.push([t, window.__v2 ? window.__v2.p() : 0])
    requestAnimationFrame(paso)
  }
  requestAnimationFrame(paso)
})

const trozos = []
cdp.on('Tracing.dataCollected', (e) => trozos.push(...e.value))
const fin = new Promise((r) => cdp.once('Tracing.tracingComplete', r))
await cdp.send('Tracing.start', {
  categories: 'devtools.timeline,disabled-by-default-devtools.timeline,blink,cc,gpu,benchmark,blink.user_timing',
  transferMode: 'ReportEvents',
})
// Marca para alinear el reloj de la traza con performance.now()
const tMarca = await pg.evaluate(() => {
  performance.mark('alinear')
  return performance.getEntriesByName('alinear')[0].startTime
})

const t0 = await pg.evaluate(() => performance.now())
const toque = (type, y) =>
  cdp.send('Input.dispatchTouchEvent', { type, touchPoints: type === 'touchEnd' ? [] : [{ x: 195, y, id: 1 }] })
// `gestos`: un numero (todos hacia adelante) o una lista como "+3,-3,+3".
const plan = String(gestos).includes(',') || String(gestos).startsWith('+') || String(gestos).startsWith('-')
  ? String(gestos).split(',').flatMap((x) => Array(Math.abs(Number(x))).fill(Math.sign(Number(x))))
  : Array(Number(gestos)).fill(1)
for (const dir of plan) {
  if (movil) {
    let y = dir > 0 ? 700 : 196
    await toque('touchStart', y)
    for (let k = 0; k < 14; k++) {
      y -= 36 * dir
      await toque('touchMove', y)
      await pg.waitForTimeout(16)
    }
    await toque('touchEnd', y)
  } else {
    for (let k = 0; k < 10; k++) {
      await pg.mouse.wheel(0, 100 * dir)
      await pg.waitForTimeout(16)
    }
  }
  await pg.waitForTimeout(1300)
}
const t1 = await pg.evaluate(() => performance.now())
await cdp.send('Tracing.end')
await fin
const cuadros = (await pg.evaluate(() => window.__cuadros)).filter(([t]) => t >= t0 && t <= t1)

const marca = trozos.find((e) => e.name === 'alinear')
const off = marca ? marca.ts / 1000 - tMarca : 0 // ms de traza = performance.now() + off
const hilos = new Map()
for (const e of trozos) if (e.ph === 'M' && e.name === 'thread_name') hilos.set(`${e.pid}:${e.tid}`, e.args.name)
const ev = trozos
  .filter((e) => e.ph === 'X' && e.dur)
  .map((e) => ({ n: e.name, h: (hilos.get(`${e.pid}:${e.tid}`) || '?').replace(/\d+$/, ''), a: e.ts / 1000 - off, d: e.dur / 1000 }))

const iv = []
for (let i = 1; i < cuadros.length; i++) iv.push({ t: cuadros[i][0], dt: cuadros[i][0] - cuadros[i - 1][0], p: cuadros[i][1], p0: cuadros[i - 1][1] })
const orden = iv.map((x) => x.dt).sort((a, b) => a - b)
const med = orden[Math.floor(orden.length / 2)]
const largos = iv.filter((x) => x.dt > Math.max(med * 2.2, 30))
const INTERES = /^(FunctionCall|UpdateLayoutTree|Layout|Paint|Layerize|PrePaint|RasterTask|ImageDecodeTask|ImageUploadTask|GPUTask|Commit|ActivateLayerTree|DecodeImage|Decode Image|ImageDecode|V8.GC.*|MajorGC|MinorGC|ParseHTML|EvaluateScript|HitTest)$/
const informe = largos.map((x) => {
  const ini = x.t - x.dt
  const suma = new Map()
  for (const e of ev) {
    if (!INTERES.test(e.n)) continue
    const solape = Math.min(e.a + e.d, x.t) - Math.max(e.a, ini)
    if (solape <= 0) continue
    const k = `${e.h}|${e.n}`
    suma.set(k, (suma.get(k) || 0) + solape)
  }
  return {
    p: `${x.p0.toFixed(3)}→${x.p.toFixed(3)}`,
    ms: Math.round(x.dt),
    en: [...suma].sort((a, b) => b[1] - a[1]).slice(0, 6).map(([k, v]) => `${k} ${v.toFixed(1)}`),
  }
})
writeFileSync(join(salida, 'tirones.json'), JSON.stringify({ med, informe }, null, 1))
console.log('cuadros', iv.length, 'mediana', med.toFixed(1), 'largos', largos.length)
for (const r of informe) console.log(r.ms.toString().padStart(4), 'ms', r.p.padEnd(14), r.en.join(' · '))
await ctx.close()
rmSync(perfil, { recursive: true, force: true })
