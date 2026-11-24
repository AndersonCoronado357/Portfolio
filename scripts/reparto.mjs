/*
 * Reparte el coste de cada cuadro entre las partes de la pagina: recorre el
 * mismo tramo varias veces apagando una parte cada vez (display: none, asi
 * el navegador ni la estiliza ni la pinta) y compara el tiempo del hilo
 * principal, de rasterizado y de GPU por cuadro.
 *
 *   node scripts/reparto.mjs <url> <pc|movil> <salida> [desde=2] [hasta=4] [freno=4]
 */
import { chromium } from 'playwright-core'
import { mkdirSync, mkdtempSync, rmSync, writeFileSync, existsSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const BRAVE = 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe'
const [, , url, modo = 'movil', salida, desde = '2', hasta = '4', freno = '4'] = process.argv
mkdirSync(salida, { recursive: true })
const movil = modo === 'movil'
const VP = movil
  ? { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 3 }
  : { viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 }

const VARIANTES = (process.env.VARIANTES || 'base,sin-masa,sin-main,sin-header,sin-grano,sin-mascara').split(',')
const APAGAR = {
  base: '',
  'sin-masa': 'div.pointer-events-none.absolute.inset-0.z-0',
  'sin-main': 'main',
  'sin-header': 'header',
  'sin-grano': '.grano',
  'sin-mascara': '',
  'sin-goo': '',
  'wc-ocultas': '',
  'capas-piezas': '',
  'piezas-quietas': '',
  'secciones-quietas': '',
}

const res = {}
for (const v of VARIANTES) {
  const perfil = mkdtempSync(join(tmpdir(), 'reparto-'))
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
  await pg.evaluate(
    ([sel, v]) => {
      if (sel) for (const el of document.querySelectorAll(sel)) el.style.display = 'none'
      if (v === 'sin-mascara') {
        const m = document.querySelector('main')
        m.style.maskImage = 'none'
        m.style.webkitMaskImage = 'none'
      }
      if (v === 'sin-goo') document.querySelector('[style*="goo-masa"]').style.filter = 'none'
      // Congela un grupo de elementos: lo que se les escriba va a un estilo
      // de mentira, asi se ve cuanto cuesta que se muevan.
      const congelar = (els) => {
        for (const el of els) {
          const falso = new Proxy({}, { set: () => true, get: () => '' })
          falso.setProperty = () => {}
          Object.defineProperty(el, 'style', { get: () => falso, configurable: true })
        }
      }
      if (v === 'piezas-quietas') congelar(document.querySelectorAll('[data-anim], [data-w]'))
      if (v === 'secciones-quietas') congelar(document.querySelectorAll('section.view'))
      if (v === 'wc-ocultas') {
        const st = document.createElement('style')
        st.textContent = 'section.view[style*="visibility: hidden"]{will-change:auto!important}'
        document.head.appendChild(st)
      }
      if (v === 'capas-piezas') {
        const st = document.createElement('style')
        st.textContent = '[data-anim]{will-change:transform,opacity}'
        document.head.appendChild(st)
      }
    },
    [APAGAR[v], v],
  )
  await pg.waitForTimeout(500)
  await cdp.send('Emulation.setCPUThrottlingRate', { rate: Number(freno) })
  const trozos = []
  cdp.on('Tracing.dataCollected', (e) => trozos.push(...e.value))
  const fin = new Promise((r) => cdp.once('Tracing.tracingComplete', r))
  await cdp.send('Tracing.start', { categories: 'devtools.timeline,disabled-by-default-devtools.timeline,gpu,cc', transferMode: 'ReportEvents' })
  const cuadros = await pg.evaluate(
    ([a, b]) =>
      new Promise((r) => {
        let k = 0
        const N = 120
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
    [Number(desde), Number(hasta)],
  )
  await cdp.send('Tracing.end')
  await fin
  const hilos = new Map()
  for (const e of trozos) if (e.ph === 'M' && e.name === 'thread_name') hilos.set(`${e.pid}:${e.tid}`, e.args.name)
  const suma = (filtroHilo, nombres) =>
    trozos
      .filter((e) => e.ph === 'X' && filtroHilo.test(hilos.get(`${e.pid}:${e.tid}`) || '') && nombres.test(e.name))
      .reduce((s, e) => s + e.dur / 1000, 0)
  const n = cuadros.length - 1
  const dur = cuadros[n] - cuadros[0]
  const r = {
    msCuadro: +(dur / n).toFixed(1),
    main: +(suma(/CrRendererMain/, /^ProxyMain::BeginMainFrame$/) / n).toFixed(2),
    estilo: +(suma(/CrRendererMain/, /^UpdateLayoutTree$/) / n).toFixed(2),
    js: +(suma(/CrRendererMain/, /^FunctionCall$/) / n).toFixed(2),
    paint: +(suma(/CrRendererMain/, /^(Paint|PrePaint)$/) / n).toFixed(2),
    layerize: +(suma(/CrRendererMain/, /^Layerize$/) / n).toFixed(2),
    raster: +(suma(/./, /^RasterTask$/) / n).toFixed(2),
    gpu: +(suma(/CrGpuMain|VizCompositor/, /^(GPUTask|Graphics.Pipeline.DrawAndSwap|SkiaOutputSurfaceImplOnGpu::SwapBuffers)$/) / n).toFixed(2),
  }
  res[v] = r
  console.log(v.padEnd(12), JSON.stringify(r))
  await ctx.close()
  rmSync(perfil, { recursive: true, force: true })
}
writeFileSync(join(salida, 'reparto.json'), JSON.stringify(res, null, 1))
