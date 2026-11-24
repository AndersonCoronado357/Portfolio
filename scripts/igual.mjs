/*
 * Compara dos versiones de la v2 en los mismos puntos del recorrido y dice
 * donde la imagen cambia. Sirve para comprobar que un arreglo de rendimiento
 * no cambio nada de lo que se ve.
 *
 *   node scripts/igual.mjs <pc|movil> <salida> <url-a> <url-b> [paso=0.5] [hasta=24]
 */
import { chromium } from 'playwright-core'
import { mkdirSync, mkdtempSync, rmSync, writeFileSync, existsSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { PNG } from './png.mjs'

const BRAVE = 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe'
const [, , modo = 'pc', salida, urlA, urlB, paso = '0.5', hasta = '24'] = process.argv
mkdirSync(salida, { recursive: true })
const VP = modo === 'movil'
  ? { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 2 }
  : { viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 }

async function abrir(url) {
  const perfil = mkdtempSync(join(tmpdir(), 'igual-'))
  const ctx = await chromium.launchPersistentContext(perfil, { headless: true, colorScheme: 'light', executablePath: existsSync(BRAVE) ? BRAVE : undefined, ...VP })
  const pg = ctx.pages()[0]
  const errores = []
  pg.on('pageerror', (e) => errores.push(e.message))
  await pg.goto(url, { waitUntil: 'networkidle' })
  await pg.waitForTimeout(4500)
  return { ctx, pg, perfil, errores }
}

const A = await abrir(urlA)
const B = await abrir(urlB)
const filas = []
for (let p = 0; p <= Number(hasta) + 1e-9; p += Number(paso)) {
  const pp = Number(p.toFixed(3))
  const fotos = []
  for (const X of [A, B]) {
    await X.pg.evaluate((v) => window.__v2.ir(v), pp)
  }
  await A.pg.waitForTimeout(1700)
  for (const X of [A, B]) fotos.push(await X.pg.screenshot())
  const a = PNG.leer(fotos[0])
  const b = PNG.leer(fotos[1])
  let n = 0
  for (let k = 0; k < a.d.length; k += 4) {
    const d = Math.max(Math.abs(a.d[k] - b.d[k]), Math.abs(a.d[k + 1] - b.d[k + 1]), Math.abs(a.d[k + 2] - b.d[k + 2]))
    if (d > 24) n++
  }
  const frac = n / (a.d.length / 4)
  filas.push({ p: pp, pix: n, frac: Number((frac * 100).toFixed(3)) })
  if (frac > Number(process.env.UMBRAL ?? 0.002)) {
    writeFileSync(join(salida, `a-${pp}.png`), fotos[0])
    writeFileSync(join(salida, `b-${pp}.png`), fotos[1])
  }
  console.log(pp, n, (frac * 100).toFixed(3) + '%')
}
writeFileSync(join(salida, 'igual.json'), JSON.stringify({ filas, errA: A.errores, errB: B.errores }, null, 1))
console.log('errores', A.errores.length, B.errores.length, B.errores.slice(0, 3))
for (const X of [A, B]) {
  await X.ctx.close()
  rmSync(X.perfil, { recursive: true, force: true })
}
