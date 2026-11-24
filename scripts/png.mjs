// Lector y escritor de PNG minimo (8 bits, sin entrelazado), sin dependencias.
// Alcanza para las capturas de Playwright, que salen siempre asi.
import { inflateSync, deflateSync } from 'node:zlib'

const CRC = (() => {
  const t = new Uint32Array(256)
  for (let n = 0; n < 256; n++) {
    let c = n
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
    t[n] = c >>> 0
  }
  return t
})()
function crc32(buf) {
  let c = 0xffffffff
  for (let i = 0; i < buf.length; i++) c = CRC[(c ^ buf[i]) & 0xff] ^ (c >>> 8)
  return (c ^ 0xffffffff) >>> 0
}

function paeth(a, b, c) {
  const p = a + b - c
  const pa = Math.abs(p - a)
  const pb = Math.abs(p - b)
  const pc = Math.abs(p - c)
  return pa <= pb && pa <= pc ? a : pb <= pc ? b : c
}

export const PNG = {
  // Devuelve { w, h, d } con d en RGBA.
  leer(buf) {
    let pos = 8
    let w = 0
    let h = 0
    let tipo = 6
    const datos = []
    while (pos < buf.length) {
      const len = buf.readUInt32BE(pos)
      const nombre = buf.toString('ascii', pos + 4, pos + 8)
      const cuerpo = buf.subarray(pos + 8, pos + 8 + len)
      if (nombre === 'IHDR') {
        w = cuerpo.readUInt32BE(0)
        h = cuerpo.readUInt32BE(4)
        tipo = cuerpo[9]
      } else if (nombre === 'IDAT') datos.push(cuerpo)
      else if (nombre === 'IEND') break
      pos += 12 + len
    }
    const bpp = tipo === 6 ? 4 : tipo === 2 ? 3 : tipo === 0 ? 1 : 4
    const crudo = inflateSync(Buffer.concat(datos))
    const fila = w * bpp
    const sal = Buffer.alloc(w * h * 4)
    const prev = Buffer.alloc(fila)
    const cur = Buffer.alloc(fila)
    let o = 0
    for (let y = 0; y < h; y++) {
      const f = crudo[o++]
      for (let x = 0; x < fila; x++) {
        const raw = crudo[o++]
        const a = x >= bpp ? cur[x - bpp] : 0
        const b = prev[x]
        const c = x >= bpp ? prev[x - bpp] : 0
        let v = raw
        if (f === 1) v = raw + a
        else if (f === 2) v = raw + b
        else if (f === 3) v = raw + ((a + b) >> 1)
        else if (f === 4) v = raw + paeth(a, b, c)
        cur[x] = v & 0xff
      }
      for (let x = 0; x < w; x++) {
        const s = x * bpp
        const d = (y * w + x) * 4
        if (bpp === 1) {
          sal[d] = sal[d + 1] = sal[d + 2] = cur[s]
          sal[d + 3] = 255
        } else {
          sal[d] = cur[s]
          sal[d + 1] = cur[s + 1]
          sal[d + 2] = cur[s + 2]
          sal[d + 3] = bpp === 4 ? cur[s + 3] : 255
        }
      }
      cur.copy(prev)
    }
    return { w, h, d: sal }
  },

  escribir(w, h, rgba) {
    const fila = w * 4
    const crudo = Buffer.alloc((fila + 1) * h)
    for (let y = 0; y < h; y++) {
      crudo[y * (fila + 1)] = 0
      rgba.copy(crudo, y * (fila + 1) + 1, y * fila, y * fila + fila)
    }
    const trozo = (nombre, cuerpo) => {
      const len = Buffer.alloc(4)
      len.writeUInt32BE(cuerpo.length)
      const nb = Buffer.from(nombre, 'ascii')
      const crc = Buffer.alloc(4)
      crc.writeUInt32BE(crc32(Buffer.concat([nb, cuerpo])))
      return Buffer.concat([len, nb, cuerpo, crc])
    }
    const ihdr = Buffer.alloc(13)
    ihdr.writeUInt32BE(w, 0)
    ihdr.writeUInt32BE(h, 4)
    ihdr[8] = 8
    ihdr[9] = 6
    return Buffer.concat([
      Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
      trozo('IHDR', ihdr),
      trozo('IDAT', deflateSync(crudo)),
      trozo('IEND', Buffer.alloc(0)),
    ])
  },
}
