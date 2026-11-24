/*
 * Recorrido fotograma a fotograma de la v2: avanza P en pasos fijos y captura
 * cada paso. Sirve para buscar saltos (un cuadro muy distinto de sus vecinos)
 * y apariciones o desapariciones de un solo cuadro.
 *
 *   node scripts/fotogramas.mjs <pc|movil> <salida> <desde> <hasta> <paso>
 */
import { chromium } from 'playwright-core'
import { mkdirSync, mkdtempSync, rmSync, writeFileSync, existsSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
const BRAVE = 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe'
const [, , modo = 'pc', salida, desde = '0', hasta = '15', paso = '0.025', url = 'http://localhost:4322'] = process.argv
mkdirSync(salida, { recursive: true })
const VP = modo === 'movil'
  ? { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 1 }
  : { viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 }
const perfil = mkdtempSync(join(tmpdir(), 'foto-'))
const ctx = await chromium.launchPersistentContext(perfil, { headless: true, colorScheme: 'light', executablePath: existsSync(BRAVE) ? BRAVE : undefined, ...VP })
const pg = ctx.pages()[0]
const errores = []
pg.on('pageerror', (e) => errores.push(e.message))
await pg.goto(url, { waitUntil: 'networkidle' })
await pg.waitForTimeout(4500)
await pg.evaluate((p) => window.__v2.ir(p), Number(desde))
await pg.waitForTimeout(1500)
let n = 0
const lista = []
for (let p = Number(desde); p <= Number(hasta) + 1e-9; p += Number(paso)) {
  await pg.evaluate((p) => window.__v2.ir(p), p)
  await pg.waitForTimeout(90)
  const nombre = `f-${String(n).padStart(4, '0')}.jpg`
  writeFileSync(join(salida, nombre), await pg.screenshot({ type: 'jpeg', quality: 72 }))
  lista.push({ n, p: Number(p.toFixed(4)), nombre })
  n++
}
writeFileSync(join(salida, 'fotogramas.json'), JSON.stringify({ lista, errores }, null, 1))
console.log('cuadros', n, 'errores', errores.length)
await ctx.close()
rmSync(perfil, { recursive: true, force: true })
