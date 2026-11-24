/*
 * Captura de un punto exacto del recorrido.
 *   node scripts/foto.mjs <url> <p> <salida.png> [pc|movil] [claro|oscuro]
 */
import { chromium } from 'playwright-core'
import { mkdtempSync, rmSync, existsSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const BRAVE = 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe'
const [, , url, p, salida, modo = 'pc', tema = 'oscuro'] = process.argv
const perfil = mkdtempSync(join(tmpdir(), 'foto-'))
const movil = modo === 'movil'
const ctx = await chromium.launchPersistentContext(perfil, {
  headless: true,
  colorScheme: tema === 'oscuro' ? 'dark' : 'light',
  executablePath: existsSync(BRAVE) ? BRAVE : undefined,
  viewport: movil ? { width: 390, height: 844 } : { width: Number(process.env.W || 1536), height: Number(process.env.H || 864) },
  isMobile: movil,
  hasTouch: movil,
  deviceScaleFactor: movil ? 2 : 1,
})
const pg = ctx.pages()[0]
await pg.goto(url, { waitUntil: 'networkidle' })
await pg.waitForTimeout(4500)
await pg.evaluate((v) => window.__v2.ir(Number(v)), p)
await pg.waitForTimeout(2500)
await pg.screenshot({ path: salida })
await ctx.close()
rmSync(perfil, { recursive: true, force: true })
