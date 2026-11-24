/*
 * Que descarga la pagina al abrirla (PC) y cuando termina cada cosa, con una
 * conexion limitada para que se note el orden.
 *   node scripts/carga.mjs <url> [mbps=20]
 */
import { chromium } from 'playwright-core'
import { mkdtempSync, rmSync, existsSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const BRAVE = 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe'
const [, , url, mbps = '20'] = process.argv
const perfil = mkdtempSync(join(tmpdir(), 'carga-'))
const ctx = await chromium.launchPersistentContext(perfil, {
  headless: true,
  colorScheme: 'dark',
  executablePath: existsSync(BRAVE) ? BRAVE : undefined,
  viewport: { width: 1536, height: 864 },
})
const pg = ctx.pages()[0]
const cdp = await ctx.newCDPSession(pg)
await cdp.send('Network.enable')
await cdp.send('Network.setCacheDisabled', { cacheDisabled: true })
const bps = (Number(mbps) * 1e6) / 8
await cdp.send('Network.emulateNetworkConditions', { offline: false, latency: 40, downloadThroughput: bps, uploadThroughput: bps / 4 })
const req = new Map()
let t0 = 0
cdp.on('Network.requestWillBeSent', (e) => {
  if (!t0) t0 = e.timestamp
  req.set(e.requestId, { url: e.request.url, ini: e.timestamp, prio: e.request.initialPriority })
})
cdp.on('Network.loadingFinished', (e) => {
  const r = req.get(e.requestId)
  if (r) {
    r.fin = e.timestamp
    r.bytes = e.encodedDataLength
  }
})
const tNav = Date.now()
await pg.goto(url, { waitUntil: 'commit', timeout: 120000 })
// Cuando se ve la foto de Inicio y el logo
const vis = await pg.evaluate(async () => {
  const t0 = performance.timeOrigin
  const res = {}
  const fin = performance.now() + 15000
  while (performance.now() < fin && (!res.foto || !res.logo)) {
    const f = document.querySelector('img[src*="foto-inicio"]')
    if (!res.foto && f && f.complete && f.naturalWidth && Number(getComputedStyle(f).opacity) > 0.5) res.foto = Math.round(performance.now())
    const c = document.querySelector('header canvas')
    if (!res.logo && c && Number(getComputedStyle(c).opacity) > 0.5) res.logo = Math.round(performance.now())
    await new Promise((r) => setTimeout(r, 50))
  }
  return res
})
console.log('visible (ms desde que abre):', JSON.stringify(vis))
await pg.waitForTimeout(3000)
const filas = [...req.values()].filter((r) => r.fin).sort((a, b) => a.fin - b.fin)
let total = 0
const porTipo = {}
for (const r of filas) {
  total += r.bytes
  const u = new URL(r.url)
  const tipo = u.pathname.split('.').pop()
  porTipo[tipo] = (porTipo[tipo] || 0) + r.bytes
}
console.log(`peticiones ${filas.length}, total ${(total / 1e6).toFixed(2)} MB`, Object.entries(porTipo).map(([k, v]) => `${k} ${(v / 1e6).toFixed(2)}MB`).join(' '))
for (const r of filas) {
  const p = new URL(r.url).pathname
  if (/foto-|index-|\.woff|logo-map|capturas\/(acmsy|confetti)/.test(p) || r.fin - t0 > 2.5)
    console.log(`  ${p.padEnd(40)} ${String(Math.round(r.bytes / 1024)).padStart(5)} KB  termina ${((r.fin - t0) * 1000).toFixed(0).padStart(6)} ms  prio ${r.prio}`)
}
await ctx.close()
rmSync(perfil, { recursive: true, force: true })
