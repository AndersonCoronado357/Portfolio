import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Sitio 100% estatico: todo el contenido vive en src/data/portafolio.js.
// Ya no hay proxy /api porque no hay backend al que llamar.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: Number(process.env.PORT) || 4321,
    strictPort: true,
  },
})
