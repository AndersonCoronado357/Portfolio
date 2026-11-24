/*
 * Captura tras pulsar una etiqueta del menu (sirve tambien para la v1).
 *   node scripts/foto-nav.mjs <url> <id-vista> <salida.png> [claro|oscuro] [ancho] [alto]
 */
import { chromium } from 'playwright-core'
import { mkdtempSync, rmSync, existsSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const BRAVE = 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe'
const [, , url, texto, salida, tema = 'oscuro', w = '1536', h = '864'] = process.argv
const perfil = mkdtempSync(join(tmpdir(), 'fnav-'))
const ctx = await chromium.launchPersistentContext(perfil, {
  headless: true,
  colorScheme: tema === 'oscuro' ? 'dark' : 'light',
  executablePath: existsSync(BRAVE) ? BRAVE : undefined,
  viewport: { width: Number(w), height: Number(h) },
  deviceScaleFactor: 1,
})
const pg = ctx.pages()[0]
await pg.goto(url, { waitUntil: 'networkidle' })
await pg.waitForTimeout(5000)
await pg.locator(`nav a[href="#${texto}"]`).first().click()
await pg.waitForTimeout(Number(process.env.ESPERA || 4000))
await pg.screenshot({ path: salida })
await ctx.close()
rmSync(perfil, { recursive: true, force: true })
