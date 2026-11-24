/*
 * Busca en que puntos del recorrido una pieza de la masa queda encima de la
 * barra de Experiencia (PC), para varios tamanos de ventana.
 *   node scripts/choque-barra.mjs <url> [desde=7] [hasta=9.5]
 */
import { chromium } from 'playwright-core'
import { mkdtempSync, rmSync, existsSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const BRAVE = 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe'
const [, , url, desde = '7', hasta = '9.5'] = process.argv
const TAMANOS = [[1536, 864], [1920, 955], [1536, 730], [1366, 657], [1280, 800], [1440, 900], [1920, 1080], [1280, 950]]
const perfil = mkdtempSync(join(tmpdir(), 'choque-'))
const ctx = await chromium.launchPersistentContext(perfil, {
  headless: true,
  colorScheme: 'dark',
  executablePath: existsSync(BRAVE) ? BRAVE : undefined,
  viewport: { width: 1536, height: 864 },
})
const pg = ctx.pages()[0]
await pg.goto(url, { waitUntil: 'networkidle' })
await pg.waitForTimeout(4500)
for (const [w, h] of TAMANOS) {
  await pg.setViewportSize({ width: w, height: h })
  await pg.waitForTimeout(600)
  const res = []
  for (let p = Number(desde); p <= Number(hasta) + 1e-9; p += 0.05) {
    await pg.evaluate((v) => window.__v2.ir(v), p)
    await pg.waitForTimeout(90)
    const r = await pg.evaluate(() => {
      const sec = document.getElementById('experiencia')
      const barra = sec.querySelector('[data-anim="fill"]') || sec.querySelector('[data-anim="track"]')
      const b = barra.getBoundingClientRect()
      const op = Number(getComputedStyle(sec).opacity)
      const raiz = document.querySelector('[aria-hidden="true"].pointer-events-none.absolute.inset-0.z-0')
      const piezas = [...raiz.querySelectorAll('span')]
      const choques = []
      piezas.forEach((el, i) => {
        const cs = getComputedStyle(el)
        if (cs.visibility === 'hidden' || cs.backgroundColor === 'rgba(0, 0, 0, 0)') return
        const q = el.getBoundingClientRect()
        if (q.width < 2) return
        // circulo: centro y radio
        const cx = q.left + q.width / 2
        const cy = q.top + q.height / 2
        const rr = Math.min(q.width, q.height) / 2
        // distancia del centro al rectangulo de la barra
        const dx = Math.max(b.left - cx, 0, cx - b.right)
        const dy = Math.max(b.top - cy, 0, cy - b.bottom)
        if (Math.hypot(dx, dy) < rr) choques.push(`${el.parentElement === raiz.children[1] ? 'goo' : 'act'}${i}:${Math.round(cx)},${Math.round(cy)} r${Math.round(rr)}`)
      })
      return { op: op.toFixed(2), barra: `${Math.round(b.left)},${Math.round(b.top)}-${Math.round(b.bottom)} h${Math.round(b.height)}`, choques }
    })
    if (r.choques.length && Number(r.op) > 0.05) res.push(`p=${p.toFixed(2)} op=${r.op} barra ${r.barra} :: ${r.choques.join(' ')}`)
  }
  console.log(`\n== ${w}x${h}: ${res.length} puntos`)
  for (const l of res) console.log('  ' + l)
}
await ctx.close()
rmSync(perfil, { recursive: true, force: true })
