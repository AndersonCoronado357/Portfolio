/*
 * En que se va el tiempo de cada cuadro en un tramo del recorrido (celular):
 * avanza de <desde> a <hasta> a ritmo constante y reparte el tiempo por
 * cuadro entre hilo principal (JS, estilo, layout, pintado...), rasterizado
 * y GPU. Acepta varios tramos: 0-1 1-2 4-5 ...
 *
 *   node scripts/zona-detalle.mjs <url> <freno> <tramo> [tramo...]
 */
import { chromium } from 'playwright-core'
import { mkdtempSync, rmSync, existsSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const BRAVE = 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe'
const [, , url, freno = '4', ...tramos] = process.argv
const perfil = mkdtempSync(join(tmpdir(), 'zdet-'))
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
await pg.waitForTimeout(5000)
// una pasada previa por todo, para que lo de "primera vez" no cuente
for (let p = 0; p <= 13; p += 0.25) {
  await pg.evaluate((v) => window.__v2.ir(v), p)
  await pg.waitForTimeout(60)
}
await cdp.send('Emulation.setCPUThrottlingRate', { rate: Number(freno) })

const NOMBRES = ['FunctionCall', 'UpdateLayoutTree', 'Layout', 'PrePaint', 'Paint', 'Layerize', 'Commit', 'HitTest', 'IntersectionObserverController::computeIntersections', 'UpdateLayer']
for (const tramo of tramos) {
  const [a, b] = tramo.split('-').map(Number)
  await pg.evaluate((v) => window.__v2.ir(v), a)
  await pg.waitForTimeout(1200)
  const trozos = []
  const onData = (e) => trozos.push(...e.value)
  cdp.on('Tracing.dataCollected', onData)
  const fin = new Promise((r) => cdp.once('Tracing.tracingComplete', r))
  await cdp.send('Tracing.start', { categories: 'devtools.timeline,disabled-by-default-devtools.timeline,cc,viz,gpu', transferMode: 'ReportEvents' })
  const cuadros = await pg.evaluate(
    ([a, b]) =>
      new Promise((r) => {
        let k = 0
        const N = 45
        const ts = []
        const paso = (t) => {
          ts.push(t)
          k++
          window.__v2.ir(a + ((b - a) * k) / N)
          if (k < N) requestAnimationFrame(paso)
          else setTimeout(() => r(ts), 300)
        }
        requestAnimationFrame(paso)
      }),
    [a, b],
  )
  await cdp.send('Tracing.end')
  await fin
  cdp.off('Tracing.dataCollected', onData)
  const hilos = new Map()
  for (const e of trozos) if (e.ph === 'M' && e.name === 'thread_name') hilos.set(`${e.pid}:${e.tid}`, e.args.name)
  const hilo = (e) => hilos.get(`${e.pid}:${e.tid}`) || '?'
  const main = trozos.filter((e) => e.ph === 'X' && /CrRendererMain/.test(hilo(e)))
  const frames = main.filter((e) => e.name === 'ProxyMain::BeginMainFrame')
  const nF = frames.length || 1
  const sum = (arr) => arr.reduce((s, e) => s + (e.dur || 0), 0) / 1000
  const tot = {}
  for (const n of NOMBRES) tot[n] = sum(main.filter((e) => e.name === n)) / nF
  const raster = sum(trozos.filter((e) => e.ph === 'X' && /CompositorTileWorker/.test(hilo(e)) && /RasterTask|TaskSetFinishedTaskImpl|ImageDecodeTask/.test(e.name))) / nF
  const decod = sum(trozos.filter((e) => e.ph === 'X' && /ImageDecodeTask/.test(e.name))) / nF
  const gpu = sum(trozos.filter((e) => e.ph === 'X' && /VizCompositor|CrGpuMain/.test(hilo(e)) && /^(Display::DrawAndSwap|SkiaOutputSurfaceImplOnGpu::SwapBuffers|GpuChannel::ExecuteDeferredRequest|CommandBufferStub::OnAsyncFlush|SkiaOutputSurfaceImplOnGpu::FinishPaintCurrentFrame)$/.test(e.name))) / nF
  const iv = []
  for (let i = 1; i < cuadros.length; i++) iv.push(cuadros[i] - cuadros[i - 1])
  iv.sort((x, y) => x - y)
  const bmf = sum(frames) / nF
  console.log(
    `\n== ${tramo}  intervalo med ${Math.round(iv[iv.length >> 1])} ms p90 ${Math.round(iv[Math.floor(iv.length * 0.9)])}  | hilo principal ${bmf.toFixed(1)} ms/cuadro  raster ${raster.toFixed(1)} (decod ${decod.toFixed(1)})  gpu ${gpu.toFixed(1)}`,
  )
  console.log('   ' + NOMBRES.map((n) => `${n.replace('IntersectionObserverController::computeIntersections', 'IO')} ${tot[n].toFixed(1)}`).join(' | '))
  const ul = main.filter((e) => e.name === 'UpdateLayoutTree')
  const ec = ul.map((e) => e.args?.elementCount || 0).sort((x, y) => x - y)
  console.log('   elementos por recalculo (mediana)', ec[ec.length >> 1])
}
await ctx.close()
rmSync(perfil, { recursive: true, force: true })
