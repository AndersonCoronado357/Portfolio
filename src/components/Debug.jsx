import { useEffect, useRef } from 'react'
import { onScroll } from '../scroll/progreso'
import { calcMobile } from '../lib/dispositivo'
import { VIEW_IDS } from '../lib/views'

const IDS = [
  ['proyectos', 'P1'],
  ['proyectos-2', 'P2'],
  ['proyectos-3', 'P3'],
  ['proyectos-4', 'P4'],
  ['proyectos-5', 'P5'],
  ['proyectos-mas', 'VM'],
]

export default function Debug() {
  const ref = useRef(null)

  useEffect(() => {
    const off = onScroll(({ pr }) => {
      const el = ref.current
      if (!el) return
      const idx = Math.round(pr)
      const vista = VIEW_IDS[idx] || '?'

      let lineas = ''
      for (const [id, et] of IDS) {
        const s = document.getElementById(id)
        if (!s) {
          lineas += `${et} NO\n`
          continue
        }
        const cs = getComputedStyle(s)
        const m = new DOMMatrix(cs.transform)
        const h = s.offsetHeight || 1
        const op = +cs.opacity
        const ty = Math.round((m.f / h) * 100)
        const marca = op > 0.5 ? '  <<<' : ''
        lineas += `${et} op=${op.toFixed(2)} ty=${ty}%${marca}\n`
      }

      el.textContent =
        `BUILD=acento-nitido-v21\n` +
        `pr=${pr.toFixed(2)}  idx=${idx}  ${vista}\n` +
        `mobile=${calcMobile()}  vw=${window.innerWidth}x${window.innerHeight}\n` +
        lineas
    })
    return off
  }, [])

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 99999,
        background: 'rgba(0,0,0,0.92)', color: '#3f6', fontSize: '13px',
        fontFamily: 'monospace', padding: '8px 10px', pointerEvents: 'none',
        whiteSpace: 'pre-wrap', lineHeight: 1.35, fontWeight: 700,
      }}
    >
      debug…
    </div>
  )
}
