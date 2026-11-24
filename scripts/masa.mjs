/*
 * Capturas de la masa en reposo, en claro y en oscuro.
 *
 *   node scripts/masa.mjs <pc|movil> <salida> <url> <p> [<p> ...]
 *
 * Con la v2 lleva el recorrido al punto exacto; con la v1 baja con la flecha.
 */
import { chromium } from 'playwright-core'
import { mkdirSync, mkdtempSync, rmSync, writeFileSync, existsSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
const BRAVE = 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe'
const [, , modo = 'pc', salida, url = 'http://localhost:4322', ...pts] = process.argv
mkdirSync(salida, { recursive: true })
const VP = modo === 'movil'
  ? { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 2 }
  : { viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 }
for (const tema of ['light', 'dark']) {
  const perfil = mkdtempSync(join(tmpdir(), 'masa-'))
  const ctx = await chromium.launchPersistentContext(perfil, { headless: true, colorScheme: tema, executablePath: existsSync(BRAVE) ? BRAVE : undefined, ...VP })
  const pg = ctx.pages()[0]
  await pg.goto(url, { waitUntil: 'networkidle' })
  await pg.waitForTimeout(4500)
  const v2 = await pg.evaluate(() => !!window.__v2)
  let actual = 0
  for (const p of pts.map(Number)) {
    if (v2) await pg.evaluate((p) => window.__v2.ir(p), p)
    else while (actual < p) { await pg.keyboard.press('ArrowDown'); actual++; await pg.waitForTimeout(900) }
    await pg.waitForTimeout(1800)
    writeFileSync(join(salida, `${tema}-${p}.png`), await pg.screenshot())
  }
  await ctx.close()
  rmSync(perfil, { recursive: true, force: true })
}
console.log('listo')
