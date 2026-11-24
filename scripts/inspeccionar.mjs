// Lista las piezas animadas de una vista de la v2 en un punto P dado.
//   node scripts/inspeccionar.mjs <pc|movil> <p> <id-vista> [<p> <id> ...]
import { chromium } from 'playwright-core'
import { mkdtempSync, rmSync, existsSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
const BRAVE = 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe'
const [, , modo = 'pc', ...pares] = process.argv
const VP = modo === 'movil'
  ? { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 1 }
  : { viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 }
const perfil = mkdtempSync(join(tmpdir(), 'insp-'))
const ctx = await chromium.launchPersistentContext(perfil, { headless: true, colorScheme: 'light', executablePath: existsSync(BRAVE) ? BRAVE : undefined, ...VP })
const pg = ctx.pages()[0]
await pg.goto('http://localhost:4322', { waitUntil: 'networkidle' })
await pg.waitForTimeout(4500)
for (let k = 0; k < pares.length; k += 2) {
  const p = Number(pares[k]); const id = pares[k + 1]
  await pg.evaluate((p) => window.__v2.ir(p), p)
  await pg.waitForTimeout(400)
  const r = await pg.evaluate((id) => {
    const sec = document.getElementById(id)
    const out = [`display=${sec.style.display || 'block'}`]
    for (const el of sec.querySelectorAll('[data-anim]')) {
      const b = el.getBoundingClientRect()
      const vis = b.right > 0 && b.bottom > 0 && b.left < innerWidth && b.top < innerHeight && b.width > 0
      out.push(`${vis ? 'VE ' : '   '}${el.dataset.anim}${el.dataset.auto !== undefined ? '(auto)' : ''} ${el.tagName.toLowerCase()} [${Math.round(b.left)},${Math.round(b.top)} ${Math.round(b.width)}x${Math.round(b.height)}] ${el.style.transform || ''} ${el.style.clipPath || ''} "${(el.textContent || '').trim().slice(0, 24)}"`)
    }
    return out
  }, id)
  console.log(`== p=${p} ${id}`)
  console.log(r.join('\n'))
}
await ctx.close(); rmSync(perfil, { recursive: true, force: true })
