/*
 * Que cambia justo cuando el recorrido se asienta en una vista.
 *
 *   node scripts/reposo.mjs <pc|movil> <salida> <desde-p> [url]
 *
 * Deja el recorrido en `desde-p` (cerca de una vista) y suelta: el iman lo
 * lleva al entero. Mientras tanto registra cada cambio de estilo (opacidad,
 * transformacion, visibilidad) y captura la pantalla seguido. Al final dice
 * que se escribio en los ultimos cuadros y cuanto cambio la imagen entre una
 * captura y la siguiente.
 */
import { chromium } from 'playwright-core'
import { mkdirSync, mkdtempSync, rmSync, writeFileSync, existsSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { PNG } from './png.mjs'

const BRAVE = 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe'
const [, , modo = 'pc', salida, desde = '2.93', url = 'http://localhost:4322'] = process.argv
mkdirSync(salida, { recursive: true })
const VP = modo === 'movil'
  ? { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 2 }
  : { viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 }
const perfil = mkdtempSync(join(tmpdir(), 'reposo-'))
const ctx = await chromium.launchPersistentContext(perfil, { headless: true, colorScheme: 'light', executablePath: existsSync(BRAVE) ? BRAVE : undefined, ...VP })
const pg = ctx.pages()[0]
await pg.goto(url, { waitUntil: 'networkidle' })
await pg.waitForTimeout(4500)
await pg.evaluate((p) => window.__v2.ir(p), Number(desde))
await pg.waitForTimeout(30)

await pg.evaluate(() => {
  window.__cambios = []
  const t0 = performance.now()
  const desc = (el) => {
    const sec = el.closest('section[id]')
    const id = el.id ? '#' + el.id : ''
    const txt = (el.textContent || '').trim().slice(0, 18)
    return `${sec ? sec.id : '-'} ${el.tagName.toLowerCase()}${id} "${txt}"`
  }
  const prev = new Map()
  const leer = (el) => ({ op: el.style.opacity, tr: el.style.transform, vis: el.style.visibility, clip: el.style.clipPath })
  for (const el of document.querySelectorAll('*')) prev.set(el, leer(el))
  new MutationObserver((lista) => {
    const t = performance.now() - t0
    for (const m of lista) {
      const el = m.target
      const a = prev.get(el) || {}
      const b = leer(el)
      prev.set(el, b)
      for (const k of ['op', 'tr', 'vis', 'clip']) if (a[k] !== b[k]) window.__cambios.push({ t, k, de: a[k], a: b[k], el: desc(el), p: window.__v2.p() })
    }
  }).observe(document.body, { attributes: true, attributeFilter: ['style'], subtree: true })
})

const capturas = []
const t0 = Date.now()
let quietas = 0
let ultimaP = -1
while (Date.now() - t0 < 6000) {
  const p = await pg.evaluate(() => window.__v2.p())
  const img = await pg.screenshot()
  capturas.push({ p, ms: Date.now() - t0, img })
  if (Math.abs(p - ultimaP) < 1e-7) quietas++
  else quietas = 0
  ultimaP = p
  if (quietas > 6) break
}
const cambios = await pg.evaluate(() => window.__cambios)
const pFinal = capturas[capturas.length - 1].p

// Diferencia entre capturas seguidas
const difs = []
for (let i = 1; i < capturas.length; i++) {
  const A = PNG.leer(capturas[i - 1].img)
  const B = PNG.leer(capturas[i].img)
  let n = 0
  for (let k = 0; k < A.d.length; k += 4) {
    const d = Math.max(Math.abs(A.d[k] - B.d[k]), Math.abs(A.d[k + 1] - B.d[k + 1]), Math.abs(A.d[k + 2] - B.d[k + 2]))
    if (d > 16) n++
  }
  difs.push({ i, p: capturas[i].p, ms: capturas[i].ms, pix: n })
  if (n > 0) writeFileSync(join(salida, `c-${String(i).padStart(3, '0')}.png`), capturas[i].img)
}
writeFileSync(join(salida, `c-000.png`), capturas[0].img)
writeFileSync(join(salida, 'reposo.json'), JSON.stringify({ difs, cambios }, null, 1))

console.log('p final', pFinal, 'capturas', capturas.length)
console.log('diferencias entre capturas (p, pixeles distintos):')
for (const d of difs) console.log(' ', d.p.toFixed(6), d.pix)
// Escrituras de los ultimos 400 ms antes de quedar quieto
const tFin = Math.max(0, ...cambios.map((c) => c.t))
const finales = cambios.filter((c) => c.t > tFin - 400)
const resumen = new Map()
for (const c of finales) {
  const k = `${c.k} ${c.el}`
  resumen.set(k, `${c.de} -> ${c.a}  (p=${c.p.toFixed(6)})`)
}
const ops = cambios.filter((c) => c.k === 'op' || c.k === 'vis')
console.log('cambios de opacidad o visibilidad mientras se asentaba:', ops.length)
for (const c of ops.slice(0, 15)) console.log('  OP', c.el, c.de, '->', c.a, 'p=' + c.p.toFixed(5))
console.log('ultimas escrituras:', finales.length)
for (const [k, v] of [...resumen].slice(0, 60)) console.log(' ', k, '|', v)
await ctx.close()
rmSync(perfil, { recursive: true, force: true })
