/*
 * Mide la fluidez real del recorrido: desliza con el dedo (eventos tactiles
 * de verdad) por varias vistas, con la CPU frenada como en un telefono, y
 * registra cuanto tarda cada cuadro y en que se fue el tiempo.
 *
 *   node scripts/fluidez.mjs <url> <pc|movil> <salida> [freno=4] [gestos=8]
 */
import { chromium } from 'playwright-core'
import { mkdirSync, mkdtempSync, rmSync, writeFileSync, existsSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const BRAVE = 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe'
const [, , url, modo = 'movil', salida, freno = '4', gestos = '8'] = process.argv
mkdirSync(salida, { recursive: true })
const movil = modo === 'movil'
const VP = movil
  ? { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 3 }
  : { viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 }
const perfil = mkdtempSync(join(tmpdir(), 'fluidez-'))
const ctx = await chromium.launchPersistentContext(perfil, {
  headless: true,
  colorScheme: 'light',
  executablePath: existsSync(BRAVE) ? BRAVE : undefined,
  args: ['--enable-gpu-rasterization', '--ignore-gpu-blocklist'],
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
await cdp.send('Emulation.setCPUThrottlingRate', { rate: Number(freno) })

// Registro de cuadros
await pg.evaluate(() => {
  window.__cuadros = []
  const paso = (t) => {
    window.__cuadros.push(t)
    requestAnimationFrame(paso)
  }
  requestAnimationFrame(paso)
})

// Traza del navegador
const trozos = []
cdp.on('Tracing.dataCollected', (e) => trozos.push(...e.value))
const fin = new Promise((r) => cdp.once('Tracing.tracingComplete', r))
await cdp.send('Tracing.start', {
  categories: process.env.DETALLE
    ? 'devtools.timeline,disabled-by-default-devtools.timeline,disabled-by-default-devtools.timeline.stack,disabled-by-default-devtools.timeline.invalidationTracking,blink,cc,viz,gpu,benchmark'
    : 'devtools.timeline,disabled-by-default-devtools.timeline,blink,cc,viz,gpu,benchmark',
  transferMode: 'ReportEvents',
})

if (process.env.DETALLE) {
  await cdp.send('Profiler.enable')
  await cdp.send('Profiler.setSamplingInterval', { interval: 200 })
  await cdp.send('Profiler.start')
}
const t0 = await pg.evaluate(() => performance.now())
const toque = (type, y) =>
  cdp.send('Input.dispatchTouchEvent', { type, touchPoints: type === 'touchEnd' ? [] : [{ x: 195, y, id: 1 }] })
const N = Number(gestos)
for (let g = 0; g < N; g++) {
  if (movil) {
    // Un gesto de ~500 px hacia arriba en ~220 ms, como un pulgar.
    let y = 700
    await toque('touchStart', y)
    for (let k = 0; k < 14; k++) {
      y -= 36
      await toque('touchMove', y)
      await pg.waitForTimeout(16)
    }
    await toque('touchEnd', y)
  } else {
    for (let k = 0; k < 10; k++) {
      await pg.mouse.wheel(0, 100)
      await pg.waitForTimeout(16)
    }
  }
  await pg.waitForTimeout(1300)
}
const t1 = await pg.evaluate(() => performance.now())
const { profile } = process.env.DETALLE ? await cdp.send('Profiler.stop') : {}
await cdp.send('Tracing.end')
await fin
const cuadros = await pg.evaluate(() => window.__cuadros)

// Intervalos entre cuadros mientras habia movimiento
const iv = []
for (let i = 1; i < cuadros.length; i++) if (cuadros[i] >= t0 && cuadros[i] <= t1) iv.push(cuadros[i] - cuadros[i - 1])
iv.sort((a, b) => a - b)
const q = (p) => iv[Math.min(iv.length - 1, Math.floor(iv.length * p))]
const lentos = (ms) => iv.filter((v) => v > ms).length

// Tiempo por tipo de tarea en el hilo principal y en el de composicion
const porNombre = new Map()
const hilos = new Map()
for (const e of trozos) if (e.ph === 'M' && e.name === 'thread_name') hilos.set(`${e.pid}:${e.tid}`, e.args.name)
for (const e of trozos) {
  if (e.ph !== 'X' || !e.dur) continue
  const h = hilos.get(`${e.pid}:${e.tid}`) || '?'
  if (!/CrRendererMain|Compositor|CompositorTileWorker|VizCompositor|CrGpuMain/.test(h)) continue
  const k = `${h.replace(/\d+$/, '')} | ${e.name}`
  porNombre.set(k, (porNombre.get(k) || 0) + e.dur / 1000)
}
const top = [...porNombre].sort((a, b) => b[1] - a[1]).slice(0, 28)

// Funciones de JS que mas tiempo propio se llevan
const propio = new Map()
const dtNodo = new Map()
if (profile) {
  const porId = new Map(profile.nodes.map((n) => [n.id, n]))
  const dts = profile.timeDeltas || []
  for (let i = 0; i < profile.samples.length; i++) dtNodo.set(profile.samples[i], (dtNodo.get(profile.samples[i]) || 0) + (dts[i] || 0))
  for (const [id, us] of dtNodo) {
    const n = porId.get(id)
    const f = n.callFrame
    const k = `${f.functionName || '(anon)'} ${f.url.split('/').pop()}:${f.lineNumber + 1}`
    propio.set(k, (propio.get(k) || 0) + us / 1000)
  }
}
const topJS = [...propio].sort((a, b) => b[1] - a[1]).slice(0, 25)
// Recalculos de estilo y layouts forzados: cuantos elementos y desde donde
let elems = 0
let nRecalc = 0
const forzados = new Map()
for (const e of trozos) {
  if (e.name === 'UpdateLayoutTree' && e.ph === 'X') {
    nRecalc++
    elems += (e.args && e.args.elementCount) || 0
  }
  const st = e.args && e.args.beginData && e.args.beginData.stackTrace
  if ((e.name === 'UpdateLayoutTree' || e.name === 'Layout') && st && st.length) {
    const f = st[0]
    const k = `${e.name} <- ${f.functionName} ${String(f.url).split('/').pop()}:${f.lineNumber}`
    forzados.set(k, (forzados.get(k) || 0) + (e.dur || 0) / 1000)
  }
}

const inval = new Map()
for (const e of trozos) {
  if (e.name !== 'StyleRecalcInvalidationTracking' && e.name !== 'StyleInvalidatorInvalidationTracking') continue
  const d = (e.args && e.args.data) || {}
  const k = `${e.name.replace('InvalidationTracking', '')} ${d.nodeName || '?'} ${d.reason || ''} ${d.extraData || ''} ${(d.invalidationList || []).map((x) => x.classes || x.id || x.attributes || '').join(',')}`
  inval.set(k, (inval.get(k) || 0) + 1)
}
const res = {
  url,
  modo,
  freno: Number(freno),
  duracion: Math.round(t1 - t0),
  cuadros: iv.length,
  fps: Math.round((iv.length / (t1 - t0)) * 1000 * 10) / 10,
  mediana: q(0.5),
  p90: q(0.9),
  p99: q(0.99),
  sobre20: lentos(20),
  sobre34: lentos(34),
  sobre50: lentos(50),
  top: top.map(([k, v]) => [k, Math.round(v)]),
  inval: [...inval].sort((a, b) => b[1] - a[1]).slice(0, 30),
  recalcs: nRecalc,
  elementosPorRecalc: Math.round(elems / (nRecalc || 1)),
  topJS: topJS.map(([k, v]) => [k, Math.round(v)]),
  forzados: [...forzados].sort((a, b) => b[1] - a[1]).slice(0, 12).map(([k, v]) => [k, Math.round(v)]),
}
writeFileSync(join(salida, 'fluidez.json'), JSON.stringify(res, null, 1))
console.log(JSON.stringify({ ...res, top: undefined, topJS: undefined, forzados: undefined, inval: undefined }))
for (const [k, v] of res.top) console.log(String(v).padStart(7), 'ms ', k)
console.log('--- JS')
for (const [k, v] of res.topJS) console.log(String(v).padStart(7), 'ms ', k)
console.log('--- invalidaciones')
for (const [k, v] of res.inval) console.log(String(v).padStart(7), k)
console.log('--- forzados')
for (const [k, v] of res.forzados) console.log(String(v).padStart(7), 'ms ', k)
await ctx.close()
rmSync(perfil, { recursive: true, force: true })
