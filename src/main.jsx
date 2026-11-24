import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Sin StrictMode a proposito. En desarrollo montaba, desmontaba y volvia a
// montar toda la app, y ejecutaba cada efecto dos veces: con el motor de
// scroll, GSAP y la masa detras, eso es arrancarlo todo por duplicado y era
// buena parte de lo que se sentia como tirones al entrar. En produccion nunca
// hizo nada, asi que no se pierde comprobacion util aqui.
createRoot(document.getElementById('root')).render(<App />)
