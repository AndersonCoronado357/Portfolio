/*
 * Busca piezas que se quedan donde no deberian y piezas a medio transparentar.
 *
 *   node scripts/residuos.mjs <pc|movil> <desde> <hasta> <paso>
 *
 * En cada punto del recorrido mira, por vista, que contenido se ve de verdad
 * en pantalla (debajo de la franja que tapa el encabezado):
 *  - una vista lejos del punto actual (|p - i| >= 1) no puede tener nada a la
 *    vista;
 *  - ninguna pieza visible puede tener opacidad intermedia (salvo la que el
 *    diseno ya trae en reposo).
 */
import { chromium } from 'playwright-core'
import { mkdtempSync, rmSync, existsSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const BRAVE = 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe'
const [, , modo = 'pc', desde = '0', hasta = '15', paso = '0.01'] = process.argv
const VP = modo === 'movil'
  ? { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 1 }
  : { viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 }
const perfil = mkdtempSync(join(tmpdir(), 'resid-'))
const ctx = await chromium.launchPersistentContext(perfil, { headless: true, colorScheme: 'light', executablePath: existsSync(BRAVE) ? BRAVE : undefined, ...VP })
const pg = ctx.pages()[0]
const errores = []
pg.on('pageerror', (e) => errores.push(e.message))
await pg.goto('http://localhost:4322', { waitUntil: 'networkidle' })
await pg.waitForTimeout(4500)
const VIEW_IDS = await pg.evaluate(async () => (await import('/src/lib/views.js')).VIEW_IDS)
const rango = (id) => {
  const i = VIEW_IDS.indexOf(id)
  if (id === 'tecnologias') return [i, VIEW_IDS.indexOf('tecnologias-2')]
  if (id === 'formacion-2') return [i, VIEW_IDS.indexOf('formacion-3')]
  return [i, i]
}

// Opacidad de diseno en reposo de cada elemento (iconos al 40 %, etc.).
await pg.evaluate(() => {
  window.__base = new Map()
  for (const el of document.querySelectorAll('main section[id] *')) window.__base.set(el, parseFloat(getComputedStyle(el).opacity))
})

const problemas = []
for (let p = Number(desde); p <= Number(hasta) + 1e-9; p += Number(paso)) {
  await pg.evaluate((p) => window.__v2.ir(p), p)
  await pg.waitForTimeout(40)
  const r = await pg.evaluate(() => {
    const ids = [...document.querySelectorAll('main section[id]')].map((s) => s.id)
    const pr = window.__v2.p()
    const W = innerWidth
    const H = innerHeight
    const k = H / (window.__esMovil ? 1920 : 1080)
    const tope = 112 * (W < 700 ? W / 1080 : H / 1080)
    const salida = []
    for (const sec of document.querySelectorAll('main section[id]')) {
      const cs = getComputedStyle(sec)
      if (cs.opacity === '0' || cs.display === 'none' || cs.visibility === 'hidden') continue
      const sr = sec.getBoundingClientRect()
      let vistos = 0
      const medio = []
      for (const el of sec.querySelectorAll('*')) {
        const c = getComputedStyle(el)
        if (c.visibility === 'hidden') continue
        const texto = [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim())
        const media = ['IMG', 'CANVAS', 'VIDEO', 'svg'].includes(el.tagName)
        const fondo = c.backgroundColor !== 'rgba(0, 0, 0, 0)' && c.backgroundColor !== 'transparent'
        if (!texto && !media && !fondo) continue
        const b = el.getBoundingClientRect()
        if (b.width < 2 || b.height < 2) continue
        // Lo que se ve: dentro de la pantalla, debajo del encabezado y dentro
        // de la caja de su vista (que recorta).
        const x0 = Math.max(b.left, sr.left, 0)
        const x1 = Math.min(b.right, sr.right, W)
        const y0 = Math.max(b.top, sr.top, tope)
        const y1 = Math.min(b.bottom, sr.bottom, H)
        if (x1 - x0 < 2 || y1 - y0 < 2) continue
        let op = 1
        for (let n = el; n && n !== sec; n = n.parentElement) op *= parseFloat(getComputedStyle(n).opacity)
        if (op < 0.02) continue
        vistos++
        const base = window.__base.get(el)
        const propia = parseFloat(c.opacity)
        if (op > 0.02 && op < 0.98 && !(base !== undefined && Math.abs(propia - base) < 0.01 && op >= base - 0.01)) {
          medio.push(`${el.tagName.toLowerCase()} op=${op.toFixed(2)} "${(el.textContent || '').trim().slice(0, 24)}"`)
        }
      }
      if (vistos) salida.push({ id: sec.id, i: ids.indexOf(sec.id), vistos, medio: medio.slice(0, 3) })
    }
    return { pr, salida }
  })
  const VIEW = await pg.evaluate(() => [...document.querySelectorAll('main section[id]')].map((s) => s.id))
  for (const s of r.salida) {
    if (s.medio.length) problemas.push(`p=${r.pr.toFixed(3)} TRANSLUCIDO ${s.id}: ${s.medio.join(' | ')}`)
  }
  for (const s of r.salida) {
    const [a, b] = rango(s.id)
    if (!(r.pr > a - 1 && r.pr < b + 1)) problemas.push(`p=${r.pr.toFixed(3)} SOBRA ${s.id} (${s.vistos} piezas a la vista)`)
  }
  void VIEW
}
console.log(problemas.length ? problemas.slice(0, 80).join('\n') : 'sin problemas')
console.log('errores', errores.length, errores.slice(0, 3).join(' | '))
await ctx.close()
rmSync(perfil, { recursive: true, force: true })
