/*
 * Hoja de cuadros: capturas en varios puntos del recorrido (celular).
 *   node scripts/hoja.mjs <url> <carpeta> <p1> <p2> ...
 */
import { chromium } from 'playwright-core'
import { mkdtempSync, rmSync, existsSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const BRAVE = 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe'
const [, , url, dir, ...ps] = process.argv
const perfil = mkdtempSync(join(tmpdir(), 'hoja-'))
const ctx = await chromium.launchPersistentContext(perfil, {
  headless: true,
  colorScheme: process.env.TEMA === 'oscuro' ? 'dark' : 'light',
  executablePath: existsSync(BRAVE) ? BRAVE : undefined,
  viewport: { width: 390, height: 844 },
  isMobile: true,
  hasTouch: true,
  deviceScaleFactor: 1,
})
const pg = ctx.pages()[0]
await pg.goto(url, { waitUntil: 'networkidle' })
await pg.waitForTimeout(4500)
for (const p of ps) {
  await pg.evaluate((v) => window.__v2.ir(Number(v)), p)
  await pg.waitForTimeout(700)
  await pg.screenshot({ path: join(dir, `h-${p}.png`) })
}
await ctx.close()
rmSync(perfil, { recursive: true, force: true })
