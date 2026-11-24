/*
 * Cuanto se mueve cada cosa por pixel de dedo en el celular: en una vista
 * normal y dentro de las listas (Tecnologias, Cursos).
 *   node scripts/listas-medida.mjs <url>
 */
import { chromium } from 'playwright-core'
import { mkdtempSync, rmSync, existsSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const BRAVE = 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe'
const [, , url] = process.argv
const perfil = mkdtempSync(join(tmpdir(), 'lmed-'))
const ctx = await chromium.launchPersistentContext(perfil, {
  headless: true,
  colorScheme: 'light',
  executablePath: existsSync(BRAVE) ? BRAVE : undefined,
  viewport: { width: 390, height: 844 },
  isMobile: true,
  hasTouch: true,
  deviceScaleFactor: 2,
})
const pg = ctx.pages()[0]
const cdp = await ctx.newCDPSession(pg)
await pg.goto(url, { waitUntil: 'networkidle' })
await pg.waitForTimeout(4500)
const ids = await pg.evaluate(() => [...document.querySelectorAll('section.view')].map((s) => s.id))
console.log(ids.map((id, i) => `${i}:${id}`).join(' '))
const toque = (type, y) => cdp.send('Input.dispatchTouchEvent', { type, touchPoints: type === 'touchEnd' ? [] : [{ x: 195, y, id: 1 }] })
async function gesto(px) {
  let y = px > 0 ? 700 : 150
  await toque('touchStart', y)
  const n = 12
  for (let k = 0; k < n; k++) {
    y -= px / n
    await toque('touchMove', y)
    await pg.waitForTimeout(16)
  }
  await toque('touchEnd', y)
  await pg.waitForTimeout(1200)
}
const colY = (id) =>
  pg.evaluate((id) => {
    const el = document.getElementById(id)
    return el ? el.getBoundingClientRect().top : null
  }, id)
const secY = (id) =>
  pg.evaluate((id) => {
    const el = document.getElementById(id)
    return el ? el.getBoundingClientRect().top : null
  }, id)
const CASOS = []
// Soltar llegando a una lista desde fuera: debe asentarse como cualquier vista
for (const [desde, dedo] of [[8.6, 160], [10.4, -160], [12.6, 160], [14.4, -160], [9.3, -140], [13.6, 160]]) {
  await pg.evaluate((v) => window.__v2.ir(v), desde)
  await pg.waitForTimeout(900)
  await gesto(dedo)
  await pg.waitForTimeout(2500)
  console.log(`desde ${desde} con ${dedo} px de dedo: queda en P ${(await pg.evaluate(() => window.__v2.p())).toFixed(3)}`)
}
await ctx.close()
rmSync(perfil, { recursive: true, force: true })
