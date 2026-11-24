/*
 * Prueba del filtro de la masa: con la escena quieta a mitad de un paso entre
 * vistas, cambia solo el desenfoque (stdDeviation) o mueve la capa fracciones
 * de pixel, y mide cuanta masa se ve en cada caso. Si la forma salta de golpe
 * con un cambio minimo, el parpadeo sale del filtro y no del movimiento.
 *
 *   node scripts/sigma.mjs <url> <pc|movil> <salida> [p=2.5]
 */
import { chromium } from 'playwright-core'
import { mkdirSync, mkdtempSync, rmSync, writeFileSync, existsSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { PNG } from './png.mjs'

const BRAVE = 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe'
const [, , url, modo = 'movil', salida, pStr = '2.5'] = process.argv
mkdirSync(salida, { recursive: true })
const movil = modo === 'movil'
const VP = movil
  ? { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 3 }
  : { viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 }
const perfil = mkdtempSync(join(tmpdir(), 'sigma-'))
const ctx = await chromium.launchPersistentContext(perfil, {
  headless: true,
  colorScheme: 'light',
  executablePath: existsSync(BRAVE) ? BRAVE : undefined,
  args: (process.env.ARGS || '--enable-gpu-rasterization --ignore-gpu-blocklist').split(' ').filter(Boolean),
  ...VP,
})
const pg = ctx.pages()[0]
await pg.goto(url, { waitUntil: 'networkidle' })
await pg.waitForTimeout(4500)
await pg.evaluate((v) => window.__v2.ir(v), Number(pStr))
await pg.waitForTimeout(2500)

// Solo la masa: se esconde el contenido y el encabezado para medir limpio.
await pg.evaluate(() => {
  for (const el of document.querySelectorAll('main, header, .grano, img')) el.style.visibility = 'hidden'
})
const info = await pg.evaluate(() => {
  const b = document.querySelector('feGaussianBlur')
  const goo = document.querySelector('[style*="goo-masa"]')
  const col = goo && goo.firstElementChild ? getComputedStyle(goo.firstElementChild).backgroundColor : ''
  return { sd: b.getAttribute('stdDeviation'), col }
})
console.log('estado', info)
const m = info.col.match(/\d+/g).map(Number)

const area = (buf) => {
  const a = PNG.leer(buf)
  let n = 0
  for (let k = 0; k < a.d.length; k += 4) {
    const d = Math.abs(a.d[k] - m[0]) + Math.abs(a.d[k + 1] - m[1]) + Math.abs(a.d[k + 2] - m[2])
    if (d < 60) n++
  }
  return { n, img: a }
}
const diff = (A, B) => {
  let n = 0
  for (let k = 0; k < A.d.length; k += 4) {
    const a = Math.abs(A.d[k] - m[0]) + Math.abs(A.d[k + 1] - m[1]) + Math.abs(A.d[k + 2] - m[2]) < 60
    const b = Math.abs(B.d[k] - m[0]) + Math.abs(B.d[k + 1] - m[1]) + Math.abs(B.d[k + 2] - m[2]) < 60
    if (a !== b) n++
  }
  return n
}

const filas = []
// 1) solo el desenfoque, en pasos finos
let prev = null
const base = Number(info.sd)
for (let s = 6; s <= 20.001; s += 0.25) {
  await pg.evaluate((v) => document.querySelector('feGaussianBlur').setAttribute('stdDeviation', String(v)), s)
  await pg.waitForTimeout(120)
  const buf = await pg.screenshot()
  const r = area(buf)
  const cambio = prev ? diff(prev, r.img) : 0
  filas.push({ prueba: 'sigma', v: Number(s.toFixed(2)), area: r.n, cambio })
  if (process.env.GUARDAR) writeFileSync(join(salida, `s-${s.toFixed(2)}.png`), buf)
  prev = r.img
}
// 2) la capa movida fracciones de pixel, con el desenfoque fijo
await pg.evaluate((v) => document.querySelector('feGaussianBlur').setAttribute('stdDeviation', String(v)), base)
prev = null
for (let dx = 0; dx <= 8.001; dx += 0.25) {
  await pg.evaluate((v) => {
    document.querySelector('[style*="goo-masa"]').style.translate = `${v}px 0px`
  }, dx)
  await pg.waitForTimeout(120)
  const buf = await pg.screenshot()
  const r = area(buf)
  const cambio = prev ? diff(prev, r.img) : 0
  filas.push({ prueba: 'dx', v: Number(dx.toFixed(2)), area: r.n, cambio })
  prev = r.img
}
writeFileSync(join(salida, 'sigma.json'), JSON.stringify({ info, filas }, null, 1))
for (const f of filas) console.log(f.prueba.padEnd(6), String(f.v).padStart(6), String(f.area).padStart(9), String(f.cambio).padStart(7))
await ctx.close()
rmSync(perfil, { recursive: true, force: true })
