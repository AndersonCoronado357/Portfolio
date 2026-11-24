/*
 * Lista las capas que arma el navegador en un punto del recorrido: tamano,
 * por que existe cada una y cuantas veces se repinta mientras se pasa de una
 * vista a la siguiente. Sirve para ver que se rasteriza en cada cuadro.
 *
 *   node scripts/capas.mjs <url> <pc|movil> <salida> [desde=2] [hasta=3]
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
const perfil = mkdtempSync(join(tmpdir(), 'capas-'))
const ctx = await chromium.launchPersistentContext(perfil, {
  headless: true,
  colorScheme: 'light',
  executablePath: existsSync(BRAVE) ? BRAVE : undefined,
  args: ['--enable-gpu-rasterization', '--ignore-gpu-blocklist'],
  ...VP,
})
const pg = ctx.pages()[0]
const cdp = await ctx.newCDPSession(pg)
await pg.goto(url, { waitUntil: 'networkidle' })
await pg.waitForTimeout(4500)
await pg.evaluate((v) => window.__v2.ir(v), Number(desde))
await pg.waitForTimeout(1500)

let capas = []
cdp.on('LayerTree.layerTreeDidChange', (e) => {
  if (e.layers) capas = e.layers
})
await cdp.send('DOM.enable')
await cdp.send('LayerTree.enable')
await pg.waitForTimeout(300)

const describir = async (ls) => {
  const out = []
  for (const l of ls) {
    if (l.invisible) continue
    let razones = []
    try {
      razones = (await cdp.send('LayerTree.compositingReasons', { layerId: l.layerId })).compositingReasonIds || []
    } catch {}
    let nodo = ''
    if (l.backendNodeId) {
      try {
        const { object } = await cdp.send('DOM.resolveNode', { backendNodeId: l.backendNodeId })
        const r2 = await cdp.send('Runtime.callFunctionOn', {
          objectId: object.objectId,
          returnByValue: true,
          functionDeclaration: `function () {
            const q = (e) => e.tagName.toLowerCase() + (e.id ? '#' + e.id : '') + (e.getAttribute('class') ? '.' + e.getAttribute('class').split(' ').slice(0, 2).join('.') : '')
            const cad = []
            let e = this
            for (let k = 0; k < 4 && e && e.tagName; k++, e = e.parentElement) cad.push(q(e))
            const cs = getComputedStyle(this)
            return cad.join(' < ') + (cs.filter !== 'none' ? ' [filter ' + cs.filter + ']' : '') + (cs.maskImage && cs.maskImage !== 'none' ? ' [mask]' : '')
          }`,
        })
        nodo = r2.result.value
      } catch {}
      if (!nodo) try {
        const r = await cdp.send('DOM.describeNode', { backendNodeId: l.backendNodeId })
        const n = r.node
        const at = n.attributes || []
        const id = at[at.indexOf('id') + 1]
        const cl = at[at.indexOf('class') + 1]
        nodo = `${n.nodeName.toLowerCase()}${at.includes('id') ? '#' + id : ''}${at.includes('class') ? '.' + String(cl).split(' ').slice(0, 3).join('.') : ''}`
      } catch {}
    }
    out.push({ id: l.layerId, nodo, w: Math.round(l.width), h: Math.round(l.height), pinta: l.paintCount, dibuja: l.drawsContent, razones })
  }
  return out
}

const antes = await describir(capas)
// Recorre de `desde` a `hasta` en 60 cuadros
await pg.evaluate(
  ([a, b]) =>
    new Promise((r) => {
      let k = 0
      const paso = () => {
        k++
        window.__v2.ir(a + ((b - a) * k) / 60)
        if (k < 60) requestAnimationFrame(paso)
        else setTimeout(r, 400)
      }
      requestAnimationFrame(paso)
    }),
  [Number(desde), Number(hasta)],
)
const despues = await describir(capas)
const pintasAntes = new Map(antes.map((c) => [c.id, c.pinta]))
const filas = despues
  .filter((c) => c.dibuja)
  .map((c) => ({ ...c, repintes: c.pinta - (pintasAntes.get(c.id) || 0) }))
  .sort((a, b) => b.repintes * b.w * b.h - a.repintes * a.w * a.h)
writeFileSync(join(salida, 'capas.json'), JSON.stringify(filas, null, 1))
console.log('capas que dibujan', filas.length)
for (const f of filas.slice(0, 25))
  console.log(String(f.repintes).padStart(4), `${f.w}x${f.h}`.padEnd(11), f.nodo.slice(0, 120).padEnd(60), f.razones.join(','))
if (process.env.COMANDOS) {
  // Que dibuja la capa de la masa con el filtro (si el desenfoque va dentro
  // de su rasterizado o lo aplica el compositor)
  const goo = despues.find((c) => c.nodo.includes('goo-masa'))
  if (goo) {
    try {
      const { snapshotId } = await cdp.send('LayerTree.makeSnapshot', { layerId: goo.id })
      const { commandLog } = await cdp.send('LayerTree.snapshotCommandLog', { snapshotId })
      writeFileSync(join(salida, 'goo-comandos.json'), JSON.stringify(commandLog, null, 1))
      console.log('comandos goo', commandLog.length, [...new Set(commandLog.map((c) => c.method))].join(','))
    } catch (e) {
      console.log('sin snapshot', e.message)
    }
  }
}
await ctx.close()
rmSync(perfil, { recursive: true, force: true })
