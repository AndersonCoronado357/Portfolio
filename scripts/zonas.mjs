/*
 * Fluidez por zona: recorre TODO el sitio con el dedo (gestos tactiles
 * reales, ida y vuelta, dos pasadas) y dice, para cada tramo del recorrido,
 * cuanto tardan los cuadros y cuantos tirones hay. Asi se ve si hay zonas
 * mas lentas que otras y si los tirones son solo de la primera pasada.
 *
 *   node scripts/zonas.mjs <url> [freno=4] [pasadas=2] [salida.json]
 */
import { chromium } from 'playwright-core'
import { mkdtempSync, rmSync, existsSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const BRAVE = 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe'
const [, , url, freno = '4', pasadas = '2', salida] = process.argv
const perfil = mkdtempSync(join(tmpdir(), 'zonas-'))
const ctx = await chromium.launchPersistentContext(perfil, {
  headless: true,
  colorScheme: 'light',
  executablePath: existsSync(BRAVE) ? BRAVE : undefined,
  viewport: { width: 390, height: 844 },
  isMobile: true,
  hasTouch: true,
  deviceScaleFactor: 3,
})
const pg = ctx.pages()[0]
const cdp = await ctx.newCDPSession(pg)
await pg.goto(url, { waitUntil: 'networkidle' })
await pg.waitForTimeout(5000)
const vistas = await pg.evaluate(() => [...document.querySelectorAll('section.view')].map((s) => s.id))
await cdp.send('Emulation.setCPUThrottlingRate', { rate: Number(freno) })
await pg.evaluate(() => {
  window.__reg = []
  const f = (t) => {
    window.__reg.push([t, window.__v2.p()])
    requestAnimationFrame(f)
  }
  requestAnimationFrame(f)
})
const toque = (type, y) =>
  cdp.send('Input.dispatchTouchEvent', { type, touchPoints: type === 'touchEnd' ? [] : [{ x: 195, y, id: 1 }] })
// Un gesto de pulgar: 260 px en ~200 ms
async function gesto(dir) {
  let y = dir > 0 ? 650 : 250
  await toque('touchStart', y)
  for (let k = 0; k < 10; k++) {
    y -= 26 * dir
    await toque('touchMove', y)
    await pg.waitForTimeout(20)
  }
  await toque('touchEnd', y)
  await pg.waitForTimeout(450)
}
const marcas = []
const MAX = await pg.evaluate(() => {
  // contacto es el final del recorrido normal
  return [...document.querySelectorAll('section.view')].findIndex((s) => s.id === 'contacto')
})
for (let pas = 0; pas < Number(pasadas); pas++) {
  marcas.push(await pg.evaluate(() => performance.now()))
  for (let k = 0; k < 200; k++) {
    await gesto(1)
    if ((await pg.evaluate(() => window.__v2.p())) >= MAX - 0.02) break
  }
  for (let k = 0; k < 200; k++) {
    await gesto(-1)
    if ((await pg.evaluate(() => window.__v2.p())) <= 0.02) break
  }
}
marcas.push(await pg.evaluate(() => performance.now()))
const reg = await pg.evaluate(() => window.__reg)
await ctx.close()
rmSync(perfil, { recursive: true, force: true })

// Solo cuadros en movimiento (P cambio respecto al anterior)
const res = []
for (let pas = 0; pas < marcas.length - 1; pas++) {
  const zonas = new Map()
  for (let i = 1; i < reg.length; i++) {
    const [t, p] = reg[i]
    const [t0, p0] = reg[i - 1]
    if (t < marcas[pas] || t > marcas[pas + 1]) continue
    if (Math.abs(p - p0) < 1e-4) continue
    const z = Math.floor(Math.min(p, p0) * 2) / 2
    if (!zonas.has(z)) zonas.set(z, [])
    zonas.get(z).push(t - t0)
  }
  for (const [z, iv] of [...zonas].sort((a, b) => a[0] - b[0])) {
    iv.sort((a, b) => a - b)
    const q = (x) => iv[Math.min(iv.length - 1, Math.floor(iv.length * x))]
    res.push({
      pasada: pas + 1,
      zona: `${z.toFixed(1)} ${vistas[Math.floor(z)]}${z % 1 ? ' > ' + vistas[Math.floor(z) + 1] : ''}`,
      n: iv.length,
      mediana: Math.round(q(0.5)),
      p90: Math.round(q(0.9)),
      max: Math.round(iv[iv.length - 1]),
      sobre50: iv.filter((v) => v > 50).length,
      sobre100: iv.filter((v) => v > 100).length,
    })
  }
}
if (salida) writeFileSync(salida, JSON.stringify(res, null, 1))
for (const r of res)
  console.log(
    `p${r.pasada}`,
    r.zona.padEnd(32),
    'n',
    String(r.n).padStart(4),
    'med',
    String(r.mediana).padStart(4),
    'p90',
    String(r.p90).padStart(4),
    'max',
    String(r.max).padStart(5),
    '>50',
    String(r.sobre50).padStart(3),
    '>100',
    String(r.sobre100).padStart(3),
  )
