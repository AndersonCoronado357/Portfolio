/*
 * Imagen para compartir el enlace (og:image): captura real del Inicio en PC,
 * 1200x630, ya asentado.
 *   node scripts/og.mjs <url> <salida.png> [claro|oscuro]
 */
import { chromium } from 'playwright-core'
import { mkdtempSync, rmSync, existsSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const BRAVE = 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe'
const [, , url, salida, tema = 'claro'] = process.argv
const perfil = mkdtempSync(join(tmpdir(), 'og-'))
const ctx = await chromium.launchPersistentContext(perfil, {
  headless: true,
  colorScheme: tema === 'oscuro' ? 'dark' : 'light',
  executablePath: existsSync(BRAVE) ? BRAVE : undefined,
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 1,
})
const pg = ctx.pages()[0]
await pg.goto(url, { waitUntil: 'networkidle' })
await pg.waitForTimeout(8000)
await pg.screenshot({ path: salida })
await ctx.close()
rmSync(perfil, { recursive: true, force: true })
