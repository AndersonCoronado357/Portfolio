/*
 * Saltos del menu en camara lenta: frena las animaciones de GSAP y captura
 * cuadro a cuadro cada salto, de principio a fin, para ver que nada cambie de
 * golpe (ni al empezar ni al terminar).
 *
 *   node scripts/saltos.mjs <pc|movil> <salida> <inicio-p> <id> [<inicio-p> <id> ...]
 */
import { chromium } from 'playwright-core'
import { mkdirSync, mkdtempSync, rmSync, writeFileSync, existsSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
const BRAVE = 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe'
const [, , modo = 'pc', salida, ...pares] = process.argv
mkdirSync(salida, { recursive: true })
const VP = modo === 'movil'
  ? { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 1 }
  : { viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 }
const perfil = mkdtempSync(join(tmpdir(), 'saltos-'))
const ctx = await chromium.launchPersistentContext(perfil, { headless: true, colorScheme: 'light', executablePath: existsSync(BRAVE) ? BRAVE : undefined, ...VP })
const pg = ctx.pages()[0]
const errores = []
pg.on('pageerror', (e) => errores.push(e.message))
await pg.goto('http://localhost:4322', { waitUntil: 'networkidle' })
await pg.waitForTimeout(4500)
await pg.evaluate(async () => {
  const url = performance.getEntriesByType('resource').map((e) => e.name).find((n) => n.includes('/deps/gsap.js'))
  window.__gsap = (await import(url)).default
})
const lista = []
let n = 0
for (let k = 0; k < pares.length; k += 2) {
  const p0 = Number(pares[k]); const id = pares[k + 1]
  await pg.evaluate(() => window.__gsap.globalTimeline.timeScale(1))
  if (!Number.isNaN(p0)) {
    await pg.evaluate((p) => window.__v2.ir(p), p0)
    await pg.waitForTimeout(1500)
  }
  await pg.evaluate(() => window.__gsap.globalTimeline.timeScale(0.07))
  await pg.evaluate((id) => window.__v2.goTo(id), id)
  // Desde un poco antes de que arranque hasta un poco despues de terminar.
  let extra = 0
  for (let j = 0; j < 400; j++) {
    const nombre = `s-${String(n).padStart(4, '0')}.jpg`
    writeFileSync(join(salida, nombre), await pg.screenshot({ type: 'jpeg', quality: 72 }))
    const p = await pg.evaluate(() => window.__v2.p())
    lista.push({ n, p: Number(p.toFixed(4)), salto: `${pares[k]}->${id}`, nombre })
    n++
    const ocupado = await pg.evaluate(() => window.__v2.ocupado())
    if (!ocupado) extra++
    if (extra > 4) break
  }
  console.log('salto', pares[k], '->', id, 'cuadros', lista.filter((x) => x.salto === `${pares[k]}->${id}`).length)
}
writeFileSync(join(salida, 'fotogramas.json'), JSON.stringify({ lista, errores }, null, 1))
console.log('errores', errores.length, errores.slice(0, 3))
await ctx.close()
rmSync(perfil, { recursive: true, force: true })
