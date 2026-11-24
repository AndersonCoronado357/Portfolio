import { useEffect, useRef } from 'react'
import { PATH_D, MAP_URL, MAP_R, AMARILLO, FRENTE, FRENTE_W, CREC } from '../lib/logoData'
import { onScroll, scrollState } from '../scroll/progreso'

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v)
const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)
const colLogo = () => {
  const a = scrollState.acento
  return a[0] === 229 && a[1] === 184 && a[2] === 11 ? '#FCC30E' : `rgb(${a[0]},${a[1]},${a[2]})`
}

let cache = null

export default function AnimatedLogo({ className = '', onDone }) {
  const canvasRef = useRef(null)
  const doneRef = useRef(onDone)
  doneRef.current = onDone

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const path = new Path2D(PATH_D)
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const R = MAP_R
    let raf = null
    let timer = null
    let cancelado = false
    let hecho = false
    let colAnt = ''

    const box = canvas.parentElement.getBoundingClientRect()
    const W = Math.max(Math.round(box.width), 24)
    canvas.width = W * dpr
    canvas.height = W * dpr
    const scale = (W * dpr) / 1024

    const pintarVector = (color) => {
      ctx.setTransform(scale, 0, 0, scale, 0, 0)
      ctx.fillStyle = color || '#FCC30E'
      ctx.fill(path)
    }

    const rematar = () => {
      hecho = true
      colAnt = colLogo()
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      pintarVector(colAnt)
    }

    const repintar = () => {
      if (!hecho) return
      const c = colLogo()
      if (c === colAnt) return
      colAnt = c
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      pintarVector(c)
    }

    const offScroll = onScroll(repintar)

    const programar = (cb) => {
      let corrido = false
      let miRaf = null
      let miTimer = null
      const correr = () => {
        if (corrido || cancelado) return
        corrido = true
        cancelAnimationFrame(miRaf)
        clearTimeout(miTimer)
        cb(performance.now())
      }
      miRaf = requestAnimationFrame(correr)
      miTimer = setTimeout(correr, 45)
      raf = miRaf
      timer = miTimer
    }

    const arrancar = ({ val, alpha }) => {
      const out = document.createElement('canvas')
      out.width = R
      out.height = R
      const outCtx = out.getContext('2d')
      const outImg = outCtx.createImageData(R, R)
      const [r, g, b] = AMARILLO
      const [fr, fg, fb] = FRENTE
      const t0 = performance.now()

      const frame = (now) => {
        if (cancelado) return
        const prog = clamp((now - t0) / CREC, 0, 1)
        const th = easeInOut(prog) * (255 + FRENTE_W)

        const px = outImg.data
        for (let i = 0; i < R * R; i++) {
          const o = i * 4
          if (alpha[i] > 0 && val[i] <= th) {
            if (val[i] > th - FRENTE_W) {
              px[o] = fr; px[o + 1] = fg; px[o + 2] = fb
            } else {
              px[o] = r; px[o + 1] = g; px[o + 2] = b
            }
            px[o + 3] = 255
          } else {
            px[o + 3] = 0
          }
        }
        outCtx.putImageData(outImg, 0, 0)
        ctx.setTransform(1, 0, 0, 1, 0, 0)
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.imageSmoothingEnabled = true
        ctx.drawImage(out, 0, 0, canvas.width, canvas.height)

        if (prog >= 1) {
          rematar()
          doneRef.current?.()
          return
        }
        programar(frame)
      }
      programar(frame)
    }

    if (cache) {
      arrancar(cache)
    } else {
      const img = new Image()
      img.onload = () => {
        if (cancelado) return
        const off = document.createElement('canvas')
        off.width = R
        off.height = R
        const octx = off.getContext('2d', { willReadFrequently: true })
        octx.drawImage(img, 0, 0)
        const d = octx.getImageData(0, 0, R, R).data
        const val = new Uint8Array(R * R)
        const alpha = new Uint8Array(R * R)
        for (let i = 0; i < R * R; i++) {
          val[i] = d[i * 4]
          alpha[i] = d[i * 4 + 3]
        }
        cache = { val, alpha }
        arrancar(cache)
      }
      img.onerror = () => {
        if (cancelado) return
        rematar()
        doneRef.current?.()
      }
      img.src = MAP_URL
    }

    return () => {
      cancelado = true
      offScroll()
      if (raf) cancelAnimationFrame(raf)
      if (timer) clearTimeout(timer)
    }
  }, [])

  return (
    <div className={`aspect-square ${className}`}>
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  )
}
