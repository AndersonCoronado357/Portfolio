/*
 * Desglosa el recalculo de estilo (UpdateLayoutTree) mientras se recorre:
 * cuantos elementos toca cada vez y en que subeventos se va el tiempo.
 *
 *   node scripts/estilo.mjs <url> <pc|movil> <salida> [desde=2] [hasta=3]
 */
import { chromium } from 'playwright-core'
import { mkdirSync, mkdtempSync, rmSync, writeFileSync, existsSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const BRAVE = 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe'
const [, , url, modo = 'movil', salida, desde = '2', hasta = '3'] = process.argv
mkdirSync(salida, { recursive: true })
const movil = modo === 'movil'
const VP = movil
  ? { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 3 }
  : { viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 }
const perfil = mkdtempSync(join(tmpdir(), 'estilo-'))
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
await pg.evaluate((v) => window.__v2.ir(v), Number(desde))
await pg.waitForTimeout(1500)

const trozos = []
cdp.on('Tracing.dataCollected', (e) => trozos.push(...e.value))
const fin = new Promise((r) => cdp.once('Tracing.tracingComplete', r))
await cdp.send('Tracing.start', {
  categories: 'devtools.timeline,disabled-by-default-devtools.timeline,blink,blink.debug,disabled-by-default-blink.debug,blink_style,disabled-by-default-blink_style',
  transferMode: 'ReportEvents',
})
await pg.evaluate(
  ([a, b]) =>
    new Promise((r) => {
      let k = 0
      const paso = () => {
        k++
        window.__v2.ir(a + ((b - a) * k) / 60)
        if (k < 60) requestAnimationFrame(paso)
        else setTimeout(r, 300)
      }
      requestAnimationFrame(paso)
    }),
  [Number(desde), Number(hasta)],
)
await cdp.send('Tracing.end')
await fin

const hilos = new Map()
for (const e of trozos) if (e.ph === 'M' && e.name === 'thread_name') hilos.set(`${e.pid}:${e.tid}`, e.args.name)
const main = trozos.filter((e) => e.ph === 'X' && /CrRendererMain/.test(hilos.get(`${e.pid}:${e.tid}`) || ''))
const ult = main.filter((e) => e.name === 'UpdateLayoutTree')
const dentro = new Map()
let total = 0
for (const u of ult) {
  total += u.dur
  for (const e of main) {
    if (e === u || e.ts < u.ts || e.ts + (e.dur || 0) > u.ts + u.dur) continue
    dentro.set(e.name, (dentro.get(e.name) || 0) + (e.dur || 0))
  }
}
const filas = ult.map((u) => ({ ms: +(u.dur / 1000).toFixed(2), elems: u.args?.elementCount }))
writeFileSync(join(salida, 'estilo.json'), JSON.stringify({ filas, dentro: [...dentro] }, null, 1))
console.log('recalcs', ult.length, 'total ms', (total / 1000).toFixed(1))
console.log(filas.slice(0, 70).map((f) => `${f.ms}/${f.elems}`).join(' '))
for (const [k, v] of [...dentro].sort((a, b) => b[1] - a[1]).slice(0, 30)) console.log(String((v / 1000).toFixed(1)).padStart(8), k)
await ctx.close()
rmSync(perfil, { recursive: true, force: true })
