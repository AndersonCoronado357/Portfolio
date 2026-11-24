/*
 * Cuenta cuantas escrituras de estilo (y de atributos) hace la pagina por
 * cuadro mientras el recorrido avanza, agrupadas por elemento y propiedad.
 *
 *   node scripts/escrituras.mjs <url> <pc|movil> [desde=2] [hasta=4]
 */
import { chromium } from 'playwright-core'
import { mkdtempSync, rmSync, existsSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const BRAVE = 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe'
const [, , url, modo = 'movil', desde = '2', hasta = '4'] = process.argv
const movil = modo === 'movil'
const VP = movil
  ? { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 3 }
  : { viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 }
const perfil = mkdtempSync(join(tmpdir(), 'escr-'))
const ctx = await chromium.launchPersistentContext(perfil, {
  headless: true,
  colorScheme: 'light',
  executablePath: existsSync(BRAVE) ? BRAVE : undefined,
  ...VP,
})
const pg = ctx.pages()[0]
await pg.addInitScript(() => {
  window.__cuenta = new Map()
  window.__contar = false
  const clave = (el) => {
    let k = el.__k
    if (!k) {
      const c = (el.getAttribute && el.getAttribute('class')) || ''
      let zona = ''
      let p = el
      while (p && !zona) {
        if (p.tagName === 'HEADER') zona = 'header'
        else if (p.tagName === 'SECTION') zona = 'sec'
        else if (p.getAttribute && p.getAttribute('style') && /goo-masa/.test(p.getAttribute('style'))) zona = 'goo'
        p = p.parentElement
      }
      k = el.__k = `${zona || '-'} ${el.tagName} ${c.slice(0, 40)}`
    }
    return k
  }
  const parse = (t) => {
    const m = new Map()
    for (const d of (t || '').split(';')) {
      const k = d.indexOf(':')
      if (k > 0) m.set(d.slice(0, k).trim(), d.slice(k + 1).trim())
    }
    return m
  }
  const mo = new MutationObserver((recs) => {
    if (!window.__contar) return
    const porEl = new Map()
    for (const r of recs) {
      if (r.attributeName !== 'style') continue
      if (!porEl.has(r.target)) porEl.set(r.target, [])
      porEl.get(r.target).push(r.oldValue)
    }
    for (const [el, olds] of porEl) {
      const seq = [...olds, el.getAttribute('style')]
      for (let i = 0; i < olds.length; i++) {
        const a = parse(seq[i])
        const b = parse(seq[i + 1])
        let prop = '?'
        for (const [k, v] of b) if (a.get(k) !== v) prop = k
        for (const k of a.keys()) if (!b.has(k)) prop = k
        const kk = `${clave(el)} | ${prop}`
        window.__cuenta.set(kk, (window.__cuenta.get(kk) || 0) + 1)
      }
    }
  })
  document.addEventListener('DOMContentLoaded', () =>
    mo.observe(document.documentElement, { subtree: true, attributes: true, attributeFilter: ['style'], attributeOldValue: true }),
  )
  const sa = Element.prototype.setAttribute
  Element.prototype.setAttribute = function (n, v) {
    if (window.__contar) {
      const k = `${clave(this)} | @${n}`
      window.__cuenta.set(k, (window.__cuenta.get(k) || 0) + 1)
    }
    return sa.call(this, n, v)
  }
})
await pg.goto(url, { waitUntil: 'networkidle' })
await pg.waitForTimeout(4500)
await pg.evaluate((v) => window.__v2.ir(v), Number(desde))
await pg.waitForTimeout(1500)
const N = 120
const total = await pg.evaluate(
  ([a, b, N]) =>
    new Promise((r) => {
      window.__contar = true
      let k = 0
      const paso = () => {
        k++
        window.__v2.ir(a + ((b - a) * k) / N)
        if (k < N) requestAnimationFrame(paso)
        else
          requestAnimationFrame(() => {
            window.__contar = false
            r([...window.__cuenta])
          })
      }
      requestAnimationFrame(paso)
    }),
  [Number(desde), Number(hasta), N],
)
total.sort((a, b) => b[1] - a[1])
const suma = total.reduce((s, [, v]) => s + v, 0)
console.log('escrituras por cuadro:', (suma / N).toFixed(1))
const porZona = new Map()
for (const [k, v] of total) {
  const z = k.split(' ')[0]
  porZona.set(z, (porZona.get(z) || 0) + v)
}
for (const [z, v] of porZona) console.log('  zona', z, (v / N).toFixed(1))
for (const [k, v] of total.slice(0, 45)) console.log((v / N).toFixed(2).padStart(7), k)
await ctx.close()
rmSync(perfil, { recursive: true, force: true })
