/*
 * Comparador v1 contra v2.
 *
 *   node scripts/comparar.mjs <pc|movil> <salida>
 *
 * 1. REPOSO: lleva las dos versiones a cada vista del recorrido principal y
 *    compara la captura pixel por pixel. En reposo tienen que ser iguales.
 * 2. TRANSICIONES (solo v2): recorre posiciones intermedias y revisa que no
 *    haya ninguna pieza semitransparente en escena. Guarda las capturas para
 *    revisarlas a ojo.
 *
 * Necesita la v1 en :4321 y la v2 en :4322.
 */
import { chromium } from 'playwright-core'
import { mkdirSync, mkdtempSync, rmSync, writeFileSync, existsSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { PNG } from './png.mjs'

const MODO = process.argv[2] || 'pc'
const SALIDA = process.argv[3] || join(tmpdir(), 'comparar')
const BRAVE = 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe'
mkdirSync(SALIDA, { recursive: true })

const VP = MODO === 'movil'
  ? { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 1 }
  : { viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 }

async function abrir(url) {
  const perfil = mkdtempSync(join(tmpdir(), 'cmp-'))
  const ctx = await chromium.launchPersistentContext(perfil, {
    headless: true,
    colorScheme: 'light',
    reducedMotion: 'no-preference',
    executablePath: existsSync(BRAVE) ? BRAVE : undefined,
    ...VP,
  })
  const pg = ctx.pages()[0] || (await ctx.newPage())
  const errores = []
  pg.on('pageerror', (e) => errores.push(e.message))
  await pg.goto(url, { waitUntil: 'networkidle', timeout: 90000 })
  // Arranque completo: logo + masa + contenido de Inicio.
  await pg.waitForTimeout(4500)
  return { ctx, pg, perfil, errores }
}

async function cerrar(v) {
  await v.ctx.close()
  rmSync(v.perfil, { recursive: true, force: true })
}

function diferencia(a, b) {
  const A = PNG.leer(a)
  const B = PNG.leer(b)
  if (A.w !== B.w || A.h !== B.h) return { pct: 100, bloques: 100, mapa: null }
  let dist = 0
  const mapa = Buffer.alloc(A.w * A.h * 4)
  for (let p = 0; p < A.w * A.h; p++) {
    const o = p * 4
    const d = Math.max(Math.abs(A.d[o] - B.d[o]), Math.abs(A.d[o + 1] - B.d[o + 1]), Math.abs(A.d[o + 2] - B.d[o + 2]))
    if (d > 24) dist++
    const g = Math.round(A.d[o] * 0.3 + A.d[o + 1] * 0.59 + A.d[o + 2] * 0.11) * 0.35 + 160
    mapa[o] = mapa[o + 1] = mapa[o + 2] = Math.min(255, g); mapa[o + 3] = 255
  }
  // Metrica tolerante al suavizado del texto: se promedia cada bloque de 8x8 y
  // solo cuenta si el color medio del bloque cambia. Un borde de letra que se
  // rasteriza distinto no mueve el promedio; una pieza fuera de lugar si.
  const T = 8
  let malos = 0
  let total = 0
  for (let by = 0; by < A.h; by += T) {
    for (let bx = 0; bx < A.w; bx += T) {
      let r1 = 0, g1 = 0, b1 = 0, r2 = 0, g2 = 0, b2 = 0, n = 0
      for (let y = by; y < Math.min(by + T, A.h); y++) {
        for (let x = bx; x < Math.min(bx + T, A.w); x++) {
          const o = (y * A.w + x) * 4
          r1 += A.d[o]; g1 += A.d[o + 1]; b1 += A.d[o + 2]
          r2 += B.d[o]; g2 += B.d[o + 1]; b2 += B.d[o + 2]
          n++
        }
      }
      total++
      const d = Math.max(Math.abs(r1 - r2), Math.abs(g1 - g2), Math.abs(b1 - b2)) / n
      if (d > 10) {
        malos++
        for (let y = by; y < Math.min(by + T, A.h); y++) {
          for (let x = bx; x < Math.min(bx + T, A.w); x++) {
            const o = (y * A.w + x) * 4
            mapa[o] = 255; mapa[o + 1] = 0; mapa[o + 2] = 0
          }
        }
      }
    }
  }
  return { pct: (dist / (A.w * A.h)) * 100, bloques: (malos / total) * 100, mapa: PNG.escribir(A.w, A.h, mapa) }
}

const v1 = await abrir('http://localhost:4321')
const v2 = await abrir('http://localhost:4322')

const informe = { modo: MODO, reposo: [], transiciones: [], errores: {} }

// --- 1. Reposo -------------------------------------------------------------
const PASOS = 15
for (let i = 0; i <= PASOS; i++) {
  if (i > 0) {
    await v1.pg.keyboard.press('ArrowDown')
    await v2.pg.keyboard.press('ArrowDown')
  }
  await v1.pg.waitForTimeout(2600)
  await v2.pg.waitForTimeout(2600)
  const vista1 = await v1.pg.evaluate(() => document.querySelector('[data-view]').getAttribute('data-view'))
  const vista2 = await v2.pg.evaluate(() => document.querySelector('[data-view]').getAttribute('data-view'))
  const a = await v1.pg.screenshot()
  const b = await v2.pg.screenshot()
  const r = diferencia(a, b)
  const base = `reposo-${String(i).padStart(2, '0')}-${vista2}`
  writeFileSync(join(SALIDA, base + '-v1.png'), a)
  writeFileSync(join(SALIDA, base + '-v2.png'), b)
  if (r.mapa) writeFileSync(join(SALIDA, base + '-dif.png'), r.mapa)
  informe.reposo.push({ i, vista1, vista2, pct: Number(r.pct.toFixed(3)), bloques: Number(r.bloques.toFixed(3)) })
  console.log('reposo', i, vista1, vista2, 'pixeles', r.pct.toFixed(3) + '%', 'bloques', r.bloques.toFixed(3) + '%')
  if (vista2 === 'contacto') break
}

// --- 2. Transiciones de la v2 ---------------------------------------------
// La opacidad fija del diseno (iconos al 40%, texto atenuado) no es un
// fundido. Se toma la de cada elemento de referencia y solo se marca lo que
// cambia durante el recorrido y queda a medias.
await v2.pg.evaluate(() => {
  window.__opBase = new Map()
  for (const el of document.querySelectorAll('main section[id] *')) {
    window.__opBase.set(el, parseFloat(getComputedStyle(el).opacity))
  }
})
const PUNTOS = [0.15, 0.3, 0.5, 0.7, 0.85]
const total = informe.reposo.length
for (let i = 0; i < total - 1; i++) {
  for (const f of PUNTOS) {
    const p = i + f
    await v2.pg.evaluate((p) => window.__v2.ir(p), p)
    await v2.pg.waitForTimeout(260)
    const translucidas = await v2.pg.evaluate(() => {
      const res = []
      for (const el of document.querySelectorAll('main section[id] *')) {
        const sec = el.closest('section[id]')
        if (!sec || sec.style.display === 'none') continue
        const op = parseFloat(getComputedStyle(el).opacity)
        const base = window.__opBase.get(el)
        if (base !== undefined && Math.abs(op - base) < 0.01) continue
        if (op > 0.02 && op < 0.98) {
          const r = el.getBoundingClientRect()
          if (r.width && r.height && r.bottom > 0 && r.right > 0 && r.top < innerHeight && r.left < innerWidth) {
            res.push(`${sec.id} ${el.tagName.toLowerCase()} op=${op.toFixed(2)} "${(el.textContent || '').trim().slice(0, 30)}"`)
          }
        }
      }
      return res.slice(0, 6)
    })
    const img = await v2.pg.screenshot()
    writeFileSync(join(SALIDA, `trans-${p.toFixed(2)}.png`), img)
    informe.transiciones.push({ p: Number(p.toFixed(2)), translucidas })
    if (translucidas.length) console.log('TRANSLUCIDO en', p.toFixed(2), translucidas)
  }
}

informe.errores = { v1: v1.errores, v2: v2.errores }
writeFileSync(join(SALIDA, 'informe.json'), JSON.stringify(informe, null, 2))
console.log('errores v1:', v1.errores.length, 'v2:', v2.errores.length)
await cerrar(v1)
await cerrar(v2)
