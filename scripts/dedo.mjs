/*
 * Prueba el arrastre con el dedo: hace gestos tactiles reales y registra el
 * recorrido (P) en cada cuadro, para ver que va pegado al dedo, que al
 * soltar sigue con inercia y donde se queda.
 *
 *   node scripts/dedo.mjs <url> [freno=1]
 */
import { chromium } from 'playwright-core'
import { mkdtempSync, rmSync, existsSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const BRAVE = 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe'
const [, , url, freno = '1'] = process.argv
const perfil = mkdtempSync(join(tmpdir(), 'dedo-'))
const ctx = await chromium.launchPersistentContext(perfil, {
  headless: true,
  colorScheme: 'light',
  executablePath: existsSync(BRAVE) ? BRAVE : undefined,
  viewport: { width: 390, height: 844 },
  isMobile: true,
  hasTouch: true,
  deviceScaleFactor: 3,
})
const pg = ctx.pages()[0]
const cdp = await ctx.newCDPSession(pg)
await pg.goto(url, { waitUntil: 'networkidle' })
await pg.waitForTimeout(4500)
await cdp.send('Emulation.setCPUThrottlingRate', { rate: Number(freno) })
const toque = (type, y) =>
  cdp.send('Input.dispatchTouchEvent', { type, touchPoints: type === 'touchEnd' ? [] : [{ x: 195, y, id: 1 }] })

async function gesto(nombre, desde, pasos, px, msPaso, pausaFinal = 0) {
  await pg.evaluate((v) => window.__v2.ir(v), desde)
  await pg.waitForTimeout(800)
  await pg.evaluate(() => {
    window.__reg = []
    const t0 = performance.now()
    const f = () => {
      window.__reg.push([Math.round(performance.now() - t0), window.__v2.p()])
      if (performance.now() - t0 < 4000) requestAnimationFrame(f)
    }
    requestAnimationFrame(f)
  })
  let y = 700
  await toque('touchStart', y)
  for (let k = 0; k < pasos; k++) {
    y -= px
    await toque('touchMove', y)
    await pg.waitForTimeout(msPaso)
  }
  if (pausaFinal) await pg.waitForTimeout(pausaFinal)
  const pSoltar = await pg.evaluate(() => window.__v2.p())
  await toque('touchEnd', y)
  await pg.waitForTimeout(4200)
  const reg = await pg.evaluate(() => window.__reg)
  const fin = reg[reg.length - 1][1]
  // cuando llega a menos de 0.01 del final
  const llega = reg.find(([, p]) => Math.abs(p - fin) < 0.01)
  console.log(
    nombre.padEnd(34),
    'al soltar',
    pSoltar.toFixed(3),
    'final',
    fin.toFixed(3),
    'asentado en',
    llega ? llega[0] + ' ms' : '-',
    '| muestras',
    reg.filter((_, i) => i % 6 === 0).slice(0, 14).map(([t, p]) => `${t}:${p.toFixed(2)}`).join(' '),
  )
}

await gesto('rapido (500px en 220ms)', 2, 14, 36, 16)
await gesto('corto rapido (150px en 80ms)', 2, 5, 30, 16)
await gesto('lento y se para antes de soltar', 2, 10, 20, 40, 200)
await gesto('lento cerca de una vista (iman)', 2, 10, 46, 40, 200)
await gesto('hacia atras rapido', 4, 14, -36, 16)
await ctx.close()
rmSync(perfil, { recursive: true, force: true })
