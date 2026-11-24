// Sonda: abre v1 y v2 y evalua una expresion en ambas tras llevarlas a un punto.
import { chromium } from 'playwright-core'
import { mkdtempSync, rmSync, existsSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
const BRAVE = 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe'
const [, , modo = 'pc', pasos = '0', expr = 'document.title'] = process.argv
const VP = modo === 'movil'
  ? { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 1 }
  : { viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 }
for (const url of ['http://localhost:4321', 'http://localhost:4322']) {
  const perfil = mkdtempSync(join(tmpdir(), 'sonda-'))
  const ctx = await chromium.launchPersistentContext(perfil, { headless: true, colorScheme: 'light', executablePath: existsSync(BRAVE) ? BRAVE : undefined, ...VP })
  const pg = ctx.pages()[0]
  await pg.goto(url, { waitUntil: 'networkidle' })
  await pg.waitForTimeout(4500)
  for (let i = 0; i < Number(pasos); i++) { await pg.keyboard.press('ArrowDown'); await pg.waitForTimeout(1800) }
  await pg.waitForTimeout(1500)
  console.log(url, JSON.stringify(await pg.evaluate(expr), null, 1))
  await ctx.close(); rmSync(perfil, { recursive: true, force: true })
}
