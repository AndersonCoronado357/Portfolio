// Compara el estado final del hover de la maqueta en v1 y v2.
import { chromium } from 'playwright-core'
import { mkdtempSync, rmSync, existsSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
const BRAVE = 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe'
const salida = process.argv[2]
for (const [n, url] of [['v1', 'http://localhost:4321'], ['v2', 'http://localhost:4322']]) {
  const perfil = mkdtempSync(join(tmpdir(), 'hov-'))
  const ctx = await chromium.launchPersistentContext(perfil, { headless: true, colorScheme: 'light', executablePath: existsSync(BRAVE) ? BRAVE : undefined, viewport: { width: 1920, height: 1080 } })
  const pg = ctx.pages()[0]
  await pg.goto(url, { waitUntil: 'networkidle' })
  await pg.waitForTimeout(4500)
  for (let i = 0; i < 2; i++) { await pg.keyboard.press('ArrowDown'); await pg.waitForTimeout(2200) }
  const caja = await pg.evaluate(() => { const r = document.querySelector('#proyectos a[data-anim="nave"]').getBoundingClientRect(); return { x: r.x, y: r.y, w: r.width, h: r.height } })
  await pg.mouse.move(caja.x + caja.w / 2, caja.y + caja.h / 3)
  await pg.waitForTimeout(260)
  writeFileSync(join(salida, `hover-${n}-medio.png`), await pg.screenshot({ clip: { x: caja.x, y: caja.y, width: caja.w, height: caja.h } }))
  await pg.waitForTimeout(1200)
  writeFileSync(join(salida, `hover-${n}-fin.png`), await pg.screenshot({ clip: { x: caja.x, y: caja.y, width: caja.w, height: caja.h } }))
  await ctx.close(); rmSync(perfil, { recursive: true, force: true })
}
