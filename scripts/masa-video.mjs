/*
 * Graba lo que sale en pantalla (cuadro a cuadro, del compositor) mientras se
 * desliza con el dedo entre vistas, solo con la masa visible, para buscar
 * piezas que aparecen y desaparecen. Deja los cuadros en <salida>/f-XXXX.jpg
 * y su tiempo en cuadros.json.
 *
 *   node scripts/masa-video.mjs <url> <pc|movil> <salida> [inicio=2] [gestos="+4"] [solo-masa=1]
 */
import { chromium } from 'playwright-core'
import { mkdirSync, mkdtempSync, rmSync, writeFileSync, existsSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const BRAVE = 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe'
const [, , url, modo = 'movil', salida, inicio = '2', gestos = '+4', soloMasa = '1'] = process.argv
mkdirSync(salida, { recursive: true })
const movil = modo === 'movil'
const VP = movil
  ? { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 3 }
  : { viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 }
const perfil = mkdtempSync(join(tmpdir(), 'masavid-'))
const ctx = await chromium.launchPersistentContext(perfil, {
  headless: true,
  colorScheme: 'light',
  executablePath: existsSync(BRAVE) ? BRAVE : undefined,
  ...VP,
})
const pg = ctx.pages()[0]
const cdp = await ctx.newCDPSession(pg)
await pg.goto(url, { waitUntil: 'networkidle' })
await pg.waitForTimeout(4500)
await pg.evaluate((v) => window.__v2.ir(v), Number(inicio))
await pg.waitForTimeout(1500)
if (soloMasa === '1') {
  await pg.evaluate(() => {
    for (const el of document.querySelectorAll('main, header, .grano, button.fixed')) el.style.display = 'none'
    for (const el of document.querySelectorAll('img')) el.style.visibility = 'hidden'
  })
}
await pg.waitForTimeout(300)
// FRENO=<n>: CPU frenada como en un telefono (menos cuadros por segundo)
if (process.env.FRENO) await cdp.send('Emulation.setCPUThrottlingRate', { rate: Number(process.env.FRENO) })

const cuadros = []
let n = 0
cdp.on('Page.screencastFrame', async (e) => {
  const k = n++
  cuadros.push({ k, t: e.metadata.timestamp })
  writeFileSync(join(salida, `f-${String(k).padStart(4, '0')}.jpg`), Buffer.from(e.data, 'base64'))
  try {
    await cdp.send('Page.screencastFrameAck', { sessionId: e.sessionId })
  } catch {}
})
await cdp.send('Page.startScreencast', { format: 'jpeg', quality: 92, everyNthFrame: 1, maxWidth: movil ? 780 : 1280, maxHeight: movil ? 1688 : 720 })
await pg.waitForTimeout(300)

const toque = (type, y) =>
  cdp.send('Input.dispatchTouchEvent', { type, touchPoints: type === 'touchEnd' ? [] : [{ x: 195, y, id: 1 }] })
const plan = String(gestos).split(',').flatMap((x) => Array(Math.abs(Number(x))).fill(Math.sign(Number(x))))
for (const dir of plan) {
  if (movil) {
    let y = dir > 0 ? 700 : 196
    await toque('touchStart', y)
    for (let k = 0; k < 14; k++) {
      y -= 36 * dir
      await toque('touchMove', y)
      await pg.waitForTimeout(16)
    }
    await toque('touchEnd', y)
  } else {
    for (let k = 0; k < 10; k++) {
      await pg.mouse.wheel(0, 100 * dir)
      await pg.waitForTimeout(16)
    }
  }
  await pg.waitForTimeout(1300)
}
await cdp.send('Page.stopScreencast')
await pg.waitForTimeout(300)
writeFileSync(join(salida, 'cuadros.json'), JSON.stringify(cuadros))
console.log('cuadros', cuadros.length, 'duracion s', (cuadros.at(-1).t - cuadros[0].t).toFixed(2))
await ctx.close()
rmSync(perfil, { recursive: true, force: true })
