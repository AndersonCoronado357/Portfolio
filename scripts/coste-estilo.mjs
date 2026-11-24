/*
 * Mide cuanto cuesta recalcular el estilo de cada elemento que el recorrido
 * toca en cada cuadro: le cambia la opacidad, fuerza el recalculo y cronometra.
 * Salen primero los mas caros.
 *
 *   node scripts/coste-estilo.mjs <url> <pc|movil> [p=2.5]
 */
import { chromium } from 'playwright-core'
import { mkdtempSync, rmSync, existsSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const BRAVE = 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe'
const [, , url, modo = 'movil', pStr = '2.5'] = process.argv
const movil = modo === 'movil'
const VP = movil
  ? { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 3 }
  : { viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 }
const perfil = mkdtempSync(join(tmpdir(), 'coste-'))
const ctx = await chromium.launchPersistentContext(perfil, {
  headless: true,
  colorScheme: 'light',
  executablePath: existsSync(BRAVE) ? BRAVE : undefined,
  ...VP,
})
const pg = ctx.pages()[0]
await pg.goto(url, { waitUntil: 'networkidle' })
await pg.waitForTimeout(4500)
await pg.evaluate((v) => window.__v2.ir(v), Number(pStr))
await pg.waitForTimeout(2500)
const filas = await pg.evaluate(() => {
  const q = (e) =>
    e.tagName.toLowerCase() +
    (e.id ? '#' + e.id : '') +
    (e.getAttribute('class') ? '.' + e.getAttribute('class').split(' ').slice(0, 3).join('.') : '') +
    (e.dataset.anim ? `[${e.dataset.anim}]` : '')
  const visibles = [...document.querySelectorAll('section.view')].filter((s) => getComputedStyle(s).visibility === 'visible')
  const els = [
    ...visibles,
    ...visibles.flatMap((s) => [...s.querySelectorAll('[data-anim]')]),
    ...document.querySelectorAll('header *'),
    ...document.querySelectorAll('div.z-0 span, div.z-0 svg'),
  ]
  const out = []
  for (const el of els) {
    const ts = []
    const previo = el.style.opacity
    for (let k = 0; k < 15; k++) {
      el.style.opacity = k % 2 ? '0.998' : '0.997'
      const t0 = performance.now()
      getComputedStyle(el).opacity
      ts.push(performance.now() - t0)
    }
    el.style.opacity = previo
    ts.sort((a, b) => a - b)
    out.push({ el: q(el), ms: ts[7], hijos: el.querySelectorAll('*').length })
  }
  return out.sort((a, b) => b.ms - a.ms)
})
const total = filas.reduce((s, f) => s + f.ms, 0)
console.log('elementos', filas.length, 'suma ms', total.toFixed(2))
for (const f of filas.slice(0, 30)) console.log(f.ms.toFixed(3).padStart(7), String(f.hijos).padStart(5), f.el.slice(0, 110))
await ctx.close()
rmSync(perfil, { recursive: true, force: true })
