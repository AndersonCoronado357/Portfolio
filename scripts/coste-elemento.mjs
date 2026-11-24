/*
 * Cuanto cuesta recalcular el estilo de cada tipo de elemento que se mueve
 * en el recorrido: le cambia el transform N veces forzando el recalculo y
 * mide el tiempo medio. Asi se ve si algun elemento es anormalmente caro.
 *
 *   node scripts/coste-elemento.mjs <url> <pc|movil> [p=2.5]
 */
import { chromium } from 'playwright-core'
import { mkdtempSync, rmSync, existsSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const BRAVE = 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe'
const [, , url, modo = 'movil', p = '2.5'] = process.argv
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
await pg.evaluate((v) => window.__v2.ir(v), Number(p))
await pg.waitForTimeout(1500)
if (process.env.SIN_PROPERTY) {
  const n = await pg.evaluate(() => {
    let n = 0
    for (const sh of document.styleSheets) {
      const quitar = (lista, borrar) => {
        for (let i = lista.length - 1; i >= 0; i--) {
          const r = lista[i]
          if (r instanceof CSSPropertyRule) { borrar(i); n++ }
          else if (r.cssRules) quitar(r.cssRules, (j) => r.deleteRule(j))
        }
      }
      try { quitar(sh.cssRules, (i) => sh.deleteRule(i)) } catch {}
    }
    return n
  })
  console.log('@property quitadas', n)
  await pg.waitForTimeout(500)
}
const res = await pg.evaluate(() => {
  const grupos = {
    actor: [...document.querySelectorAll('span.absolute.rounded-full')].filter((e) => !e.closest('section') && !e.closest('header')),
    gooCirc: [...document.querySelectorAll('[style*="goo-masa"] > span')],
    seccion: [...document.querySelectorAll('section.view')].filter((s) => getComputedStyle(s).visibility === 'visible'),
    pieza: [...document.querySelectorAll('section.view [data-anim]')].filter((e) => e.closest('section').style.visibility === 'visible'),
    raizMasa: [document.querySelector('[style*="goo-masa"]')?.parentElement],
    header: [...document.querySelectorAll('header *')].slice(0, 20),
  }
  const out = {}
  for (const [k, els] of Object.entries(grupos)) {
    const lista = els.filter(Boolean).slice(0, 12)
    if (!lista.length) continue
    let tot = 0
    let n = 0
    const desc = []
    for (const el of lista) {
      const prev = el.style.transform
      const base = prev && prev !== 'none' ? prev : ''
      // calentar
      for (let i = 0; i < 20; i++) {
        el.style.transform = `${base} translateX(${i % 2 ? 0.01 : 0}px)`
        void getComputedStyle(el).opacity
      }
      const t0 = performance.now()
      const R = 200
      for (let i = 0; i < R; i++) {
        el.style.transform = `${base} translateX(${i % 2 ? 0.01 : 0}px)`
        void getComputedStyle(el).opacity
      }
      const dt = (performance.now() - t0) / R
      el.style.transform = prev
      tot += dt
      n++
      desc.push(el.querySelectorAll('*').length)
    }
    out[k] = { n, usPorEscritura: Math.round((tot / n) * 1000), hijos: desc.slice(0, 6) }
  }
  // Referencia: un elemento suelto recien creado
  const d = document.createElement('div')
  document.body.appendChild(d)
  const t0 = performance.now()
  for (let i = 0; i < 400; i++) {
    d.style.transform = `translateX(${i % 2}px)`
    void getComputedStyle(d).opacity
  }
  out.divSuelto = { usPorEscritura: Math.round(((performance.now() - t0) / 400) * 1000) }
  d.remove()
  out.elementos = document.querySelectorAll('*').length
  return out
})
console.log(JSON.stringify(res, null, 1))
await ctx.close()
rmSync(perfil, { recursive: true, force: true })
