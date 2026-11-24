/*
 * Paso entre dos vistas cuadro a cuadro con un reloj de mentira (siempre
 * 1/fps segundos entre cuadros), solo con la masa visible. Asi se compara la
 * masa con y sin el tope de la fase de las ondas en exactamente los mismos
 * cuadros, sin depender de lo rapido que vaya la maquina.
 * Necesita el servidor de desarrollo (importa el gsap de la app).
 *
 *   node scripts/onda.mjs <url-dev> <pc|movil> <salida> [desde=2] [fps=30] [tope=1.5]
 *   tope = 0 -> sin tope (como antes)
 */
import { chromium } from 'playwright-core'
import { mkdirSync, mkdtempSync, rmSync, writeFileSync, existsSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const BRAVE = 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe'
const [, , url, modo = 'movil', salida, desde = '2', fps = '30', tope = '1.5'] = process.argv
mkdirSync(salida, { recursive: true })
const movil = modo === 'movil'
const VP = movil
  ? { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 2 }
  : { viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 }
const perfil = mkdtempSync(join(tmpdir(), 'onda-'))
const ctx = await chromium.launchPersistentContext(perfil, {
  headless: true,
  colorScheme: 'light',
  executablePath: existsSync(BRAVE) ? BRAVE : undefined,
  ...VP,
})
const pg = ctx.pages()[0]
await pg.goto(url, { waitUntil: 'networkidle' })
await pg.waitForTimeout(5000)
await pg.evaluate((v) => window.__v2.ir(v), Number(desde))
await pg.waitForTimeout(2000)
const ruta = await pg.evaluate(() => {
  const r = performance.getEntriesByType('resource').find((e) => /\/deps\/gsap\.js/.test(e.name))
  return r ? new URL(r.name).pathname + new URL(r.name).search : null
})
await pg.evaluate(
  async ([ruta, tope]) => {
    for (const el of document.querySelectorAll('main, header, .grano, button.fixed')) el.style.display = 'none'
    const { default: gsap } = await import(ruta)
    window.__g = gsap
    window.__ondaMax = Number(tope) > 0 ? Number(tope) : 1e9
    gsap.ticker.lagSmoothing(0)
    gsap.ticker.sleep()
    let virt = performance.now()
    const real = performance.now.bind(performance)
    performance.now = () => virt
    window.__avanza = (ms) => {
      virt += ms
    }
    window.__real = real
  },
  [ruta, tope],
)
// Trayectoria de un deslizamiento: el objetivo sube 1 vista en ~0.22 s y el
// recorrido lo sigue con la misma suavidad del bucle (7/s).
const F = Number(fps)
const pasos = Math.round(F * 1.4)
let P = Number(desde)
let objetivo = Number(desde)
const filas = []
for (let n = 0; n < pasos; n++) {
  const s = n / F
  objetivo = Number(desde) + Math.min(1, s / 0.22)
  P += (objetivo - P) * (1 - Math.exp(-7 / F))
  await pg.evaluate(
    ([p, ms]) => {
      window.__avanza(ms)
      window.__v2.ir(p)
      window.__g.ticker.tick()
    },
    [P, 1000 / F],
  )
  const buf = await pg.screenshot()
  writeFileSync(join(salida, `f-${String(n).padStart(4, '0')}.png`), buf)
  filas.push({ n, P })
}
writeFileSync(join(salida, 'pasos.json'), JSON.stringify(filas))
console.log('cuadros', pasos)
await ctx.close()
rmSync(perfil, { recursive: true, force: true })
