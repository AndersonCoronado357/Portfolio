/*
 * Graba cuadro a cuadro (screencast) un recorrido con el dedo por un tramo
 * del sitio en el celular, para buscar parpadeos.
 *   node scripts/grabar-tec.mjs <url> <carpeta> [desde=8.7] [gestos=10] [freno=4]
 */
import { chromium } from 'playwright-core'
import { mkdtempSync, rmSync, existsSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const BRAVE = 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe'
const [, , url, dir, desde = '8.7', gestos = '10', freno = '4'] = process.argv
const perfil = mkdtempSync(join(tmpdir(), 'gtec-'))
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
const cdp = await ctx.newCDPSession(pg)
await pg.goto(url, { waitUntil: 'networkidle' })
await pg.waitForTimeout(4500)
await pg.evaluate((v) => window.__v2.ir(Number(v)), desde)
await pg.waitForTimeout(1500)
await cdp.send('Emulation.setCPUThrottlingRate', { rate: Number(freno) })
const cuadros = []
cdp.on('Page.screencastFrame', async (f) => {
  cuadros.push({ t: f.metadata.timestamp, d: f.data })
  cdp.send('Page.screencastFrameAck', { sessionId: f.sessionId }).catch(() => {})
})
await cdp.send('Page.startScreencast', { format: 'jpeg', quality: 70, everyNthFrame: 1 })
const toque = (type, y) => cdp.send('Input.dispatchTouchEvent', { type, touchPoints: type === 'touchEnd' ? [] : [{ x: 195, y, id: 1 }] })
for (let g = 0; g < Number(gestos); g++) {
  let y = 640
  await toque('touchStart', y)
  for (let k = 0; k < 12; k++) {
    y -= 22
    await toque('touchMove', y)
    await pg.waitForTimeout(18)
  }
  await toque('touchEnd', y)
  await pg.waitForTimeout(380)
}
await pg.waitForTimeout(800)
await cdp.send('Page.stopScreencast')
const fin = await pg.evaluate(() => window.__v2.p())
cuadros.forEach((c, i) => writeFileSync(join(dir, `f${String(i).padStart(4, '0')}.jpg`), Buffer.from(c.d, 'base64')))
writeFileSync(join(dir, 'tiempos.json'), JSON.stringify(cuadros.map((c) => c.t)))
console.log('cuadros', cuadros.length, 'P final', fin.toFixed(3))
await ctx.close()
rmSync(perfil, { recursive: true, force: true })
