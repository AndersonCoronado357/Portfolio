/*
 * Cuadros a mitad de camino: lleva la v1 con la rueda hasta un punto
 * intermedio (la v1 no tiene atajo), lee donde quedo de verdad y pone la v2
 * exactamente ahi. Guarda las dos capturas para compararlas lado a lado.
 *
 *   node scripts/medio.mjs <pc|movil> <salida> 0.5 1.5 ...
 */
import { chromium } from 'playwright-core'
import { mkdirSync, mkdtempSync, rmSync, writeFileSync, existsSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
const BRAVE = 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe'
const [, , modo = 'pc', salida, ...pts] = process.argv
mkdirSync(salida, { recursive: true })
const VP = modo === 'movil'
  ? { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 1 }
  : { viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 }
async function abrir(url) {
  const perfil = mkdtempSync(join(tmpdir(), 'medio-'))
  const ctx = await chromium.launchPersistentContext(perfil, { headless: true, colorScheme: 'light', executablePath: existsSync(BRAVE) ? BRAVE : undefined, ...VP })
  const pg = ctx.pages()[0]
  await pg.goto(url, { waitUntil: 'networkidle' })
  await pg.waitForTimeout(4500)
  await pg.evaluate(async () => { window.__ps = await import('/src/scroll/progreso.js') })
  return { ctx, pg, perfil }
}
const pr = (pg) => pg.evaluate(() => window.__ps.scrollState.pr)
const v1 = await abrir('http://localhost:4321')
const v2 = await abrir('http://localhost:4322')
await v1.pg.mouse.move(960, 540)
const res = []
for (const t of pts.map(Number)) {
  // Acercamiento con la rueda; el paso se ajusta segun lo que avanzo.
  let paso = 60
  for (let k = 0; k < 80; k++) {
    const a = await pr(v1.pg)
    const falta = t - a
    if (Math.abs(falta) < 0.012) break
    const dy = Math.sign(falta) * Math.max(4, Math.min(paso, Math.abs(falta) * 400))
    await v1.pg.mouse.wheel(0, dy)
    await v1.pg.waitForTimeout(220)
    const b = await pr(v1.pg)
    if (Math.abs(b - a) > 1e-4) paso = Math.max(4, Math.min(200, (dy / (b - a)) * falta * 0.5))
  }
  // Que termine de asentarse.
  let ult = -1
  for (let k = 0; k < 30; k++) {
    const a = await pr(v1.pg)
    if (Math.abs(a - ult) < 0.0005) break
    ult = a
    await v1.pg.waitForTimeout(150)
  }
  const real = await pr(v1.pg)
  await v2.pg.evaluate((p) => window.__v2.ir(p), real)
  await v2.pg.waitForTimeout(400)
  const n = real.toFixed(3)
  writeFileSync(join(salida, `medio-${n}-v1.png`), await v1.pg.screenshot())
  writeFileSync(join(salida, `medio-${n}-v2.png`), await v2.pg.screenshot())
  res.push({ pedido: t, real: Number(n) })
  console.log('punto', t, '->', n)
}
writeFileSync(join(salida, 'medio.json'), JSON.stringify(res, null, 1))
for (const v of [v1, v2]) { await v.ctx.close(); rmSync(v.perfil, { recursive: true, force: true }) }
