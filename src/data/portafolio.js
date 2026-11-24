// =============================================================
//  CONTENIDO DEL PORTAFOLIO  —  editá TODO acá, sin tocar codigo
// =============================================================
//  Cada seccion controla los textos y las listas de una vista.
//  Agregar/quitar items de las listas actualiza la vista sola.
// =============================================================

export const TEXTOS = {
  // -- Header / navegación --
  header: {
    // etiquetas del menú (el orden y las secciones no cambian, solo el texto)
    navInicio: 'Inicio',
    navSobreMi: 'Sobre mi',
    navProyectos: 'Proyectos',
    navExperiencia: 'Experiencia',
    navTecnologias: 'Tecnologias',
    navHabilidades: 'Habilidades',
    navFormacion: 'Formacion',
    navContacto: 'Contacto',
    // píldora arriba a la derecha (se cruza al hacer scroll)
    pildoraRol: 'Desarrollador de Software',
    pildoraNombre: 'Anderson Coronado',
    // barra que aparece en la galería de proyectos
    galeriaNombre: 'Anderson Coronado',
    galeriaRol: 'Desarrollador Full Stack',
    volver: 'Volver',
  },
  // -- Inicio (hero) --
  inicio: {
    nombre: 'Anderson Coronado',
    tagline:
      'Desarrollador full stack. Construyo aplicaciones completas: la interfaz que ves, la lógica que la mueve y la base de datos que la sostiene.',
    cta: 'Conocer mas',
    loHago: 'Lo que hago',
    area1: 'Frontend',
    area2: 'Backend',
    area3: 'Bases de datos',
    area4: 'Inteligencia artificial',
  },
  // -- Sobre mí --
  sobreMi: {
    saludo: 'Hola, soy Anderson',
    rol: 'Desarrollador Full Stack',
    bio:
      'Programo porque disfruto construir. Para mí el software es como una obra de arte: se piensa, se arma pieza por pieza y termina siendo útil para alguien. Trabajo full stack, así que me muevo igual de bien en el frontend y en el backend. Fuera del código dibujo, pinto, esculpo y juego videojuegos. Al final se trata de lo mismo: crear algo que antes no existía.',
    encuentrame: 'Encuentrame en',
    btnProyectos: 'Proyectos',
    btnExperiencia: 'Experiencia',
  },
  proyectos: {
    eyebrow: 'Proyectos',
    verMasTitulo: 'Mira todo lo que hice',
    verMasBoton: 'Ver todos',
    verMasPie: 'Ver todos mis proyectos',
    // texto del boton que lleva a la landing propia de cada proyecto
    conocerMas: 'Conocer mas',
  },
  experiencia: {
    eyebrow: 'Experiencia',
  },
  tecnologias: {
    eyebrow: 'Mi stack',
    titulo: 'Tecnologias',
  },
  habilidades: {
    eyebrow: 'Habilidades blandas',
    titulo: 'Como trabajo',
    subtitulo:
      'Más allá del código, estas son las formas de trabajar que hacen que un proyecto (y un equipo) avance bien.',
  },
  formacion: {
    eyebrow: 'Formacion',
    carreraTitulo: 'Carrera',
    carreraSubtitulo:
      'Base solida en ingenieria complementada con aprendizaje continuo. La teoria me dio los cimientos; la practica, el criterio.',
    cursosTitulo: 'Cursos',
  },
  contacto: {
    titulo: 'Construyamos algo real',
    parrafo:
      'Estoy abierto a nuevos proyectos y oportunidades. Si tienes una idea en mente o buscas a alguien que la acompañe desde el primer boceto hasta ponerla en producción, escríbeme y la conversamos.',
  },
}

// -- PROYECTOS ------------------------------------------------
// Los primeros 5 son los destacados; el resto sale en "Ver todos".
// `url`: link a la app publicada (se abre en otra pestana).
// `detalle`: todo lo que enseña la vista de "Conocer mas" (src/views/
//   DetalleProyecto.jsx). Sale de leer el repo de cada app, no de reescribir
//   la descripcion de aqui: funcionalidades una por una, mapa de carpetas,
//   capas de la arquitectura con su flujo, decisiones tecnicas y ficha.
// `estetica`: los tokens del propio repo de la app (tipografia, paleta clara
//   y oscura, radio, curva). Esa vista se pinta con la identidad de la app,
//   no con la del portafolio.
// `landing`: sin uso desde que el boton abre la vista de detalle. Se deja por
//   si algun proyecto llega a tener pagina propia fuera del sitio.
export const PROYECTOS = [
  {
    nombre: 'Acmsy',
    enDesarrollo: true,
    color: '#7008F7',
    logo: '/logos/acmsy.svg',
    stack: ['Electron 33', 'React 18', 'Express 4', 'Docker'],
    descripcion:
      'Convierte un PC o mini PC propio en una plataforma de despliegue con dominio propio: sueltas una carpeta o un repositorio y queda publicado en tuapp.tudominio.com con HTTPS, base de datos, login y correo ya resueltos. Se instala en la máquina de cada quien y le quita de encima el servidor y la factura mensual de la nube.',
    arquitectura:
      'Monorepo de tres clientes contra una sola API: cliente Electron empaquetado con electron-builder, SPA en React + TypeScript sobre Vite, y landing en Express con PostgreSQL. OAuth de Google resuelto con un worker de relay para no exponer el secreto. Caddy como proxy inverso enruta cada subdominio a su contenedor, sobre una red Docker compartida y túnel de Cloudflare.',
    url: 'https://acmsy.com',
    captura: 'acmsy',
    landing: '#',
    // Estetica y ficha larga sacadas del repositorio de la app.
    estetica: {
      google: 'Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=Space+Mono:wght@400;700',
      fuente: {
        titulo: '\'Space Grotesk\', system-ui, sans-serif',
        cuerpo: '\'Inter\', system-ui, sans-serif',
        mono: '\'Space Mono\', ui-monospace, monospace',
      },
      radio: '12px',
      curva: 'cubic-bezier(0.22, 1, 0.36, 1)',
      claro: {
        fondo: '#F0E8FD',
        sup: '#FAF7FF',
        texto: '#0B0217',
        suave: '#635A73',
        acento: '#7008F7',
      },
      oscuro: {
        fondo: '#08080A',
        sup: '#101012',
        texto: '#F2EFF6',
        suave: '#8A8593',
        acento: '#A361FA',
      },
    },
    detalle: {
      stackRoles: [
        {
          nombre: 'Electron 33',
          papel: 'La app de escritorio en Windows. Siete vistas que hablan con el agente de WSL y con Ollama.',
        },
        {
          nombre: 'React 18 + Vite 5',
          papel: 'El panel web. Catorce pantallas con rutas por hash, framer-motion y tema claro/oscuro.',
        },
        {
          nombre: 'Express 4',
          papel: 'La landing del apex y el módulo de login que se copia dentro de cada app publicada.',
        },
        {
          nombre: 'Docker',
          papel: 'Cada proyecto y cada base de datos es un contenedor en la red compartida acmsy.',
        },
        {
          nombre: 'Caddy + Cloudflare Tunnel',
          papel: 'La salida a internet: un archivo de ruta por subdominio y un túnel que solo sale.',
        },
      ],
      unaFrase:
        'Plataforma que convierte un equipo propio en un servidor de despliegue con dominio propio: el instalador deja lista la máquina —Docker, túnel, proxy inverso, agente y panel— y desde el panel de escritorio se publican proyectos, se crean bases de datos y se vigilan logs y consumo, todo sobre el hardware del usuario.',
      porQueExiste:
        'Entre tener una aplicación terminada y que alguien pueda entrar por un dominio hay un trabajo que no es programar: Docker, proxy inverso, certificados, túneles, dominios, respaldos. Quien desarrolla por su cuenta acaba pagando Vercel o Railway todos los meses para saltárselo, o dejando un equipo apagado porque no sabe cómo exponerlo. acmsy convierte ese equipo propio en la plataforma de despliegue: el instalador pide el dominio y la cuenta de Cloudflare, deja lista la máquina y a partir de ahí se publica soltando una carpeta o un repositorio, con HTTPS, base de datos, login con Google y correo ya resueltos. Alrededor incluye lo que que si no habría que repetir en cada proyecto: un módulo de entrada con Google, correo transaccional compartido y una API de IA con claves propias. Lo que deja fuera es igual de explícito: el agente no tiene autenticación porque escucha en la red privada de la máquina y el túnel no abre puertos de entrada, no hay cortafuegos dentro de WSL y el instalador todavía no esta firmado. Son decisiones tomadas contra el servidor que corre hoy, escritas como pendientes para cuando el producto se instale en equipos ajenos.',
      funcionalidades: [
        {
          area: 'App de escritorio y conexión con el servidor',
          items: [
            'Ventana propia de 1240×820, con mínimo de 960×640, sin barra de menú y con el fondo morado oscuro de la marca',
            'Al abrir despierta WSL y resuelve la IP de la distribución con hostname -I, porque el reenvío de localhost de WSL es poco fiable',
            'Mantiene viva la máquina virtual de WSL con un proceso de larga duración, y lo relanza solo si la VM se reinicia',
            'Reconexión automática: si una petición falla, vuelve a resolver la IP del agente y la reintenta una vez',
            'Indicador de estado del agente en la barra lateral, consultado cada 5 segundos, que además avisa si Docker no responde',
            'Métricas de CPU, memoria, disco y red en vivo por SSE, con reintento cada 4 segundos si el flujo se corta',
            'Gráfica de CPU y memoria dibujada en canvas, con 80 puntos de historial y ajuste al devicePixelRatio de la pantalla',
            'Vigilancia de salud cada 15 segundos: notificación de escritorio cuando un contenedor proj-* o local-* pasa de corriendo a caído, reiniciándose o muerto',
            'Selector nativo de carpetas de Windows para elegir el proyecto que se va a publicar',
            'Ventana aparte para la galería de imágenes guardadas en las bases de datos, que se abre y se cierra desde la propia app',
          ],
        },
        {
          area: 'Contenedores',
          items: [
            'Tabla de contenedores con nombre, imagen, estado, CPU y memoria, pidiendo las cifras de cada uno por separado',
            'Arrancar, detener y reiniciar cualquier contenedor desde su propia fila',
            'Ficha de detalle con imagen, estado, puertos, redes, comando, política de reinicio, límite de memoria, límite de CPU y fecha de creación',
            'Consola dentro del contenedor: se escribe un comando, se ejecuta con sh -c y la salida vuelve al mismo panel',
            'Logs en vivo del contenedor por SSE, en un cajón lateral que se cierra con la X o pulsando fuera',
          ],
        },
        {
          area: 'Publicar y administrar proyectos',
          items: [
            'Publicar una carpeta de Windows o un repositorio Git (URL, rama y token para repositorios privados) en <subdominio>.acmsy.com',
            'Al elegir la carpeta, el agente detecta el tipo y rellena solo el tipo, el comando de build, el comando de arranque y el puerto',
            'Tipos disponibles: Node, Python, Java, web estática o Dockerfile propio, además de la detección automática de Next, Nuxt y SvelteKit',
            'Límites de memoria y CPU por proyecto, editables después; el contenedor se recrea con los nuevos valores',
            'Casilla que inyecta el login de Google, el correo de Resend, un SESSION_SECRET estable por app, ACMSY_SUBDOMAIN, AI_API_URL y OLLAMA_URL',
            'Selector de base de datos que inyecta con un clic las variables de conexión del motor elegido',
            'Pantalla de publicación con log en vivo y girador, que no se puede cerrar hasta que el build termina',
            'El build sigue corriendo en el agente aunque se cierre la aplicación',
            'Si el proyecto se publicó con login, al terminar aparece la URL de retorno de Google que hay que registrar, copiable con un clic',
            'Republicar tras cambios de código, y actualizar desde Git (pull más redespliegue) en los proyectos clonados',
            'Encender y apagar el proyecto publicado, ver sus logs en vivo y eliminarlo junto con su ruta de Caddy',
            'Editor de variables por proyecto: filas de clave y valor con mostrar u ocultar, añadir y borrar; se aplican al contenedor publicado y al local si están corriendo',
            'Ficha de integraciones por proyecto: estado del dominio en Resend, remitente, límites del plan, envío de correo de prueba y URL de retorno de Google',
            'Prueba en local: levanta el contenedor de producción sin pasar por Caddy, con su propio log en vivo y botón para abrirlo cuando termina',
          ],
        },
        {
          area: 'Desarrollo local nativo',
          items: [
            'Registrar carpetas del propio equipo con nombre, comando y puerto, guardadas en el almacenamiento de la app',
            'Corre el comando real en Windows (npm run dev y equivalentes), con recarga en caliente y sin contenedor de por medio',
            'Reconoce siete servidores de desarrollo —Vite, Next, Astro, Nuxt, Angular, webpack-dev-server y Laravel— y les añade el puerto y la exposición en red si faltan',
            'Lee el script del package.json para decidir qué herramienta es, no solo el comando que se escribió',
            'Inyecta PORT y SERVER_PORT en el entorno y apaga el color de la salida',
            'Antes de arrancar comprueba que el puerto esté libre en IPv4 y en IPv6, y avisa en vez de fallar en silencio',
            'Detecta la URL que anuncia el proceso y, si no la anuncia, sondea el puerto cada segundo hasta que responde',
            'Consola en vivo por proyecto, con la salida limpia de secuencias ANSI y un tope de 100.000 caracteres de historial',
            'Detener mata el árbol de procesos completo con taskkill /T /F, no solo el proceso padre',
            'Editar el nombre, la carpeta, el comando o el puerto de un proyecto, o quitarlo de la lista sin tocar la carpeta',
          ],
        },
        {
          area: 'Bases de datos gestionadas',
          items: [
            'Crear bases de PostgreSQL 16, MySQL 8, MongoDB 7 o SQL Server 2022, cada una como contenedor db-<nombre> con su volumen propio',
            'Usuario y contraseña opcionales; si no se indican, se genera una contraseña fuerte',
            'Aviso propio de cada motor: SQL Server necesita alrededor de 2 GB y tarda varios minutos la primera vez; MongoDB no usa base inicial',
            'Creación asíncrona con log en vivo, en una pantalla que no se puede cerrar hasta terminar',
            'Ficha con host interno, puerto, usuario, contraseña y base, cada dato copiable con un clic',
            'Línea aparte para conectarse desde el PC, con la IP de WSL y el puerto publicado',
            'Encender y apagar una base y ver sus logs en vivo',
            'Eliminar la base conservando el volumen: al recrearla con el mismo nombre los datos vuelven',
            'El puerto publicado se busca libre escaneando los contenedores existentes y los archivos de compose reales, no la metadata',
          ],
        },
        {
          area: 'Usuarios de las apps publicadas',
          items: [
            'Resumen por base de datos: si está encendida, si tiene el login de acmsy, cuántos usuarios hay y cuántos están en línea',
            'Tabla de usuarios de una base con correo, método de entrada, última entrada, estado y número de entradas',
            'El método se muestra resuelto: Google, contraseña, o los dos si la cuenta tiene ambos',
            'Historial de inicios de sesión de un usuario, con fecha y hora en local y el método de cada entrada',
            'Los métodos se traducen a texto legible: correo, Google, registro y recuperación',
            'Se considera en línea a quien tuvo actividad en los últimos diez minutos',
            'Las bases apagadas y los motores sin soporte de usuarios se marcan como tal en vez de dar error',
          ],
        },
        {
          area: 'Login y correo reutilizables',
          items: [
            'Módulo de Express que cada app monta y le da login, registro, recuperación, restablecimiento, entrada con Google y cierre de sesión',
            'Funciona sobre PostgreSQL o MySQL con el mismo código: las consultas se traducen de ? a $1 cuando el motor es Postgres',
            'Crea solo sus propias tablas —auth_users, auth_tokens y auth_logins— y añade las columnas de seguimiento si la base ya existía',
            'El usuario se identifica por el correo en minúsculas: entrar con Google y con contraseña con el mismo correo es la misma cuenta',
            'Registrarse con un correo que ya entró por Google no falla: le añade contraseña a esa misma cuenta',
            'Contraseñas con scrypt (sal de 16 bytes, clave de 64) y comparación en tiempo constante, con mínimo de 8 caracteres',
            'Sesión de 30 días en cookie httpOnly firmada con HMAC, con secure solo cuando la URL pública es https',
            'CSRF por doble envío: un token en cookie firmada que se compara con el campo oculto del formulario',
            'Recuperación por enlace de un solo uso que caduca a los 30 minutos; en la base solo se guarda el hash del token',
            'La respuesta de recuperar contraseña es la misma exista o no la cuenta, y el fallo del correo no la delata',
            'Entrada con Google por OAuth 2.0 escrita con fetch, sin dependencias, con estado firmado en cookie de 10 minutos',
            'Correo por Resend también con fetch: remite desde noreply@acmsy.com con el nombre de la app como remitente visible',
            'Tres plantillas de correo en español con la paleta de acmsy, maquetadas con tablas y estilos en línea',
            'Cada entrada queda registrada con su método, y al cerrar sesión la cuenta deja de contar como en línea al instante',
          ],
        },
        {
          area: 'IA local y API para las apps',
          items: [
            'Lista de los modelos instalados en Ollama con su tamaño y el porcentaje que corre en la GPU',
            'VRAM usada y total leídas con nvidia-smi',
            'Encender un modelo lo carga en memoria sin generar texto; apagarlo libera la GPU al instante',
            'Chat en vivo con el modelo, token a token, con historial separado por modelo dentro de la app',
            'Descargar un modelo del catálogo de Ollama con barra de progreso en megabytes',
            'Descripción automática de cada modelo según su tamaño, con caso aparte para los razonadores',
            'API propia para las apps en http://acmsy-ai:8090/v1, con el formato de OpenAI y la URL copiable',
            'Crear claves de acceso con nombre; la clave completa se muestra una sola vez y luego queda enmascarada',
            'Listado de claves con su fecha de creación y su número de peticiones, y revocación con confirmación',
            'Elegir de dónde salen las respuestas: el modelo local o la nube con Gemini, Groq u OpenRouter',
            'Al elegir un proveedor de nube se piden modelo y clave, con ejemplos de modelo escritos en la propia pantalla',
          ],
        },
        {
          area: 'Panel web en React',
          items: [
            'Catorce pantallas en una sola aplicación: Dashboard, Contenedores, Proyectos, Correos, Usuarios, Local, Git, Bases de datos, IA, Logs, Notificaciones, Máquina, Equipo y Ajustes',
            'Barra lateral que se colapsa de 200 a 74 px con Ctrl+B o con el tirador del borde, y recuerda su estado entre sesiones',
            'Tema claro y oscuro con conmutador en Ajustes, guardado en el navegador y aplicado antes de pintar la primera vez',
            'Panel lateral que crece desde el borde derecho hasta el 42% del ancho, empujando la lista, y se cierra con Escape',
            'Gráfica de área con interpolación monótona, que no se pasa de los datos, y trazo que se dibuja al entrar',
            'Anillos de progreso para CPU, RAM y disco, con el número contando hasta su valor',
            'Grafo de ramas de Git dibujado en carriles de ancho fijo, que se desplaza por dentro cuando hay muchas ramas',
            'Pizarra de esquema de base de datos con relaciones en ángulos rectos y esquinas redondeadas',
            'Vista de correos en dos niveles: remitentes por app y la bandeja de cada uno, con el mensaje abierto en un panel lateral',
            'Vista de logs con filtro por método y reparto de tráfico por proyecto calculado de las mismas filas de la tabla',
            'Vista de equipo con tres roles —propietario, editor y lector— y el alcance de cada uno escrito',
            'Ajustes: foto, biografía de 160 caracteres con contador, qué ve el equipo, pantalla de inicio, arranque automático, respaldos, avisos y cambio de contraseña',
            'Toda animación se anula cuando el sistema pide movimiento reducido',
          ],
        },
        {
          area: 'Landing de acmsy.com y relevo de OAuth',
          items: [
            'Portada del dominio raíz: si hay sesión saluda con el correo, el nombre y el método de entrada; si no, ofrece Google o correo',
            'Monta el mismo módulo de login compartido, así que el apex tiene registro, recuperación y Google sin código propio',
            'Ruta de salud que responde 200 en texto plano, para comprobar el despliegue',
            'El callback de Google del apex mira el final del estado: si trae ~<subdominio> reenvía a esa app, y si no lo atiende el login de acmsy.com',
            'Segunda ruta de relevo equivalente, y un Worker de Cloudflare con la misma lógica en un dominio distinto',
            'El relevo solo redirige a subdominios de acmsy.com, para no convertirse en un redirector abierto',
            'Se empaqueta con un Dockerfile propio sobre node:22-bookworm-slim y escucha en 0.0.0.0:3000',
          ],
        },
      ],
      carpetas: [
        {
          carpeta: 'acmsy-control/',
          que_es: 'La app de escritorio de Windows en Electron: la que administra el servidor de verdad.',
          hijos: [
            {
              carpeta: 'main.js',
              que_es: 'proceso principal: despierta WSL, resuelve la IP del agente, habla con Ollama y vigila la salud',
            },
            {
              carpeta: 'preload.js',
              que_es: 'el puente seguro con el renderer, con aislamiento de contexto y sin Node en la ventana',
            },
            {
              carpeta: 'process-manager.js',
              que_es: 'corre los proyectos en desarrollo nativo y mata el árbol de procesos al detener',
            },
            {
              carpeta: 'renderer/',
              que_es: 'las siete vistas: panel, contenedores, proyectos, local, bases, usuarios e IA',
            },
          ],
        },
        {
          carpeta: 'acmsy-panel/',
          que_es: 'El panel web en React sobre Vite, con su propio sistema de diseño.',
          hijos: [
            {
              carpeta: 'src/sections',
              que_es: 'una pantalla por archivo: catorce secciones más el marcador de las que faltan',
            },
            {
              carpeta: 'src/components',
              que_es: 'el armazón y las piezas dibujadas: gráfica, anillo, grafo de ramas y pizarra de esquema',
            },
            {
              carpeta: 'src/styles',
              que_es: 'los tokens del diseño y las hojas de base, dashboard y módulos',
            },
            {
              carpeta: 'src/lib',
              que_es: 'la navegación y los datos de muestra del prototipo',
            },
            {
              carpeta: 'public/',
              que_es: 'el logo, el favicon y el manifiesto de la PWA',
            },
          ],
        },
        {
          carpeta: 'shared/',
          que_es: 'Los módulos que se copian dentro de cada app publicada: login y correo.',
          hijos: [
            {
              carpeta: 'auth/',
              que_es: 'el router de Express, el adaptador de PostgreSQL y MySQL, el OAuth de Google, las pantallas y las utilidades de cifrado',
            },
            {
              carpeta: 'mailer/',
              que_es: 'el envío por Resend, las tres plantillas de marca y un script de prueba',
            },
          ],
        },
        {
          carpeta: 'landing/',
          que_es: 'El sitio del dominio raíz acmsy.com, en Express, que además hace de relevo de OAuth.',
          hijos: [
            {
              carpeta: 'app.js',
              que_es: 'la portada, la ruta de salud y el reenvío del callback de Google a cada subdominio',
            },
            {
              carpeta: 'shared/',
              que_es: 'su copia propia del módulo de login',
            },
            {
              carpeta: 'Dockerfile',
              que_es: 'imagen sobre node:22-bookworm-slim que escucha en 0.0.0.0:3000',
            },
          ],
        },
        {
          carpeta: 'raíz',
          que_es: 'La documentación operativa del servidor y el worker del relevo de OAuth.',
          hijos: [
            {
              carpeta: 'oauth-relay-worker.js',
              que_es: 'el relevo de OAuth como Worker de Cloudflare, en un dominio distinto al del sitio',
            },
          ],
        },
      ],
      arquitectura: {
        resumen: 'El servidor es una laptop con Windows que corre WSL2 con Ubuntu, y dentro de WSL viven Docker, Caddy, el túnel de Cloudflare y un agente propio en Node y Express que escucha en el puerto 4477. Ese agente es la única API: 45 rutas para salud, métricas, contenedores, proyectos, bases de datos, usuarios, correo, IA e imágenes, con Server-Sent Events para todo lo que hay que seguir en vivo. Contra él hablan dos clientes: la app de escritorio en Electron, que además alcanza directamente a Ollama en Windows porque el agente no puede ver el localhost del anfitrión, y el panel web en React. El tráfico público entra por Cloudflare, baja por un túnel que solo sale, llega a Caddy y este enruta cada subdominio a su contenedor por nombre dentro de la red Docker compartida. Cada proyecto publicado es un contenedor proj-<subdominio> con su archivo de ruta en Caddy, y cada base de datos un contenedor db-<nombre> con su volumen. Las apps publicadas no comparten usuarios: cada una guarda los suyos en su propia base usando el mismo módulo de login copiado desde shared/. El código del agente vive dentro de WSL y no forma parte de este repositorio; aquí están sus dos clientes, la landing del apex, los módulos compartidos y la documentación que describe su API.',
        capas: [
          {
            nombre: 'Clientes',
            piezas: [
              {
                nombre: 'acmsy Control',
                tecnologia: 'Electron 33 · HTML y JavaScript sin framework',
                que_hace: 'La app de escritorio de Windows. Siete vistas contra el agente, más el control directo de Ollama y de los procesos de desarrollo locales.',
              },
              {
                nombre: 'Panel web',
                tecnologia: 'React 18 · Vite 5 · TypeScript · framer-motion',
                que_hace: 'Catorce pantallas con rutas por hash y tema claro y oscuro. Su sistema de diseño vive en tokens CSS con escala fija de escritorio.',
              },
              {
                nombre: 'Landing acmsy.com',
                tecnologia: 'Express 4 · PostgreSQL',
                que_hace: 'Sirve el dominio raíz con el módulo de login compartido y actúa de relevo del callback de Google para las demás apps.',
              },
            ],
          },
          {
            nombre: 'Servidor en WSL2',
            piezas: [
              {
                nombre: 'Agente acmsy-agent',
                tecnologia: 'Node · Express · servicio systemd en el puerto 4477',
                que_hace: 'La única API. Controla Docker, genera Dockerfile, compose y rutas de Caddy, y transmite métricas y logs por SSE.',
              },
              {
                nombre: 'Caddy y cloudflared',
                tecnologia: 'Docker · red compartida acmsy',
                que_hace: 'Un archivo de ruta por subdominio y un túnel de salida hacia Cloudflare. Ningún puerto de entrada abierto.',
              },
              {
                nombre: 'Gateway acmsy-ai',
                tecnologia: 'Node · puerto 8090 · formato OpenAI',
                que_hace: 'Valida la clave de cada app y reenvía al modelo local o al proveedor de nube configurado, sin que la app sepa cuál.',
              },
            ],
          },
          {
            nombre: 'Datos y servicios compartidos',
            piezas: [
              {
                nombre: 'Bases gestionadas',
                tecnologia: 'PostgreSQL 16 · MySQL 8 · MongoDB 7 · SQL Server 2022',
                que_hace: 'Un contenedor y un volumen por base. Las apps conectan por nombre dentro de la red; desde el PC, por la IP de WSL.',
              },
              {
                nombre: 'Módulo de login y correo',
                tecnologia: 'Express · scrypt · HMAC · OAuth 2.0 · Resend',
                que_hace: 'Se copia dentro de cada app y le da cuentas propias en su propia base, con Google, correo y recuperación.',
              },
              {
                nombre: 'Relevo de OAuth',
                tecnologia: 'Cloudflare Worker · ruta en el apex',
                que_hace: 'Recibe el retorno de Google y lo reenvía al subdominio que va escrito al final del estado. Solo redirige a acmsy.com.',
              },
            ],
          },
        ],
      },
      decisiones: [
        {
          titulo: 'La app no habla por localhost, habla por la IP de WSL',
          texto: 'El agente escucha en 0.0.0.0:4477 y la app de escritorio resuelve la dirección con hostname -I antes de la primera petición, porque el reenvío de localhost de WSL resultó poco fiable en este equipo. El precio es que esa IP cambia cada vez que WSL se reinicia, así que la capa de red reintenta una sola vez: ante un fallo de conexión vuelve a resolver la base y repite la llamada. También obligó a que el flujo de métricas se cierre y se rehaga con la base nueva cuatro segundos después de cada corte.',
        },
        {
          titulo: 'Un proceso que solo duerme mantiene encendida la máquina virtual',
          texto: 'WSL2 apaga la VM cuando ningún proceso de Windows la sostiene, y al apagarse se caerían el agente, Caddy y todos los sitios públicos. La app lanza un proceso dentro de WSL cuyo único trabajo es dormir en bucle, y lo relanza a los tres segundos si muere. Es una solución tosca a un comportamiento del sistema, no un servicio, y su contrapartida es que WSL consume memoria mientras la app esté abierta.',
        },
        {
          titulo: 'Publicar responde al instante y el trabajo real se sigue por un flujo aparte',
          texto: 'El POST que publica un proyecto contesta con un estado de construcción y deja el build corriendo en el agente. El log se lee por un endpoint de eventos que termina con un evento explícito de fin con su resultado. Gracias a eso el build sobrevive al cierre de la aplicación, pero exige una pantalla de progreso bloqueada que no se puede cerrar hasta que el flujo confirma el final, y duplicar la ruta: una para pedir y otra para mirar.',
        },
        {
          titulo: 'El agente no tiene autenticación, y está escrito por qué',
          texto: 'No hay tokens ni contraseñas en las 45 rutas: el agente escucha en la red privada de WSL, y la arquitectura no abre ningún puerto de entrada porque el túnel de Cloudflare solo sale. Tampoco se configuró un cortafuegos dentro de WSL: aportaría poco frente a esa topología y puede romper la red de WSL y Docker. Ambas decisiones están documentadas como pendientes de endurecer el día que esto se mude a un mini PC con Ubuntu Server, que es exactamente donde dejarían de ser válidas.',
        },
        {
          titulo: 'La ventana de administración corre con webSecurity apagado',
          texto: 'El renderer de Electron tiene desactivada la seguridad web para poder llamar al agente en la IP privada de WSL sin pelear con el origen. A cambio se mantienen encendidas las dos protecciones que sí importan aquí: aislamiento de contexto y Node fuera de la ventana, con todo el acceso al sistema pasando por un preload que expone una lista cerrada de operaciones. Es una concesión aceptable solo porque la app es local y no carga contenido remoto.',
        },
        {
          titulo: 'Las bases de datos viven en el servidor, no en el PC',
          texto: 'Conectar contenedores de WSL a un motor instalado en Windows resultó frágil: traducción de red, IP cambiante y reglas de escucha. Cada base pasó a ser un contenedor propio con su volumen en la red compartida, estable, respaldable y portable el día de la mudanza. El costo se ve con SQL Server, que pide cerca de 2 GB y una imagen grande, así que la propia pantalla de creación lo advierte antes de empezar.',
        },
        {
          titulo: 'Borrar una base de datos no borra sus datos',
          texto: 'El borrado quita el contenedor pero deja el volumen intacto, de modo que recrear la base con el mismo nombre devuelve todo. El borrado real existe, pero hay que pedirlo aparte. La contrapartida es que se acumulan volúmenes huérfanos que nadie limpia solo, y que un nombre reutilizado por error hereda datos viejos en vez de empezar vacío.',
        },
        {
          titulo: 'El puerto publicado se busca escaneando la realidad, no la metadata',
          texto: 'Al principio cada base se publicaba en el puerto por defecto de su motor y dos bases del mismo motor chocaban. La corrección no fue llevar un contador: se leen los puertos que Docker tiene realmente publicados y los que aparecen en el archivo de compose de cada base, y se sube desde el puerto pedido hasta encontrar uno libre. Se hace así porque la metadata ya se había desincronizado del compose en un caso real, y el archivo generado resultó ser la fuente más fiable.',
        },
        {
          titulo: 'Un solo cliente de Google para todas las apps, con un relevo en el apex',
          texto: 'En Brave para Android, volver de la pantalla de Google le pegaba el modo escritorio al subdominio de destino y la app quedaba inusable en el teléfono. La solución copia lo que hacía Supabase: Google vuelve siempre a acmsy.com y desde ahí se reenvía a la app. El subdominio viaja al final del estado, así que el callback del apex distingue si el retorno es suyo o de otra app. La ventaja escondida es que ninguna app nueva necesita registrar una URL de retorno más en Google: esa ya estaba autorizada.',
        },
        {
          titulo: 'El relevo también existe como Worker, en otro dominio',
          texto: 'Si el navegador trata el dominio raíz y sus subdominios como el mismo sitio, relevar por el apex no basta. Por eso hay una segunda copia del relevo como Worker de Cloudflare, que vive en otro dominio y absorbe ahí la marca de modo escritorio. Está escrito para no ser un redirector abierto: si el estado no termina en un subdominio válido responde con un error, y el destino solo puede ser acmsy.com.',
        },
        {
          titulo: 'El módulo de login se copia dentro de cada app, no se instala',
          texto: 'No hay paquete publicado ni dependencia compartida: la carpeta se copia al proyecto y solo pide el driver de su base de datos. Así una app no arrastra el ciclo de versiones de otra y el módulo funciona en apps que ni siquiera comparten gestor de paquetes. El precio es evidente y se paga cada vez: arreglar algo en el módulo obliga a volver a copiarlo en cada app, y la landing ya lleva su propia copia dentro.',
        },
        {
          titulo: 'El mismo código habla con PostgreSQL y con MySQL',
          texto: 'Las consultas se escriben con marcadores de posición al estilo MySQL y se traducen a numerados cuando el motor es Postgres. Las migraciones se hacen solas y solo tocan las tablas del login, con altas de columna idempotentes para bases que ya existían. La contrapartida es que las diferencias reales entre motores no desaparecen, sino que quedan como bifurcaciones dentro de cada función: el booleano, el identificador autogenerado, el cálculo de actividad reciente.',
        },
        {
          titulo: 'La sesión no tiene almacén: es una cookie firmada',
          texto: 'El identificador del usuario y su correo van dentro de una cookie httpOnly firmada con HMAC y verificada en tiempo constante, sin tabla de sesiones ni memoria compartida, lo que permite que una app publicada arranque sin estado. El precio es que no se puede revocar una sesión concreta desde el servidor: solo caduca a los treinta días o cuando el usuario cierra sesión. El indicador de secure se decide por la URL pública de la app, para que el mismo código funcione en local sin https.',
        },
        {
          titulo: 'El panel lee los usuarios ejecutando el cliente dentro del contenedor',
          texto: 'En vez de instalar drivers de cuatro motores en el agente, se entra al contenedor de la base y se corre el cliente de línea de comandos que cada imagen ya trae, leyendo su salida de texto. Eso mantiene el agente sin dependencias nuevas, y el alcance queda donde vive el login: PostgreSQL y MySQL; MongoDB y SQL Server se marcan como motor sin soporte de usuarios en vez de dar error. A cambio hay que unir las columnas con un separador poco frecuente para volver a partirlas, normalizar a mano la marca de tiempo de Postgres con sus microsegundos y su desfase, y detectar por el error que la tabla de usuarios no existe.',
        },
        {
          titulo: 'El desarrollo local fuerza el puerto leyendo el package.json',
          texto: 'Un comando como npm run dev no dice nada sobre qué herramienta va a arrancar ni en qué puerto, así que el gestor abre el package.json, resuelve el script real y lo compara con una tabla de siete servidores de desarrollo conocidos. Si reconoce uno y falta el puerto o la exposición en red, se los añade al comando. Además comprueba que el puerto esté libre en IPv4 y en IPv6 antes de arrancar, porque localhost puede resolver a cualquiera de los dos. La contrapartida es una tabla de herramientas que hay que mantener cada vez que aparece una nueva.',
        },
        {
          titulo: 'Detener un proyecto local mata el árbol entero de procesos',
          texto: 'El comando se lanza a través de una consola del sistema, así que matar el proceso padre deja vivo el servidor de desarrollo real. Por eso se usa la orden de terminación en árbol y forzada, y al cerrar la aplicación se repite en forma síncrona sobre todos los procesos abiertos. Es agresivo a propósito: un proceso huérfano ocupa el puerto y el siguiente arranque falla por una causa que no se ve.',
        },
        {
          titulo: 'El panel de React usa escala fija de escritorio, sin un solo punto de corte',
          texto: 'Los tamaños de letra están en píxeles fijos y calibrados para pantalla grande: al cambiar el tamaño de la ventana el texto no crece ni encoge, solo se reparte el espacio del layout. En toda la hoja de estilos no hay ninguna consulta de medios por ancho; la única que existe es la de movimiento reducido. Es la decisión correcta para un panel de administración que siempre se abre en un monitor, y la equivocada para cualquier otra cosa: en un teléfono no hay nada que lo rescate.',
        },
        {
          titulo: 'El diseño separa por tono, no por bordes ni sombras',
          texto: 'El token de borde vale transparente y el de sombra vale ninguna: las tarjetas se despegan del fondo por un escalón de color, lavanda contra casi blanco en claro y casi negro contra superficie elevada en oscuro. Tampoco hay anillos de foco, que se anularon a propósito en toda la aplicación. Es coherente con la marca, plana y sin degradados, pero deja la accesibilidad del recorrido por teclado peor de lo que estaba.',
        },
        {
          titulo: 'El acento sube de tono en oscuro porque el morado de marca no se lee sobre negro',
          texto: 'El morado principal se mantiene para los rellenos en modo oscuro, pero el texto de acento pasa a un morado más claro de la misma escala, y hasta los recuadros que deben verse sobre una fila seleccionada se redefinen con tonos más oscuros de la marca. No es un tema oscuro generado invirtiendo el claro: cada superficie, cada tinta y cada estado se volvieron a elegir a mano.',
        },
        {
          titulo: 'Las rutas del panel van por hash y la base del build es relativa',
          texto: 'El enrutador es de hash y la base de Vite es relativa, así que el mismo build funciona servido desde la web y abierto como archivo local dentro de una ventana de escritorio. De paso, varias vistas leen su estado inicial de la propia dirección —el repositorio abierto, la base seleccionada, la subvista, incluso el tema forzado—, de modo que recargar no pierde el sitio. El costo es una URL menos limpia y ningún enlace profundo real para un buscador, que aquí no hace falta.',
        },
        {
          titulo: 'El panel nuevo se construyó primero con datos falsos',
          texto: 'El paquete se declara a sí mismo prototipo visual y el archivo de datos avisa en la primera línea de que son datos falsos pero creíbles, sin backend. La aplicación que administra el servidor de verdad es la de escritorio; el panel de React existe para aprobar el diseño y la navegación de las catorce pantallas antes de conectar nada. Por eso las listas son largas y variadas a propósito —veinte contenedores en la tabla, repositorios de hasta dieciocho ramas, esquemas de hasta catorce tablas—: son datos de prueba escritos para ver si el módulo aguanta, no para parecer bonitos.',
        },
        {
          titulo: 'Los dibujos se calculan en píxeles y se desplazan por dentro',
          texto: 'El grafo de ramas fija el ancho de carril y la pizarra de esquema fija el ancho de ficha, así que con cinco ramas o con ciento veinte el dibujo es el mismo y lo que crece es el lienzo que se desplaza. La curva de las gráficas usa interpolación monótona para que nunca se pase de los datos, un detalle que se nota justo cuando una serie sube de golpe. Es más código que apoyarse en una librería de gráficas, y a cambio no entra ninguna dependencia nueva ni ningún estilo ajeno.',
        },
        {
          titulo: 'El instalador no se firma y se asume el aviso del sistema',
          texto: 'Smart App Control bloquea el ejecutable nuevo por no estar firmado, y desactivarlo en Windows es irreversible, así que no se toca: la app se instala confirmando el aviso o en modo silencioso. La solución correcta —firmar el binario— quedó anotada como pendiente en vez de resolverse degradando la seguridad del equipo.',
        },
      ],
    },
  },
  {
    nombre: 'Dbridge',
    color: '#AB1D93',
    logo: '/logos/dbridge.png',
    stack: ['Angular 22', '.NET 10', 'Electron 33', 'SQL Server'],
    descripcion:
      'Gestor de bases de datos en la web: ves SQL Server, MySQL, PostgreSQL y MongoDB juntos en una sola pizarra, consultas y administras usuarios sin abrir cuatro programas distintos.',
    arquitectura:
      'Tres piezas: un agente de escritorio en Electron que corre en la maquina del usuario y habla con cada motor por su driver nativo, un relay en .NET 10 con Entity Framework y JWT que enruta las peticiones, y la interfaz en Angular. Las credenciales de cada base se cifran y quedan en el equipo del usuario: al relay solo llegan comandos, nunca contrasenas ni datos.',
    url: 'https://dbridge.acmsy.com',
    captura: 'dbridge',
    landing: '#',
    // Estetica y ficha larga sacadas del repositorio de la app.
    estetica: {
      google: 'Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600',
      fuente: {
        titulo: '\'Plus Jakarta Sans\', ui-sans-serif, system-ui, sans-serif',
        cuerpo: '\'Plus Jakarta Sans\', ui-sans-serif, system-ui, sans-serif',
        mono: '\'JetBrains Mono\', ui-monospace, \'SF Mono\', Consolas, monospace',
      },
      radio: '14px',
      curva: 'cubic-bezier(0.32, 0.72, 0, 1)',
      claro: {
        fondo: '#F7EEF4',
        sup: '#FFFCFF',
        texto: '#1C131A',
        suave: '#7E6E7A',
        acento: '#A60E92',
      },
      oscuro: {
        fondo: '#0B090B',
        sup: '#191618',
        texto: '#F9F7F8',
        suave: '#948F93',
        acento: '#D247BB',
      },
    },
    detalle: {
      stackRoles: [
        {
          nombre: 'Angular 22',
          papel: 'La interfaz. Dieciséis pantallas con signals, rutas perezosas y Tailwind 4.',
        },
        {
          nombre: '.NET 10',
          papel: 'El relay. Veinticinco rutas mínimas, JWT ES256 y el reparto de sobres por WebSocket.',
        },
        {
          nombre: 'Electron 33',
          papel: 'El agente de Windows. Vive en la bandeja y escucha en 127.0.0.1:17825.',
        },
        {
          nombre: 'SQL Server',
          papel: 'La base del relay, con Entity Framework 10. Seis tablas: cuentas, tokens de refresco, miembros, lienzos, máquinas y códigos de emparejar.',
        },
        {
          nombre: 'Drivers nativos',
          papel: 'pg, mysql2, oracledb y mongodb; SQL Server va por sqlcmd. Cada motor se abre desde tu máquina, contra 127.0.0.1.',
        },
      ],
      unaFrase: 'Aplicación web para manejar SQL Server, PostgreSQL, MySQL, MariaDB, Oracle y MongoDB desde una sola pizarra, con un agente de Windows que abre los motores en tu máquina y un relay en .NET que solo mueve sobres cifrados.',
      porQueExiste: 'Manejar seis motores en una sola máquina significa seis programas distintos, cada uno con su forma de conectarse y su manera de enseñar lo mismo. Dbridge junta los seis en una interfaz y deja que el trabajo siga ocurriendo donde ya estaba: las credenciales se cifran con DPAPI en el equipo del usuario y ni el servidor ni el navegador las ven nunca. La consecuencia es que hay tres piezas en vez de una —agente, relay e interfaz—, y que sin agente instalado la aplicación no enseña nada: es la decisión que se tomó en vez de pedir contraseñas para guardarlas en la nube. Alrededor de eso está lo que hace falta para trabajar de verdad: pizarra del esquema, consultas escritas a mano, diagramas propios que se vuelcan al motor, equipo con permisos y un temario por motor. Lo que se dejó fuera se dice en el propio código: no hay recuperación de contraseña por correo ni cambio de contraseña desde el perfil, y la foto de perfil vive solo en el navegador hasta que haya dónde guardarla.',
      funcionalidades: [
        {
          area: 'Cuenta y sesión',
          items: [
            'Crear cuenta con nombre de al menos dos caracteres, correo y contraseña de al menos diez caracteres',
            'Entrar con correo y contraseña, con el mismo mensaje de error exista o no la cuenta',
            'Ocho intentos de registro o de entrada por minuto y por dirección; el siguiente recibe un 429',
            'La sesión se reanuda sola al recargar: el token de acceso dura quince minutos y se renueva con la cookie de refresco',
            'La cookie de refresco dura cuatrocientos días y se renueva en cada canje, así que entrar una vez al año basta para no volver a ver la pantalla de acceso',
            'La cookie va HttpOnly, Secure, SameSite=Lax y limitada a la ruta /auth, que es el único sitio donde hace falta',
            'Cerrar sesión revoca de golpe todos los tokens de esa sesión',
            'Tres vistas de acceso —entrar, crear y recuperar— con dirección propia, de modo que el atrás del navegador funciona',
            'La pantalla de recuperar dice que el enlace por correo todavía no está montado, en vez de fingir que se envió',
            'Fondo animado del acceso: dos hilos recorren un circuito de cilindros, hacia adelante al entrar y al revés al recuperar',
            'El armazón del acceso no se recrea al cambiar de vista, así que el hilo del fondo no se corta en el salto',
          ],
        },
        {
          area: 'Conectar tu máquina',
          items: [
            'Descargar el instalador del agente para Windows desde el propio relay, que sirve siempre el más reciente de la carpeta',
            'La pantalla de conectar enseña el peso y la versión reales del instalador publicado',
            'Emparejar de un botón: el navegador está en la misma máquina que el agente y le pasa el código por 127.0.0.1',
            'Código de emparejamiento de doce letras en tres grupos, sin O, I, cero ni uno, válido diez minutos y de un solo uso',
            'Copiar el código para escribirlo a mano en la ventana del agente, que es el otro camino',
            'Pedir la pantalla otra vez devuelve el código que ya estaba vivo, no uno nuevo',
            'Aceptar una invitación en lugar de conectar máquina propia, desde una pantalla aparte',
            'Ver el nombre de la máquina, el usuario de Windows y la versión del agente en cuanto contesta',
            'Desconectar la máquina desde el perfil o desde la propia ventana del agente, con el mismo efecto',
            'Emparejar dos veces la misma máquina no la duplica en la lista: se reconoce por su llave pública y solo se le renueva el testigo',
            'Entrar desde otro navegador o desde el celular: sin agente local, la aplicación habla con tu máquina a través del relay',
            'La lista de máquinas incluye las tuyas y las de quien te dejó entrar, y dice cuál está encendida ahora mismo',
            'Traer al frente la ventana del agente desde la web, solo desde esa misma máquina',
          ],
        },
        {
          area: 'La ventana del agente',
          items: [
            'El agente vive en la bandeja del sistema: cerrar la ventana la esconde y salir es una opción del menú',
            'Arrancar con Windows, marcable desde el menú de la bandeja y desde la propia ventana',
            'Una sola instancia: si el puerto 17825 ya está ocupado se avisa con nombre y apellidos y el programa se cierra',
            'Las seis fichas de motores con sus bases, con el mismo dibujo y los mismos tonos que la web',
            'Escribir usuario y contraseña de cada motor aquí, nunca en el navegador',
            'La credencial se prueba contra el motor antes de guardarse: si no entra, no se escribe nada en el disco',
            'El puerto se resuelve solo: el que le digas, el que se vio atendiendo, y el de siempre del motor',
            'Olvidar la credencial guardada de un motor',
            'Destapar la contraseña guardada con el ojo del campo, solo en esta ventana',
            'Volver a mirar la máquina a petición, sin esperar al recuerdo de diez segundos',
            'Conectar a mano escribiendo el código de doce letras que enseña la web',
            'La barra de título se integra con la ventana, con el color medido del propio fondo',
          ],
        },
        {
          area: 'Motores, bases e instalación',
          items: [
            'Encuentra los motores instalados leyendo el registro de servicios de Windows con reg query, sin pedir ninguna credencial',
            'Distingue instalado de encendido: toca el puerto y espera cuatrocientos milisegundos a que alguien conteste',
            'MariaDB se prueba en el 3307 y en el 3306, y se queda con el que conteste',
            'MySQL descarta los servicios que lleven «maria» para que los dos no aparezcan por el mismo servicio',
            'SQL Server se abre con sqlcmd: sin credenciales guardadas entra con la sesión de Windows, así que ahí no hace falta guardar ninguna contraseña',
            'Lista las bases de cada motor con su peso, cuántas tablas tiene y cuándo se tocó por última vez',
            'Donde el motor no guarda la fecha —PostgreSQL y MongoDB— no se enseña ninguna en vez de inventarla',
            'Ficha por motor con su versión, el servicio donde vive, el puerto y cuántas bases tiene',
            'Los seis motores salen siempre y en el mismo orden; el que no está sale en gris y no lleva a ninguna parte',
            'Dentro de un motor: buscador de bases, filtro entre todas, con tablas y vacías, y orden por tamaño, nombre o recientes',
            'Crear una base nueva desde la pantalla del motor, con la sentencia propia de ese motor',
            'Cambiar de motor sin salir, desde un desplegable de ancho fijo con los seis',
            'Pantalla de instalación con una fila por motor: la orden de winget y el enlace de descarga de su web',
            'Marcar varios motores y copiar todas sus órdenes de una vez, o guardarlas como un archivo .ps1',
            'De salida vienen marcados los motores que faltan, que es a lo que se entra ahí',
            'Cada motor trae sus pasos y la orden con la que comprobar que quedó vivo; donde hace falta algo más se dice cuál: encender TCP/IP y abrir el 1433 en el cortafuegos para SQL Server, mover MariaDB al 3307 si MySQL ya ocupa el 3306',
            'El motor de Oracle no está en winget y se dice tal cual, con su descarga, en vez de inventar una orden',
          ],
        },
        {
          area: 'La pizarra de una base',
          items: [
            'Lee el esquema de verdad: tablas, columnas, tipos, claves primarias, claves ajenas e índices',
            'Cada tabla es una ficha que se arrastra, y las claves ajenas se dibujan como líneas de columna a tabla',
            'Reparto automático de las fichas por columnas, con cada una centrada respecto a las que la apuntan',
            'Zoom entre 0,3 y 2,4 con la rueda, con botones y con ajustar a la vista',
            'Rejilla de puntos de 44 px que se desplaza con el lienzo',
            'Cuatro rutas de línea: curva, recta, ángulos rectos y ángulos redondeados',
            'Tres trazos: sólida, discontinua y de puntos',
            'Cinco marcas de cardinalidad por punta: sin marca, uno, muchos, cero o uno, cero o muchos',
            'Un tirador en medio de cada tramo para mover la línea, y un botón para enderezarla',
            'Guías de alineación al arrastrar, que dicen a qué te estás pegando: a una ficha, a otra línea o a la recta',
            'Selección múltiple con recuadro y alineado en seis direcciones',
            'Menú del clic derecho distinto sobre tabla, columna, relación y fondo',
            'Renombrar tabla y columna escribiendo encima de la propia ficha',
            'Cambiar el tipo desde un desplegable con los tipos de la familia del motor, y escribir el tamaño de los que lo llevan',
            'Añadir y quitar campos, marcar la clave, plegar la ficha y duplicarla',
            'Deshacer y rehacer con Ctrl+Z y Ctrl+Y, o con Ctrl+Mayús+Z',
            'Teclas: N para tabla nueva, F2 para renombrar, Suprimir para borrar, Ctrl+D para duplicar, flechas para mover un píxel y diez con Mayúsculas, F11 para pantalla completa',
            'Cada cambio de la pizarra se traduce a la sentencia de ese motor y se ejecuta contra la base de verdad',
            'Cambiar de base sin salir, desde el desplegable con las hermanas del mismo motor',
            'Dónde dejaste cada ficha y con cuánto acercamiento se guarda en la cuenta, no en el navegador',
          ],
        },
        {
          area: 'Datos y consultas',
          items: [
            'Consola de filas y consultas sobre la base abierta, desde la barra de la pizarra',
            'Tres modos sobre la misma estructura: datos, estructura y consulta',
            'Las primeras filas de una tabla se piden en el idioma del motor: TOP en SQL Server, LIMIT en los demás y find en MongoDB',
            'Buscar entre las filas cargadas',
            'Editar una celda: se arma el UPDATE y se ejecuta; la fila se agarra por su clave, y sin clave por todos sus campos, acotando a una fila donde el motor sabe decirlo',
            'Añadir filas nuevas y borrarlas',
            'Enter guarda la celda y salta a la de abajo, que es como se llena una tabla',
            'Los nulos se escriben distintos de una cadena vacía y vuelven como nulos',
            'Escribir una consulta libre y lanzarla con Control y Enter, sin ningún tope de filas puesto por la aplicación',
            'Guardar consultas con nombre: quedan en la cuenta y se repiten de un clic',
            'Bajar lo que se ve como CSV, con marca de orden de bytes para que Excel respete las tildes',
            'Ver el cuerpo de vistas, procedimientos, funciones y disparadores tal y como está escrito en el motor',
            'Una vista se abre como una tabla y enseña sus filas; lo demás enseña lo que hace',
            'Estructura de la tabla: campos, tipo, si es clave, si admite vacíos, valor por omisión e índices',
            'En MongoDB se acepta lo que se escribe en su consola: find, aggregate, countDocuments y distinct, con las llaves sin comillas',
            'Se dice cuánto tardó la consulta y cuántas filas tocó un INSERT o un UPDATE, que no devuelven filas',
            'Los valores de texto se escapan siempre, y en SQL Server el literal lleva la N delante para no perder la eñe',
          ],
        },
        {
          area: 'Diagramas propios',
          items: [
            'Lista de diagramas guardados, el último que tocaste primero, con a qué motor apunta y si ya se volcó',
            'Crear un diagrama en blanco y renombrarlo desde su propio chip',
            'Catálogo de once piezas de entidad-relación: cuatro entidades, cuatro atributos, dos relaciones y la ficha de tabla',
            'El catálogo se pliega a una barra de 44 px y se abre tocándola entera',
            'Volcar el diagrama a un motor de tablas —MongoDB se queda fuera, ahí no hay campos declarados que atar—: se crea la base, se crean sus tablas con sus campos y su clave, y luego se atan las relaciones',
            'Antes de volcar se dice cuántas tablas y cuántas relaciones se van a crear y en qué motor, porque eso escribe de verdad',
            'Si el volcado falla se dice en qué tabla y por qué, y se para ahí',
            'Elegir motor de destino y cómo se va a llamar la base antes de crearla',
            'El diagrama se guarda en la cuenta, así que aparece igual entrando desde otro navegador',
          ],
        },
        {
          area: 'Equipo',
          items: [
            'Invitar por correo con permiso de editor o de lector, y nada más: cualquier otro papel se rechaza',
            'Si el correo ya tiene cuenta, la invitación queda enganchada a esa cuenta desde el principio y sin código; si no la tiene, se guarda un código de ocho letras para que lo pegue',
            'Comprobar si un correo tiene cuenta antes de invitar, para enseñar su nombre',
            'De quien no tiene cuenta no se dice ni que no la tiene: contesta vacío igual, para que esto no sirva de listado de correos',
            'Aceptar una invitación pegando el código, que se gasta al usarlo',
            'Cambiarle el permiso a quien ya está y sacarlo del equipo, con efecto inmediato',
            'Un mismo correo no puede estar dos veces en el mismo equipo, y lo impide un índice único en la base',
            'Invitarte a ti mismo se rechaza con su mensaje',
            'Quien entró a tu equipo ve tus máquinas en su lista y les manda sobres, sin ver ninguna contraseña ni una fila que no pida',
            'Bastidor de asientos con los que están y los que sobran; un asiento libre lleva a invitar',
          ],
        },
        {
          area: 'Aprender',
          items: [
            'Un temario propio por motor: 315 lecciones repartidas en 68 bloques',
            'Los cinco motores de tablas comparten tronco y cada uno cierra con un bloque de lo que solo pasa en él',
            'MongoDB tiene su temario entero, no el mismo con otro nombre: documentos, colecciones, agregación e incrustar frente a referenciar',
            'Cada lección se lee en tramos cortos, y cada tramo hace una sola cosa: una idea, un ejemplo, un aviso o un ejercicio',
            'Los ejercicios se corrigen ejecutando la consulta y comparando el resultado, no comparando el texto',
            'Se practica contra un banco propio que corre en el navegador: una tienda con clientes, productos y pedidos, y ninguna de tus bases se toca',
            'El banco existe en versión de tablas y en versión de documentos, para que el temario de Mongo se practique con documentos de verdad',
            'El intérprete entiende SELECT, WHERE con AND y OR, ORDER BY, TOP y LIMIT, COUNT y los demás agregados, GROUP BY, HAVING, cruces internos y por la izquierda, subconsultas, INSERT, UPDATE y DELETE',
            'Lo que no entiende lo dice en español, con la lista de columnas que sí conoce, en vez de callarse',
            'Un UPDATE o un DELETE sin WHERE se rechaza y se explica por qué, en vez de llevarse la tabla entera',
            '74 exámenes: uno al cerrar cada bloque y uno final por motor, con 473 preguntas en total',
            'Tres clases de pregunta: elegir la opción, rellenar el hueco de la consulta y escribirla entera',
            'Las preguntas salen todas a la vez, para poder empezar por lo que se sabe',
            'Se corrige solo al entregar, y la explicación de cada respuesta sale ahí, nunca antes',
            'Nota en porcentaje contra el mínimo que pide cada examen',
            'Continuar donde lo dejaste, y empezar de cero con un motor',
            'Cada lección tiene su propia dirección, así que se enlaza y se vuelve por el rastro',
          ],
        },
        {
          area: 'Interfaz y perfil',
          items: [
            'Modo claro y oscuro con conmutador; el cambio entra como un círculo que crece desde la esquina de arriba a la izquierda',
            'El tema se aplica antes de pintar, leyéndolo de una cookie, así que no hay destello al cargar',
            'Quien pidió menos movimiento no ve la transición: el cambio es instantáneo',
            'La isla de navegación es un círculo con la marca que se despliega en píldora con los cinco módulos al pasar el puntero o al tocarla',
            'Dentro de un motor o de un diagrama la isla no sale: ahí la navegación es el rastro de la propia pantalla',
            'Foto de perfil por selector de archivo o arrastrando y soltando, con recorte circular',
            'Elegir qué ve tu equipo de tu ficha: el correo y la descripción se pueden ocultar; el nombre y la foto salen siempre',
            'Elegir con qué pantalla se entra: bases, diagramas o aprender',
            'Formulario de cambio de contraseña con las tres casillas y el ojo para mirar lo escrito; comprueba lo que escribes y avisa de que el cambio todavía no está montado en el relay',
            'Instalable como aplicación en el escritorio o en el celular',
            'Sin bordes, degradados, desenfoques ni sombras duras, y sin barras de desplazamiento a la vista',
            'Nada se mueve, se agranda ni se encoge al pasar el puntero o al hacer clic: lo único que cambia es el tono',
            'Mientras el agente abre un motor se dibuja un cilindro que se llena, en vez de decir que la base no tiene tablas',
          ],
        },
      ],
      carpetas: [
        {
          carpeta: 'web/',
          que_es: 'La aplicación Angular 22 standalone, con signals, rutas perezosas y Tailwind 4.',
          hijos: [
            {
              carpeta: 'src/app/features/app',
              que_es: 'las pantallas de dentro: bases, motor, pizarra, diagramas, aprender, examen, equipo, instalación y perfil',
            },
            {
              carpeta: 'src/app/features/auth',
              que_es: 'las tres vistas de acceso y el circuito de cilindros que hace de fondo',
            },
            {
              carpeta: 'src/app/core',
              que_es: 'sesión, las cuatro guardas, cliente del agente y el sobre cifrado con WebCrypto',
            },
            {
              carpeta: 'src/styles',
              que_es: 'los tokens en oklch y la capa base; el acento es el magenta del logo',
            },
            {
              carpeta: 'public/aprender',
              que_es: 'los seis temarios y los seis paquetes de exámenes, como JSON que se descargan al abrirlos',
            },
          ],
        },
        {
          carpeta: 'relay/',
          que_es: 'El servidor en .NET 10 con minimal APIs. Sabe quién pide y nada más.',
          hijos: [
            {
              carpeta: 'Auth',
              que_es: 'registro, entrada, rotación del refresco y la llave ES256',
            },
            {
              carpeta: 'Machines',
              que_es: 'emparejar, el enchufe WebSocket y el cartero que reparte sobres',
            },
            {
              carpeta: 'Team',
              que_es: 'invitar, cambiar permisos y aceptar con código',
            },
            {
              carpeta: 'Canvases',
              que_es: 'los lienzos: diagramas, pizarras y consultas guardadas',
            },
            {
              carpeta: 'Data',
              que_es: 'las seis entidades y el contexto de Entity Framework',
            },
          ],
        },
        {
          carpeta: 'agent/',
          que_es: 'El programa de escritorio en Electron que corre en el Windows del usuario.',
          hijos: [
            {
              carpeta: 'servidor.mjs',
              que_es: 'el servidor local en 127.0.0.1:17825 y las ocho rutas del agente',
            },
            {
              carpeta: 'enlace.mjs',
              que_es: 'el enchufe con el relay: abre los sobres y cierra las respuestas',
            },
            {
              carpeta: 'secretos.mjs',
              que_es: 'las credenciales cifradas con DPAPI a través de PowerShell',
            },
            {
              carpeta: 'ventana',
              que_es: 'la interfaz del agente en HTML plano, con su propia hoja de estilos',
            },
            {
              carpeta: 'herramientas',
              que_es: 'sacar el icono de la marca, fotografiar la ventana, comprobar cuándo se prueba una credencial y abrir cada motor con la que está guardada',
            },
          ],
        },
        {
          carpeta: 'relay.tests/',
          que_es: 'Pruebas de punta a punta del acceso, contra el relay levantado de verdad.',
          hijos: [
            {
              carpeta: 'AccesoTests.cs',
              que_es: 'que la contraseña no se guarda, que rotar funciona y que reusar mata la sesión',
            },
            {
              carpeta: 'Relay.cs',
              que_es: 'el andamio: levanta la aplicación entera y finge un navegador con sus cookies',
            },
          ],
        },
        {
          carpeta: 'scripts/',
          que_es: 'Dos utilidades del monorepo, nada más.',
          hijos: [
            {
              carpeta: 'dev.mjs',
              que_es: 'busca un puerto libre entre 4300 y 4399 y levanta la interfaz ahí',
            },
            {
              carpeta: 'agente-falso.mjs',
              que_es: 'un agente de mentira para trabajar en la interfaz sin instalar nada',
            },
          ],
        },
      ],
      arquitectura: {
        resumen: 'Tres piezas y una regla: la nube dice quién pide, tu equipo dice quién puede. La interfaz es un SPA de Angular 22 servido en dbridge.acmsy.com. El relay es una aplicación .NET 10 con minimal APIs sobre SQL Server, empaquetada en una imagen de dos etapas que escucha en el 8080 detrás de un proxy; guarda cuentas, sesiones, equipos, lienzos y máquinas, y ni una sola credencial de base de datos. El agente es un programa de Electron que vive en la bandeja de Windows, escucha solo en 127.0.0.1:17825 y guarda las contraseñas de los motores cifradas con DPAPI, atadas a esa sesión de Windows. Cuando el navegador está en la misma máquina que el agente le pregunta directo por 127.0.0.1 y el relay no se entera de nada; cuando está en otra —un celular, otro equipo, alguien de tu equipo— el navegador cierra un sobre con la llave pública de la máquina, el relay lo empuja por el enchufe WebSocket y solo el agente puede abrirlo. Las dos puertas acaban en la misma función de despacho del agente, así que ninguna sabe hacer nada que la otra no. El relay mide cuarenta segundos de espera por sobre y cuatro megabytes de tope; pasado eso contesta que la máquina no respondió.',
        capas: [
          {
            nombre: 'En el navegador',
            piezas: [
              {
                nombre: 'Interfaz Angular',
                tecnologia: 'Angular 22 · signals · Tailwind 4',
                que_hace: 'Dieciséis pantallas con rutas perezosas y cuatro guardas. El token de acceso vive en memoria y no toca ningún almacenamiento del navegador.',
              },
              {
                nombre: 'El sobre',
                tecnologia: 'WebCrypto · ECDH P-256 · AES-GCM',
                que_hace: 'Cierra cada petición con una llave de usar y tirar contra la pública de la máquina, y guarda el secreto para abrir la respuesta.',
              },
              {
                nombre: 'La escuela',
                tecnologia: 'Intérprete propio de SQL y del shell de Mongo',
                que_hace: 'Ejecuta los ejercicios contra un banco en memoria y compara resultados. No sale nada del navegador.',
              },
            ],
          },
          {
            nombre: 'En tu máquina',
            piezas: [
              {
                nombre: 'Agente de escritorio',
                tecnologia: 'Electron 33 · bandeja de Windows',
                que_hace: 'Ventana propia donde se escriben las credenciales, arranque con Windows y una sola instancia por máquina.',
              },
              {
                nombre: 'Servidor local',
                tecnologia: 'http en 127.0.0.1:17825 · ocho rutas',
                que_hace: 'Contesta salud, motores, esquema y consulta. Solo atiende a los orígenes de Dbridge; de fuera no lo alcanza nadie.',
              },
              {
                nombre: 'Almacén de llaves',
                tecnologia: 'DPAPI por PowerShell',
                que_hace: 'Cifra las contraseñas de los motores y la llave privada de la máquina, atadas a esa sesión de Windows.',
              },
              {
                nombre: 'Los motores',
                tecnologia: 'pg · mysql2 · oracledb · mongodb · sqlcmd',
                que_hace: 'Cada motor se abre por su driver nativo contra 127.0.0.1, y SQL Server por sqlcmd. Solo salen las filas.',
              },
            ],
          },
          {
            nombre: 'En la nube',
            piezas: [
              {
                nombre: 'Relay',
                tecnologia: '.NET 10 · minimal APIs · JWT ES256',
                que_hace: 'Veinticinco rutas: cuentas, equipo, lienzos, máquinas y la descarga del agente. No abre ningún sobre.',
              },
              {
                nombre: 'El cartero',
                tecnologia: 'WebSocket · un enchufe por máquina',
                que_hace: 'Guarda las conexiones vivas, numera cada sobre y espera la respuesta de la máquina hasta cuarenta segundos.',
              },
              {
                nombre: 'Base del relay',
                tecnologia: 'SQL Server · Entity Framework 10',
                que_hace: 'Seis tablas: cuentas, tokens de refresco, miembros, lienzos, máquinas y códigos de emparejar. Las migraciones se aplican al arrancar.',
              },
            ],
          },
        ],
      },
      decisiones: [
        {
          titulo: 'El relay mueve sobres cerrados y no puede leer ninguno',
          texto: 'Cuando el navegador no está en la máquina del agente, cada petición se cifra con una llave efímera ECDH P-256 contra la pública de la máquina, y el resultado va en AES-GCM. El relay solo sabe a qué máquina va y de quién viene: ni el SQL, ni las filas, ni el nombre de una tabla. La llave privada se genera en la máquina y se guarda cifrada con DPAPI, así que no existe forma de descifrar desde el servidor. El precio es que la respuesta hay que abrirla con el secreto de aquel envío, que no se puede recalcular, y por tanto el cliente tiene que quedárselo hasta que la máquina conteste.',
        },
        {
          titulo: 'El agente escucha solo en 127.0.0.1 y contesta solo a Dbridge',
          texto: 'El servidor local se enlaza a la dirección de bucle, así que ni otra máquina de la red ni el propio relay lo alcanzan. Encima hay una lista de orígenes: los sitios publicados con su nombre entero y cualquier puerto de esta misma máquina. La única ruta abierta es /salud, que dice que hay un agente y no entrega ningún dato. Fijar el puerto del cliente se probó y se quitó: nunca protegió de otra aplicación local —cualquier página servida en el 4300 pasaba igual—, y bastaba con que el 4300 estuviera ocupado para que la aplicación arrancara en el siguiente y el agente le cerrara la puerta, lo que en pantalla se lee como «el agente no responde».',
        },
        {
          titulo: 'Las contraseñas de los motores se cifran con DPAPI a través de PowerShell',
          texto: 'No hay ninguna biblioteca nativa que compilar ni que firmar: se llama a PowerShell, que ya viene con Windows, y se usa ProtectData en ámbito de usuario. Descifra solo la sesión de ese usuario en esa máquina, así que llevarse el archivo llaves.json no sirve de nada. La contrapartida es cara: cada descifrado abre un proceso y tarda casi un segundo. Por eso la llave de la máquina se descifra una sola vez y se queda en memoria, con un candado para que dos sobres a la vez no la pidan dos veces. Si un secreto fue cifrado por otro usuario de Windows, se olvida en vez de arrastrar algo que no se puede abrir.',
        },
        {
          titulo: 'Cada refresco rota el token, con sesenta segundos de gracia',
          texto: 'Los tokens de una sesión comparten familia y cada canje deja uno nuevo. Si aparece uno ya gastado, la lectura normal es que alguien copió la cookie y se revoca la familia entera. Pero hay un caso cotidiano que se ve idéntico: dos pestañas refrescando a la vez. Dentro de la ventana de gracia se emite token nuevo para las dos y no se toca la marca de uso, para que reintentar no alargue la ventana; fuera de ella sigue siendo un robo. Sin esa ventana, tener dos pestañas abiertas te echaba a la pantalla de entrar sin motivo. El coste es que durante ese minuto una cookie robada sí sirve dos veces.',
        },
        {
          titulo: 'El navegador refresca bajo un cerrojo compartido entre pestañas',
          texto: 'La ventana de gracia arregla el servidor, pero el cliente puede evitar la carrera entera. Se usa el gestor de cerrojos del navegador, que es de todas las pestañas del mismo sitio: la segunda espera a que termine la primera y refresca con el token nuevo. Donde no exista se sigue como antes, porque es preferible a no funcionar. Además, solo un 401 o un 403 cierra la sesión: un 500 del relay o un corte de red devuelven falso sin borrar nada, para no echar al usuario en mitad de lo que estuviera haciendo.',
        },
        {
          titulo: 'Se verifica la contraseña incluso cuando la cuenta no existe',
          texto: 'El endpoint de entrada guarda un hash de mentira y lo verifica cuando no encuentra la cuenta, para que las dos ramas tarden lo mismo. Sin eso, «no existe» responde mucho antes que «contraseña mal» y eso permite averiguar qué correos tienen cuenta a base de cronómetro. El mensaje también es el mismo en los dos casos. El hasher es el de ASP.NET —PBKDF2 con sal por contraseña— con las iteraciones subidas a 210.000, que encarece adivinar y encarece también cada entrada legítima.',
        },
        {
          titulo: 'Una máquina, un enchufe: el anterior se cierra antes de guardar el nuevo',
          texto: 'El agente reconecta cada vez que se le corta la línea, y sin esto quedaban dos sockets registrados para la misma máquina: el viejo, muerto pero con aspecto de abierto, y el bueno. Los sobres se iban por el que tocara y, si tocaba el muerto, no volvía nada y no había manera de explicar por qué. Ahora al aceptar un enchufe se aborta y se descarta el que hubiera. Además los envíos van de uno en uno por socket con un semáforo: dos escrituras simultáneas lo rompen, y con dos pestañas preguntando eso pasa enseguida; a cambio, dos consultas a la misma máquina se serializan en el envío.',
        },
        {
          titulo: 'El latido va por el propio socket, no solo por HTTP',
          texto: 'Avisar por HTTP mantiene fresca la marca de «te vi» en la base, pero no toca la conexión: cualquier intermediario que corte los sockets callados se lo lleva sin decírselo a nadie. El relay se quedaba con un enchufe muerto, seguía diciendo que la máquina estaba encendida, mandaba el sobre por ahí y quien preguntó esperaba una respuesta imposible. Ahora el agente manda un ping por el propio socket cada cuarenta segundos y el relay tiene el intervalo de mantenimiento en treinta; si aun así se cae, el ping falla, salta el error y se reconecta, que es justo lo que antes no ocurría.',
        },
        {
          titulo: 'El cartero serializa el JSON con las reglas web, y eso era un fallo de verdad',
          texto: 'Las respuestas HTTP salían en minúsculas porque las minimal APIs aplican solas ese convenio, así que nadie miró la serialización del enchufe. Ahí se escribía tal cual está en C#: Id y Sobre con mayúscula. El agente lee id y sobre, así que le llegaban los dos indefinidos, se quedaba sin número de sobre y ni siquiera podía contestar que había fallado. El sobre salía y no volvía nada, que es el peor síntoma posible: parece que la máquina está apagada estando perfectamente encendida.',
        },
        {
          titulo: 'Una consulta escrita a mano vuelve entera, sin tope de la casa',
          texto: 'Había un límite de quinientas filas puesto por la aplicación, ajeno al motor y a la consulta: la escribieras como la escribieras volvían quinientas y un aviso de que había más. Se quitó. Quien escribe decide, y para traer poco están LIMIT, TOP y FETCH. El parámetro de tope se conserva solo para el caso en que la pizarra abre una tabla y enseña sus primeras filas, porque ahí no lo pidió nadie. El precio es evidente: un SELECT sin filtro sobre una tabla enorme trae lo que trae.',
        },
        {
          titulo: 'A sqlcmd se le habla por archivos, no por la consola',
          texto: 'Ni la entrada ni la salida de sqlcmd van en UTF-8 cuando pasan por la consola: van en la página de códigos de Windows. Un INSERT con «Camilo Ñáñez» entraba como interrogaciones y «Medellín» volvía roto en el otro sentido, y la bandera -f 65001 sale peor. En la consola de consultas la sentencia se escribe en un archivo temporal y se pasa con -i, y el resultado se recoge con -o: los dos son UTF-8 limpio y de paso desaparece el tope de largo de una línea de comandos. Ahí el separador de columnas tampoco es una barra sino el carácter de unidad, el 0x1F, porque un texto con barra partía la fila en dos. La contrapartida es que cada consulta escribe y borra dos archivos en el temporal, y hay que limpiarlos pase lo que pase.',
        },
        {
          titulo: 'El cifrado de sqlcmd va en opcional, no en obligatorio',
          texto: 'Pedir cifrado y confiar en el certificado deja el saludo colgado en instancias cuyo certificado no se puede negociar: con la sesión de Windows entra al instante y con usuario y contraseña se queda esperando hasta agotar el tiempo, porque el paquete de acceso de la autenticación de SQL siempre viaja cifrado. Con la opción de cifrado en «opcional» la conexión entra. Esa bandera solo existe desde la generación 18 de sqlcmd, así que si el binario instalado no la entiende se repite la llamada a la antigua, y eso obliga a distinguir por el texto del error cuál de los dos fallos fue.',
        },
        {
          titulo: 'Primero se mira si el motor contesta, y después si le gusta la contraseña',
          texto: 'El orden estaba al revés, y el mensaje de un motor apagado trae muchas veces la palabra «authentication» porque el conector se rinde mientras negociaba. Resultado: MongoDB con el servicio parado decía «usuario o contraseña incorrectos» y mandaba a cambiar una contraseña que estaba perfectamente bien. Si no contesta, no es un problema de credenciales: es que no está. Y sin credenciales guardadas, un «requiere autenticación» tampoco es una contraseña equivocada: es que todavía no le has dado ninguna.',
        },
        {
          titulo: 'Las dos puertas del agente acaban en la misma función',
          texto: 'El navegador de esa máquina llama por 127.0.0.1 y el relay entrega un sobre ya abierto, pero las dos entradas van a la misma función de despacho, con una capa que solo cambia de dónde se saca el cuerpo de la petición. Así no hay forma de que una sepa hacer algo que la otra no. La única excepción es deliberada: traer la ventana al frente se rechaza desde fuera, porque quien está en otra máquina no tiene por qué poder hacerte saltar una ventana encima.',
        },
        {
          titulo: 'El agente se da por listo solo si la cuenta coincide',
          texto: 'La comprobación era «está vivo y está emparejado», y eso no dice a cuál. Como la respuesta llega por 127.0.0.1 sin pasar por el relay, el agente se entregaba a quien tuviera el navegador delante, fuera quien fuera, y el código de emparejar se saltaba entero. Ahora el agente manda el correo de la cuenta a la que se ligó y se compara con la sesión. Con matiz: si el agente no dice de qué cuenta es —uno anterior a que esto existiera—, se confía en el emparejamiento, porque una comprobación que deja fuera al dueño legítimo es peor que el agujero que cierra.',
        },
        {
          titulo: 'El relay y el agente se preguntan a la vez, no en cascada',
          texto: 'Antes había que fallar tres sondeos seguidos contra 127.0.0.1 para que a alguien se le ocurriera mirar el relay. En la máquina del agente eso no se nota; en un celular no hay agente local nunca, así que eran diez segundos de «no conectado» en cada carga. Ahora se pregunta por los dos caminos desde el principio y gana el que conteste, con preferencia para el local. Además, si el aparato no tiene puntero fino, ni se sondea 127.0.0.1: no es lento, es tráfico perdido cada segundo y medio de por vida contra algo que no puede existir. Se decide por el puntero y no por el nombre del navegador, así que un portátil táctil sin ratón queda del lado equivocado.',
        },
        {
          titulo: 'Un sondeo perdido no apaga el agente: hacen falta tres',
          texto: 'La aplicación entera saca al usuario a la pantalla de conectar en cuanto el agente se da por caído, así que apagarlo por una respuesta que llegó tarde lo echaba de lo que estuviera haciendo. Hacen falta tres fallos seguidos, unos diez segundos de silencio. Y la espera del sondeo se subió a ocho segundos, porque leer los seis motores tiene ocupada a la máquina y rendirse pronto es lo que hacía que el agente pareciera caído estando vivo. A cambio, cerrar el agente de verdad tarda esos diez segundos en notarse.',
        },
        {
          titulo: 'Los lienzos viven en la cuenta, no en el navegador',
          texto: 'Un diagrama guardado en el almacenamiento del navegador no es tuyo: es de ese navegador. Se pierde al limpiar la caché, no aparece si entras desde otra máquina y no hay forma de compartirlo. Además una pizarra grande es cerca de un megabyte y escribirlo bloquea el hilo. Ahora la copia de trabajo vive en memoria mientras la pestaña está abierta y la de verdad sube al relay con un retardo de 1200 ms para que un arrastre entero cuente como uno solo. Hay índice único por cuenta, clase y nombre —guardar es reemplazar el tuyo— y un tope de un megabyte, para que esto no acabe siendo un almacén de cualquier cosa. El precio es que sin red no hay nada guardado hasta que vuelva.',
        },
        {
          titulo: 'El esquema entero se pide en una sola conexión, marcando cada renglón',
          texto: 'Abrir la conexión es la parte cara: en una máquina cargada tarda entre uno y quince segundos y no siempre lo mismo. Preguntar cinco cosas por separado multiplicaba la espera hasta pasarse del tiempo y decir «no contesta» con el motor perfecto. Se manda un solo bloque en el que cada SELECT empieza por su letra —tablas, columnas, relaciones, índices, objetos— y luego se reparte al leer. El coste es un parseo por renglones que hay que sostener a mano: el cuerpo de los procedimientos va con los saltos de línea marcados y devueltos al final, porque si no un procedimiento de treinta líneas rompía el reparto. En SQL Server el recuento de tablas de cada base se hace con un recorrido dentro de la misma conexión, y cada asomada va protegida: una base a la que la cuenta no llega no puede tumbar la lista entera.',
        },
        {
          titulo: 'Los temarios son datos, no código',
          texto: 'El índice de bloques y lecciones está escrito en TypeScript, pero el contenido vive en public/aprender, un archivo por motor. Escrito en código, cada lección nueva obligaba a recompilar y engordaba lo que descarga el navegador; son 56 lecciones en cada motor de tablas y 35 en MongoDB, 315 en total. Como datos, escribir una lección es escribir un archivo, y solo se descarga el temario del motor que abras, una vez por sesión. Lo que se pierde es el compilador: un archivo mal escrito ya no lo caza nadie, así que si falta o no se puede leer la pantalla dice que está por escribir en vez de romperse.',
        },
        {
          titulo: 'El código de emparejar lo emite el relay, y esto antes era de mentira',
          texto: 'La web se inventaba un código, el agente se tragaba cualquiera y nadie comprobaba nada: el emparejamiento no ligaba nada con nadie y los permisos del equipo repartían acceso sobre una puerta que no existía. Ahora el código sale del relay, se guarda su hash y no el código, dura diez minutos y se gasta una sola vez; la máquina se queda con un testigo propio, del que también se guarda solo el hash. El alfabeto son treinta y dos caracteres sin O, I, cero ni uno, porque el código está pensado para leerse en voz alta. Guardar solo el hash tiene su precio: un código perdido no se puede volver a enseñar, hay que pedir otro.',
        },
        {
          titulo: 'La llave de la máquina se conserva al soltarla',
          texto: 'Al desconectar una máquina de la cuenta se olvidan el código, el correo y el testigo, pero no la llave: la llave es de la máquina y no de la cuenta, así que volver a emparejar no tiene por qué cambiar quién es esa máquina. Eso es justo lo que permite reconocerla al reemparejar por su llave pública y no dejar dos entradas del mismo equipo en la lista. Las credenciales de los motores tampoco se tocan al soltar: pertenecen al usuario de Windows, no a la cuenta de Dbridge, y eso significa que soltar no borra nada de lo guardado.',
        },
        {
          titulo: 'La aplicación separa por tono, y nada se mueve',
          texto: 'Los tokens están escritos en oklch alrededor del mismo tono 335 del magenta del logo, con croma bajo en los neutros: la base es rosada pero se lee neutra. No hay bordes de color, ni degradados, ni desenfoques, ni líneas divisorias, ni barras de desplazamiento a la vista. Lo único que cambia al pasar el puntero o al hacer clic es el tono, y el hover siempre oscurece; el encogimiento al pulsar se quitó a propósito porque delata la interfaz. El rojo existe solo para avisar de un error, en el texto y nunca en un borde, porque un error magenta se confundiría con el foco y con los botones. La contrapartida es que separar sin líneas obliga a que el espaciado y el fondo hagan todo el trabajo.',
        },
        {
          titulo: 'La misma llave firma y comprueba, y si falta el relay no arranca',
          texto: 'Había dos instancias del proveedor de llaves: una firmaba y otra validaba. Con la llave en disco coinciden y no se nota; en cuanto no coinciden —porque el archivo no se pudo leer, o porque en producción una lee la configuración y la otra no— el relay firma con una y valida con otra, y todo lo que pide sesión contesta 401 sin explicación. Ahora hay una sola instancia registrada en el contenedor. En desarrollo se genera y se guarda fuera del repositorio; en producción se exige por configuración y el arranque falla si no está, porque una llave nueva en cada arranque cerraría todas las sesiones en silencio.',
        },
      ],
    },
  },
  {
    nombre: 'Vexcel',
    color: '#6D4AFF',
    logo: '/logos/vexcel.png',
    logoLleno: true,
    stack: ['Angular 22', 'Express 4', 'MongoDB', 'potrace'],
    descripcion:
      'Vectorizador de imagenes: subes un PNG o un JPG, ajustas el trazado y sale un SVG limpio que escala a cualquier tamano sin perder nitidez. Con biblioteca propia, carpetas compartidas por equipo y planes de pago.',
    arquitectura:
      'El motor de vectorizacion corre en el propio backend: sharp arma la mascara de la imagen y potrace traza el contorno, sin depender de ningun servicio externo. Angular 22 con signals contra una API Express sobre MongoDB, sesion en cookie httpOnly y cobro de los planes por Wompi. En produccion el mismo Express sirve la aplicacion compilada desde una sola imagen Docker.',
    url: 'https://vexcel.acmsy.com',
    captura: 'vexcel',
    // Tokens copiados de Vexcel/frontend/src/styles.scss. Ojo: su acento sube
    // de tono en oscuro (#6D4AFF -> #7C5CFF), por eso va dentro de cada tema.
    estetica: {
      google: 'Space+Grotesk:wght@400;500;700&family=IBM+Plex+Mono:wght@400;500;600',
      fuente: {
        titulo: "'Space Grotesk', system-ui, sans-serif",
        cuerpo: "'Space Grotesk', system-ui, sans-serif",
        mono: "'IBM Plex Mono', Consolas, monospace",
      },
      radio: '11px',
      curva: 'cubic-bezier(0.23, 1, 0.32, 1)',
      claro: { fondo: '#F0F0F4', sup: '#FFFFFF', texto: '#141418', suave: '#6B6B7B', acento: '#6D4AFF' },
      oscuro: { fondo: '#0B0B0F', sup: '#16161C', texto: '#EFEFF3', suave: '#9696A3', acento: '#7C5CFF' },
      tenue: 'var(--app-sup)',
    },
    detalle: {
      // Cada tecnologia con el papel que cumple: un stack sin eso es una fila
      // de nombres que no dice nada.
      stackRoles: [
        { nombre: 'Angular 22', papel: 'La interfaz. Ocho pantallas con signals y carga diferida.' },
        { nombre: 'Express 4', papel: 'La API. Siete routers y la sesión en cookie httpOnly.' },
        { nombre: 'MongoDB', papel: 'Los datos. Cuentas, equipos y conversiones guardadas.' },
        { nombre: 'potrace', papel: 'El motor. Convierte la imagen en trazos vectoriales.' },
      ],
      unaFrase:
        'Aplicación web que convierte PNG y JPG en SVG con potrace, con control fino del trazado, biblioteca, equipos con carpetas compartidas y suscripciones cobradas por Wompi.',
      porQueExiste:
        'Vectorizar un logo suele implicar abrir un editor vectorial o pasar por herramientas sueltas que devuelven un SVG sucio y sin control sobre el trazo. Vexcel resuelve ese paso concreto: subes un PNG o un JPG, ajustas cuatro controles y obtienes un SVG limpio, con la advertencia explícita de que funciona con logos e iconos planos y no con fotos. Alrededor de esa conversión el proyecto monta lo que hace falta para que sea un producto y no una demo: cuentas, biblioteca donde reabrir lo convertido, carpetas compartidas por equipo con roles, y planes de pago cobrados de verdad por una pasarela colombiana. La lógica del negocio está en la resolución, no en las funciones: todos los planes hacen todo, lo que cambia es hasta dónde llega la calidad de descarga.',
      funcionalidades: [
        {
          area: 'Cuenta y sesión',
          items: [
            'Registro con nombre, correo y contraseña de mínimo 8 caracteres, con rechazo de correos duplicados',
            'Inicio de sesión con correo y contraseña',
            'Registro e inicio de sesión con Google; si no está configurado, la app lo avisa en vez de fallar',
            'Recuperación de contraseña: se envía un enlace por correo válido durante una hora y la respuesta es siempre la misma exista o no la cuenta',
            'Restablecer la contraseña desde el enlace, con validación de longitud y de coincidencia, y sesión iniciada al terminar',
            'Pantalla de enlace no válido o vencido, con acceso directo a pedir uno nuevo',
            'Cierre de sesión que borra la cookie del servidor y limpia el estado del conversor',
            'Sesión de 30 días que se rehidrata al recargar, incluso dentro de una ruta protegida',
            'Rutas protegidas: sin sesión se redirige a login; con sesión no se puede volver a login, registro ni recuperar',
            'Foto de perfil: subir PNG, JPG o WebP de hasta 8 MB',
            'Editor de la foto en modal: arrastrar para encuadrar y slider de zoom sobre un recorte circular',
            'Preferencia de tema claro u oscuro guardada en la cuenta, no en el navegador',
          ],
        },
        {
          area: 'Conversión de imagen a vector',
          items: [
            'Cargar imagen arrastrando y soltando sobre la zona de destino, con estado visual mientras se arrastra',
            'Cargar imagen desde el selector de archivos, limitado a PNG y JPG de hasta 20 MB',
            'Vectorización a SVG con el motor potrace',
            'Modo un solo color: traza una silueta sólida',
            'Modo color completo: conserva varios colores del original y muestra la paleta detectada automáticamente',
            'Cambio instantáneo entre modos, porque el otro se precalcula en paralelo y queda en caché',
            'Comparación lado a lado del original y el resultado en escritorio, con chip del formato de entrada',
            'Comparador deslizante tipo wipe en móvil, arrastrable entre el 4% y el 96%',
            'Vista del código SVG con botón para copiarlo al portapapeles',
            'Alternar entre vista de imagen y vista de código sin que el layout se mueva',
            'Indicador de progreso mientras se vectoriza',
            'Metadatos del resultado: dimensiones en píxeles, peso del SVG en KB y consumo Full HD del mes',
            'Fondo del panel de resultado transparente (con cuadriculado) o blanco',
            'Botón para empezar con una imagen nueva desde la cabecera',
          ],
        },
        {
          area: 'Controles del trazado',
          items: [
            'Umbral, disponible solo en modo un solo color: define qué tan claro u oscuro separa la figura del fondo',
            'Suavizado de esquinas, de anguloso a redondeado',
            'Nivel de detalle, entre más fiel al original y archivo más liviano',
            'Quitar motas, para ignorar manchas pequeñas de ruido',
            'Color de relleno con selector HSV arrastrable, campo hexadecimal validado, valores RGB de solo lectura y seis muestras rápidas',
            'El color de relleno se deshabilita en modo color completo, con la explicación visible',
            'Panel lateral fijo en escritorio y bottom sheet abierto por un botón flotante en móvil, con handle, botón de cierre y fondo pulsable',
            'Los cambios de slider se aplican con retardo de 400 ms para no lanzar una conversión por cada movimiento',
          ],
        },
        {
          area: 'Descargas y límites por plan',
          items: [
            'Descargar el resultado como .svg con el nombre del archivo original',
            'Copiar el código SVG al portapapeles desde la barra de acciones',
            'Exportar PNG en cuatro calidades: Normal 1024 px, Full HD 1920 px, 2K 2560 px y 4K 3840 px',
            'Las calidades por encima del plan aparecen con candado, y en Free se muestra cuántas Full HD quedan en el mes',
            'Free permite hasta Full HD con 5 descargas al mes; Pro y Starter llegan a 2K; Studio, Business y Enterprise a 4K',
            'La resolución de trazado también depende del plan: 1024 px en Free y 2400 px en el resto',
            'El contador mensual se reinicia solo al cambiar de mes y toda descarga la autoriza el servidor',
            'Solo la primera conversión de cada imagen consume cuota: afinar los controles es gratis',
          ],
        },
        {
          area: 'Biblioteca personal',
          items: [
            'Guardar cualquier conversión en la biblioteca personal',
            'Rejilla de tarjetas con miniatura de fondo transparente, nombre, peso en KB y fecha',
            'Descargar el SVG desde la tarjeta, con extensión añadida si falta',
            'Eliminar un archivo de la biblioteca',
            'Listado de hasta 60 conversiones ordenadas de la más reciente a la más antigua',
            'Estado vacío con acceso directo a convertir una imagen',
            'Cabecera de perfil con foto, nombre, correo, plan actual y número de archivos guardados',
            'Acceso directo a mejorar el plan desde el perfil',
          ],
        },
        {
          area: 'Equipos',
          items: [
            'El equipo se crea automáticamente al entrar con un plan de equipos, con un nombre por defecto',
            'Renombrar el equipo desde la propia cabecera, guardando con Enter o al salir del campo',
            'Contador de asientos usados sobre el límite del plan: 3 en Starter, 10 en Business, ilimitados en Enterprise',
            'Acceso directo a ampliar asientos cuando el equipo está lleno',
            'Invitar por correo eligiendo rol: administrador, editor o lector',
            'Previsualización automática del invitado mientras se escribe el correo: si ya tiene cuenta, muestra su foto y su nombre real',
            'Quien ya tiene cuenta entra como activo; quien no, queda como invitado',
            'Invitación por código de ocho caracteres, con botón de copiar y confirmación visual',
            'Invitación por enlace copiable y por código QR generado en el servidor',
            'Página de aterrizaje de la invitación que se resuelve sola: une al equipo y redirige al conversor',
            'Si el invitado no tiene sesión, se le lleva a iniciarla y la invitación se retoma al volver',
            'Cambiar el rol de cualquier miembro desde la lista',
            'Eliminar miembros del equipo',
            'El propietario aparece marcado y no se puede editar ni eliminar',
            'Cada miembro muestra su estado: activo o invitado',
          ],
        },
        {
          area: 'Carpetas compartidas',
          items: [
            'Carpetas compartidas por equipo, con una carpeta General garantizada siempre',
            'Crear una carpeta escribiendo el nombre en la propia tarjeta, hasta un máximo de veinte por equipo y sin nombres repetidos',
            'Eliminar carpetas, reservado al propietario y a los administradores; sus archivos pasan a la carpeta restante en vez de perderse',
            'Contador de archivos por carpeta',
            'Guardar una conversión directamente en una carpeta del equipo desde el conversor, eligiendo destino en un menú',
            'Ver los archivos de una carpeta con el nombre de quien los guardó',
            'Descargar un archivo de la carpeta compartida',
            'Borrar un archivo compartido, permitido al propietario, a los administradores y a quien lo subió',
            'Estado vacío de carpeta con la instrucción de cómo llenarla',
            'Los miembros invitados usan las carpetas sin necesidad de un plan de equipos propio',
          ],
        },
        {
          area: 'Planes y pagos',
          items: [
            'Catálogo con dos ámbitos: planes individuales (Free, Pro, Studio) y de equipo (Starter, Business, Enterprise)',
            'Cada tarjeta muestra icono, precio mensual en pesos, descripción, lista de características y asientos incluidos en los planes de equipo',
            'Marcado del plan vigente y del plan más elegido',
            'Pago por Wompi en pesos colombianos, con redirección al checkout',
            'Confirmación del pago al volver del checkout, con los tres desenlaces diferenciados: aprobado, pendiente y no completado',
            'Tras contratar un plan de equipo, la app lleva directo a la pantalla de equipo',
            'Banner de suscripción activa con la fecha de renovación o de vencimiento',
            'Cancelar la renovación automática manteniendo el plan activo hasta la fecha pagada',
            'Renovación automática mensual con la fuente de pago guardada',
            'Aviso por correo tres días antes del cobro, una sola vez por ciclo',
            'Degradación automática a Free cuando vence un plan de pago',
            'Bajar a Free en cualquier momento desde el catálogo',
            'Historial de pagos con plan, fecha, medio de pago y monto, leído en vivo de la pasarela',
            'Estados de pago traducidos: aprobado, pendiente, rechazado, anulado y error',
            'Medios de pago traducidos: tarjeta, Nequi, PSE, Bancolombia, Bancolombia QR y Daviplata',
            'Si la pasarela no está configurada, la app lo avisa y no activa nada',
          ],
        },
        {
          area: 'Interfaz y experiencia',
          items: [
            'Modo claro y oscuro con conmutador en el menú de usuario; los invitados heredan la preferencia del sistema',
            'Navegación adaptable: píldora de enlaces en escritorio y barra inferior en móvil, con el acceso a Equipo solo cuando el plan lo incluye',
            'Menú de usuario con nombre, correo, distintivo de plan y accesos a perfil, equipo, planes, pagos y cierre de sesión',
            'Avisos emergentes de éxito, error e información en toda la app, con autodescarte',
            'Transiciones animadas entre rutas, incluido un morph entre login y registro',
            'Aparición escalonada de las listas y confirmación táctil al presionar botones',
            'Todas las animaciones se anulan si el sistema pide movimiento reducido',
            'Aplicación instalable como PWA, en español y con formatos de fecha y moneda locales',
          ],
        },
      ],
      // Cortas a proposito: esto es un mapa para orientarse, no el volcado
      // del repositorio. El detalle fino va en las otras secciones.
      carpetas: [
        {
          carpeta: 'raíz',
          que_es: 'Monorepo de tres piezas. Arriba solo viven la configuración y el empaquetado.',
          hijos: [
            { carpeta: 'package.json', que_es: 'orquesta el monorepo: instala y levanta las dos mitades' },
            { carpeta: 'Dockerfile', que_es: 'imagen única sobre node:22-slim; instala potrace y compila todo' },
          ],
        },
        {
          carpeta: 'frontend/',
          que_es: 'La aplicación Angular 22 standalone, con signals y rutas perezosas.',
          hijos: [
            { carpeta: 'src/app/features', que_es: 'una carpeta por pantalla: conversor, biblioteca, equipo, planes, pagos y entrada' },
            { carpeta: 'src/app/core', que_es: 'servicios, interceptor HTTP y guardas de ruta' },
            { carpeta: 'src/app/layout', que_es: 'el armazón: cabecera, barra de pestañas y avisos' },
            { carpeta: 'src/styles.scss', que_es: 'los tokens del diseño: paleta, tipografías y curvas' },
          ],
        },
        {
          carpeta: 'backend/',
          que_es: 'API REST en Express 4 con TypeScript sobre MongoDB.',
          hijos: [
            { carpeta: 'src/routes', que_es: 'siete routers: auth, google, me, team, pay, vectorize e history' },
            { carpeta: 'src/models', que_es: 'tres esquemas de Mongoose: cuentas, equipos y conversiones' },
            { carpeta: 'src/services', que_es: 'el trazador (sharp + potrace), el correo y el cobro de renovaciones' },
            { carpeta: 'src/middleware', que_es: 'sesión, control de acceso y manejo de errores' },
          ],
        },
        {
          carpeta: 'scripts/',
          que_es: 'Utilidades del monorepo, con un solo archivo dentro.',
          hijos: [
            { carpeta: 'dev.mjs', que_es: 'comprueba potrace, busca puertos libres y levanta las dos partes' },
          ],
        },
      ],
      arquitectura: {
        resumen:
          'Monorepo de tres piezas: un SPA de Angular 22, una API REST de Express + TypeScript sobre MongoDB, y el motor de vectorización que corre dentro del mismo backend (sharp + potrace). En producción todo se empaqueta en una sola imagen Docker: el propio Express sirve el build de Angular desde STATIC_DIR con fallback SPA, detrás de un proxy Caddy. No hay servicio externo de conversión ni almacenamiento de archivos: los SVG, las miniaturas y los avatares se guardan como texto o data URI dentro de Mongo.',
        capas: [
          {
            nombre: 'Cliente',
            piezas: [
              { nombre: 'Frontend Angular', tecnologia: 'Angular 22 · signals · SCSS', que_hace: 'Ocho pantallas con rutas perezosas y guardas. El estado del conversor vive en un servicio con signals.' },
            ],
          },
          {
            nombre: 'Servidor',
            piezas: [
              { nombre: 'API REST', tecnologia: 'Express 4 · TypeScript · JWT', que_hace: 'Siete routers bajo /api. Sesión en cookie httpOnly; multer recibe la imagen en memoria.' },
              { nombre: 'Motor de vectorización', tecnologia: 'sharp 0.33 · potrace', que_hace: 'Arma la máscara, traza el contorno y devuelve el SVG. Corre dentro del mismo backend.' },
            ],
          },
          {
            nombre: 'Datos y servicios',
            piezas: [
              { nombre: 'MongoDB', tecnologia: 'Mongoose 8', que_hace: 'Tres colecciones: cuentas con su plan, equipos con roles y las conversiones guardadas.' },
              { nombre: 'Wompi', tecnologia: 'Checkout Web · COP', que_hace: 'Cobro de los planes con firma de integridad. La activación se verifica contra la pasarela.' },
              { nombre: 'Google y Resend', tecnologia: 'OAuth 2.0 · API de correo', que_hace: 'Entrada con cuenta de Google y los correos de restablecimiento y aviso de cobro.' },
            ],
          },
        ],
        flujo: [
          { de: 'Frontend Angular', a: 'API REST', que_viaja: 'imagen y ajustes' },
          { de: 'API REST', a: 'Motor de vectorización', que_viaja: 'buffer y parámetros' },
          { de: 'Motor de vectorización', a: 'API REST', que_viaja: 'SVG y vista previa' },
          { de: 'API REST', a: 'MongoDB', que_viaja: 'cuentas, equipos y conversiones' },
          { de: 'API REST', a: 'Wompi', que_viaja: 'checkout y verificación' },
        ],
      },
      decisiones: [
        {
          titulo: 'La sesión vive en una cookie httpOnly, sin nada en el navegador',
          texto:
            'El JWT se escribe en una cookie vx_session (httpOnly, sameSite lax, secure solo en producción, 30 días) y el frontend se limita a marcar withCredentials. El token nunca es legible por JavaScript, así que un XSS no puede robarlo. La decisión se llevó hasta el final: no hay localStorage en ninguna parte. La preferencia de tema se guarda en la cuenta con PUT /me/theme, y el código de una invitación pendiente viaja por la URL (/login?join=CODIGO) porque no hay dónde dejarlo. El precio es la contrapartida: rehidratar la sesión con una llamada al servidor antes de activar el router.',
        },
        {
          titulo: 'GET /auth/session devuelve user:null en vez de 401',
          texto:
            'El endpoint que hidrata el frontend al arrancar usa un guard opcional y responde { user: null } cuando no hay sesión. Un 401 sería técnicamente correcto, pero ensucia la consola en cada carga de un visitante anónimo. Aquí \'no hay usuario\' es una respuesta válida, no un error.',
        },
        {
          titulo: 'El orden de montaje de los routers es deliberado',
          texto:
            'payRouter se monta antes que teamRouter e historyRouter. Esos dos aplican authRequired a nivel de router, así que si fueran primero interceptarían rutas públicas de pago como /pay/status por el orden de resolución de Express. Es el tipo de detalle que solo se ve cuando algo deja de funcionar sin motivo aparente.',
        },
        {
          titulo: 'Nunca se confía en el redirect del checkout para activar un plan',
          texto:
            'El endpoint de checkout solo devuelve los parámetros firmados. La activación real ocurre al volver, consultando la transacción contra la API de Wompi con la llave privada, o por webhook con checksum verificado. Además la referencia se construye como vx_{userId}_{plan}_{timestamp} y se rechaza con 403 si no pertenece al usuario que la consulta. La URL de retorno no puede activar nada por sí sola.',
        },
        {
          titulo: 'Con la pasarela activa, ningún plan de pago se activa sin pagar',
          texto:
            'PUT /me/plan responde 402 PAYMENT_REQUIRED para cualquier plan distinto de \'free\' cuando Wompi está configurado. El frontend replica la regla y no cambia nada si la pasarela no está lista. Bajar a free siempre se permite: es el camino de cancelación.',
        },
        {
          titulo: 'El historial de pagos no se guarda: se lee de Wompi',
          texto:
            'En vez de duplicar transacciones en Mongo (con el riesgo de que queden desincronizadas), el backend pagina hasta seis páginas de los últimos 18 meses contra la API de Wompi y filtra por el prefijo de referencia del usuario. La pasarela es la fuente de verdad.',
        },
        {
          titulo: 'El webhook responde 200 incluso cuando falla',
          texto:
            'El catch del handler devuelve 200. Wompi reintenta ante cualquier respuesta que no sea 2xx, y un error propio del servidor generaría un bucle de reintentos. Se acusa recibo siempre y el problema se resuelve del lado propio.',
        },
        {
          titulo: 'Una renovación PENDING también extiende el plan',
          texto:
            'Si el cobro automático devuelve APPROVED o PENDING, se suma un mes. Solo se degrada a free con un rechazo explícito. La idea es no castigar al usuario por la latencia de la pasarela: si al final falla, el ciclo del día siguiente lo corrige.',
        },
        {
          titulo: 'El plan vencido se degrada de forma perezosa',
          texto:
            'No hay job que baje planes. Una función calcula el plan efectivo (si la fecha de vigencia ya pasó, cuenta como free) y en /auth/me y /auth/session, si el plan efectivo difiere del guardado, el downgrade se persiste. El estado se corrige la próxima vez que el usuario aparece.',
        },
        {
          titulo: 'El servidor arranca aunque MongoDB no esté disponible',
          texto:
            'La conexión usa un timeout de selección de 4 segundos y, si falla, el proceso sigue vivo: vectorizar no depende de la base. Solo los routers que la necesitan responden 503. Además, la URI se enmascara antes de imprimirla en los logs para no filtrar credenciales.',
        },
        {
          titulo: 'La máscara monocromo se umbraliza por distancia al color de fondo, no por luminosidad',
          texto:
            'El pipeline aplana el alfa, supermuestrea a 2x con lanczos3 (potrace traza a resolución de píxel: a más resolución, curvas más suaves), aplica mediana 3x3 para quitar píxeles sueltos de compresión y un desenfoque leve que evita el borde dentado, y recién ahí umbraliza midiendo la distancia al color dominante del anillo exterior de la imagen. Así funciona con fondo blanco, negro o de color, y tolera fondos casi-blancos. Como consecuencia, el parámetro de despeckle se reescala al cuadrado del factor de supermuestreo: si no, subir la resolución cambiaría en silencio lo que significa el slider.',
        },
        {
          titulo: 'El modo color se traza por apilado por unión, no como capas independientes',
          texto:
            'Cada capa se traza como la unión de su región con todas las que van encima, y se pintan de mayor a menor área. Cada píxel queda con el color de su propia capa, sin costuras entre regiones ni dilatación que engorde el contorno exterior. La paleta se construye en espacio CIE Lab y solo funde tonos con distancia menor a 7, para no borrar colores legítimamente cercanos. Hay un script de validación automática que genera una imagen con dos tonos a distancia Lab ~11 (justo por encima del umbral) y mide área sobrante, error en fronteras, halos y costuras.',
        },
        {
          titulo: 'Los sliders no exponen los rangos crudos del trazador',
          texto:
            'Los porcentajes 0-100 del panel se traducen a rangos acotados y útiles (umbral 60-220, no 0-255; tolerancia de simplificación 0.02-1.0). Todo el recorrido del slider da un resultado razonable: no hay extremos que rompan el trazo. El backend vuelve a acotar por su cuenta, sin fiarse del cliente.',
        },
        {
          titulo: 'Solo la primera pasada de cada imagen consume cuota',
          texto:
            'Afinar los sliders no gasta descargas. Un flag marca la primera conversión de cada archivo como contable y se apaga en cuanto se resuelve; el precálculo en segundo plano siempre envía countUsage en false. Además, cambiar de modo es instantáneo porque el otro modo ya se vectorizó en paralelo y está en caché, indexado por la firma de los parámetros.',
        },
        {
          titulo: 'El plan cambia la resolución, no las funciones',
          texto:
            'Todos los planes tienen todas las funciones; lo que cambia es hasta dónde llega la calidad. Free traza a 1024 px y exporta hasta Full HD con 5 descargas al mes; los planes superiores llegan a 2K o 4K y trazan a 2400 px. La autorización se decide en el servidor: el candado que se ve en el menú de calidades es solo cosmético.',
        },
        {
          titulo: 'Al leer una conversión ajena se responde 404, no 403',
          texto:
            'El resto del backend usa 403 cuando corresponde, pero al pedir un archivo que no es tuyo ni de tu equipo la respuesta es \'no encontrado\'. Así no se revela que ese identificador existe.',
        },
        {
          titulo: 'Los miembros de un equipo no necesitan plan de equipos propio',
          texto:
            'El equipo se resuelve por dueño o por correo en la lista de miembros. El plan de equipos solo se exige para administrar (invitar, cambiar roles, renombrar). Quien fue invitado usa las carpetas compartidas con su cuenta gratuita: el que paga es el dueño.',
        },
        {
          titulo: 'Borrar una carpeta compartida no borra archivos',
          texto:
            'Al eliminar una carpeta, sus archivos se reasignan a la primera carpeta restante y se garantiza que siempre exista una \'General\'. Los códigos de invitación, por su parte, se generan con un alfabeto de 32 caracteres que excluye I, O, 0 y 1, porque están pensados para dictarse o leerse de un QR.',
        },
        {
          titulo: 'El origen del enlace de invitación se sanea antes de entrar al QR',
          texto:
            'El parámetro origin se filtra con una expresión que deja solo caracteres válidos de URL antes de construir el enlace que se codifica en el QR. Sin eso, el QR sería un vector de inyección de contenido arbitrario.',
        },
        {
          titulo: 'Los formularios de credenciales leen el valor real del DOM',
          texto:
            'Login y registro guardan referencias a los inputs y, al enviar, leen nativeElement.value con ngModel como respaldo. El autocompletado del navegador no siempre dispara el evento que sincroniza el binding, y el resultado era un formulario visualmente lleno que se enviaba vacío.',
        },
        {
          titulo: 'La app separa por tono de fondo, no por bordes ni sombras',
          texto:
            'No existe ningún token de sombra de elevación: las pocas apariciones de box-shadow son anillos de foco, el pulgar de los sliders y máscaras de recorte. Tampoco casi bordes (once declaraciones en toda la app, dos de ellas \'none\'). Las tarjetas se separan del fondo por diferencia de tono, y en modo oscuro pasa lo mismo con negro profundo contra superficie elevada. El hover de tarjeta es explícitamente quieto: cambia el color, no mueve ni agranda, y está limitado a punteros finos para no dejar estados pegados en móvil.',
        },
        {
          titulo: 'El service worker es passthrough a propósito',
          texto:
            'Registra los listeners de install, activate y fetch, pero el de fetch está vacío y nunca intercepta respuestas: la instalabilidad como PWA solo exige que el listener exista. El modo offline queda pendiente en vez de introducir una capa de caché a medias. Aparte, el propio sw.js se sirve con Cache-Control no-store, porque si no el proxy lo guardaría horas y los cambios no se propagarían.',
        },
        {
          titulo: 'Las View Transitions son parte del diseño, con salida de emergencia',
          texto:
            'El router usa view transitions y el paso de login a registro hace un morph del panel de marca y del formulario. Eso obliga a detalles como navegar primero y mostrar el toast en el then, porque si no la transición aborta la navegación. Un bloque completo de prefers-reduced-motion anula animaciones, transiciones y todos los grupos de view-transition.',
        },
        {
          titulo: 'El Dockerfile asume que la red al registro npm es mala',
          texto:
            'Imagen única y secuencial, con cada npm ci envuelto en un bucle de shell que reintenta hasta cinco veces con espera de 15 segundos, y timeouts de fetch subidos a tres minutos. Es una decisión tomada contra la realidad del servidor de despliegue, no contra el ideal. El orquestador de desarrollo va en la misma línea: busca puertos libres validando que se pueda enlazar en IPv4 y en IPv6, porque localhost puede resolver a ::1.',
        },
      ],
      ficha: [
        { clave: 'Tipo', valor: 'Aplicación web SaaS con planes, pagos y equipos' },
        { clave: 'Qué convierte', valor: 'PNG y JPG a SVG (hasta 20 MB por archivo)' },
        { clave: 'Frontend', valor: 'Angular 22 standalone (signals, rutas lazy, SCSS), TypeScript 6, RxJS 7.8' },
        { clave: 'Backend', valor: 'Node 22 + Express 4 + TypeScript en ESM' },
        { clave: 'Base de datos', valor: 'MongoDB con Mongoose 8 (colecciones users, teams, conversions)' },
        { clave: 'Motor de vectorización', valor: 'sharp 0.33 + potrace (binario del sistema, con fallback al port JS)' },
        { clave: 'Autenticación', valor: 'JWT de 30 días en cookie httpOnly (vx_session), bcrypt a 10 rondas, Google OAuth 2.0, sin almacenamiento en el navegador' },
        { clave: 'Pagos', valor: 'Wompi (COP): checkout firmado, verificación por API, webhook y renovación automática mensual' },
        { clave: 'Correo', valor: 'Resend (restablecer contraseña y aviso de cobro 3 días antes)' },
        { clave: 'Pantallas', valor: '10 rutas: login, registro, recuperar, restablecer, unirse, conversor, biblioteca, equipo, planes, pagos' },
        { clave: 'Endpoints', valor: '43 rutas HTTP entre /api, /auth y /health' },
        { clave: 'Planes', valor: 'Free, Pro, Studio (individuales) y Starter, Business, Enterprise (equipos de 3, 10 e ilimitados)' },
        { clave: 'PWA', valor: 'Instalable (manifest + service worker passthrough), modo claro/oscuro guardado en la cuenta' },
        { clave: 'Interfaz', valor: 'Space Grotesk e IBM Plex Mono, acento violeta #6D4AFF, corte móvil en 760 px, view transitions y prefers-reduced-motion' },
        { clave: 'Despliegue', valor: 'Imagen Docker única sobre node:22-slim; el mismo Express sirve el build de Angular con fallback SPA, detrás de un proxy Caddy' },
        { clave: 'Puertos', valor: 'Backend 5178 en desarrollo y 3000 en producción; frontend 4200 con proxy generado hacia /api' },
        { clave: 'Estructura', valor: 'Monorepo: frontend/, backend/ y scripts/ con un orquestador de desarrollo propio' },
        { clave: 'Repositorio', valor: 'github.com/AndersonCoronado357/Vexcel' },
      ],
    },
    landing: '#',
  },
  {
    nombre: 'Grabber',
    color: '#FA05A0',
    logo: '/logos/grabber.png',
    logoLleno: true,
    stack: ['Fastify 5', 'Prisma 5', 'SQL Server', 'TypeScript'],
    descripcion:
      'Gestor de descargas con biblioteca propia: cola con progreso en vivo, colecciones, filtros, papelera y preferencias, mas cuentas con doble factor.',
    arquitectura:
      'API en Node 20 con Fastify y Prisma sobre SQL Server. El progreso de cada descarga viaja por SSE, asi que la interfaz se actualiza sola sin preguntar cada segundo. Sesiones con refresh rotativo y 2FA. Pruebas con Vitest.',
    url: 'https://grabber.acmsy.com',
    captura: 'grabber',
    landing: '#',
    // Estetica y ficha larga sacadas del repositorio de la app.
    estetica: {
      google: 'Hanken+Grotesk:wght@400;500;600;700',
      fuente: {
        titulo: '\'Hanken Grotesk\', system-ui, sans-serif',
        cuerpo: '\'Hanken Grotesk\', system-ui, sans-serif',
        mono: 'ui-monospace, monospace',
      },
      radio: '10px',
      curva: 'cubic-bezier(0.16, 1, 0.3, 1)',
      claro: {
        fondo: '#F5F4F2',
        sup: '#FFFFFF',
        texto: '#0F0F0F',
        suave: '#6E6E6E',
        acento: '#FA05A0',
      },
      oscuro: {
        fondo: '#0A0A0A',
        sup: '#161616',
        texto: '#F2F0ED',
        suave: '#8A8A8A',
        acento: '#FA05A0',
      },
    },
    detalle: {
      stackRoles: [
        {
          nombre: 'Fastify 5',
          papel: 'La API. Nueve grupos de rutas bajo /api/v1, más el login con Google montado en la raíz.',
        },
        {
          nombre: 'Prisma 5',
          papel: 'El acceso a datos. Dieciocho modelos y cinco migraciones sobre SQL Server.',
        },
        {
          nombre: 'SQL Server',
          papel: 'La base. La propia tabla de trabajos es la cola, con toma de turno por ROWLOCK y READPAST.',
        },
        {
          nombre: 'TypeScript',
          papel: 'Todo el backend en ESM, ejecutado con tsx sin paso de compilación.',
        },
        {
          nombre: 'yt-dlp',
          papel: 'El extractor. Analiza el enlace y baja el archivo; ffmpeg mezcla video y audio.',
        },
      ],
      unaFrase: 'Gestor de descargas de video y audio de seis plataformas: una API en Fastify encola el trabajo, yt-dlp lo baja al disco y el progreso llega a la interfaz por SSE, con biblioteca, colecciones y papelera guardadas en SQL Server.',
      porQueExiste: 'Bajar un video suele terminar en una web con anuncios que devuelve un archivo sin nombre y sin rastro de dónde salió. Grabber convierte eso en una herramienta con memoria: cada descarga queda en una biblioteca propia con su plataforma, su calidad, su peso, su URL de origen, notas y etiquetas, y todo corre en el equipo del usuario, sin telemetría ni servicios de terceros para los archivos. Se decidió incluir lo que hace falta para que sea un producto y no un script: cuentas con doble factor, cola con progreso en vivo, papelera con retención, notificaciones push y planes de pago contra una pasarela real, Wompi. Se dejó fuera el editor de video y cualquier procesamiento posterior: el proyecto termina donde el archivo queda en disco. También se dejó fuera el muro de registro: un invitado puede probar con tres descargas al día antes de crear cuenta.',
      funcionalidades: [
        {
          area: 'Cuenta y sesión',
          items: [
            'Registro con correo, nombre de usuario de 3 a 32 caracteres (letras, números, punto y guion bajo) y contraseña de 8 a 200',
            'Inicio de sesión con correo y contraseña, con el hash guardado en argon2id',
            'Entrada con Google (OAuth 2.0): si el correo es nuevo crea la cuenta con un usuario derivado del correo y sin contraseña',
            'Cuando el acceso con Google falla, la vuelta trae el motivo y la aplicación lo dice: no configurado, cancelado, sesión caducada, token rechazado, perfil ilegible o cuenta no disponible',
            'Verificación en dos pasos por TOTP de 6 dígitos, con tolerancia de un período de 30 segundos hacia atrás y hacia delante',
            'Al activar el doble factor se entregan ocho códigos de recuperación de un solo uso',
            'Recuperación de contraseña por correo con enlace válido 30 minutos; la respuesta es la misma exista o no la cuenta',
            'Cambio de contraseña desde Ajustes exigiendo la actual, que cierra todas las demás sesiones',
            'Lista de sesiones activas con dispositivo, navegador, dirección IP y última actividad, con la actual marcada',
            'Cerrar una sesión concreta o todas las demás de golpe',
            'Eliminar la cuenta escribiendo el nombre exacto: borrado lógico que libera el correo y el usuario para futuros registros',
            'Límite de 10 intentos por 15 minutos y por IP en registro, login, verificación y recuperación',
          ],
        },
        {
          area: 'Analizar enlaces y encolar',
          items: [
            'Análisis de una URL que devuelve título, autor, duración, vistas, fecha, miniatura y formatos disponibles',
            'Detección automática de la plataforma por la URL: YouTube, Instagram, TikTok, X, Facebook y Reddit',
            'Modo lote: hasta 20 enlaces analizados de una vez, cada fallo con su propio error sin tumbar el resto',
            'Ocho calidades: 2160p, 1440p, 1080p, 720p, 480p, 360p, Audio MP3 y Audio M4A',
            'Cada calidad muestra el peso estimado antes de descargar, leído de los formatos que expone la fuente',
            'Casillas de subtítulos (pistas en español e inglés) y miniatura al encolar',
            'Encolado por lote de hasta 50 descargas en una sola llamada',
            '«Descargar» encola y además baja el archivo al equipo cuando termina; «Añadir a la cola» solo encola',
            'El análisis se guarda 15 minutos y se comparte entre usuarios: la misma URL no relanza el extractor',
            'Errores diferenciados por causa: enlace no válido, video no disponible, video privado, cuenta privada y plataforma no admitida',
            'Límite de 30 análisis por minuto y por IP',
          ],
        },
        {
          area: 'Cola y progreso en vivo',
          items: [
            'Cola con los últimos 100 trabajos, del más reciente al más antiguo',
            'Progreso en vivo por SSE: porcentaje, velocidad en MB/s y tiempo restante',
            'Pausar una descarga mata el proceso hijo y conserva el archivo parcial',
            'Reanudar, reintentar tras un error y cancelar, cada uno en su propia ruta',
            'Pausar toda la cola de una vez',
            'Limpiar los completados de la lista sin borrar nada de la biblioteca',
            'Descargas simultáneas configurables por usuario en 1, 2, 3 o 5, con tope duro del servidor en 3',
            'Reintento automático hasta tres intentos, con esperas de 10 y 20 segundos, solo en errores de red o tiempo agotado',
            'Los trabajos que quedaron a medias cuando se reinició el servidor vuelven solos a la cola',
          ],
        },
        {
          area: 'Biblioteca, colecciones y papelera',
          items: [
            'Cuatro pestañas: Todo, Favoritos, Colecciones y Papelera',
            'Búsqueda por título y autor que ignora tildes y mayúsculas',
            'Búsqueda en el servidor por título con índice de texto completo de SQL Server; sin índice cae a LIKE y lo avisa en el arranque',
            'Filtros por plataforma, formato, calidad y fecha (hoy, esta semana, este mes, este año)',
            'El filtro de calidad «Audio» agrupa MP3 y M4A en un solo valor',
            'Paginación por cursor codificado en base64url, nunca por OFFSET, estable para el desplazamiento continuo',
            'Marcar favoritos con la estrella, con cambio inmediato que se revierte si el servidor rechaza',
            'Ficha de detalle con autor, plataforma, calidad, peso, duración, URL de origen y colección',
            'Notas por archivo, guardadas con retardo mientras se escribe',
            'Etiquetas por archivo, hasta 20, normalizadas a minúsculas y sin repetir',
            'Selección múltiple con acciones en lote de hasta 200 elementos: favorito, mover a colección, volver a descargar y enviar a la papelera',
            'Colecciones con nombre único por usuario y color de una paleta de tres tonos',
            'Borrar una colección no borra sus archivos: solo desaparece la agrupación',
            'Papelera con borrado lógico, indicando a cada elemento cuántos días le quedan de los 30 de retención',
            'Restaurar desde la papelera o vaciarla, lo que sí borra los archivos del disco',
            'Reconciliación diaria contra el disco: el archivo que ya no está se marca y genera una notificación',
          ],
        },
        {
          area: 'Reproductor y archivos',
          items: [
            'Reproductor integrado que abre el video dentro de la aplicación sin descargarlo',
            'El servidor responde a peticiones Range, así que se puede saltar por el video sin bajarlo entero',
            'Controles propios: reproducir y pausar, barra de posición, volumen, silencio y pantalla completa',
            'Atajos de teclado: espacio o K pausa, las flechas saltan 5 segundos y ajustan volumen, M silencia y F abre pantalla completa',
            'Los controles se ocultan tras 2,4 segundos sin mover el ratón mientras reproduce',
            'Descargar el archivo al equipo desde la ficha de detalle o desde la cola al terminar',
          ],
        },
        {
          area: 'Ajustes',
          items: [
            'Cinco pestañas: Perfil, Preferencias, Seguridad, Plan y Notificaciones y datos',
            'Perfil con nombre visible de hasta 80 caracteres, usuario de hasta 32 y biografía de hasta 280',
            'Comprobación de disponibilidad del nombre de usuario mientras se escribe, con el motivo del rechazo',
            'Foto de perfil con recortador circular propio: arrastrar para encuadrar, rueda del ratón y pellizco táctil para el zoom hasta 3x',
            'Preferencias de idioma, zona horaria, calidad y formato por defecto',
            'Plantilla del nombre de archivo con las variables {titulo}, {calidad}, {plataforma} y {fecha}, con vista previa en vivo',
            'Tarjetas de estadísticas: descargas totales, almacenamiento usado, colecciones y fecha de alta',
            'Barras de almacenamiento por tipo de archivo: 4K, Full HD, HD/SD y Audio',
            'Exportación de toda la biblioteca en CSV o JSON, incluidos los elementos de la papelera',
            'Eliminar la cuenta con confirmación escribiendo el nombre',
          ],
        },
        {
          area: 'Notificaciones',
          items: [
            'Campana con contador de no leídas que se marcan todas al abrir el desplegable',
            'Las últimas 50 notificaciones con título redactado por tipo y fecha relativa (hoy, ayer, hace 5 días)',
            'El backend genera tres avisos: descarga completada, descarga fallida y archivo que ya no está en disco',
            'Notificaciones push nativas con VAPID, que llegan aunque la aplicación esté cerrada',
            'Matriz de preferencias de cinco eventos por tres canales: correo, push y aplicación',
            'Al encender el push se pide permiso, se suscribe el navegador y se manda una notificación de prueba',
            'Tocar la notificación enfoca la pestaña ya abierta y la lleva a la vista correspondiente',
            'Con la aplicación abierta el aviso se dispara localmente, sin esperar al viaje del servidor',
          ],
        },
        {
          area: 'Planes, pagos y suscripción',
          items: [
            'Tres planes en pesos colombianos: Free a $0, Pro a $30.000 y Studio a $60.000 al mes',
            'Free da 3 descargas al día y 720p; Pro llega a 4K con 200 GB de biblioteca; Studio a 1 TB con modo lote y API',
            'Pago por Wompi: la aplicación abre el Checkout Web con la referencia y la firma de integridad calculadas en el servidor',
            'Renovación automática cobrando por API con la fuente de pago guardada, que suma 30 días al vencimiento',
            'Aviso por correo tres días antes del cobro, una sola vez por vencimiento',
            'Cancelar la renovación deja el plan activo hasta la fecha ya pagada',
            'Bajar a Free en cualquier momento, lo que borra el vencimiento y la fuente de pago',
            'Historial con las últimas 36 transacciones, numeradas como facturas y con el estado traducido (Pagada, Pendiente, Rechazada, Anulada, Error)',
            'Si la pasarela no está configurada, la aplicación lo dice y no activa ningún plan',
            'Panel de uso del ciclo: descargas del mes, almacenamiento y fecha de renovación',
          ],
        },
        {
          area: 'Invitados y páginas públicas',
          items: [
            'Portada con analizador de enlaces para probar sin cuenta',
            'Muro suave de tres descargas de invitado al día, contadas por huella de IP y navegador',
            'Barra de progreso del trabajo de invitado, consultada cada segundo y medio, con botón para cancelar',
            'Al terminar, el archivo se descarga solo al navegador desde una carpeta propia de ese trabajo',
            'Páginas de Términos y Privacidad con secciones numeradas e índice lateral',
            'Centro de ayuda con seis preguntas frecuentes',
            'Página de Estado que consulta en vivo la API, la base de datos, el extractor y la cola',
            'Formulario de contacto con límite de 5 envíos por hora y por IP',
          ],
        },
        {
          area: 'Interfaz, tema y PWA',
          items: [
            'Tema claro, oscuro o del sistema, con conmutador de tres posiciones guardado en la cuenta y también en el navegador',
            'Cada vista tiene su URL con hash (#/descargar, #/cola, #/biblioteca, #/ajustes/plan) y al recargar se restaura',
            'Buscador global en la barra con Ctrl+K o Cmd+K, que lleva a la biblioteca y filtra en vivo',
            'Esqueletos de carga distintos según la vista que se vaya a pintar, deducida del hash',
            'Panel de filtros deslizante en móvil que se cierra arrastrándolo más de 80 píxeles hacia abajo',
            'Aplicación instalable como PWA con botón propio de instalación y tres accesos directos: Descargar, Biblioteca y Cola',
            'Desplegables que se miden solos: toman el ancho de su disparador y se abren hacia arriba si no caben abajo',
          ],
        },
      ],
      carpetas: [
        {
          carpeta: 'raíz',
          que_es: 'Un solo proyecto de Node: la API y el frontend viven juntos. Arriba quedan el diseño y el empaquetado.',
          hijos: [
            {
              carpeta: 'Grabber.dc.html',
              que_es: 'el diseño de todas las vistas en un solo archivo; es la fuente de verdad y no se edita a mano',
            },
            {
              carpeta: 'app-src/component.js',
              que_es: 'la capa de datos real que reemplaza a la simulada del diseño, con los mismos bindings',
            },
            {
              carpeta: 'Dockerfile',
              que_es: 'imagen sobre node:20-bookworm-slim con ffmpeg y yt-dlp incluidos',
            },
            {
              carpeta: 'package.json',
              que_es: 'arranque con tsx, migraciones envueltas y los comandos de iconos y de generación del frontend',
            },
          ],
        },
        {
          carpeta: 'src/',
          que_es: 'La API en Fastify con TypeScript en ESM, ejecutada sin paso de compilación.',
          hijos: [
            {
              carpeta: 'src/modules',
              que_es: 'ocho módulos: auth, users, media, downloads, library, collections, notifications y billing',
            },
            {
              carpeta: 'src/workers',
              que_es: 'el runner de la cola y el planificador de tareas diarias y horarias',
            },
            {
              carpeta: 'src/services',
              que_es: 'extractor tras interfaz (yt-dlp), rutas de almacenamiento, correo y web push',
            },
            {
              carpeta: 'src/http',
              que_es: 'la aplicación Fastify, el catálogo de errores, la autenticación y el logger con redacción',
            },
            {
              carpeta: 'src/realtime',
              que_es: 'el canal SSE de progreso, indexado por usuario',
            },
          ],
        },
        {
          carpeta: 'prisma/',
          que_es: 'El modelo de datos sobre SQL Server y su historial de cambios.',
          hijos: [
            {
              carpeta: 'prisma/schema.prisma',
              que_es: 'dieciocho modelos: cuentas, sesiones, fuentes de medios, trabajos, biblioteca, pagos y la huella de invitado',
            },
            {
              carpeta: 'prisma/migrations',
              que_es: 'cinco migraciones, con los CHECK y el índice único filtrado escritos a mano',
            },
          ],
        },
        {
          carpeta: 'scripts/',
          que_es: 'Utilidades de puesta en marcha y de mantenimiento.',
          hijos: [
            {
              carpeta: 'scripts/build-app.ts',
              que_es: 'ensambla public/app/index.html desde el diseño intacto más la capa de datos',
            },
            {
              carpeta: 'scripts/with-db-url.ts',
              que_es: 'compone la cadena de conexión y la inyecta solo en el proceso hijo',
            },
            {
              carpeta: 'scripts/setup-db.sql',
              que_es: 'crea las dos bases y el login de aplicación con permisos mínimos',
            },
            {
              carpeta: 'scripts/setup-fulltext.sql',
              que_es: 'índice de texto completo sobre el título, opcional y posterior a las migraciones',
            },
            {
              carpeta: 'scripts/build-icons.ts',
              que_es: 'deriva los PNG y el ICO de marca desde el SVG oficial',
            },
          ],
        },
        {
          carpeta: 'public/',
          que_es: 'Lo que se sirve tal cual: la aplicación generada y los recursos de marca.',
          hijos: [
            {
              carpeta: 'public/app',
              que_es: 'index.html generado, su runtime y el service worker',
            },
            {
              carpeta: 'public/brand',
              que_es: 'la marca en SVG y los iconos derivados para pestaña, PWA y correo',
            },
            {
              carpeta: 'public/manifest.webmanifest',
              que_es: 'el manifiesto de la PWA con sus tres accesos directos',
            },
          ],
        },
        {
          carpeta: 'tests/',
          que_es: 'Pruebas de integración contra una base aparte, sin paralelismo entre archivos.',
          hijos: [
            {
              carpeta: 'tests/auth.test.ts',
              que_es: 'registro, login, rotación del refresh y detección de reutilización',
            },
            {
              carpeta: 'tests/downloads.test.ts',
              que_es: 'transiciones de estado, el runner con extractor simulado y el muro de invitado',
            },
            {
              carpeta: 'tests/library.test.ts',
              que_es: 'aislamiento por usuario, filtros, cursor y papelera',
            },
          ],
        },
      ],
      arquitectura: {
        resumen: 'Un solo proceso de Node sirve las dos mitades: Fastify entrega el frontend estático desde public/app en la raíz y la API REST bajo /api/v1, con el login de Google colgado de la raíz porque esa es la URI registrada en Google Cloud. El frontend no se escribe a mano: un script toma el HTML de diseño sin tocarlo, le sustituye la capa de datos simulados por app-src/component.js y escribe public/app/index.html. Dentro del mismo proceso viven dos piezas más que no son HTTP: el runner de la cola, que toma trabajos de la tabla DownloadJobs y lanza yt-dlp como proceso hijo, y un planificador que purga papelera, limpia tokens caducados, reconcilia la biblioteca contra el disco y cobra las renovaciones. El progreso de cada descarga sale del proceso hijo, viaja por un canal SSE indexado por usuario y llega a la interfaz sin que el navegador pregunte. Los datos van a SQL Server por Prisma, con la cadena de conexión compuesta en tiempo de ejecución y pasada por constructor. Los archivos descargados y los avatares se guardan en carpetas del disco, nunca en la base. Fuera solo hay tres servicios: Wompi para el cobro, Google para la entrada con cuenta y Resend para el correo, y los tres son opcionales: sin sus llaves la aplicación arranca igual y desactiva esa función. En producción todo se empaqueta en una imagen Docker que instala ffmpeg y yt-dlp, aplica las migraciones al arrancar y escucha en el 4100.',
        capas: [
          {
            nombre: 'Cliente',
            piezas: [
              {
                nombre: 'Aplicación web',
                tecnologia: 'HTML de diseño + component.js',
                que_hace: 'Once vistas con enrutado por hash, tema claro y oscuro y estado en un solo componente. Habla con la API por fetch y escucha el progreso por EventSource.',
              },
              {
                nombre: 'Service worker',
                tecnologia: 'Web Push (VAPID)',
                que_hace: 'Recibe los push y los muestra aunque la pestaña esté cerrada. Para la red es transparente a propósito: no intercepta nada.',
              },
            ],
          },
          {
            nombre: 'Servidor',
            piezas: [
              {
                nombre: 'API REST',
                tecnologia: 'Fastify 5 · TypeScript · JWT',
                que_hace: 'Setenta y ocho rutas. Access token de 15 minutos en memoria del cliente y refresco rotativo en cookie httpOnly.',
              },
              {
                nombre: 'Runner de la cola',
                tecnologia: 'yt-dlp · ffmpeg · AbortController',
                que_hace: 'Toma trabajos de la tabla, respeta la concurrencia por usuario, publica progreso por SSE y mueve el archivo terminado a su destino.',
              },
              {
                nombre: 'Planificador',
                tecnologia: 'temporizadores en proceso',
                que_hace: 'Seis tareas: limpieza horaria de tokens y sesiones, y a diario papelera, reconciliación de disco, contadores, cobros de renovación y sus avisos por correo.',
              },
              {
                nombre: 'Canal SSE',
                tecnologia: 'text/event-stream',
                que_hace: 'Cuatro eventos por usuario: progreso, cambio de estado, completado y fallido, con latido cada 20 segundos.',
              },
            ],
          },
          {
            nombre: 'Datos y servicios',
            piezas: [
              {
                nombre: 'SQL Server',
                tecnologia: 'Prisma 5 · 18 tablas',
                que_hace: 'Cuentas, sesiones, fuentes de medios, trabajos, biblioteca, colecciones, etiquetas, contadores, notificaciones y pagos.',
              },
              {
                nombre: 'Disco local',
                tecnologia: 'carpetas de descargas, avatares y parciales',
                que_hace: 'Guarda los archivos, los avatares en WebP y los parciales por trabajo. Ninguna ruta puede salir de su raíz.',
              },
              {
                nombre: 'Wompi',
                tecnologia: 'Checkout Web · COP',
                que_hace: 'Cobro de Pro y Studio con firma de integridad, verificación por API, webhook firmado y renovación mensual.',
              },
              {
                nombre: 'Google y Resend',
                tecnologia: 'OAuth 2.0 · API de correo',
                que_hace: 'Entrada con cuenta de Google y los correos de recuperación y de aviso de cobro. Sin clave, el correo se escribe a disco.',
              },
            ],
          },
        ],
      },
      decisiones: [
        {
          titulo: 'La cadena de conexión escapa con llaves, no con encodeURIComponent',
          texto: 'El conector sqlserver de Prisma no parsea una URL: lee pares clave=valor separados por punto y coma, al estilo JDBC. Codificar la contraseña deja %23 y %24 literales y la autenticación falla. El escapado correcto es envolver usuario y contraseña en llaves doblando cualquier llave de cierre interna, lo que protege los caracteres #, $, ; y los espacios. Se verificó contra SQL Server 2025 con Prisma 5. El precio es que el escapado es propio del conector y no se parece a nada más del proyecto, así que está documentado en el mismo archivo que lo aplica.',
        },
        {
          titulo: 'DATABASE_URL no vive en el .env: se compone al arrancar',
          texto: 'El .env solo tiene las piezas sueltas (host, base, usuario, contraseña, cifrado). La cadena se arma en tiempo de ejecución y se pasa al cliente de Prisma por constructor, nunca por variable de entorno. Para los comandos que sí la exigen, como el CLI de Prisma, hay un envoltorio que la compone y la inyecta solo en el proceso hijo. Así la contraseña no queda escrita en ningún script ni en el historial del shell. La contrapartida es un salto extra en cada comando de migración.',
        },
        {
          titulo: 'La aplicación se conecta con un usuario que no puede ejecutar DDL',
          texto: 'El login de aplicación tiene lectura, escritura y permiso de ejecución, nada más. Como no puede crear ni alterar tablas, las migraciones no pueden correr con él: el envoltorio las lanza con autenticación integrada de Windows mediante una bandera aparte. En ejecución la API siempre entra con el usuario limitado. Cuesta un paso manual en la puesta en marcha, y a cambio una inyección de SQL no puede tocar el esquema.',
        },
        {
          titulo: 'El 1:1 entre trabajo e item de biblioteca se garantiza con un índice único filtrado',
          texto: 'SQL Server trata los NULL como valores repetidos dentro de un UNIQUE, así que la restricción que genera Prisma rompía en cuanto había dos items sin trabajo asociado, que es el caso normal de los datos de prueba. Se sustituyó por un índice único no agrupado con filtro sobre los valores no nulos, escrito a mano en una migración. La consecuencia es que ese índice ya no está declarado en el esquema y hay que recordar que vive solo en la migración.',
        },
        {
          titulo: 'La base guarda los estados del diseño técnico y el serializador traduce a los del frontend',
          texto: 'En la tabla los estados son queued, analyzing, downloading, paused, completed, failed y canceled, con un CHECK que lo asegura. La interfaz maneja seis, así que el DTO traduce completed a done y failed a error, y excluye canceled de los listados. Se prefirió traducir en un solo punto antes que empobrecer el modelo o tocar el diseño. El coste es que hay dos vocabularios en el proyecto y hay que saber en cuál se está mirando.',
        },
        {
          titulo: 'La cola es la propia tabla, y el turno se toma con ROWLOCK y READPAST',
          texto: 'No hay Redis ni servicio de colas: el runner consulta los trabajos en espera y toma uno con un UPDATE que lleva OUTPUT y las pistas ROWLOCK y READPAST, condicionado a que el estado siga siendo queued. Si dos procesos compiten, el segundo salta la fila bloqueada en vez de esperarla y ninguno se lleva el mismo trabajo dos veces. La contrapartida es que el mecanismo depende de SQL Server: llevarlo a otro motor obligaría a reescribir esa consulta.',
        },
        {
          titulo: 'El progreso se emite en cada tick pero solo se guarda una vez por segundo',
          texto: 'yt-dlp escupe una línea de progreso muy a menudo. Cada línea se manda por SSE de inmediato, porque la interfaz debe ir fluida, pero la escritura en la base va con freno de un segundo. Sin ese freno la tabla de trabajos recibiría decenas de UPDATE por segundo y por descarga. El precio es que, si el proceso muere de golpe, el porcentaje guardado puede estar hasta un segundo por detrás de lo que se vio en pantalla.',
        },
        {
          titulo: 'El token viaja por la query en los dos sitios donde no caben cabeceras',
          texto: 'EventSource no permite añadir cabeceras y la etiqueta de video tampoco, así que el canal SSE y la entrega de archivos aceptan el token por parámetro. En ambos casos se copia al encabezado de autorización antes de que corra la comprobación normal, de modo que la ruta se sigue protegiendo con el mismo código que las demás. Es una concesión consciente: el token aparece en la URL y por tanto puede acabar en un registro del servidor, y por eso el token de acceso dura solo quince minutos.',
        },
        {
          titulo: 'Reutilizar un refresh viejo revoca toda la familia de sesiones',
          texto: 'Cada renovación genera un token nuevo y guarda el hash del anterior. Si llega un token que no está vigente pero coincide con uno ya rotado, se asume robo y se revocan de golpe todas las sesiones abiertas de esa cuenta, con aviso en el registro. Es agresivo a propósito: prefiere obligar a volver a entrar antes que dejar viva una sesión duplicada. El efecto secundario es que una app que reintente con un token caducado cierra la sesión del usuario legítimo.',
        },
        {
          titulo: 'El token de acceso no se guarda en ninguna parte del navegador',
          texto: 'El refresco vive en una cookie httpOnly limitada al camino de autenticación, y el token de acceso solo existe como propiedad del componente en memoria. Al recargar la página se pierde y la aplicación lo recupera pidiendo un refresco antes de pintar nada. Un XSS no encuentra nada que robar en el almacenamiento local, donde solo queda la preferencia de tema. El precio es una llamada de red obligatoria en cada arranque, y por eso el esqueleto de carga se mantiene hasta que llegan los datos.',
        },
        {
          titulo: 'El secreto del doble factor se guarda cifrado, no en claro',
          texto: 'El secreto TOTP se cifra con AES-256-GCM y se persiste como binario con el formato vector de inicialización, etiqueta de autenticación y texto cifrado en un solo campo. La clave sale de una variable de entorno que se valida al arrancar: si no son exactamente 32 bytes en base64, el proceso no levanta. Así un volcado de la base no basta para generar códigos válidos. A cambio, perder esa clave deja inservibles todos los segundos factores existentes.',
        },
        {
          titulo: 'Pedir algo ajeno responde «no encontrado», no «prohibido»',
          texto: 'Las consultas de biblioteca, colecciones y notificaciones llevan el identificador del usuario dentro del propio filtro, así que un elemento de otra cuenta simplemente no aparece y la respuesta es 404. Nunca se lee primero y se comprueba el dueño después. Además de cerrar la puerta, evita confirmar que ese identificador existe. La consecuencia es que un error de permisos y un identificador inventado se ven idénticos desde fuera, lo que complica un poco depurar.',
        },
        {
          titulo: 'El webhook de la pasarela responde 200 aunque falle por dentro',
          texto: 'Wompi reintenta cualquier respuesta que no sea 2xx, y un error propio del servidor generaría un bucle de reintentos por una transacción que ya está registrada. El manejador captura el fallo, lo escribe en el registro y acusa recibo igualmente. La firma sí se comprueba antes, y una firma inválida sí devuelve 401. El precio es que un fallo silencioso hay que descubrirlo en los registros, no por la pasarela.',
        },
        {
          titulo: 'Ningún plan de pago se activa cambiando un campo',
          texto: 'La ruta de cambio de plan solo acepta el valor free: es el camino de cancelación y nada más. Pro y Studio se activan únicamente reconciliando una transacción de Wompi, ya sea porque el frontend la verifica al volver del checkout o porque llega el webhook. La reconciliación es idempotente y busca el pago por la referencia guardada, así que da igual cuál de los dos caminos llegue primero o si llegan los dos. La contrapartida es que en local, sin webhook público, todo depende de que el usuario vuelva a la aplicación tras pagar.',
        },
        {
          titulo: 'Una renovación pendiente también extiende el plan',
          texto: 'Si el cobro automático devuelve aprobado o pendiente, se suman 30 días. Solo un rechazo explícito degrada la cuenta a Free y borra la fuente de pago. La idea es no castigar al usuario por la latencia de la pasarela: si el cobro acaba fallando, el ciclo del día siguiente lo corrige. El precio es una ventana en la que alguien mantiene el plan sin haber pagado todavía.',
        },
        {
          titulo: 'El buscador comprueba al arrancar si puede usar texto completo',
          texto: 'Crear un índice de texto completo no cabe dentro de la transacción de una migración de Prisma, así que quedó en un script aparte que se ejecuta como administrador y que no hace nada si el servicio no está instalado. Al levantar, la API consulta el catálogo del sistema: si el índice existe busca con CONTAINS, y si no cae a LIKE y lo avisa en el registro. La aplicación funciona igual en las dos situaciones, a costa de que la calidad de la búsqueda dependa de cómo esté montada la instancia.',
        },
        {
          titulo: 'Nadie fuera de la carpeta del extractor sabe que existe yt-dlp',
          texto: 'El runner y las rutas hablan con una interfaz de dos métodos, analizar y descargar, y hay un punto único donde se puede inyectar otra implementación. Las pruebas usan esa puerta para simular el extractor y no tocar la red nunca. Además, el binario se comprueba al arrancar: si no está, el servidor levanta igual y solo las rutas que lo necesitan responden con el error correspondiente. La contrapartida es una capa de indirección para algo que hoy tiene una sola implementación.',
        },
        {
          titulo: 'Los errores del extractor se clasifican leyendo su salida de error',
          texto: 'yt-dlp devuelve texto libre, así que hay una función que lo normaliza a códigos propios: video privado, cuenta privada, fuente no disponible, plataforma no admitida, enlace inválido o fallo genérico. Solo los mensajes que hablan de red, tiempo agotado o conexión cortada se marcan como transitorios, y solo esos se reintentan. Es frágil por definición, porque depende de literales en inglés de un programa ajeno, pero es lo único que hay: la alternativa era reintentar todo y castigar a un video que simplemente ya no existe.',
        },
        {
          titulo: 'El avatar se valida por sus bytes y se vuelve a escribir entero',
          texto: 'Ni la extensión ni el tipo declarado deciden nada: se leen los primeros bytes para reconocer PNG, JPEG o WebP y se rechaza lo demás. Después la imagen se reprocesa a 512x512 en WebP, lo que descarta metadatos y cualquier carga incrustada, y se guarda con un nombre aleatorio. El recorte circular ya lo hizo el navegador, así que el servidor solo tiene que asegurar el marco. Cuesta un procesamiento en cada subida, incluso cuando la imagen ya venía bien.',
        },
        {
          titulo: 'El registro tacha secretos por su valor, no por el nombre del campo',
          texto: 'Además de la lista de campos habitual, un gancho recorre cada objeto que se va a escribir y sustituye por una marca cualquier cadena que contenga la contraseña de la base o alguna de las llaves privadas. Así una cadena de conexión completa o un error que la incluya salen ya limpios. El recorrido tiene límite de profundidad y protección contra ciclos porque los objetos de petición de Fastify los traen. Se paga con un coste por línea de registro, aceptado a cambio de no filtrar credenciales en un volcado.',
        },
        {
          titulo: 'El invitado se cuenta por una huella que caduca sola',
          texto: 'Sin cuenta no hay identificador, así que el límite diario se lleva contra un hash de la dirección IP y el agente de usuario, guardado por día. La IP no se almacena en claro en esa tabla, y las filas de más de siete días se borran en la limpieza diaria. Cancelar una descarga antes de que termine devuelve el cupo gastado, para que probar y arrepentirse no cueste. Es un muro suave y se sabe: cambiar de red o de navegador lo salta, y esa es la concesión asumida a cambio de no pedir registro para probar.',
        },
        {
          titulo: 'El frontend no se edita: se genera desde el HTML de diseño intacto',
          texto: 'Un script toma el archivo de diseño sin modificarlo, le sustituye la capa de datos simulados por la real y aplica una lista cerrada de retoques de plantilla. Cada sustitución busca un ancla exacta y falla si no la encuentra o si aparece dos veces, así que un cambio en el diseño rompe la generación en vez de producir en silencio una página a medias. La ventaja es que el diseño sigue siendo la fuente de verdad y se puede rehacer entero. El precio es que cualquier arreglo de interfaz obliga a volver a generar y a mantener las anclas al día.',
        },
        {
          titulo: 'El service worker no intercepta la red a propósito',
          texto: 'Registra los eventos de instalación, activación y red, pero el de red está vacío y nunca responde por su cuenta. La instalabilidad como PWA solo exige que ese escuchador exista, y el trabajo real del worker aquí es recibir los push cuando la aplicación está cerrada. Se prefirió eso a montar una caché a medias que sirviera versiones viejas. El modo sin conexión queda pendiente.',
        },
        {
          titulo: 'El reproductor se controla tocando el DOM, no el estado',
          texto: 'Los controles propios (posición, volumen, tiempo, ocultarse solos) se cablean directamente sobre los nodos y se pintan a mano. Meter el tiempo de reproducción en el estado del componente repintaría la aplicación entera decenas de veces por segundo, porque todo cuelga de un único componente. Es una excepción deliberada al patrón del resto del proyecto, marcada como tal en el código. A cambio hay que desmontar a mano los escuchadores al cerrar el reproductor.',
        },
      ],
    },
  },
  {
    nombre: 'Holm',
    color: '#18BFD8',
    logo: '/logos/holm.svg',
    stack: ['React 19', 'TypeScript', 'Tailwind CSS 4', 'Express 4'],
    descripcion:
      'Organizacion personal en lienzos infinitos: tareas, proyectos, notas e ideas se colocan y se conectan a mano, como en un tablero de verdad, mas un seguimiento de habitos con rachas.',
    arquitectura:
      'El lienzo esta hecho de cero con DOM y SVG, sin librerias de tablero: un contenedor con transform para el desplazamiento y el zoom, cada elemento como nodo posicionado y una capa SVG para los conectores, con enrutado ortogonal y anclaje por puertos. Detras, Express con el driver oficial de MongoDB y sesion en cookie httpOnly firmada con JWT. Los datos no salen del equipo: la base corre en local.',
    url: 'https://holm.acmsy.com',
    captura: 'holm',
    landing: '#',
    // Estetica y ficha larga sacadas del repositorio de la app.
    estetica: {
      google: 'Inter:wght@400;500;600;700',
      fuente: {
        titulo: '\'Inter\', ui-sans-serif, system-ui, -apple-system, \'Segoe UI\', Roboto, sans-serif',
        cuerpo: '\'Inter\', ui-sans-serif, system-ui, -apple-system, \'Segoe UI\', Roboto, sans-serif',
        mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace',
      },
      radio: '12px',
      curva: 'cubic-bezier(0.22, 1, 0.36, 1)',
      claro: {
        fondo: '#FFFFFF',
        sup: '#F6F7F8',
        texto: '#1B1F23',
        suave: '#5C656E',
        acento: '#21C2D9',
      },
      oscuro: {
        fondo: '#15171A',
        sup: '#1B1E22',
        texto: '#E8EAED',
        suave: '#99A2AB',
        acento: '#21C2D9',
      },
    },
    detalle: {
      stackRoles: [
        {
          nombre: 'React 19',
          papel: 'La interfaz. Ocho vistas dentro de un solo armazón, sin librería de rutas.',
        },
        {
          nombre: 'TypeScript',
          papel: 'Los tipos. Un solo archivo, client/src/api/types.ts, describe los contratos de la API para todo el cliente.',
        },
        {
          nombre: 'Tailwind CSS 4',
          papel: 'Los estilos. La paleta cian en @theme y las superficies como variables CSS.',
        },
        {
          nombre: 'Express 4',
          papel: 'La API. Diez routers bajo /api y /auth, con la sesión en cookie httpOnly.',
        },
        {
          nombre: 'MongoDB',
          papel: 'Los datos. Ocho colecciones con el driver oficial, sin ORM de por medio.',
        },
        {
          nombre: 'web-push',
          papel: 'Los avisos. VAPID y un programador que corre cada minuto dentro del mismo proceso.',
        },
      ],
      unaFrase: 'Aplicación web de organización personal con cinco tableros infinitos hechos a mano en DOM y SVG, más calendario, hábitos con rachas y avisos por Web Push, sobre Express y MongoDB propios.',
      porQueExiste: 'El nombre viene de holm, palabra antigua para islote: cada vista es su propia isla y no se mezcla con las demás, y eso es lo que mantiene el orden. Holm resuelve el caso de querer colocar tareas, proyectos, notas e ideas donde uno quiera, sin columnas fijas ni la estructura que impone una herramienta de terceros, y de tener al lado el calendario y el seguimiento de hábitos sin cambiar de aplicación. El lienzo está construido desde cero con DOM y SVG en vez de montar una librería de tableros, porque a escala personal el rendimiento sobra y así cada elemento es un componente de React con campos de texto normales. Alrededor se añadió lo justo para que sea usable de verdad: cuentas con su propio espacio, preferencias guardadas en la cuenta y no en el navegador, y avisos que llegan con la aplicación cerrada. Se dejaron fuera el trabajo sin conexión (el service worker está registrado pero no cachea nada), cualquier forma de compartir o colaborar, y todo servicio de datos de terceros: la base es un MongoDB propio.',
      funcionalidades: [
        {
          area: 'Cuenta y sesión',
          items: [
            'Registro con correo, contraseña de mínimo 6 caracteres, nombre opcional y pregunta de seguridad obligatoria',
            'Cinco preguntas de seguridad propuestas, o escribir una propia',
            'Rechazo del registro si ya existe una cuenta con ese correo',
            'Inicio de sesión con correo y contraseña',
            'Recuperación en dos pasos: confirmas el correo, la app te muestra tu pregunta y cambias la contraseña al momento',
            'Al recuperar la contraseña la sesión queda abierta, sin tener que entrar otra vez',
            'Entrada con Google por redirección: crea la cuenta si no existe y la vincula por correo si ya la había',
            'La sesión sobrevive a cerrar el navegador y a apagar el equipo',
            'Cierre de sesión que borra la cookie desde el servidor',
            'Mostrar u ocultar la contraseña con un botón dentro del campo',
          ],
        },
        {
          area: 'Navegación entre islas',
          items: [
            'Isla flotante arriba al centro que se estira al acercarle el cursor y muestra las ocho vistas',
            'Cada vista tiene su URL propia, así recargar te deja donde estabas',
            'Los botones de atrás y adelante del navegador cambian de vista',
            'Etiqueta flotante con el nombre de cada vista al pasar el cursor, sin recuadro',
            'Solo una isla abierta a la vez: abrir una cierra las otras tres',
            'Las islas laterales de páginas y componentes se cierran al tocar fuera en pantalla táctil',
          ],
        },
        {
          area: 'El lienzo',
          items: [
            'Cinco tableros infinitos: Tareas, Proyectos, Notas, Ideas y Modelos de datos',
            'Desplazamiento arrastrando el fondo del lienzo',
            'Zoom con la rueda centrado en el cursor, entre 0.2x y 3x',
            'Zoom de pellizco con dos dedos, centrado en el punto medio',
            'Al levantar un dedo del pellizco el arrastre sigue desde el otro, sin saltos',
            'Teclado: las flechas mueven el lienzo de 70 en 70 px, + y - hacen zoom y 0 vuelve al origen',
            'Supr borra lo seleccionado y Esc deselecciona; ninguno actúa mientras escribes en un campo',
            'Rejilla de puntos de fondo que se escala y se desplaza con el lienzo',
            'Varias páginas por tablero, con la primera creada sola al entrar',
            'Crear páginas, renombrarlas con doble clic y eliminarlas con confirmación desde la isla izquierda',
            'La última página abierta en cada tablero queda guardada en la cuenta',
          ],
        },
        {
          area: 'Elementos del lienzo',
          items: [
            'Nueve tipos: nota, tarjeta, texto, lista, imagen, forma, marco, tabla y flecha',
            'Paleta propia por tablero, con nombres y colores del tema: en Tareas sale Lista de tareas, Tarea, Recordatorio, Etiqueta, Sprint y Flecha; en Modelos, Tabla, Relación, Vista, Nota y Esquema',
            'Un elemento solo se crea arrastrando la herramienta al lienzo: tocarla sin arrastrar no crea nada',
            'Vista previa pegada al cursor mientras arrastras, con la forma real del tipo y al tamaño que tendrá con el zoom de ese momento',
            'Mover un elemento arrastrándolo, con imanes que buscan dejar recta alguna de sus líneas',
            'Mover un marco arrastra con él todo lo que quedaba dentro',
            'Guías punteadas al cuadrar con el borde o el centro de otro elemento',
            'Redimensionar por las cuatro esquinas, con un mínimo de 80 por 40',
            'Listas y tablas crecen de alto con su contenido; ahí solo se redimensiona el ancho',
            'Un clic sobre un elemento ya seleccionado entra a editar su texto; en marcos, listas y tablas hace falta doble clic',
            'Color por elemento con doce muestras, selector HSV arrastrable y campo hexadecimal',
            'Traer al frente, enviar atrás, bloquear, duplicar desplazado 24 px y eliminar',
            'Al borrar un elemento se borran también los conectores que lo tocaban',
            'Barra de opciones flotante encima del elemento, que pasa debajo cuando arriba no cabe',
            'Nota de color con el texto en claro u oscuro según la luminancia del fondo elegido',
            'Lista con título, ítems marcables que se tachan, y botones para añadir y quitar líneas',
            'Tabla de modelo de datos con título, campos de nombre y tipo, y marca de clave por campo',
          ],
        },
        {
          area: 'Conectores',
          items: [
            'Conectar arrastrando desde un punto de conexión de un elemento hasta otro',
            'Cuatro puntos de conexión de serie y ocho, con los vértices, mientras se tiende una línea',
            'Los puntos se revelan al pasar el cursor y, con el dedo, al seleccionar el elemento',
            'El elemento de destino se ilumina entero mientras lo apuntas',
            'Si sueltas sobre un puerto la línea queda clavada ahí; si sueltas en el cuerpo conserva la altura exacta; si sueltas en el centro decide el trazado',
            'Tres enrutados: recta, ortogonal y curva',
            'Seis terminaciones: ninguna, flecha, doble flecha, flecha abierta, círculo y diamante',
            'El trazado ortogonal rodea los demás elementos en vez de atravesarlos o rozarlos',
            'Los primeros 26 px salen rectos y perpendiculares al elemento',
            'Las líneas que van por el mismo pasillo se llevan a una misma raya',
            'Tirador en el centro de cada tramo para deslizarlo, con imanes y guía; doble clic lo devuelve al automático',
            'Arrastrar un extremo lo desancla y lo vuelve a anclar en otro elemento',
            'Botón para rehacer la línea limpia, descartando los ajustes hechos a mano',
          ],
        },
        {
          area: 'Calendario',
          items: [
            'Cuatro vistas del mismo calendario: día, semana, mes y agenda',
            'Rejilla del mes de seis semanas fijas, para que el alto no salte al cambiar de mes',
            'En el mes se ven hasta dos eventos por día con título y hora, y un contador de cuántos quedan',
            'Columna lateral con los eventos del día elegido',
            'Semana y día como línea de tiempo de 24 horas, a 48 px por hora, con el evento alto según su duración',
            'Los eventos sin hora salen en una franja aparte de todo el día',
            'Agenda con los próximos eventos agrupados por día, desde hoy',
            'Ir al periodo anterior y siguiente, y volver a hoy',
            'Crear un evento con título de hasta 200 caracteres, fecha, hora de inicio y de fin, o marcarlo de todo el día',
            'Selectores de fecha y de hora propios, en vez de los del navegador',
            'Color del evento con ocho presets, cuadrado de saturación y brillo, y campo hexadecimal',
          ],
        },
        {
          area: 'Hábitos',
          items: [
            'Lista de los hábitos que tocan hoy; los demás no estorban',
            'Dos formas de marcar: hecho o no hecho, y cantidad con meta y unidad',
            'Tres frecuencias: todos los días, días concretos de la semana, o de una a siete veces por semana',
            'Contador con más y menos y barra de progreso hacia la meta del día',
            'Racha de días programados cumplidos seguidos, mirando hasta 500 días atrás',
            'Si hoy todavía no has marcado, la racha se cuenta hasta ayer y no se rompe',
            'Contador de cuántas veces llevas esta semana en los hábitos por veces por semana',
            'Color por hábito con ocho muestras y selector libre',
            'Crear, editar y eliminar hábitos en una pantalla completa; borrar uno borra también su historial',
            'Mensaje propio cuando hoy no toca ningún hábito',
          ],
        },
        {
          area: 'Inicio',
          items: [
            'Fecha del día en palabras y saludo con tu nombre de pila',
            'Una frase distinta cada día, elegida de doce de forma estable por fecha',
            'Tarjeta con los hábitos de hoy y su estado, incluida la cuenta de los de cantidad',
            'Tarjetas de tareas y proyectos recientes, hasta seis de cada uno',
            'Tarjeta que junta las notas y las ideas recientes',
            'Fila de recuentos con cuántos elementos hay en cada tablero',
            'El resumen solo muestra: desde aquí no se edita nada',
          ],
        },
        {
          area: 'Avisos',
          items: [
            'Interruptor de avisos en la isla de ajustes, que pide antes el permiso del navegador',
            'Avisos por Web Push que llegan con Holm cerrado, cuando el servidor tiene claves configuradas',
            'Antelación configurable, de la hora exacta hasta un día antes',
            'Aviso de prueba real, enviado desde el servidor, al activar el interruptor',
            'Si el navegador no admite push quedan los temporizadores de la pestaña, que solo funcionan con la app abierta',
            'Con el móvil y el escritorio abiertos el aviso sale una sola vez',
            'Tocar el aviso enfoca la ventana de Holm ya abierta en el calendario, o abre una nueva',
            'Mover un evento de fecha o de hora vuelve a dejar su aviso pendiente',
            'Apagar el interruptor da de baja este navegador y borra su suscripción',
          ],
        },
        {
          area: 'Interfaz y preferencias',
          items: [
            'Tema claro, oscuro o el del sistema, y el cambio se aplica en vivo si el sistema cambia',
            'El tema se guarda en la cuenta: lo encuentras igual desde otro equipo',
            'Instalable como aplicación, con iconos propios y arranque en ventana propia, sin barra del navegador',
            'Cuarenta y ocho iconos SVG dibujados en el propio proyecto, sin librería de iconos',
            'Las manijas y los puntos de conexión miden lo mismo en pantalla sea cual sea el zoom',
            'Ningún campo tiene foco de color; los recuadros del navegador están desactivados a propósito',
            'Todas las animaciones se anulan si el sistema pide movimiento reducido',
          ],
        },
      ],
      carpetas: [
        {
          carpeta: 'raíz',
          que_es: 'Monorepo de dos mitades con npm workspaces. Arriba solo viven el arranque conjunto, el empaquetado y las notas de diseño.',
          hijos: [
            {
              carpeta: 'package.json',
              que_es: 'declara los workspaces y levanta servidor y cliente a la vez con concurrently',
            },
            {
              carpeta: 'Dockerfile',
              que_es: 'imagen única sobre node:22-slim: instala, compila el cliente y arranca solo el servidor',
            },
          ],
        },
        {
          carpeta: 'client/',
          que_es: 'La aplicación React 19 sobre Vite 6 y Tailwind CSS 4, en TypeScript.',
          hijos: [
            {
              carpeta: 'src/canvas',
              que_es: 'el motor del lienzo: viewport, elementos, conectores, trazador de líneas y las dos islas laterales',
            },
            {
              carpeta: 'src/views',
              que_es: 'Inicio, el tablero, Calendario, Hábitos, la pantalla de acceso y los dos formularios completos',
            },
            {
              carpeta: 'src/components',
              que_es: 'el armazón, la isla de navegación, los selectores de color, fecha y hora, y los 48 iconos',
            },
            {
              carpeta: 'src/state y src/lib',
              que_es: 'los dos contextos (sesión y ajustes) y las utilidades de fechas, rachas, color, avisos y push',
            },
            {
              carpeta: 'public',
              que_es: 'el logo, los iconos de la aplicación, el manifest y el service worker',
            },
          ],
        },
        {
          carpeta: 'server/',
          que_es: 'API en Express 4 y TypeScript ejecutado con tsx, sobre el driver oficial de MongoDB.',
          hijos: [
            {
              carpeta: 'src/routes',
              que_es: 'diez routers: auth, oauth, pages, elements, habits, habit-logs, events, settings, summary y push',
            },
            {
              carpeta: 'src/auth.ts',
              que_es: 'hash de contraseñas con scrypt, firma del JWT, la cookie de sesión y el middleware que exige sesión',
            },
            {
              carpeta: 'src/db.ts',
              que_es: 'la conexión y los índices de las ocho colecciones, creados al arrancar',
            },
            {
              carpeta: 'src/push.ts',
              que_es: 'el envío por VAPID y el programador que revisa los eventos del día cada minuto',
            },
            {
              carpeta: 'src/probe.ts',
              que_es: 'comando aparte que prueba lectura y escritura reales contra la base y lista las colecciones',
            },
          ],
        },
      ],
      arquitectura: {
        resumen: 'Monorepo de dos piezas con npm workspaces: un SPA de React 19 servido por Vite y una API de Express 4 en TypeScript, ejecutada con tsx sin paso de compilación. En desarrollo el cliente vive en el puerto fijo 5191 y proxya /api y /auth al servidor en el 5192; el 5191 es el puerto que registra y sondea el entorno de despliegue, y por eso la API se lleva a una variable propia en vez de compartirlo. En producción todo va en una sola imagen Docker sobre node:22-slim: el mismo Express sirve el build del cliente con fallback de SPA, de modo que la aplicación, la API y el flujo de Google comparten origen detrás de un proxy Caddy. Los datos viven en un MongoDB propio, al que se entra por el driver oficial y sin ORM: ocho colecciones y sus índices se crean al arrancar. La sesión es un JWT en una cookie httpOnly y nada del usuario se guarda en el navegador; incluso las preferencias y el último tablero abierto se leen y se escriben contra el servidor. Los avisos salen del propio proceso del servidor: un temporizador interno revisa cada minuto los eventos del día y manda el push por VAPID, sin cron externo ni cola. El lienzo no depende de ninguna librería de tableros: es un contenedor con transform, nodos DOM posicionados encima y una capa SVG para los conectores.',
        capas: [
          {
            nombre: 'Cliente',
            piezas: [
              {
                nombre: 'Aplicación React',
                tecnologia: 'React 19 · TypeScript · Tailwind CSS 4',
                que_hace: 'Ocho vistas dentro de un solo armazón, sin librería de rutas: el camino de la URL se lee y se escribe a mano con history. Dos contextos, sesión y ajustes, cuelgan de la raíz.',
              },
              {
                nombre: 'Motor del lienzo',
                tecnologia: 'DOM + SVG · pointer events',
                que_hace: 'Un contenedor con transform para el desplazamiento y el zoom, cada elemento como nodo absoluto y una capa SVG encima para las líneas. El trazador ortogonal, los imanes y los carriles compartidos son código propio.',
              },
              {
                nombre: 'Service worker',
                tecnologia: 'Web Push API · manifest',
                que_hace: 'Hace la aplicación instalable y recibe los push con Holm cerrado. No cachea nada: su fetch es passthrough a propósito.',
              },
            ],
          },
          {
            nombre: 'Servidor',
            piezas: [
              {
                nombre: 'API REST',
                tecnologia: 'Express 4 · TypeScript · tsx · JWT',
                que_hace: 'Treinta y nueve rutas: treinta y siete repartidas en diez routers y dos de salud colgadas del propio app. Todo lo que cuelga de /api salvo auth y push pasa por el middleware de sesión; el cuerpo admite hasta 12 MB porque las imágenes del lienzo viajan como data URL.',
              },
              {
                nombre: 'Programador de avisos',
                tecnologia: 'web-push · VAPID',
                que_hace: 'Un tic por minuto dentro del mismo proceso. Busca los eventos de hoy cuya hora de aviso ya llegó, aplica la antelación de cada cuenta y manda el push a todos los dispositivos suscritos.',
              },
              {
                nombre: 'Servidor estático',
                tecnologia: 'express.static · fallback SPA',
                que_hace: 'En producción entrega el build del cliente y devuelve el index para cualquier ruta que no empiece por /api o /auth.',
              },
            ],
          },
          {
            nombre: 'Datos y servicios',
            piezas: [
              {
                nombre: 'MongoDB',
                tecnologia: 'driver oficial 6 · sin ORM',
                que_hace: 'Ocho colecciones: cuentas, páginas, elementos, hábitos, registros de hábito, eventos, ajustes y suscripciones push. Los índices se crean al conectar, incluidos los únicos de correo, de registro por hábito y día, y de ajustes por cuenta.',
              },
              {
                nombre: 'Google OAuth 2.0',
                tecnologia: 'flujo por redirección · state en cookie',
                que_hace: 'Entrada con cuenta de Google contra el cliente compartido del servidor, pero con la sesión propia de Holm: el usuario acaba en Mongo igual que los demás.',
              },
            ],
          },
        ],
      },
      decisiones: [
        {
          titulo: 'El lienzo se dibuja con DOM y SVG, no con canvas',
          texto: 'La decisión está razonada en el brief técnico y sostenida en todo el código: un contenedor con transform para el desplazamiento y el zoom, cada elemento como nodo absoluto y una capa SVG solo para los conectores. Así Tailwind estiliza cada pieza directamente, React la maneja como un componente con su propio estado y editar texto es escribir en un textarea normal, sin reimplementar un cursor. El precio es el número de nodos: a escala personal sobra, pero un canvas o Konva ganarían con miles de objetos en pantalla. Es un cambio deliberado de rendimiento futuro por simplicidad presente.',
        },
        {
          titulo: 'La sesión no caduca y no queda nada en el navegador',
          texto: 'El JWT se firma sin expiración y la cookie holm_session se emite con httpOnly, sameSite lax, secure solo en producción y un maxAge de diez años. La sesión sobrevive a cerrar el navegador y a apagar el equipo, que es justo lo que se quiere en una aplicación personal de escritorio. La consecuencia es que no hay revocación: un token filtrado vale hasta que se cambie el secreto de firma. Para que no queden restos del esquema anterior, al arrancar se recorre localStorage y se borra toda clave que empiece por holm..',
        },
        {
          titulo: 'Las contraseñas se guardan con hash de scrypt del propio Node, sin bcrypt',
          texto: 'El módulo de sesión usa scryptSync con una sal aleatoria de 16 bytes, deriva 64 bytes y guarda sal y hash juntos separados por dos puntos; la comparación va con timingSafeEqual para no filtrar información por el tiempo de respuesta. Se evita así una dependencia con binario nativo, que es lo que suele romper la instalación en un servidor pequeño. La respuesta de seguridad pasa por el mismo camino, pasada antes a minúsculas.',
        },
        {
          titulo: 'La recuperación es por pregunta de seguridad, no por correo',
          texto: 'No hay servicio de correo en el proyecto, así que recuperar la cuenta es un flujo de dos pasos: confirmas el correo, el servidor devuelve tu pregunta y respondes para cambiar la contraseña al momento. Se gana no depender de nadie y que la recuperación sea instantánea. Se paga que el endpoint que devuelve la pregunta responde 404 cuando el correo no existe, con lo que se puede averiguar si una cuenta está registrada; es el precio consciente de no mandar correos.',
        },
        {
          titulo: 'MongoDB se autentica por opciones del driver, no por la URI',
          texto: 'La cadena de conexión es solo host y puerto, y el usuario y la contraseña viajan en el objeto de opciones junto al authSource. Así la contraseña puede llevar arroba, dólar o dos puntos sin escaparlos ni codificarlos, que es donde se rompen los connection strings escritos a mano. El tiempo de selección de servidor está en cinco segundos para que un Mongo caído falle rápido en vez de colgar el arranque.',
        },
        {
          titulo: 'El puerto de la API va en su propia variable, por delante de PORT',
          texto: 'El puerto sale de HOLM_API_PORT y solo cae en PORT si esa no está; por defecto es el 5192, con el cliente fijado en el 5191 con strictPort. El motivo está anotado en el código: el entorno donde se despliega inyecta PORT con el puerto del cliente, así que si HOLM_API_PORT no fuera primero, la API y Vite se pelearían por el mismo hueco. En la misma línea, el host de escucha es 127.0.0.1 en local y 0.0.0.0 en el contenedor, porque ahí el proxy tiene que alcanzarlo por nombre.',
        },
        {
          titulo: 'El origen público se fija por configuración y jamás se deduce del request',
          texto: 'Detrás del proxy no se confía en el host ni en la URL de la petición: el origen sale de la variable ORIGIN o, si no está, se construye con el subdominio que inyecta el contenedor. De ahí cuelga la URI de retorno de Google, que tiene que coincidir exactamente con la registrada en la consola. Sin esta regla, una cabecera Host falsificada podría desviar el callback de OAuth.',
        },
        {
          titulo: 'Las claves VAPID se leen de process.env en caliente, no al importar el módulo',
          texto: 'El módulo de push consulta las variables cada vez que las necesita y configura la librería la primera vez que hace falta, en lugar de calcular constantes al cargarse. La razón es el orden real del despliegue: las claves se inyectan al arrancar el contenedor, después del build, así que una constante de módulo quedaría vacía para siempre. El comentario del archivo lo marca como una de las dos lecciones caras heredadas de otro proyecto.',
        },
        {
          titulo: 'Un evento solo se marca como avisado si el push salió de verdad',
          texto: 'El programador marca pushedAt únicamente cuando al menos un dispositivo recibió el aviso; si en ese momento no había ninguno alcanzable, lo reintenta al minuto siguiente. Para que eso no se convierta en un bucle eterno hay una ventana de tres horas hacia atrás: lo más viejo se descarta, pero se marca igual para no volver a evaluarlo cada minuto. Un reinicio del servidor no dispara una tanda de avisos de hace horas.',
        },
        {
          titulo: 'El «ya te avisé» es un hecho de la cuenta y se reclama al servidor',
          texto: 'Con el móvil y el escritorio abiertos, dos pestañas mostrarían el mismo recordatorio. El cliente pide antes el aviso a POST /settings/notified, y solo quien llega primero recibe first en verdadero. La escritura tiene su detalle: el upsert va en una llamada aparte con filtro de igualdad, porque hacerlo junto al $ne del día crearía un segundo documento de ajustes para el mismo usuario, y hay un índice único sobre userId precisamente por eso. Si no hay red se prefiere avisar de más a callarse.',
        },
        {
          titulo: 'Si el navegador tiene push real, la pestaña no programa nada',
          texto: 'Los temporizadores del cliente y el push del servidor cubren lo mismo, así que el calendario comprueba primero si este dispositivo tiene suscripción activa y, si la tiene, no programa ni un temporizador. De lo contrario el aviso llegaría dos veces: el push con la aplicación cerrada y el temporizador al volver a abrirla. Los temporizadores quedan solo como respaldo para navegadores sin soporte.',
        },
        {
          titulo: 'La suscripción push se indexa por endpoint y no por usuario',
          texto: 'La clave única de la colección es el endpoint que devuelve el navegador, y el guardado es un upsert que reasigna el userId. Si en ese mismo navegador entra otra cuenta, la suscripción pasa a la nueva en vez de duplicarse y dejar avisos cruzados. Cuando el servicio responde 404 o 410 la suscripción se borra en el acto: son endpoints muertos que si no se acumulan para siempre.',
        },
        {
          titulo: 'El service worker no cachea nada y aun así se registra en desarrollo',
          texto: 'Tiene cinco listeners y el de fetch está vacío a propósito: no llama a respondWith, así la red la sigue manejando el navegador. Interceptar sin tener nada guardado rompe las peticiones cuando fallan, y el modo sin conexión se dejó pendiente en vez de meter una capa de caché a medias. Se registra también en local a propósito, porque sin él no existe PushManager y los avisos no se podrían probar hasta producción; como no guarda nada, no arrastra bundles viejos.',
        },
        {
          titulo: 'Los ajustes se guardan optimistas, agrupados y con reintento creciente',
          texto: 'Cambiar el tema o el tablero activo actualiza la interfaz al momento y encola el cambio; a los 350 ms sale una sola petición con todo lo acumulado. Si la red falla, el parche vuelve a la cola sin pisar lo que se haya cambiado mientras tanto y se reintenta con espera de 1, 2, 4 segundos hasta un tope de 30. Al cerrar la pestaña lo pendiente sale por sendBeacon contra una ruta POST hecha solo para eso, porque un fetch normal no sobrevive al cierre.',
        },
        {
          titulo: 'El trazado de líneas propone candidatas y las puntúa, en vez de buscar por rejilla',
          texto: 'Atravesar un elemento cuesta un millón en la puntuación, rozarlo mil doscientos y cada doblez cuatrocientos, más la longitud; ninguna combinación de dobleces puede compensar un cruce, que es lo que garantiza que la línea nunca pase por debajo de nada. La búsqueda va por etapas: primero las rutas de uno o dos dobleces, luego los pasillos junto a cada obstáculo y solo al final los rodeos en L larga, que son cuadráticos. En cuanto aparece una ruta limpia se corta, porque esto se recalcula en cada movimiento.',
        },
        {
          titulo: 'El punto de salida de una línea queda fijo con el lado con el que se creó',
          texto: 'El trazador podría elegir el mejor lado en cada repintado, pero entonces el punto de conexión saltaría de un lado al opuesto mientras arrastras y se sentiría descontrolado. Por eso el puerto se guarda y no se recalcula: la revisión ocurre al soltar el elemento, no durante el arrastre, y solo cambia el lado si la mejora de coste supera 350. Cualquier movimiento menor deja la línea donde estaba.',
        },
        {
          titulo: 'El trazado automático nunca pisa lo que el usuario ajustó a mano',
          texto: 'En cuanto una línea tiene puntos intermedios propios queda fuera de la recolocación automática y fuera de la agrupación por carriles. Es la regla explícita de la guía de líneas del proyecto. Para volver al automático hay dos caminos: doble clic en el tirador de un tramo, que borra los ajustes de ese tramo, o el botón de rehacer la línea, que los descarta todos y vuelve a elegir los mejores lados.',
        },
        {
          titulo: 'Los imanes se resuelven por orden de utilidad, no por distancia',
          texto: 'Los candidatos están en cuatro grupos: dejar la línea recta, cuadrar con otro tramo de ella misma, cuadrar con tramos de otras líneas y, por último, bordes y centros de los elementos. Se recorren en ese orden y el primero que esté dentro del radio de cinco píxeles gana. Si compitieran todos por distancia, el borde de un elemento ganaría por dos píxeles y te llevaría al sitio equivocado justo cuando querías dejar la línea recta.',
        },
        {
          titulo: 'Un elemento solo nace si lo arrastras al lienzo',
          texto: 'Tocar la herramienta en la paleta no crea nada: hay que arrastrarla más de seis píxeles y soltarla sobre el tablero, y mientras tanto una miniatura con la forma real del tipo y su tamaño según el zoom sigue al cursor. Así se ve exactamente qué se va a soltar y dónde. La paleta se queda abierta después de crear, porque cerrarla haría que el siguiente arrastre cayera sobre el lienzo vacío y moviera el tablero en lugar de crear otro elemento.',
        },
        {
          titulo: 'En pantalla táctil las islas ignoran el hover',
          texto: 'Los eventos de ratón que el navegador simula al tocar abrían la isla, pero el mouseleave casi nunca llegaba y se quedaba abierta para siempre. La solución fue medir una sola vez si el puntero es grueso y, en ese caso, abrir al tocar y cerrar con un pointerdown fuera capturado en fase de captura, para que se cierre aunque el lienzo se quede el evento. En la misma línea, la vista previa del arrastre se pinta en un portal al body: un ancestro con transform hace que position fixed se mida respecto a él y la miniatura acababa dibujada fuera de la pantalla.',
        },
      ],
    },
  },
  {
    nombre: 'Hibi',
    color: '#5AA6D2',
    logo: '/logos/hibi.svg',
    logoLleno: true,
    stack: ['Nuxt 3', 'Vue 3', 'Tailwind CSS 4', 'Drizzle'],
    descripcion:
      'Organizacion personal dia a dia. Su nombre viene del japones hibi, que significa justamente eso: los dias, uno tras otro.',
    arquitectura:
      'Vue 3 con Nuxt y rutas por archivo. Validacion con Zod en el limite entre cliente y servidor, de modo que ningun dato mal formado entra al sistema. PWA instalable con iconos enmascarables.',
    url: 'https://hibi.acmsy.com',
    captura: 'hibi',
    landing: '#',
    // Estetica y ficha larga sacadas del repositorio de la app.
    estetica: {
      google: 'M+PLUS+Rounded+1c:wght@400;500;700;800&family=Quicksand:wght@400;500;700',
      fuente: {
        titulo: '\'M PLUS Rounded 1c\', \'Quicksand\', system-ui, -apple-system, sans-serif',
        cuerpo: '\'M PLUS Rounded 1c\', \'Quicksand\', system-ui, -apple-system, sans-serif',
        mono: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
      },
      radio: '22px',
      curva: 'cubic-bezier(0.32, 0.72, 0.24, 1)',
      claro: {
        fondo: '#E9F2FB',
        sup: '#FFFFFF',
        texto: '#36465C',
        suave: '#6F8197',
        acento: '#5AA6D2',
      },
      oscuro: {
        fondo: '#131826',
        sup: '#1B2233',
        texto: '#ECF2FB',
        suave: '#AEB9D1',
        acento: '#9DCEF0',
      },
    },
    detalle: {
      stackRoles: [
        {
          nombre: 'Nuxt 3',
          papel: 'El armazón. Dieciocho pantallas por archivo y, en el mismo proyecto, el servidor Nitro que sirve la API.',
        },
        {
          nombre: 'Vue 3',
          papel: 'La interfaz. Componentes propios, sin librería de UI de terceros.',
        },
        {
          nombre: 'Tailwind CSS 4',
          papel: 'Los estilos. Paleta pastel y radios definidos como tokens en un solo archivo.',
        },
        {
          nombre: 'Drizzle + Postgres',
          papel: 'Los datos. Treinta y una tablas, todas colgadas del usuario por user_id.',
        },
        {
          nombre: 'Zod',
          papel: 'El borde. Valida el cuerpo de cada petición antes de que toque la base.',
        },
        {
          nombre: 'TanStack Vue Query',
          papel: 'La caché del cliente. Listas con actualización optimista y vuelta atrás si el servidor falla.',
        },
      ],
      unaFrase: 'Aplicación web de organización personal con catorce módulos —calendario, tareas, notas, recordatorios, hábitos, metas, diario, enfoque, rutinas, listas, finanzas, música, chat y una mascota— hecha con Nuxt 3 sobre Postgres, con una IA que interpreta lo que escribes y avisos que llegan por Web Push.',
      porQueExiste: 'El día a día suele quedar repartido entre la aplicación de calendario del teléfono, una libreta de notas, una lista de compras y algún recordatorio suelto, y nada de eso se habla entre sí. Hibi junta todo en una sola cuenta: catorce módulos que comparten usuario, idioma, tema y avisos, más una barra donde escribes una frase suelta y la IA decide si eso era una tarea, un recordatorio o una nota. Alrededor de eso se sumaron dos cosas que no son de agenda pero sí de uso diario: una mascota que se cuida y se degrada con el tiempo real, y un reproductor de Spotify con el SDK de reproducción en el navegador. Lo que quedó fuera está igual de decidido: no hay compartir entre personas —cada tabla lleva user_id y no existe la noción de equipo—, no hay modo sin conexión (la caché de consultas no se persiste todavía) y la hora de los avisos está fijada en UTC-5 en vez de guardar una zona por usuario.',
      funcionalidades: [
        {
          area: 'Cuenta, sesión y perfil',
          items: [
            'Registro con nombre opcional, correo y contraseña de mínimo 6 caracteres',
            'Inicio de sesión con correo y contraseña, con los errores traducidos según la cookie de idioma',
            'Entrar con Google por OAuth 2.0 con permisos openid, email y profile, y un state anti-CSRF que vive 10 minutos en cookie',
            'Si el correo de Google ya tiene cuenta, se vincula en vez de crear una segunda',
            'Recuperación de contraseña por correo: enlace válido 30 minutos y respuesta siempre igual exista o no la cuenta',
            'Cambiar la contraseña desde Ajustes: mínimo 8 caracteres, confirmación y verificación de la actual',
            'Las cuentas creadas solo con Google pueden fijar contraseña por primera vez sin escribir la anterior',
            'Límite de intentos por IP: 12 por minuto en login, 6 en registro, 5 en recuperar, 10 en restablecer y 8 en cambio de contraseña',
            'Sesión de 30 días en cookie httpOnly con sameSite lax, marcada secure cuando el origen es https',
            'Cerrar sesión apaga además el reproductor de Spotify que estuviera sonando',
            'Foto de perfil con recortador circular de 280 px: arrastrar para encuadrar, rueda o pellizco para el zoom y exportación a 512×512 JPEG',
            'Al crear la cuenta se siembran seis categorías de gastos, la ficha de la mascota y la fila de ajustes',
          ],
        },
        {
          area: 'Inicio y captura rápida',
          items: [
            'Saludo por franja horaria calculado con la hora local del dispositivo: mañana de 5 a 12, tarde de 12 a 19 y noche el resto',
            'Seis tarjetas de resumen del día: eventos, tareas de hoy, recordatorios, hábitos hechos sobre el total, ánimo del diario y racha de la mascota',
            'El resumen se pide al servidor con la fecha que calcula el navegador, para que el corte del día no dependa del reloj del servidor',
            'Barra de captura rápida: escribes una frase suelta y la IA crea la tarea, el recordatorio o la nota que corresponda',
            'La captura rápida no toca el calendario: una cita o una reunión se guarda como recordatorio, que además avisa',
            'Red de seguridad por expresión regular: si el modelo clasifica como tarea algo con cita, reunión, consulta o turno, se reescribe a recordatorio',
            'Comandos con barra que fuerzan el tipo: /tarea, /cita, /nota, /recordatorio y sus variantes en inglés',
            'Con /nota la IA redacta el contenido completo en cuatro a seis secciones y propone la carpeta donde archivarlo, creándola si no existe',
            'Si la IA no responde, lo escrito se guarda igual como tarea para no perderlo',
          ],
        },
        {
          area: 'Calendario y recordatorios',
          items: [
            'Cuatro vistas del calendario: día, semana, mes y agenda',
            'La rejilla del mes siempre pinta 42 celdas para que el layout no salte entre un mes de cinco y uno de seis semanas',
            'Línea de tiempo de 24 horas a 48 px por hora en día y semana, con cada evento colocado por su hora de inicio y su duración',
            'La línea de tiempo se abre en el primer evento del día, o a las 07:00 si no hay ninguno',
            'Los eventos sin hora se agrupan en una franja aparte de todo el día',
            'Crear y editar eventos con título, fecha, hora de inicio y fin o todo el día, y color propio',
            'Swipe horizontal para cambiar de mes, semana o día, con umbral de 45 px y solo si el gesto es claramente horizontal',
            'Recordatorios agrupados solos en Hoy, Mañana, Esta semana y Más adelante a partir de su fecha',
            'Crear recordatorio con título, fecha, hora, notas, marca de alarma y antelación: a la hora exacta o entre 5 minutos y 1 día antes',
          ],
        },
        {
          area: 'Tareas y rutinas',
          items: [
            'Dos vistas de tareas: lista y tablero de dos columnas, pendiente y hecha',
            'Seis filtros: todas, hoy, próximas, sin fecha, importantes (prioridad 2 o más) y hechas, con hoy como filtro de entrada',
            'Cinco niveles de prioridad —ninguna, baja, media, alta y urgente—, cada uno con su color en la lista',
            'Repetición semanal marcando días sueltos o todos de golpe, guardada como letras L M X J V S D independientes del idioma',
            'Completar una tarea recurrente no la marca hecha: mueve su fecha a la próxima ocurrencia marcada',
            'Arrastrar tarjetas entre columnas con un clon que sigue al cursor, idéntico a la tarjeta original',
            'Rutinas por franja del día —mañana, mediodía y noche— con los días de la semana en que aplican',
            'Cada rutina lleva pasos con minutos y subpasos, reordenables arrastrando tanto al crearla como al editarla',
            'Filtro entre las rutinas que tocan hoy y todas',
          ],
        },
        {
          area: 'Notas y archivos',
          items: [
            'Carpetas de notas con color, y notas con título, cuerpo en HTML y marca de fijada',
            'Editor propio con negrita, cursiva, tachado, H1, H2, cita, bloque de código, listas con y sin orden, enlace, alineación, deshacer y rehacer',
            'Color de texto y resaltado con selector propio, y once tamaños de letra entre 10 y 32 pt',
            'Guardado en vivo: el título al salir del campo y el cuerpo con 500 ms de retardo, volcando lo pendiente al cambiar de nota',
            'Insertar imágenes y audio dentro del cuerpo de la nota; ahí solo se aceptan esos dos tipos',
            'Panel de documentos por carpeta que acepta imagen, audio, video, PDF, texto plano y markdown, y rechaza el resto',
            'Límite de 20 MB por archivo, guardado en un directorio de disco y no como binario en la base',
            'Visor dentro de la app para imagen, PDF, video y texto, y reproductor propio de audio con barra de avance, volumen y silenciar que restaura el volumen anterior',
            'Borrar una carpeta borra antes sus notas, y nunca se puede borrar la última que quede',
          ],
        },
        {
          area: 'Hábitos, metas y diario',
          items: [
            'Hábitos con nombre, icono elegido entre veinticuatro y color de anillo',
            'Tracker semanal de siete columnas por hábito, navegable hacia semanas anteriores',
            'Solo se puede marcar el día de hoy; el resto de la rejilla es de lectura',
            'Racha actual, mejor racha y porcentaje de cumplimiento sobre los últimos 49 días',
            'Una sola marca por hábito y día, garantizada por un índice único en la base',
            'Metas con título, área, unidad, cantidad objetivo, fecha meta y color',
            'Barra de progreso arrastrable: el valor se refleja al instante y se persiste al soltar',
            'Las metas cuya unidad es COP se muestran formateadas como moneda colombiana',
            'Hitos por meta que se marcan solos cuando el progreso pasa su porcentaje',
            'Diario con una entrada por día: ánimo de 1 a 5 y cuerpo con el mismo editor enriquecido',
            'Calendario del mes coloreado con el ánimo registrado en cada día',
          ],
        },
        {
          area: 'Enfoque, listas y finanzas',
          items: [
            'Temporizador con tres modos: enfoque, descanso corto y descanso largo',
            'Presets propios con nombre y minutos de cada modo, creables y editables; nunca se puede quedar en cero',
            'Al terminar una sesión de enfoque se registra con su tarea y sus minutos',
            'Lista de las sesiones de hoy con el tiempo relativo desde que acabaron',
            'Listas de cuatro tipos —compra, pelis y series, libros y sitios— cada una con su icono y su color',
            'Ítems marcables con contador de marcados sobre el total y estrellas cuando el ítem trae valoración',
            'Categorías de gasto propias con nombre, icono entre veinte y color; seis vienen creadas de fábrica',
            'Gastos por mes con navegación entre meses: el total, el desglose y la lista se recalculan por el mes visible',
            'Desglose por categoría con su porcentaje sobre el gasto del mes, ordenado de mayor a menor',
            'Suscripciones con importe mensual y fecha del próximo cobro, con su total sumado aparte',
          ],
        },
        {
          area: 'Hibi, la mascota y sus juegos',
          items: [
            'Cuatro indicadores de 0 a 100: energía, pancita, cariño y diversión',
            'Cuatro cuartos que se recorren con flechas —casa, cocina, juegos y dormitorio— cada uno con su color de pared y su escenografía',
            'Acariciarla en la casa la hace reír, rebotar y soltar corazones desde puntos aleatorios del contorno de la nube',
            'La mirada sigue al cursor y, mientras arrastras comida, sigue la comida; abre la boca cuando la comida se acerca',
            'Nevera con lo que tienes y tienda con treinta comidas, entre 8 y 78 monedas, que dan de 5 a 27 puntos de pancita',
            'Se empieza con 40 monedas y un inventario de tres galletas, dos manzanas y un sándwich',
            'Dormir sube la energía unos 20 puntos por hora; al llegar a 100 sigue dormida y empiezan a caer los demás indicadores',
            'Despierta, la pancita baja 4 puntos por hora, la energía 3, el cariño 2 y la diversión 3',
            'Racha diaria de cuidados que se corta si pasa un día entero sin atenderla',
            'Seis minijuegos: Happy Flip, Parejas, Pop de nubes, Secuencia, Fusiona y Esquiva',
            'Jugar paga monedas, sube 10 de diversión y 2 de cariño, y baja 3 de energía',
          ],
        },
        {
          area: 'Chat con la IA y música',
          items: [
            'Conversaciones guardadas con historial lateral, crear nueva y borrar',
            'Respuesta en streaming: el texto va apareciendo mientras el modelo escribe',
            'El título de la conversación lo redacta el modelo por tema tras el primer intercambio, y se limpia de comillas, viñetas y prefijos tipo Título:',
            'Cuando preguntas por lo que ya tienes, el servidor lee tus datos reales y se los pasa al modelo como contexto en vez de dejarlo improvisar',
            'Desde el chat también se crea tarea, cita, recordatorio o nota, con una frase que dice en qué módulo quedó',
            'Menú de comandos al escribir la barra, navegable con flechas, Enter y Tab',
            'Conexión de Spotify por OAuth con ocho permisos, incluida la reproducción en el navegador',
            'Reproductor propio con el Web Playback SDK para cuentas Premium; sin Premium los enlaces abren Spotify',
            'Playlists del usuario con buscador y la lista completa de canciones de cada una, paginada de cien en cien',
            'Reproducir una playlist desde una canción concreta, cola en vivo, aleatorio, repetición en tres estados, avance, volumen y silencio',
          ],
        },
        {
          area: 'Interfaz, idioma y avisos',
          items: [
            'Español e inglés completos, con diecinueve archivos de traducción por idioma y el idioma recordado en una cookie de un año',
            'Tema claro y oscuro con interruptor de sol y luna; la aplicación arranca siempre en claro y no sigue el modo del sistema',
            'Sin scroll global: la app ocupa el alto de la ventana y cada panel maneja el suyo, con las barras de scroll ocultas',
            'Cero modales: crear y editar ocurre en vistas propias o paneles inferiores, no en ventanas superpuestas',
            'Interruptor maestro de avisos del navegador más dos tipos independientes: recordatorios y resumen diario',
            'Web Push real con VAPID: los avisos llegan con la aplicación cerrada porque el service worker se despierta',
            'Los recordatorios con hora se envían el minuto en que vencen, con una ventana de tres horas para que un reinicio no dispare avisos viejos de golpe',
            'Resumen diario a partir de las 8:00, una vez al día, y solo si hay algo que contar',
            'Instalable como PWA con icono enmascarable, arranque en Inicio y orientación vertical',
            'Las animaciones se anulan cuando el sistema pide movimiento reducido',
          ],
        },
      ],
      carpetas: [
        {
          carpeta: 'raíz',
          que_es: 'Proyecto único de Nuxt: interfaz y servidor conviven, y arriba solo vive la configuración.',
          hijos: [
            {
              carpeta: 'nuxt.config.ts',
              que_es: 'módulos, fuentes, idiomas, secretos de servidor y reglas de ruta',
            },
            {
              carpeta: 'drizzle.config.ts',
              que_es: 'apunta el generador de migraciones al esquema de Postgres',
            },
            {
              carpeta: 'Dockerfile',
              que_es: 'imagen sobre node:22-bookworm-slim que compila y arranca el servidor de Nitro',
            },
          ],
        },
        {
          carpeta: 'pages/',
          que_es: 'Una ruta por archivo. Dieciocho pantallas, catorce de ellas módulos del menú.',
          hijos: [
            {
              carpeta: 'inicio.vue',
              que_es: 'resumen del día y la barra de captura rápida',
            },
            {
              carpeta: 'hibi.vue',
              que_es: 'la mascota: estado persistido, decaimiento por tiempo y premios de los juegos',
            },
            {
              carpeta: 'notes.vue',
              que_es: 'la pantalla más grande: carpetas, notas, editor y adjuntos',
            },
            {
              carpeta: 'login.vue',
              que_es: 'entrar, registrarse y recuperar en una sola vista, siempre en claro',
            },
          ],
        },
        {
          carpeta: 'components/',
          que_es: 'Componentes propios sin prefijo de carpeta; no se usa ninguna librería de UI de terceros.',
          hijos: [
            {
              carpeta: 'ui/',
              que_es: 'los ladrillos: botón, tarjeta, campos, hoja inferior, editor enriquecido y recortador de foto',
            },
            {
              carpeta: 'shell/',
              que_es: 'el armazón: barra superior, barra inferior, panel Más y el interruptor de tema',
            },
            {
              carpeta: 'deco/',
              que_es: 'la mascota y su mundo: nubes, caras, corazones y la escena de los cuatro cuartos',
            },
            {
              carpeta: 'deco/games/',
              que_es: 'cinco de los seis minijuegos; el sexto vive en HibiGame.vue',
            },
          ],
        },
        {
          carpeta: 'composables/',
          que_es: 'La lógica reutilizable del cliente: veintiocho archivos, casi todos envoltorios de un módulo.',
          hijos: [
            {
              carpeta: 'useResource.ts',
              que_es: 'el CRUD genérico con actualización optimista del que cuelgan casi todos los módulos',
            },
            {
              carpeta: 'useNotifications.ts',
              que_es: 'permisos, avisos locales y alta y baja de la suscripción a Web Push',
            },
            {
              carpeta: 'useSpotify.ts',
              que_es: 'estado del reproductor y carga del Web Playback SDK',
            },
            {
              carpeta: 'usePet.ts',
              que_es: 'lectura y guardado con retardo del estado de la mascota',
            },
          ],
        },
        {
          carpeta: 'server/',
          que_es: 'Todo el lado servidor dentro de Nitro: rutas, esquema, utilidades y el programador.',
          hijos: [
            {
              carpeta: 'api/',
              que_es: 'ciento cuatro manejadores agrupados por recurso, más auth, chat, ia, push y spotify',
            },
            {
              carpeta: 'db/schema.ts',
              que_es: 'las treinta y una tablas de Postgres definidas con Drizzle',
            },
            {
              carpeta: 'utils/',
              que_es: 'sesión, cifrado, validación, correo, subidas, IA, comandos, Spotify y Web Push',
            },
            {
              carpeta: 'plugins/scheduler.ts',
              que_es: 'el temporizador que revisa avisos cada minuto dentro del propio proceso',
            },
            {
              carpeta: 'routes/auth/google/',
              que_es: 'las dos rutas del OAuth de Google, fuera de /api porque las visita el navegador',
            },
          ],
        },
        {
          carpeta: 'i18n/',
          que_es: 'Los textos. Nada de cadenas sueltas en las pantallas.',
          hijos: [
            {
              carpeta: 'locales/es/',
              que_es: 'diecinueve archivos, uno por módulo, cargados de forma diferida',
            },
            {
              carpeta: 'locales/en/',
              que_es: 'la traducción completa al inglés, archivo por archivo',
            },
          ],
        },
      ],
      arquitectura: {
        resumen: 'Un solo proyecto de Nuxt 3 con las dos mitades dentro: la interfaz Vue y el servidor Nitro que expone ciento cuatro rutas. El estado de servidor lo lleva TanStack Vue Query en el cliente, con listas optimistas y vuelta atrás si la petición falla; el estado de la sesión viaja en una cookie firmada, y en el navegador solo quedan preferencias y la caché local de la mascota. La persistencia es Postgres a través de Drizzle, treinta y una tablas todas colgadas de auth_users por user_id, y los adjuntos van a un directorio de disco montado aparte en vez de a la base. Dentro del mismo proceso corre un programador que cada minuto busca recordatorios vencidos y, pasadas las 8:00, el resumen del día, y los manda como Web Push firmado con VAPID; el service worker los recibe con la aplicación cerrada. Hacia afuera solo hay cuatro dependencias: un gateway de IA compatible con OpenAI (o un Ollama local en desarrollo) para el chat y el intérprete de comandos, la Web API de Spotify, el OAuth de Google y Resend para los correos de recuperación. Todo se empaqueta en una imagen Docker sobre node:22-bookworm-slim que compila con nuxt build y arranca el servidor de Nitro escuchando en el puerto que le pasen. Si falta cualquiera de esas claves la aplicación sigue en pie: el módulo que dependa de ellas es el único que deja de responder.',
        capas: [
          {
            nombre: 'Cliente',
            piezas: [
              {
                nombre: 'Interfaz Nuxt',
                tecnologia: 'Vue 3 · Tailwind CSS 4 · iconos Lucide',
                que_hace: 'Dieciocho pantallas con componentes propios, dos idiomas y dos temas. Sin scroll global: la ventana entera es la aplicación.',
              },
              {
                nombre: 'Caché de estado',
                tecnologia: 'TanStack Vue Query',
                que_hace: 'Una consulta por recurso con un minuto de frescura. Crear, editar y borrar se pintan al instante y se revierten si el servidor rechaza.',
              },
              {
                nombre: 'Service worker',
                tecnologia: 'sw.js · PushManager',
                que_hace: 'Existe para que la aplicación sea instalable y para recibir los push. No intercepta la red: deja pasar todas las peticiones.',
              },
            ],
          },
          {
            nombre: 'Servidor',
            piezas: [
              {
                nombre: 'API Nitro',
                tecnologia: 'H3 · Zod · cookie firmada con HMAC',
                que_hace: 'Ciento cuatro rutas por archivo. Cada una exige sesión y valida el cuerpo con Zod antes de tocar la base.',
              },
              {
                nombre: 'Intérprete de comandos',
                tecnologia: 'tool calling · extracción de fechas por regex',
                que_hace: 'Traduce una frase suelta a una fila concreta: tarea, evento, recordatorio o nota. La fecha la saca del texto, no del modelo.',
              },
              {
                nombre: 'Programador de avisos',
                tecnologia: 'plugin de Nitro · setInterval',
                que_hace: 'Un ciclo por minuto dentro del mismo proceso: recordatorios vencidos y, tras las 8:00, el resumen del día.',
              },
              {
                nombre: 'Almacén de adjuntos',
                tecnologia: 'sistema de archivos · UPLOADS_DIR',
                que_hace: 'Guarda los archivos con un nombre generado y los sirve con el tipo de contenido reescrito según lo que sea seguro mostrar.',
              },
            ],
          },
          {
            nombre: 'Datos y servicios',
            piezas: [
              {
                nombre: 'Postgres',
                tecnologia: 'Drizzle ORM · postgres.js',
                que_hace: 'Treinta y una tablas. auth_users, auth_tokens y auth_logins espejan el esquema compartido de acmsy; el resto cuelga del usuario en cascada.',
              },
              {
                nombre: 'IA',
                tecnologia: 'gateway compatible con OpenAI · Ollama',
                que_hace: 'Chat en streaming y detección de herramientas. Con Ollama solo hay chat: el tool calling requiere el gateway.',
              },
              {
                nombre: 'Spotify',
                tecnologia: 'OAuth 2.0 · Web API · Web Playback SDK',
                que_hace: 'Playlists y control de reproducción. El refresh_token nunca sale del servidor; el access_token se renueva y se entrega al SDK.',
              },
              {
                nombre: 'Google y Resend',
                tecnologia: 'OAuth 2.0 · API de correo',
                que_hace: 'Entrada con cuenta de Google y el correo de recuperación, con la nube de la marca incrustada en la plantilla.',
              },
              {
                nombre: 'Web Push',
                tecnologia: 'web-push · VAPID',
                que_hace: 'Una fila por navegador suscrito. Los envíos van con urgencia alta y doce horas de vida para despertar teléfonos dormidos.',
              },
            ],
          },
        ],
      },
      decisiones: [
        {
          titulo: 'La sesión es una cookie firmada, y la tabla de sesiones quedó sin usar',
          texto: 'El esquema declara auth_sessions con su token, su usuario y su vencimiento, pero ninguna ruta la lee ni la escribe. La sesión real es una cookie hibi_session con el identificador del usuario en base64url y un HMAC-SHA256 detrás, comparado en tiempo constante. Eso quita una consulta a la base en cada petición y hace que el servidor no tenga que recordar nada. El precio es que no se puede revocar una sesión desde el servidor: cerrarla solo borra la cookie del navegador que la tenía, y cualquier copia de esa cookie sigue siendo válida hasta que pasen los treinta días.',
        },
        {
          titulo: 'Las tablas de autenticación espejan el esquema de otra aplicación y no se tocan',
          texto: 'auth_users, auth_tokens y auth_logins mantienen a propósito los nombres y las columnas del módulo compartido de acmsy, porque el panel de esa plataforma lee esas tablas directamente. Por eso el identificador de usuario es un serial entero mientras todas las tablas propias usan UUID de texto como clave primaria. Es una inconsistencia asumida: renombrar o normalizar habría roto el panel externo, y esa compatibilidad valía más que la coherencia interna del esquema.',
        },
        {
          titulo: 'El programador de avisos vive dentro del proceso, sin cron externo',
          texto: 'Un plugin de Nitro arranca un temporizador que corre el primer ciclo a los quince segundos —para dar tiempo a que la conexión a la base esté lista— y luego uno por minuto. Cualquier excepción se traga en silencio, con el comentario explícito de no tumbar el servidor por un fallo de push. Hay un guard sobre globalThis porque el recargado en caliente del modo desarrollo monta el plugin varias veces y dejaba temporizadores duplicados. La suposición dura es que solo hay un contenedor: con dos réplicas, los dos programadores competirían por los mismos recordatorios.',
        },
        {
          titulo: 'El aviso solo se marca como enviado si de verdad se entregó',
          texto: 'Cuando un recordatorio vence, se manda el push y solo entonces se escribe pushed_at, y únicamente si al menos un dispositivo lo aceptó. Si en ese momento no había ninguno alcanzable, la fila se queda intacta y se reintenta al minuto siguiente. Para que un reinicio del servidor no dispare de golpe todo lo atrasado, la búsqueda tiene una ventana inferior de tres horas: lo más viejo que eso se da por perdido. Si el usuario apagó ese tipo de aviso, la fila se marca igual para no volver a evaluarla cada minuto.',
        },
        {
          titulo: 'El push va con urgencia alta y doce horas de vida para vencer el modo de ahorro de Android',
          texto: 'Un push normal no despierta un teléfono Android que lleva horas en reposo profundo: el aviso queda encolado hasta que el usuario abre el navegador, que era exactamente el fallo del resumen de las ocho de la mañana. La solución fue mandar cada notificación con urgency alta y un TTL de doce horas, suficiente para que llegue si el teléfono estuvo apagado un rato pero sin arrastrar avisos de días anteriores. Además el service worker pone icono y badge siempre, porque en Android una notificación del navegador sin icono se descarta sin decir nada.',
        },
        {
          titulo: 'Si hay push real, el cliente no agenda ninguna notificación local',
          texto: 'Existen dos caminos para el mismo aviso: el servidor mandando push, y un setTimeout en el navegador para los recordatorios de hoy. Si corrieran los dos, el usuario recibiría la notificación al vencer la hora con la app cerrada y otra vez al abrirla. Por eso, antes de programar nada localmente, el cliente pregunta al PushManager si este navegador ya está suscrito y, si lo está, no agenda nada. El camino local queda solo como respaldo para dispositivos donde el push no funcione.',
        },
        {
          titulo: 'El service worker no intercepta la red: existe solo para instalar y para recibir push',
          texto: 'El listener de fetch está registrado pero vacío, sin llamar a respondWith. Un navegador solo considera instalable una aplicación que tenga ese listener, así que basta con declararlo; en cuanto se intentó devolver respuestas desde caché apareció el error de convertir un valor a Response cada vez que la red fallaba. Además, la ruta del propio archivo lleva Cache-Control no-store porque el CDN lo estaba guardando cuatro horas y no propagaba los cambios. El modo sin conexión quedó pendiente a cambio de que nada se rompa por caché.',
        },
        {
          titulo: 'La fecha de un comando se extrae del texto del usuario, no de lo que devuelve el modelo',
          texto: 'Los modelos pequeños fallan en aritmética de calendario: contestan años pasados o calculan mal el próximo viernes. Así que antes de mirar los argumentos que devolvió la herramienta, una función lee el mensaje original con expresiones regulares y resuelve hoy, mañana, pasado mañana, los siete días de la semana y una fecha ISO literal. Solo si ahí no hay nada se usa lo que dijo el modelo, y aun así se descarta cualquier fecha anterior a hoy por considerarla alucinación. El coste es que solo se entienden las expresiones previstas: no hay comprensión de fechas fuera de esa lista.',
        },
        {
          titulo: 'La captura rápida del inicio no puede crear eventos de calendario',
          texto: 'Al intérprete que usa la barra del inicio se le pasa el catálogo de herramientas con create_event filtrado fuera, y un prompt distinto que dice explícitamente que ahí no existe el calendario. El motivo es práctico: un evento no notifica y un recordatorio sí, así que una cita escrita al vuelo es más útil como recordatorio. Encima hay una red de seguridad determinista: si el modelo devolvió una tarea y el texto contiene cita, reunión, consulta o turno, se reescribe a recordatorio. El chat, en cambio, sí puede crear eventos, porque ahí el usuario está siendo explícito.',
        },
        {
          titulo: 'La IA escribe la nota en Markdown y el servidor la convierte a HTML acotado',
          texto: 'Pedirle HTML directo a un modelo pequeño da etiquetas mal cerradas y estilos inventados; en Markdown escribe mucho mejor. Por eso el prompt exige Markdown y un conversor propio lo pasa a HTML permitiendo solo lo que el editor de notas sabe estilizar: h1, h2, párrafos, listas, negrita, cursiva y cita. No se genera h3 a propósito, porque el editor no lo estiliza y se vería como texto plano. También se fija el formato de respuesta con dos líneas de cabecera, CARPETA y TITULO, que el servidor extrae y usa para archivar la nota.',
        },
        {
          titulo: 'Si la IA no responde, la captura rápida guarda una tarea igual',
          texto: 'La llamada al intérprete está envuelta en un try que se traga el error, y si no volvió nada creado se crea una tarea con el texto tal cual, quitándole el prefijo del comando si lo tenía. La idea es que escribir en esa barra nunca pierda lo escrito, aunque el gateway esté caído o el modelo devuelva basura. El precio es que un fallo de la IA no se ve como fallo: aparece una tarea donde el usuario esperaba un recordatorio.',
        },
        {
          titulo: 'El detector de comandos devuelve vacío contra Ollama',
          texto: 'El chat funciona con dos motores: un gateway compatible con OpenAI y un Ollama local. El streaming está implementado para ambos, pero la detección de herramientas solo se intenta contra el gateway; si únicamente hay Ollama configurado, la función devuelve una lista vacía sin llamar a nadie. En desarrollo eso significa que se puede charlar pero no crear nada por lenguaje natural, salvo los comandos con barra, que tienen un camino determinista de respaldo cuando la clasificación no responde.',
        },
        {
          titulo: 'Los adjuntos van a disco y el servidor decide con qué tipo servirlos',
          texto: 'Los archivos se escriben en un directorio montado aparte, con un UUID como nombre y solo la extensión saneada del original; en la base queda únicamente la referencia. Al servirlos no se confía en el mimetype que declaró quien subió el archivo: el texto se fuerza siempre a text/plain para que nadie cuele HTML y ejecute JavaScript en el origen de la aplicación, y todo lo que no sea imagen, audio, video, PDF o texto se manda como octet-stream con descarga forzada. Un SVG se clasifica como otro precisamente por eso, aunque técnicamente sea una imagen.',
        },
        {
          titulo: 'El mismo adjunto sirve para dos sitios distintos y son excluyentes',
          texto: 'La tabla de adjuntos tiene noteId y folderId, y solo uno de los dos se rellena. Con nota, el archivo se inserta dentro del cuerpo y no aparece en ningún listado: ahí solo se aceptan imagen y audio. Con carpeta, vive en el panel de documentos de esa carpeta y nunca dentro de una nota, y ahí se rechaza en el momento de subir cualquier tipo que no sea imagen, audio, video, PDF o texto. Es una sola tabla para dos flujos con reglas opuestas, a cambio de que la validación tenga que ir duplicada en los dos endpoints.',
        },
        {
          titulo: 'Las rutinas se guardan reemplazando el documento entero',
          texto: 'Al editar una rutina no se calcula qué paso cambió: se borran todos sus pasos —y en cascada sus subpasos— y se reinsertan desde cero con las posiciones recalculadas. Con listas cortas y guardado con retardo eso es más simple y más fiable que reconciliar altas, bajas y reordenamientos. La contrapartida es que cada guardado genera identificadores nuevos para todos los pasos, así que nada externo puede apuntar a un paso concreto de forma estable.',
        },
        {
          titulo: 'Completar una tarea recurrente no la marca hecha',
          texto: 'Si la tarea tiene días de repetición, tocar la casilla no cambia su estado: mueve su fecha de vencimiento a la próxima ocurrencia estrictamente posterior a la actual entre los días marcados. Así una tarea que se repite es siempre la misma fila, sin generar una instancia por semana ni acumular historial. Lo que se pierde es justamente ese historial: no queda registro de qué días se cumplió una tarea recurrente, a diferencia de los hábitos, que sí guardan una marca por día.',
        },
        {
          titulo: 'El estado de la mascota se reconcilia entre el navegador y el servidor por marca de tiempo',
          texto: 'Al entrar se lee primero la copia local, que es instantánea, y se pide la del servidor; si la del servidor tiene un lastTick más reciente —señal de que se jugó desde otro dispositivo— gana esa. Solo después se aplica el decaimiento por las horas transcurridas y se vuelve a guardar la fusión. Los indicadores se llevan como decimales y se redondean únicamente al mostrarlos y al enviarlos, porque redondear en cada tick perdería las fracciones y la mascota nunca bajaría. Nada se muestra hasta terminar esa reconciliación, para que no se vea el parpadeo de valores por defecto, caché y decaimiento.',
        },
        {
          titulo: 'Dormir de más también pasa factura',
          texto: 'Mientras la mascota duerme, la energía sube unos veinte puntos por hora, pero al llegar a cien no se despierta sola: sigue dormida y, a partir de ese momento, la pancita cae seis puntos por hora, la diversión otros seis y el cariño cuatro, bastante más rápido que los cuatro, tres y dos de estar despierta. Solo se despierta cuando el usuario enciende la luz. Es una decisión de juego, no técnica: evita que dejarla dormida indefinidamente sea la estrategia óptima, que es justo lo que pasaba cuando el sueño solo tenía efectos positivos.',
        },
        {
          titulo: 'El punto de corte de escritorio exige un ratón, no solo ancho',
          texto: 'Las variantes md y lg se redefinieron para que solo apliquen cuando el puntero no sea grueso, o cuando la pantalla pase de 1180 px. El efecto es que una tablet táctil de novecientos píxeles recibe el layout de celular en vez de un escritorio comprimido que ahí se veía apretado. El PC con ratón y el teléfono no cambian nada. El coste es que un portátil con pantalla táctil de menos de 1180 px también cae en el layout de celular, y que el breakpoint deja de coincidir con lo que anuncia su nombre.',
        },
        {
          titulo: 'El swipe del calendario usa eventos táctiles, no eventos de puntero',
          texto: 'La primera versión escuchaba pointerdown y pointerup, y en un teléfono real casi nunca funcionaba: en cuanto el navegador interpretaba el gesto como scroll disparaba pointercancel y el manejador de subida jamás corría. Se cambió a touchstart y touchend, que sí llega siempre con la posición final. Encima se exige un desplazamiento de más de 45 px y que sea al menos 1,3 veces más horizontal que vertical, para no cambiar de mes cuando el usuario solo quería desplazar la lista.',
        },
        {
          titulo: 'El arrastre entre columnas del tablero es manual, no el del navegador',
          texto: 'El arrastre nativo pinta un fantasma semitransparente que no se parece a la tarjeta. Aquí se clona el nodo, se le pone position fixed y se mueve siguiendo al puntero, así que lo que se arrastra es visualmente idéntico a la tarjeta original. Para saber sobre qué columna está el cursor se oculta el clon un instante, se pregunta qué elemento hay bajo el punto y se vuelve a mostrar. Es más código y hay que limpiar los listeners a mano, a cambio de que el gesto se vea como el resto de la interfaz.',
        },
        {
          titulo: 'La aplicación arranca siempre en claro e ignora la preferencia del sistema',
          texto: 'El modo de color está fijado en claro como preferencia y como respaldo, y hay un plugin que migra a claro cualquier cuenta que hubiera quedado guardada en modo sistema de versiones anteriores. La pantalla de entrada va más lejos: se envuelve en un subárbol marcado como claro y además fuerza el atributo en el elemento raíz al montarse, restaurándolo al salir, para que se vea igual aunque la aplicación esté en oscuro. Es una decisión de identidad —la paleta pastel es lo primero que se ve— a costa de ignorar lo que el usuario configuró en su sistema.',
        },
        {
          titulo: 'El modo oscuro de la paleta pastel se resuelve con anulaciones por clase, no con tokens',
          texto: 'Las superficies y los textos sí son variables que cambian por tema, pero los colores de marca —cielo, rosa, menta, lavanda, durazno, crema— se reescriben en oscuro con una lista de reglas por clase concreta marcadas como importantes, y se vuelven a reescribir para el subárbol claro del login. Es repetitivo y frágil ante clases nuevas, pero era la forma de mantener el mismo nombre de color en las plantillas y que un fondo pastel siga leyéndose sobre un fondo oscuro sin inventar una segunda paleta.',
        },
        {
          titulo: 'La conexión a Postgres cae a una URL local fija si falta la variable de entorno',
          texto: 'Cuando no hay DATABASE_URL, el cliente se construye igual contra un Postgres local de desarrollo con usuario y contraseña por defecto. En un portátil con la base levantada eso ahorra configuración; en producción significa que un despliegue sin la variable no falla al arrancar, sino que se queda intentando conectar a un servidor que no existe y devolviendo errores en cada ruta que toque datos. La misma filosofía se aplica al resto de integraciones, que se leen siempre de process.env primero porque el fichero de entorno se aplica al arrancar el contenedor, no durante la compilación.',
        },
      ],
    },
  },
  {
    nombre: 'Spentry',
    color: '#96D15A',
    logo: '/logos/spentry.svg',
    stack: ['Nuxt 4', 'Vue 3', 'MySQL 8', 'TypeScript 6'],
    descripcion:
      'Control de gastos diarios: tecleas el monto como en una caja registradora, el gasto queda guardado como un recibo con folio, y las estadisticas del mes te dicen a donde se fue la plata.',
    arquitectura:
      'Nuxt 4 en modo SPA con el backend Nitro dentro del mismo proyecto, sobre MySQL 8 con SQL escrito a mano y tipado estricto en TypeScript. Cada gasto se pinta al instante y viaja al servidor en segundo plano, y un temporizador dentro del propio Nitro manda el recordatorio diario por Web Push.',
    url: 'https://spentry.acmsy.com',
    captura: 'spentry',
    // Estetica y ficha larga sacadas del repositorio de la app.
    estetica: {
      google: 'Parkinsans:wght@400;500;600;700&family=Nunito:wght@400;500;600;700;800',
      fuente: {
        titulo: '\'Parkinsans\', \'Nunito\', system-ui, sans-serif',
        cuerpo: 'Nunito, system-ui, sans-serif',
        mono: '\'Parkinsans\', ui-monospace, Consolas, monospace',
      },
      radio: '26px',
      curva: 'cubic-bezier(0.23, 1, 0.32, 1)',
      claro: {
        fondo: '#F4F4F5',
        sup: '#FFFFFF',
        texto: '#18181B',
        suave: '#6B6B74',
        acento: '#96D15A',
      },
      oscuro: {
        fondo: '#0E0F0D',
        sup: '#171917',
        texto: '#F2F3F1',
        suave: '#A3A6A1',
        acento: '#96D15A',
      },
    },
    detalle: {
      stackRoles: [
        {
          nombre: 'Nuxt 4',
          papel: 'El armazón. Seis páginas en modo SPA y el backend Nitro dentro del mismo proyecto.',
        },
        {
          nombre: 'Vue 3',
          papel: 'La interfaz. Treinta componentes propios con prefijo St, sin librería de UI de terceros.',
        },
        {
          nombre: 'MySQL 8',
          papel: 'Los datos. Seis tablas InnoDB con mysql2 y consultas escritas a mano.',
        },
        {
          nombre: 'TypeScript 6',
          papel: 'El tipado. Modo estricto en el dominio, las rutas de Nitro y los composables.',
        },
        {
          nombre: 'web-push',
          papel: 'Los avisos. El recordatorio diario firmado con VAPID y enviado desde el propio servidor.',
        },
      ],
      unaFrase: 'Aplicación web instalable hecha con Nuxt 4 en modo SPA sobre MySQL 8, donde anotas cada gasto con un teclado de caja registradora, el gasto sale impreso como un recibo con folio consecutivo que puedes buscar y anular, y las estadísticas del mes te dicen a dónde se fue el dinero; una notificación al cierre del día te recuerda anotar.',
      porQueExiste: 'El problema de llevar las cuentas a mano no es la matemática, es la fricción: si anotar un café cuesta cuatro pantallas, no se anota, y al final del mes no hay nada que mirar. Spentry apuesta todo a que registrar un gasto se sienta como marcar algo en una caja registradora: abres la caja con una tecla o con el atajo de la app, tecleas el monto en un teclado grande, tocas la categoría y el recibo sale impreso. De ahí sale el resto del producto: cada gasto es un recibo con folio consecutivo, los movimientos del mes son una cinta de papel con los bordes dentados, y el detalle es el ticket completo con su código de barras. Dentro quedó lo que sostiene el hábito: ocho categorías listas desde el primer minuto y las que quieras crear con icono y color propios, búsqueda por nota, categoría o folio, un presupuesto mensual opcional, las estadísticas del mes con la comparación contra el mes anterior, exportación a CSV y un recordatorio push a la hora que elijas. Fuera quedó todo lo que exigiría confiar en otro: no hay conexión con el banco ni importación de extractos, no hay ingresos ni balance, no hay gastos recurrentes ni programados, no se adjuntan fotos de recibos reales, no hay gastos compartidos entre varias personas y el restablecimiento de contraseña por correo todavía está anunciado pero sin implementar.',
      funcionalidades: [
        {
          area: 'Cuenta y sesión',
          items: [
            'Registro con nombre de mínimo 2 caracteres, correo validado contra un patrón y contraseña de mínimo 8; el correo repetido responde 409',
            'Inicio de sesión con correo y contraseña, con el mismo mensaje para cuenta inexistente y clave equivocada',
            'Entrada con Google por OAuth 2.0, con alcance openid email profile, selector de cuenta forzado y un state en cookie que vive diez minutos',
            'Si el servidor no tiene credenciales de Google, el botón vuelve al login con un aviso en lugar de fallar',
            'La cuenta de Google se une por correo a una cuenta que ya exista y le añade su identificador',
            'Sesión de 30 días en cookie httpOnly, sameSite lax y secure fuera de desarrollo',
            'La cuenta nueva arranca sin gastos pero con ocho categorías ya creadas: comida, transporte, mercado, servicios, salud, hogar, compras y ocio',
            'Todas las páginas salvo la de entrada exigen sesión; sin ella se redirige al login',
            'Entrada, registro y recuperación resueltos en una sola pantalla que cambia de modo, con los bloques deslizándose a su nuevo lugar',
            'Pantalla de recuperar contraseña con los tres pasos descritos, que avisa de que el envío por correo todavía no está disponible',
            'Quien entró con Google puede crear una contraseña sin que le pidan la actual',
            'Cada entrada queda registrada con su método y sube el contador de accesos de la cuenta',
          ],
        },
        {
          area: 'Registrar un gasto: la caja registradora',
          items: [
            'Teclado de doce teclas: los dígitos, una tecla de tres ceros y borrar',
            'El visor no acepta cero inicial y se sacude cuando pasas de once dígitos',
            'Mantener pulsada la tecla de borrar medio segundo limpia el monto entero',
            'Cada dígito tecleado entra con su propia animación y los puntos de miles se recolocan solos',
            'Teclado físico en escritorio: números, retroceso y Enter para registrar',
            'Fila de categorías ordenada por las que más usas, que se centra sola en la elegida al tocarla',
            'Desvanecido en el lado de la fila de categorías donde quedan más por ver',
            'Nota opcional de hasta 200 caracteres y selector de fecha que no permite fechas futuras',
            'Atajos de fecha hoy, ayer y anteayer, más un calendario propio de seis semanas fijas con la semana empezando en lunes',
            'Sin monto o sin categoría el botón sacude el visor y marca la fila de categorías, en lugar de escribir un error',
            'Al registrar, el recibo sale impreso por una ranura a tirones, se sostiene un instante y se arranca; tocar la pantalla lo acelera',
            'La hoja del modal se encoge a la medida del recibo mientras se imprime',
            'Vibración corta en cada tecla y un patrón largo al imprimir, en los dispositivos que la soportan',
            'Si el sistema pide movimiento reducido, la impresión se salta y la hoja se cierra de inmediato',
            'La tecla N abre la caja desde cualquier pantalla, sin animación por venir del teclado',
            'El atajo de la app instalada y el toque en la notificación abren la caja directamente',
          ],
        },
        {
          area: 'El recibo',
          items: [
            'Cada gasto guarda un folio consecutivo por usuario, escrito a cuatro dígitos',
            'El recibo trae marca, número, fecha, hora de registro, categoría, nota, total y, si la moneda no coincide con la de visualización, su equivalente',
            'Código de barras dibujado a partir del folio: el mismo recibo siempre muestra el mismo código',
            'Borde inferior dentado hecho con una máscara cónica, igual que el del logo',
            'El papel del recibo se queda claro también en modo oscuro',
            'Al abrir un recibo también sale impreso por la ranura, algo más rápido que en la caja',
            'Anular desde el detalle manteniendo pulsado: el relleno avanza mientras presionas y se ejecuta al llegar al final, sin diálogo de confirmación',
            'Anular desde la lista deslizando la fila a la izquierda, con resistencia si arrastras al revés y descarte por velocidad si el gesto fue rápido',
            'Todo borrado se puede deshacer desde el aviso, y el recibo vuelve con su mismo folio',
            'Editar un recibo abre la misma caja con el monto, la categoría, la nota y la fecha ya cargados',
          ],
        },
        {
          area: 'Inicio: la caja del mes',
          items: [
            'Saludo según la hora del día con el primer nombre de la cuenta',
            'Cifra grande del gasto del mes en un contador de rodillos que gira dígito a dígito, de derecha a izquierda',
            'Tres cifras de apoyo: lo gastado hoy, el promedio diario y los últimos siete días',
            'Barra de presupuesto cuando lo tienes puesto, que pasa a tono de alerta y dice por cuánto te pasaste',
            'Gráfico de los últimos siete días con el día de hoy destacado; al tocar un día su monto reemplaza al total',
            'Fila de atajos para anotar, ordenada por las categorías que más usas',
            'Lista de los últimos treinta recibos, con Hoy y Ayer en lugar de la fecha',
            'Reparto por categoría del mes con monto, porcentaje y barra',
            'Mientras la caja está abierta el total y la lista se quedan quietos; al cerrarse el total rueda y el recibo nuevo entra a la vista',
            'Estado vacío con el logo de la marca y un botón para registrar el primer gasto',
          ],
        },
        {
          area: 'Movimientos: la cinta de recibos',
          items: [
            'Los recibos del mes en una cinta de papel con los dos bordes dentados, agrupados por día',
            'Cabecera de cada día con Hoy o Ayer, la fecha y el total de ese día',
            'Buscador que filtra mientras escribes por nota, nombre de categoría o número de folio',
            'Filtro por categoría que solo ofrece las usadas ese mes; en celular se comprime en un botón que abre una ventanita',
            'Total del filtro arriba de la cinta y total del mes impreso al pie',
            'Al entrar a la vista la cinta entera, papel y contenido juntos, se imprime de arriba abajo a tirones, y no se repite al cambiar de mes o de filtro',
            'Cambiar de mes desplaza la cinta hacia el lado al que navegas',
            'En pantalla ancha una columna lateral con el total del mes, el promedio por recibo, el día de más gasto y el reparto por categoría',
            'Tocar una categoría de esa columna la aplica como filtro de la cinta',
          ],
        },
        {
          area: 'Estadísticas',
          items: [
            'Total del mes con la comparación en porcentaje contra el mes anterior',
            'En el mes en curso la comparación es contra los mismos días del mes pasado, no contra el mes completo',
            'Promedio diario calculado sobre los días transcurridos cuando el mes es el actual',
            'Número de recibos, día más caro y una tarjeta del gasto más alto que abre su recibo',
            'Gráfico día a día del mes con una línea punteada en el promedio',
            'Si una barra se sale de la escala, el gráfico se escala por las demás y esa barra se corta mostrando su valor encima',
            'Dona por categoría con separación entre segmentos: al elegir uno los demás se atenúan y el centro muestra su monto',
            'Leyenda con porcentaje y monto por categoría, sincronizada con la dona en los dos sentidos',
            'Gráfico de los últimos seis meses; al tocar un mes la vista salta a ese mes',
            'Los colores de categoría tienen pasos propios para el modo oscuro, no un simple oscurecido',
            'Navegación entre meses con el contenido entrando desde el lado al que vas',
            'En celular el mes va junto al título, abreviado',
          ],
        },
        {
          area: 'Categorías',
          items: [
            'Rejilla de tarjetas con icono, color, número de recibos, gasto del mes y su barra de proporción',
            'Crear y editar con nombre, un icono de un set de treinta y color, con vista previa viva',
            'Selector de color propio, sin el del navegador: área de saturación y brillo, barra de tono, doce colores rápidos y campo hexadecimal',
            'El selector se arrastra con cualquier puntero y se ajusta con las flechas del teclado',
            'La categoría nueva toma el siguiente color de la paleta que todavía no esté en uso',
            'El color del icono se calcula para que contraste con su círculo en los dos temas, también con colores escritos a mano',
            'Eliminar una categoría en uso obliga a elegir a qué otra se mueven sus gastos; el servidor aplica la misma regla',
            'Botón de más en cada tarjeta que abre la caja con esa categoría ya elegida',
            'Al entrar a la vista cada icono se dibuja trazo a trazo, en cascada',
            'Los nombres repetidos se rechazan: el identificador sale del nombre sin tildes, en minúsculas y con guiones',
          ],
        },
        {
          area: 'Ajustes y perfil',
          items: [
            'Cambiar el nombre visible de la cuenta',
            'Subir foto de perfil arrastrándola sobre el avatar o eligiéndola del disco, y quitarla después',
            'Recortador circular propio con visor de 300 píxeles, arrastre para encuadrar y rueda o pellizco para acercar',
            'Guías de tercios que aparecen mientras mueves la foto y se desvanecen a los 700 ms',
            'La foto se exporta como JPEG cuadrado de 256 píxeles',
            'Tres cifras del perfil que ruedan al entrar: recibos, categorías y lo gastado este mes',
            'Moneda de visualización entre peso colombiano, dólar, euro, peso mexicano, sol peruano y peso chileno',
            'Presupuesto mensual opcional: solo acepta dígitos, lo pegado se limpia y se muestra con separador de miles',
            'El correo se muestra con candado y una nota de que no se puede cambiar',
            'Cambiar o crear la contraseña en un bloque que se despliega dentro de la misma tarjeta',
            'Exportar todos los recibos a un CSV con folio, fecha, categoría, nota, monto y moneda',
            'Los cambios de perfil se guardan solos medio segundo después de dejar de tocarlos',
            'Cerrar sesión desde el pie de la tarjeta de perfil',
            'Al entrar, cada tarjeta de ajustes se descubre de arriba abajo, como un recibo imprimiéndose',
          ],
        },
        {
          area: 'Recordatorio, tema e instalación',
          items: [
            'Interruptor de recordatorio que pide permiso al navegador y registra la suscripción push; queda deshabilitado si el navegador no trae service worker, PushManager o Notification',
            'Mensaje explícito cuando el permiso se deniega o la activación falla',
            'Elegir la hora del aviso entre las seis y las diez de la noche, hora de Colombia',
            'Al apagarlo se borra la suscripción en el servidor y se cancela en el navegador',
            'El servidor revisa cada diez minutos y manda un solo aviso al día por usuario',
            'El texto del aviso cambia según si ya anotaste algo hoy o no, y te nombra por tu primer nombre',
            'Al tocar la notificación se enfoca la pestaña abierta y se abre la caja para registrar',
            'Ruta protegida por un secreto para disparar la tanda de avisos a mano',
            'Tema claro, oscuro o el del sistema, con el cambio revelándose en círculo desde el punto que tocaste',
            'Aplicación instalable: manifiesto en español, arranque en modo standalone vertical, iconos normal y enmascarable, y un atajo de Registrar gasto',
            'Avisos apilados: el más nuevo adelante y los anteriores asomando detrás, que se despliegan al pasar el mouse y se descartan deslizándolos',
            'El tiempo de vida de un aviso es la barrita de abajo, y se pausa con el mouse encima o con la pestaña oculta',
            'Navegación lateral desde 900 píxeles y barra inferior con botón flotante por debajo, con el indicador activo deslizándose entre opciones',
            'Todas las animaciones se anulan si el sistema pide movimiento reducido',
          ],
        },
      ],
      carpetas: [
        {
          carpeta: 'raíz',
          que_es: 'Un solo proyecto Nuxt 4, sin monorepo. Arriba viven la configuración, los estilos y la imagen de despliegue.',
          hijos: [
            {
              carpeta: 'nuxt.config.ts',
              que_es: 'modo SPA, los tres módulos (Tailwind, fuentes y PWA), el manifiesto, los datos estructurados y el script que fija el tema antes del primer pintado',
            },
            {
              carpeta: 'assets/css',
              que_es: 'main.css con los tokens de los dos temas y los controles, layout.css con el shell y las pantallas, receipt.css con las hojas modales y el recibo',
            },
            {
              carpeta: 'tailwind.config.ts',
              que_es: 'el verde de la marca en tres tonos y las dos familias tipográficas, con el preflight apagado',
            },
            {
              carpeta: 'app.vue y error.vue',
              que_es: 'la raíz que inicializa el tema y la pantalla de error',
            },
            {
              carpeta: 'Dockerfile',
              que_es: 'imagen sobre node:22-bookworm-slim que compila y arranca la salida de Nitro en el puerto 3000',
            },
          ],
        },
        {
          carpeta: 'pages/',
          que_es: 'Las seis rutas de la aplicación; el enrutador de Nuxt las toma por el nombre del archivo.',
          hijos: [
            {
              carpeta: 'index.vue',
              que_es: 'la caja del mes: total, últimos siete días, atajos para anotar, últimos recibos y reparto por categoría',
            },
            {
              carpeta: 'movimientos.vue',
              que_es: 'la cinta de recibos del mes con buscador, filtro y la columna lateral de resumen',
            },
            {
              carpeta: 'estadisticas.vue',
              que_es: 'resumen del mes, día a día, dona por categoría y los últimos seis meses',
            },
            {
              carpeta: 'categorias.vue',
              que_es: 'la rejilla de categorías con su gasto del mes',
            },
            {
              carpeta: 'ajustes.vue',
              que_es: 'perfil, foto, tema, moneda, presupuesto, recordatorio, contraseña y exportación',
            },
            {
              carpeta: 'login.vue',
              que_es: 'entrada, registro y recuperación en una sola pantalla que cambia de modo',
            },
          ],
        },
        {
          carpeta: 'components/',
          que_es: 'Los treinta componentes con prefijo St. No entra ninguna librería de componentes de terceros.',
          hijos: [
            {
              carpeta: 'StRegistro.vue',
              que_es: 'la caja registradora: visor, categorías, nota, fecha, teclado y la impresión del recibo',
            },
            {
              carpeta: 'StTicket.vue y StDetalle.vue',
              que_es: 'el papel del recibo con su código de barras, y el modal que lo muestra con editar y anular',
            },
            {
              carpeta: 'StGastoRow.vue',
              que_es: 'la fila de un gasto, con el gesto de deslizar para anular',
            },
            {
              carpeta: 'StOdometer.vue, StBarChart.vue, StDonut.vue',
              que_es: 'el contador de rodillos y los dos gráficos, dibujados a mano sin librería',
            },
            {
              carpeta: 'StColorPicker.vue y StPhotoCrop.vue',
              que_es: 'el selector de color HSV y el recortador circular de avatar',
            },
            {
              carpeta: 'StIcon.vue',
              que_es: 'los 68 iconos del set, de interfaz y de categorías, dibujados dentro de un solo archivo',
            },
          ],
        },
        {
          carpeta: 'composables/',
          que_es: 'El estado compartido y los cálculos del cliente, en refs de módulo. No hay librería de estado.',
          hijos: [
            {
              carpeta: 'useDatos.ts',
              que_es: 'gastos, categorías, perfil, conversión de moneda, fechas, estadísticas y las llamadas a la API',
            },
            {
              carpeta: 'useUi.ts',
              que_es: 'la caja registradora, el recibo abierto en detalle y la cola de avisos',
            },
            {
              carpeta: 'useTema.ts',
              que_es: 'claro, oscuro y sistema, la vibración táctil y un hook de media query',
            },
            {
              carpeta: 'usePush.ts',
              que_es: 'permiso del navegador y alta o baja de la suscripción push',
            },
            {
              carpeta: 'useListaAnimada.ts',
              que_es: 'las filas que entran y salen de una lista animando su alto',
            },
          ],
        },
        {
          carpeta: 'server/',
          que_es: 'El backend Nitro, que corre en el mismo proceso que sirve la aplicación.',
          hijos: [
            {
              carpeta: 'api/',
              que_es: 'las 17 rutas: datos, gastos, categorías, perfil, sesión y push',
            },
            {
              carpeta: 'utils/',
              que_es: 'pool de MySQL, scrypt y firma de sesión, OAuth de Google, Web Push, el repositorio de datos y el espejo de accesos',
            },
            {
              carpeta: 'routes/',
              que_es: 'el flujo de OAuth de Google con su alias, y la sonda de salud, fuera del prefijo de API',
            },
            {
              carpeta: 'middleware/auth.ts',
              que_es: 'resuelve el usuario de la cookie en cada petición y lo deja en el contexto',
            },
            {
              carpeta: 'plugins/scheduler.ts',
              que_es: 'el temporizador interno que dispara los recordatorios diarios',
            },
          ],
        },
        {
          carpeta: 'db/ y scripts/',
          que_es: 'El esquema y las dos tareas de base de datos, lanzadas a mano desde npm.',
          hijos: [
            {
              carpeta: '01-schema.sql',
              que_es: 'las seis tablas: usuarios, categorías, gastos, suscripciones push y el par de espejo de accesos',
            },
            {
              carpeta: 'db-init.mjs',
              que_es: 'crea la base si no existe y aplica los archivos de db en orden, leyendo el entorno sin dependencias extra',
            },
            {
              carpeta: 'seed-demo.mjs',
              que_es: 'cuenta de demostración con unos tres meses de gastos para probar en local',
            },
          ],
        },
        {
          carpeta: 'service-worker/ y public/',
          que_es: 'El service worker propio y los archivos estáticos que se sirven tal cual.',
          hijos: [
            {
              carpeta: 'sw.ts',
              que_es: 'precachea los assets del build y atiende los eventos de notificación push y de clic sobre ella',
            },
            {
              carpeta: 'iconos y og-image',
              que_es: 'favicon SVG, iconos de 192 y 512, el enmascarable, el de apple-touch opaco y la imagen de vista previa',
            },
            {
              carpeta: 'robots.txt, sitemap.xml y llms.txt',
              que_es: 'lo que leen buscadores e IAs de una app que no renderiza en servidor',
            },
          ],
        },
      ],
      arquitectura: {
        resumen: 'Un solo proyecto Nuxt 4: la interfaz y el backend viven en el mismo repositorio y en el mismo proceso. El renderizado en servidor está apagado, así que el navegador recibe una aplicación de una sola página y Nitro se queda con las rutas de API; lo que tienen que leer los buscadores y las IAs va escrito a mano en el HTML inicial, como datos estructurados y como texto para quien no ejecuta JavaScript. Esas rutas hablan directamente con MySQL 8 a través de mysql2, con SQL escrito a mano y sin ORM, y la sesión viaja en una cookie httpOnly firmada que un middleware de servidor resuelve antes de cada petición. El estado del cliente se carga una sola vez al arrancar, desde una única ruta de datos, y desde ahí cada gasto nuevo, editado o anulado se pinta al instante y se envía al servidor en segundo plano. El recordatorio diario sale del propio proceso Nitro: un temporizador revisa cada diez minutos qué usuarios ya llegaron a su hora en Colombia y manda notificaciones Web Push firmadas con VAPID al service worker. Todo se empaqueta en una imagen Docker sobre node:22-bookworm-slim que arranca la salida de Nitro en el puerto 3000.',
        capas: [
          {
            nombre: 'Cliente',
            piezas: [
              {
                nombre: 'Aplicación de una página',
                tecnologia: 'Nuxt 4 · Vue 3 · CSS propio',
                que_hace: 'Seis páginas y treinta componentes propios. El estado vive en refs de módulo dentro de composables, sin librería de estado, y todas las escrituras son optimistas.',
              },
              {
                nombre: 'Motor visual',
                tecnologia: 'CSS · Web Animations · View Transitions',
                que_hace: 'La impresión del recibo, la cinta de movimientos, el contador de rodillos y los gráficos son CSS y animaciones del navegador; nada depende de una librería de motion.',
              },
              {
                nombre: 'Service worker',
                tecnologia: 'Workbox 7 · injectManifest',
                que_hace: 'Precachea los archivos del build menos el manifiesto, toma el control al instante y atiende los eventos de notificación push y de clic sobre ella.',
              },
            ],
          },
          {
            nombre: 'Servidor',
            piezas: [
              {
                nombre: 'Rutas Nitro',
                tecnologia: 'Nitro · H3 · TypeScript',
                que_hace: 'Diecisiete rutas de API más las de OAuth y la sonda de salud. Un middleware resuelve la sesión de la cookie antes de que corra cualquiera de ellas.',
              },
              {
                nombre: 'Capa de datos',
                tecnologia: 'mysql2 · SQL a mano',
                que_hace: 'Un pool de diez conexiones con las fechas devueltas como texto; las consultas se escriben una a una y todas filtran por el identificador del usuario.',
              },
              {
                nombre: 'Programador interno',
                tecnologia: 'setInterval en el proceso Nitro',
                que_hace: 'Cada diez minutos compara la hora desplazada a Colombia con la hora que eligió cada usuario y manda el aviso del día a quien todavía no lo recibió.',
              },
            ],
          },
          {
            nombre: 'Datos y servicios',
            piezas: [
              {
                nombre: 'MySQL 8',
                tecnologia: 'InnoDB · utf8mb4',
                que_hace: 'Seis tablas: cuentas con su moneda, presupuesto y preferencia de aviso; categorías por usuario; gastos con folio; suscripciones push; y el par de espejo de cuentas y accesos que lee un panel externo.',
              },
              {
                nombre: 'Web Push',
                tecnologia: 'web-push · VAPID',
                que_hace: 'Entrega el recordatorio del cierre del día y borra por su cuenta los endpoints que el navegador ya dio de baja.',
              },
              {
                nombre: 'Google OAuth',
                tecnologia: 'OAuth 2.0 · openid email profile',
                que_hace: 'Entrada con cuenta de Google validando el state en cookie. El correo es la llave que une la identidad con la cuenta que ya exista.',
              },
            ],
          },
        ],
      },
      decisiones: [
        {
          titulo: 'El renderizado en servidor está apagado, y el HTML inicial se escribe a mano',
          texto: 'La configuración fija ssr en falso: el estado vive en el navegador y la app se monta ahí. Eso deja la primera pantalla vacía para cualquiera que no ejecute JavaScript, incluidos buscadores, previsualizadores de enlaces y asistentes, así que el head lleva a mano el título, la descripción, las etiquetas de Open Graph y de X, un bloque de datos estructurados con el sitio y la aplicación, y un noscript con el titular, la descripción y la lista de funciones; lo mismo repiten robots.txt, sitemap.xml y llms.txt en la carpeta pública. El precio es la duplicación: esa lista de funciones es un array en la configuración que no sale del código de la app, y cuando la app cambia hay que acordarse de tocarla.',
        },
        {
          titulo: 'La etiqueta del color de la barra del sistema se crea desde JavaScript, no en el head de Nuxt',
          texto: 'Un script en línea lee el tema guardado, estampa el atributo en el elemento raíz y luego crea e inserta la etiqueta theme-color con el color correspondiente. El comentario explica por qué no va declarada como meta: Nuxt la volvería a escribir con un valor fijo al montar la app y la barra parpadearía de oscuro a claro y otra vez a oscuro. A su lado hay un bloque de estilo en línea que pinta el fondo del tema desde el primer cuadro, antes de que llegue el CSS. La contrapartida es que la misma lógica de tema queda en tres sitios, el script, el estilo en línea y el composable, y hay que tocarlos juntos.',
        },
        {
          titulo: 'El service worker y el manifiesto nunca se guardan en caché',
          texto: 'Cloudflare guardaba sw.js hasta cuatro horas, así que la app instalada seguía con el service worker viejo y este le servía el manifiesto viejo: colores claros en la barra del sistema y en la pantalla de inicio. La solución son dos reglas de ruta con no-store para esos dos archivos, y un filtro en el propio service worker que excluye el manifiesto del precacheo para que el navegador lea siempre el publicado. El precio es que esos dos archivos se piden frescos en cada carga.',
        },
        {
          titulo: 'Tailwind entra con el preflight apagado y casi sin utilidades',
          texto: 'El módulo de Tailwind está instalado y su configuración declara el verde de la marca en tres tonos y las dos familias tipográficas, pero el preflight viene desactivado porque pisaba los estilos de botones e inputs del sistema propio. El sistema visual son variables CSS y clases escritas a mano en main.css, layout.css y receipt.css. El precio es que el verde de la marca tiene dos declaraciones, el token y el color de Tailwind, y que una dependencia bastante grande se queda para utilidades puntuales.',
        },
        {
          titulo: 'Ni el documento ni el cuerpo scrollean nunca',
          texto: 'El CSS base fija alto completo y overflow oculto en html y body y esconde todas las barras de desplazamiento; el scroll vive dentro de contenedores concretos, cada uno con un desvanecido en el borde hacia donde queda contenido. En celular esos contenedores recuperan el encadenado para que, al llegar a su borde, el gesto siga bajando la página en vez de quedarse trabado. El precio se ve en el archivo de layout: cada pantalla encadena a mano su cadena de flex con altura mínima cero para que el scroll caiga donde debe.',
        },
        {
          titulo: 'La interfaz se adelanta al servidor y se traga los errores',
          texto: 'Crear, editar, anular o restaurar mutan primero el estado local y luego lanzan la petición con un ayudante de una línea que descarta cualquier rechazo. La lista responde al instante, el recibo ya está impreso antes de que el servidor confirme y nunca aparece un indicador de carga. El precio es real: si la escritura falla, la pantalla sigue mostrando un recibo que la base de datos no tiene y nada avisa; solo al recargar aparece la verdad.',
        },
        {
          titulo: 'El identificador y el folio del recibo los pone el cliente',
          texto: 'La página construye el identificador antes de llamar al servidor, y la ruta de creación lo acepta si encaja en un patrón corto alfanumérico, generando uno propio solo cuando no viene. El folio funciona igual pero con un matiz: al deshacer un borrado el cliente reenvía su folio original y el servidor lo respeta si está libre; si no, toma el máximo del usuario y suma uno. El precio es que esa comprobación no va en una transacción, así que dos pestañas creando en el mismo instante podrían pelearse el mismo número.',
        },
        {
          titulo: 'Deshacer no es un historial: es volver a crear el mismo recibo',
          texto: 'Anular devuelve el gasto completo al aviso, y deshacer lo vuelve a insertar con su mismo identificador y su mismo folio. No hay papelera ni columna de borrado lógico: la fila se fue de verdad y vuelve a nacer. El precio está en la hora de registro, que la escribe el valor por defecto de la tabla: el recibo recuperado conserva su fecha de gasto y su folio, pero queda registrado a la hora en que lo deshiciste.',
        },
        {
          titulo: 'Anular exige mantener el dedo, y el final lo decide una transición de CSS',
          texto: 'En el detalle, el botón de anular se llena con un recorte que avanza lineal durante 1,1 segundos mientras presionas y se recoge rápido al soltar; el borrado lo dispara el evento de fin de transición de esa propiedad. El comentario lo justifica: lento al decidir y rápido al soltar evita borrados por error sin meter un diálogo de confirmación. El precio es que la regla de movimiento reducido pone todas las transiciones en una milésima, así que en ese modo el gesto se completa casi al tocar.',
        },
        {
          titulo: 'La sesión es un HMAC escrito a mano, no un JWT',
          texto: 'El token es identificador, vencimiento y firma HMAC-SHA256 unidos por puntos, verificados con comparación de tiempo constante. No entra ninguna librería de tokens y el formato se lee de un vistazo al depurar. El precio es que no hay revocación ni rotación: la cookie vale sus treinta días completos, y si falta la variable del secreto el código cae a un valor por defecto que lo dice en su propio nombre.',
        },
        {
          titulo: 'Las contraseñas se hashean con scrypt del núcleo de Node',
          texto: 'El formato guardado es el algoritmo, la sal de dieciséis bytes y la clave de sesenta y cuatro separados por signos de dólar, y la verificación compara en tiempo constante. Es la misma idea que recorre el proyecto: cero dependencias para algo que Node ya trae. El precio es que los parámetros de coste son los que Node use por defecto y no quedan guardados junto al hash, así que endurecerlos después deja sin salida a los hashes viejos.',
        },
        {
          titulo: 'El aislamiento entre cuentas es una cláusula WHERE, no una capa',
          texto: 'Cada consulta de gastos y de categorías lleva el identificador del usuario en el filtro, incluidas las de borrado y actualización, que simplemente no afectan a ninguna fila si el registro es de otro; la tabla de categorías además usa la pareja usuario e identificador como clave primaria, así que dos personas pueden tener su propia categoría llamada igual. No hay comprobación de propiedad en un punto único ni seguridad a nivel de fila en la base. El precio es que la garantía depende de que ninguna consulta futura olvide la cláusula.',
        },
        {
          titulo: 'No hay ORM ni migraciones: un solo archivo SQL con CREATE TABLE IF NOT EXISTS',
          texto: 'El esquema entero son seis tablas en un archivo numerado, y una tarea de npm crea la base si no existe y aplica los archivos de la carpeta en orden alfabético. Nada registra qué se aplicó ya, y como todo está escrito con IF NOT EXISTS, correrlo dos veces es inofensivo. El precio es el revés de esa misma propiedad: una columna añadida más adelante no llega a una base que ya exista, porque el archivo no altera nada; ese paso vive en la cabeza de quien despliega.',
        },
        {
          titulo: 'El recordatorio sale del propio proceso Nitro, no de un cron externo',
          texto: 'Un plugin de Nitro arranca un temporizador de diez minutos que resta cinco horas al reloj para obtener la hora de Colombia y la pasa a una sola consulta: los usuarios que tienen el aviso encendido, cuya hora elegida ya pasó, que no fueron avisados hoy y que tienen al menos una suscripción push. No hay servicio de tareas programadas. El precio es doble: el desplazamiento de cinco horas está escrito en el código, y con más de una instancia cada réplica correría su propia ronda.',
        },
        {
          titulo: 'La marca de avisado se escribe aunque la notificación no llegue',
          texto: 'Tras intentar el envío, el código guarda la fecha del aviso en la fila del usuario sin mirar a cuántos dispositivos llegó; el contador de envíos puede ser cero. La alternativa era reintentar, y reintentar contra un endpoint muerto es un bucle. El precio es que alguien cuya suscripción push haya caducado simplemente se queda sin el aviso de ese día, y la base dice que ya se le avisó.',
        },
        {
          titulo: 'Los endpoints muertos se borran solos, y solo esos',
          texto: 'El envío captura el error del servicio de push y, si el código dice que el recurso no existe o expiró, elimina la fila de la base. Cualquier otro error se ignora y la suscripción se conserva. La regla es conservadora a propósito: un fallo pasajero no debería costarle al usuario sus notificaciones. El precio es que un endpoint roto de otra forma se queda para siempre acumulando intentos fallidos.',
        },
        {
          titulo: 'Las tasas de cambio están escritas en el código',
          texto: 'Cada gasto se guarda en la moneda en que se hizo, y la conversión a la moneda de visualización sale de una tabla fija de equivalencias contra el peso colombiano declarada en el mismo archivo que hace todos los cálculos. Convertir de verdad exigía una API externa y una capa de caché que el proyecto no tiene. El precio es que comparar dos meses con gastos en monedas distintas los compara a la tasa de hoy, no a la de cada momento, y que esa tasa no se mueve nunca.',
        },
        {
          titulo: 'La escala del gráfico ignora al valor atípico y corta su barra',
          texto: 'Si la barra más alta supera el triple de la siguiente, el gráfico toma su escala de las demás y la barra atípica se corta arriba con su valor impreso encima, alineado hacia dentro en los extremos para no salirse de la tarjeta. El motivo es que un arriendo entre cafés aplanaba todo el resto del mes. El precio es que esa barra deja de representar su altura: el número es correcto, el dibujo ya no es comparable.',
        },
        {
          titulo: 'Los colores de categoría tienen una tabla propia para el modo oscuro',
          texto: 'La paleta son doce tonos escogidos para distinguirse también en daltonismo, y cada uno tiene su equivalente de modo oscuro en una tabla aparte: no es un oscurecido automático, sino un paso elegido para caer dentro de la banda de luminosidad de ese fondo. Además, el color del icono se calcula mezclando el tono hacia la tinta o hacia el blanco hasta pasar un contraste de 3,4 contra su propio círculo, así que un color escrito a mano en el selector también se ve. El precio es que solo los doce de la paleta tienen paso oscuro: un color personalizado se dibuja igual en los dos temas.',
        },
        {
          titulo: 'El recibo se queda de papel también en modo oscuro',
          texto: 'El tema oscuro redefine todas las superficies menos una: el papel del recibo mantiene su tono claro y su tinta oscura en los dos temas, con sus variables propias. La metáfora manda sobre la coherencia del tema, porque un recibo negro deja de leerse como un recibo. El precio es que en una pantalla oscura el ticket es la única superficie brillante, y en el modal ocupa casi todo.',
        },
        {
          titulo: 'La foto de perfil vive como texto dentro de la fila del usuario',
          texto: 'El recortador exporta un JPEG cuadrado de doscientos cincuenta y seis píxeles y lo guarda como URL de datos en una columna de texto de la tabla de usuarios. No hay almacenamiento de archivos, ni carpeta de subidas, ni servicio externo: la aplicación entera cabe en la base de datos y en el contenedor. El precio es que ese avatar viaja completo en la respuesta que carga todos los datos del usuario, cada vez que se abre la aplicación.',
        },
        {
          titulo: 'El espejo de accesos nunca puede romper el inicio de sesión',
          texto: 'Las escrituras al par de tablas que lee el panel externo van todas envueltas en un try vacío, con el comentario diciéndolo sin rodeos. El registro de última conexión, además, se lanza sin esperar respuesta en cada petición y solo escribe si pasó más de un minuto desde la anterior. La contrapartida es que ese panel puede desfasarse de la realidad sin que nadie se entere, porque el fallo es silencioso por diseño.',
        },
        {
          titulo: 'La cuenta nueva llega con ocho categorías, pero sin un solo gasto de ejemplo',
          texto: 'Al registrarse se insertan ocho categorías por defecto con su icono y su color, para que se pueda anotar el primer gasto sin pasar antes por otra pantalla; lo que no se siembra es ni un gasto. En una aplicación cuyo número grande es lo que gastaste este mes, un dato de mentira en esa cifra es peor que una pantalla vacía, así que el inicio arranca con un estado vacío que invita a registrar. Los datos de prueba existen, pero en una tarea de npm aparte que solo se corre contra la base local.',
        },
      ],
    },
    landing: '#',
  },
  {
    nombre: 'Splitmate',
    color: '#0EB5A6',
    logo: '/logos/splitmate.svg',
    stack: ['SvelteKit 2', 'Svelte 5', 'PostgreSQL', 'node-postgres'],
    descripcion:
      'App de gastos compartidos del hogar: quien puso que, cuanto debe cada uno y como se salda la cuenta, sin la pelea mensual de sacar numeros.',
    arquitectura:
      'SvelteKit con renderizado en servidor y form actions, sobre PostgreSQL con seguridad a nivel de fila: cada consulta solo ve los datos del hogar al que perteneces. Svelte compila a JavaScript plano sin virtual DOM, asi que el bundle que llega al celular es minimo. Validacion con Zod compartida entre servidor y cliente.',
    url: 'https://splitmate.acmsy.com',
    captura: 'splitmate',
    landing: '#',
    // Estetica y ficha larga sacadas del repositorio de la app.
    estetica: {
      google: 'Inter:wght@400;500;600;700',
      fuente: {
        titulo: '\'Inter\', \'Inter\', ui-sans-serif, system-ui, -apple-system, \'Segoe UI\', Roboto, \'Helvetica Neue\', Arial, sans-serif',
        cuerpo: '\'Inter\', \'Inter\', ui-sans-serif, system-ui, -apple-system, \'Segoe UI\', Roboto, \'Helvetica Neue\', Arial, sans-serif',
        mono: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
      },
      radio: '16px',
      curva: 'cubic-bezier(0.16, 1, 0.3, 1)',
      claro: {
        fondo: '#FBFCFC',
        sup: '#FFFFFF',
        texto: '#16201E',
        suave: '#9AA6A3',
        acento: '#0EB5A6',
      },
      oscuro: {
        fondo: '#0B100F',
        sup: '#16201E',
        texto: '#EEF1F0',
        suave: '#9AA6A3',
        acento: '#46C9BC',
      },
    },
    detalle: {
      stackRoles: [
        {
          nombre: 'SvelteKit 2',
          papel: 'La aplicación entera. Veinticuatro pantallas con carga en servidor y sesenta acciones de formulario; no hay una API REST de dominio, solo seis endpoints internos bajo /api.',
        },
        {
          nombre: 'Svelte 5',
          papel: 'La interfaz. Modo runes forzado en todo el proyecto y diecisiete componentes propios.',
        },
        {
          nombre: 'PostgreSQL',
          papel: 'Los datos y las reglas. Diecisiete tablas con seguridad a nivel de fila y las operaciones críticas dentro de funciones.',
        },
        {
          nombre: 'node-postgres',
          papel: 'El acceso. Un pool propio, un adaptador que imita la interfaz de Supabase y el LISTEN que alimenta el tiempo real.',
        },
        {
          nombre: 'Tailwind CSS 4',
          papel: 'El diseño. Paleta, radios y sombra declarados como tokens en una sola hoja.',
        },
      ],
      unaFrase: 'Aplicación web de gastos compartidos del hogar sobre SvelteKit y PostgreSQL: registra quién pagó qué, calcula el saldo neto con cada persona y sugiere cadenas para que quien te debe le pague directamente a quien tú le debes, con las reglas de acceso escritas en la propia base.',
      porQueExiste: 'Convivir implica una contabilidad que nadie quiere llevar: el mercado lo pagó uno, el alquiler se reparte distinto que la luz, y a mitad de mes alguien prestó dinero suelto que no es un gasto compartido. Splitmate separa esos tres casos en módulos que no se mezclan: gastos compartidos con su división, préstamos directos entre dos personas con su plan de cuotas, y gastos fijos mensuales que llevan el estado del mes sin generar deuda entre nadie. Sobre los dos primeros se calcula un solo saldo neto por pareja, con una regla explícita: nada cuenta como cobrado hasta que la otra persona lo confirma. Se dejó fuera lo que habría hecho la aplicación más grande sin resolver mejor el problema: no hay foto del recibo, no hay exportación a CSV ni a Excel, y cada hogar opera en una sola moneda sin conversión. La decisión más de fondo es dónde vive la seguridad: cada consulta corre como el usuario dentro de una transacción y las políticas de la base deciden qué filas se ven, así que un olvido en el código de la aplicación no expone los datos de otro hogar.',
      funcionalidades: [
        {
          area: 'Cuenta y sesión',
          items: [
            'Registro con nombre, correo y contraseña de mínimo 6 caracteres',
            'Si el correo ya existe solo con Google, el registro le añade contraseña a esa misma cuenta en vez de crear otra',
            'Inicio de sesión con correo y contraseña, con el mismo mensaje de error para cuenta inexistente y clave equivocada',
            'Entrada con Google por OAuth 2.0, con selector de cuenta y sin pedir acceso permanente',
            'Recuperación de contraseña: enlace por correo válido 30 minutos y de un solo uso, con la misma respuesta exista o no la cuenta',
            'Restablecer la contraseña desde el enlace, con validación de longitud y de coincidencia, y sesión iniciada al terminar',
            'Sesión de 30 días en una cookie httpOnly firmada con HMAC; el token no queda guardado en el navegador',
            'Cambiar la contraseña desde Ajustes verificando primero la actual',
            'Cambiar el nombre visible, hasta 60 caracteres',
            'Subir foto de perfil: cualquier imagen de hasta 5 MB',
            'Recortador circular de la foto con arrastre para encuadrar, zoom por rueda o pellizco y rejilla de tercios; exporta un JPEG de 512 por 512',
            'Quitar la foto subida y volver a la de Google o a las iniciales',
            'Cerrar sesión: borra la cookie y marca la cuenta como desconectada',
          ],
        },
        {
          area: 'Hogares, miembros e invitación',
          items: [
            'Crear un hogar con nombre y moneda; quien lo crea queda como administrador y su invitación se genera en el mismo paso',
            'Pertenecer a varios hogares a la vez y cambiar entre ellos desde el selector',
            'El hogar activo se recuerda en una cookie de un año, validada contra la lista real de hogares antes de guardarla',
            'Pantalla de bienvenida solo la primera vez, cuando la cuenta todavía no tiene ningún hogar',
            'Unirse con un código corto de seis caracteres en mayúsculas',
            'Unirse por enlace: sin sesión se pasa por el inicio de sesión y la invitación se retoma al volver',
            'Enlace o código caducado, desactivado o mal formado llevan a una pantalla de enlace no válido',
            'Invitación por código QR dibujado en el navegador, con la librería cargada solo cuando hace falta',
            'Compartir el código con la hoja nativa del sistema, o copiarlo al portapapeles si el navegador no la tiene',
            'Compartir el QR como imagen PNG de 512 px, o descargarlo si el sistema no permite compartir archivos',
            'Interruptor de aceptar miembros: al apagarlo el código se muestra tapado y las dos vías de entrada dejan de funcionar',
            'Regenerar la invitación borrando las anteriores, reservado al administrador; la invitación caduca a los 7 días',
            'Trece monedas disponibles: COP, MXN, USD, EUR, ARS, CLP, PEN, BRL, UYU, BOB, PYG, GTQ y CRC',
          ],
        },
        {
          area: 'Gastos compartidos',
          items: [
            'Registrar un gasto con título, monto, fecha, categoría y notas',
            'Solo lo registra quien pagó: no se pueden anotar gastos en nombre de otra persona',
            'Cuatro formas de dividir: partes iguales, por porcentaje, monto exacto por persona y partes proporcionales',
            'Todos los miembros arrancan marcados como participantes y se pueden desmarcar uno a uno, incluido quien pagó',
            'Los repartos se calculan en enteros: el sobrante se reparte de uno en uno entre los primeros o se acumula en el primero',
            'El porcentaje se recorta en vivo para que la suma nunca pase de 100, y el monto exacto para que no pase del total',
            'Vista previa en vivo con el icono de la categoría, el modo, cuántas personas participan y el monto formateado',
            'El botón de guardar solo se habilita cuando la suma de las divisiones cuadra con el total',
            'Campo de dinero de texto con teclado numérico y separador de miles automático',
            'Calendario propio en español que usa la fecha local del equipo, no la UTC',
            'Listado del hogar por fecha, con el monto total, tu parte, lo que aún debes y lo que enviaste a falta de confirmación',
            'Detalle del gasto en una ventana sobre la lista, sin cambiar de dirección, con caché en memoria para reabrirlo al instante',
            'El mismo detalle accesible por enlace directo, para llegar desde una notificación',
            'Borrar un gasto, reservado al pagador: desaparece de la lista al instante y se sincroniza después',
          ],
        },
        {
          area: 'Deudas, abonos y confirmaciones',
          items: [
            'Saldo neto total en grande, verde si te deben y coral si debes',
            'Desglose persona por persona, con lo que debes primero y dentro de cada grupo por el monto más alto',
            'Bajo cada saldo, la lista de gastos concretos que lo produjeron, con su fecha y su monto pendiente',
            'Pestañas Debes, Te deben y Todas, que abren en lo que debes',
            'Abonar contra tu parte de un gasto desde la propia fila, total o parcial',
            'El abono queda pendiente si lo registra el deudor y confirmado si lo registra el pagador del gasto',
            'El pagador confirma o rechaza cada abono, y puede borrar los que sigan pendientes',
            'Registrar un pago directo a otra persona, que queda pendiente hasta que ella lo confirme',
            'Confirmar, rechazar o cancelar los pagos pendientes en los que estás involucrado',
          ],
        },
        {
          area: 'Préstamos directos',
          items: [
            'Registrar un préstamo con monto, receptor, fecha, motivo y fecha esperada de devolución',
            'Solo el prestador lo registra, y no puede prestarse a sí mismo',
            'Plan de devolución en cuotas con tres modos: cuotas iguales, por porcentaje o montos exactos',
            'Cada cuota lleva su número, su monto y su fecha esperada; la suma tiene que igualar el préstamo',
            'Si el plan de cuotas no se guarda, el préstamo se borra para no dejar la mitad del registro',
            'Cuatro estados: pendiente, activo, saldado y rechazado',
            'El préstamo no mueve el balance hasta que el receptor lo confirma',
            'El receptor confirma o rechaza; el prestador puede borrarlo mientras siga pendiente',
            'Registrar devoluciones totales o parciales asociadas al préstamo, que el prestador confirma o rechaza',
            'Un disparador de la base lo pasa a saldado en cuanto las devoluciones confirmadas cubren el monto; también queda el botón de marcarlo a mano',
            'Detalle con el plan de cuotas, el avance y el historial de devoluciones',
          ],
        },
        {
          area: 'Gastos fijos',
          items: [
            'Definir un fijo como plantilla: nombre, monto, categoría, día de vencimiento entre 1 y 28 y forma de reparto',
            'Cada fijo define su propio reparto, así el alquiler puede ir 60/40 y la luz 50/50 sin unificar nada',
            'La cuota del mes se genera sola al abrir la pantalla, una sola vez por plantilla y mes',
            'El redondeo del reparto se compensa en la primera persona para que el mes cierre exacto',
            'Cada quien marca su propio aporte, con monto, fecha y nota, y puede borrarlo',
            'Avance del mes: cuántos aportaron de cuántos, cuánto se pagó y cuánto falta',
            'Historial mes a mes, del más reciente al más antiguo, con el reparto congelado tal como estaba',
            'Activar o desactivar una plantilla; desactivada deja de generar meses nuevos',
            'El módulo no entra en el cálculo del saldo entre personas: lo no aportado queda visible como pendiente del mes',
          ],
        },
        {
          area: 'Saldar y simplificar',
          items: [
            'Saldo con cada persona y, al desplegarlo, cada gasto y préstamo que lo compone, de mayor a menor',
            'Registrar que ya pagaste, que queda pendiente de confirmación',
            'Marcar que ya te pagaron, que entra confirmado y descuenta del balance en el acto',
            'Confirmar, rechazar o cancelar el pago pendiente que haya entre ustedes dos',
            'Sugerencia de cadenas: si a ti te deben y tú debes, la aplicación propone que quien te debe le pague directamente a quien tú le debes',
            'Cada cadena se calcula por el mínimo entre las dos deudas, emparejando siempre los saldos más grandes',
            'Aviso de todo cuadrado cuando no queda ningún saldo por encima de medio peso',
          ],
        },
        {
          area: 'Resumen y analítica',
          items: [
            'Cinco períodos: este mes, el mes anterior, tres meses, el año y todo el histórico',
            'Interruptor entre el hogar entero y solo lo tuyo',
            'Gráfica de área por mes con eje, rejilla, línea guía al pasar el puntero y punto seleccionable',
            'Al elegir un mes en la gráfica los indicadores se recalculan sobre él, pero la curva conserva su forma',
            'Si el período tiene un solo mes, la gráfica se reemplaza por un desglose diario con día pico y promedio',
            'Reparto por categoría, con las ocho primeras y el resto contado aparte',
            'Reparto por persona, con los fijos repartidos entre todos los miembros',
            'Al tocar una categoría o una persona la pantalla pasa a su detalle con sus movimientos',
            'Comparativa contra el mes anterior, en monto y en porcentaje',
          ],
        },
        {
          area: 'Categorías',
          items: [
            'Siete categorías de arranque: Mercado, Domicilios, Salidas, Transporte, Hogar, Salud y Otros',
            'Cada hogar recibe su propia copia de esas siete, así que puede renombrarlas o borrarlas sin afectar a nadie más',
            'Crear categorías propias del hogar, hasta 40 caracteres y sin repetir nombre dentro del mismo hogar',
            'Veinte iconos para elegir, guardados por nombre y resueltos en el cliente',
            'Crear, editar y borrar categorías está reservado al administrador del hogar',
            'Al borrar una categoría los gastos que la usaban se quedan sin categoría en vez de perderse',
          ],
        },
        {
          area: 'Tiempo real, avisos e interfaz',
          items: [
            'Cuando alguien del hogar registra o confirma algo, tu pantalla se actualiza sola sin recargar',
            'La conexión en vivo es una sola por pestaña, se reconecta sola y se cierra cuando nadie escucha',
            'Notificaciones al teléfono para gasto nuevo, gasto fijo nuevo, aviso de pago, confirmación o rechazo de un abono, préstamo por confirmar, devolución marcada, confirmada o rechazada, préstamo saldado y cadena registrada',
            'Banner discreto que pide el permiso una sola vez; si lo descartas no vuelve a aparecer',
            'Activar y silenciar las notificaciones desde Ajustes, con mensaje distinto según el motivo: navegador sin soporte, origen inseguro o permiso bloqueado',
            'Esqueleto de carga que copia la estructura real de la pantalla de destino, con 80 ms de gracia para no parpadear en navegaciones instantáneas',
            'Al cambiar de hogar se muestra el esqueleto mientras se recargan los datos',
            'Los módulos del menú se precargan tras la primera navegación, así el siguiente clic ya está listo',
          ],
        },
      ],
      carpetas: [
        {
          carpeta: 'src/',
          que_es: 'La aplicación SvelteKit completa: pantallas, componentes y toda la capa de servidor.',
          hijos: [
            {
              carpeta: 'src/routes',
              que_es: 'una carpeta por pantalla; los grupos (app) y (auth) reparten armazón y protección',
            },
            {
              carpeta: 'src/lib/server',
              que_es: 'el adaptador de datos, los balances, gastos, préstamos, fijos, correo y push',
            },
            {
              carpeta: 'src/lib/components',
              que_es: 'diecisiete componentes propios: gráfica de área, recorte de foto, campo de dinero, calendario',
            },
            {
              carpeta: 'src/routes/layout.css',
              que_es: 'los tokens del diseño y las reglas del armazón de scroll',
            },
            {
              carpeta: 'src/app.html',
              que_es: 'la plantilla base, con la detección de dispositivo táctil antes de pintar',
            },
          ],
        },
        {
          carpeta: 'supabase/',
          que_es: 'El esquema de la base, escrito a mano en SQL y aplicado en orden.',
          hijos: [
            {
              carpeta: 'supabase/migrations',
              que_es: '35 migraciones numeradas, de los hogares a los pagos, con sus políticas y funciones',
            },
            {
              carpeta: 'supabase/email-templates',
              que_es: 'la plantilla del correo de restablecer contraseña',
            },
          ],
        },
        {
          carpeta: 'acmsy/',
          que_es: 'La capa que permite correr un esquema pensado para Supabase sobre un PostgreSQL normal.',
          hijos: [
            {
              carpeta: '00_preamble.sql',
              que_es: 'crea el esquema auth, los roles y auth.uid() leyendo una variable de sesión',
            },
            {
              carpeta: 'realtime.sql',
              que_es: 'los disparadores que hacen pg_notify en catorce tablas y la tabla de suscripciones de push',
            },
            {
              carpeta: '99_postamble.sql',
              que_es: 'los privilegios que Supabase daba por hechos y la vista de usuarios para el panel',
            },
          ],
        },
        {
          carpeta: 'scripts/',
          que_es: 'Utilidades sueltas del repositorio, cuatro archivos.',
          hijos: [
            {
              carpeta: 'migrate.mjs',
              que_es: 'aplica un archivo .sql contra la base probando dos cadenas de conexión hasta que una responda',
            },
            {
              carpeta: 'generar-iconos.mjs',
              que_es: 'genera el icono PNG de 180 px a partir del SVG con sharp',
            },
            {
              carpeta: 'shot.mjs',
              que_es: 'mide con Playwright el alto real del armazón en escritorio y en móvil',
            },
          ],
        },
        {
          carpeta: 'static/',
          que_es: 'Lo que se sirve tal cual, sin pasar por el compilador.',
          hijos: [
            {
              carpeta: 'push-sw.js',
              que_es: 'el service worker permanente que recibe los push y muestra la notificación',
            },
            {
              carpeta: 'sw.js',
              que_es: 'lápida del service worker viejo: se desregistra solo al activarse',
            },
            {
              carpeta: 'icon.svg',
              que_es: 'el icono de la aplicación, del que se derivan los PNG',
            },
          ],
        },
      ],
      arquitectura: {
        resumen: 'Una sola aplicación SvelteKit sobre adapter-node: el mismo proceso pinta las pantallas, ejecuta las acciones de formulario y habla con PostgreSQL. No hay una API REST de dominio: las lecturas ocurren en los cargadores de servidor y las mutaciones son acciones de formulario, así que el navegador no necesita llaves ni tokens de datos; solo quedan seis endpoints internos bajo /api para el canal de eventos, el detalle de un gasto, las RPC del cliente y el push. Entre la aplicación y la base hay un adaptador escrito a mano que imita la interfaz de Supabase, incluidos sus recursos incrustados, pero por dentro genera SQL y lo ejecuta con node-postgres. Cada consulta abre una transacción, fija el rol authenticated y escribe el identificador del usuario en una variable de sesión que la función auth.uid() lee, de modo que las políticas de fila deciden qué se ve. Las operaciones que no se pueden partir viven en funciones de la base: registrar o actualizar un gasto con sus divisiones, crear un hogar con su invitación, unirse por código o por enlace, generar el mes de un fijo y calcular los balances. El tiempo real no usa servicios externos: disparadores en catorce tablas hacen pg_notify, un cliente dedicado escucha con LISTEN para todo el proceso y reparte el aviso por eventos del servidor a las pestañas de ese hogar, que vuelven a pedir sus datos. Las notificaciones al teléfono salen por Web Push con claves VAPID desde las propias acciones, con destinatario y texto ya personalizados. Los avatares se guardan como archivos en un volumen del contenedor y se sirven por una ruta propia, no desde la base. El despliegue es una imagen Docker sobre node:22-bookworm-slim que compila y corre node build en el puerto 3000.',
        capas: [
          {
            nombre: 'Cliente',
            piezas: [
              {
                nombre: 'Aplicación Svelte',
                tecnologia: 'Svelte 5 runes - Tailwind 4 - Lucide',
                que_hace: 'Veinticuatro pantallas hidratadas sobre el HTML del servidor. Los montos y las fechas llegan ya formateados para que cliente y servidor pinten exactamente lo mismo.',
              },
              {
                nombre: 'Canal de eventos',
                tecnologia: 'EventSource - SSE',
                que_hace: 'Una sola conexión por pestaña, con contador de referencias. Al recibir un cambio del hogar vuelve a pedir los datos, con espera de 250 ms y solo si la pestaña está visible.',
              },
              {
                nombre: 'Service worker de push',
                tecnologia: 'Web Push - Notification API',
                que_hace: 'Recibe los avisos del servidor y muestra la notificación aunque el navegador esté en segundo plano; al tocarla enfoca la ventana o abre la ruta indicada.',
              },
            ],
          },
          {
            nombre: 'Servidor',
            piezas: [
              {
                nombre: 'Aplicación SvelteKit',
                tecnologia: 'SvelteKit 2 - adapter-node - Node 22',
                que_hace: 'Cargadores de servidor y sesenta acciones de formulario. Un gancho por petición lee la cookie firmada, resuelve el usuario y arma el cliente de datos con esa identidad.',
              },
              {
                nombre: 'Adaptador de datos',
                tecnologia: 'TypeScript - node-postgres',
                que_hace: 'Traduce las llamadas estilo Supabase a SQL, resuelve los recursos incrustados como subconsultas y ejecuta todo como el usuario dentro de una transacción.',
              },
              {
                nombre: 'Motor de eventos',
                tecnologia: 'pg LISTEN/NOTIFY - SSE',
                que_hace: 'Un cliente dedicado escucha el canal de la base y reparte cada aviso a las pestañas del hogar, con latido cada 25 segundos para que el proxy no corte la conexión.',
              },
            ],
          },
          {
            nombre: 'Datos y servicios',
            piezas: [
              {
                nombre: 'PostgreSQL',
                tecnologia: '17 tablas con RLS - 61 políticas - 17 funciones',
                que_hace: 'Hogares, miembros, invitaciones, gastos con sus divisiones y abonos, pagos, préstamos con sus cuotas y los tres niveles de los gastos fijos. Los balances se calculan aquí.',
              },
              {
                nombre: 'Google',
                tecnologia: 'OAuth 2.0',
                que_hace: 'Entrada con cuenta de Google. Si el correo ya existía con contraseña, se vincula a la misma cuenta en vez de duplicarla.',
              },
              {
                nombre: 'Resend',
                tecnologia: 'API de correo',
                que_hace: 'Envía el correo de restablecer contraseña con su enlace de un solo uso.',
              },
              {
                nombre: 'Volumen de avatares',
                tecnologia: 'Sistema de archivos',
                que_hace: 'Guarda cada foto de perfil como un archivo con su tipo al lado, servido por una ruta propia con caché de una hora.',
              },
            ],
          },
        ],
      },
      decisiones: [
        {
          titulo: 'La capa de datos imita a Supabase en vez de reescribirse',
          texto: 'El proyecto nació sobre Supabase y, al mudarse a un PostgreSQL propio, no se tocó ninguna consulta de las pantallas. Un módulo de 415 líneas reimplementa from().select()/insert()/update()/delete() y rpc(), incluidos los recursos incrustados de PostgREST: una cadena como gasto_divisiones (monto, aportes (monto, estado)) se traduce, de forma recursiva, a subconsultas con row_to_json y json_agg. Hasta la sintaxis de .or(\'col.op.val\') tiene su propio analizador. El precio es un mini-ORM casero que hay que mantener y depurar; a cambio, la migración de proveedor no obligó a reescribir la capa de datos.',
        },
        {
          titulo: 'Cada consulta abre una transacción y se hace pasar por el usuario',
          texto: 'Antes de cualquier SQL se ejecuta begin, set local role authenticated y set_config(\'app.user_id\', uid, true). La función auth.uid() del preámbulo lee esa variable, así que las políticas escritas para Supabase aplican sin cambiarles una línea. La consecuencia es que la seguridad no depende de que el código recuerde filtrar por hogar: aunque lo olvidara, la política no devolvería filas ajenas. El costo es una conexión del pool y una transacción por consulta, incluso para leer una sola fila, sobre un pool limitado a diez conexiones.',
        },
        {
          titulo: 'El mapa de claves foráneas se lee sin políticas, a propósito',
          texto: 'Los recursos incrustados necesitan saber qué tabla apunta a cuál, y esa relación se descubre en information_schema. Como rol authenticated ese catálogo oculta las claves foráneas y los recursos incrustados se quedarían sin resolver, así que el mapa se carga con la conexión de superusuario y se guarda en caché una sola vez por proceso. Es la única lectura del sistema que se salta las políticas, y trae metadatos del esquema, no datos de nadie. La contrapartida es que un cambio de esquema en caliente no se ve hasta reiniciar el proceso.',
        },
        {
          titulo: 'El saldo de la pantalla de inicio es deliberadamente asimétrico',
          texto: 'Para lo que debo cuentan los pagos pendientes y los confirmados: si yo digo que transferí, mi pantalla deja de cobrármelo enseguida, sin esperar a nadie. Para lo que me deben solo cuentan los confirmados: no puedo dar por cobrado algo solo porque el otro diga que pagó. Si el receptor rechaza, la deuda reaparece sola. El efecto colateral es que la suma de todos los saldos del hogar deja de dar cero, así que la regla no se puede reutilizar para una vista global.',
        },
        {
          titulo: 'La regla simétrica se probó y se descartó en la migración siguiente',
          texto: 'Una migración intentó contar los pendientes desde ambos lados para tener un balance global consistente. El resultado fue peor: dos deudas recíprocas se anulaban antes de tiempo y la pantalla de saldar salía vacía mientras el inicio seguía diciendo te deben tanto. La migración siguiente volvió a la regla estricta de solo confirmados para la vista global y dejó la asimétrica solo para el inicio. Quedan dos funciones de balance con dos definiciones distintas de deuda, y hay que saberlo para no compararlas.',
        },
        {
          titulo: 'Una columna de salida ambigua tumbó la simplificación en silencio',
          texto: 'La función del balance global se declaraba returns table (user_id uuid, saldo numeric) y por dentro filtraba where user_id = auth.uid() contra la tabla de miembros. PostgreSQL no podía decidir si user_id era la columna de salida o la de la tabla, la llamada fallaba siempre y la pantalla de saldar mostraba todo cuadrado incluso con deudas abiertas: el error se tragaba en el cliente y no había nada roto a la vista. Se arregló renombrando la columna de salida a miembro_id y calificando con alias todas las tablas internas, en vez de dejar los nombres y parchear solo la comparación; el costo fue tocar también el código que la leía. Hoy esa función quedó sin uso: la pantalla de saldar arma las cadenas en TypeScript a partir de balance_hogar.',
        },
        {
          titulo: 'La tabla de pagos se borró y se restauró dos migraciones después',
          texto: 'Una migración unificó todo el movimiento de dinero en la tabla de abonos, le añadió una columna de estado y eliminó la de pagos con un drop cascade. Dos migraciones más tarde otra la vuelve a crear igual, restaura la versión anterior del balance y deja escrito que la columna de estado queda inerte. No lo quedó: la migración siguiente la reactiva y hoy es la que decide si un abono cuenta desde un lado o desde los dos. El experimento sobrevive en el historial y explica por qué hay dos tablas para conceptos casi iguales: un abono va atado a la división de un gasto y un pago es dinero suelto entre dos personas.',
        },
        {
          titulo: 'El receptor puede registrar un pago, pero solo si entra confirmado',
          texto: 'La política original exigía que quien insertaba fuera el pagador, así que quien ya había recibido el dinero tenía que esperar a que el otro lo anotara para poder confirmarlo. Se abrió un segundo caso: el receptor también puede insertar, con la condición de que el estado sea confirmado. Un pendiente registrado por el receptor no significaría nada, sería yo digo que él me va a pagar. La contrapartida es que ese lado ya no pasa por ninguna confirmación: quien cobra puede dar por saldada la deuda por su cuenta, algo que se asume porque nadie se perjudica declarando que ya le pagaron.',
        },
        {
          titulo: 'Quién registra el abono decide si nace confirmado',
          texto: 'Si el abono contra la parte de un gasto lo registra el deudor, queda pendiente y se le manda un aviso al pagador para que confirme o rechace. Si lo registra el pagador del gasto, entra confirmado de una vez y no se notifica a nadie: él es la autoridad de cobro y no tiene a quién pedirle permiso. Una sola acción con dos comportamientos, decididos en el servidor. El precio es que el estado no se puede deducir del formulario: antes de insertar hay que ir a la base a averiguar quién pagó el gasto padre, una consulta extra en cada abono.',
        },
        {
          titulo: 'La cadena de simplificación se registra como dos pagos, no como uno',
          texto: 'Cuando alguien me debe y yo le debo a un tercero, la aplicación sugiere que el primero le pague directamente al segundo. Al aplicarlo no se inserta un movimiento entre esas dos personas, porque yo no podría registrarlo: se insertan dos pagos confirmados, uno de mi acreedor hacia mí y otro de mí hacia mi deudor. El resultado neto en los tres balances es el correcto y ninguno de los otros dos tiene que anotar nada. La contrapartida es que las dos inserciones no comparten transacción: si la segunda falla, la primera se borra a mano para no dejar medio movimiento.',
        },
        {
          titulo: 'El tiempo real es LISTEN/NOTIFY y eventos del servidor, no websockets',
          texto: 'Catorce tablas llevan un disparador que hace pg_notify con el hogar, la tabla y la operación; cuando la fila no tiene hogar_id, el disparador lo resuelve subiendo por la cadena hasta el gasto, el mes o la plantilla. Un único cliente escucha LISTEN para todo el proceso y reparte por SSE a las pestañas suscritas, con latido cada 25 segundos para que el proxy no corte la conexión. Por el canal solo viaja la señal de que algo cambió, no el dato: la pestaña vuelve a pedir sus datos y las políticas se aplican otra vez. Es más tráfico que un websocket con carga útil, pero no hay estado que sincronizar ni permisos que revalidar en el navegador.',
        },
        {
          titulo: 'El cliente del navegador finge ser el realtime de Supabase',
          texto: 'El módulo del navegador expone channel().on().subscribe() y removeChannel(), la misma forma que ya usaban las pantallas, pero por dentro lleva un contador de referencias y abre una sola EventSource. Los filtros por tabla que las pantallas declaran no hacen nada: on() devuelve el canal sin registrar nada, y el filtrado real ocurre en el servidor, que solo emite a las pestañas del hogar. Es una fachada que se mantiene para no tocar los componentes, y hay que saberlo para no creer que esos filtros están vivos.',
        },
        {
          titulo: 'El layout móvil se decide por el dispositivo, no por el ancho de la ventana',
          texto: 'El modo escritorio de los navegadores móviles falsea ancho, puntero y user agent, y la aplicación aparecía con la barra lateral fija dentro de un celular. Un script en la cabecera, antes del primer pintado, marca el documento como táctil si el puntero es grueso, si hay puntos táctiles o si la pantalla física mide 600 px o menos, y el CSS fuerza el cajón y la barra superior con !important. Se comprueban tres señales del hardware porque el navegador puede mentir sobre las otras dos. La contrapartida es que un portátil con pantalla táctil recibe el layout de celular aunque le sobre espacio.',
        },
        {
          titulo: 'El documento no se bloquea, para conservar el tirar para recargar',
          texto: 'El armazón mide exactamente el alto de la ventana y el único elemento con desplazamiento es el contenido, así que la barra lateral y la superior quedan quietas. Aun así el cuerpo no lleva overflow hidden ni overscroll-behavior: al llegar al tope y seguir tirando con el dedo, el gesto encadena al documento y el navegador dispara su recarga nativa. Bloquear el documento habría sido una línea más simple y habría matado ese gesto.',
        },
        {
          titulo: 'Los montos y las fechas se formatean en el servidor',
          texto: 'Las listas llegan con el monto y la fecha ya convertidos a texto. Intl en Node y en el navegador pueden producir cadenas ligeramente distintas para el mismo dato, y esa diferencia al hidratar redibujaba la lista entera: el usuario lo veía como un parpadeo. Los nombres de los meses se escriben a mano en un arreglo en vez de pedírselos a Intl, porque en abreviatura may es idéntico en español y en inglés y no delataba cuándo el idioma salía mal. El costo es que cada fila viaja dos veces: el número para calcular y el texto para pintar.',
        },
        {
          titulo: 'En pesos no hay centavos: todo reparto se hace en enteros',
          texto: 'La división en partes iguales calcula la base con división entera y reparte el sobrante de uno en uno entre las primeras personas; porcentaje y partes acumulan el resto en la primera. La función de la base tolera un centavo de diferencia entre la suma y el total, pero el cliente cierra exacto. Sin esto quedarían deudas de céntimos que el propio campo de dinero, que solo acepta enteros, no permitiría pagar; fue exactamente el fallo que obligó a rehacer el reparto de los gastos fijos.',
        },
        {
          titulo: 'El campo de dinero escribe en el DOM a mano',
          texto: 'Si el usuario teclea por encima del máximo y el componente recorta al mismo valor que ya tenía, Svelte no detecta cambio y el input se queda mostrando lo tecleado, con un número que no existe en el estado. El componente guarda la referencia al elemento y le asigna el valor directamente cada vez que la representación cambia, además de reponer el cursor al final. La misma técnica cubre los valores que llegan desde fuera, como el recorte que aplica el formulario padre. A cambio, este campo renuncia a la reactividad y hay que mantener a mano la sincronía entre estado y DOM.',
        },
        {
          titulo: 'El detalle del gasto descarta las respuestas que llegan tarde',
          texto: 'Un contador global se incrementa en cada petición y la respuesta se ignora si entre tanto salió otra. Sin eso, tocar varias tarjetas seguidas o abonar dos veces rápido dejaba en pantalla la versión más vieja del gasto. El detalle además se guarda en un mapa en memoria, así que reabrir el mismo gasto es instantáneo y la petición solo sirve para refrescar. La contrapartida es que ese mapa puede quedar desfasado respecto al servidor hasta que llega la respuesta nueva.',
        },
        {
          titulo: 'La invitación se apaga, no se borra',
          texto: 'Cuando un hogar deja de aceptar miembros no se elimina la invitación: se marca inactiva. El código se muestra tapado, el enlace apunta a una ruta que no resuelve y las dos funciones de unirse exigen que la invitación esté activa y vigente. Volver a abrir el hogar es mover un interruptor, no generar y repartir un código nuevo entre todos. El precio es que el código sigue existiendo en la base mientras está apagado; para invalidarlo de verdad hay que regenerar, que es otra acción y solo para el administrador.',
        },
        {
          titulo: 'Los datos del hogar se cargan una vez en el armazón y se reutilizan',
          texto: 'El cargador del grupo de la aplicación resuelve perfil, lista de hogares, miembros e invitación en paralelo y los deja en caché. Las pantallas de hogar y de gastos no vuelven a consultar los perfiles: reconstruyen su mapa de nombres y avatares desde ahí, y por eso el listado de gastos se resuelve en una sola vuelta a la base. El precio es que el armazón carga cosas que algunas pantallas no usan, y que ese cargador se ejecuta también cuando nadie las necesita.',
        },
        {
          titulo: 'La precarga del menú nunca ocurre en la primera navegación',
          texto: 'Después de cada navegación se piden por adelantado los datos de las demás pestañas, salvo la primera vez. Esas precargas ejecutan cargadores que tocan cookies y sesión, y hacerlo justo después de hidratar invalidaba el estado de autenticación y repintaba la aplicación entera. Un contador de una sola línea salta esa primera vuelta; a partir de la segunda, cambiar de módulo es instantáneo. La contrapartida es que el primer salto del usuario sigue costando su viaje al servidor.',
        },
        {
          titulo: 'El service worker viejo es una lápida que se desregistra sola',
          texto: 'Una versión anterior registró un service worker que ya no hace falta, y los navegadores que lo instalaron siguen pidiendo ese archivo para siempre. El archivo actual no tiene manejadores de fetch ni de push: al activarse se desregistra y renavega las ventanas para que el navegador olvide el registro. El de las notificaciones es otro archivo distinto y ese sí es permanente, porque el push lo necesita vivo. El precio es mantener en el repositorio un archivo que existe solo para autodestruirse.',
        },
        {
          titulo: 'La librería de iconos se excluye del preempaquetado de Vite',
          texto: 'Cada icono de Lucide es un módulo pequeño e independiente, y al añadir uno nuevo Vite reoptimizaba las dependencias y devolvía errores 504 de dependencia obsoleta en pleno desarrollo. Excluirla del preempaquetado hace que se sirvan directos y el problema desaparece; a cambio, en desarrollo se piden muchos más módulos sueltos. En SSR la configuración es la contraria: la librería se marca como no externa para que Vite transforme sus .svelte en vez de que Node intente cargarlos.',
        },
        {
          titulo: 'El despliegue dejó atrás Cloudflare Pages',
          texto: 'El repositorio todavía tiene un wrangler.jsonc que apunta a .svelte-kit/cloudflare, la salida del adaptador de Cloudflare Pages, pero la configuración real usa adapter-node y el Dockerfile corre node build en el puerto 3000 sobre node:22-bookworm-slim. La arquitectura lo exige: un cliente de PostgreSQL escuchando LISTEN de forma permanente y un pool de conexiones vivo entre peticiones no caben en una función efímera. El rastro del adaptador anterior quedó sin limpiar y confunde a quien abre el repositorio por primera vez.',
        },
      ],
    },
  },
  {
    nombre: 'Drestyl',
    color: '#7C5CFF',
    logo: '/logos/drestyl.png',
    stack: ['Next.js 16', 'React 19', 'PostgreSQL', 'Gemini'],
    descripcion:
      'Registras las prendas de tu closet con foto y cada manana recibes una sugerencia de outfit hecha por IA, segun el clima del dia y lo que vas a hacer.',
    arquitectura:
      'Next.js con App Router y server actions, sin API REST intermedia: las mutaciones corren en el servidor y la respuesta revalida el cache. PWA instalable con manifest y service worker, pensada primero para celular. La recomendacion cruza el pronostico del clima con la agenda del dia y el catalogo de prendas antes de consultar al modelo.',
    url: 'https://drestyl.acmsy.com',
    captura: 'drestyl',
    landing: '#',
    // Estetica y ficha larga sacadas del repositorio de la app.
    estetica: {
      google: 'Inter:wght@400;500;600;700',
      fuente: {
        titulo: '\'Inter\', ui-sans-serif, system-ui, sans-serif',
        cuerpo: '\'Inter\', ui-sans-serif, system-ui, sans-serif',
        mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace',
      },
      radio: '12px',
      curva: 'cubic-bezier(0.16, 1, 0.3, 1)',
      claro: {
        fondo: '#FAFAFA',
        sup: '#F0EDFA',
        texto: '#1A1A1A',
        suave: '#6B6B6B',
        acento: '#7C5CFF',
      },
      oscuro: {
        fondo: '#131316',
        sup: '#1B1929',
        texto: '#FAFAFA',
        suave: '#9A9A9A',
        acento: '#7C5CFF',
      },
    },
    detalle: {
      stackRoles: [
        {
          nombre: 'Next.js 16',
          papel: 'El armazón. Quince pantallas con App Router, veinte server actions y cuatro rutas bajo /api.',
        },
        {
          nombre: 'React 19',
          papel: 'La interfaz. useActionState y useTransition sostienen los formularios y las esperas.',
        },
        {
          nombre: 'PostgreSQL',
          papel: 'Los datos. Cuatro tablas propias: perfiles, prendas y outfits con RLS, y las fotos guardadas como bytea.',
        },
        {
          nombre: 'Gemini',
          papel: 'La IA. Clasifica cada prenda por su foto y arma el outfit del día.',
        },
        {
          nombre: 'RMBG-1.4',
          papel: 'El recorte. Quita el fondo de cada foto dentro del propio navegador.',
        },
        {
          nombre: 'Tailwind v4',
          papel: 'Los estilos. Paleta, radios y curvas declarados como tokens en @theme.',
        },
      ],
      unaFrase: 'Aplicación web instalable que arma el outfit del día con Gemini, cruzando las fotos del clóset, el pronóstico de Open-Meteo y el plan que escribe el usuario.',
      porQueExiste: 'Los documentos del proyecto la definen como una app privada para un grupo pequeño, de diez a quince personas, que quieren decidir qué ponerse sin pensarlo cada mañana. Resuelve un paso concreto: registrar la ropa una vez, con foto, y recibir después una combinación armada con lo que ya está en el clóset. Para que la sugerencia sirva, el proyecto se obligó a tres cosas que no son gratis: recortar el fondo de cada foto para que el modelo vea la prenda y no lo que hay detrás, pedir la ubicación antes de dejar entrar a la app, y guardar los outfits aceptados para no repetir prendas ni perder el rastro del gusto personal. El documento de diseño se declara versión única, sin V2 ni hoja de ruta, y descarta los modales en todos los flujos: cada paso vive en su propia pantalla y las confirmaciones se resuelven con doble toque. En el código eso se nota en lo que no está: una sola paleta declarada, sin tema oscuro, y un historial que solo se lee. La IA corre sobre el nivel gratuito de Gemini, así que el número de outfits por día está limitado a cuatro y hay un armado de emergencia sin modelo para cuando la cuota se agota.',
      funcionalidades: [
        {
          area: 'Cuenta y sesión',
          items: [
            'Registro con correo, contraseña de mínimo 8 caracteres, nombre visible y la opción de cómo te vistes: masculino, femenino o mixto',
            'Los correos ya registrados se rechazan con el mensaje de iniciar sesión, sin crear una cuenta duplicada',
            'Inicio de sesión con correo y contraseña, con mensajes distintos para correo no registrado y contraseña incorrecta',
            'Si la cuenta se creó con Google, al intentar entrar con contraseña la app lo dice en vez de fallar',
            'Entrada con Google por OAuth 2.0, con selección de cuenta forzada y alcance de correo y perfil',
            'La cuenta de Google se vincula por correo a la cuenta existente en lugar de duplicarla',
            'Recuperar contraseña: enlace enviado por correo, válido 30 minutos y de un solo uso',
            'La respuesta de recuperación es siempre la misma exista o no el correo, para no revelar quién tiene cuenta',
            'Restablecer la contraseña desde el enlace, con confirmación de coincidencia y sesión iniciada al terminar',
            'Si el enlace expiró o ya se usó, la pantalla lo dice y ofrece pedir otro',
            'Cambiar la contraseña desde Ajustes verificando la actual y exigiendo que la nueva sea distinta',
            'Cerrar sesión con doble toque de confirmación que se cancela solo a los 3 segundos',
            'Rutas protegidas: sin sesión todo redirige a la entrada; con sesión, entrar, registrarse y recuperar redirigen a la app',
          ],
        },
        {
          area: 'Ubicación y clima',
          items: [
            'Onboarding obligatorio: la app pide la geolocalización del navegador antes de dejar entrar a cualquier pantalla',
            'Mensajes distintos según el fallo: permiso negado, tiempo agotado o navegador sin geolocalización, cada uno con botón de reintentar',
            'El nombre de la ciudad se resuelve con Nominatim de OpenStreetMap y se guarda junto a las coordenadas',
            'Si el geocoding inverso falla, las coordenadas se guardan igual y la ciudad queda vacía',
            'Tarjeta de clima en Hoy con temperatura actual, descripción del estado y nombre de la ciudad',
            'Tres métricas bajo la tarjeta: mínima y máxima del día, sensación térmica y humedad',
            'Iconos propios de marca para sol, nubes, lluvia y tormenta; luna y nieve dibujadas en SVG',
            'El clima se refresca solo cada 5 minutos, con un punto que parpadea mientras la petición está en curso',
            'El último clima queda en el navegador y se pinta al instante al abrir, mientras llega el dato fresco',
          ],
        },
        {
          area: 'Registrar prendas',
          items: [
            'Subir hasta 30 fotos por tanda, desde la galería o tomándolas con la cámara trasera del teléfono',
            'Rejilla previa de las fotos elegidas, con botón para quitar cualquiera y para sumar más hasta el tope',
            'Cada foto se comprime a WebP de máximo 0,9 MB y 1536 px antes de subirla',
            'Se genera además una miniatura de 1024 px y 0,3 MB, que es la que ve la IA',
            'Una sola llamada clasifica todas las fotos de la tanda a la vez, en el mismo orden en que se eligieron',
            'La IA devuelve por prenda cuatro campos: categoría, nombre en español, ocasión y clima',
            'El nombre incluye la marca y el modelo cuando se leen en la foto, y siempre el color',
            'Las fotos que el modelo marca como que no son una prenda se descartan solas y la app avisa cuántas se cayeron de la tanda',
            'Pantalla de progreso con tres barras: preparando fotos, IA categorizando y limpiando fondos con su contador',
            'El fondo de cada foto se quita dentro del navegador con el modelo RMBG-1.4, sin subirla a ningún servicio',
            'Revisión prenda por prenda con barra de pasos, anterior y siguiente, y cuántas quedan para guardar',
            'Cada campo que sugirió la IA lleva la marca por IA mientras no se cambie a mano',
            'Descartar y recuperar una prenda dentro de la revisión, sin salir del flujo',
            'No se guarda nada si falta la categoría o el nombre: la app salta a la primera prenda incompleta y lo dice',
            'Las prendas cuyo fondo aún no terminó se suben con la foto comprimida y quedan marcadas como pendientes',
          ],
        },
        {
          area: 'Clóset',
          items: [
            'Vista de categorías con el conteo de cada una y un acceso a ver todas las prendas juntas',
            'Las categorías sin prendas quedan deshabilitadas, no vacías',
            'Rejilla de prendas de la categoría elegida, de la más reciente a la más antigua',
            'Cada tarjeta muestra foto, nombre, categoría, icono de categoría y un punto cuando el fondo sigue en proceso',
            'Las prendas apagadas llevan el sello de inactiva sobre la foto',
            'Detalle de prenda con anterior y siguiente sin recargar la página ni cambiar la dirección',
            'La navegación del detalle respeta la categoría desde la que se entró, no recorre todo el clóset',
            'Editar nombre de hasta 80 caracteres, categoría, ocasión y clima de cada prenda',
            'Interruptor de activa en sugerencias: si se apaga, la IA deja de proponerla',
            'Guardar y cancelar cambios, ambos deshabilitados mientras no haya nada modificado',
            'Aviso al salir con cambios sin guardar, que se cancela solo a los 4 segundos',
            'Eliminar una prenda con doble toque de confirmación, borrando también su foto del almacenamiento',
            'La limpieza de fondos pendientes corre sola mientras estás en el clóset, una prenda a la vez, y retoma donde quedó si sales',
            'Estado vacío con acceso directo a subir la primera prenda',
          ],
        },
        {
          area: 'Sugerencia de outfit',
          items: [
            'Campo de qué vas a hacer hoy, de hasta 300 caracteres, que viaja al modelo con el resto del contexto',
            'La sugerencia cruza el clóset activo, el pronóstico del día, el plan escrito y las preferencias del perfil',
            'Al modelo se le mandan las fotos reales de las prendas, reducidas a 256 px en WebP',
            'Cada foto va etiquetada con su identificador, categoría, nombre, ocasión y clima',
            'El modelo recibe el rango de temperatura del día, la sensación térmica, la probabilidad y los milímetros de lluvia y el índice UV máximo',
            'También recibe los últimos 15 outfits aceptados de los últimos 30 días como referencia del gusto personal',
            'Regla fija: todo outfit lleva prenda superior, inferior y calzado; la sobreprenda solo entra si el clima lo pide y nunca dos',
            'Reglas de accesorios: una pieza por tipo, salvo anillos y pulseras, y entre cero y cuatro en total',
            'Texto de por qué este outfit escrito por el modelo, de una o dos frases',
            'Botón de regenerar con el contador de intentos que quedan en el día',
            'Límite de 4 outfits con IA por día y por cuenta, contado en la base de datos',
            'Cuando la IA no responde, la app arma igual una combinación simple por categorías y la marca como sin IA',
            'Ese armado de emergencia no consume cupo del día',
            'Mensajes distintos por tipo de fallo: cupo agotado, cuota del modelo agotada, modelo saturado, respuesta ilegible o falta de clave',
            'El botón de usar guarda el outfit del día con sus prendas, el plan, el clima del momento y el razonamiento',
          ],
        },
        {
          area: 'Ajustar el outfit a mano',
          items: [
            'Tocar una prenda del outfit abre el selector de reemplazo con las demás prendas activas de esa misma categoría',
            'El selector muestra arriba la prenda que se está cambiando, como referencia',
            'El botón de agregar abre el clóset completo por categorías para sumar una pieza más',
            'Las prendas que ya están en el outfit no aparecen entre las opciones disponibles',
            'Cambiar o sumar piezas no consume ninguna llamada a la IA',
            'El outfit modificado a mano queda marcado como editado cuando se guarda',
            'Si se entra al selector sin un outfit en curso, la app lo dice y ofrece volver a generarlo',
          ],
        },
        {
          area: 'Historial',
          items: [
            'Lista de outfits usados, del más reciente al más antiguo, con el total registrado en la cabecera',
            'Fecha en lenguaje natural: hoy, ayer, hace N días, la semana pasada, hace N semanas o hace N meses',
            'Cada fila muestra hasta cuatro miniaturas y un contador de cuántas piezas más tenía el outfit',
            'Distintivo de editado o sin IA en los outfits que no salieron tal cual del modelo',
            'Detalle de un outfit con su razonamiento original, el plan de ese día y el clima registrado',
            'Tocar una prenda del historial lleva a su ficha en el clóset',
            'Si una prenda se borró después, el outfit sigue existiendo y la app avisa que ya no está en el clóset',
            'El historial es solo lectura: no se edita ni se borra desde la app',
          ],
        },
        {
          area: 'Ajustes y perfil',
          items: [
            'Foto de perfil con recortador propio: visor circular, arrastrar para encuadrar, zoom con rueda o pellizco y guías de tercios',
            'La foto se guarda como WebP de 256 por 256 y admite originales de hasta 8 MB',
            'Editar el nombre visible en la propia cabecera, guardando al salir del campo o con Enter',
            'Texto libre de cómo te gusta vestirte, de hasta 500 caracteres, que entra al prompt de la IA',
            'Deslizador de no repetir prendas, entre 1 y 30 días',
            'Los dos campos se guardan solos con retardo, 500 ms el deslizador y 800 ms el texto, y confirman con un guardado',
            'Cambiar cómo te vistes entre masculino, femenino y mixto',
            'Instrucciones de acceso directo según el navegador y el sistema: iOS, Android, Chromium, Firefox y Safari de escritorio',
            'Créditos a Open-Meteo y OpenStreetMap, y versión de la app leída del propio package.json',
          ],
        },
        {
          area: 'Interfaz e instalación',
          items: [
            'Barra inferior fija de cuatro pestañas: Hoy, Clóset, Historial y Ajustes',
            'El cuerpo de la página nunca se desplaza: cada vista scrollea por dentro, para que la app instalada se sienta nativa',
            'Zonas seguras del iPhone respetadas arriba y abajo, incluida la barra del indicador',
            'Barras de desplazamiento ocultas en toda la app, salvo donde se pide una fina en lila',
            'Esqueletos de carga propios por pantalla en Hoy, Clóset, Historial, Sugerencia y Ajustes',
            'Animaciones de entrada escalonadas en formularios y listas, con curvas declaradas como tokens',
            'Panel lateral de bienvenida en escritorio con una lluvia diagonal de 48 iconos de ropa en bucle continuo',
            'El formulario y el panel intercambian lados al pasar de entrar a registrarse, con una transición de 800 ms',
            'Instalable como aplicación en modo standalone, bloqueada en vertical y en español de Colombia',
          ],
        },
      ],
      carpetas: [
        {
          carpeta: 'app/',
          que_es: 'El App Router de Next: las pantallas, las server actions y las rutas HTTP.',
          hijos: [
            {
              carpeta: 'app/(app)',
              que_es: 'las pantallas con sesión: Hoy, clóset, sugerencia, historial y ajustes, casi todas con su esqueleto de carga',
            },
            {
              carpeta: 'app/(auth)',
              que_es: 'entrar, registrarse, recuperar y restablecer, con el panel decorativo de escritorio',
            },
            {
              carpeta: 'app/actions',
              que_es: 'cinco archivos de server actions: sesión, prendas, outfits, perfil y ubicación',
            },
            {
              carpeta: 'app/api',
              que_es: 'cuatro rutas: la foto firmada, el clima, la clasificación de prendas y el armado del outfit',
            },
            {
              carpeta: 'app/auth/callback',
              que_es: 'la ruta de retorno de Google: valida el estado, canjea el código y deja la cookie de sesión',
            },
            {
              carpeta: 'app/globals.css',
              que_es: 'los tokens de Tailwind v4: paleta, radios, curvas y las animaciones reutilizables',
            },
          ],
        },
        {
          carpeta: 'components/',
          que_es: 'Los componentes de pantalla, agrupados por la sección a la que pertenecen.',
          hijos: [
            {
              carpeta: 'components/today',
              que_es: 'la pantalla Hoy, la sugerencia y los selectores de cambiar y sumar piezas',
            },
            {
              carpeta: 'components/closet',
              que_es: 'el flujo de alta por tanda, la rejilla, la ficha de prenda y la cola de limpieza de fondos',
            },
            {
              carpeta: 'components/settings',
              que_es: 'cabecera de perfil, recortador de avatar, preferencias de estilo y ventana de no repetir',
            },
            {
              carpeta: 'components/auth',
              que_es: 'los formularios de sesión, el selector de género y el panel decorativo',
            },
            {
              carpeta: 'components/ui',
              que_es: 'los dos indicadores de espera: la camiseta que se dibuja y el logo que pulsa',
            },
          ],
        },
        {
          carpeta: 'lib/',
          que_es: 'La lógica compartida: acceso a datos, sesión, fotos y el tratamiento de imágenes.',
          hijos: [
            {
              carpeta: 'lib/server',
              que_es: 'conexión a Postgres, sesión firmada, adaptador de consultas, fotos, Google y correo',
            },
            {
              carpeta: 'lib/supabase',
              que_es: 'la fachada que las pantallas siguen llamando, ya montada sobre Postgres propio; los dos archivos del cliente original quedaron sin uso',
            },
            {
              carpeta: 'lib/image-pipeline.ts',
              que_es: 'compresión, miniatura y quitado de fondo dentro del navegador',
            },
            {
              carpeta: 'lib/categories.ts',
              que_es: 'las cinco categorías de prenda, su etiqueta y su validación',
            },
          ],
        },
        {
          carpeta: 'supabase/',
          que_es: 'El esquema de la base de datos y las plantillas de correo.',
          hijos: [
            {
              carpeta: 'supabase/migrations',
              que_es: 'quince archivos SQL con las tablas, los índices, las políticas de RLS y los disparadores',
            },
            {
              carpeta: 'supabase/email-templates',
              que_es: 'la plantilla del correo de restablecimiento de contraseña',
            },
          ],
        },
        {
          carpeta: 'public/',
          que_es: 'Los archivos servidos tal cual: iconos de marca y el service worker.',
          hijos: [
            {
              carpeta: 'public/icons',
              que_es: 'logo suelto y con texto, cámara, subir, las cinco categorías más la de ver todas, los cuatro estados de clima y los iconos de la app instalada',
            },
            {
              carpeta: 'public/sw.js',
              que_es: 'el service worker mínimo que hace instalable la app sin cachear nada',
            },
          ],
        },
        {
          carpeta: 'scripts/',
          que_es: 'Utilidades sueltas que se corren a mano, nunca en producción.',
          hijos: [
            {
              carpeta: 'scripts/generate-icons.mjs',
              que_es: 'genera los iconos PNG de la app a partir de un SVG base con sharp',
            },
            {
              carpeta: 'scripts/run-migration.mjs',
              que_es: 'aplica un archivo SQL contra la base leyendo las credenciales del entorno',
            },
            {
              carpeta: 'scripts/check-bucket.mjs',
              que_es: 'lista los buckets y las políticas de almacenamiento para verificar el estado',
            },
          ],
        },
      ],
      arquitectura: {
        resumen: 'Todo vive dentro de una sola aplicación Next.js 16 con App Router: no hay backend separado. Las pantallas son Server Components que leen la base directamente y las escrituras van por server actions, sin una API REST intermedia; bajo /api quedan cuatro rutas para lo que no encaja en una acción: servir fotos, consultar el clima y las dos llamadas a Gemini, y el retorno de Google tiene la suya aparte. La capa de datos es PostgreSQL con pg, y cada consulta corre dentro de una transacción con el rol authenticated y el identificador del usuario fijado, de modo que las políticas de RLS deciden qué puede ver cada cuenta. Las fotos de las prendas se guardan como binario dentro de la propia base y se sirven por una ruta cuya dirección lleva una firma HMAC, así funcionan en una etiqueta de imagen, en el optimizador de Next y en un fetch del servidor. La sesión es una cookie firmada sin almacén detrás: el proxy de borde verifica la misma firma con Web Crypto y redirige antes de que la petición llegue a una pantalla. Lo pesado del tratamiento de imágenes ocurre en el teléfono del usuario: comprimir, miniaturizar y quitar el fondo con el modelo RMBG-1.4 cargado en el navegador. El servidor casi no toca las imágenes: solo recorta el avatar a 256 por 256 y vuelve a reducir las fotos de las prendas a 256 px cuando las manda a Gemini. En producción se empaqueta en una imagen Docker sobre node:22, detrás de un proxy, y una variable de entorno fija el origen público con el que se arman las redirecciones de Google y las direcciones firmadas de las fotos.',
        capas: [
          {
            nombre: 'Cliente',
            piezas: [
              {
                nombre: 'Interfaz',
                tecnologia: 'React 19 · Tailwind v4 · PWA',
                que_hace: 'Quince pantallas mobile-first con barra inferior fija. El cuerpo no se desplaza: cada vista scrollea por dentro.',
              },
              {
                nombre: 'Tratamiento de imagen',
                tecnologia: 'browser-image-compression · RMBG-1.4',
                que_hace: 'Comprime, miniaturiza y quita el fondo de cada foto en el navegador, con WebGPU si existe y WASM si no.',
              },
              {
                nombre: 'Cola de fondos',
                tecnologia: 'React · server action',
                que_hace: 'Procesa en segundo plano las prendas que se subieron sin recortar y sube la versión limpia una por una.',
              },
            ],
          },
          {
            nombre: 'Servidor Next',
            piezas: [
              {
                nombre: 'Pantallas y acciones',
                tecnologia: 'Next.js 16 · App Router · server actions',
                que_hace: 'Los Server Components leen la base y veinte server actions escriben. Cada mutación revalida el caché de la ruta.',
              },
              {
                nombre: 'Rutas de API',
                tecnologia: 'Route Handlers',
                que_hace: 'Sirven la foto firmada, el clima, la clasificación por lote y el armado del outfit, con hasta 60 s para la llamada al modelo.',
              },
              {
                nombre: 'Adaptador de datos',
                tecnologia: 'pg · transacción con rol authenticated',
                que_hace: 'Traduce las llamadas al estilo de un cliente Supabase a SQL, y fija el usuario para que RLS aplique en cada consulta.',
              },
              {
                nombre: 'Proxy de sesión',
                tecnologia: 'Edge · HMAC con Web Crypto',
                que_hace: 'Verifica la firma de la cookie sin tocar la base y redirige las rutas protegidas y las públicas antes de renderizar.',
              },
            ],
          },
          {
            nombre: 'Datos y servicios',
            piezas: [
              {
                nombre: 'PostgreSQL',
                tecnologia: 'pg · RLS',
                que_hace: 'Perfiles, prendas, outfits y las fotos como binario, más las tablas de cuentas y de tokens de un solo uso.',
              },
              {
                nombre: 'Gemini',
                tecnologia: '2.5 Flash Lite · 2.5 Flash · 2.0 Flash',
                que_hace: 'Clasifica las prendas por su foto y arma el outfit, con rotación de claves y salto de modelo cuando falla.',
              },
              {
                nombre: 'Open-Meteo y Nominatim',
                tecnologia: 'API pública sin clave',
                que_hace: 'Pronóstico del día por coordenadas y nombre de la ciudad resuelto a partir de esas mismas coordenadas.',
              },
              {
                nombre: 'Google y Resend',
                tecnologia: 'OAuth 2.0 · API de correo',
                que_hace: 'Entrada con cuenta de Google y envío del correo de restablecimiento de contraseña.',
              },
            ],
          },
        ],
      },
      decisiones: [
        {
          titulo: 'La app dejó de hablar con Supabase pero conservó su forma',
          texto: 'La capa de datos se movió a un PostgreSQL propio, y en vez de reescribir todas las consultas se escribió un adaptador que expone el mismo subconjunto del cliente de Supabase: from, select, insert, update, delete, eq, neq, in, gte, lte, order, limit y maybeSingle. Las pantallas y las acciones siguen llamando exactamente igual que antes. Por dentro se arma SQL con parámetros y los nombres de tabla y columna se validan contra una expresión regular antes de concatenarlos. El precio está a la vista en la configuración: los tipos del cliente ya no calzan uno a uno con los del código, así que el build de producción se dejó configurado para no detenerse ante errores de tipos.',
        },
        {
          titulo: 'Cada consulta abre una transacción y se hace pasar por el usuario',
          texto: 'El adaptador no consulta como superusuario. Toma una conexión del pool, abre transacción, ejecuta un set local role authenticated y fija el identificador del usuario en una variable de sesión, de modo que auth.uid() y todas las políticas de RLS aplican igual que aplicaban en Supabase. La consecuencia es que la seguridad vive en la base y no en el código de las pantallas: si una acción olvida filtrar por usuario, la política lo bloquea igual. El costo es una transacción y una conexión por cada consulta, incluso para leer una sola fila.',
        },
        {
          titulo: 'La sesión es una cookie firmada, sin tabla de sesiones detrás',
          texto: 'La cookie guarda un JSON en base64url con el identificador y el correo, seguido de un HMAC-SHA256 verificado con comparación en tiempo constante. No hay almacén de sesiones que consultar, así que validar la sesión no cuesta ni una consulta. La misma firma se verifica en dos runtimes distintos: en Node con el módulo crypto y en el proxy de borde con Web Crypto. Lo que se pierde es la revocación central: cerrar sesión solo borra la cookie de ese navegador, y cambiar la contraseña no invalida las sesiones abiertas en otros aparatos.',
        },
        {
          titulo: 'El proxy decide sin tocar la base y llama a esa verificación optimista',
          texto: 'El middleware de borde solo comprueba que la firma de la cookie sea válida antes de redirigir; no lee el usuario, no verifica que siga existiendo y no consulta nada. Con eso alcanza para que la navegación se sienta instantánea y para que nadie vea una pantalla protegida en blanco. El propio código lo dice: la verificación del proxy es para la experiencia, no para los datos. El costo es que una cookie de una cuenta ya borrada sigue pasando el filtro y navegando por pantallas vacías, porque quien realmente corta es RLS en cada consulta.',
        },
        {
          titulo: 'Las fotos viven como binario dentro de Postgres, no en un bucket',
          texto: 'Existe una tabla con la ruta como clave primaria y la imagen en una columna bytea. La razón práctica es que así todo el estado de la app cabe en una sola base, sin depender de un servicio de almacenamiento aparte ni de sus políticas. Esa tabla no lleva RLS porque solo se toca desde el servidor con el pool administrador. El precio es evidente: la base crece con contenido binario, y cada foto pasa por el proceso de Node en vez de servirse desde un CDN.',
        },
        {
          titulo: 'La dirección de la foto se autoriza por firma, no por cookie',
          texto: 'La ruta que sirve una imagen recibe la clave, la versión y una firma HMAC, y responde 403 si no cuadran. Al no depender de la cookie funciona en una etiqueta de imagen, en el optimizador de Next y en un fetch del propio servidor, que es exactamente lo que hace falta cuando se arman los datos para el modelo. La versión de la firma es la fecha de última modificación: cuando la foto cambia porque se le quitó el fondo, la dirección cambia sola y el navegador baja la nueva. Por eso el proxy deja pasar esa ruta sin sesión, y la respuesta va con caché privado de un día.',
        },
        {
          titulo: 'El fondo de las fotos se quita en el teléfono, no en el servidor',
          texto: 'El modelo RMBG-1.4 se descarga y corre en el navegador con transformers.js, en WebGPU si el aparato lo soporta y en WASM cuantizado si no. Así el servidor no necesita GPU ni una cola de trabajos, y las fotos originales no salen del dispositivo hasta que ya están recortadas. Hubo un intento de moverlo a un Web Worker que se abandonó: Turbopack, el empaquetador de desarrollo, no resolvía bien la ruta del archivo del worker y fallaba en silencio en el celular. Quedó corriendo en el hilo principal, con el costo de que la pestaña se pone pesada mientras procesa.',
        },
        {
          titulo: 'Guardar no espera a que los fondos estén limpios',
          texto: 'Al procesar una tanda, la compresión, la clasificación y el recorte arrancan en paralelo, pero solo se espera a la clasificación para soltar al usuario a la pantalla de revisión. Las prendas cuyo recorte no terminó se suben con la foto comprimida y una marca de pendiente. Después, mientras el usuario está en el clóset, una cola las procesa de a una y reemplaza la foto. Si se sale de la pantalla la cola se interrumpe y retoma en la siguiente visita, porque el estado pendiente vive en la base y no en memoria.',
        },
        {
          titulo: 'El límite de outfits del día se cuenta en la base, no en el navegador',
          texto: 'El contador vive en dos columnas del perfil: la fecha del último uso y cuántas llamadas hubo ese día. Antes estaba en el almacenamiento local del navegador y cualquiera podía borrarlo desde las herramientas de desarrollo. El reinicio es perezoso: si la fecha guardada no es la de hoy, el contador efectivo es cero y se persiste recién cuando la IA responde bien. Los fallos no consumen cupo, y hay una bandera de cupo ilimitado que se activa por cuenta para depurar sin gastar intentos.',
        },
        {
          titulo: 'Cuando la IA falla se entrega un outfit igual',
          texto: 'Ante una caída, una cuota agotada o una saturación sostenida, el servidor no devuelve un error: arma una combinación eligiendo al azar una prenda por categoría base, más una sobreprenda si hay y hasta dos accesorios. La respuesta viaja marcada como fallback, se ve en el historial con el distintivo de sin IA y no descuenta ninguna llamada, porque no usó el modelo. Es peor sugerencia que la de la IA, pero es una pantalla útil en vez de un mensaje de error.',
        },
        {
          titulo: 'Se prueban dos modelos y varias claves antes de rendirse',
          texto: 'El armado del outfit intenta primero el modelo más liviano, que en pruebas tardaba cerca de un cuarenta por ciento menos y daba resultados equivalentes porque las prendas ya llegan preclasificadas. Ante un 429 rota a la siguiente clave, porque la cuota es por clave; ante un 5xx reintenta la misma con espera creciente y, si sigue caído, salta al modelo más capaz. Las claves se barajan al azar en cada petición para no castigar siempre a la primera. Todo el recorrido tiene un tope de 55 segundos por intento y de 60 para la ruta entera.',
        },
        {
          titulo: 'Al modelo se le exige un esquema y aun así se desconfía de la respuesta',
          texto: 'La petición fija el tipo de respuesta en JSON y declara el esquema con los dos campos esperados. Después, cada identificador devuelto se cruza contra el conjunto de prendas que realmente se enviaron, se descartan los repetidos y, si el JSON no se puede leer, se rescatan los identificadores con una expresión regular sobre el texto crudo. La defensa final es de composición: si al outfit le falta prenda superior, inferior o calzado y el clóset tiene esa categoría, el servidor añade una al azar. Se prefiere un outfit completo y menos elegante a uno incompleto.',
        },
        {
          titulo: 'Se quitó el tope de prendas por llamada a propósito',
          texto: 'El código llegó a mandar como máximo veinticinco prendas al modelo para acotar el peso del envío y el gasto de tokens. Ese tope se eliminó: ahora recibe todo el clóset activo menos las usadas hace poco, para que tenga todas las combinaciones posibles a la vista. El comentario deja anotado el precio, que es real: con cincuenta prendas o más el envío y la espera crecen, y habrá que reconsiderarlo si un clóset pasa de cien.',
        },
        {
          titulo: 'Las prendas usadas hace poco se filtran antes de enviarlas',
          texto: 'La regla de no repetir podría aplicarse solo en el prompt, pero además se sacan del envío las prendas usadas dentro de la ventana configurada. Eso reduce el peso y el tiempo de la llamada. La salvedad está escrita: si tras filtrar quedan menos de tres prendas, se manda el clóset entero, porque un outfit imposible es peor que uno repetido.',
        },
        {
          titulo: 'Las fotos ya convertidas quedan en memoria del proceso',
          texto: 'Cada foto redimensionada a 256 px se guarda en un mapa en memoria indexado por su ruta y su fecha de modificación, con vigencia de veintitrés horas. El caso que importa es regenerar: la primera llamada llena el mapa y las siguientes pagan solo el tiempo del modelo, sin volver a leer ni a redimensionar nada. Si la foto cambia, cambia la clave y se reprocesa sola. Es un caché por instancia, se pierde al reiniciar, y cuando pasa de quinientas entradas se barren las vencidas.',
        },
        {
          titulo: 'Solo se guardan los outfits que el usuario acepta',
          texto: 'Las sugerencias generadas y descartadas no se persisten en ninguna parte: viven en memoria del cliente hasta que alguien toca usar. La fecha del outfit la pone el servidor, no el navegador, para que una zona horaria desincronizada no cree outfits del futuro. Además, cada identificador de prenda se cruza contra las del usuario antes de insertar: RLS lo bloquearía igual, pero así el error que se ve es claro en vez de un fallo de base de datos. Lo que se pierde es el rastro de lo rechazado: no queda registro de qué sugerencias descartó el usuario, así que el bloque de gusto personal que viaja al prompt solo se alimenta de aciertos.',
        },
        {
          titulo: 'El outfit en curso viaja por sessionStorage y su marca caduca sola',
          texto: 'Cambiar o sumar una pieza no vuelve a llamar a la IA: el outfit se guarda en el almacenamiento de sesión con una bandera de cambio pendiente y, al volver, la pantalla se hidrata de ahí. Esa bandera no se borra al leerla, caduca a los diez segundos por su marca de tiempo. El motivo es concreto: el modo estricto de React monta el componente dos veces en desarrollo, el primer montaje limpiaba la bandera y el segundo terminaba disparando una llamada al modelo que nadie pidió. El costo del atajo es que volver a la pantalla dentro de esos diez segundos rehidrata el outfit guardado en vez de pedir uno nuevo.',
        },
        {
          titulo: 'El cuerpo de la página nunca hace scroll',
          texto: 'El html y el body están fijados en alto completo con el desbordamiento oculto y el rebote desactivado. Cada vista se dimensiona al alto de la ventana y desplaza su propio contenido. La razón es la app instalada: con el desplazamiento de página entero, en modo standalone se sentía una web dentro de un marco en vez de una aplicación. El costo es que toda pantalla nueva tiene que declarar explícitamente qué bloque scrollea.',
        },
        {
          titulo: 'El service worker existe pero no cachea nada',
          texto: 'Está registrado después de la hidratación y no intercepta ninguna petición: todo va a la red. Su única función es cumplir el criterio de instalable junto al manifiesto y los iconos. El comentario explica por qué se llegó a eso: un caché agresivo rompía la hidratación en el celular. Se prefiere una app instalable sin modo sin conexión antes que una que a veces arranca rota.',
        },
        {
          titulo: 'El origen público para Google se fija por entorno, no por la petición',
          texto: 'OAuth exige que la dirección de retorno sea idéntica al pedir el código y al canjearlo. Detrás del proxy la petición llega como localhost y en desarrollo como 0.0.0.0, así que ninguna de las dos sirve. Ambos pasos leen el mismo valor de una variable de entorno. La misma constante se usa para todas las redirecciones del callback, y por eso la firma de las direcciones de foto también sale absoluta cuando el servidor necesita leerlas. El costo es la dependencia de esa variable: si falta, el valor cae a localhost y en producción el retorno de Google falla entero.',
        },
        {
          titulo: 'El nombre de la ciudad lo resuelve OpenStreetMap, no el servicio de clima',
          texto: 'Open-Meteo no tiene geocodificación inversa, solo búsqueda por nombre, así que la ciudad se pide a Nominatim con un identificador propio en la cabecera, como exige su política de uso, y con cuatro segundos de tope. Si falla, las coordenadas se guardan igual y la ciudad queda vacía: la app funciona sin ese nombre, solo se ve menos cuidada. El clima siempre se pide con las coordenadas del perfil y nunca con parámetros de la dirección, para que nadie consulte el clima de la ubicación de otra persona.',
        },
        {
          titulo: 'Se fuerza a Postgres a devolver las fechas como texto',
          texto: 'El controlador de Postgres convierte por su cuenta las columnas de fecha y de marca de tiempo a objetos de fecha de JavaScript, mientras que la capa anterior las entregaba como cadenas y la app las trata así en todas partes. En vez de tocar cada pantalla, se registran tres analizadores de tipo que devuelven el valor crudo. Son tres líneas que evitan romper el formateo del historial y del día de uso en todo el proyecto, a cambio de una trampa para el que llegue después: cualquier código nuevo que espere un objeto de fecha recibe una cadena y tiene que convertirla a mano.',
        },
      ],
    },
  },
  {
    nombre: 'Locknest',
    color: '#CD0B14',
    logo: '/logos/locknest.png',
    stack: ['Angular 22', 'Web Crypto API', 'Express 5', 'MySQL 8'],
    descripcion:
      'Gestor de contrasenas con cuentas de usuario. Las claves se cifran y descifran en tu propio dispositivo, asi que ni yo, con acceso al servidor, puedo leerlas.',
    arquitectura:
      'Cifrado de extremo a extremo: la clave maestra nunca sale del navegador y al servidor solo llega el bloque ya cifrado, asi que la base de datos MySQL guarda texto ilegible. Frontend Angular y API Express separados, con sesiones por token.',
    url: 'https://locknest.acmsy.com',
    captura: 'locknest',
    landing: '#',
    // Estetica y ficha larga sacadas del repositorio de la app.
    estetica: {
      google: 'Manrope:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500',
      fuente: {
        titulo: '\'Manrope\', ui-sans-serif, system-ui, sans-serif',
        cuerpo: '\'Manrope\', ui-sans-serif, system-ui, sans-serif',
        mono: '\'IBM Plex Mono\', ui-monospace, \'SF Mono\', Consolas, monospace',
      },
      radio: '12px',
      curva: 'cubic-bezier(0.16, 1, 0.3, 1)',
      claro: {
        fondo: '#EEEEEE',
        sup: '#FFFFFF',
        texto: '#0D0D0D',
        suave: '#5B5B5B',
        acento: '#CD0B14',
      },
      oscuro: {
        fondo: '#090909',
        sup: '#131313',
        texto: '#F8F8F8',
        suave: '#929292',
        acento: '#CD0B14',
      },
    },
    detalle: {
      stackRoles: [
        {
          nombre: 'Angular 22',
          papel: 'La interfaz. Cuatro pantallas standalone con signals y carga diferida por ruta.',
        },
        {
          nombre: 'Web Crypto API',
          papel: 'El cifrado. Deriva la clave y cifra cada credencial dentro del navegador.',
        },
        {
          nombre: 'Express 5',
          papel: 'La API. Veintiuna rutas bajo /api y la sesión en cookie httpOnly.',
        },
        {
          nombre: 'MySQL 8',
          papel: 'Los datos. Tres tablas; cada credencial vive ahí como iv más contenido cifrado.',
        },
        {
          nombre: 'Dexie',
          papel: 'El espejo. Copia cifrada en IndexedDB para abrir sin conexión, en sólo lectura.',
        },
      ],
      unaFrase: 'Gestor de contraseñas con cuentas sobre MySQL en el que la clave se deriva con PBKDF2 y se cifra con AES-GCM dentro del navegador, de modo que las credenciales llegan al servidor como bloques ilegibles.',
      porQueExiste: 'Guardar contraseñas en un servicio ajeno obliga a confiar en que quien administra el servidor no puede leerlas, y esa confianza no se puede comprobar. Locknest resuelve el caso concreto de tener cuenta y sincronización sin ceder esa confianza: la contraseña maestra nunca sale del navegador, la clave que abre la bóveda viaja envuelta y MySQL guarda las credenciales como bytes que no significan nada sin ella. Alrededor de eso está lo mínimo para que sea usable a diario: índice con búsqueda, generador dentro del formulario, auto-bloqueo, portapapeles que se limpia solo y copia cifrada de respaldo. Quedó fuera todo lo que obligaría a descifrar en el servidor: no hay compartir credenciales, ni equipos, ni recuperación por correo, ni papelera. La única salida cuando se olvida la maestra es un código de recuperación que se entrega una sola vez, y si se pierde, la bóveda no se abre.',
      funcionalidades: [
        {
          area: 'Cuenta y acceso',
          items: [
            'Crear cuenta con nombre opcional de hasta 120 caracteres, correo y contraseña maestra de mínimo 8 caracteres',
            'Iniciar sesión con correo y contraseña maestra, sin que la maestra salga del navegador en ningún momento',
            'Antes de derivar nada se piden al servidor la sal y las iteraciones de esa cuenta',
            'Correo validado por formato y por longitud máxima de 190 caracteres, y guardado siempre en minúsculas',
            'Freno de fuerza bruta de 10 intentos por correo e IP cada 15 minutos, con los minutos restantes en el aviso',
            'Botón de entrada con Google cuyo estado lo decide el servidor: si faltan las llaves, la app lo explica en vez de fallar',
            'Acceso con Google por flujo de código, con state en cookie propia de 10 minutos y selección de cuenta forzada',
            'Una cuenta creada con contraseña queda vinculada a Google al entrar por primera vez con el mismo correo',
            'Una cuenta nueva de Google entra sin bóveda y la app la lleva a crear la contraseña maestra antes de dejar guardar nada',
            'La vuelta de Google se traduce a ocho mensajes distintos según el fallo y se borra de la dirección',
            'Sesión de 7 días en cookie httpOnly con SameSite=Strict, de la que el servidor sólo guarda el SHA-256 del token',
            'Cerrar sesión borra la cookie, la sesión en la base, el espejo local y las cachés del service worker',
            'Cambiar el nombre visible escribiendo sobre el propio título en ajustes: Enter guarda, Escape descarta',
          ],
        },
        {
          area: 'Contraseña maestra y cifrado',
          items: [
            'Derivación PBKDF2-SHA256 de 600.000 iteraciones sobre la maestra normalizada en NFKC',
            'Cifrado AES-GCM de 256 bits con IV aleatorio de 96 bits en cada operación',
            'Cada credencial es un bloque independiente de iv más contenido cifrado: nada viaja en claro',
            'La clave que cifra la bóveda es aleatoria, llega envuelta desde el servidor y se desenvuelve en el navegador',
            'Al servidor sólo llega un authHash de una vuelta, que además se vuelve a hashear con scrypt (N=32768) antes de guardarse',
            'Cambiar la contraseña maestra sólo vuelve a envolver la clave: las credenciales no se recifran',
            'Cambiar la maestra cierra el resto de sesiones abiertas y renueva la actual',
            'Medidor de fuerza de 20 marcas con la entropía en bits al elegir una maestra nueva',
            'El servidor rechaza cualquier alta o cambio con menos de 100.000 iteraciones',
            'Las cuentas anteriores al modelo de clave envuelta se migran solas en el primer desbloqueo, dentro de una transacción',
            'Una maestra incorrecta se detecta en el navegador al no poder desenvolver la clave, sin preguntar al servidor',
          ],
        },
        {
          area: 'Código de recuperación',
          items: [
            'Código de 24 caracteres en 6 grupos de 4, sobre un alfabeto de 30 que excluye I, L, O, U, 0 y 1',
            'Generado con la fuente aleatoria del navegador y sin sesgo de módulo',
            'Se muestra una sola vez, con casilla obligatoria de guardado fuera del dispositivo antes de dejar continuar',
            'Copiar el código o descargarlo como archivo de texto con la cuenta, la fecha y las instrucciones',
            'Recuperar el acceso con correo y código, eligiendo una maestra nueva sin perder ninguna credencial',
            'Al usarlo, el código se reemplaza por uno nuevo y se invalidan todas las sesiones anteriores',
            'Generar un código nuevo desde ajustes, exigiendo la maestra actual',
            'Ajustes muestra desde qué fecha está activo el código vigente',
            'Pedir los parámetros de recuperación de un correo desconocido devuelve bytes señuelo, no un error',
            'El código se acepta con guiones o sin ellos y en cualquier caja, con contador de caracteres mientras se escribe',
          ],
        },
        {
          area: 'Bóveda, búsqueda y filtros',
          items: [
            'Índice con la inicial, el título, el usuario y el aviso de contraseña débil de cada credencial',
            'Búsqueda que recorre a la vez título, usuario, sitio y notas',
            'Tres filtros con su recuento en vivo: Todas, Favoritas y Débiles',
            'Las favoritas suben al principio de la lista filtrada',
            'Orden por título con comparación en español que ignora tildes y mayúsculas',
            'Débil significa contraseña de menos de 12 caracteres; el índice lo marca con icono, no sólo con color',
            'La credencial abierta muestra usuario, contraseña, notas, categoría, sitio, fecha de creación y de última edición',
            'Copiar el usuario sin limpieza posterior y la contraseña con limpieza automática',
            'Revelar la contraseña con el botón del ojo, con la barra de fuerza siempre visible aunque siga oculta',
            'Enlace al sitio en pestaña nueva con rel noopener, mostrado sin el protocolo ni la barra final',
            'Estado vacío distinto según sea bóveda sin credenciales o búsqueda sin resultados',
          ],
        },
        {
          area: 'Alta y edición de credenciales',
          items: [
            'Alta y edición comparten pantalla; el título se escribe encima, sin caja de formulario',
            'Campos de título, usuario o correo, sitio, contraseña, notas, categoría y favorita',
            'Cinco categorías fijas: Personal, Trabajo, Finanzas, Social y Otros',
            'Basta con título, usuario o contraseña para poder guardar',
            'Sin título se usa el usuario, y si tampoco hay, queda como Sin título',
            'Aviso de contraseña repetida si esa misma clave ya está en otra credencial',
            'Barra de fuerza con etiqueta en cinco tramos: Muy débil, Débil, Aceptable, Fuerte y Excelente',
            'Revelar y copiar la contraseña desde el propio formulario',
            'Borrado en dos pasos, confirmando en el sitio y sin papelera de la que rescatarlo',
          ],
        },
        {
          area: 'Generador integrado',
          items: [
            'Deslizador de longitud entre 8 y 64 caracteres, con 24 por defecto',
            'Cuatro conjuntos conmutables: mayúsculas, minúsculas, números y símbolos (!#$%&*+-=?@^_~)',
            'Modo de evitar ambiguos que quita los caracteres que se confunden al leer',
            'Los cuatro conjuntos nunca quedan apagados a la vez: minúsculas vuelve solo',
            'Botón de máxima: 64 caracteres, todos los conjuntos y sin filtro de ambiguos',
            'Cada cambio de longitud o de conjunto genera una contraseña nueva al instante',
            'La contraseña generada se revela sola para poder revisarla antes de guardar',
            'Elección de cada carácter sin sesgo de módulo con la fuente aleatoria del navegador',
          ],
        },
        {
          area: 'Bloqueo y portapapeles',
          items: [
            'Auto-bloqueo por inactividad con seis opciones: 1, 5, 15, 30 o 60 minutos, o nunca; por defecto 30',
            'La actividad se detecta por puntero, teclado y rueda en todo el documento',
            'Comprobación cada 5 segundos: cumplido el tiempo, la clave se descarta de memoria',
            'Bloqueo al salir de la pestaña o minimizar, activable aparte del tiempo de inactividad',
            'Bloqueo manual desde el botón de la barra superior',
            'Al bloquearse se abandona el área privada y el aviso dice el motivo: inactividad o salida de la pestaña',
            'Las contraseñas salen enmascaradas en el índice y se revelan de una en una',
            'El portapapeles se limpia solo a los 25 segundos, y el aviso lo dice al copiar',
            'Ninguna pantalla interna se pinta con la bóveda cerrada: la guarda devuelve a la entrada',
            'Tener sesión no abre la bóveda: al recargar se vuelve a pedir la maestra',
          ],
        },
        {
          area: 'Respaldo y borrado',
          items: [
            'Exportar la bóveda a un archivo .locknest cifrado, con la fecha en el nombre',
            'El archivo lleva formato, versión, sal, iteraciones e IV, pero ningún dato legible',
            'Importar un .locknest pidiendo la maestra con la que se exportó',
            'La importación fusiona por marca de tiempo: sólo entra la versión más reciente de cada credencial',
            'Un archivo que no sea una bóveda de Locknest se rechaza antes de pedir contraseña',
            'Vaciar la bóveda conservando la cuenta, en dos pasos',
            'Eliminar la cuenta entera: credenciales y sesiones caen por clave foránea',
            'La pantalla avisa de que no hay papelera y de qué se lleva cada acción',
          ],
        },
        {
          area: 'Interfaz y movimiento',
          items: [
            'Tema oscuro por defecto y claro por conmutador, recordado entre visitas y aplicado antes del primer pintado',
            'Grabado concéntrico de anillos y 48 marcas radiales que gira una vuelta cada tres minutos detrás de los paneles',
            'Avisos apilados abajo, con un máximo de cuatro y barra de cuenta atrás; los de error no se cierran solos',
            'El icono de cada aviso se dibuja trazo a trazo midiendo su longitud real',
            'Entrada escalonada de 70 ms en las listas, hasta el octavo elemento',
            'El panel de marca y el formulario cruzan de lado al pasar de entrar a crear cuenta',
            'Los botones no crecen ni se mueven al pasar por encima; sólo cambian de color y se hunden un 1% al pulsarlos',
            'Todo el movimiento se apaga cuando el sistema pide movimiento reducido',
            'Treinta iconos de 24×24 dibujados a trazo dentro del propio código, sin librería externa',
          ],
        },
        {
          area: 'Puesta en marcha y despliegue',
          items: [
            'Un solo comando levanta la API y el frontend, busca puertos libres desde 3300 y 4200 y escribe el proxy',
            'La base y las tres tablas se crean solas al arrancar, y las columnas nuevas se añaden consultando el catálogo',
            'Las sesiones vencidas se borran en cada arranque',
            'Conexión a MySQL por variables sueltas o por una sola URL, según lo que haya en el entorno',
            'Modo celular: compila, crea un certificado propio para la IP de la red local y sirve por HTTPS',
            'Sin conexión con la API la bóveda se abre desde el espejo cifrado en IndexedDB, en sólo lectura y con aviso fijo',
            'Con la bóveda en sólo lectura se rechazan guardar, borrar, vaciar e importar',
            'Instalable como aplicación, con accesos directos a Nueva credencial y a Seguridad',
            'El service worker guarda el armazón para abrir sin red pero nunca toca /api, y prefiere siempre la respuesta de red',
            'Imagen Docker de dos etapas que corre como usuario sin privilegios y sirve la app compilada desde el propio Express',
          ],
        },
      ],
      carpetas: [
        {
          carpeta: 'src/',
          que_es: 'La aplicación Angular 22: pantallas, servicios y el sistema visual.',
          hijos: [
            {
              carpeta: 'app/core',
              que_es: 'el núcleo: criptografía, cliente de API, estado de la bóveda, generador, tema, avisos y el espejo de Dexie',
            },
            {
              carpeta: 'app/features',
              que_es: 'las cuatro pantallas más el armazón: unlock, shell, vault, entry y settings',
            },
            {
              carpeta: 'app/shared',
              que_es: 'piezas reutilizables: logo, treinta iconos, grabado, medidor de fuerza, campo de secreto y avisos',
            },
            {
              carpeta: 'styles.css',
              que_es: 'los tokens en OKLCH, los dos temas, las bandas, los botones y las animaciones',
            },
          ],
        },
        {
          carpeta: 'server/',
          que_es: 'La API en Express 5 sobre mysql2, sin dependencias de autenticación de terceros.',
          hijos: [
            {
              carpeta: 'app.mjs',
              que_es: 'las rutas, la validación de entrada y las cabeceras de seguridad',
            },
            {
              carpeta: 'auth.mjs',
              que_es: 'scrypt, sesiones, sal señuelo y el freno de fuerza bruta',
            },
            {
              carpeta: 'db.mjs',
              que_es: 'conexión, creación del esquema y migración de columnas al arrancar',
            },
            {
              carpeta: 'google.mjs',
              que_es: 'el flujo OAuth de Google, con state en cookie e intercambio servidor a servidor',
            },
            {
              carpeta: 'main.mjs',
              que_es: 'arranque: busca puerto libre, sirve el compilado y puede levantar HTTPS',
            },
          ],
        },
        {
          carpeta: 'scripts/',
          que_es: 'Dos utilidades de arranque, una para el escritorio y otra para el celular.',
          hijos: [
            {
              carpeta: 'dev.mjs',
              que_es: 'levanta API y frontend con un comando, escribe el proxy y relanza el dev server si se cae',
            },
            {
              carpeta: 'movil.mjs',
              que_es: 'compila, genera el certificado para la IP local y sirve por HTTPS en la red',
            },
          ],
        },
        {
          carpeta: 'public/',
          que_es: 'Lo que se sirve tal cual: instalación como aplicación, service worker y marca.',
          hijos: [
            {
              carpeta: 'manifest.webmanifest',
              que_es: 'nombre, iconos y los dos accesos directos de la aplicación instalada',
            },
            {
              carpeta: 'sw.js',
              que_es: 'caché del armazón, red primero, sin tocar /api y con borrado a petición de la app',
            },
            {
              carpeta: 'logo.svg',
              que_es: 'la marca en un solo trazado, la misma que dibuja el componente de logo',
            },
            {
              carpeta: 'avisos.html',
              que_es: 'página suelta para revisar los avisos en los dos temas',
            },
          ],
        },
        {
          carpeta: 'raíz',
          que_es: 'Configuración, empaquetado y los tres documentos que fijan producto, diseño y arranque.',
          hijos: [
            {
              carpeta: 'Dockerfile',
              que_es: 'dos etapas sobre node:22-alpine; compila y deja sólo servidor y compilado',
            },
            {
              carpeta: '.env.example',
              que_es: 'los datos de MySQL, el puerto inicial de la API y la llave de cliente de Google',
            },
            {
              carpeta: 'angular.json',
              que_es: 'compilación, tipografías locales y los topes de peso del paquete inicial',
            },
          ],
        },
      ],
      arquitectura: {
        resumen: 'Tres piezas: una aplicación Angular 22 standalone, una API en Express 5 y una base MySQL 8. Todo lo criptográfico ocurre en el navegador con Web Crypto: de la contraseña maestra salen una clave envolvente y un authHash, y sólo el segundo viaja. La clave que cifra las credenciales es aleatoria y se guarda dos veces envuelta, por la maestra y por el código de recuperación, de modo que el servidor tiene los bloques pero no puede abrirlos. La API valida tamaños y formatos, autentica contra un hash scrypt del authHash y escribe en tres tablas donde cada credencial es un iv más su contenido cifrado. En paralelo, IndexedDB mantiene un espejo de esos mismos bloques para abrir la bóveda sin red, siempre en sólo lectura. En desarrollo la API y el dev server de Angular corren en el mismo proceso con un proxy generado al vuelo; en producción una imagen Docker de dos etapas deja al propio Express sirviendo el compilado. Para abrir la app desde el celular hay un modo aparte que levanta HTTPS con certificado propio, porque sin contexto seguro el navegador no expone Web Crypto y no habría con qué cifrar.',
        capas: [
          {
            nombre: 'Navegador',
            piezas: [
              {
                nombre: 'Aplicación Angular',
                tecnologia: 'Angular 22 · signals · Tailwind CSS v4',
                que_hace: 'Cuatro pantallas standalone con carga diferida y una guarda que impide pintar nada con la bóveda cerrada. El estado de cuenta, clave y credenciales vive en un único servicio de signals.',
              },
              {
                nombre: 'Núcleo criptográfico',
                tecnologia: 'Web Crypto API · PBKDF2 · AES-GCM 256',
                que_hace: 'Deriva la clave envolvente y el authHash, envuelve y desenvuelve la clave de bóveda, y cifra o descifra cada credencial. La clave sólo existe en memoria mientras la bóveda está abierta.',
              },
              {
                nombre: 'Espejo cifrado',
                tecnologia: 'Dexie 4 · IndexedDB',
                que_hace: 'Guarda exactamente los mismos bloques cifrados que el servidor para abrir la bóveda sin red, en sólo lectura. Se borra entero al cerrar sesión.',
              },
              {
                nombre: 'Service worker',
                tecnologia: 'Cache Storage · red primero',
                que_hace: 'Guarda el armazón de la app para que abra sin conexión y deja pasar de largo todo lo que va a /api. Borra sus cachés cuando la app se lo pide al cerrar sesión.',
              },
            ],
          },
          {
            nombre: 'Servidor',
            piezas: [
              {
                nombre: 'API REST',
                tecnologia: 'Express 5 · mysql2',
                que_hace: 'Veintiuna rutas bajo /api. Valida longitudes en base64 antes de tocar la base, exige una cabecera propia en toda petición mutante y nunca devuelve el detalle de un error interno.',
              },
              {
                nombre: 'Sesión y credenciales',
                tecnologia: 'node:crypto · scrypt · cookies httpOnly',
                que_hace: 'Hashea el authHash con scrypt, guarda sólo el SHA-256 del token de sesión, responde sales señuelo para correos desconocidos y frena los intentos repetidos en memoria.',
              },
              {
                nombre: 'Arranque y empaquetado',
                tecnologia: 'Node 22 · Docker · OpenSSL',
                que_hace: 'Crea la base y migra el esquema al arrancar, busca puertos libres, sirve el compilado en producción y levanta HTTPS con certificado propio para el modo celular.',
              },
            ],
          },
          {
            nombre: 'Datos y terceros',
            piezas: [
              {
                nombre: 'MySQL',
                tecnologia: 'MySQL 8 · InnoDB · utf8mb4',
                que_hace: 'Tres tablas: cuentas con sus parámetros de derivación y claves envueltas, sesiones por hash de token, y credenciales como iv más contenido cifrado. Todo lo del usuario cae en cascada al borrar la cuenta.',
              },
              {
                nombre: 'Google',
                tecnologia: 'OAuth 2.0 · flujo de código',
                que_hace: 'Identifica la cuenta y nada más: el intercambio del código por el token se hace de servidor a servidor y la bóveda sigue pidiendo la contraseña maestra después.',
              },
            ],
          },
        ],
      },
      decisiones: [
        {
          titulo: 'La clave que cifra la bóveda no sale de la contraseña maestra',
          texto: 'Las credenciales se cifran con una clave AES-GCM aleatoria, no con la clave derivada de la maestra. Esa clave se guarda dos veces envuelta: una por la clave derivada de la maestra y otra por la derivada del código de recuperación. Cambiar la maestra pasa a ser reescribir 32 bytes envueltos en vez de descifrar y volver a cifrar la bóveda entera, y perder la maestra deja de ser perder los datos. El precio es que el servidor guarda dos envolturas de la misma clave: son bloques inútiles sin el secreto correspondiente, pero duplican la superficie de un ataque por fuerza bruta contra un volcado de la base.',
        },
        {
          titulo: 'Argon2id se descartó por no meter wasm en el núcleo criptográfico',
          texto: 'El coste en memoria de Argon2id lo haría preferible frente a un ataque con GPU, pero Web Crypto no lo expone y usarlo exigiría cargar una librería wasm de terceros justo en la parte del código que no puede fallar ni cambiar de manos. Se eligió PBKDF2-SHA256, que es nativo y auditable, compensando con 600.000 iteraciones. El servidor además rechaza cualquier alta con menos de 100.000, para que un cliente modificado no pueda rebajar el coste.',
        },
        {
          titulo: 'El servidor vuelve a hashear con scrypt algo que ya es un hash',
          texto: 'Lo que viaja al servidor es un authHash derivado de la maestra, así que en teoría bastaba con compararlo. Aun así se guarda hasheado otra vez, con scrypt N=32768, sal de 16 bytes por cuenta y salida de 32. La razón es que un volcado de la tabla users no debe servir ni para autenticarse: sin este paso, quien leyera la columna podría iniciar sesión reenviando el valor. Hubo que subir maxmem a 96 MB porque el límite por defecto de Node es justo 32 MB y rechazaría la operación con esos parámetros.',
        },
        {
          titulo: 'El anti-CSRF es una cabecera propia, no un token',
          texto: 'Toda petición que modifique algo debe traer X-Locknest-Client con valor 1; si no, se responde 403 antes de mirar la sesión. Un formulario o una imagen de otro sitio no pueden añadir cabeceras, así que junto a SameSite=Strict eso cierra el paso sin necesidad de generar, guardar y rotar tokens. La contrapartida es que cualquier cliente que no sea el frontend, incluida una prueba con curl, tiene que recordar la cabecera, y que el mecanismo depende de que el navegador respete la política de cabeceras en peticiones entre orígenes.',
        },
        {
          titulo: 'Tener sesión no abre la bóveda',
          texto: 'La cookie de sesión dura 7 días, pero al recargar la app arranca en estado bloqueado y vuelve a pedir la contraseña maestra. Es la consecuencia directa del modelo: la clave sólo existe en memoria, y no hay dónde dejarla que no sea un sitio donde otro programa pueda leerla. La guarda de ruta impide además que se pinte ninguna pantalla interna mientras esté cerrada. El coste es fricción real, escribir la maestra en cada recarga, y se compensa dejando el auto-bloqueo en 30 minutos en vez de los cinco que se probaron primero.',
        },
        {
          titulo: 'La API no revela qué correos están registrados',
          texto: 'La consulta previa que devuelve la sal responde siempre, exista o no la cuenta: para un correo desconocido devuelve una sal señuelo derivada del propio correo y de un secreto del servidor, indistinguible de una real y estable entre peticiones. Lo mismo hace la ruta de parámetros de recuperación, que además fabrica un IV y un bloque envuelto falsos. El detalle a tener en cuenta es que ese secreto se genera al arrancar el proceso, así que las sales señuelo cambian tras un reinicio; sólo afectan a correos que no existen.',
        },
        {
          titulo: 'El generador no tiene pantalla propia',
          texto: 'La ruta /app/generador existe pero redirige al formulario de credencial nueva: el generador vive como una banda dentro de ese formulario. La contraseña generada se necesita casi siempre en el momento de crear una entrada, y una pantalla aparte obligaría a llevarla de una vista a otra. Para el caso en que sí hace falta traspasarla queda un servicio en memoria que la entrega una sola vez, en lugar de pasarla por la URL, donde acabaría en el historial. El precio es que generar una contraseña suelta, sin guardarla, obliga a entrar al formulario.',
        },
        {
          titulo: 'El esquema se migra solo, consultando el catálogo de MySQL',
          texto: 'Al arrancar se crean la base y las tablas si no existen y se añaden las columnas que faltan. MySQL 8 no admite ADD COLUMN IF NOT EXISTS, así que se consulta information_schema antes de cada ALTER. Hay además un paso que afloja a NULL las columnas de cifrado que nacieron obligatorias, porque una cuenta creada con Google existe antes de que exista su bóveda. Es más código que un archivo de migraciones, pero evita añadir una herramienta y un paso manual a una app que se instala en la propia máquina.',
        },
        {
          titulo: 'Sin servidor la bóveda se abre, pero no se deja escribir',
          texto: 'IndexedDB guarda un espejo de los mismos bloques cifrados que hay en MySQL. Si la API no responde, la bóveda se abre desde ese espejo con un aviso fijo en la cabecera y todas las escrituras rechazadas: guardar, borrar, vaciar e importar. La alternativa sería una cola de cambios pendientes, y con ella la posibilidad de dos versiones de la misma credencial en dos dispositivos. Se prefirió que la fuente de verdad sea siempre MySQL y que sin él la app sirva sólo para consultar.',
        },
        {
          titulo: 'El service worker guarda el armazón y prefiere siempre la red',
          texto: 'Se cachean HTML, JS, CSS, iconos y tipografías, nunca nada de /api: una respuesta guardada de la API sería inútil y a la vez un sitio más donde quedarían restos. Además se sirve primero la red y sólo se recurre a la caché cuando no hay conexión, porque servir la caché primero deja la app anclada a la versión anterior y mezcla código nuevo con viejo. Al cerrar sesión la app le manda un mensaje para borrarlo todo, para que en un equipo compartido no quede ni el armazón con el nombre de la cuenta dentro.',
        },
        {
          titulo: 'Un ítem ilegible se omite en vez de romper la bóveda',
          texto: 'Al descifrar la lista, cada bloque va en su propio try: si uno no se puede abrir con la clave actual, se salta y el resto se muestra igual. Una bóveda que no abre por un solo registro corrupto es peor que una bóveda a la que le falta un registro. La contrapartida es que el fallo es silencioso: la credencial desaparece de la lista sin decir por qué, y sólo se nota al buscarla.',
        },
        {
          titulo: 'Para abrir la app desde el celular hay que servir HTTPS con certificado propio',
          texto: 'El navegador sólo expone Web Crypto en contexto seguro, así que por HTTP simple la app no puede cifrar y directamente no arranca. El comando de móvil compila, busca la primera IPv4 de red local descartando las interfaces virtuales de WSL, Docker e Hyper-V, y genera con OpenSSL un certificado válido para esa IP que se rehace si la red cambia. El precio es el aviso de certificado no confiable la primera vez, que hay que aceptar a mano en el teléfono.',
        },
        {
          titulo: 'La marca de conexión segura la decide ORIGIN, no req.secure',
          texto: 'Detrás de un proxy la petición llega al proceso como texto plano aunque el usuario esté navegando por https, y con req.secure la cookie de sesión saldría sin la marca secure. Por eso la decisión se toma mirando si ORIGIN empieza por https, con req.secure y NODE_ENV como respaldos. La cookie de state de Google es la excepción deliberada: va con SameSite=Lax y no Strict, porque la vuelta desde Google es una navegación de otro sitio y con Strict el navegador no la enviaría.',
        },
        {
          titulo: 'El dev server se relanza solo en lugar de tumbar la API',
          texto: 'Un único comando levanta las dos mitades, pero la API corre dentro del mismo proceso que lanza el dev server de Angular. Ese dev server se cae solo cuando vite reoptimiza dependencias, por ejemplo al instalar un paquete, y arrastraba consigo la API. Ahora se relanza hasta cinco veces seguidas y el contador se reinicia tras un minuto sin caídas, de modo que sólo se abandona ante un fallo persistente. También se escribe el archivo de proxy en cada arranque, con el puerto real que consiguió la API.',
        },
        {
          titulo: 'El Dockerfile se planta si el CSS compilado sale sin el tema',
          texto: 'Tailwind se engancha por .postcssrc.json. Si ese archivo no se copia a la imagen, la compilación termina correctamente pero el CSS sale sin utilidades ni variables y la app se ve entera sin estilos. Para que no vuelva a pasar en silencio, la etapa de construcción busca la variable de fondo dentro del CSS generado y falla con un mensaje explícito si no está. Es una comprobación tosca comparada con una prueba visual, pero cuesta una línea y ataca exactamente el fallo que ya ocurrió.',
        },
        {
          titulo: 'Nada de anillos de foco ni de sombras: separa el tono',
          texto: 'El sistema visual no usa bordes, sombras ni degradados; las superficies se distinguen sólo por escalones de tono en OKLCH y el foco se marca subiendo el fondo del campo un escalón. Los botones tampoco crecen al pasar por encima: cambian de color y se hunden un uno por ciento al pulsarlos. Esto mantiene la interfaz plana y silenciosa, que es lo que se quería para una app que se abre diez segundos y se cierra, pero se aleja de la convención del anillo de foco y obliga a que el contraste entre escalones esté bien medido para que el estado siga siendo evidente.',
        },
      ],
    },
  },
  {
    nombre: 'Confetti',
    color: '#F03E78',
    logo: '/logos/confetti.svg',
    stack: ['Astro 6', 'Svelte 5', 'PostgreSQL', 'TypeScript 6'],
    descripcion:
      'Agenda de cumpleanos, aniversarios y fechas propias: anotas el dia una vez y Confetti te avisa con la antelacion que elijas, a tu hora y en tu zona horaria, por correo, dentro de la app y como notificacion del celular aunque la tengas cerrada.',
    arquitectura:
      'Astro 6 con la salida en servidor y el adaptador de Node en modo standalone: cada pantalla llega ya pintada con sus datos resueltos contra PostgreSQL y encima se hidratan las islas de Svelte 5, que comparten un unico almacen con runes. Las consultas son SQL escrito a mano con postgres.js, sin ORM, y el esquema son seis migraciones numeradas que se aplican al arrancar el contenedor. El planificador de avisos vive en el propio proceso: cada hora dispara su mismo endpoint HTTP y manda correo por Resend y notificaciones Web Push firmadas con VAPID.',
    url: 'https://confetti.acmsy.com',
    captura: 'confetti',
    // Estetica y ficha larga sacadas del repositorio de la app.
    estetica: {
      google: 'Fredoka:wght@400;500;600;700&family=Nunito:wght@400;500;600;700;800',
      fuente: {
        titulo: '\'Fredoka\', \'Nunito\', system-ui, sans-serif',
        cuerpo: 'Nunito, system-ui, sans-serif',
        mono: '\'Fredoka\', ui-monospace, Consolas, monospace',
      },
      radio: '26px',
      curva: 'cubic-bezier(0.23, 1, 0.32, 1)',
      claro: {
        fondo: '#F5F3F4',
        sup: '#FFFFFF',
        texto: '#1D1719',
        suave: '#5A5155',
        acento: '#F03E78',
      },
      oscuro: {
        fondo: '#0F0D0E',
        sup: '#181617',
        texto: '#F5F2F3',
        suave: '#ABA3A7',
        acento: '#F03E78',
      },
    },
    detalle: {
      stackRoles: [
        {
          nombre: 'Astro 6',
          papel: 'El armazón. Catorce pantallas renderizadas en el servidor y diecinueve endpoints en el mismo proyecto.',
        },
        {
          nombre: 'Svelte 5',
          papel: 'La parte viva. Catorce componentes con runes, de los que cinco se hidratan como isla sobre el HTML del servidor y comparten un solo almacén.',
        },
        {
          nombre: 'PostgreSQL',
          papel: 'Los datos. Siete tablas con SQL escrito a mano sobre postgres.js y seis migraciones numeradas.',
        },
        {
          nombre: 'TypeScript 6',
          papel: 'El tipado. El preajuste estricto de Astro en el dominio, los endpoints y las islas, sin aflojar nada.',
        },
        {
          nombre: 'web-push',
          papel: 'Las notificaciones. Firmadas con VAPID y enviadas a cada dispositivo suscrito desde el propio proceso.',
        },
      ],
      unaFrase: 'Aplicación web instalable hecha con Astro 6 y Svelte 5 sobre PostgreSQL, donde guardas cumpleaños, aniversarios y fechas propias con solo el día y el mes (el año es opcional y es lo que permite contar la edad), ves el mes entero con cada fecha rodeada a mano como en un calendario de papel, y Confetti te avisa con los días de antelación que elijas, a la hora que elijas y en tu zona horaria, por tres canales que se encienden y se apagan por separado: dentro de la app, por correo y como notificación push que llega con la app cerrada.',
      porQueExiste: 'Los cumpleaños se recuerdan por delegación: los avisa una red social, o los avisa alguien de la familia. El día que dejas esa red, o el día que nadie avisa, la fecha simplemente pasa. Confetti parte de que el dato es minúsculo —un nombre, un día y un mes— y que lo difícil no es guardarlo, es que algo te lo recuerde con tiempo suficiente para hacer algo al respecto. De ahí sale todo el producto: una sola idea manda sobre las formas y el movimiento, el año en la pared, así que las fechas se marcan rodeadas a mano como en un calendario de papel, cuando hay algo que celebrar caen los banderines y se estampa el sello de la marca, y el correo de aviso no es una alerta sino una invitación, con su sobre, su estampilla y su matasellos. Dentro quedó lo que sostiene el hábito: tres tipos de fecha con su color propio, el año opcional que convierte el aviso en «cumple 32», el 29 de febrero celebrado el 28 en los años que no son bisiestos, la antelación por defecto de la cuenta y la propia de cada fecha, la hora del aviso y la zona horaria IANA, tres canales independientes, el mes entero en una hoja de seis semanas fijas, la vista de un día suelto, notas de hasta quinientos caracteres, entrada con correo y contraseña o con cuenta de Google, y la app instalable en el celular y en la PC. Fuera quedó todo lo que exigiría confiar en otro o cambiar de idea sobre qué es esto: no se importan contactos ni se sincroniza con ningún calendario externo, no se comparten fechas con otras personas ni hay grupos, no hay repeticiones distintas de la vuelta anual, no se adjuntan fotos ni listas de regalos, y no hay aplicación nativa. Ni el nombre ni el correo de la cuenta se pueden cambiar desde la interfaz, aunque la API acepte el nombre, y el modelo de tokens tiene previsto un enlace mágico para entrar sin contraseña que todavía no tiene ninguna pantalla que lo use.',
      funcionalidades: [
        {
          area: 'Cuenta y acceso',
          items: [
            'Registro con nombre de mínimo 2 caracteres, correo con arroba y contraseña de mínimo 8; el correo repetido sí se nombra, para que quien ya tiene cuenta no se quede atascado',
            'La contraseña se rechaza si pasa de 200 caracteres, si contiene la parte de tu correo anterior a la arroba o si está en una lista de obvias, entre ellas «confetti» y «cumpleanos»',
            'Sin reglas de mayúsculas ni símbolos a propósito: lo que se exige es longitud',
            'La zona horaria la detecta el navegador y viaja en un campo oculto del formulario; sin JavaScript la cuenta queda en UTC',
            'Entrada con Google por OAuth 2.0 con PKCE, alcance openid email profile, selector de cuenta forzado, y state y verifier en cookies de diez minutos',
            'La cuenta de Google se une por correo a una cuenta que ya exista, le marca el correo como verificado y le pone el avatar si no tenía',
            'Si el servidor no tiene credenciales de Google, el botón ni aparece y la ruta vuelve al login con un aviso en lugar de fallar',
            'Sesión de 30 días en cookie httpOnly, sameSite lax y secure cuando el origen es https, que se renueva sola al usarla si le quedan menos de 15',
            'Correo de bienvenida con enlace de confirmación válido 24 horas; abrirlo también abre sesión si no la tenías',
            'Recuperar contraseña en tres pasos, con enlace de 30 minutos y un solo uso; al guardar la nueva se cierran todas las sesiones abiertas',
            'Nunca se dice si un correo está registrado: pedir el enlace responde siempre lo mismo, y la pantalla de «revisa tu correo» solo repite la dirección si tiene forma de correo',
            'Mismo mensaje para cuenta inexistente, cuenta sin contraseña y contraseña equivocada',
            'Dos cerrojos en el login, veinte intentos por IP y cinco por cuenta cada quince minutos, más diez registros por hora desde la misma dirección',
            'Sin sesión la portada es el propio formulario de entrada, sin pantallas de relleno antes',
            'Cerrar sesión solo por POST y con token CSRF: con un GET bastaría una imagen apuntando ahí para echarte',
            'Ver u ocultar la contraseña desde el propio campo',
          ],
        },
        {
          area: 'Guardar una fecha',
          items: [
            'Tres tipos con su color propio: cumpleaños en rosa, aniversario en morado y otra fecha en verde azulado',
            'Día y mes obligatorios; el año es opcional y es lo que permite decir «cumple 32» o «7 años»',
            'Selector de día propio: un calendario de seis semanas fijas que empieza en lunes y no pide año, porque una fecha que se celebra vuelve cada año',
            'Los días que ya tienen otra fecha llevan un punto de su color dentro del selector',
            'En febrero de un año no bisiesto aparece un botón aparte para poder elegir el 29',
            'El año solo acepta dígitos, se recorta a cuatro y se rechaza si es futuro, si es anterior a 1900 o si no fue bisiesto cuando el día elegido es el 29 de febrero',
            'Antelación propia de la fecha entre el mismo día, 1, 3, 7 y 14 días; sin tocar nada hereda la de la cuenta',
            'Nombre de hasta 80 caracteres y notas de hasta 500',
            'Vista previa en vivo al lado del formulario: el día se rodea a mano mientras escribes, y una línea dice el día de la semana exacto en que saldrá el aviso y a qué hora',
            'Al guardar cae el sello de la marca sobre el día, vuelven a caer los banderines y la vista se va a Inicio con esa fecha ya elegida',
            'Si el sistema pide movimiento reducido, la vuelta a Inicio es inmediata en lugar de esperar la animación',
            'Borrar exige mantener presionado el botón 1,1 segundos, con el relleno avanzando mientras presionas y recogiéndose rápido al soltar; no hay diálogo de confirmación',
            'Todo borrado se puede deshacer desde el aviso: la fecha se vuelve a crear con los mismos datos',
            'Desde el calendario y desde un día libre, «añadir una fecha este día» abre el formulario con el día y el mes ya puestos',
            'Tope de 500 fechas por cuenta, y un freno de 60 escrituras por minuto',
            'El formulario también responde como POST clásico con su token CSRF, por si alguien llega sin JavaScript',
          ],
        },
        {
          area: 'Inicio: el escenario y el carril',
          items: [
            'Saludo según la hora de tu zona, con tu primer nombre',
            'Titular que cambia solo: lo que se celebra hoy, cuántas fechas hay en el mes, o «Tu año, a tiempo» si no hay nada',
            'Tres cifras que ruedan dígito a dígito al entrar, de derecha a izquierda: en 30 días, este mes y en total',
            'El escenario muestra el día en grande rodeado a mano, quién es, la edad que cumple, los días que faltan en un contador de rodillos, cuándo sale su aviso y la nota',
            'Si la fecha elegida es hoy caen los banderines y el sello de la marca se estampa al lado del número',
            'Cuando hay varias el mismo día, las demás salen como chips para saltar entre ellas',
            'Fila de los próximos siete días: cada uno es una hojita con la banda de su mes y su número, rodeado si tiene algo',
            'Tocar un día vacío de esa fila lo pone en el escenario y dice qué viene después y cuántos días más tarde',
            'El carril lateral lista todo lo que viene agrupado en Hoy, Esta semana, Este mes y Más adelante',
            'Buscador por nombre que ignora tildes, y filtro por tipo',
            'Solo las catorce primeras filas entran animadas: con cientos de fechas, animarlas todas bloquea el navegador',
            'El fondo del escenario se tiñe del color del tipo de la fecha elegida, y cambia con una transición al pasar a otra',
            'Las filas se deslizan a la izquierda para borrar, con resistencia pasado el umbral y descarte por velocidad si el gesto fue rápido',
            'Estado vacío con la marca y un botón para guardar la primera fecha',
            'En el celular el escenario y el carril se reparten en dos pestañas, y cada una cabe entera en la pantalla',
          ],
        },
        {
          area: 'Calendario y el día suelto',
          items: [
            'El mes entero en 42 celdas, seis semanas siempre, así la hoja nunca cambia de alto',
            'Cada fecha va rodeada a mano en su día, con hasta dos nombres en etiquetas de su color y un «+n» si hay más',
            'Los días de los meses vecinos que se ven en la rejilla también se marcan si tienen algo',
            'Al entrar al mes los círculos se dibujan en cascada, uno tras otro',
            'Tocar un día en la PC lo abre en el panel lateral sin salir del mes; en el celular abre su propia vista',
            'Deslizar con el dedo cambia de mes, pero solo si el gesto es claramente horizontal y rápido, para no confundirlo con tocar un día',
            'El mes y el año quedan en la dirección, así se puede recargar o compartir sin perder el sitio',
            'Botón «Hoy» que aparece solo cuando estás mirando otro mes',
            'La vista de un día trae el número en grande rodeado a mano, lo que se celebra con la edad de cada uno, y flechas para pasar al día anterior o al siguiente',
            'Un 29 de febrero se muestra el 28 en los años que no son bisiestos',
            'Una dirección de día inválida redirige al calendario en lugar de romperse',
          ],
        },
        {
          area: 'Avisos: antelación, hora y canales',
          items: [
            'Antelación por defecto de la cuenta entre el mismo día, 1, 3, 7 y 14 días, y cada fecha puede llevar la suya',
            'Hora del aviso de 0 a 23, elegida en una ventanita con las 24 horas repartidas en madrugada, mañana, tarde y noche',
            'Zona horaria de la lista completa que da el navegador, con buscador, un atajo a la del dispositivo y la hora que es allí ahora mismo, refrescada cada medio minuto',
            'Tres canales independientes con su propio interruptor: en la app, en este dispositivo y por correo',
            'Vista previa en vivo: un teléfono bloqueado con la hora elegida y la notificación tal como va a llegar, con el nombre de tu próximo cumpleaños de verdad',
            'Si están los tres apagados, la cabecera del panel lo dice sin rodeos',
            'Sin correo confirmado no sale ningún correo, y el propio interruptor ofrece reenviar el enlace, con tope de tres por hora',
            'Página de Avisos con el historial de lo que ya te avisamos y los próximos sesenta días de avisos pendientes, con el día de la semana en que saldrá cada uno',
            'Los avisos se leen antes de marcarlos, para que el titular pueda decir cuántos eran nuevos',
            'Contador de avisos sin leer en la navegación de escritorio y un punto en la pestaña del celular',
            'Tarjeta «Cómo te avisamos» con la antelación, la hora local y los canales encendidos',
            'Cada cambio se guarda al momento y lo confirma un aviso apilado',
            'Ruta protegida por un secreto para disparar la pasada a mano, con un parámetro que salta la comprobación de la hora',
          ],
        },
        {
          area: 'Los correos',
          items: [
            'El aviso es una invitación: arriba, en el tono del tipo de fecha, los banderines, el día rodeado con confeti a los lados y el titular; abajo, en blanco, la ficha con los datos, la nota y el botón',
            'Una tira de confeti de doce piezas, puntos y cuadrados alternando arriba y abajo, cierra la tarjeta al pie',
            'Tres paletas, una por tipo de fecha, cada una con su color de base, su color fuerte para texto y su fondo suave',
            'El asunto cambia según si la fecha es hoy, es mañana o faltan días',
            'Todo se arma con tablas y estilos en línea a propósito, para que aguante en Gmail, Apple Mail y Outlook',
            'Los correos de la cuenta usan la misma hoja: confirmación del correo y restablecimiento de contraseña',
            'Vista previa de los correos en una ruta que solo existe en desarrollo, con parámetros para ver cada tipo y cada momento',
            'Sin clave de Resend, en desarrollo el correo se imprime por consola en lugar de enviarse; en producción falta la clave y se lanza',
          ],
        },
        {
          area: 'Notificaciones push e instalación',
          items: [
            'Notificaciones que llegan con la app cerrada: el navegador despierta al service worker y él muestra el aviso',
            'Una fila por navegador o dispositivo, así el celular y la PC se activan cada uno por su lado',
            'Al activarlas se manda una de prueba al momento, con tope de cinco cada diez minutos',
            'El interruptor explica su estado: comprobando, apagadas, bloqueadas en los ajustes del navegador, sin soporte, o «añade Confetti a tu pantalla de inicio» en iPhone',
            'Si el servidor perdió la suscripción, al abrir Ajustes se vuelve a guardar sin duplicar nada',
            'Cada notificación lleva la etiqueta de su fecha: un aviso nuevo de la misma fecha reemplaza al anterior en vez de acumularse, y vuelve a sonar',
            'Tocarla trae al frente la pestaña abierta y la lleva a esa fecha; si no hay ninguna, abre una',
            'Se envían con urgencia alta y doce horas de vida, para despertar un Android en reposo profundo sin arrastrar avisos de días atrás',
            'Los endpoints que el servicio de push declara inexistentes o caducados se borran solos; cualquier otro error se conserva',
            'Instalable con manifiesto en español, arranque vertical en modo standalone, iconos normales y enmascarables, y dos atajos: añadir un cumpleaños y ver el calendario',
            'Pantalla propia de sin conexión, que el service worker descarga y guarda al instalarse',
            'El HTML nunca se guarda en caché: lleva datos de la sesión, y una copia podría enseñarle las fechas de alguien a quien comparta el dispositivo',
            'En desarrollo el service worker no se registra, y si quedó uno de antes se da de baja solo',
          ],
        },
        {
          area: 'Tema, movimiento y reglas de la casa',
          items: [
            'Tema claro, oscuro o el del sistema, elegido sobre tres vistas en miniatura de la propia app, con su día rodeado y todo',
            'El cambio de tema se revela en círculo desde el punto exacto que tocaste',
            'Botón de sol y luna en la cabecera que alterna entre claro y oscuro desde cualquier pantalla',
            'Si la preferencia es «sistema», el tema sigue en vivo los cambios del sistema operativo',
            'Ni el documento ni el cuerpo hacen scroll nunca: cada lista scrollea dentro de su recuadro y se corta limpia en el borde, sin desvanecidos ni desenfoques',
            'Sin bordes, sin sombras y sin degradados: las superficies se distinguen por capas de tono, y un solo acento manda',
            'Avisos apilados abajo, tres a la vista con su hueco, nunca encimados; la vida de cada uno es la barrita de abajo, que se pausa con el cursor encima o con la pestaña oculta',
            'Los avisos se descartan con la X o deslizándolos a la derecha, con resistencia si tiras al revés',
            'Navegación lateral desde 900 píxeles y barra inferior con botón flotante por debajo; el indicador activo se desliza entre secciones con las transiciones de vista',
            'En el acceso, al cambiar de pantalla la hoja del formulario y el escenario de la carta se cruzan de lado',
            'Cuatro escenas de la carta, una por momento: el sobre abriéndose al entrar, la carta escribiéndose al crear la cuenta (el «Para» se rellena con el nombre que teclees), el sobre cerrándose con el lacre al recuperar y el sobre volando al enviar el enlace',
            'Los círculos a mano se vuelven a dibujar en píxeles reales según la caja que rodean, así el trazo tarda lo mismo en el día del calendario y en el avatar',
            'Las filas de una lista entran en cascada y su hojita cae como un sello',
            'Los enlaces de texto desenrollan debajo una cinta ondulada, como la de un regalo',
            'Enlace para saltar al contenido con el teclado, y anillo de foco solo con teclado',
            'Todas las animaciones se anulan si el sistema pide movimiento reducido',
          ],
        },
      ],
      carpetas: [
        {
          carpeta: 'raíz',
          que_es: 'Un solo proyecto Astro 6, sin monorepo. Arriba viven la configuración, el sistema visual y la imagen de despliegue.',
          hijos: [
            {
              carpeta: 'astro.config.mjs',
              que_es: 'salida en servidor, el adaptador de Node en standalone, Svelte y Tailwind como plugins de Vite, y la comprobación de Origin de Astro desactivada a mano con el motivo escrito al lado',
            },
            {
              carpeta: 'src/styles/global.css',
              que_es: 'el sistema visual entero: los tokens de los dos temas, los controles, el círculo a mano, la hojita del día, los banderines y los avisos apilados',
            },
            {
              carpeta: 'src/middleware.ts',
              que_es: 'resuelve la sesión antes de cada petición, decide qué rutas son públicas, devuelve 401 en lugar de HTML a la API y estampa las cabeceras de seguridad',
            },
            {
              carpeta: 'Dockerfile',
              que_es: 'cuatro etapas sobre node:22-bookworm-slim, Debian y no Alpine para que Argon2 use sus binarios precompilados; corre como usuario sin privilegios en el puerto 3000',
            },
            {
              carpeta: 'tsconfig.json',
              que_es: 'el preajuste estricto de Astro, sin excepciones',
            },
          ],
        },
        {
          carpeta: 'src/pages/',
          que_es: 'Las catorce pantallas y los diecinueve endpoints; Astro los enruta por el nombre del archivo.',
          hijos: [
            {
              carpeta: 'index.astro',
              que_es: 'con sesión, el Inicio con su escenario y su carril; sin ella, la propia pantalla de entrada',
            },
            {
              carpeta: 'calendario.astro y dia/[fecha].astro',
              que_es: 'el mes entero y, en el celular, cada día en su propia vista con flechas para moverse',
            },
            {
              carpeta: 'nueva.astro y fecha/[id].astro',
              que_es: 'crear y editar, las dos con el mismo editor y la misma vista previa',
            },
            {
              carpeta: 'avisos.astro y ajustes.astro',
              que_es: 'el historial de avisos con lo que viene en sesenta días, y el perfil con la apariencia y los avisos',
            },
            {
              carpeta: 'api/',
              que_es: 'nueve rutas JSON: las dos de fechas, cuenta y verificación, las cuatro de push y la pasada de avisos',
            },
            {
              carpeta: 'sw.js.ts y manifest.webmanifest.ts',
              que_es: 'el service worker y el manifiesto, servidos desde el código con no-store para que ninguna caché se quede con una versión vieja',
            },
            {
              carpeta: 'robots.txt.ts, sitemap.xml.ts y llms.txt.ts',
              que_es: 'lo que leen buscadores y asistentes; solo la portada y el registro son públicos, el resto queda fuera',
            },
          ],
        },
        {
          carpeta: 'src/lib/',
          que_es: 'El dominio y los servicios. El mismo código corre en el servidor y en el navegador, así que los dos coinciden siempre.',
          hijos: [
            {
              carpeta: 'fechas/calculo.ts',
              que_es: 'cuándo toca cada celebración, en números de día y sin objetos con hora, para que el horario de verano no desplace un cumpleaños',
            },
            {
              carpeta: 'fechas/esquema.ts',
              que_es: 'el esquema de Zod en modo estricto, con el 31 de febrero y el 29 de un año no bisiesto rechazados a mano',
            },
            {
              carpeta: 'auth/',
              que_es: 'sesiones por cookie guardando solo el hash del token, tokens de un solo uso para el correo, Argon2id, el flujo de Google y las consultas de usuarios',
            },
            {
              carpeta: 'avisos/proceso.ts',
              que_es: 'a quién hay que avisar: recorre las cuentas, compara su hora local y manda por los tres canales, registrando cada envío',
            },
            {
              carpeta: 'push.ts y correo.ts',
              que_es: 'Web Push con VAPID, y los correos de Resend con la plantilla de invitación y la de la cuenta',
            },
            {
              carpeta: 'cliente/almacen.svelte.ts',
              que_es: 'el estado que comparten todas las islas, en runes, más la cola de los avisos apilados',
            },
            {
              carpeta: 'iconos.ts',
              que_es: 'los treinta iconos de trazo y el círculo a mano, todos con pathLength 100 para poder redibujarlos trazo a trazo',
            },
          ],
        },
        {
          carpeta: 'src/components/',
          que_es: 'Doce componentes de Astro para lo que no necesita vida y catorce de Svelte para lo que sí, de los que cinco se hidratan como isla. Ninguna librería de componentes de terceros.',
          hijos: [
            {
              carpeta: 'app/Inicio.svelte',
              que_es: 'el escenario con el día en grande y la semana, y el carril con buscador, filtro y grupos',
            },
            {
              carpeta: 'app/Calendario.svelte y app/SelectorDia.svelte',
              que_es: 'el mes de 42 celdas con su panel lateral, y la ventanita para elegir día y mes',
            },
            {
              carpeta: 'app/EditorFecha.svelte',
              que_es: 'el formulario con su vista previa en vivo, el sello al guardar y el borrado por presión mantenida',
            },
            {
              carpeta: 'app/Preferencias.svelte',
              que_es: 'apariencia y avisos: tema, antelación, hora, zona horaria y los tres canales con su muestra',
            },
            {
              carpeta: 'app/Circulo.svelte y app/Banderines.svelte',
              que_es: 'el círculo a mano que se mide solo, y los banderines colgados de un cordel de dos caídas',
            },
            {
              carpeta: 'SobreFrente.astro y PantallaAuth.astro',
              que_es: 'el sobre con estampilla y matasellos, y las cuatro escenas de la carta en las pantallas de acceso',
            },
          ],
        },
        {
          carpeta: 'migraciones/ y scripts/',
          que_es: 'Seis migraciones numeradas y las tareas de npm que las aplican, arrancan el servidor y prueban la app contra un servidor de verdad.',
          hijos: [
            {
              carpeta: '001 a 006',
              que_es: 'usuarios y sesiones, tokens de correo, fechas, preferencias y avisos enviados, los interruptores por canal y las suscripciones push',
            },
            {
              carpeta: 'migrar.mjs',
              que_es: 'espera a que Postgres acepte conexiones, aplica en una transacción las que falten y las registra en una tabla de control',
            },
            {
              carpeta: 'arrancar.mjs',
              que_es: 'levanta el servidor y programa la pasada de avisos cada hora, con medio minuto de margen al arrancar',
            },
            {
              carpeta: 'prueba-auth, prueba-crud, prueba-avisos, prueba-seguridad y smoke',
              que_es: 'cinco guiones que recorren la app de punta a punta, desde el registro hasta el borrado de la cuenta de prueba',
            },
            {
              carpeta: 'prueba-contraste.mjs',
              que_es: 'comprueba el contraste WCAG de cada combinación de color de los dos temas, calculando a mano las mezclas de color-mix',
            },
            {
              carpeta: 'generar-iconos.mjs y respaldar.sh',
              que_es: 'los PNG de la PWA a partir del SVG del icono, y el volcado de la base desde dentro del contenedor',
            },
          ],
        },
      ],
      arquitectura: {
        resumen: 'Un solo proyecto Astro 6 con la salida en servidor: la interfaz, los endpoints y el dominio viven en el mismo repositorio y en el mismo proceso. Cada pantalla se renderiza en el servidor con los datos ya resueltos contra PostgreSQL, y encima se hidratan solo las islas de Svelte 5 que necesitan vida; todas importan el mismo módulo de estado, así que deshacer un borrado desde el aviso hace que la fecha reaparezca en la lista sin recargar nada. Las consultas son SQL escrito a mano con postgres.js, sin ORM, y todas llevan el identificador del usuario en el filtro, porque sin seguridad a nivel de fila esa cláusula es lo único que separa dos cuentas. La sesión es un token opaco en cookie httpOnly del que la base solo guarda el hash SHA-256, y un middleware lo resuelve antes de cada petición, decide si la ruta es pública, devuelve JSON y no HTML a la API, y estampa las cabeceras de seguridad en toda respuesta. Los avisos salen del propio proceso: el guion de arranque dispara cada hora el mismo endpoint HTTP que se usaría a mano, y ese endpoint recorre las cuentas, compara la hora local de cada una con la que eligió, y manda correo por Resend y notificaciones Web Push firmadas con VAPID, registrando cada envío en una tabla con restricción única que hace que repetir la pasada no duplique nada. Todo se empaqueta en una imagen Docker de cuatro etapas sobre node:22-bookworm-slim que aplica las migraciones pendientes y después levanta el servidor en el puerto 3000, detrás del proxy Caddy del servidor acmsy.',
        capas: [
          {
            nombre: 'Cliente',
            piezas: [
              {
                nombre: 'Pantallas renderizadas',
                tecnologia: 'Astro 6 · SSR · CSS propio',
                que_hace: 'Catorce pantallas que llegan ya pintadas desde el servidor, con el tema resuelto antes del primer pintado. El sistema visual son variables CSS y clases escritas a mano, sin librería de componentes.',
              },
              {
                nombre: 'Islas de Svelte',
                tecnologia: 'Svelte 5 · runes',
                que_hace: 'Cinco islas se hidratan sobre ese HTML —Inicio, el calendario, el editor, las preferencias y la capa global de avisos— y dentro de ellas viven otros nueve componentes. Comparten un único módulo de estado, así que lo que una escribe lo ven las otras.',
              },
              {
                nombre: 'Service worker',
                tecnologia: 'escrito a mano · Web Push',
                que_hace: 'Precarga solo la pantalla sin conexión y guarda los estáticos con hash; el HTML, el manifiesto y la API van siempre a la red. Atiende el evento de push y el clic sobre la notificación.',
              },
            ],
          },
          {
            nombre: 'Servidor',
            piezas: [
              {
                nombre: 'Páginas y endpoints',
                tecnologia: 'Astro · adaptador de Node · TypeScript',
                que_hace: 'Las páginas resuelven sus datos en el servidor y las nueve rutas bajo /api responden JSON. Los formularios llevan token CSRF de doble envío y todo lo que cambia estado compara la cabecera Origin contra el origen configurado.',
              },
              {
                nombre: 'Middleware',
                tecnologia: 'middleware de Astro',
                que_hace: 'Resuelve la sesión de la cookie, redirige al login lo que no es público, marca como privada toda respuesta con sesión y estampa CSP, HSTS, permissions-policy y el resto. Si la base no responde, sigue como anónimo en vez de romper la página.',
              },
              {
                nombre: 'Capa de datos',
                tecnologia: 'postgres.js · SQL a mano',
                que_hace: 'Un pool de diez conexiones que se crea la primera vez que se usa, para que el build no necesite base. Cada consulta de fechas lleva el user_id en el filtro, incluidas las de borrado y actualización.',
              },
              {
                nombre: 'Planificador',
                tecnologia: 'setInterval en el proceso de arranque',
                que_hace: 'Cada hora, no una vez al día: así se respeta «las nueve de la mañana» de cada zona horaria. Dispara el endpoint HTTP normal para que la pasada automática y la manual recorran exactamente el mismo camino.',
              },
            ],
          },
          {
            nombre: 'Datos y servicios',
            piezas: [
              {
                nombre: 'PostgreSQL',
                tecnologia: 'postgres.js · uuid · timestamptz',
                que_hace: 'Siete tablas: usuarios con sus preferencias y su zona horaria, cuentas de Google, sesiones, tokens de correo, fechas, avisos enviados y suscripciones push, más la tabla de control de las migraciones.',
              },
              {
                nombre: 'Web Push',
                tecnologia: 'web-push · VAPID',
                que_hace: 'Una fila por navegador suscrito. Manda con urgencia alta y doce horas de vida, y borra por su cuenta los endpoints que el servicio declara inexistentes o caducados.',
              },
              {
                nombre: 'Resend',
                tecnologia: 'API de correo',
                que_hace: 'Los avisos como invitación y los correos de la cuenta. Sin clave, en desarrollo el correo se imprime por consola; en producción la falta de clave lanza un error en lugar de callar.',
              },
              {
                nombre: 'Google OAuth',
                tecnologia: 'OAuth 2.0 · PKCE · openid email profile',
                que_hace: 'Flujo escrito a mano sobre node:crypto y fetch. El correo es la llave que une la identidad con una cuenta que ya exista, y se comprueban emisor, destinatario y caducidad del id_token.',
              },
              {
                nombre: 'Despliegue',
                tecnologia: 'Docker · Caddy · IndexNow',
                que_hace: 'Imagen de cuatro etapas que migra y después arranca, detrás del proxy del servidor acmsy. Un guion avisa a los buscadores de IndexNow después de cada despliegue.',
              },
            ],
          },
        ],
      },
      decisiones: [
        {
          titulo: 'Se renderiza en el servidor, y solo lo que necesita vida se hidrata',
          texto: 'La configuración fija la salida en servidor porque hay sesiones y endpoints protegidos, así que cada pantalla llega con sus datos ya resueltos y sin pantallas de carga; encima se hidratan cinco islas de Svelte y nada más. El precio es el que trae ese reparto: las islas se hidratan por separado, así que el estado compartido tiene que vivir en un módulo aparte, y en el servidor un módulo sobrevive entre peticiones. La regla que lo sostiene está escrita en el propio archivo: en el almacén solo se escribe desde el navegador, y cada componente pinta con sus props hasta que el almacén está listo.',
        },
        {
          titulo: 'La comprobación de Origin del framework está apagada, y la suple el código',
          texto: 'Astro compara la cabecera Origin con el host de la petición, pero detrás del proxy ese host llega como el interno del contenedor y nunca como el dominio público, así que la comprobación rechazaba todos los envíos de formulario en producción con un 403. La protección no se pierde: los formularios comparan el Origin contra la variable del origen, que sí se conoce con certeza, y además exigen el token CSRF de doble envío; los endpoints hacen lo mismo en todo método que cambie estado. El precio es que la garantía ya no la da el framework, sino que depende de que cada ruta nueva llame a esas dos funciones.',
        },
        {
          titulo: 'Las fechas se calculan en números de día, nunca en objetos con hora',
          texto: 'Todo el cálculo son funciones puras sobre un número de día obtenido de una época fija, y el día de hoy se saca con el formateador de fechas en formato ISO sobre la zona de la persona. Así el horario de verano no puede desplazar un cumpleaños un día arriba o abajo, que es el error clásico de estas cuentas. El precio es que la escala del año se cuenta siempre sobre 365 días, sin contar el 29 de febrero: la posición de una fecha dentro del año se mueve un día en los bisiestos, algo que a simple vista no se aprecia pero que está ahí.',
        },
        {
          titulo: 'El 29 de febrero se celebra el 28, y es una decisión de producto',
          texto: 'En los años no bisiestos la celebración se adelanta al 28 en lugar de pasarla al 1 de marzo, porque mantenerla dentro de febrero es lo que la gente espera. La regla vive en una sola función y la usan la lista, el calendario, la vista del día y el proceso de avisos, así que los cuatro dicen lo mismo. El precio es que no se puede elegir: quien prefiera celebrarlo en marzo no tiene esa opción, y el único rastro de que la fecha se movió es una marca interna que la interfaz no muestra.',
        },
        {
          titulo: 'Un día imposible se rechaza tres veces: en el formulario, en el esquema y en la base',
          texto: 'El editor valida mientras escribes, el esquema de Zod lleva dos refinamientos (el día que no existe en ese mes, y el 29 de febrero de un año que no fue bisiesto) y la tabla tiene su propia restricción con un CASE por mes. Es a propósito: el 31 de febrero no debería poder existir ni llegando por la API ni entrando por SQL. El precio es la duplicación, porque la misma regla queda escrita en tres sitios y hay que acordarse de tocarlos juntos.',
        },
        {
          titulo: 'La idempotencia de los avisos es una restricción única, no una bandera',
          texto: 'La tabla de avisos enviados tiene una clave única sobre usuario, fecha, ocurrencia, canal y días de antelación, y el proceso inserta con «on conflict do nothing»: lo que decide si toca enviar es si el insert devolvió fila. Así la pasada se puede correr dos veces seguidas, o diez, sin que salga un segundo aviso. El precio es que el registro se escribe antes del envío, así que cuando el correo o el push fallan hay que borrar esa fila a mano para poder reintentar en la siguiente pasada, y eso es exactamente lo que hace el código.',
        },
        {
          titulo: 'La etiqueta del aviso anticipado es la antelación elegida, no los días que faltan',
          texto: 'Hay dos momentos posibles de aviso, el del propio día y el anticipado, y el anticipado se registra siempre con el número de días que eligió la persona. El motivo está escrito al lado: si se registrara con los días que faltan hoy, entrar en la ventana con 7, 6 y 5 días pendientes generaría tres avisos en lugar de uno. El precio es que cambiar la antelación de una fecha ya avisada crea una combinación distinta, así que esa fecha vuelve a avisar.',
        },
        {
          titulo: 'La pasada de avisos corre cada hora y desde dentro del propio contenedor',
          texto: 'No hay servicio de tareas programadas: el guion de arranque importa el servidor y, medio minuto después, empieza a disparar cada hora el mismo endpoint HTTP que se dispararía a mano, con la cabecera Origin puesta para no comerse el 403 de Astro. Cada hora y no una vez al día, porque solo así se respeta «las nueve de la mañana» de cada zona horaria. El precio es doble: con más de una instancia cada réplica correría su propia ronda, y sin el secreto del cron no se programa nada y nadie recibe avisos, algo que el propio guion advierte por consola al arrancar.',
        },
        {
          titulo: 'De los tokens, la base solo conoce su hash',
          texto: 'La cookie lleva un token opaco de 32 bytes y la tabla de sesiones guarda su SHA-256; lo mismo con los tokens que viajan por correo. Quien se lleve un volcado de la base no puede suplantar a nadie, porque necesitaría invertir el hash, y las comparaciones se hacen en tiempo constante. El precio es que una sesión concreta no se puede identificar ni listar desde la base: se puede borrar la que trae la cookie, o borrarlas todas, y nada más.',
        },
        {
          titulo: 'El token del correo se canjea al enviar el formulario, no al abrir la página',
          texto: 'La pantalla de contraseña nueva recibe el token en la dirección pero no lo toca hasta que se pulsa Guardar, con el motivo escrito encima: un escáner de enlaces del correo podría quemarlo antes de que llegue la persona. El canje es un update con «where usado_en is null», que marca y comprueba en una sola operación atómica, así que dos canjes simultáneos del mismo enlace no pueden ganar los dos. El precio es que el enlace parece válido hasta el final: el aviso de caducado llega después de escribir la contraseña, no al abrir la página.',
        },
        {
          titulo: 'Las contraseñas con Argon2id, y por eso la imagen es Debian',
          texto: 'El hash es Argon2id con los parámetros que recomienda OWASP, 19 MiB de memoria, dos iteraciones y paralelismo 1, y el identificador del algoritmo se escribe a mano en lugar de importar el enum de la librería porque es un const enum y el tsconfig estricto de Astro lo prohíbe. La consecuencia sale del lenguaje y llega al despliegue: la imagen se construye sobre Debian slim y no sobre Alpine, a propósito, para que el paquete nativo use sus binarios precompilados para glibc y no haya que compilar nada dentro del contenedor. El precio es una imagen más grande.',
        },
        {
          titulo: 'No se exigen mayúsculas ni símbolos: se exige longitud y que no sea una obviedad',
          texto: 'La revisión pide ocho caracteres como mínimo, rechaza lo que pase de doscientos, rechaza que la contraseña contenga la parte del correo anterior a la arroba y rechaza una lista corta de obvias, con «confetti» y «cumpleanos» entre ellas. El motivo está escrito: las reglas de composición empujan a la gente hacia contraseñas predecibles. El precio es que esa lista es fija y muy corta, no un diccionario, así que cualquier contraseña común que no esté escrita ahí entra sin más.',
        },
        {
          titulo: 'El OAuth de Google está escrito a mano, con PKCE',
          texto: 'El flujo se montó sobre node:crypto y fetch en lugar de usar una librería, con el motivo anotado en el archivo: las candidatas están marcadas como sin soporte en npm, y la capa de autenticación no debería depender de paquetes abandonados. La firma del id_token no se verifica, también con su justificación: llega por una conexión TLS directa con Google, en respuesta a una petición autenticada con el secreto de cliente; lo que sí se comprueba es emisor, destinatario y caducidad. El precio es que cualquier cambio del protocolo hay que seguirlo a mano.',
        },
        {
          titulo: 'El aislamiento entre cuentas es una cláusula WHERE, no una capa',
          texto: 'El archivo de consultas lo dice de entrada: sin seguridad a nivel de fila que cubra las espaldas, todas las funciones reciben el identificador del usuario y lo llevan en el filtro, incluidas las de borrado y actualización, que simplemente no afectan a ninguna fila si el registro es de otro. Y el 404 es el mismo si la fecha no existe y si es de otra persona, para que nadie pueda averiguar qué identificadores están ocupados. El precio es que la garantía depende de que ninguna consulta futura olvide ese filtro.',
        },
        {
          titulo: 'El límite de intentos vive en memoria del proceso',
          texto: 'Los contadores son un mapa de cubos que se barre cada media hora, y el login usa dos a la vez: uno por dirección IP, que frena a quien prueba muchas cuentas, y otro por cuenta, que frena a quien ataca una cuenta desde muchas direcciones. El propio archivo explica la apuesta: la app corre en un único contenedor, así que un mapa en memoria basta y evita una ida a la base en cada intento, y si algún día hay varias instancias esto tendrá que mudarse a Postgres o a Redis. El precio es que un reinicio del contenedor borra todos los contadores.',
        },
        {
          titulo: 'El service worker y el manifiesto se sirven desde el código, con no-store',
          texto: 'Los dos son endpoints y no archivos estáticos, para poder mandarlos sin caché: Cloudflare guarda los estáticos horas, y una app instalada que lee un manifiesto viejo al reinstalarse se queda con iconos y colores viejos. Al lado hay una regla que no se toca: el HTML de las páginas nunca se guarda en caché, porque lleva datos de la sesión y una respuesta guardada podría enseñarle a alguien las fechas de otra persona que use el mismo dispositivo. El precio es que sin conexión no hay fechas, solo la pantalla de cortesía.',
        },
        {
          titulo: 'Las fuentes se declaran a mano, con font-display block',
          texto: 'En lugar del CSS que trae el paquete de fuentes, el layout escribe sus propias caras con los rangos unicode y los ejes variables, las precarga y las declara con «block». El motivo está anotado: con «swap» el navegador pinta primero con la letra del sistema y luego salta a la definitiva, y en Inicio el día gigante, su círculo y el nombre cambiaban de tamaño a la vista. El precio es el habitual de «block», que hasta que llega la fuente no hay texto, más tener los rangos unicode copiados a mano en el archivo.',
        },
        {
          titulo: 'La etiqueta del color de la barra del sistema la crea un script, no el marcado',
          texto: 'Un script en línea del head lee la preferencia guardada, estampa el atributo del tema en el elemento raíz y después crea e inserta la etiqueta del color de la barra; a su lado, un bloque de estilo en línea pinta el fondo del tema desde el primer cuadro, antes de que llegue el CSS. Así no hay destello ni parpadeo de la barra de estado al cargar. El precio es que la misma lógica de tema queda repartida en tres sitios, el script, el estilo en línea y el módulo de cliente, y hay que tocarlos juntos.',
        },
        {
          titulo: 'El círculo a mano se vuelve a dibujar en píxeles reales',
          texto: 'El servidor lo pinta en una caja de cien por cien estirada, con un trazo que no se deforma: basta para verlo, pero no para animarlo, porque el guion del trazado se medía en esa caja y en los círculos grandes se quedaba corto. Un observador de tamaño mide la caja real y reescribe la ruta y el viewBox, así que el trazo se completa igual en el día de una celda del calendario y en el avatar de Ajustes. El precio son dos caminos para lo mismo: un observador global para los que pinta Astro, y el propio componente para los que pinta Svelte, porque Svelte volvería a escribir sus atributos.',
        },
        {
          titulo: 'Nada hace scroll salvo las listas, y en el celular cada vista cabe entera',
          texto: 'El CSS base pone alto completo y overflow oculto en el documento y en el cuerpo, y esconde todas las barras: el scroll vive dentro de contenedores concretos y el contenido se corta limpio en el borde, sin desvanecidos ni desenfoques. En el celular lo que en la PC va lado a lado se reparte en pestañas que solo cambian un atributo del contenedor, y cada página decide con CSS qué parte se ve. El precio se paga en los archivos de estilo: cada pantalla encadena a mano su cadena de flex con altura mínima cero, y en celulares bajos hay que elegir qué desaparece, así que por debajo de cierto alto el aviso y la nota se van de Inicio.',
        },
        {
          titulo: 'El diseño no usa bordes, así que el contraste es parte de las pruebas',
          texto: 'Las superficies se separan por capas de tono, de fondo a cuarta superficie, sin bordes, sombras ni degradados, y eso convierte el contraste en estructura: si un color no contrasta, no queda nada que separe un elemento de otro. Por eso hay una tarea de npm que comprueba cada combinación de los dos temas contra el umbral WCAG que le corresponde, y que calcula a mano las mezclas de color-mix igual que las calcula el navegador. El precio es que las paletas están escritas dos veces, en el CSS y en el guion, y cada color nuevo obliga a añadir su combinación o deja de estar cubierto.',
        },
        {
          titulo: 'El papel de la carta se queda claro también en modo oscuro',
          texto: 'El tema oscuro redefine todas las superficies menos una: el papel de la invitación y del sobre conserva su tono claro y su tinta oscura en los dos temas, con sus propias variables. La metáfora manda sobre la coherencia del tema, porque un sobre negro deja de leerse como un sobre. El precio es que en una pantalla oscura la invitación es la única superficie brillante, y en el acceso ocupa media pantalla.',
        },
        {
          titulo: 'La política de contenido admite scripts en línea, y queda anotado por qué',
          texto: 'La cabecera lleva «unsafe-inline» en los scripts, y el archivo lo llama por su nombre: es un compromiso consciente. Astro inyecta scripts en línea para hidratar las islas y para las transiciones de vista, y con «script-src self» a secas el navegador los bloquea y la app se queda sin nada interactivo; lo correcto serían hashes, que Astro sabe generar, pero en servidor con el adaptador de Node no llegó a emitir la política. El resto sigue cerrado: nada de objetos, nada de marcos, formularios y base solo al propio origen. El precio es que ese hueco queda abierto, apuntado como pendiente de revisar.',
        },
        {
          titulo: 'Las migraciones se aplican al arrancar el contenedor, una por transacción',
          texto: 'El arranque de producción corre primero el runner de migraciones: espera hasta treinta intentos a que Postgres acepte conexiones, aplica en orden los archivos que todavía no estén registrados y apunta cada uno en una tabla de control, cada migración dentro de su propia transacción para que un fallo a medias no deje la base en un estado intermedio. Así un despliegue nunca necesita pasos manuales sobre la base. El precio es que el arranque depende de la base, y que editar un archivo ya aplicado no cambia nada: todo cambio de esquema es un archivo nuevo.',
        },
        {
          titulo: 'Las preferencias de aviso son columnas de la tabla de usuarios',
          texto: 'La antelación por defecto, la hora local del aviso y los dos interruptores de canal van como columnas y no en una tabla aparte, con el razonamiento escrito en la propia migración: sería una relación uno a uno que además duplicaría la zona horaria, que ya vive ahí. El precio es que cada preferencia nueva es un ALTER TABLE sobre la tabla que más se lee, y que la fila de usuario crece con cada opción que se añada.',
        },
        {
          titulo: 'Borrar no deja papelera: deshacer vuelve a crear la fecha',
          texto: 'No hay columna de borrado lógico ni cesta: la fila se va de verdad. El editor guarda la fecha completa en el almacenamiento de la sesión antes de irse, e Inicio ofrece deshacerlo desde el aviso volviéndola a crear con los mismos datos. El precio es que vuelve con un identificador nuevo, y como los avisos enviados cuelgan de la fecha en cascada, los que ya se habían mandado se fueron con ella: el historial de Avisos pierde esas filas y no las recupera.',
        },
        {
          titulo: 'La cuenta de demostración se siembra con un generador de semilla fija',
          texto: 'Hay una tarea aparte que crea una cuenta llena a propósito para poder ver la app como se verá de verdad: listas largas, días con varias fechas, fechas sin año, un 29 de febrero, celebraciones hoy y mañana, notas largas y meses de historial de avisos. Si la cuenta ya existe se borra y se vuelve a crear, el azar sale de una semilla fija para que la demo sea siempre la misma, y el correo usa un dominio reservado que nunca recibe nada. El precio es que es una tarea manual contra la base, así que no comprueba nada: las pruebas de verdad son los cinco guiones que recorren la app por HTTP.',
        },
      ],
    },
    landing: '#',
  },
  {
    nombre: 'Markwell',
    color: '#BFA7F4',
    logo: '/logos/markwell.png',
    stack: ['Electron 41', 'React 19', 'TypeScript 6', 'TipTap 3'],
    descripcion:
      'Editor de notas de escritorio que trabaja sin conexion: escribes por bloques, dibujas en pizarras y encuentras cualquier apunte al instante, con un asistente que responde leyendo tus propias notas.',
    arquitectura:
      'Electron empaquetado con electron-vite y React con TypeScript. Todo vive en un SQLite local: busqueda por palabra con FTS5 y busqueda por significado con sqlite-vec sobre embeddings, de modo que encuentra una nota aunque no recuerdes como la titulaste. El editor por bloques es TipTap. La clave de la IA se guarda cifrada con safeStorage del sistema operativo, nunca en texto plano, y las versiones nuevas llegan solas con electron-updater.',
    url: 'https://markwell.acmsy.com',
    captura: 'markwell',
    landing: '#',
    // Estetica y ficha larga sacadas del repositorio de la app.
    estetica: {
      google: 'Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600',
      fuente: {
        titulo: '\'Plus Jakarta Sans\', \'Plus Jakarta Sans\', system-ui, -apple-system, \'Segoe UI\', sans-serif',
        cuerpo: '\'Plus Jakarta Sans\', \'Plus Jakarta Sans\', system-ui, -apple-system, \'Segoe UI\', sans-serif',
        mono: '\'JetBrains Mono Variable\', \'JetBrains Mono\', ui-monospace, monospace',
      },
      radio: '12px',
      curva: 'cubic-bezier(0.4, 0, 0.2, 1)',
      claro: {
        fondo: '#F7F8FB',
        sup: '#FFFFFF',
        texto: '#2A2F3A',
        suave: '#7C83A0',
        acento: '#BFA7F4',
      },
      oscuro: {
        fondo: '#16161A',
        sup: '#1E1E23',
        texto: '#ECECF1',
        suave: '#8A8A96',
        acento: '#BFA7F4',
      },
    },
    detalle: {
      stackRoles: [
        {
          nombre: 'Electron 41',
          papel: 'La ventana. Sin barra de título del sistema, con aislamiento de contexto y sandbox activos.',
        },
        {
          nombre: 'React 19',
          papel: 'La interfaz. Tres modos sobre una rejilla de columnas plegables, con el estado en Zustand.',
        },
        {
          nombre: 'TypeScript 6',
          papel: 'El contrato. Un archivo compartido declara los 70 canales con su petición y su respuesta.',
        },
        {
          nombre: 'TipTap 3',
          papel: 'El editor por bloques. Diecinueve extensiones, cuatro de ellas escritas a mano.',
        },
        {
          nombre: 'better-sqlite3 12',
          papel: 'Los datos. Un archivo SQLite en modo WAL, con FTS5 para la búsqueda por palabra.',
        },
        {
          nombre: 'sqlite-vec + Gemini',
          papel: 'El significado. Vectores de 3072 dimensiones en la misma base y el asistente que los usa.',
        },
      ],
      unaFrase: 'Aplicación de escritorio para Windows que guarda notas por bloques, pizarras y conversaciones en un único archivo SQLite local, con búsqueda por palabra (FTS5), búsqueda por significado (sqlite-vec) y un asistente de Gemini que lee tus propias notas.',
      porQueExiste: 'Un editor de notas decente suele exigir cuenta, sincronización y confianza en un servidor ajeno. Markwell hace lo contrario: todo vive en un archivo markwell.db dentro de la carpeta de datos del usuario y la aplicación funciona entera sin conexión. Sobre esa base añade lo que hace falta para que sea un cuaderno de trabajo y no una libreta suelta: carpetas anidables por modo, etiquetas con color e icono, papelera con deshacer, exportación a Markdown, HTML y PDF, y respaldos diarios automáticos. La IA es opcional y está deliberadamente aparte: la clave se guarda cifrada por el sistema operativo fuera de la base de datos y, si no la hay, la aplicación no abre ninguna conexión. Lo que quedó fuera también es explícito: no hay sincronización, no hay cuentas, no hay servidor propio salvo el que sirve el instalador, y las plantillas se retiraron con su propia migración porque no llegaban a guardar ninguna estructura.',
      funcionalidades: [
        {
          area: 'Ventana y arranque',
          items: [
            'Barra de título propia con el logo, el nombre, el acceso a ajustes y los botones de minimizar, maximizar y cerrar',
            'Una sola instancia: volver a abrir Markwell enfoca la ventana existente en lugar de abrir otra',
            'Al abrir se recuperan el último modo usado y la última nota o pizarra abierta',
            'Tres modos con atajo propio: Notas (Ctrl+1), Pizarras (Ctrl+2) e IA (Ctrl+3)',
            'Barra lateral y lista central plegables a un riel de 20 px, con el estado guardado entre sesiones',
            'Abrir la carpeta de datos o la de respaldos en el explorador del sistema desde la aplicación',
            'Si el arranque falla, el error se escribe en startup-error.log dentro de la carpeta de datos y se muestra en un diálogo del sistema',
          ],
        },
        {
          area: 'Carpetas, etiquetas y favoritos',
          items: [
            'Carpetas anidables sin límite de profundidad, con árbol plegable y línea de sangría por nivel',
            'Cada modo tiene su propio árbol: las carpetas de notas, las de pizarras y las de conversaciones no se mezclan',
            'Crear carpeta o subcarpeta escribiendo el nombre en la propia fila, eligiendo color en el mismo editor',
            'Renombrar una carpeta y cambiarle el color desde el menú contextual',
            'Doce colores pastel definidos en el tema; al crear una carpeta o una etiqueta se asigna uno rotando una lista corta',
            'Etiquetas con nombre, color e icono a elegir entre dieciocho',
            'Asignar y quitar etiquetas a la nota abierta desde chips bajo el título, con selector emergente',
            'Filtrar por etiqueta: la lista central pasa a mostrar solo las notas marcadas con ella',
            'Marcar como favorito notas, pizarras y conversaciones, con vista de favoritos en cada modo',
            'Mover una nota a otra carpeta arrastrándola sobre la carpeta, que se ilumina al pasar por encima',
          ],
        },
        {
          area: 'Editor por bloques',
          items: [
            'Encabezados de cuatro niveles, con los tres primeros en la barra, más párrafos, citas y separadores',
            'Listas con viñetas, numeradas y de tareas con casillas anidables que tachan el texto al marcarse',
            'Bloques de código con resaltado de sintaxis para diecisiete lenguajes, más texto plano, con selector de lenguaje en la barra',
            'Tablas de 3×3 al insertarse, con fila de encabezado, columnas redimensionables, fusión y división de celdas y alineación vertical por celda',
            'Avisos (callouts) que envuelven bloques con color pastel e icono: el nodo trae cuatro iconos y la barra inserta el de información',
            'Imágenes desde el disco, guardadas dentro de la nota como data URI',
            'Redimensionar la imagen con ocho tiradores: los de lado dejan el otro eje en automático y conservan la proporción, los de esquina fijan ambos lados',
            'Enlaces con rel noopener noreferrer y apertura en ventana nueva, con la URL pedida en un cuadro de diálogo',
            'Autoguardado 800 ms después de la última tecla, con volcado forzado al cambiar de nota, al cerrar la ventana y antes de exportar',
            'Indicador de estado del guardado: sin guardar, guardando, guardado con la hora o error',
            'El título es un campo grande sobre el editor; se renombra la nota al salir del campo',
            'Menú contextual del editor que cambia según el cursor esté dentro o fuera de una celda de tabla',
          ],
        },
        {
          area: 'Formato y tipografía',
          items: [
            'Negrita, cursiva, subrayado, tachado y código en línea',
            'Color de texto con seis muestras y selector HSV propio, con campo hexadecimal validado',
            'Resaltado con seis pasteles y color libre; el texto resaltado se fuerza a oscuro para que siempre contraste',
            'Treinta opciones de tipografía en el editor: la predeterminada, las cuatro empaquetadas con la aplicación y veinticinco del sistema',
            'Quince tamaños de letra entre 8 y 72 px, más la opción automática',
            'Alineación a izquierda, centro, derecha y justificado',
            'Cuatro tamaños base para el cuerpo de las notas, de Pequeño (0,85) a Grande (1,3)',
            'Tipografía de la interfaz configurable entre ocho opciones, independiente de la del editor',
          ],
        },
        {
          area: 'Búsqueda',
          items: [
            'Búsqueda global mientras escribes, con 180 ms de espera, sobre el título y el texto de todas las notas',
            'Los acentos se ignoran a los dos lados: la consulta se normaliza igual que el índice, así que escribir accion encuentra acción',
            'Cada palabra busca por prefijo; hasta doce términos por consulta, todos obligatorios',
            'Resultados ordenados por relevancia bm25, con el título pesando el doble que el cuerpo',
            'Fragmento de contexto de doce palabras con la coincidencia resaltada',
            'La búsqueda incluye la papelera y marca esos resultados con un distintivo',
            'Buscar dentro de la nota abierta con Ctrl+F, con contador X de Y y salto con Enter y Shift+Enter',
            'Las coincidencias se pintan con lavanda al 45 % de opacidad, así el resaltado que puso el usuario se sigue viendo por debajo; la coincidencia activa sube al 95 %',
            'Búsqueda por significado sobre trozos de nota vectorizados, activa cuando hay clave de IA configurada',
            'Paleta de comandos con Ctrl+K, con filtro difuso y comandos agrupados en Navegación, Crear, Vista, Ajustes, Datos e IA',
          ],
        },
        {
          area: 'Pizarras',
          items: [
            'Lienzo con trama de puntos que se desplaza arrastrando el fondo',
            'Zoom entre el 40 % y el 250 % con la rueda, centrado en el cursor, más botones de aumentar, reducir y restablecer',
            'Crear una tarjeta con doble clic en el punto exacto del lienzo donde pinchaste',
            'Editar la tarjeta con doble clic, con negrita, cursiva, subrayado y lista dentro de ella',
            'Guías de alineación e imantado a 6 px contra los bordes y los centros de las demás tarjetas',
            'Redimensionar la tarjeta desde la esquina inferior derecha, con mínimo de 140×100',
            'Ocho colores pastel por tarjeta, elegibles desde su propia paleta',
            'Conectar dos tarjetas entrando en modo conexión y pulsando una y luego otra',
            'Las conexiones se dibujan en ángulo recto con codo central y se borran pulsando el círculo del codo',
            'No se puede conectar una tarjeta consigo misma ni duplicar una conexión existente en ningún sentido',
            'Pizarras organizadas en sus propias carpetas, con favoritos y papelera',
          ],
        },
        {
          area: 'Asistente de IA',
          items: [
            'Asistente lateral dentro de una nota, que lee su texto hasta 16.000 caracteres',
            'Asistente lateral dentro de una pizarra, que lee el contenido de todas sus tarjetas numeradas',
            'Modo IA dedicado con historial: cada conversación se guarda con un título de tres a seis palabras generado por el modelo',
            'Las conversaciones se agrupan en carpetas propias y se renombran, se mueven, se marcan favoritas y se borran, estas sin pasar por la papelera',
            'Los asistentes laterales son efímeros y se avisa en el propio panel',
            'En el modo IA la pregunta se responde con fragmentos de tus notas: primero por vector, y si no hay embeddings, por texto completo',
            '/resumen resume la nota abierta en tres a cinco puntos, la pizarra por temas, o hasta sesenta notas de golpe en el modo IA',
            '/pizarra crea la pizarra de verdad, con entre cinco y nueve tarjetas de colores rotativos en rejilla de tres columnas y encadenadas entre sí',
            '/nota crea una nota nueva de al menos cuatrocientas palabras con secciones, listas y negritas',
            '/formato reordena la nota abierta en secciones con la instrucción explícita de no inventar datos ni perder cifras',
            'Escribir la barra abre un desplegable con los cinco comandos, navegación por flechas y Tab para autocompletar',
            'Comandos encadenables: /resumen y luego /pizarra o /nota usa la última respuesta como base',
            'Pedir una pizarra en lenguaje natural también la crea, mientras que las preguntas informativas quedan fuera del disparador',
            'Nueve acciones de IA desde la paleta de comandos sobre la selección del editor, o sobre el bloque donde está el cursor: mejorar, acortar, expandir, continuar, corregir gramática, tono formal, tono casual y traducir a inglés o a español',
            'Etiquetado automático de la nota: pide de una a cinco etiquetas, reutiliza las que ya existen y crea las que faltan',
            'La clave de Gemini se guarda cifrada por el almacén del sistema operativo, en un archivo aparte de la base de datos',
            'Sin clave configurada la aplicación funciona igual: el campo del chat queda deshabilitado y no se abre ninguna conexión',
            'Cinco modelos de Gemini en cadena: si el elegido responde 429 o 503 se prueba el siguiente, y cualquier otro error corta la cadena en el acto',
            'Tope de treinta peticiones por minuto y sesenta segundos de espera máxima por llamada',
          ],
        },
        {
          area: 'Papelera y recuperación',
          items: [
            'Nada se borra al primer clic: notas, carpetas, etiquetas y pizarras pasan por la papelera',
            'Cada envío a la papelera muestra un aviso con botón de deshacer',
            'Mandar una carpeta a la papelera arrastra sus subcarpetas y sus notas, sin cambiar dónde estaban guardadas',
            'La papelera muestra las carpetas como árbol, con sus notas dentro y el recuento por carpeta',
            'Restaurar una carpeta devuelve también todo su contenido de una vez',
            'Restaurar una nota suelta revive de paso las carpetas antecesoras que estaban en la papelera',
            'Eliminar para siempre pide confirmación en el propio aviso, con botón rojo y sin caducidad',
          ],
        },
        {
          area: 'Exportar, respaldar y actualizar',
          items: [
            'Exportar la nota abierta a Markdown, HTML o PDF, desde la cabecera o desde la paleta de comandos',
            'El diálogo de guardado propone el título de la nota limpio de caracteres inválidos y recortado a 120',
            'El HTML se exporta con su hoja de estilos embebida, así se ve bien abierto solo',
            'El PDF se imprime en A4 con márgenes de 0,6 pulgadas, con los fondos incluidos',
            'Respaldo automático si han pasado veinticuatro horas desde el último, lanzado en segundo plano al arrancar',
            'Se conservan los siete respaldos más recientes y el resto se borra solo',
            'Crear un respaldo a mano desde ajustes o desde la paleta, con el nombre y el peso a la vista',
            'Restaurar un respaldo reinicia la aplicación para copiarlo antes de abrir la base de datos',
            'El actualizador apunta a un servidor propio, no a GitHub Releases, y comprueba ocho segundos después de arrancar sin bloquear la ventana',
            'La descarga arranca sola al detectar una versión nueva, pero la instalación espera a que se pida; eso ya funciona en el proceso principal y aún no tiene pantalla que lo muestre',
          ],
        },
        {
          area: 'Apariencia y ajustes',
          items: [
            'Tema claro, oscuro o el del sistema, con una miniatura de cada uno para elegir',
            'Con el tema del sistema, el cambio del sistema operativo se aplica en vivo sin reiniciar',
            'Todas las preferencias se guardan en la base local, no en el navegador',
            'Muestrario de los doce pasteles con su nombre, explicando que la interfaz se mantiene neutra a propósito',
            'Ficha de almacenamiento con la ruta de la carpeta de datos y el nombre del archivo de base',
            'Tabla de atajos generales y del editor',
          ],
        },
      ],
      carpetas: [
        {
          carpeta: 'raíz',
          que_es: 'Configuración del empaquetado y del compilador. No hay código de la aplicación aquí.',
          hijos: [
            {
              carpeta: 'electron.vite.config.ts',
              que_es: 'las tres compilaciones (main, preload y renderer) con React y Tailwind',
            },
            {
              carpeta: 'electron-builder.yml',
              que_es: 'instalador NSIS, desempaquetado de binarios nativos y servidor de actualizaciones',
            },
            {
              carpeta: 'build/',
              que_es: 'el icono de la aplicación en svg, ico y ocho png',
            },
          ],
        },
        {
          carpeta: 'src/main/',
          que_es: 'El proceso principal: lo único con acceso al disco, a la base de datos y a la red.',
          hijos: [
            {
              carpeta: 'db/',
              que_es: 'apertura de SQLite con sus pragmas, las doce migraciones y el contenedor de dependencias',
            },
            {
              carpeta: 'repositories/',
              que_es: 'seis repositorios: carpetas, notas, etiquetas, pizarras, conversaciones y ajustes',
            },
            {
              carpeta: 'services/',
              que_es: 'búsqueda, embeddings, cliente de Gemini, secretos cifrados, exportación, respaldos y actualizaciones',
            },
            {
              carpeta: 'ipc/register.ts',
              que_es: 'el registro de los manejadores, con validación del payload en la frontera',
            },
          ],
        },
        {
          carpeta: 'src/renderer/',
          que_es: 'La interfaz React: veintisiete componentes, el editor y el estado.',
          hijos: [
            {
              carpeta: 'components/',
              que_es: 'barra lateral, listas, lienzo de pizarras, panel de chat, paleta de comandos y ajustes',
            },
            {
              carpeta: 'editor/',
              que_es: 'TipTap: extensiones, autoguardado, imagen redimensionable, aviso y resaltado de búsqueda',
            },
            {
              carpeta: 'ai/',
              que_es: 'el estado del chat, los comandos con barra y las acciones de IA sobre el editor',
            },
            {
              carpeta: 'styles/theme.css',
              que_es: 'los tokens del diseño: neutros por tema, doce pasteles y todo el estilo del editor',
            },
            {
              carpeta: 'store.ts',
              que_es: 'el estado global en Zustand: modo, carpetas, notas, tema y plegados',
            },
          ],
        },
        {
          carpeta: 'src/preload/ y src/shared/',
          que_es: 'El único puente entre la ventana y el proceso principal, y el contrato que los tres importan igual.',
          hijos: [
            {
              carpeta: 'preload/index.ts',
              que_es: 'expone un invoke genérico y dos suscripciones; nada más cruza la frontera',
            },
            {
              carpeta: 'shared/ipc.ts',
              que_es: 'los setenta canales con su petición y su respuesta tipadas',
            },
            {
              carpeta: 'shared/models.ts',
              que_es: 'los objetos que cruzan: nota, carpeta, etiqueta, pizarra y conversación',
            },
            {
              carpeta: 'shared/validation.ts',
              que_es: 'cincuenta y cuatro esquemas zod, uno por canal validado, aplicados antes de entrar al manejador',
            },
          ],
        },
      ],
      arquitectura: {
        resumen: 'Tres procesos y un archivo. El proceso principal de Electron abre markwell.db con better-sqlite3 en modo WAL, aplica las doce migraciones por user_version y carga la extensión sqlite-vec; ahí viven los seis repositorios, la búsqueda FTS5, los embeddings, la exportación, los respaldos y el cliente de Gemini. La ventana corre React 19 con aislamiento de contexto, sandbox y sin integración de Node: no puede leer un archivo ni abrir la base. Entre los dos hay un preload que expone exactamente tres cosas: un invoke genérico, una suscripción a eventos de la aplicación y otra al flujo de la IA. Los 70 canales se declaran una sola vez en src/shared/ipc.ts, y cincuenta y cuatro de ellos se validan con zod justo antes de entrar a su manejador. Solo dos servicios salen a la red: el de Gemini, hacia generativelanguage.googleapis.com, y el actualizador, contra el mismo dominio desde el que se descarga el instalador. Todo lo demás ocurre en el equipo. electron-vite compila las tres partes y electron-builder genera un instalador NSIS para Windows que desempaqueta los binarios nativos fuera del asar.',
        capas: [
          {
            nombre: 'Ventana',
            piezas: [
              {
                nombre: 'Interfaz React',
                tecnologia: 'React 19 · Zustand · Tailwind v4 · Radix',
                que_hace: 'Tres modos sobre una rejilla de columnas plegables. Dos estados separados: el de la aplicación y el de los chats.',
              },
              {
                nombre: 'Editor por bloques',
                tecnologia: 'TipTap 3 · ProseMirror · lowlight',
                que_hace: 'Diecinueve extensiones. El aviso, la imagen redimensionable, la celda con alineación vertical y el resaltado de búsqueda están escritos a mano.',
              },
              {
                nombre: 'Lienzo de pizarras',
                tecnologia: 'React · SVG · eventos de puntero',
                que_hace: 'Desplazamiento y zoom por transformación CSS, imantado contra las demás tarjetas y conexiones dibujadas en ángulo recto.',
              },
            ],
          },
          {
            nombre: 'Puente',
            piezas: [
              {
                nombre: 'Preload',
                tecnologia: 'contextBridge · contextIsolation · sandbox',
                que_hace: 'Expone un invoke genérico y dos suscripciones. Ninguna otra parte del sistema es visible desde la ventana.',
              },
              {
                nombre: 'Contrato compartido',
                tecnologia: 'TypeScript 6 · zod 4',
                que_hace: 'Los 70 canales con sus tipos, y cincuenta y cuatro esquemas de validación que corren en el proceso principal.',
              },
            ],
          },
          {
            nombre: 'Proceso principal',
            piezas: [
              {
                nombre: 'Repositorios',
                tecnologia: 'better-sqlite3 12 · SQL a mano',
                que_hace: 'Carpetas, notas, etiquetas, pizarras, conversaciones y ajustes. Borrado suave y restauración en cadena.',
              },
              {
                nombre: 'Servicios',
                tecnologia: 'Electron 41 · fs y fetch de Node',
                que_hace: 'Búsqueda FTS5, embeddings, exportación a Markdown, HTML y PDF, respaldos por VACUUM INTO y actualizaciones.',
              },
              {
                nombre: 'Secretos',
                tecnologia: 'safeStorage (DPAPI en Windows)',
                que_hace: 'Cifra la clave de Gemini en un archivo dentro de la carpeta de datos, fuera de la base y fuera de los respaldos.',
              },
            ],
          },
          {
            nombre: 'Datos y servicios externos',
            piezas: [
              {
                nombre: 'SQLite local',
                tecnologia: 'WAL · FTS5 · vec0',
                que_hace: 'Trece tablas en un solo archivo: los datos, el índice de texto espejado por triggers y los vectores de 3072 dimensiones.',
              },
              {
                nombre: 'Gemini',
                tecnologia: 'API de Google Generative AI',
                que_hace: 'Genera respuestas y embeddings. Cinco modelos en cadena, con reintento automático ante saturación o cuota agotada.',
              },
              {
                nombre: 'Servidor de descargas',
                tecnologia: 'electron-updater · provider generic',
                que_hace: 'Sirve el instalador y el latest.yml desde markwell.acmsy.com. Sin GitHub Releases de por medio.',
              },
            ],
          },
        ],
      },
      decisiones: [
        {
          titulo: 'La ventana no puede tocar el disco ni la base de datos',
          texto: 'El BrowserWindow se crea con contextIsolation en true, sandbox en true y nodeIntegration en false. El preload expone exactamente tres funciones y nada más: un invoke genérico y dos suscripciones. Cualquier lectura o escritura, incluido abrir la carpeta de datos o guardar un archivo exportado, tiene que pasar por un canal con nombre. El precio es real: añadir una función cuesta un canal, un esquema de validación y un manejador, y no hay forma de resolver nada rápido desde la interfaz.',
        },
        {
          titulo: 'Los 70 canales se declaran una sola vez y los tres procesos importan el mismo archivo',
          texto: 'src/shared/ipc.ts define el objeto Channels y una interfaz IpcApi que asocia a cada canal la forma de su petición y de su respuesta. El envoltorio ipc() del renderer infiere ambos tipos a partir del nombre del canal, así que renombrar uno rompe la compilación en vez de fallar en tiempo de ejecución. La contrapartida es que cualquier cambio en el contrato recompila las tres partes, y que el archivo se ha convertido en el punto de mayor tráfico del repositorio. La regla tiene una fuga: seis manejadores de ventana y de shell (minimizar, maximizar, cerrar, abrir la carpeta de datos, abrir la de respaldos y abrir un enlace externo) se registran a mano en index.ts, fuera del contrato y sin tipo compartido.',
        },
        {
          titulo: 'El payload se valida en la frontera IPC, no dentro del repositorio',
          texto: 'El registrador envuelve cada manejador con un parse de zod que se ejecuta antes de que el código de negocio vea nada. Los repositorios reciben datos ya limpios y no repiten comprobaciones. La consecuencia menos obvia es que un canal sin entrada en la tabla de validadores deja pasar el payload crudo: la búsqueda del esquema es opcional y, si no lo encuentra, entrega el objeto tal cual. Por eso la tabla es tan importante como los propios manejadores, y hoy cubre cincuenta y cuatro de los setenta canales.',
        },
        {
          titulo: 'El índice de búsqueda no guarda el texto: lo espeja con triggers',
          texto: 'notes_fts es una tabla FTS5 external-content apuntando a notes por rowid, con tres triggers que insertan, borran y reinsertan en cada escritura. Así no se duplica el contenido de cada nota en disco. El precio es que el índice depende de que toda escritura pase por la tabla notes: cualquier atajo que modificara el texto por otra vía dejaría la búsqueda desincronizada sin avisar.',
        },
        {
          titulo: 'La consulta del usuario se reescribe antes de llegar a FTS5',
          texto: 'toFtsQuery pasa el texto a minúsculas, normaliza en NFKD y quita los diacríticos para coincidir con el remove_diacritics 2 del índice, parte por cualquier cosa que no sea letra o número, descarta los fragmentos de un solo carácter, se queda con los doce primeros y los une con AND, cada uno entre comillas y con asterisco de prefijo. Sin esa reescritura, un apóstrofo o un guion rompería la sintaxis de MATCH. El costo está en el descarte: buscar una sola letra, o una frase entera de palabras de un carácter, devuelve cero resultados en vez de un error. Además el orden lo pone bm25 con el título pesando el doble que el cuerpo: una nota que se llama como lo buscado gana a otra que solo lo menciona.',
        },
        {
          titulo: 'Los embeddings se generan después de guardar y su fallo no se propaga',
          texto: 'El manejador de notes:save escribe en SQLite, devuelve la respuesta y solo entonces programa la indexación con setImmediate, envuelta en un catch vacío. Si Gemini no responde, si no hay clave o si un trozo devuelve un vector de dimensión distinta a 3072, ese trozo se omite, la nota ya está en disco y la interfaz nunca se entera. La contrapartida es que la búsqueda por significado va siempre un paso por detrás del texto y puede quedar incompleta sin que nada lo señale.',
        },
        {
          titulo: 'La búsqueda por significado cae a texto completo cuando no hay vectores',
          texto: 'En el modo IA, la pregunta se convierte en vector y se buscan los seis trozos más cercanos con sqlite-vec. Si no hay ninguno, porque nunca se indexó nada o porque no hay clave, la misma función repite la búsqueda con FTS y usa esos resultados como contexto. El asistente responde con tus notas desde el primer día, aunque la parte semántica esté vacía. La diferencia se nota en el grano: por vector llegan trozos de unos 600 caracteres ya recortados al tema, mientras que por FTS llega el principio de cada nota cortado a 1200, con mucho relleno alrededor de la respuesta.',
        },
        {
          titulo: 'La tabla de vectores se recrea en vez de convertirse',
          texto: 'La migración 010 hace DROP y vuelve a crear note_chunk_vectors con 3072 dimensiones. Es una migración defensiva: una versión anterior de la 009 dejaba la tabla en 768, y una base creada entonces se quedaría con vectores del tamaño equivocado. Convertir vectores de un modelo a otro no significa nada, así que se descartan y se regeneran solos en el siguiente guardado de cada nota. Es destructiva a propósito, y está documentada como tal en el propio archivo.',
        },
        {
          titulo: 'La clave de la IA vive cifrada fuera de la base de datos',
          texto: 'safeStorage cifra la clave y la escribe en <userData>/secrets/gemini.bin, no en SQLite. La razón es concreta: los respaldos se hacen copiando la base, y si la clave estuviera dentro viajaría en cada copia. Al arrancar, si existe un archivo .local-secrets/gemini.key en texto plano, se importa una vez, se cifra y se borra el original. El agujero que queda a la vista es que los canales ai:setKey y ai:setModel están implementados en el proceso principal pero ninguna pantalla los llama todavía: los avisos remiten a Ajustes, IA, y esa sección aún no existe.',
        },
        {
          titulo: 'Si el modelo responde 429 o 503 se prueba el siguiente de la cadena',
          texto: 'Hay cinco modelos de Gemini ordenados por preferencia y el elegido por el usuario va primero. Ante saturación o cuota agotada se pasa al siguiente y, si hubo cambio, el primer trozo de la respuesta avisa cuál se acabó usando. Cualquier otro error, como una clave inválida o un 403, aborta de inmediato en lugar de recorrer la cadena entera repitiendo el mismo fallo cinco veces. Los modelos ya retirados se migran en silencio al actual al leer la preferencia.',
        },
        {
          titulo: 'El streaming está implementado en el proceso principal pero la interfaz no lo usa',
          texto: 'AiService.chatStream lee la respuesta como SSE y va enviando cada trozo por el canal ai:stream, y el preload expone onAiStream para escucharlo. Sin embargo, todo el flujo de chat del renderer llama a ai:generate y escribe la respuesta de golpe. Es deuda visible: la mitad cara está construida, y falta conectarla.',
        },
        {
          titulo: 'El prompt del sistema tiene prohibido pedir JSON',
          texto: 'El comentario que encabeza el archivo de acciones lo dice sin rodeos: cuando el prompt general pedía JSON, el modelo lo devolvía en cualquier conversación y el usuario veía un bloque crudo en vez de una respuesta. La creación de pizarras y notas se hace con prompts aparte, cada uno con su propia instrucción de sistema. Aun así, si en una respuesta normal llega un bloque JSON con dos o más elementos, se materializa como pizarra real en lugar de mostrarlo tal cual.',
        },
        {
          titulo: 'La intención de crear se detecta con reglas, no preguntándole al modelo',
          texto: 'Antes de mandar nada a Gemini, dos funciones deciden si la frase es una orden de crear una pizarra o una nota. Exigen un verbo de creación antes del sustantivo, a menos de sesenta caracteres de distancia, descartan de entrada las preguntas informativas y ceden la una a la otra si entre medias aparece la palabra contraria. Es una llamada menos y una respuesta instantánea, pero son expresiones regulares en español: en otro idioma el disparador no salta.',
        },
        {
          titulo: 'El contexto que lee la IA sale del texto plano de la base, no del editor',
          texto: 'Cada nota guarda dos representaciones: el JSON de ProseMirror y el texto plano que produce el editor al guardar. Todo lo que consume la IA usa el texto plano leído de SQLite, porque el editor abierto puede estar en otra nota o no estar montado. Solo si ese campo está vacío se mira el editor, y el comentario deja escrito el riesgo de esa vía: leer el texto de la nota equivocada.',
        },
        {
          titulo: 'Nada se borra al primer clic y restaurar no mueve nada de sitio',
          texto: 'Notas, carpetas y etiquetas tienen deleted_at en vez de desaparecer. Al mandar una carpeta a la papelera se marcan ella, sus descendientes y sus notas vivas, pero no se toca folder_id: al restaurar, todo vuelve exactamente donde estaba. Restaurar una nota suelta revive además la cadena de carpetas antecesoras que estuvieran en la papelera, porque si no reaparecería en un sitio invisible. La confirmación del borrado definitivo es un aviso sin caducidad con botón rojo, no un modal que bloquee la aplicación.',
        },
        {
          titulo: 'Los respaldos se hacen con VACUUM INTO y la restauración ocurre antes de abrir la base',
          texto: 'VACUUM INTO produce una copia atómica y compactada sin arrastrar los archivos WAL, cosa que copiar el .db a mano no garantiza. Restaurar no se intenta en caliente: se escribe un archivo restore-pending.txt, la aplicación se relanza y en el arranque siguiente, antes de abrir SQLite, se copia el respaldo encima y se borran los -wal y -shm huérfanos para que la base no se recomponga desde un diario viejo. El costo es que restaurar siempre implica reiniciar, sin excepción.',
        },
        {
          titulo: 'La actualización se descarga sola, pero no se instala sola',
          texto: 'autoDownload está en false y la descarga se dispara solo cuando ya se sabe que hay versión nueva, para que Reiniciar e instalar sea inmediato cuando el usuario lo pida. El comentario del servicio explica el porqué: bajar cien megas por sorpresa en la conexión de alguien es exactamente lo que esta aplicación no hace. El proveedor es generic contra el propio dominio, y en desarrollo el actualizador se declara no soportado porque no hay nada empaquetado que reemplazar. Lo que falta es el otro extremo: el servicio emite su estado por el canal de eventos, pero ninguna pantalla se suscribe todavía, así que hoy el usuario no ve el aviso.',
        },
        {
          titulo: 'Los binarios nativos salen del asar y su ruta se reescribe en caliente',
          texto: 'better-sqlite3 y sqlite-vec se declaran en asarUnpack porque un módulo nativo no se puede cargar desde dentro del archivo empaquetado. Además, la ruta que devuelve sqlite-vec apunta a app.asar y se reescribe con una sustitución a app.asar.unpacked justo antes de loadExtension. Sin esas dos piezas la aplicación instalada arranca y muere al abrir la base, aunque en desarrollo funcione perfectamente.',
        },
        {
          titulo: 'Las migraciones se aplican por versión y además se auto-reparan',
          texto: 'El migrador recorre las doce migraciones en una transacción y sube user_version tras cada una. Encima de eso, una función idempotente comprueba que ai_conversations.folder_id exista y la añade si falta, porque hubo versiones que dejaron grabada la versión y fallaron en el ALTER. Es un parche con nombre y motivo escrito, no una comprobación decorativa.',
        },
        {
          titulo: 'La interfaz no tiene color de acento: el color lo pone el usuario',
          texto: 'No hay ningún token de acento en el tema. El botón primario es el propio color del texto sobre la superficie, y los doce pasteles solo aparecen en lo que el usuario decide colorear: carpetas, etiquetas, avisos, resaltados y tarjetas. La sección de ajustes lo dice explícitamente al mostrar la paleta. La consecuencia es que dos instalaciones de Markwell se ven distintas sin haber cambiado ni un ajuste de apariencia.',
        },
        {
          titulo: 'En la pizarra, el arrastre se divide por el zoom y el imantado compara tres bordes por eje',
          texto: 'Las deltas del puntero se dividen por el nivel de zoom antes de aplicarse, porque si no la tarjeta se movería más o menos que el ratón según cuánto hubieras acercado. El imantado toma los tres bordes horizontales de la tarjeta (izquierdo, centro y derecho) y los compara con los tres de cada vecina, nueve combinaciones por eje, con seis píxeles de tolerancia, y dibuja la guía del primer par que encaje. La posición se persiste con 350 ms de retardo mientras editas, pero al soltar se guarda de inmediato.',
        },
        {
          titulo: 'El exportador recorre el árbol de TipTap a mano en vez de llevar ProseMirror al proceso principal',
          texto: 'El documento ya es JSON, así que los serializadores a Markdown y a HTML son funciones puras que recorren nodos y marcas conocidos e ignoran cualquier otro en lugar de fallar. Eso permite además probarlos fuera de Electron, y por eso el PDF importa BrowserWindow de forma diferida: se imprime cargando el HTML como data URI en una ventana oculta con JavaScript desactivado, sin dejar archivos temporales si algo se rompe a mitad.',
        },
      ],
    },
  },
  {
    nombre: 'Qraft',
    color: '#16161A',
    logo: '/logos/qraft.svg',
    logoLleno: true,
    stack: ['Angular 22', 'Express 5', 'MySQL 8', 'qr-code-styling'],
    descripcion:
      'Generador de codigos QR con cuenta propia: la estetica se decide una sola vez como marca y cada codigo nuevo solo aporta su contenido, asi que todos salen iguales sin volver a configurar nada.',
    arquitectura:
      'Angular 22 sin zonas: la interfaz se repinta por signals en vez de por deteccion de cambios, y cada pantalla llega por carga diferida. Detras, Express 5 sobre MySQL 8, con la sesion en cookie httpOnly firmada con JWT y cada consulta filtrada por usuario. Entrada con Google resuelta en el servidor. Es PWA instalable con service worker que sirve la aplicacion sin red pero nunca cachea la API. Pruebas en las dos mitades: Vitest en el frontend y node --test contra una base de datos aparte que se limpia antes de cada prueba.',
    url: 'https://qraft.acmsy.com',
    captura: 'qraft',
    landing: '#',
    // Estetica y ficha larga sacadas del repositorio de la app.
    estetica: {
      google: 'Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600',
      fuente: {
        titulo: '\'Plus Jakarta Sans\', \'Plus Jakarta Sans\', system-ui, -apple-system, \'Segoe UI\', sans-serif',
        cuerpo: '\'Plus Jakarta Sans\', \'Plus Jakarta Sans\', system-ui, -apple-system, \'Segoe UI\', sans-serif',
        mono: '\'JetBrains Mono Variable\', \'JetBrains Mono\', ui-monospace, monospace',
      },
      radio: '12px',
      curva: 'cubic-bezier(0.16, 1, 0.3, 1)',
      claro: {
        fondo: '#F7F8FB',
        sup: '#FFFFFF',
        texto: '#2A2F3A',
        suave: '#7C83A0',
        acento: '#16161A',
      },
      oscuro: {
        fondo: '#16161A',
        sup: '#1E1E23',
        texto: '#ECECF1',
        suave: '#8A8A96',
        acento: '#ECECF1',
      },
    },
    detalle: {
      stackRoles: [
        {
          nombre: 'Angular 22',
          papel: 'La interfaz. Seis pantallas standalone sin zonas, con signals y carga diferida.',
        },
        {
          nombre: 'Express 5',
          papel: 'La API. Cuatro routers bajo /api y el de Google aparte, en una dirección corta y estable.',
        },
        {
          nombre: 'MySQL 8',
          papel: 'Los datos. Cuatro tablas: cuentas, carpetas, códigos y vales de recuperación.',
        },
        {
          nombre: 'qr-code-styling',
          papel: 'El dibujo. Pinta el código en canvas o SVG dentro del propio navegador.',
        },
        {
          nombre: 'Tailwind CSS 4',
          papel: 'La base de estilos. Encima van los tokens propios de paleta, tipografía y radios.',
        },
        {
          nombre: 'Service worker',
          papel: 'La instalación. Sirve la aplicación sin red y deja siempre /api fuera de la caché.',
        },
      ],
      unaFrase: 'Aplicación web que genera códigos QR de enlace, texto, red WiFi y tarjeta de contacto con el diseño guardado como marca de la cuenta, comprueba que sigan leyéndose y los exporta en PNG o SVG.',
      porQueExiste: 'Un generador de QR corriente pide volver a elegir forma, color y logo en cada código, y deja bajar el contraste o meter un logo enorme sin decir nada: el fallo aparece cuando ya está impreso. Qraft parte el problema en dos pantallas: en Ajustes se decide la marca una sola vez (forma del módulo, ojos, color, logo, margen y corrección) y en Crear solo se aporta el contenido, así que todos los códigos salen iguales. Encima de eso corre un análisis que mide contraste, inversión, zona de silencio, cobertura del logo y densidad del símbolo, y que propone la corrección concreta en un botón. Lo que quedó fuera es igual de deliberado: no hay códigos dinámicos, ni estadísticas de escaneo, ni planes de pago, ni exportación por lotes, ni generación en el servidor, porque el código se dibuja entero en el navegador. La cuenta existe para que la marca, la biblioteca, las preferencias y el tema te sigan de un equipo a otro, no para cobrar.',
      funcionalidades: [
        {
          area: 'Cuenta y sesión',
          items: [
            'Registro con nombre de hasta 120 caracteres, correo y contraseña de mínimo 8 caracteres',
            'El correo se normaliza a minúsculas antes de guardarlo, así que no puede haber dos cuentas iguales escritas distinto',
            'Rechazo del correo repetido con 409 y mensaje explícito, marcando el campo que falla',
            'Inicio de sesión con correo y contraseña, con el mismo mensaje tanto si el correo no existe como si la contraseña es mala',
            'Contraseñas guardadas con bcrypt a 10 rondas',
            'Sesión de 30 días en la cookie httpOnly qraft_session, firmada con JWT y con SameSite=Lax',
            'Recuperación de contraseña que devuelve un vale de 20 minutos y un solo uso, con respuesta idéntica exista o no la cuenta',
            'Cambio de contraseña con el vale, que además deja la sesión ya iniciada',
            'Fuera de producción el vale vuelve en la propia respuesta y la pantalla de recuperar permite cambiar la contraseña ahí mismo',
            'Cierre de sesión desde el menú de cuenta: el servidor retira la cookie y la app vacía biblioteca y preferencias',
            'Rutas protegidas por guarda: sin sesión se va a /login, y con sesión login, registro y recuperar redirigen a /crear',
            'Foto de perfil subida desde la biblioteca, reducida a 160 px de lado y guardada como data URL de hasta 800 KB de texto',
            'Los campos de contraseña nacen de solo lectura y se enmascaran por CSS para que el gestor del navegador no ofrezca credenciales de otras aplicaciones del mismo dominio',
            'La API admite además una cabecera Authorization: Bearer para llamarla desde fuera del navegador',
          ],
        },
        {
          area: 'Entrada con Google',
          items: [
            'Botón «Continuar con Google» en login y «Registrarse con Google» en registro',
            'Es una navegación real a /auth/google, no una llamada de fondo: el flujo entero lo lleva el servidor',
            'Se pide a Google el ámbito openid email profile con prompt=select_account',
            'El estado de la ida y vuelta viaja en una cookie httpOnly de 10 minutos y se compara al volver',
            'Si ya existe una cuenta con ese correo se le engancha el identificador de Google en vez de crear una segunda',
            'Se rechaza el perfil cuyo correo Google no da por verificado',
            'Al terminar, la sesión queda abierta y se cae directo en /crear',
            'Cinco motivos de fallo vuelven a /login con un aviso traducido: desactivado, cancelado, estado, token y perfil',
          ],
        },
        {
          area: 'Contenido del código',
          items: [
            'Cuatro tipos de contenido en una fila de cuatro botones: Enlace, Texto, WiFi y Contacto',
            'Enlace: si se escribe sin esquema se antepone https:// antes de codificar, para que el lector lo abra en vez de tratarlo como texto',
            'Texto plano en un área con contador de bytes en el pie',
            'WiFi con red, cifrado WPA2, WEP o Abierta, contraseña y conmutador de red oculta',
            'El formato WIFI: escapa las barras, los puntos y coma, las comas, los dos puntos y las comillas, tanto en el nombre de la red como en la clave',
            'Contacto en formato vCard 3.0, que es el que mejor entienden los lectores de móvil',
            'La pantalla pide nombre, cargo, teléfono y correo; el modelo guarda además apellidos, organización y web',
            'Botón «Pegar del portapapeles» que vuelca el texto en el campo principal del tipo activo',
            'Cambiar de tipo vacía el contenido y arranca limpio el del tipo nuevo',
            'Línea en monoespaciada bajo el editor con los bytes, la versión del símbolo y los módulos por lado',
            'El servidor acota cada campo: 2000 caracteres para enlace y texto, 120 para la red y su clave, 40 para el teléfono y 190 para el correo de contacto',
          ],
        },
        {
          area: 'La marca del código',
          items: [
            'Pantalla de Ajustes que se guarda sola en cada toque: no hay botón de guardar ni formulario que enviar',
            'Muestra en vivo del código con un contenido de ejemplo, que se repinta mientras se toca cualquier control',
            'Seis formas de módulo: Cuadrado, Redondeado, Puntos, Clásico, Clásico suave y Muy redondo',
            'Tres formas de marco de ojo (Cuadrado, Redondeado y Círculo) y dos de centro (Cuadrado y Círculo)',
            'Selector de color incrustado en la tarjeta, con área de saturación y brillo, barra de tono vertical, campo hexadecimal de seis dígitos y lectura RGB',
            'El color se aplica a puntos, fondo u ojos según la pestaña elegida; elegir fondo apaga la transparencia',
            'Cuatro muestras rápidas tomadas de una paleta de diez tintas seguras',
            'Logo pegado con Ctrl+V en cualquier punto de la pantalla, leído del portapapeles con el botón, o soltado sobre el recuadro',
            'Se acepta SVG como archivo y como texto plano (así viaja copiado de un editor vectorial) y también mapa de bits, que se reduce a 256 px de lado',
            'Ficha del logo con el formato, el peso aproximado en KB y el porcentaje del código que ocupa',
            'Interruptor que apaga el logo sin perderlo y vuelve a ponerlo',
            'Tamaño del logo del 12 % al 32 % y aire de 0 a 14 px, con los deslizadores bloqueados si no hay logo',
            'Conmutador para despejar o no los módulos que quedan por detrás del logo',
            'Margen en módulos con un paso de 0 a 8, con la nota del pie cambiando de color según se aleje del estándar de cuatro',
            'Corrección de errores L, M, Q o H con su porcentaje de recuperación y una pista por nivel',
            'Botón «Restablecer» que devuelve la marca entera a los valores de fábrica',
          ],
        },
        {
          area: 'Escaneabilidad',
          items: [
            'Puntuación de 0 a 100 sobre un medidor de cinco tramos, con etiqueta Fiable, Aceptable o Riesgo',
            'Cada aviso crítico resta 35 puntos y cada aviso normal 12',
            'Aviso de contenido que no cabe en ninguna de las 40 versiones del símbolo, diciendo los bytes que son y el máximo del nivel elegido',
            'Contraste por debajo de 3:1 marcado como crítico y entre 3:1 y 5:1 como aviso, con el ratio exacto',
            'Aviso de código invertido cuando los puntos son más claros que el fondo, con corrección que intercambia los dos colores',
            'Margen por debajo de dos módulos como crítico y por debajo de cuatro como aviso, citando el estándar',
            'Aviso de logo que tapa más de lo que la corrección puede recuperar, comparando la cobertura contra el 7, 15, 25 o 30 % del nivel',
            'Aviso de logo al límite cuando la cobertura pasa del 65 % de lo que el nivel tolera',
            'Aviso de densidad a partir de la versión 27, con los módulos por lado y el tamaño mínimo de impresión',
            'Aviso de puntos claros sobre fondo transparente, por si el PNG cae sobre una superficie clara',
            'Cada aviso trae su corrección concreta en un botón que la aplica al momento',
            'Botón que aplica de golpe todas las correcciones propuestas',
            'Guardar en la biblioteca queda bloqueado mientras el contenido no quepa en ninguna versión',
          ],
        },
        {
          area: 'Exportación',
          items: [
            'Descarga en PNG o en SVG',
            'Tres tamaños para el PNG: 512, 1024 y 2048 píxeles',
            'Con SVG los tamaños se apagan, porque el vector no tiene resolución',
            'Conmutador de fondo transparente en el propio grupo de exportar',
            'El archivo se genera fuera de pantalla al tamaño pedido, no escalando la vista previa',
            'Nombre del archivo derivado del nombre del código: minúsculas, sin tildes y con guiones, o «qraft» si queda vacío',
            'El pie dice el nombre final, el tamaño y con qué fondo va a salir el archivo, porque en pantalla el código se ve integrado',
            'El margen se guarda en módulos y se traduce a píxeles con el número real de módulos, así la zona de silencio sale exacta a cualquier tamaño',
            'El formato y el tamaño elegidos se recuerdan en la cuenta para la próxima descarga',
          ],
        },
        {
          area: 'Biblioteca y carpetas',
          items: [
            'Lista de códigos ordenada por última modificación, con la miniatura dibujada en vivo y no desde una imagen guardada',
            'Cada fila muestra nombre, destino recortado a 26 caracteres, tipo, carpeta y fecha corta',
            'Búsqueda por nombre o por lo que el código lleva dentro',
            'Orden por recientes o por nombre, con comparación en español',
            'Paginación de ocho filas en escritorio para que la lista no tenga scroll propio',
            'Cabecera de perfil con foto o iniciales, nombre, correo y tres contadores: códigos, carpetas y sueltos',
            'Carpetas propias, creadas escribiendo el nombre en el propio panel; Enter o salir del campo lo confirma y Escape cancela',
            'Contador de códigos por carpeta y filtrado al pulsarla',
            'Borrar una carpeta no borra sus códigos: quedan sueltos',
            'Menú por fila con duplicar, quitar de la carpeta, mover a cualquier carpeta y eliminar',
            'Duplicar crea la copia con « (copia)» al final del nombre, en la misma carpeta',
            'Eliminar no pregunta, pero el aviso trae «Deshacer» mientras dura',
            'Abrir un código lo carga en el editor por /crear/:id, con el estilo tal como se guardó',
            'Estado vacío distinto según se venga de una búsqueda sin resultados o de una biblioteca sin nada',
          ],
        },
        {
          area: 'Interfaz, tema e instalación',
          items: [
            'Modo claro y oscuro, con conmutador en la barra superior y en el menú de cuenta',
            'Sin sesión se sigue el tema del sistema en vivo; con sesión manda el guardado en la cuenta',
            'El cambio de tema se funde con View Transitions durante 420 ms, sin interpolar ningún color durante el intercambio',
            'Login y registro comparten los dos paneles: la marca cruza de lado al pasar de uno a otro en vez de cortar en seco',
            'Fondo animado del panel de marca con seis códigos de tamaños distintos, cuyos módulos llegan dispersos, se arman y se sueltan en un ciclo de 13 segundos',
            'Dentro de la aplicación el código se dibuja sin su fondo y con los módulos llevados al tono que se lee sobre la superficie, conservando el matiz de la marca',
            'Avisos abajo a la derecha, de una sola frase, con una acción opcional y descarte automático a los cuatro segundos',
            'Ni contornos ni anillos de foco: lo enfocado se marca cambiando el relleno de la superficie, y la sombra queda solo para lo que flota, los menús y los avisos',
            'Barras de scroll ocultas pero funcionales en toda la aplicación',
            'Todo el movimiento se anula si el sistema pide movimiento reducido, incluidas las view transitions',
            'Instalable como PWA: «Instalar Qraft» aparece en el menú de cuenta cuando el navegador ofrece el diálogo',
            'Manifiesto con iconos normal y enmascarable, categorías y dos accesos directos: Crear y Biblioteca; el color de la barra del navegador cambia según el esquema claro u oscuro',
            'El service worker sirve la aplicación aunque no haya red, pero nunca cachea /api',
          ],
        },
      ],
      carpetas: [
        {
          carpeta: 'raíz',
          que_es: 'Configuración, empaquetado y el arranque de desarrollo. Aquí no hay código de la aplicación.',
          hijos: [
            {
              carpeta: 'package.json',
              que_es: 'orquesta las dos mitades: instalar, arrancar, compilar y lanzar las pruebas de ambas',
            },
            {
              carpeta: 'angular.json',
              que_es: 'compilación con presupuesto de 1 MB inicial y las dos tipografías como estilos globales',
            },
            {
              carpeta: 'Dockerfile',
              que_es: 'tres etapas sobre node:22-alpine; solo el resultado compilado viaja a la imagen final',
            },
            {
              carpeta: 'proxy.conf.mjs',
              que_es: 'manda /api al puerto que haya elegido el arranque, o al 3011 si se lanza a mano',
            },
            {
              carpeta: 'scripts/dev.mjs',
              que_es: 'busca puertos libres, levanta API y aplicación, espera a que respondan e imprime la dirección',
            },
          ],
        },
        {
          carpeta: 'src/',
          que_es: 'La aplicación Angular 22 standalone, sin zonas y con rutas perezosas.',
          hijos: [
            {
              carpeta: 'app/core',
              que_es: 'servicios, tipos, guardas y las utilidades de codificación, calidad, render y color del QR',
            },
            {
              carpeta: 'app/features',
              que_es: 'una carpeta por pantalla: auth, editor, library y settings',
            },
            {
              carpeta: 'app/layout',
              que_es: 'el armazón: barra superior, menú de cuenta y barra de pestañas de móvil',
            },
            {
              carpeta: 'app/shared',
              que_es: 'la marca, el selector de color, los avisos, el fondo animado y la directiva antiautorrelleno',
            },
            {
              carpeta: 'styles.css',
              que_es: 'los tokens: paleta por tema, tipografías, radios y curvas de animación',
            },
          ],
        },
        {
          carpeta: 'server/',
          que_es: 'La API en Express 5 sobre MySQL, en JavaScript con módulos ES.',
          hijos: [
            {
              carpeta: 'src/routes',
              que_es: 'cinco routers: auth, google, profile, folders y codes',
            },
            {
              carpeta: 'src/db.js',
              que_es: 'el pool de mysql2 y la creación idempotente de la base y sus cuatro tablas',
            },
            {
              carpeta: 'src/validate.js',
              que_es: 'validación de contenido, estilo, marca, foto y preferencias, con el mensaje ya redactado',
            },
            {
              carpeta: 'src/auth.js',
              que_es: 'bcrypt, firma y lectura del token y el middleware que exige sesión',
            },
            {
              carpeta: 'test',
              que_es: 'pruebas con node --test contra la base qraft_test, que se vacía entera antes de cada una',
            },
          ],
        },
        {
          carpeta: 'public/',
          que_es: 'Lo que se copia tal cual al resultado compilado.',
          hijos: [
            {
              carpeta: 'manifest.webmanifest',
              que_es: 'nombre, iconos, tema, categorías y los dos accesos directos de la PWA',
            },
            {
              carpeta: 'sw.js',
              que_es: 'el service worker: shell y recursos en caché, /api nunca',
            },
            {
              carpeta: 'icon.svg y icon-maskable.svg',
              que_es: 'los iconos de instalación, normal y enmascarable',
            },
            {
              carpeta: 'qraft-mark.svg',
              que_es: 'la marca monocroma; la variante blanca se resuelve con un filtro, sin duplicar el archivo',
            },
          ],
        },
      ],
      arquitectura: {
        resumen: 'Dos piezas en un mismo repositorio: una aplicación Angular 22 en src/ y una API Express 5 en server/. El código QR no se genera en el servidor en ningún momento: la aplicación lo codifica, lo evalúa y lo dibuja con qr-code-styling dentro del navegador, y lo que viaja a la API son solo el contenido y el estilo como JSON. La API expone 23 rutas HTTP, la sesión va en una cookie httpOnly firmada con JWT y cada consulta filtra por el identificador de usuario. Los datos viven en MySQL 8 con cuatro tablas, donde el contenido, el estilo, la marca y las preferencias se guardan como columnas JSON. En desarrollo hay dos procesos y un proxy que manda /api al puerto de la API; en producción el mismo Express sirve la aplicación compilada, así que aplicación y API comparten origen y la cookie viaja sin trucos. Todo se empaqueta en una imagen Docker de tres etapas sobre node:22-alpine, con tini como PID 1, junto a su propio contenedor de MySQL. El esquema se pone al día solo en cada arranque, sin migraciones que lanzar a mano.',
        capas: [
          {
            nombre: 'Navegador',
            piezas: [
              {
                nombre: 'Aplicación Angular',
                tecnologia: 'Angular 22 · signals · sin zonas · Tailwind 4',
                que_hace: 'Seis pantallas standalone con rutas perezosas y guardas. El editor, la biblioteca y las preferencias viven en servicios con signals, y todo lo derivado (contenido codificado, informe de calidad, listas filtradas) es computado.',
              },
              {
                nombre: 'Motor del código',
                tecnologia: 'qr-code-styling 1.9 · canvas y SVG',
                que_hace: 'Único punto imperativo de la aplicación. Traduce el estilo propio al formato de la librería y dibuja el código; para exportar crea una instancia aparte al tamaño pedido.',
              },
              {
                nombre: 'Service worker',
                tecnologia: 'Caché versionada · manifest',
                que_hace: 'Hace la aplicación instalable y la sirve sin red: la navegación va a la red con la última copia como respaldo y los recursos salen de caché actualizándose por detrás. /api queda siempre fuera.',
              },
            ],
          },
          {
            nombre: 'Servidor',
            piezas: [
              {
                nombre: 'API REST',
                tecnologia: 'Express 5 · JWT · bcrypt',
                que_hace: 'Cuatro routers bajo /api más dos comprobaciones de salud. Valida contenido, estilo, marca y preferencias antes de tocar la base, y devuelve todos los errores con la misma forma.',
              },
              {
                nombre: 'Entrada con Google',
                tecnologia: 'OAuth 2.0 · estado en cookie',
                que_hace: 'Fuera de /api, en una dirección corta y estable que se registra a mano. Manda a Google con un estado atado al navegador, pide el perfil y abre la sesión.',
              },
              {
                nombre: 'Servidor de la aplicación',
                tecnologia: 'express.static · fallback SPA',
                que_hace: 'En producción el mismo proceso sirve el build de Angular desde WEB_ROOT y manda al index cualquier ruta que no empiece por /api.',
              },
            ],
          },
          {
            nombre: 'Datos y entrega',
            piezas: [
              {
                nombre: 'MySQL 8',
                tecnologia: 'mysql2/promise · pool de 10 · utf8mb4',
                que_hace: 'Cuatro tablas: users con la marca y las preferencias en columnas JSON, folders, codes con contenido y estilo también en JSON, y password_resets. Borrar una carpeta deja sus códigos sueltos por clave foránea.',
              },
              {
                nombre: 'Imagen Docker',
                tecnologia: 'node:22-alpine · tres etapas · tini',
                que_hace: 'Compila Angular en una etapa, instala solo las dependencias de producción del servidor en otra y junta ambas en la final. Escucha en 0.0.0.0 detrás del proxy, con la dirección pública en ORIGIN.',
              },
            ],
          },
        ],
      },
      decisiones: [
        {
          titulo: 'El diseño del código no pertenece al código, sino a la cuenta',
          texto: 'El color de los puntos, el del fondo, la forma del módulo y el logo se guardan en la fila del usuario y se llaman «marca». La pantalla de Crear no tiene ni un control de aspecto: solo contenido, análisis, exportación y guardado. Como las preferencias llegan del servidor después de que la pantalla ya exista, la marca se aplica con un efecto y no solo al pulsar «nuevo»; sin eso el editor se quedaba con los valores de fábrica hasta recargar. La contrapartida es que un código abierto de la biblioteca ignora la marca a propósito: se respeta como se guardó, aunque la marca haya cambiado desde entonces.',
        },
        {
          titulo: 'La sesión vive en una cookie httpOnly y el navegador no guarda nada más',
          texto: 'El JWT se escribe en qraft_session con httpOnly, SameSite=Lax, secure solo en producción y 30 días. El JavaScript de la página no puede leerla, así que un script inyectado no se la lleva. La decisión se llevó hasta el final: la marca, las preferencias de estilo y exportación y hasta el tema viven en la cuenta, no en localStorage, de modo que te siguen de un equipo a otro y no se quedan en uno prestado. El precio es que la aplicación no puede pintarse hasta preguntar al servidor quién eres, y que al arrancar hay que borrar a mano lo que dejó la versión anterior que sí guardaba cosas en el navegador.',
        },
        {
          titulo: 'El margen se guarda en módulos, no en píxeles',
          texto: 'La zona de silencio es una medida del estándar y se mide en módulos, pero la librería de dibujo la quiere en píxeles. Antes de renderizar se calcula la versión del símbolo a partir de los bytes y del nivel de corrección, de ahí salen los módulos por lado, y con eso se traduce el margen al tamaño concreto que se está pintando. Así el borde es el mismo en la vista previa, en un PNG de 512 y en uno de 2048. Cuesta llevar en el frontend una tabla del estándar que en otro sitio sería del servidor.',
        },
        {
          titulo: 'La aplicación lleva escrita la tabla de capacidades de la ISO 18004',
          texto: 'Cuatro niveles de corrección por cuarenta versiones, en modo byte: 160 números en un archivo del frontend. Con eso se sabe cuántos módulos va a tener el código antes de dibujarlo, y por tanto se puede avisar de densidad, de margen y de desbordamiento sin renderizar nada ni llamar al servidor. El coste es tener datos del estándar copiados a mano, que habría que revisar si se cambiara el modo de codificación.',
        },
        {
          titulo: 'Dentro de la aplicación el código se dibuja con colores que no son los suyos',
          texto: 'Un QR trae su propio papel: fondo blanco y módulos oscuros. Pintar ese papel dentro de la interfaz deja un bloque blanco que no pega con nada y que en modo oscuro deslumbra. Así que en pantalla el fondo se quita y los módulos se llevan al tono que se lee sobre la superficie, conservando el matiz de la marca. Lo exportado usa siempre los colores reales, y como lo que se ve no es lo que se descarga, el pie de Exportar dice con qué fondo va a salir el archivo.',
        },
        {
          titulo: 'Los logos y las fotos solo entran como imagen incrustada',
          texto: 'La validación rechaza cualquier cosa que no empiece por data:image/, con dos megas de tope para el logo y ochocientos kilobytes para la foto de perfil. El motivo es concreto: una imagen servida desde otro dominio contamina el lienzo y la exportación a PNG falla en silencio. La consecuencia es que el límite de cuerpo de Express sube de los 100 kB que trae por defecto a 8 MB, y que las imágenes engordan la fila del usuario en vez de vivir en un almacén aparte.',
        },
        {
          titulo: 'El logo se pega, no se sube',
          texto: 'El camino principal es Ctrl+V en cualquier punto de la pantalla de Ajustes, porque el evento de pegado trae los datos sin pedirle permiso al navegador, mientras que leer el portapapeles por API sí lo pide. Se acepta el SVG como archivo y también como texto plano, que es como viaja cuando se copia desde un editor vectorial. Si el navegador bloquea el portapapeles, queda soltar el archivo sobre el recuadro, y el aviso lo dice con esas palabras.',
        },
        {
          titulo: 'Poner un logo sube la corrección de errores a H sin preguntar',
          texto: 'Con niveles L o M, un logo encima se come datos que ya no se pueden recuperar. Tanto el editor como Ajustes suben el nivel a H en cuanto se aplica un logo desde L o M. El precio es un símbolo más denso de lo estrictamente necesario, que es mejor que uno bonito que no se lee.',
        },
        {
          titulo: 'El análisis propone la corrección, no la impone',
          texto: 'Cada aviso trae un parche de estilo concreto en un botón: poner los puntos en negro, invertir los colores, ampliar el margen a cuatro módulos, subir la corrección a máxima o reducir el logo. Hay además un botón que los aplica todos de una vez. Como el aspecto es de la marca y no del código, aplicar una corrección cambia el diseño de todos los códigos nuevos, y el mensaje de confirmación lo dice: «correcciones aplicadas a tu marca».',
        },
        {
          titulo: 'Solo se enseñan los dos avisos más graves',
          texto: 'La banda inferior del editor tiene cuatro columnas con la misma estructura de título, cuerpo y pie, y alto fijo. Si la lista de avisos creciera, la banda cambiaría de tamaño mientras se escribe. Se ordenan por gravedad, se muestran dos y el resto se resume en la línea del pie con el recuento de críticos y avisos. Se pierde detalle a cambio de que nada se mueva bajo el cursor.',
        },
        {
          titulo: 'El servidor comprueba el origen además de confiar en SameSite',
          texto: 'Un middleware deja pasar GET, HEAD y OPTIONS y exige que todo lo que cambie datos venga de un origen de la lista permitida; en desarrollo se acepta cualquier localhost. Lo interesante es el caso sin cabecera Origin: se deja pasar, porque ahí no hay navegador de por medio y la cookie tampoco viaja sola, así que esa petición tendrá que traer su propio Bearer para llegar a algo.',
        },
        {
          titulo: 'La dirección pública sale de una variable, nunca de la cabecera Host',
          texto: 'Detrás del proxy, la petición llega al contenedor como localhost. Si la vuelta de Google se armara con el Host, el usuario acabaría en una dirección que no existe. Todo lo que necesita saber dónde vive la aplicación se lee de ORIGIN. El precio es una variable más que hay que acertar en el despliegue, y que la dirección de retorno tiene que estar registrada además en el cliente de OAuth.',
        },
        {
          titulo: 'El esquema se pone al día en cada arranque, sin migraciones',
          texto: 'Al levantar el proceso se crea la base si no existe, se crean las cuatro tablas si faltan y se alinea la tabla de usuarios consultando INFORMATION_SCHEMA antes de tocar nada, para que arrancar dos veces seguidas no falle. No hay carpeta de migraciones ni comando que recordar en una instalación nueva. A cambio, cualquier cambio de esquema hay que escribirlo como comprobación previa, y nada se borra nunca automáticamente.',
        },
        {
          titulo: 'Entrar con Google no crea una segunda cuenta si el correo ya existe',
          texto: 'Se busca primero por identificador de Google y después por correo; si aparece por correo, se le engancha el identificador a la fila que ya estaba. Es la misma persona y sus códigos tienen que seguir donde estaban. Las cuentas creadas así no tienen contraseña, y entrar por correo las rechaza con el mismo mensaje genérico que cualquier otro fallo, sin revelar que esa cuenta existe.',
        },
        {
          titulo: 'Los campos de contraseña dejan de ser campos de contraseña',
          texto: 'Chrome y Brave comparten las credenciales guardadas entre subdominios del mismo dominio, así que en acmsy.com Qraft aparecía ofreciendo las de otra aplicación, y el atributo autocomplete se ignora en esos campos. La solución es doble: el campo nace de solo lectura, lo que impide el relleno al abrir, y si el navegador soporta text-security se convierte en campo de texto enmascarado por CSS, porque el gestor busca campos de contraseña de verdad. Si el navegador no sabe enmascarar así, se deja como estaba: antes el aviso del gestor que la contraseña en claro.',
        },
        {
          titulo: 'El service worker cachea todo menos la API',
          texto: 'La navegación va a la red y guarda la última copia por si no la hay; los recursos se sirven de caché y se actualizan por detrás. Lo que empieza por /api no se toca nunca: una respuesta vieja de los códigos o de la cuenta sería mentir. En localhost la regla se invierte y se pide siempre a la red primero, o el servidor recompilaría y la pantalla seguiría mostrando lo anterior.',
        },
        {
          titulo: 'La paginación desaparece en móvil, y lo decide un servicio',
          texto: 'En escritorio la lista de la biblioteca se corta en ocho filas, que es lo que entra justo en el alto disponible, para que no haya un scroll dentro de otro. En móvil se muestran todas, porque la página se recorre con el dedo. La decisión no se puede tomar solo con CSS, así que hay un servicio que escucha el corte de 759 px y del que depende la lista calculada.',
        },
        {
          titulo: 'Eliminar no pregunta: ofrece deshacer',
          texto: 'Borrar un código va directo, y el aviso que aparece trae un botón «Deshacer» mientras dura. Lo que hace ese botón es volver a crear el código con el mismo nombre, carpeta, contenido y estilo. La contrapartida es que el identificador cambia: es una restauración de los datos, no del registro, así que un enlace directo al código anterior deja de valer.',
        },
        {
          titulo: 'El foco no se marca con un anillo, sino con el relleno',
          texto: 'Las superficies separan, no las líneas: el contorno se anula en toda la aplicación y no existe ningún anillo de foco. Lo enfocado se marca cambiando el relleno, y ese relleno se calcula mezclando el color del texto con la superficie, de modo que el salto se ve igual en claro (oscurece) y en oscuro (aclara). La sombra se reserva para lo que flota por encima de la página (el menú de cuenta, el de cada fila de la biblioteca y los avisos); ninguna superficie del cuerpo lleva elevación. El coste es real: para quien navega solo con teclado, un cambio de tono se lee peor que un contorno explícito.',
        },
        {
          titulo: 'El arranque de desarrollo comprueba los puertos llamando a la puerta',
          texto: 'En Windows un servidor puede ligarse al comodín aunque otro proceso ya escuche en ::1, y el puerto parecía libre hasta que el CLI fallaba. Así que el script abre un socket contra 127.0.0.1 y contra ::1 y solo da el puerto por libre si ninguno contesta. Además no se fía del puerto que pidió: lee el real de la salida del CLI, quitándole antes los códigos de color que se cuelan entre los dígitos.',
        },
        {
          titulo: 'Las tipografías y los radios van en :root y no dentro del tema de Tailwind',
          texto: 'Al compilar para producción, Tailwind elimina las variables del tema que ninguna de sus utilidades usa, y estas se usan desde CSS propio. El resultado era una aplicación en Times New Roman y sin esquinas redondeadas, solo en el build. Se resolvió sacándolas del bloque del tema y declarándolas como variables normales, dejando en el tema solo los colores que sí alimentan utilidades.',
        },
        {
          titulo: 'El cambio de tema apaga las transiciones mientras ocurre',
          texto: 'Son dos marcas en la raíz y hacen cosas distintas. Una pone transition:none en todo mientras se escribe el atributo del tema y se retira en el fotograma siguiente: sin ella, las transiciones CSS alimentadas por variables de tema se quedaban con el color viejo. La otra es la que da al fundido de la View Transition sus 420 ms, y esa se quita con un temporizador de 520 ms en vez de con la promesa que dice que ha terminado, porque la promesa se resuelve antes de que los pseudoelementos dejen de pintarse y el fundido perdía su duración.',
        },
        {
          titulo: 'El contenedor arranca con un init, no con Node como PID 1',
          texto: 'La imagen final instala tini y lo pone como punto de entrada. Sin init, Node queda como proceso número uno y no recoge las señales de parada, así que el contenedor tarda en morir y hay que matarlo. Es una línea que solo se entiende cuando un despliegue se queda colgado.',
        },
      ],
    },
  },
  {
    nombre: 'Spinup',
    color: '#D4915C',
    logo: '/logos/spinup.png',
    stack: ['Electron 33', 'React 19', 'TypeScript 5.7', 'Vite 6'],
    descripcion:
      'Panel de escritorio para levantar tus proyectos locales: registras carpeta, comando y puerto, y arrancas o detienes cada uno con un click, sin abrir terminales.',
    arquitectura:
      'Electron con TypeScript estricto en los tres procesos. Cada proyecto corre con child_process.spawn y su salida se transmite en vivo a una consola integrada; al detenerlo se mata el arbol completo con taskkill /T /F, de modo que no quedan procesos huerfanos ocupando el puerto. La configuracion se guarda con electron-store y la suite E2E prueba la app real con Playwright.',
    url: 'https://spinup.acmsy.com',
    captura: 'spinup',
    landing: '#',
    // Estetica y ficha larga sacadas del repositorio de la app.
    estetica: {
      google: 'Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400',
      fuente: {
        titulo: '\'Inter\', system-ui, -apple-system, sans-serif',
        cuerpo: '\'Inter\', system-ui, -apple-system, sans-serif',
        mono: '\'JetBrains Mono\', Consolas, monospace',
      },
      radio: '10px',
      curva: 'cubic-bezier(0.4, 0, 0.2, 1)',
      claro: {
        fondo: '#F4F2F8',
        sup: '#FFFFFF',
        texto: '#191620',
        suave: '#565163',
        acento: '#C9854F',
      },
      oscuro: {
        fondo: '#0C0B10',
        sup: '#15141B',
        texto: '#E5E2EB',
        suave: '#908DA0',
        acento: '#D4915C',
      },
    },
    detalle: {
      stackRoles: [
        {
          nombre: 'Electron 33',
          papel: 'El proceso principal. Lanza los comandos, vigila los puertos y mata los árboles de procesos.',
        },
        {
          nombre: 'React 19',
          papel: 'La interfaz. Una sola ventana con la lista de tarjetas, el modal y la consola.',
        },
        {
          nombre: 'TypeScript 5.7',
          papel: 'Los tres procesos en modo estricto, con dos configuraciones separadas y tipos compartidos.',
        },
        {
          nombre: 'Vite 6',
          papel: 'El empaquetado del renderer y el servidor de desarrollo en el puerto 5183.',
        },
        {
          nombre: 'electron-store',
          papel: 'La persistencia. Los proyectos registrados en %APPDATA%/spinup/config.json.',
        },
        {
          nombre: 'electron-builder',
          papel: 'El instalador NSIS para Windows y el canal de actualizaciones automáticas.',
        },
      ],
      unaFrase: 'Aplicación de escritorio en Electron y React que registra carpeta, comando y puerto de cada proyecto local, los arranca y los detiene con un click, transmite su salida en una consola integrada y garantiza que cada uno responda exactamente en el puerto que le asignaste.',
      porQueExiste: 'Mantener cinco o seis proyectos locales significa cinco o seis terminales abiertas, y ninguna de ellas dice de un vistazo qué está corriendo y qué no. Spinup convierte cada proyecto en una fila con su estado, su botón de play y su consola desplegable. Dos problemas concretos condicionaron el diseño: en Windows detener un comando lanzado por el shell deja vivos a los hijos, así que el puerto sigue ocupado, y muchos dev servers ignoran el puerto que les pides y saltan al siguiente libre. Por eso la parada mata el árbol completo con taskkill y por eso el puerto registrado es una imposición, no una etiqueta: la app detecta la herramienta detrás del comando, le añade su propio flag de puerto e inyecta PORT, y si aun así el proceso sale por otro sitio lo detiene y lo marca en error. Fuera quedaron el arranque automático al abrir la aplicación, los grupos de proyectos y cualquier historial: la consola vive solo en memoria y al reiniciar todo aparece detenido.',
      funcionalidades: [
        {
          area: 'Registro de proyectos',
          items: [
            'Registrar un proyecto con cuatro datos: nombre, ruta de la carpeta, comando y puerto',
            'Elegir la carpeta con el diálogo nativo de Windows, limitado a directorios',
            'Selector de comando estilo select2: un botón abre un desplegable con buscador propio, enfocado al abrirse, que filtra los preajustes por coincidencia parcial sin distinguir mayúsculas',
            'Veintiocho comandos preestablecidos agrupados en siete familias: npm, pnpm, yarn, bun, node, php/laravel y puerto forzado',
            'Usar un comando propio escribiéndolo en el buscador y confirmando con Enter o con la opción «Usar» que aparece encima de la lista',
            'Campo de puerto que descarta cualquier carácter que no sea un dígito mientras escribes',
            'Rechazo del puerto fuera del rango 1 a 65535',
            'Rechazo del puerto que ya tiene otro proyecto, nombrando cuál lo ocupa',
            'Editar un proyecto en el mismo modal, avisando de que los cambios no afectan a un proceso ya en marcha',
            'Cerrar el modal con Escape, pulsando fuera del panel o con Cancelar',
            'Eliminar un proyecto en dos pasos desde su menú: el botón cambia a «Confirmar eliminación» antes de borrar',
            'Al eliminar, el proceso se detiene primero y después se borra el registro',
            'Estado vacío que explica qué es un proyecto y ofrece crear el primero',
          ],
        },
        {
          area: 'Arranque y parada',
          items: [
            'Iniciar un proyecto con el botón de play de su tarjeta',
            'El comando se ejecuta a través del shell y con la carpeta del proyecto como directorio de trabajo, así que «npm run dev» funciona tal cual',
            'Comprobación previa de que la carpeta existe; si no, el proyecto queda en error con la ruta escrita en la consola',
            'Comprobación previa de que el puerto está libre; si lo ocupa otro proceso, no arranca y queda en error',
            'Bloqueo de arranques duplicados: si el proyecto ya corre o ya está arrancando, la orden se ignora',
            'Detener con el botón de stop, que sustituye al de play mientras el proceso vive',
            'La parada mata el árbol completo con taskkill /pid /T /F en Windows, y con una señal al grupo de procesos fuera de Windows',
            'Distinción entre parada pedida por el usuario, que deja el proyecto detenido, y salida con código distinto de cero, que lo deja en error con ese código',
            'Al cerrar la aplicación se matan de forma síncrona todos los procesos vivos, para no dejar huérfanos',
            'Ningún proyecto arranca solo: tras reiniciar la aplicación todos aparecen detenidos',
            '«Liberar puerto :N» en el menú de la tarjeta: mata el árbol de cualquier proceso ajeno que esté escuchando en ese puerto, leyendo los pid de netstat en Windows y de lsof fuera',
            'La liberación informa en consola el nombre y el pid de cada proceso eliminado, leídos de tasklist en Windows y de ps fuera',
            'Tras liberar espera 300 ms, vuelve a sondear y dice si el puerto quedó libre o si haría falta permiso de administrador',
            'La liberación descarta los pid del sistema y el proceso propio de la aplicación, para no matarse a sí misma',
          ],
        },
        {
          area: 'El puerto definido manda',
          items: [
            'Sustitución del marcador {port} en el comando por el puerto registrado',
            'Inyección de las variables de entorno PORT y SERVER_PORT en el proceso hijo, esta última para php artisan serve',
            'Detección del dev server que hay detrás del comando resolviendo el script del package.json en npm run X, npm start, pnpm X, yarn X y bun run X',
            'Siete herramientas reconocidas: vite, next, astro, nuxt, ng serve, webpack serve y php artisan serve',
            'Añadido automático del flag de puerto propio de cada una: --port N --strictPort en vite, -p N en next, --port=N en Laravel y --port N en el resto',
            'Añadido automático del flag de host para que el dev server escuche en la red local y publique su URL de red, lista para abrirla desde el móvil',
            'Nada se duplica si ya lo escribiste tú: poner --host localhost o -H 127.0.0.1 sirve de renuncia explícita a esa exposición',
            'Inserción del separador -- cuando el comando empieza por npm, porque npm no reenvía argumentos al script sin él',
            'Aviso en consola de la herramienta detectada y de los argumentos que se añadieron',
            'Sondeo del puerto cada segundo tras arrancar; en cuanto responde, se anuncia «Puerto N activo»',
            'Cada sondeo prueba 127.0.0.1 y ::1 a la vez, porque en Windows Vite suele escuchar solo en IPv6',
            'Lectura de la URL local que el proceso anuncia en su salida, en http o https, sobre localhost, 127.0.0.1, 0.0.0.0 o ::1',
            'Si el proceso anuncia una URL con otro puerto, se esperan 6 segundos a que el puerto registrado responda antes de decidir nada',
            'Si vencido ese margen el puerto registrado sigue mudo, el proceso se mata y el proyecto queda en error indicando en qué puerto había arrancado',
            'Sugerencia concreta en consola cuando eso ocurre: usar {port} en el comando o hacer que el servidor lea PORT, o SERVER_PORT en Laravel',
            'Botón ↗ :puerto en la tarjeta cuando el proyecto corre y la URL está confirmada, que abre el navegador por defecto',
          ],
        },
        {
          area: 'Consola integrada',
          items: [
            'Una consola por proyecto que se abre y se cierra con el botón de terminal de la tarjeta',
            'La consola nunca se abre sola: solo aparece si la pides',
            'stdout y stderr del proceso llegan en tiempo real y sin filtrar',
            'Limpieza de las secuencias ANSI de color, de cursor y de título, y normalización de los saltos de línea de Windows, antes de pintar',
            'Autoscroll pegado al fondo que se suelta en cuanto subes más de 24 píxeles y se vuelve a enganchar al bajar',
            'Botón para limpiar la consola de un proyecto sin tocar su proceso',
            'El texto de la consola es seleccionable y copiable, mientras el resto de la interfaz tiene la selección desactivada',
            'Recorte del búfer: al superar los 200 000 caracteres se conservan los últimos 150 000',
            'Mensajes propios prefijados con [spinup]: comando lanzado con su pid, herramienta detectada, puerto activo, proceso detenido y errores',
            'La salida sigue llegando con la ventana minimizada u oculta, sin el frenado que Chromium aplica a las ventanas que no se ven',
            'Al liberar un puerto desde el menú, la consola de ese proyecto se abre para mostrar el resultado de la operación',
          ],
        },
        {
          area: 'Ventana y estado a la vista',
          items: [
            'Ventana sin marco del sistema, con barra de título propia de 40 píxeles que hace de zona de arrastre',
            'Botones propios de minimizar, maximizar o restaurar y cerrar, de 46 píxeles, con el de cerrar en rojo al pasar el puntero',
            'Contador en vivo en la barra de título: cuántos proyectos hay registrados y cuántos están corriendo',
            'El contador de procesos vivos se pone verde y su punto pulsa cuando hay al menos uno',
            'Chip de estado en cada tarjeta con punto de color y etiqueta escrita: Detenido, Corriendo o Error',
            'Tarjeta compacta a todo el ancho: nombre y estado arriba; ruta, comando y puerto en monoespaciada abajo',
            'El nombre y la ruta se recortan con puntos suspensivos y muestran el valor completo en el tooltip',
            'Menú de cada tarjeta con Editar, Liberar puerto (solo mientras el proyecto no corre) y Eliminar, que también se abre con clic derecho sobre la tarjeta',
            'El menú se cierra con Escape o al pulsar fuera de él',
            'La ventana abre a 1100 por 740, no se reduce por debajo de 780 por 520, y pinta su fondo antes de cargar el contenido para no dar un destello claro al arrancar',
            'Instancia única: si ya hay una Spinup abierta, el segundo arranque se cierra solo',
          ],
        },
        {
          area: 'Tema e interfaz',
          items: [
            'Conmutador de tres posiciones en la barra de título: Claro, Oscuro y Sistema',
            'La elección queda guardada y se recupera en el siguiente arranque',
            'El tema se aplica antes del primer pintado, así que no hay parpadeo de color al abrir',
            'En modo Sistema no se marca nada y manda la preferencia del sistema operativo',
            'En modo Sistema, un cambio del sistema operativo se refleja en vivo sin reiniciar la aplicación',
            'Cada tema redefine los mismos diecisiete tokens de color, elegidos para mantener contraste AA sobre su propio fondo',
            'Anillo de foco visible en todos los controles, del color de su propia acción: acento en general, rojo en detener y verde en iniciar',
            'El modal abre con el foco puesto en el primer campo, y el buscador de comandos con el foco puesto al desplegarse',
            'Con la preferencia de movimiento reducido, las transiciones se vuelven instantáneas y el pulso del indicador se apaga',
            'Barras de desplazamiento propias, planas y de 10 píxeles, del color del token de borde',
          ],
        },
        {
          area: 'Actualizaciones',
          items: [
            'Comprobación de versión nueva 8 segundos después de arrancar, solo en la aplicación instalada',
            'La comprobación consulta el archivo de versiones publicado en la propia página de descargas',
            'Nada se descarga por sorpresa: primero aparece el aviso con el número de la versión disponible',
            'Banda superior con el aviso y un botón para descargar cuando tú quieras',
            'Porcentaje de descarga en vivo en esa misma banda',
            'Botón de reiniciar e instalar cuando la descarga termina',
            'Botón «Ahora no» que oculta la banda hasta el siguiente arranque',
            'Si no hay red o el servidor no responde, el fallo es mudo: no aparece ningún error',
            'Si la actualización quedó descargada y no se instaló, se instala al salir de la aplicación',
          ],
        },
        {
          area: 'Datos y seguridad del renderer',
          items: [
            'Los proyectos se guardan en un único archivo de configuración dentro de la carpeta de datos del usuario',
            'Nombre, ruta, comando y puerto sobreviven al reinicio de la aplicación',
            'No se guarda nada más: ni el contenido de las consolas, ni el estado de los procesos, ni qué consolas estaban abiertas',
            'Una variable de entorno permite cambiar la carpeta de configuración, para que las pruebas nunca toquen la del usuario',
            'El renderer no tiene acceso a Node: aislamiento de contexto activado, integración de Node desactivada y todo pasa por una API expuesta con contextBridge',
            'Veinte canales IPC con nombre: nueve de petición y respuesta, cinco de aviso al proceso principal y seis de eventos hacia la interfaz',
            'Política de seguridad de contenido inyectada en la versión compilada, que restringe scripts y conexiones al propio origen',
          ],
        },
        {
          area: 'Instalación y verificación',
          items: [
            'Instalador NSIS para Windows de 64 bits que deja elegir la carpeta de instalación',
            'Instalación por usuario, sin pedir permisos de administrador',
            'Al desinstalar no se borran los datos de la aplicación',
            'El icono propio llega al instalador, al desinstalador y al ejecutable ya instalado, y se regenera desde un SVG con un solo comando: un .ico multi-resolución de 16 a 256 píxeles más un PNG de 512',
            'Suite E2E que lanza la aplicación compilada de verdad y recorre catorce bloques con cincuenta comprobaciones',
            'Prueba de humo aparte contra el ejecutable ya empaquetado',
            'Modo oculto para que las pruebas no abran ventana ni roben el foco, y modo fuera de pantalla para poder capturar imágenes',
            'Script que captura la aplicación en tema claro y oscuro y mide el contraste de los textos clave',
            'Verificación del canal de actualización: finge una versión anterior instalada y compara la firma sha512 publicada con la del instalador real',
          ],
        },
      ],
      carpetas: [
        {
          carpeta: 'src/',
          que_es: 'Todo el código de la aplicación, repartido en los tres procesos de Electron.',
          hijos: [
            {
              carpeta: 'main/',
              que_es: 'cuatro archivos: la ventana y los handlers IPC, el gestor de procesos, el almacén y el actualizador',
            },
            {
              carpeta: 'preload.ts',
              que_es: 'el puente: expone window.api con contextBridge y no deja pasar nada más',
            },
            {
              carpeta: 'renderer/',
              que_es: 'la interfaz React con sus seis componentes, el juego de iconos y los tokens de tema en index.css',
            },
            {
              carpeta: 'shared/types.ts',
              que_es: 'los tipos que comparten los tres procesos: el proyecto, su estado y la API expuesta',
            },
          ],
        },
        {
          carpeta: 'scripts/',
          que_es: 'Utilidades de construcción y verificación que no viajan en la aplicación.',
          hijos: [
            {
              carpeta: 'render-icon.cjs',
              que_es: 'rasteriza el SVG del icono con Chromium y arma el .ico multi-resolución',
            },
            {
              carpeta: 'updater-check.cjs',
              que_es: 'prueba el canal de actualizaciones contra un servidor local o el publicado',
            },
            {
              carpeta: 'app-theme-shots.mjs',
              que_es: 'captura la app en ambos temas y mide el contraste de los textos',
            },
            {
              carpeta: 'serve-web.mjs',
              que_es: 'sirve la página de descargas en local para revisarla en el navegador',
            },
          ],
        },
        {
          carpeta: 'tests/',
          que_es: 'Pruebas que arrancan la aplicación real con Playwright, no componentes aislados.',
          hijos: [
            {
              carpeta: 'e2e.mjs',
              que_es: 'el recorrido completo, de crear un proyecto a eliminarlo, con sus servidores de prueba',
            },
            {
              carpeta: 'smoke-packaged.mjs',
              que_es: 'prueba de humo contra el ejecutable ya empaquetado',
            },
            {
              carpeta: 'screenshots.mjs',
              que_es: 'capturas de la interfaz para revisión visual',
            },
            {
              carpeta: 'qland-check.mjs',
              que_es: 'prueba contra un proyecto real, para confirmar que sale en el puerto exigido',
            },
          ],
        },
        {
          carpeta: 'build/',
          que_es: 'Los recursos que el empaquetador mete en el instalador y en la app instalada.',
          hijos: [
            {
              carpeta: 'icon.svg',
              que_es: 'el origen del icono, el mismo trazo que la interfaz dibuja en la barra de título',
            },
            {
              carpeta: 'icon.ico',
              que_es: 'el icono de Windows generado desde el SVG',
            },
            {
              carpeta: 'icon.png',
              que_es: 'el icono de 512 píxeles que viaja como recurso extra',
            },
          ],
        },
        {
          carpeta: 'raíz',
          que_es: 'Configuración: dos compilaciones de TypeScript separadas y el empaquetado.',
          hijos: [
            {
              carpeta: 'vite.config.ts',
              que_es: 'compila el renderer e inyecta la política de seguridad solo en la versión compilada',
            },
            {
              carpeta: 'tsconfig.main.json',
              que_es: 'la compilación aparte del proceso principal y del preload',
            },
            {
              carpeta: 'electron-builder.yml',
              que_es: 'el instalador NSIS, los iconos y el destino de las actualizaciones',
            },
            {
              carpeta: 'package.json',
              que_es: 'los doce scripts del proyecto, de dev a dist',
            },
          ],
        },
      ],
      arquitectura: {
        resumen: 'Tres procesos y una sola ventana. El proceso principal, en Node, es el único que toca el sistema: lanza los comandos con child_process, sondea puertos con sockets crudos, consulta netstat y tasklist, mata árboles con taskkill y guarda los proyectos en un archivo JSON dentro de la carpeta de datos del usuario. El renderer es una aplicación React normal sin acceso a Node, que solo conoce el objeto que le entrega el preload. Ese preload es la frontera: expone veinte canales IPC con nombre y nada más, y los tipos de esa API viven en un archivo compartido que compilan tanto el proceso principal como la interfaz. La comunicación va en los dos sentidos: la interfaz pide acciones y el proceso principal devuelve eventos de salida, de estado y de URL detectada. Se compila en dos pasos, TypeScript para el proceso principal y Vite para el renderer, y se empaqueta con electron-builder en un instalador NSIS para Windows de 64 bits. La aplicación instalada consulta su propio canal de actualizaciones contra el archivo de versiones publicado en la página de descargas.',
        capas: [
          {
            nombre: 'Proceso principal',
            piezas: [
              {
                nombre: 'Ventana y handlers IPC',
                tecnologia: 'Electron 33 · Node 20',
                que_hace: 'Crea la ventana sin marco, registra los nueve handlers de invocación y los cinco avisos, y sanea todo lo que llega del renderer antes de usarlo.',
              },
              {
                nombre: 'Gestor de procesos',
                tecnologia: 'child_process · net · taskkill',
                que_hace: 'Lanza y mata los comandos, detecta el dev server para forzar el puerto, sondea IPv4 e IPv6 y limpia la salida antes de reenviarla.',
              },
              {
                nombre: 'Almacén',
                tecnologia: 'electron-store 8',
                que_hace: 'Alta, edición, listado y borrado de proyectos sobre un archivo JSON, con creación perezosa para respetar la ruta de datos que fijen las pruebas.',
              },
              {
                nombre: 'Actualizador',
                tecnologia: 'electron-updater 6',
                que_hace: 'Consulta el canal de versiones con retraso y en silencio, y descarga o instala solo cuando el usuario lo pide.',
              },
            ],
          },
          {
            nombre: 'Puente',
            piezas: [
              {
                nombre: 'Preload',
                tecnologia: 'contextBridge · ipcRenderer',
                que_hace: 'Publica window.api con veinte canales nombrados. Cada suscripción a eventos devuelve su propia función para darse de baja.',
              },
              {
                nombre: 'Tipos compartidos',
                tecnologia: 'TypeScript estricto',
                que_hace: 'Un solo archivo define el proyecto, sus tres estados y la firma completa de la API, y lo compilan las dos mitades.',
              },
            ],
          },
          {
            nombre: 'Interfaz',
            piezas: [
              {
                nombre: 'Aplicación React',
                tecnologia: 'React 19 · Vite 6',
                que_hace: 'Mantiene en memoria proyectos, estados, URLs, registros de consola y qué consolas están abiertas, y se suscribe a los tres flujos de eventos al montar.',
              },
              {
                nombre: 'Componentes',
                tecnologia: 'TSX · seis componentes',
                que_hace: 'Barra de título con contadores, tarjeta de proyecto con su menú, modal de alta y edición, visor de consola, banda de actualización y conmutador de tema.',
              },
              {
                nombre: 'Tokens de tema',
                tecnologia: 'Tailwind CSS 4 · @theme',
                que_hace: 'Diecisiete tokens de color definidos en CSS, redefinidos enteros para el tema claro y para la preferencia del sistema.',
              },
            ],
          },
        ],
      },
      decisiones: [
        {
          titulo: 'Detener es taskkill /T /F, no matar el proceso que se lanzó',
          texto: 'El comando se ejecuta a través del shell, así que el hijo directo es cmd.exe y el servidor de verdad es un nieto. Terminar solo al hijo deja al servidor vivo y el puerto ocupado, que es exactamente el problema que la aplicación quiere evitar. Por eso la parada llama a taskkill con el pid y los flags de árbol y forzado. El precio es que la parada es brusca: el proceso no recibe una señal que pueda atender para cerrar limpiamente, y fuera de Windows hay que mantener una rama distinta que envía la señal al grupo de procesos.',
        },
        {
          titulo: 'El puerto registrado es una imposición, no una etiqueta',
          texto: 'Muchos dev servers, ante un puerto ocupado, saltan al siguiente libre y siguen tan tranquilos; el usuario acaba con un proyecto corriendo donde no esperaba. Spinup ataca eso por cuatro vías a la vez: sustituye el marcador {port} en el comando, inyecta las variables PORT y SERVER_PORT, añade el flag de puerto propio de la herramienta que detectó, y como último recurso vigila. Si el proceso anuncia una URL con otro puerto y el registrado no responde, el proceso se mata y el proyecto queda en error. La contrapartida es dura a propósito: un servidor que se niegue a obedecer no se queda corriendo a medias, se detiene.',
        },
        {
          titulo: 'Se lee el package.json del proyecto para saber qué hay detrás del comando',
          texto: '«npm run dev» no dice nada por sí solo. La aplicación resuelve el nombre del script en el package.json de la carpeta registrada y busca la herramienta en su contenido, cubriendo también pnpm, yarn y bun, y el caso especial de npm start. Así reconoce vite, next, astro, nuxt, ng serve, webpack serve y php artisan serve aunque estén escondidos tras un alias. Laravel es la excepción declarada: solo se mira el comando literal, porque «composer run dev» arranca varios subprocesos y los flags no les llegarían.',
        },
        {
          titulo: 'Un margen de 6 segundos antes de dar por perdido un puerto',
          texto: 'Hay comandos que levantan más de un servidor: el «composer run dev» de Laravel arranca a la vez el servidor de PHP y un Vite para los assets, y el que anuncia su URL primero suele ser el auxiliar. Matar el proceso en cuanto aparece una URL ajena rompería ese caso legítimo. Por eso, ante una URL con otro puerto, se arranca un temporizador de seis segundos y solo al vencer se comprueba si el puerto registrado responde. Si responde, la URL ajena era ruido y se confirma la buena; si no, se detiene el proceso. El coste es que un fallo real tarda seis segundos en manifestarse.',
        },
        {
          titulo: 'Exponer el dev server en la red local es el comportamiento por defecto',
          texto: 'A las mismas herramientas que reciben el flag de puerto se les añade también el de host, para que escuchen en toda la interfaz y publiquen su URL de red. La razón es concreta: probar el diseño responsive en un teléfono de verdad sin tener que recordar el flag cada vez. La renuncia no es una casilla, es escribir tú mismo el host en el comando: si ya hay un --host o un -H, la aplicación no toca nada. El precio es que, por defecto, el servidor de desarrollo queda accesible desde la red en la que estés.',
        },
        {
          titulo: 'El sondeo de puerto cierra con FIN, no destruye el socket',
          texto: 'Comprobar si un puerto responde abriendo una conexión y cortándola de golpe provoca un ECONNRESET en el servidor sondeado, y muchos servidores de desarrollo sin manejador de error se caen o llenan la consola de ruido. La comprobación cierra ordenadamente con socket.end en cuanto conecta. Además cada sondeo se hace por duplicado contra 127.0.0.1 y ::1, porque en Windows «localhost» resuelve a IPv6 y Vite a menudo escucha solo ahí: mirar solo IPv4 daría por muerto un servidor que está perfectamente vivo.',
        },
        {
          titulo: 'npm necesita un separador que las demás no',
          texto: 'Cuando la aplicación añade sus argumentos automáticos y el comando empieza por npm, inserta antes un doble guion, porque npm no reenvía nada al script sin él. Con pnpm, yarn y bun se concatena directo. Es un detalle de dos líneas que decide si el flag de puerto llega al servidor o se lo queda el gestor de paquetes, y solo se descubre viendo que el proyecto sigue arrancando en el puerto equivocado sin ningún mensaje de error.',
        },
        {
          titulo: 'La consola nunca se abre sola, con una excepción deliberada',
          texto: 'Arrancar un proyecto no despliega su consola: la lista se mantiene compacta y cada consola es una decisión del usuario. La única excepción es liberar un puerto desde el menú, y es coherente porque esa acción no tiene otro resultado visible que su informe en consola. El precio es que un proceso puede fallar sin que se vea el motivo hasta abrir la consola; para compensar, el mensaje de error también se escribe como texto dentro del registro del proyecto, no solo en el chip de estado.',
        },
        {
          titulo: 'El registro de consola se recorta por la cola y vive solo en memoria',
          texto: 'Un dev server con recarga en caliente escupe salida indefinidamente, y guardarlo todo terminaría comiéndose la memoria del renderer. Al superar los 200 000 caracteres se conservan los últimos 150 000, con esa holgura para no recortar en cada línea nueva. Nada de eso se persiste: al cerrar la aplicación, las consolas desaparecen. Es la contrapartida asumida de no tener archivos de registro que gestionar, rotar ni limpiar.',
        },
        {
          titulo: 'La ventana minimizada sigue pintando la consola',
          texto: 'Chromium ralentiza el trabajo de las ventanas que no se ven, y en un panel que se deja de fondo eso significaría perder salida o verla llegar a tirones al volver. La ventana desactiva explícitamente ese ahorro. El coste es consumo: la aplicación sigue pintando aunque no la estés mirando, que es justo lo que se le pide a un panel de control que vive en el segundo monitor.',
        },
        {
          titulo: 'El almacén se crea la primera vez que se usa, no al importarlo',
          texto: 'electron-store fija la ruta del archivo en el momento de construirse. Si el módulo lo creara al cargarse, se adelantaría al cambio de carpeta de datos que la aplicación hace al arrancar cuando encuentra la variable de entorno de pruebas, y el E2E escribiría en la configuración real del usuario. La construcción perezosa resuelve el orden. Es la clase de detalle que no se nota hasta que una prueba borra tus proyectos de verdad.',
        },
        {
          titulo: 'La validación del puerto está duplicada a propósito',
          texto: 'El modal comprueba el rango y el choque con otro proyecto para dar el mensaje al lado del campo, y el proceso principal vuelve a comprobar lo mismo antes de escribir en el almacén, nombrando además al proyecto que ya usa ese puerto. No es redundancia por descuido: el renderer es una capa de comodidad y el proceso principal es el que guarda. Si el mensaje llega desde el otro lado, el modal lo limpia del envoltorio que Electron le pone al error remoto antes de enseñarlo.',
        },
        {
          titulo: 'El renderer no ve Node, y la superficie expuesta es una lista cerrada',
          texto: 'Aislamiento de contexto activado, integración de Node desactivada y un preload que publica exactamente veinte canales con nombre. Cada suscripción a eventos devuelve su propia función para darse de baja, así que la interfaz puede limpiar sus escuchas al desmontarse en lugar de acumularlas. Encima, la apertura de enlaces externos valida el protocolo en el proceso principal y rechaza todo lo que no sea http o https. La política de seguridad de contenido se inyecta solo al compilar, porque el servidor de desarrollo necesita scripts en línea para la recarga en caliente.',
        },
        {
          titulo: 'El tema se estampa antes de que React exista',
          texto: 'Un bloque que se ejecuta al cargar el módulo de entrada lee la preferencia guardada y marca el documento antes del primer pintado, de modo que no se ve el destello del tema equivocado. El modo Sistema se representa por ausencia: no se escribe ningún atributo y manda la consulta de medios, que además se sigue escuchando en vivo para reaccionar si el sistema operativo cambia con la aplicación abierta. El coste es tener la paleta escrita tres veces en el CSS, una por tema y otra para la preferencia del sistema.',
        },
        {
          titulo: 'La jerarquía es por tono, sin bordes ni sombras',
          texto: 'Las superficies se distinguen por diferencia de fondo, del fondo de la ventana a la tarjeta y de la tarjeta al estado sobre el que está el puntero. Las sombras que tenían el modal, el desplegable y el menú se quitaron después, dejando la separación solo al contraste. El acento cobre no decora nunca: se reserva para la acción primaria, la selección y el anillo de foco, y el verde y el rojo solo aparecen como estado. La contrapartida es que un menú flotante se apoya únicamente en el salto de tono para leerse como capa superior.',
        },
        {
          titulo: 'Sin arranque automático al abrir la aplicación',
          texto: 'Sería fácil recordar qué proyectos estaban corriendo y relanzarlos al abrir, pero eso significa que abrir el panel ocupa puertos y consume recursos sin que nadie lo haya pedido. Spinup arranca siempre con todo detenido y la propia suite E2E lo comprueba tras reiniciar. Un click por proyecto es un precio bajo frente a la sorpresa de encontrarse cinco servidores levantados.',
        },
        {
          titulo: 'Las actualizaciones no se descargan solas y sus fallos son mudos',
          texto: 'La descarga automática está desactivada y la comprobación se retrasa ocho segundos para no competir con la apertura de la ventana. El registro del actualizador se anula por completo y el manejador de errores está vacío a propósito: quedarse sin internet o que el servidor no responda no es algo que deba alarmar a nadie. Solo cuando hay versión nueva aparece la banda, y descargar e instalar siguen siendo decisiones del usuario. La contrapartida es que un canal de actualización roto no se nota desde la aplicación, por eso hay un script aparte que lo verifica comparando la firma sha512 publicada con la del instalador real.',
        },
        {
          titulo: 'El icono se rasteriza con el propio Chromium de Electron',
          texto: 'En lugar de arrastrar una dependencia de conversión de imágenes, el script carga el SVG en una ventana oculta y captura la página. Se captura una sola vez a 512 píxeles y de ahí se derivan los seis tamaños del .ico, porque abrir una segunda ventana fuera de pantalla cuelga la captura en Electron. El contenedor .ico se arma a mano empaquetando los PNG, que Windows acepta. Además el empaquetador tiene activada la escritura del icono y la versión dentro del ejecutable: sin eso, el instalador lleva tu icono pero la aplicación instalada se queda con el de Electron.',
        },
        {
          titulo: 'Las pruebas lanzan la aplicación de verdad y comprueban el sistema, no el DOM',
          texto: 'La suite arranca el ejecutable compilado con Playwright, crea sus propios servidores de prueba y recorre catorce bloques con medio centenar de comprobaciones. Lo importante es qué mide: que el árbol de procesos murió se verifica comprobando que el puerto deja de responder, no leyendo el chip de estado. Hay fixtures dedicados para cada trampa conocida, incluidos un servidor que anuncia una URL de otro puerto, uno que obedece la variable de entorno, uno que la ignora y un shim de vite instalado en la carpeta de binarios para reproducir el caso real. Dos modos por variable de entorno evitan que las pruebas abran ventanas o roben el foco mientras trabajas.',
        },
        {
          titulo: 'electron-updater se importa por nombre, no por defecto',
          texto: 'El módulo se declara como ESM pero no exporta un valor por defecto, así que un import por defecto compila sin quejarse y en ejecución vale indefinido. La aplicación lo importa nombrado, con el motivo escrito en un comentario junto a la línea. Es un fallo que no aparece en la comprobación de tipos ni en desarrollo, solo en la aplicación instalada, que es justo donde el actualizador es lo único que corre.',
        },
      ],
    },
  },
  {
    nombre: 'Trackpile',
    color: '#F5A627',
    logo: '/logos/trackpile.png',
    logoLleno: true,
    stack: ['Angular 22', 'Tailwind CSS 4', 'Express 5', 'MySQL 8'],
    descripcion:
      'Lista personal de proyectos: cada uno con su stack, sus enlaces y en que estado va (idea, en desarrollo, terminado o archivado), para dejar de llevar la cuenta de memoria.',
    arquitectura:
      'Angular con Tailwind contra una API Express sobre MySQL. Sesion con JWT y contrasenas cifradas con bcrypt; cada peticion se valida con Zod antes de tocar la base, asi que el cliente y el API no pueden desincronizarse. El arranque local busca un puerto libre para el API y otro para la app en vez de fallar si alguno esta ocupado.',
    url: 'https://trackpile.acmsy.com',
    captura: 'trackpile',
    landing: '#',
    // Estetica y ficha larga sacadas del repositorio de la app.
    estetica: {
      google: 'Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500',
      fuente: {
        titulo: '\'Plus Jakarta Sans\', ui-rounded, ui-sans-serif, system-ui, sans-serif',
        cuerpo: '\'Plus Jakarta Sans\', ui-rounded, ui-sans-serif, system-ui, sans-serif',
        mono: '\'JetBrains Mono\', ui-monospace, \'SF Mono\', Consolas, monospace',
      },
      radio: '18px',
      curva: 'cubic-bezier(0.22, 1, 0.36, 1)',
      claro: {
        fondo: '#F2F2F2',
        sup: '#FFFFFF',
        texto: '#171717',
        suave: '#737373',
        acento: '#F5A627',
      },
      oscuro: {
        fondo: '#0D0D0D',
        sup: '#161616',
        texto: '#F2F2F2',
        suave: '#7E7E7E',
        acento: '#F5A627',
      },
    },
    detalle: {
      stackRoles: [
        {
          nombre: 'Angular 22',
          papel: 'La interfaz. Dos pantallas standalone, sin zonas y con signals.',
        },
        {
          nombre: 'Tailwind CSS 4',
          papel: 'El sistema visual. Todos los tokens en un solo styles.css.',
        },
        {
          nombre: 'Express 5',
          papel: 'La API. Veinticuatro rutas bajo /api, con Zod en la entrada.',
        },
        {
          nombre: 'MySQL 8',
          papel: 'Los datos. Cuatro tablas con migraciones versionadas.',
        },
        {
          nombre: 'JWT y bcrypt',
          papel: 'La sesión. Cookie httpOnly de 30 días y contraseñas a 12 rondas.',
        },
      ],
      unaFrase: 'Aplicación web donde cada proyecto propio queda registrado con nombre, icono, color, descripción, stack y enlaces, marcado como idea, en desarrollo, terminado o archivado, hecha con Angular 22 contra una API Express sobre MySQL y con una llave de API para que un agente externo la mantenga al día.',
      porQueExiste: 'La cuenta de lo que uno tiene empezado se lleva de memoria y se pierde: cuál quedó a medias, con qué estaba hecho, dónde estaba publicado. Trackpile fija esa lista en una sola pantalla donde cada proyecto tiene estado, stack, descripción, icono propio y los dos enlaces que importan, el del repositorio y el de lo publicado. Lo que deliberadamente no hay es gestión de trabajo: ni tableros, ni tareas, ni fechas de entrega, ni nadie más con quien compartir la lista, porque es de una sola persona y los proyectos son suyos. La pieza menos evidente es la puerta para agentes: una llave personal y un documento de instrucciones en /api/docs para que un asistente que está trabajando dentro de la carpeta de un proyecto actualice su ficha sin abrir el navegador. Por eso existe el endpoint que crea o actualiza por nombre, y no solo por identificador: un agente sabe cómo se llama el proyecto en el que está, no su UUID. Todo corre contra un MySQL propio, sin servicios de terceros salvo el acceso opcional con Google.',
      funcionalidades: [
        {
          area: 'Cuenta y sesión',
          items: [
            'Registro con nombre, correo y contraseña de mínimo 8 caracteres; el correo se normaliza a minúsculas y se rechaza con 409 si ya existe',
            'Inicio de sesión con correo y contraseña, con el mismo mensaje de error exista o no la cuenta',
            'Acceso con Google por redirección: la app manda a /auth/google/start y Google vuelve a /auth/google/callback',
            'El estado del acceso con Google viaja a la vez en una cookie de 10 minutos y en la URL, y se descarta si no coinciden',
            'Si Google trae un correo que ya tenía cuenta local, se enlazan y la foto solo se copia cuando falta',
            'Sesión de 30 días en cookie httpOnly firmada con JWT; el navegador no guarda absolutamente nada',
            'Rutas protegidas: sin sesión se redirige a /entrar y con sesión no se puede volver a la pantalla de acceso',
            'Recuperar contraseña con un enlace de un solo uso válido 45 minutos, que anula los enlaces anteriores del mismo usuario',
            'La respuesta al pedir recuperación es idéntica exista o no el correo, así que no se puede sondear quién está registrado',
            'Sin servidor de correo montado, en desarrollo el enlace de recuperación se muestra en pantalla y se imprime en la consola del servidor',
            'Poner contraseña nueva desde el enlace, con la sesión ya abierta al terminar',
            'Cambiar la contraseña desde dentro comprobando primero la actual',
            'Medidor de fuerza de tres barras: corta por debajo de 8 caracteres, buena a partir de 12 con tres familias distintas',
            'Aviso de Bloq Mayús encendido mientras se escribe la contraseña, y botón de ojo siempre presente para revelarla',
            'El registro se puede cerrar del todo o limitar a una lista de correos permitidos, y esa lista se aplica también al entrar con Google',
            'Cierre de sesión que borra la cookie en el servidor y vacía la caché de proyectos para no filtrar datos entre cuentas',
          ],
        },
        {
          area: 'La pila de proyectos',
          items: [
            'Lista virtualizada: con cientos de proyectos solo viven en el DOM las filas que se ven',
            'Cada fila muestra icono, nombre, descripción, hasta cuatro tecnologías, repositorio, enlace publicado, estado y fecha relativa',
            'Del enlace publicado solo se muestra el dominio, sin protocolo ni www',
            'La fecha va en relativo (ahora, min, h, d, meses) con la fecha completa en el título emergente',
            'Si el proyecto lleva más de cuatro tecnologías, la quinta se resume en un +N',
            'Cambiar el estado desde la propia fila, con un menú anclado a su botón que se abre hacia arriba si no cabe abajo',
            'La fila que acaba de cambiar de estado se enciende en ámbar durante 900 ms para poder seguirla',
            'Fijar un proyecto arriba de la lista, donde se queda pase lo que pase',
            'Eliminar un proyecto con una confirmación previa que dice su nombre',
            'Al pasar el puntero, el adorno de losas del fondo de la fila pasa de tinta al ámbar de marca, sin mover ni agrandar nada',
            'Buscar por nombre, descripción o tecnología sin distinguir mayúsculas',
            'Filtrar por estado con un control segmentado que lleva el conteo de cada uno',
            'Filtrar por tecnología pulsando su chip en cualquier fila, con un chip de vuelta para quitarlo',
            'Ordenar por actualizado, más reciente, nombre o estado, y lo fijado va siempre delante',
            'Los archivados no salen en Todos: aparecen solo con su filtro explícito',
            'Estados vacíos distintos según sea la primera vez o un filtro sin resultados, cada uno con su acción',
            'Seis esqueletos pulsando mientras llega la lista, y pantalla de reintento si la petición falla',
          ],
        },
        {
          area: 'Ficha de un proyecto',
          items: [
            'Cajón que entra por la derecha en escritorio y hoja que sube desde abajo en el teléfono',
            'El nombre se escribe donde se lee, a 24px y sin caja de campo',
            'Estado en cuatro filas verticales: idea, en desarrollo, terminado y archivado',
            'Descripción en un cuadro de texto que crece con lo escrito, sin barra de desplazamiento ni contador',
            'Selector de stack con buscador que marca lo ya puesto, lo sube arriba y muestra en cuántos proyectos se usa cada tecnología',
            'Crear una tecnología que todavía no existe desde el mismo buscador, con Enter',
            'Lo elegido se muestra en una sola fila que se desliza de lado, para que no empuje el formulario hacia abajo',
            'Icono propio: se arrastra una imagen encima o se pulsa para elegirla del disco',
            'La imagen se recorta al cuadrado por el centro, se reduce a 192px y se guarda como WebP; el avatar de la cuenta, a 288px',
            'Quitar la imagen subida y volver al monograma',
            'Monograma automático de dos letras que ignora conectores: Bot de reportes da BR y no BD',
            'Siete acentos preajustados (ámbar, violeta, verde azulado, rosa, azul, lima y pizarra) más color libre',
            'Selector de color propio con área de saturación y brillo, tira de tono y campo hexadecimal, dibujado con las superficies de la app',
            'Enlaces de repositorio y publicado en monoespaciada; el https:// se completa solo si falta',
            'Interruptor para fijar el proyecto arriba, con su explicación al lado',
          ],
        },
        {
          area: 'Cuenta y apariencia',
          items: [
            'Menú de cuenta en la barra superior con foto, nombre y correo',
            'El nombre se edita dentro del propio menú y se guarda solo 700 ms después de dejar de escribir, sin botón de guardar',
            'Foto de perfil que se arrastra o se pulsa, recortada y reducida en el navegador antes de subirla',
            'Quitar la foto y volver a las iniciales, que se toman de la primera y la última palabra del nombre',
            'Tema claro, oscuro o el del sistema, en un control de tres iconos',
            'La preferencia de tema vive en la columna users.theme de MySQL, así que sigue al usuario entre navegadores y equipos',
            'El correo no se puede cambiar y aparece con un candado al lado',
          ],
        },
        {
          area: 'Llaves para agentes',
          items: [
            'Crear llaves personales con etiqueta automática correlativa (Agente 1, Agente 2)',
            'La llave se muestra entera una única vez, al crearla; después solo quedan sus ocho primeros caracteres',
            'En la base solo se guarda el SHA-256 de la llave, nunca el texto',
            'Listado de llaves activas con etiqueta, prefijo y cuándo se usó por última vez, o sin usar',
            'Revocar una llave, que deja de servir de inmediato',
            'Bloque de instrucciones listo para pegar a un asistente: la dirección de la documentación más la cabecera de autenticación',
            'Esa dirección se arma con el origen real del navegador, así que abriendo desde el teléfono sale la IP de la red y no localhost',
            'Documentación completa de la API en texto plano servida por la propia aplicación en /api/docs',
            'Comprobar que una llave sirve con /whoami, que devuelve la cuenta, cuántos proyectos tiene y si se entró por llave o por sesión',
            'Las rutas de llaves solo aceptan cookie de navegador: una llave no puede fabricar más llaves',
          ],
        },
        {
          area: 'API para agentes',
          items: [
            'Autenticación por cabecera Authorization con una llave que empieza por tp_, como alternativa a la cookie',
            'Buscar un proyecto por nombre sin distinguir mayúsculas, sin conocer su identificador',
            'Crear o actualizar por nombre en una sola llamada: devuelve 200 si ya existía y 201 si lo acaba de crear',
            'Actualización parcial: lo que no llega en el cuerpo no se toca',
            'Listar, leer, crear, editar y borrar proyectos por identificador',
            'Guardar el orden manual mandando hasta 500 identificadores de golpe',
            'Las instrucciones piden explícitamente al agente que no borre proyectos ni los renombre por su cuenta',
          ],
        },
        {
          area: 'Datos y validación',
          items: [
            'Todo lo que entra pasa por un esquema Zod antes de tocar MySQL, y el primer error se devuelve ya redactado',
            'El acento acepta uno de los siete nombres o un hexadecimal de seis dígitos, y nada más',
            'Nombre de hasta 160 caracteres, descripción de hasta 2000, enlaces de hasta 600 y hasta 20 tecnologías de 40 caracteres',
            'Las imágenes aceptan hasta 3 MB en data URL, y el cuerpo de la petición está limitado a 4 MB',
            'Las cadenas vacías se guardan como null y no como texto vacío',
            'El reordenamiento se aplica dentro de una transacción, con vuelta atrás si algo falla a medias',
            'Un proyecto nuevo nace en lo más alto: su orden es el mínimo actual menos uno',
            'Toda consulta de proyectos lleva el identificador del dueño incrustado, así que no hay forma de leer ni tocar los de otro',
            'Borrar una cuenta arrastra sus proyectos, sus llaves y sus enlaces de recuperación por clave foránea',
          ],
        },
        {
          area: 'Interfaz y movimiento',
          items: [
            'Instalable como aplicación, con manifiesto, icono enmascarable y un atajo directo a Nuevo proyecto',
            'El service worker guarda solo el cascarón —fuentes, iconos y manifiesto— y deja pasar sin tocar todo lo que va a /api',
            'Fuentes auto-hospedadas en dos archivos woff2: la aplicación no pide nada a ningún CDN',
            'Entrada escalonada de 55 ms en las listas, con tope para que una lista larga no se arrastre',
            'Pantalla neutra con el icono latiendo mientras se resuelve la sesión, para que no se vean el acceso y la lista a la vez',
            'Todas las animaciones y transiciones se anulan si el sistema pide movimiento reducido',
            'El fondo del acceso lleva la pila de losas animada, hilos de trazos que la recorren y puntos flotando, todo dibujado en SVG',
            'La losa encendida de esa pila sube o baja según el momento del acceso: entrar, crear cuenta, recuperar o poner clave nueva',
            'El panel editorial del acceso cambia de lado según la pantalla, y cada columna entra desde el lado del que viene',
            'Cada fila lleva su propio adorno de losas: tres composiciones que rotan por posición para que dos vecinas no repitan dibujo',
          ],
        },
        {
          area: 'Arranque y operación',
          items: [
            'Un solo comando busca un puerto libre para el API desde el 4300 y otro para la app desde el 4200, y escribe el proxy que los une',
            'El puerto se comprueba en 0.0.0.0, 127.0.0.1 y ::1, porque en Windows localhost resuelve antes a IPv6',
            'El dev-server escucha también en la red local e imprime la IP para abrir la app desde el teléfono',
            'La preparación de la base pide la contraseña de MySQL por consola sin mostrarla, crea la base y genera backend/.env',
            'Opcionalmente crea un usuario de MySQL dedicado con permisos solo sobre esa base',
            'Las cuatro migraciones versionadas se aplican solas al arrancar y quedan registradas en su propia tabla',
            'Un comando vacía la base por completo, y exige escribir la palabra borrar para confirmarlo',
            'Los errores de MySQL se traducen a un mensaje con la solución: base que no existe, credenciales rechazadas o servicio caído',
          ],
        },
      ],
      carpetas: [
        {
          carpeta: 'raíz',
          que_es: 'Monorepo de tres piezas. Arriba solo viven la orquestación y el empaquetado.',
          hijos: [
            {
              carpeta: 'package.json',
              que_es: 'los comandos que gobiernan las dos mitades: arrancar, construir, servir y las tareas de base de datos',
            },
            {
              carpeta: 'Dockerfile',
              que_es: 'imagen única sobre node:22-bookworm-slim que compila las dos partes y arranca solo el backend',
            },
          ],
        },
        {
          carpeta: 'backend/',
          que_es: 'API REST en Express 5 con TypeScript en ESM, sobre MySQL con mysql2.',
          hijos: [
            {
              carpeta: 'src/http',
              que_es: 'la app Express, el router con las rutas, el manejo de errores, el acceso web con Google y la documentación para agentes',
            },
            {
              carpeta: 'src/auth',
              que_es: 'registro y sesión, llaves de API, restablecimiento de contraseña e identidad de Google',
            },
            {
              carpeta: 'src/projects',
              que_es: 'el repositorio de proyectos: listar, buscar por nombre, crear, editar, borrar y reordenar',
            },
            {
              carpeta: 'src/db',
              que_es: 'el pool con transacciones, las migraciones versionadas y las utilidades de línea de comandos',
            },
            {
              carpeta: 'src/domain',
              que_es: 'los tipos del dominio y los esquemas Zod que validan todo lo que entra',
            },
          ],
        },
        {
          carpeta: 'frontend/',
          que_es: 'Aplicación Angular 22 standalone, sin zonas, con signals y Tailwind 4.',
          hijos: [
            {
              carpeta: 'src/app/core',
              que_es: 'modelos, cliente de la API y los almacenes de sesión y de proyectos',
            },
            {
              carpeta: 'src/app/features',
              que_es: 'las dos pantallas más el menú de cuenta: acceso, proyectos y llaves para agentes',
            },
            {
              carpeta: 'src/app/shared',
              que_es: 'iconos, campos, selectores de stack y de color, adornos SVG y el anclaje de desplegables',
            },
            {
              carpeta: 'src/styles.css',
              que_es: 'el sistema visual entero: tokens de los dos temas, componentes y animaciones',
            },
            {
              carpeta: 'public/',
              que_es: 'las dos fuentes woff2 auto-hospedadas, los iconos, el manifiesto y el service worker',
            },
          ],
        },
        {
          carpeta: 'scripts/',
          que_es: 'Las tres utilidades del monorepo, en Node puro y sin dependencias.',
          hijos: [
            {
              carpeta: 'dev.mjs',
              que_es: 'busca puertos libres, escribe el proxy, levanta las dos partes y anuncia la URL',
            },
            {
              carpeta: 'setup-db.mjs',
              que_es: 'crea la base de datos, opcionalmente su usuario, y genera backend/.env',
            },
            {
              carpeta: 'install.mjs',
              que_es: 'instala las dependencias de backend y frontend en una sola pasada',
            },
          ],
        },
      ],
      arquitectura: {
        resumen: 'Monorepo de dos mitades y un puñado de scripts. El cliente es una aplicación Angular 22 standalone, sin zonas y con signals, que habla por fetch con una API REST de Express 5 en TypeScript. La API expone veinticuatro rutas bajo /api más el ida y vuelta del acceso con Google, que cuelga de la raíz porque la URI de retorno registrada es la misma para todas las aplicaciones del servidor. Los datos viven en MySQL 8 a través de mysql2 con pool y transacciones, en cuatro tablas creadas por migraciones versionadas que se aplican solas al arrancar. No hay almacenamiento de archivos: los iconos de proyecto y los avatares se recortan y se reducen en el navegador y se guardan como data URL en columnas LONGTEXT. En desarrollo, un lanzador propio busca dos puertos libres y escribe el proxy que manda /api al backend, de modo que el navegador solo habla con el dev-server. En producción todo se empaqueta en una imagen Docker única: el mismo Express sirve el build de Angular con vuelta al index.html para cualquier ruta que no empiece por /api, y expone un /health fuera de /api para que el servidor sepa si el contenedor levantó de verdad. La única dependencia externa es Google, y es opcional: sin clave configurada el botón lo dice y la aplicación no pide nada a ningún tercero.',
        capas: [
          {
            nombre: 'Cliente',
            piezas: [
              {
                nombre: 'Aplicación Angular',
                tecnologia: 'Angular 22 · zoneless · signals · Tailwind 4',
                que_hace: 'Dos pantallas con carga diferida y guardas. El acceso y la pila de proyectos, con la lista virtualizada y toda la escritura pasando por un almacén en memoria.',
              },
              {
                nombre: 'Service worker',
                tecnologia: 'JavaScript plano · Cache API',
                que_hace: 'Hace la aplicación instalable y guarda solo el cascarón: fuentes, iconos y manifiesto. Nunca intercepta las peticiones a /api.',
              },
            ],
          },
          {
            nombre: 'Servidor',
            piezas: [
              {
                nombre: 'API REST',
                tecnologia: 'Express 5 · TypeScript · Zod',
                que_hace: 'Veinticuatro rutas bajo /api. Valida cada cuerpo con un esquema antes de tocar la base y traduce los errores de MySQL a mensajes con solución.',
              },
              {
                nombre: 'Sesión y llaves',
                tecnologia: 'JWT · bcrypt 12 rondas · SHA-256',
                que_hace: 'Cookie httpOnly de 30 días y, como alternativa para agentes, llaves de API de las que solo se guarda el resumen criptográfico.',
              },
              {
                nombre: 'Acceso con Google',
                tecnologia: 'OAuth 2.0 por redirección',
                que_hace: 'Manda a Google con un estado aleatorio, canjea el código por la identidad y la verifica contra el endpoint público de Google, sin librería.',
              },
            ],
          },
          {
            nombre: 'Datos',
            piezas: [
              {
                nombre: 'MySQL',
                tecnologia: 'MySQL 8 · mysql2 con pool',
                que_hace: 'Cuatro tablas: cuentas, proyectos, enlaces de recuperación y llaves de API. El reordenamiento va en transacción y el borrado en cascada por clave foránea.',
              },
              {
                nombre: 'Migraciones',
                tecnologia: 'SQL versionado en TypeScript',
                que_hace: 'Cuatro migraciones que se aplican solas al arrancar y quedan anotadas en su propia tabla para no repetirse.',
              },
            ],
          },
        ],
      },
      decisiones: [
        {
          titulo: 'En el navegador no se guarda nada, ni siquiera el tema',
          texto: 'No hay localStorage ni sessionStorage en ninguna parte. La sesión es un JWT dentro de una cookie httpOnly con SameSite lax y 30 días de vida, que el JavaScript de la página no puede leer, así que un XSS no puede robarla. La preferencia de tema claro u oscuro vive en la columna users.theme de MySQL, no en el equipo: el efecto secundario buscado es que el tema siga al usuario entre navegadores y máquinas. El precio es que la sesión hay que resolverla con una llamada al servidor antes del primer pintado, y por eso la aplicación arranca con una pantalla neutra en vez de con la pantalla equivocada.',
        },
        {
          titulo: 'Los campos del proyecto se declaran sin valores por defecto y los defectos se añaden aparte',
          texto: 'Un .partial() sobre un esquema de Zod que ya lleva .default() no quita el defecto: sigue rellenando lo que no llegó. Con eso, cambiar el estado de un proyecto desde la lista mandaba solo un campo y el servidor reponía todo lo demás con su valor inicial, borrando el stack, el color y el fijado. La solución fue declarar los campos crudos una vez y componer dos esquemas encima: el de creación añade los defectos y el de actualización solo hace partial. Es más código para decir lo mismo, pero es la única forma de que una actualización parcial sea de verdad parcial.',
        },
        {
          titulo: 'La lista se virtualiza, y el alto de la fila está escrito en dos sitios que tienen que coincidir',
          texto: 'Con quinientos proyectos en el DOM, el desplazamiento se medía en 734 ms, así que solo se montan las filas visibles. La contrapartida del scroll virtual es que el alto de cada hueco tiene que ser un número conocido de antemano: 104px en escritorio y 152px en el teléfono. Ese número vive a la vez en el CSS del hueco y en un cálculo de TypeScript que lee el punto de corte, y si los dos se separan la lista se desalinea. Por eso existe un servicio de viewport propio: hay medidas que una media query no puede entregarle al componente.',
        },
        {
          titulo: 'El inicio de sesión compara bcrypt aunque el usuario no exista',
          texto: 'Cuando no hay fila para ese correo, en vez de responder de inmediato se compara la contraseña contra un hash inválido de relleno. El resultado es el mismo error, pero tarda lo mismo en llegar, así que no se puede deducir por el tiempo de respuesta qué correos están registrados. La misma idea gobierna la recuperación de contraseña: si el correo no existe no se hace nada y se devuelve exactamente la misma respuesta que si existiera.',
        },
        {
          titulo: 'Una llave de API no puede fabricar más llaves',
          texto: 'El middleware que lee la cabecera Authorization marca la petición como llegada por llave, y las tres rutas de gestión de llaves rechazan justamente ese caso aunque la autenticación sea válida. Un agente con la llave puede leer y escribir proyectos, que es para lo que se le dio, pero no puede emitirse credenciales nuevas ni ver las que ya existen. Del token solo se guarda su SHA-256 y el texto se muestra una única vez al crearlo: si se pierde, se revoca y se saca otro.',
        },
        {
          titulo: 'Existe un PUT por nombre que la interfaz no usa nunca',
          texto: 'La aplicación siempre trabaja con identificadores, pero un asistente que está dentro de la carpeta de un proyecto sabe cómo se llama y no su UUID. Por eso hay una ruta que busca sin distinguir mayúsculas y, en una sola llamada, actualiza si existe o crea si no, devolviendo 201 solo cuando lo acaba de crear. El precio es que el nombre se convierte en clave de hecho, y de ahí que las instrucciones para el agente le pidan explícitamente no renombrar proyectos por su cuenta.',
        },
        {
          titulo: 'La documentación de la API se sirve abierta, sin autenticación',
          texto: 'La ruta que explica cómo hablar con Trackpile no pide llave: lo que se protege son los datos, no la forma de pedirlos. Así basta con pasarle un enlace al agente para que sepa qué hacer, sin tener que pegarle además un documento. Está escrita en texto plano y con ejemplos completos de curl en vez de una tabla de campos, porque el lector previsto es un modelo que necesita ver la llamada entera.',
        },
        {
          titulo: 'La variable ORIGIN manda sobre las cabeceras al construir cualquier dirección pública',
          texto: 'Detrás del proxy la petición llega como localhost, y una dirección así no le sirve a un agente ni a un enlace de recuperación enviado por correo. El orden es siempre el mismo: ORIGIN si está puesta, luego las cabeceras x-forwarded reenviadas, y el host de la petición como último recurso; de cada cabecera se toma solo el primer valor, porque una cadena de proxies las acumula separadas por comas. En el panel de llaves el problema es el opuesto y se resuelve al revés: la dirección de la documentación se arma con el origen real del navegador, para que al abrir desde el teléfono salga la IP de la red y no localhost.',
        },
        {
          titulo: 'El acceso con Google va por redirección y cuelga de la raíz, no de /api',
          texto: 'La URI de vuelta registrada en la consola de Google es /auth/google/callback, la misma que usan las demás aplicaciones del servidor, así que ese router se monta fuera de la API. Antes esto era One Tap, que se suprime en silencio —tiene periodo de espera si lo cerraste una vez y hay navegadores que no lo muestran— y el resultado era un botón que aparentemente no hacía nada. Con redirección el botón siempre responde, y además el botón es propio y no un iframe de Google que haya que disimular. El estado se manda a la vez en una cookie de diez minutos y en la URL, y si al volver no coinciden la petición se descarta.',
        },
        {
          titulo: 'Entrar con Google también es abrir cuenta, así que la lista de correos permitidos se aplica igual',
          texto: 'Si el correo de Google no corresponde a ninguna cuenta, se está registrando, y por tanto se comprueban tanto el interruptor de registro cerrado como la lista de correos autorizados antes de crear nada. Sin esa comprobación, cerrar el registro por correo dejaba abierta la puerta de atrás. La lista existe precisamente para poder publicar la aplicación en internet sin cerrarse uno mismo fuera.',
        },
        {
          titulo: 'El service worker guarda el cascarón y nunca las respuestas de /api',
          texto: 'Solo se cachean fuentes, iconos y manifiesto, que no cambian y pesan; todo lo demás pasa sin tocarse. Una lista de proyectos servida desde caché sería una mentira, porque es de un solo usuario y cambia a cada rato. Además, interceptar sin tener nada guardado hace que el navegador falle al convertir la respuesta y la página se quede en blanco, así que el manejador se limita a lo estático y devuelve el control en cuanto la petición no cumple sus condiciones.',
        },
        {
          titulo: 'El router no usa view transitions: cada pantalla se anima sola',
          texto: 'La API de transiciones de vista captura la pantalla entera y dejaba la vista vieja y la nueva encima a la vez, con el DOM congelado en la captura. Se quitó del router y la que entra se anima desde su propio CSS, así que nunca hay dos. El cruce de columnas del acceso se hace con desplazamientos de verdad, cada una entrando desde el lado del que viene, y se salta en el primer pintado contando los intercambios para no animar una pantalla que nadie ha cambiado.',
        },
        {
          titulo: 'La animación de entrada va en un envoltorio interior y no en el elemento raíz',
          texto: 'Un ancestro con transform, filter o perspective convierte position:fixed en relativo a él y no a la ventana. Con la animación puesta en el host, los menús anclados aparecían decenas de píxeles por debajo de su botón y el cajón de edición se pintaba desplazado. La regla que quedó es explícita: lo que va en posición fija cuelga del host, fuera del envoltorio que se anima. Además hay una función de anclaje única para todos los desplegables, y mide el origen desde el elemento donde vivirá el panel, no desde el botón que lo abre, porque el transform del scroll virtual corría el menú de estado casi treinta píxeles.',
        },
        {
          titulo: 'No hay tabla de sombras: lo que separa es el escalón de superficie',
          texto: 'El sistema visual define cinco niveles de gris y cuatro de tinta, y toda la jerarquía se hace con eso; el ámbar de marca aparece en menos del cinco por ciento de los píxeles. Tampoco hay bordes ni anillos de foco de color: al pulsar salía un cerco naranja que parecía un hover mal hecho, así que el foco solo se dibuja al navegar con teclado y en un tono neutro. El hover de la fila es explícitamente quieto —cambia el color y enciende el adorno del fondo, no mueve ni agranda— y los botones de acción tienen su hueco reservado para que aparecer no desplace nada.',
        },
        {
          titulo: 'Las imágenes se reducen en el navegador y se guardan como texto dentro de MySQL',
          texto: 'No hay carpeta de subidas ni bucket: el icono de proyecto y el avatar se recortan al cuadrado por el centro con un canvas, se reducen a 192 y 288 píxeles y se codifican en WebP como data URL. Eso permitió no montar almacenamiento de archivos, pero obliga a subir el límite del cuerpo de la petición a 4 MB y a que las columnas pasaran a LONGTEXT en una migración. También hay que respetarlo al normalizar enlaces: la función que añade https:// cuando falta tiene que dejar intactos los data: o corrompería la imagen.',
        },
        {
          titulo: 'Sin MySQL el proceso no arranca, y lo dice con la solución',
          texto: 'Antes de escuchar, el servidor lanza una consulta de prueba; si falla, sale con código de error en lugar de quedarse vivo respondiendo mal. El mensaje no es la excepción cruda: se distinguen los tres fallos habituales —la base no existe, las credenciales son rechazadas, el servicio no responde— y cada uno imprime qué comando ejecutar o qué revisar. Aquí no tiene sentido arrancar a medias, porque esta aplicación no sabe hacer nada sin base de datos.',
        },
        {
          titulo: 'El lanzador comprueba cada puerto en tres direcciones antes de darlo por libre',
          texto: 'Mirando solo 127.0.0.1, un puerto parecía libre aunque otro proyecto ya estuviera escuchando en ::1. Los dos arrancaban, porque son familias distintas, pero en Windows localhost resuelve antes a IPv6 y al abrir la dirección contestaba la otra aplicación: Trackpile parecía roto sin estarlo. Por eso se prueba a enlazar en 0.0.0.0, 127.0.0.1 y ::1, y solo entonces se acepta el puerto. Además se prefiere siempre el mismo número de partida, porque tener varias copias vivas en puertos distintos hacía que se mirara una compilación vieja sin darse cuenta.',
        },
        {
          titulo: 'En producción hay un solo proceso y un /health fuera de /api',
          texto: 'El Express compilado sirve también el frontend construido, con vuelta al index.html para toda ruta que no empiece por /api, así que no hacen falta ni dev-server ni proxy en el servidor. La sonda de vida se monta en la raíz y no dentro de la API por un motivo concreto: colgando de /api caería en el comodín del index.html y devolvería 200 siempre, aunque la base de datos estuviera muerta. En el contenedor se escucha en 0.0.0.0, porque si no nadie llega desde fuera.',
        },
      ],
    },
  },
  {
    nombre: 'Subwise',
    color: '#E6A700',
    logo: '/logos/subwise.png',
    stack: ['Nuxt 4', 'Vue 3', 'MySQL 8', 'TypeScript'],
    descripcion:
      'Control de suscripciones mensuales: que estas pagando, cuanto suma al mes y cuando toca cada cobro, para dejar de perder plata en lo que ya no usas.',
    arquitectura:
      'Vue 3 con Nuxt y renderizado en servidor sobre MySQL, todo tipado con TypeScript. El calculo de gasto mensual normaliza cobros anuales, trimestrales y semanales a una misma unidad para poder compararlos.',
    url: 'https://subwise.acmsy.com',
    captura: 'subwise',
    landing: '#',
    // Estetica y ficha larga sacadas del repositorio de la app.
    estetica: {
      google: 'Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700',
      fuente: {
        titulo: '\'Space Grotesk\', system-ui, sans-serif',
        cuerpo: 'Inter, system-ui, sans-serif',
        mono: 'ui-monospace, \'SF Mono\', Consolas, monospace',
      },
      radio: '16px',
      curva: 'cubic-bezier(0.4, 0.5, 0.15, 1)',
      claro: {
        fondo: '#F5F1E3',
        sup: '#FEFDFB',
        texto: '#201B0E',
        suave: '#6D6655',
        acento: '#E6A700',
      },
      oscuro: {
        fondo: '#131310',
        sup: '#24221E',
        texto: '#F2F1ED',
        suave: '#B1ACA0',
        acento: '#E6A700',
      },
    },
    detalle: {
      stackRoles: [
        {
          nombre: 'Nuxt 4',
          papel: 'El armazón. Ocho páginas en modo SPA y el backend Nitro dentro del mismo proyecto.',
        },
        {
          nombre: 'Vue 3',
          papel: 'La interfaz. Veintitrés componentes propios, sin librería de UI de terceros.',
        },
        {
          nombre: 'MySQL 8',
          papel: 'Los datos. Ocho tablas InnoDB con mysql2 y consultas escritas a mano.',
        },
        {
          nombre: 'TypeScript',
          papel: 'El tipado. Modo estricto en el dominio, las rutas y los composables.',
        },
        {
          nombre: 'web-push',
          papel: 'Los avisos. Notificaciones VAPID de renovación enviadas desde el propio servidor.',
        },
      ],
      unaFrase: 'Aplicación web instalable hecha con Nuxt 4 en modo SPA sobre MySQL, que reúne lo que pagas cada mes, lleva los cobros anuales y en otra moneda a una cifra mensual comparable, y avisa por notificación push antes de cada renovación.',
      porQueExiste: 'Quien paga entre cinco y veinticinco servicios al mes termina perdiendo el hilo: el cargo aparece en el banco y ya no recuerda de dónde salió. Subwise responde tres preguntas y se cierra: cuánto pagas al mes, qué se cobra pronto y qué puedes cancelar. Para que las cifras se puedan comparar entre sí, todo cobro anual se divide entre doce y todo cobro en otra moneda se lleva a la moneda que elija el usuario. Dentro quedó lo que sostiene esas tres respuestas: categorías y métodos de pago propios, historial de cambios de precio, historial de canceladas con lo que dejaste de pagar, y un aviso push antes de cada renovación. Fuera quedó todo lo demás: no hay conexión con el banco, no hay importación de extractos, no hay presupuestos ni metas de ahorro, y la app no compara tu gasto con el del mes pasado.',
      funcionalidades: [
        {
          area: 'Cuenta y sesión',
          items: [
            'Registro con nombre, correo y contraseña, con mínimo de 2 caracteres en el nombre y 8 en la contraseña',
            'El correo se valida contra un patrón y se responde 409 si ya hay una cuenta con ese correo',
            'Inicio de sesión con correo y contraseña, con el mismo mensaje para cuenta inexistente y clave equivocada',
            'Entrada con Google por OAuth 2.0, con alcance openid email profile y selector de cuenta forzado',
            'Si el servidor no tiene credenciales de Google, el botón devuelve al login con un aviso en lugar de fallar',
            'La cuenta de Google se une por correo a una cuenta ya existente y le añade el identificador de Google',
            'Sesión de 30 días en cookie httpOnly, sameSite lax y secure fuera de desarrollo',
            'Cierre de sesión que borra la cookie y marca la cuenta como fuera de línea',
            'Cada entrada queda registrada con su método y sube el contador de accesos de la cuenta',
            'Todas las páginas salvo la de entrada exigen sesión; sin ella se redirige al login',
            'Pantalla de recuperar contraseña, que avisa de que el envío por correo todavía no está disponible',
            'La cuenta recién creada arranca vacía: sin suscripciones, sin categorías y sin métodos de pago',
          ],
        },
        {
          area: 'Inicio: el panel del mes',
          items: [
            'Saludo según la hora del día, con el primer nombre de la cuenta',
            'Cifra grande del gasto mensual en la moneda de visualización elegida',
            'Tres cifras de apoyo: total al año, número de suscripciones activas y cuándo cae el próximo cobro',
            'Tarjeta de aviso cuando hay una suscripción en prueba, con el día en que termina y el monto que se cobrará después',
            'Lista de los cinco próximos cobros con iniciales, fecha y monto en su moneda original',
            'Distintivo de urgencia en los cobros que caen dentro de tres días, en tono de alerta si la suscripción está en prueba',
            'Panel de reparto con las cuatro categorías de mayor gasto, con monto, porcentaje y barra',
            'Las fechas se escriben en relativo: hoy, mañana y en N días hasta 30, y fecha corta a partir de ahí',
          ],
        },
        {
          area: 'Lista de suscripciones',
          items: [
            'La lista muestra solo activas y en prueba; las canceladas viven en Historial',
            'Búsqueda por nombre que filtra mientras escribes',
            'Filtro por categoría en un desplegable que solo ofrece las categorías realmente en uso',
            'El desplegable de categorías añade su propio buscador cuando hay más de ocho',
            'Orden por fecha de cobro, por monto mensual normalizado o alfabético con reglas del español',
            'Contador de servicios y total mensual encima de la lista',
            'Distintivo de prueba en las suscripciones que están en periodo de prueba',
            'Cada fila muestra iniciales, categoría, ciclo, monto en su moneda y cuándo se cobra',
            'Estado vacío con el búho de la marca cuando el filtro no devuelve nada',
            'La suscripción seleccionada queda en la URL, así que la vista se puede compartir o recargar',
          ],
        },
        {
          area: 'Ficha de una suscripción',
          items: [
            'Monto grande en la moneda del cobro, con el equivalente mensual en la moneda de visualización cuando no coinciden',
            'Bloque de próximo cobro con fecha larga y distintivo si faltan tres días o menos',
            'Distintivo de estado: activa, en prueba o cancelada',
            'Fila de datos con ciclo, método de pago, equivalencia al mes, equivalencia al año y fecha de alta',
            'Historial de cambios de precio: cada monto con su fecha y el vigente marcado en el ámbar de la app; esa tabla solo se escribe al crear la suscripción, así que editar el monto después no deja rastro ahí',
            'Cuando no ha habido cambios de precio, la ficha lo dice con el monto vigente en lugar de dejar el bloque vacío',
            'Bloque de notas siempre presente, con texto de relleno cuando está vacío, para que el layout no salte',
            'Cancelar: pasa a estado cancelada, guarda la fecha del día y borra el próximo cobro',
            'Reactivar una cancelada: vuelve a activa y programa el próximo cobro a 30 días',
            'Eliminar la suscripción por completo, junto con su historial de precios',
            'El botón de editar desaparece en las suscripciones canceladas',
          ],
        },
        {
          area: 'Alta y edición',
          items: [
            'El formulario ocupa el mismo panel del detalle, sin ventana emergente',
            'Campos de nombre, monto, ciclo, moneda, categoría, próximo cobro, método de pago y notas',
            'El monto acepta solo dígitos y se muestra con separador de miles en formato colombiano',
            'Guardar exige nombre, monto mayor que cero, ciclo elegido y fecha de próximo cobro',
            'Calendario propio con la semana empezando en lunes, el día de hoy marcado y navegación por mes',
            'Las categorías del desplegable son las del usuario y los métodos son los que él haya creado',
            'Las iniciales del recuadro se derivan de las dos primeras letras del nombre si no vienen de una edición',
            'Al crear se asigna un color de una paleta fija de diez tonos',
            'La suscripción aparece en la lista al instante y el guardado viaja en segundo plano',
          ],
        },
        {
          area: 'Resumen y cálculo del gasto',
          items: [
            'Cifra grande del gasto anual proyectado',
            'Cuatro métricas: gasto mensual, promedio por servicio, servicio más caro y número de activas',
            'Gráfico de barras de los últimos doce meses, con el mes en curso a plena opacidad y los anteriores atenuados',
            'Cada mes suma solo las suscripciones que ya existían y que no estaban canceladas antes de ese mes',
            'Rango mínimo y máximo del gráfico impreso junto al título',
            'Reparto por categoría con monto, porcentaje y barra, ordenado de mayor a menor',
            'Los cobros anuales se dividen entre doce para poder compararlos con los mensuales',
            'Conversión entre peso colombiano, dólar, euro y peso mexicano',
            'Aviso al pie cuando hay cobros en más de una moneda, nombrando la moneda a la que se convierte',
            'En pantalla chica un selector alterna entre el gráfico mensual y el reparto por categoría',
          ],
        },
        {
          area: 'Historial de canceladas',
          items: [
            'Lista de las suscripciones canceladas, de la cancelación más reciente a la más antigua',
            'Cifra grande de lo que dejaste de pagar al mes, con su equivalente anual debajo',
            'Contador de canceladas, en singular o plural según el número',
            'Cada fila muestra la fecha de cancelación en formato largo y el monto tachado',
            'Botón para reactivar cualquier cancelada desde la propia fila',
            'Estado vacío con el búho cuando todavía no has cancelado nada',
          ],
        },
        {
          area: 'Categorías y métodos de pago',
          items: [
            'Crear categorías escribiendo el nombre; el identificador se genera quitando tildes y pasando a minúsculas con guiones',
            'Contador de cuántas suscripciones usan cada categoría',
            'Una categoría en uso no se puede borrar: el botón queda deshabilitado y el servidor también lo rechaza',
            'Crear métodos de pago con texto libre, del estilo de una tarjeta terminada en cuatro dígitos o una billetera',
            'Borrar métodos de pago',
            'Los nombres repetidos se ignoran, tanto en el cliente como en la escritura del servidor',
            'En escritorio ambas listas viven en el menú lateral; en pantalla chica son pestañas de la barra inferior',
          ],
        },
        {
          area: 'Ajustes y perfil',
          items: [
            'Cambiar el nombre visible de la cuenta',
            'Subir foto de perfil arrastrándola sobre el avatar o eligiéndola del disco, y quitarla después',
            'Recortador circular propio: arrastrar para encuadrar y rueda o pellizco para acercar hasta tres aumentos',
            'Guías de tercios que aparecen mientras mueves la foto y se desvanecen a los 700 ms',
            'Botón de centrar que devuelve el encuadre inicial, deshabilitado si ya estás en él',
            'La foto se exporta como JPEG cuadrado de 256 píxeles con calidad 0,88',
            'Elegir la moneda de visualización entre las cuatro disponibles',
            'Elegir cuántos días antes avisar del cobro: uno, tres o siete',
            'Formulario de cambio de contraseña que solo comprueba en el cliente que escribiste la actual, que la nueva llegue a seis caracteres y que la confirmación coincida: no viaja al servidor',
            'El correo se muestra con candado y una nota de que no se puede cambiar',
            'Los cambios de perfil se guardan solos medio segundo después de dejar de escribir',
            'Cerrar sesión desde el botón al pie de la pantalla',
          ],
        },
        {
          area: 'Recordatorios, tema e instalación',
          items: [
            'Interruptor de recordatorios en el dispositivo, que pide permiso al navegador y registra la suscripción push; queda deshabilitado si el navegador no trae service worker, PushManager o Notification',
            'Mensaje explícito cuando el permiso se deniega o la activación falla',
            'Al apagarlo se borra la suscripción en el servidor y se cancela en el navegador',
            'El servidor revisa cada 30 minutos y envía los avisos una vez al día, pasadas las ocho de la mañana hora de Colombia',
            'Solo se avisan las suscripciones activas o en prueba cuya fecha caiga dentro de la ventana elegida por el usuario',
            'Cada suscripción se marca como avisada el día que se avisa, para no repetir el aviso',
            'El texto de la notificación nombra el servicio, dice si se renueva hoy, mañana o en N días, y trae el monto formateado',
            'Al tocar la notificación se enfoca la pestaña abierta de la app o se abre una nueva',
            'Ruta protegida por un secreto para disparar la tanda de avisos a mano',
            'Interruptor de aviso por correo guardado en la cuenta',
            'Tema claro y oscuro elegido en un selector de dos posiciones, guardado en el navegador',
            'Aplicación instalable: manifiesto en español, arranque en modo standalone e iconos normal y enmascarable',
            'El service worker precachea los archivos del build y toma el control de inmediato al actualizarse',
            'Todas las animaciones se anulan si el sistema pide movimiento reducido',
          ],
        },
      ],
      carpetas: [
        {
          carpeta: 'raíz',
          que_es: 'Un solo proyecto Nuxt 4, sin monorepo. Arriba viven la configuración, los estilos y los documentos del diseño.',
          hijos: [
            {
              carpeta: 'nuxt.config.ts',
              que_es: 'modo SPA, módulos de Tailwind, fuentes y PWA, y el script que fija el tema antes del primer pintado',
            },
            {
              carpeta: 'assets/css',
              que_es: 'main.css y layout.css: los tokens de los dos temas y todo el layout, escritos a mano',
            },
            {
              carpeta: 'tailwind.config.ts',
              que_es: 'la paleta, la escala tipográfica y las curvas declaradas del proyecto',
            },
            {
              carpeta: 'Dockerfile',
              que_es: 'imagen sobre node:22-bookworm-slim que compila y sirve la salida de Nitro en el puerto 3000',
            },
          ],
        },
        {
          carpeta: 'pages/',
          que_es: 'Las ocho rutas de la aplicación; el enrutador de Nuxt las toma por el nombre del archivo.',
          hijos: [
            {
              carpeta: 'index.vue',
              que_es: 'el panel del mes: total, próximos cobros y reparto por categoría',
            },
            {
              carpeta: 'suscripciones.vue',
              que_es: 'lista y detalle en un solo archivo, con la selección reflejada en la URL',
            },
            {
              carpeta: 'resumen.vue',
              que_es: 'gráfico de los últimos doce meses y el reparto por categoría de la lista entera',
            },
            {
              carpeta: 'ajustes.vue',
              que_es: 'perfil, foto, moneda, tema y avisos',
            },
            {
              carpeta: 'login.vue',
              que_es: 'entrada, registro y recuperación resueltos en una sola pantalla que cambia de modo',
            },
          ],
        },
        {
          carpeta: 'components/',
          que_es: 'Los veintitrés componentes con prefijo Sw. No hay librería de componentes de terceros.',
          hijos: [
            {
              carpeta: 'SwSubsList.vue, SwSubDetail.vue, SwSubForm.vue',
              que_es: 'las tres piezas de la pantalla de suscripciones',
            },
            {
              carpeta: 'SwPopover.vue',
              que_es: 'desplegable dibujado en el body y posicionado contra el viewport',
            },
            {
              carpeta: 'SwPhotoCrop.vue',
              que_es: 'recortador circular de avatar con arrastre, rueda y pellizco',
            },
            {
              carpeta: 'SwIcon.vue',
              que_es: 'los 36 iconos del set, dibujados a mano dentro de un solo archivo',
            },
          ],
        },
        {
          carpeta: 'composables/',
          que_es: 'El estado compartido de la aplicación, en refs de módulo. No hay librería de estado.',
          hijos: [
            {
              carpeta: 'useDatos.ts',
              que_es: 'suscripciones, totales, conversión de moneda, fechas y llamadas a la API',
            },
            {
              carpeta: 'useTema.ts',
              que_es: 'tema claro y oscuro más un hook de media query',
            },
            {
              carpeta: 'usePush.ts',
              que_es: 'permiso del navegador y alta o baja de la suscripción push',
            },
          ],
        },
        {
          carpeta: 'server/',
          que_es: 'El backend Nitro, que corre en el mismo proceso que sirve la aplicación.',
          hijos: [
            {
              carpeta: 'api/',
              que_es: 'las 17 rutas: datos, suscripciones, categorías, métodos, perfil, sesión y push',
            },
            {
              carpeta: 'utils/',
              que_es: 'pool de MySQL, hash y firma de sesión, OAuth de Google, Web Push y el repositorio de datos',
            },
            {
              carpeta: 'routes/auth/google/',
              que_es: 'inicio y retorno del flujo de OAuth, fuera del prefijo de API',
            },
            {
              carpeta: 'middleware/auth.ts',
              que_es: 'resuelve el usuario de la cookie en cada petición y lo deja en el contexto',
            },
            {
              carpeta: 'plugins/scheduler.ts',
              que_es: 'el temporizador interno que dispara los recordatorios de renovación',
            },
          ],
        },
        {
          carpeta: 'db/',
          que_es: 'Los tres archivos SQL que levantan el esquema MySQL 8, aplicados en orden a mano.',
          hijos: [
            {
              carpeta: '01-schema.sql',
              que_es: 'usuarios, suscripciones, historial de precios, categorías y métodos de pago',
            },
            {
              carpeta: '02-acmsy-push.sql',
              que_es: 'el espejo de accesos y la tabla de suscripciones de Web Push',
            },
            {
              carpeta: '03-push-reminded.sql',
              que_es: 'la columna que marca el día en que ya se avisó una renovación',
            },
          ],
        },
      ],
      arquitectura: {
        resumen: 'Un solo proyecto Nuxt 4: la interfaz y el backend viven en el mismo repositorio y en el mismo proceso. El renderizado en servidor está apagado a propósito, así que el navegador recibe una aplicación de una sola página y Nitro se queda solo con las rutas de API. Esas rutas hablan directamente con MySQL 8 a través de mysql2, con SQL escrito a mano y sin ORM. La sesión viaja en una cookie httpOnly firmada, y un middleware de servidor resuelve el usuario antes de cada petición. El estado del cliente se carga una sola vez al arrancar, desde una única ruta de datos, y desde ahí cada cambio se pinta al instante y se envía al servidor en segundo plano. Los recordatorios de renovación salen del propio proceso Nitro: un temporizador interno revisa cada media hora y manda notificaciones Web Push firmadas con VAPID al service worker. Todo se empaqueta en una imagen Docker sobre node:22-bookworm-slim que arranca la salida de Nitro en el puerto 3000.',
        capas: [
          {
            nombre: 'Cliente',
            piezas: [
              {
                nombre: 'Aplicación de una página',
                tecnologia: 'Nuxt 4 · Vue 3 · CSS propio',
                que_hace: 'Ocho páginas y veintitrés componentes propios. El estado vive en refs de módulo dentro de composables, sin librería de estado.',
              },
              {
                nombre: 'Service worker',
                tecnologia: 'Workbox · injectManifest',
                que_hace: 'Precachea los archivos del build y atiende los eventos de notificación push y de clic sobre ella.',
              },
            ],
          },
          {
            nombre: 'Servidor',
            piezas: [
              {
                nombre: 'Rutas Nitro',
                tecnologia: 'Nitro · H3 · TypeScript',
                que_hace: 'Diecisiete rutas de API más el par de OAuth. Un middleware resuelve la sesión de la cookie antes de que corra cualquiera.',
              },
              {
                nombre: 'Capa de datos',
                tecnologia: 'mysql2 · SQL a mano',
                que_hace: 'Un pool de diez conexiones y consultas escritas una a una; todas filtran por el identificador del usuario.',
              },
              {
                nombre: 'Programador interno',
                tecnologia: 'setInterval en el proceso Nitro',
                que_hace: 'Revisa cada 30 minutos y una vez al día, pasadas las ocho de la mañana en Colombia, envía los recordatorios.',
              },
            ],
          },
          {
            nombre: 'Datos y servicios',
            piezas: [
              {
                nombre: 'MySQL 8',
                tecnologia: 'InnoDB · utf8mb4',
                que_hace: 'Ocho tablas: cuentas, suscripciones, historial de precios, categorías, métodos de pago, suscripciones push y el par de espejo (cuentas y accesos) que lee un panel externo.',
              },
              {
                nombre: 'Web Push',
                tecnologia: 'web-push · VAPID',
                que_hace: 'Entrega las notificaciones de renovación y borra por su cuenta los endpoints que el navegador ya dio de baja.',
              },
              {
                nombre: 'Google OAuth',
                tecnologia: 'OAuth 2.0 · openid email profile',
                que_hace: 'Entrada con cuenta de Google. El correo es la llave que une la identidad con la cuenta que ya exista.',
              },
            ],
          },
        ],
      },
      decisiones: [
        {
          titulo: 'El renderizado en servidor está apagado a propósito',
          texto: 'La configuración fija ssr en falso y el comentario da el motivo: el layout responsive se resuelve por usuario y sin parpadeo. La pantalla de suscripciones lo deja ver, porque decide con una consulta de medios en JavaScript si pinta las dos columnas o una sola vista a la vez, y en el servidor habría que adivinar el ancho y corregirlo después. Con la aplicación en modo cliente, Nitro deja de generar HTML y se queda solo como API. El precio es que la primera pantalla llega vacía hasta que monta la aplicación, que hizo falta un script en línea para el tema, y que no hay nada que indexar.',
        },
        {
          titulo: 'Tailwind está instalado y no se usa en ninguna plantilla',
          texto: 'El módulo de Tailwind está en la configuración y tailwind.config.ts declara la paleta, la escala tipográfica, las animaciones y las curvas del proyecto. En las plantillas no queda ni una clase de utilidad: todo el estilo son clases propias y variables CSS escritas en main.css y layout.css, y de Tailwind solo entra el reset que arrastran las tres directivas del inicio de main.css. El precio es que hay dos fuentes de verdad para el color y no coinciden: el crema declarado en el tema es #FFFBEB y el que de verdad pinta el fondo claro es #F5F1E3.',
        },
        {
          titulo: 'El tema se decide con un script en línea antes de que exista la aplicación',
          texto: 'En el head se inyecta un script diminuto que lee la clave del tema en el almacenamiento local y estampa el atributo en el elemento raíz. Con la aplicación en modo cliente, esperar a que Vue monte significaba mostrar el tema equivocado durante unas décimas y luego cambiarlo a la vista. La contrapartida es una duplicación deliberada: la misma lógica está en ese script y en el composable del tema, y hay que tocarlas juntas.',
        },
        {
          titulo: 'Ni el documento ni el cuerpo scrollean nunca',
          texto: 'El CSS base fija alto completo y overflow oculto en html y body, y esconde todas las barras de desplazamiento. El scroll vive dentro de contenedores concretos: la lista de suscripciones, el cuerpo del formulario, la lista de categorías. El motivo declarado es la aplicación instalada, donde una unidad de alto de viewport puede exceder el alto real y aparece un desplazamiento fantasma. El precio se ve en el archivo de layout: cada pantalla tiene que encadenar a mano su cadena de flex con altura mínima cero para que el scroll caiga donde debe.',
        },
        {
          titulo: 'La sesión es un HMAC escrito a mano, no un JWT',
          texto: 'El token es identificador, vencimiento y firma HMAC-SHA256 unidos por puntos, verificados con comparación de tiempo constante. No entra ninguna librería de tokens y el formato es legible de un vistazo al depurar. El precio es que no hay revocación ni rotación: una cookie robada vale sus treinta días completos, y si la variable del secreto falta el código cae a un valor por defecto que lo dice en su propio nombre.',
        },
        {
          titulo: 'Las contraseñas se hashean con scrypt del núcleo de Node',
          texto: 'El formato guardado es el algoritmo, la sal de dieciséis bytes y la clave de sesenta y cuatro, separados por signos de dólar, y la verificación compara en tiempo constante. Es la misma decisión que el resto del proyecto: cero dependencias para algo que Node ya trae. El precio es que los parámetros de coste son los que Node use por defecto y no se guardan junto al hash, así que endurecerlos más adelante deja sin salida a los hashes viejos.',
        },
        {
          titulo: 'La interfaz se adelanta al servidor y se traga los errores',
          texto: 'Crear, editar, cancelar o borrar mutan primero el estado local y luego lanzan la petición con un ayudante que descarta cualquier rechazo. La lista responde al instante y nunca aparece un indicador de carga. El precio es real: si la escritura falla, la pantalla sigue mostrando algo que la base de datos no tiene y nada avisa; solo al recargar aparece la verdad.',
        },
        {
          titulo: 'El identificador de una suscripción lo pone el cliente',
          texto: 'La página construye el identificador antes de llamar al servidor y la ruta de creación lo acepta si encaja en un patrón corto alfanumérico, generando uno propio solo cuando no viene. El comentario del código dice el motivo: si el servidor inventara el suyo, la ficha que el usuario ya está viendo apuntaría a un registro distinto. El precio es que dos pestañas creando en el mismo milisegundo chocarían contra la misma clave primaria.',
        },
        {
          titulo: 'El aislamiento entre cuentas es una cláusula WHERE, no una capa',
          texto: 'Cada consulta de suscripciones, categorías y métodos lleva el identificador del usuario en el filtro, incluidas las de borrado y actualización, que simplemente no afectan a ninguna fila si el registro es de otro. No hay comprobación de propiedad en un punto único ni seguridad a nivel de fila en la base, que era lo que el plan original esperaba del proveedor que se terminó descartando. El precio es que la garantía depende de que ninguna consulta futura olvide la cláusula.',
        },
        {
          titulo: 'No hay ORM ni sistema de migraciones: tres archivos SQL aplicados a mano',
          texto: 'El esquema son tres archivos numerados que se ejecutan en orden sobre la base. Nada registra cuál se aplicó ya. El tercero añade la columna que marca el aviso enviado, pero el primero ya la incluye en la creación de la tabla, así que ese archivo solo sirve para bases anteriores y sobre una instalación limpia falla. Es el coste de no llevar historial de migraciones: el orden correcto vive en la cabeza de quien despliega.',
        },
        {
          titulo: 'El espejo de accesos nunca puede romper el inicio de sesión',
          texto: 'Las escrituras al par de tablas que lee el panel externo van todas envueltas en un try vacío, con el comentario diciéndolo sin rodeos. El registro de última conexión, además, se lanza sin esperar respuesta en cada petición y solo escribe si pasó más de un minuto desde la anterior. La contrapartida es que ese panel puede desfasarse de la realidad sin que nadie se entere, porque el fallo es silencioso por diseño.',
        },
        {
          titulo: 'Los recordatorios salen del propio proceso, no de un cron externo',
          texto: 'Un plugin de Nitro arranca un temporizador de treinta minutos que compara la hora desplazada a Colombia contra las ocho de la mañana y contra la última fecha en que corrió. No hay servicio de tareas programadas ni dependencia externa. Lo que de verdad evita avisos repetidos no es esa marca en memoria, que un reinicio borra, sino la columna que se escribe en cada suscripción avisada. El precio es que con más de una instancia cada réplica correría su propia ronda.',
        },
        {
          titulo: 'La suscripción se marca como avisada aunque la notificación no llegue',
          texto: 'Tras intentar el envío, el código escribe la fecha del aviso en la suscripción sin mirar cuántos dispositivos lo recibieron; el contador de envíos puede ser cero. La alternativa era reintentar, y reintentar contra un endpoint muerto es un bucle. El precio es que un usuario cuya suscripción push haya caducado simplemente no se entera de ese cobro.',
        },
        {
          titulo: 'Los endpoints muertos se borran solos, y solo esos',
          texto: 'El envío captura el error del servicio de push y, si el código es de recurso inexistente o expirado, elimina la fila de la base. Cualquier otro error se ignora y la suscripción se conserva. La regla es conservadora a propósito: un fallo pasajero no debería costarle al usuario sus notificaciones. El precio es que un endpoint roto de otra forma se queda para siempre acumulando intentos fallidos.',
        },
        {
          titulo: 'Las tasas de cambio están escritas en el código',
          texto: 'La conversión sale de una tabla fija de equivalencias contra el peso colombiano, declarada en el mismo archivo que hace los cálculos; la tabla incluso lista un quinto código, el peso argentino, que el selector de moneda nunca ofrece. Convertir de verdad exigía una API externa y una capa de caché que el proyecto no tiene. El resumen es honesto a medias: cuando detecta cobros en varias monedas, imprime al pie que están convertidos, pero llama tasa actual a un número que no se mueve. Es el punto donde el principio de honestidad numérica del documento de producto no se cumple del todo.',
        },
        {
          titulo: 'El gasto de los doce meses se reconstruye, no se guarda',
          texto: 'No existe una tabla de gasto mensual. La serie del gráfico se calcula recorriendo mes a mes y sumando las suscripciones que ya habían empezado antes de que terminara ese mes y que no se habían cancelado antes de que empezara. El comentario lo justifica: sin datos inventados. La contrapartida es que cada mes se calcula con el precio de hoy, así que el historial de cambios de precio se muestra en la ficha pero no corrige el gráfico.',
        },
        {
          titulo: 'Cada servicio guarda su color y el recuadro lo ignora',
          texto: 'La tabla tiene una columna de tono y el formulario elige uno al azar de una paleta de diez al crear la suscripción. El componente que dibuja el recuadro no la usa: pinta todos con el acento de la aplicación, y su comentario dice que es a propósito, sin colores aleatorios. Ganó la regla del documento de diseño que prohíbe distintivos de colores arbitrarios. El precio es una columna y una paleta que siguen existiendo sin efecto visible.',
        },
        {
          titulo: 'Los desplegables se dibujan en el cuerpo del documento',
          texto: 'El popover se teletransporta fuera de su campo y calcula su posición contra el viewport, abriéndose hacia arriba cuando abajo no cabe, y se recoloca en cada scroll capturado y en cada cambio de tamaño. Con el documento sin scroll y el desplazamiento repartido en contenedores internos, un desplegable dentro del campo habría quedado cortado. El precio es que la posición no la sostiene el CSS sino JavaScript: cualquier movimiento que no dispare un evento de scroll deja el panel flotando donde estaba.',
        },
        {
          titulo: 'La foto de perfil vive como texto dentro de la fila del usuario',
          texto: 'El recortador exporta un JPEG cuadrado de doscientos cincuenta y seis píxeles y lo guarda como URL de datos en una columna de texto de la tabla de usuarios. No hay almacenamiento de archivos, ni carpeta subida, ni servicio externo: la aplicación entera cabe en la base de datos y en el contenedor. El precio es que ese avatar viaja completo en la respuesta que carga todos los datos del usuario, cada vez que se abre la aplicación.',
        },
        {
          titulo: 'Ninguna cuenta nueva se siembra con datos de ejemplo',
          texto: 'Existe una función que llena una cuenta con siete suscripciones de muestra y no se llama desde ninguna parte; el comentario del repositorio de usuarios dice que las cuentas nuevas arrancan completamente vacías. En una aplicación cuyo número grande es lo que pagas al mes, un dato de mentira en esa cifra es peor que una pantalla vacía. El precio es que la cuenta recién creada llega sin categorías ni métodos de pago, y como el formulario no exige categoría, la primera suscripción puede quedar guardada sin ninguna.',
        },
      ],
    },
  },
  {
    nombre: 'Sprout',
    color: '#34E07E',
    logo: '/logos/sprout.png',
    stack: ['SvelteKit 2', 'Node.js', 'MySQL 8', 'Tailwind CSS 4'],
    descripcion:
      'Seguimiento de metas y habitos con rachas: registras el dia a dia y ves crecer el historial, en vez de depender de la memoria.',
    arquitectura:
      'SvelteKit con carga de datos en servidor sobre MySQL. Las rachas se calculan a partir del historial de registros y no de un contador guardado, asi que nunca se desincronizan aunque falte un dia o se corrija hacia atras.',
    url: 'https://sprout.acmsy.com',
    captura: 'sprout',
    landing: '#',
    // Estetica y ficha larga sacadas del repositorio de la app.
    estetica: {
      google: 'Familjen+Grotesk:wght@400;500;600;700&family=Hanken+Grotesk:wght@400;500;600;700;800',
      fuente: {
        titulo: '\'Familjen Grotesk\', ui-sans-serif, system-ui, -apple-system, sans-serif',
        cuerpo: '\'Hanken Grotesk\', ui-sans-serif, system-ui, -apple-system, sans-serif',
        mono: 'ui-monospace, SFMono-Regular, Consolas, monospace',
      },
      radio: '18px',
      curva: 'cubic-bezier(0.16, 1, 0.3, 1)',
      claro: {
        fondo: '#FAFAF8',
        sup: '#FFFFFF',
        texto: '#16181A',
        suave: '#6A6F68',
        acento: '#149E54',
      },
      oscuro: {
        fondo: '#0D0E0F',
        sup: '#16181A',
        texto: '#F1F3EF',
        suave: '#949891',
        acento: '#34E07E',
      },
    },
    detalle: {
      stackRoles: [
        {
          nombre: 'SvelteKit 2',
          papel: 'La aplicación entera. Nueve pantallas con Svelte 5 en modo runes y el renderizado en servidor apagado.',
        },
        {
          nombre: 'Node.js',
          papel: 'El servidor. Sirve la app compilada con node build y dentro corre el programador de recordatorios.',
        },
        {
          nombre: 'MySQL 8',
          papel: 'Los datos. Siete tablas con mysql2 y un pool compartido, sin ORM.',
        },
        {
          nombre: 'Tailwind CSS 4',
          papel: 'Los tokens. Define las variables de color y tipografía; el estilo se escribe en línea, no con clases.',
        },
        {
          nombre: 'web-push',
          papel: 'Los avisos. Notificaciones de aporte con claves VAPID hacia el service worker.',
        },
      ],
      unaFrase: 'Aplicación web de ahorro por metas en SvelteKit y MySQL: registras aportes y retiros sobre cada meta y la app calcula cuánto falta, a qué ritmo semanal o mensual llegarías a la fecha, y te recuerda el aporte por notificación.',
      porQueExiste: 'Ahorrar para algo concreto se abandona cuando no ves el avance: el dinero entra y sale de la misma cuenta y nadie lleva la cuenta de cuánto va para el viaje. Sprout resuelve solo esa pieza: defines una meta con monto y fecha, anotas cada aporte, y la pantalla te devuelve tres cosas, cuánto falta, cuánto llevas en porcentaje y cuánto tendrías que apartar por semana o por mes para llegar a tiempo. Incluye lo que hace falta para sostener el hábito: retiros como movimiento negativo, estados de pausa y cancelación, extender el plazo cuando la fecha se pasa, y recordatorios por notificación del aporte programado. Deja fuera todo lo de una app de finanzas: no hay categorías de gasto, ni presupuestos, ni conexión con bancos, ni metas compartidas entre varias personas. Tampoco hay personalización libre: la meta elige entre seis categorías con color fijo y dieciséis íconos, para que dos metas distintas se sigan viendo como la misma app.',
      funcionalidades: [
        {
          area: 'Cuenta y acceso',
          items: [
            'Registro con nombre de mínimo 2 caracteres, correo válido y contraseña de mínimo 8 caracteres; el correo repetido responde 409',
            'Inicio de sesión por correo; el servidor acepta también el nombre de usuario en ese mismo campo',
            'Mensaje genérico de correo o contraseña incorrectos, sin revelar si la cuenta existe',
            'Entrada con Google por OAuth 2.0 con permisos openid, email y profile',
            'Si Google no está configurado en el servidor, la app vuelve al login con un aviso en vez de fallar',
            'La cuenta de Google reutiliza el correo si ya existía y, si no, arma un nombre de usuario desde el correo y lo numera hasta que sea único',
            'Recuperación de contraseña que responde siempre lo mismo exista o no la cuenta',
            'Enlace de recuperación válido por una hora, guardado como SHA-256 y no en claro',
            'Correo de recuperación con plantilla propia que se adapta al modo claro u oscuro del lector',
            'Pantalla de nueva contraseña con doble campo, validación de longitud y de coincidencia',
            'Estado de enlace inválido o incompleto, con acceso directo a pedir uno nuevo',
            'Sesión de 30 días en cookie httpOnly firmada con HMAC-SHA256; sin sesión toda vista privada redirige al login',
            'Cierre de sesión que borra la cookie y marca la cuenta como desconectada',
          ],
        },
        {
          area: 'Crear y editar metas',
          items: [
            'Asistente de tres pasos: qué quieres lograr, cuánto y para cuándo, revisa y crea',
            'Nombre de la meta con ejemplo en el campo; el paso no avanza si está vacío',
            'Seis categorías con color propio: Viaje, Equipo, Emergencia, Hogar, Salud y Otro',
            'Dieciséis íconos en cuadrícula de ocho columnas, teñidos con el color de la categoría elegida',
            'Monto objetivo con teclado numérico, miles formateados en vivo y el símbolo de la moneda activa',
            'Fecha objetivo con calendario propio en español, semana que empieza el lunes y el día de hoy marcado con un punto',
            'Cálculo en vivo dentro del paso 2 de cuánto tendrías que ahorrar por semana y por mes',
            'Paso de revisión con la tarjeta real de la meta más objetivo, fecha, categoría y días que faltan',
            'Vista previa fija de la tarjeta a la derecha en escritorio, que se actualiza mientras escribes',
            'Editar una meta existente con la misma pantalla y los campos precargados',
            'El servidor rechaza objetivos menores a 1.000, nombres de menos de 2 caracteres y fechas fuera del formato AAAA-MM-DD',
            'Borrar la meta desde su detalle, lo que arrastra sus aportes por borrado en cascada',
          ],
        },
        {
          area: 'Aportes y retiros',
          items: [
            'Registrar un aporte con monto y fecha desde el propio detalle de la meta',
            'Registrar un retiro con el mismo formulario: se guarda como movimiento negativo sobre la misma meta',
            'Botones de suma rápida que acumulan sobre lo escrito: 50.000, 100.000, 200.000 y el aporte semanal sugerido redondeado al millar',
            'El campo se topa solo: un aporte no pasa de lo que falta y un retiro no pasa del saldo acumulado',
            'El monto solo acepta dígitos: bloquea las teclas que no lo son y limpia lo que se pega',
            'Nota opcional al editar un movimiento ya guardado (el alta no la pide); la columna admite 255 caracteres',
            'Lista de aportes de la meta ordenada del más reciente al más antiguo, con su nota o su fecha',
            'Editar un aporte tocándolo en la lista: monto, fecha y nota, sin salir de la pantalla',
            'La edición conserva el signo original, así que un retiro sigue siendo un retiro',
            'Borrar un aporte desde el mismo editor en línea',
            'Al alcanzar el objetivo, celebración a pantalla completa de 3,5 segundos con lluvia de hojas, monto logrado, días que tomó y número de aportes, y regreso automático a Inicio',
          ],
        },
        {
          area: 'Estado de la meta y plazos',
          items: [
            'Tres estados guardados: activa, pausada y cancelada',
            'Completada no es un estado: se deduce del progreso o de la fecha de cierre',
            'Pausar una meta, que deja de contar en el ahorro activo y de recibir recordatorios',
            'Cancelar una meta para archivarla, y reactivarla después desde su propio banner',
            'Banner de estado en amarillo si está pausada y en rojo si está cancelada, con el botón de reactivar al lado',
            'Las metas archivadas aparecen atenuadas en la lista, con su distintivo de pausada o cancelada',
            'Banner de plazo cumplido cuando la fecha pasó y todavía falta dinero',
            'Extender el plazo desde ese banner, con el calendario en línea y rechazo de fechas que no sean posteriores a hoy',
            'Cerrar la meta incompleta: queda marcada como cerrada y la ficha pasa a mostrar cuánto alcanzaste y en qué porcentaje',
            'Reabrir una meta cerrada desde el detalle',
          ],
        },
        {
          area: 'Inicio',
          items: [
            'Banda de ahorro total activo: lo guardado, el objetivo sumado, el porcentaje y cuánto falta, contando solo metas activas sin completar',
            'Contador de metas activas y de días seguidos de racha',
            'Barra agregada del conjunto, con transición de un segundo cuando el total cambia',
            'Filtros de Activas, Todas y Completadas, más Pausadas y Canceladas cuando existen',
            'Filtros por categoría, que solo aparecen si hay metas activas de esa categoría',
            'Rejilla que se acomoda sola en escritorio con columnas de 330 px mínimo y baja a una columna en móvil',
            'Cada tarjeta muestra ícono, categoría, fecha, ahorrado sobre objetivo, porcentaje, barra y ritmo semanal',
            'Estado vacío con el logo y acceso directo a crear la primera meta',
          ],
        },
        {
          area: 'Resumen',
          items: [
            'Total ahorrado entre todas las metas, con cuántas hay y cuántas ya se cumplieron',
            'Tres cifras de cabecera: aportado este mes, metas activas y racha',
            'Gráfico de barras de los últimos seis meses, con el mes más alto resaltado y su monto encima',
            'Reparto por categoría ordenado de mayor a menor, con barra proporcional y el color de cada categoría',
            'Montos abreviados a k y M cuando el número no cabe',
            'En móvil, un conmutador cambia entre Meses y Categoría para mostrar un panel a la vez',
          ],
        },
        {
          area: 'Historial',
          items: [
            'Todos los movimientos de todas las metas en una sola lista',
            'Agrupados por mes, del más reciente al más antiguo, con el nombre del mes escrito en español',
            'Total aportado en cada mes junto al encabezado del grupo',
            'Cada fila muestra la meta a la que pertenece con su ícono y color, la nota o la fecha, y el monto',
            'Tocar una fila lleva al detalle de esa meta',
          ],
        },
        {
          area: 'Aporte automático y recordatorios',
          items: [
            'Programar un aporte automático por meta con monto, fecha del primer aporte y una de tres frecuencias: cada semana, quincenal o mensual',
            'Interruptor que apaga el aporte automático y atenúa los campos sin borrarlos',
            'Panel de proyección en escritorio: cuánto queda apartado al mes y a cuánto llegaría en un año',
            'El detalle de la meta muestra el aporte activo con monto, frecuencia y próxima fecha, con acceso a ajustarlo',
            'Activar recordatorios desde Ajustes pide el permiso del navegador y muestra al instante una notificación de ejemplo usando una meta real',
            'Suscripción Web Push por dispositivo, guardada en el servidor y deduplicada por el hash del endpoint',
            'El aviso llega con el nombre de la meta y el monto formateado en pesos colombianos',
            'El servidor revisa cada 30 minutos y envía una vez al día, después de las 8 de la mañana hora de Colombia',
            'Cada meta queda marcada como recordada en su fecha, así que el aviso no se repite el mismo día',
            'Las suscripciones que el navegador ya invalidó se borran solas cuando el envío responde 404 o 410',
            'Endpoint de disparo manual protegido por un secreto, con parámetro para forzar la fecha en pruebas',
            'Al tocar la notificación se enfoca la ventana abierta de la app, o se abre una nueva',
          ],
        },
        {
          area: 'Perfil y preferencias',
          items: [
            'Cambiar el nombre en línea desde Ajustes: Enter guarda, Escape descarta y las iniciales se recalculan solas',
            'Subir foto de perfil desde el selector de archivos del sistema',
            'Recortador propio en modal con visor circular de 300 px, arrastre para encuadrar y acercamiento hasta 3x con rueda o pellizco',
            'Guías de tercios y cruz que aparecen solo mientras se está manipulando la imagen y se ocultan a los 700 ms',
            'La foto sale como JPEG cuadrado de 256 px al 88 % de calidad y se guarda como data URL en la cuenta',
            'Quitar la foto y volver a las iniciales',
            'Tema claro u oscuro con conmutador de sol y luna',
            'Cinco monedas con su símbolo y sus separadores: COP, USD, PEN, MXN y EUR',
            'Tarjeta lateral en escritorio con el total ahorrado, el porcentaje del conjunto de metas y las cifras de metas, cumplidas y racha',
            'El servidor rechaza fotos que no empiecen por data:image/, cadenas de imagen de más de dos millones de caracteres y nombres de más de 60 caracteres',
            'Cerrar sesión desde la misma pantalla',
          ],
        },
        {
          area: 'Interfaz y aplicación instalable',
          items: [
            'Barra lateral en escritorio con logo, botón de nueva meta, cuatro secciones y acceso al perfil',
            'Barra inferior en móvil con las mismas cuatro secciones y un botón central elevado para crear meta',
            'Siete animaciones de entrada distintas repartidas entre las vistas con sesión: subir, enfocar, deslizar a un lado y al otro, cascada, suave y florecer',
            'Fondo botánico de hojas y tallos punteados en todas las vistas con sesión',
            'El progreso se dibuja como un tallo que crece y suelta hojas al pasar por 16, 36, 56 y 78 por ciento',
            'Calendario y desplegables propios, que se abren hacia arriba o hacia abajo según el espacio libre en pantalla',
            'Los botones sueltan cuatro hojitas al pasar el cursor y se hunden un poco al presionarlos',
            'Treinta y seis íconos dibujados a mano en un solo componente, sin librería de íconos',
            'Instalable como PWA en vertical, con íconos normales y enmascarables y arranque directo en Inicio',
            'Las animaciones CSS se anulan si el sistema pide movimiento reducido',
            'Comprobación de salud de la base en /api/db-health con el conteo de usuarios, metas y aportes',
          ],
        },
      ],
      carpetas: [
        {
          carpeta: 'raíz',
          que_es: 'Un solo proyecto SvelteKit. Arriba viven la configuración, el empaquetado y los documentos de producto.',
          hijos: [
            {
              carpeta: 'svelte.config.js',
              que_es: 'adapter-node, modo runes forzado y registro del service worker',
            },
            {
              carpeta: 'Dockerfile',
              que_es: 'imagen sobre node:22-bookworm-slim que compila y arranca con node build en el puerto 3000',
            },
          ],
        },
        {
          carpeta: 'src/routes/',
          que_es: 'Las pantallas y los endpoints, repartidos en grupos de ruta.',
          hijos: [
            {
              carpeta: '(app)',
              que_es: 'las vistas con sesión: inicio, resumen, historial, ajustes y las tres de meta',
            },
            {
              carpeta: '(auth) y reset',
              que_es: 'el acceso: entrar, registrarse, recuperar y crear contraseña nueva',
            },
            {
              carpeta: 'api',
              que_es: 'metas, aportes, perfil, notificaciones y salud de la base',
            },
            {
              carpeta: 'auth',
              que_es: 'sesión: login, registro, salida, recuperación y el ida y vuelta de Google',
            },
            {
              carpeta: 'layout.css',
              que_es: 'los tokens de color y tipografía y las siete animaciones de entrada',
            },
          ],
        },
        {
          carpeta: 'src/lib/',
          que_es: 'Todo lo compartido: componentes, cálculo y el acceso a datos que solo corre en servidor.',
          hijos: [
            {
              carpeta: 'components',
              que_es: 'veintidós piezas propias: tarjeta de meta, tallo que crece, calendario, campo de monto y recortador de foto',
            },
            {
              carpeta: 'server',
              que_es: 'pool de MySQL, repositorio, sesión, correo, Google, push y el programador',
            },
            {
              carpeta: 'format.ts',
              que_es: 'monedas, fechas en español y el cálculo de progreso, faltante y ritmo sugerido',
            },
            {
              carpeta: 'state.svelte.ts',
              que_es: 'el estado con runes y las mutaciones que pegan a la API y refrescan',
            },
            {
              carpeta: 'data/mock.ts',
              que_es: 'los tipos de meta y aporte, las seis categorías con su color y los datos del diseño original',
            },
          ],
        },
        {
          carpeta: 'db/',
          que_es: 'El esquema en MySQL, aplicado por archivos numerados en orden.',
          hijos: [
            {
              carpeta: '01-schema.sql',
              que_es: 'las tres tablas base: usuarios, metas y aportes',
            },
            {
              carpeta: '02-seed.sql',
              que_es: 'la cuenta de demostración con seis metas y diecinueve aportes',
            },
            {
              carpeta: '03 a 07',
              que_es: 'lo que se fue añadiendo: contraseñas, estado, recuperación, foto y notificaciones',
            },
            {
              carpeta: '08-acmsy-mirror.sql',
              que_es: 'las tablas espejo de usuarios y entradas que lee el panel del servidor',
            },
          ],
        },
        {
          carpeta: 'static/',
          que_es: 'Lo que se sirve tal cual, sin pasar por el empaquetador.',
          hijos: [
            {
              carpeta: 'manifest.webmanifest',
              que_es: 'la app instalable: nombre, orientación vertical y arranque en /inicio',
            },
            {
              carpeta: 'icon-*.png',
              que_es: 'los íconos de instalación en versión normal y enmascarable',
            },
            {
              carpeta: 'sprout-logo.png',
              que_es: 'el brote de la marca, usado también en el correo de recuperación',
            },
          ],
        },
      ],
      arquitectura: {
        resumen: 'Es un solo proyecto SvelteKit: la interfaz y el servidor viven en el mismo repositorio y se compilan juntos con adapter-node. El navegador dibuja todo, porque el renderizado en servidor está apagado a propósito; lo que sí corre en el servidor son las funciones de carga, que verifican la sesión y traen las metas del usuario de una sola vez para el grupo entero de vistas privadas. Las escrituras no pasan por esas cargas: van a dieciocho endpoints propios bajo /api y /auth (veinte manejadores, contando cada método), y al terminar el cliente invalida los datos y el servidor los vuelve a leer, así que nunca hay dos copias del estado. El acceso a MySQL está encerrado en un repositorio con consultas escritas a mano y un pool compartido; no hay ORM ni migraciones automáticas, el esquema son ocho archivos SQL numerados. Fuera del proceso solo hay tres servicios: Resend para el correo de recuperación, Web Push para los recordatorios y Google para la entrada con cuenta. El programador de recordatorios no es un cron externo: arranca dentro del propio servidor al primer arranque y revisa cada media hora. En producción todo se empaqueta en una sola imagen Docker sobre node:22-bookworm-slim que expone el puerto 3000 y se ejecuta con node build.',
        capas: [
          {
            nombre: 'Navegador',
            piezas: [
              {
                nombre: 'Aplicación SvelteKit',
                tecnologia: 'Svelte 5 runes · Vite 8 · TypeScript',
                que_hace: 'Dibuja las nueve pantallas en el cliente. El estado vive en un módulo con runes que se rehidrata con lo que devuelve el servidor.',
              },
              {
                nombre: 'Service worker',
                tecnologia: 'API de Service Worker · Push',
                que_hace: 'No intercepta ni una petición. Existe para mostrar las notificaciones de aporte y para enfocar la app cuando se tocan.',
              },
              {
                nombre: 'Preferencias locales',
                tecnologia: 'localStorage',
                que_hace: 'Guarda tema, moneda y si los recordatorios quedaron activados. Nada de esto viaja a la base.',
              },
            ],
          },
          {
            nombre: 'Servidor Node',
            piezas: [
              {
                nombre: 'Carga de datos y guardas',
                tecnologia: 'SvelteKit load · hooks.server',
                que_hace: 'El hook verifica la cookie firmada en cada petición y el layout privado trae usuario y metas, o redirige al login.',
              },
              {
                nombre: 'API interna',
                tecnologia: 'SvelteKit endpoints · 18 rutas, 20 manejadores',
                que_hace: 'Metas, aportes, aporte recurrente, perfil, notificaciones y sesión. Cada consulta lleva el identificador del usuario incrustado.',
              },
              {
                nombre: 'Repositorio de datos',
                tecnologia: 'mysql2 · SQL escrito a mano',
                que_hace: 'Traduce filas a los tipos del cliente y aísla cada meta por dueño. Es la única puerta a la base.',
              },
              {
                nombre: 'Programador de recordatorios',
                tecnologia: 'setInterval dentro del proceso',
                que_hace: 'Revisa cada 30 minutos y envía una vez al día los avisos de los aportes que vencen, en hora de Colombia.',
              },
            ],
          },
          {
            nombre: 'Datos y servicios',
            piezas: [
              {
                nombre: 'MySQL 8',
                tecnologia: 'InnoDB · utf8mb4 · 7 tablas',
                que_hace: 'Usuarios, metas, aportes, tokens de recuperación, suscripciones push y las dos tablas espejo del panel.',
              },
              {
                nombre: 'Resend',
                tecnologia: 'API de correo',
                que_hace: 'Manda el enlace de recuperación. Sin credenciales no falla: escribe el correo en la consola.',
              },
              {
                nombre: 'Web Push',
                tecnologia: 'VAPID · web-push',
                que_hace: 'Entrega los recordatorios al navegador aunque la app esté cerrada, una suscripción por dispositivo.',
              },
              {
                nombre: 'Google',
                tecnologia: 'OAuth 2.0',
                que_hace: 'Entrada con cuenta de Google validando el state en cookie y canjeando el código en el servidor.',
              },
            ],
          },
        ],
      },
      decisiones: [
        {
          titulo: 'El renderizado en servidor está apagado a propósito',
          texto: 'El layout raíz exporta ssr en false. La razón está escrita al lado: toda la interfaz se bifurca por ancho de pantalla, barra lateral o barra inferior, rejilla de una o dos columnas, y renderizar en el servidor obliga a asumir un viewport que casi nunca acierta, con el consiguiente salto de layout al hidratar. Renderizando solo en el cliente, cada vista se dibuja directamente en su forma correcta. Las funciones de carga del servidor siguen corriendo, así que la sesión y los datos no se pierden; lo que se paga es el primer pintado, que llega después del JavaScript.',
        },
        {
          titulo: 'La sesión es una cookie firmada, no una fila en la base',
          texto: 'El token es texto plano con tres partes, identificador, vencimiento y firma HMAC-SHA256, y se guarda en una cookie httpOnly de 30 días. No existe tabla de sesiones: validar es recalcular la firma y compararla con timingSafeEqual. Eso hace que verificar la sesión en cada petición no toque MySQL, y que escalar a más instancias no requiera nada compartido. El precio es que no se puede revocar una sesión antes de su vencimiento: cambiar la contraseña no invalida los tokens ya emitidos.',
        },
        {
          titulo: 'Las contraseñas se guardan con scrypt del propio Node, sin paquete externo',
          texto: 'El hash se arma con randomBytes y scryptSync del módulo crypto y se guarda con el formato scrypt$sal$hash. La verificación vuelve a derivar y compara en tiempo constante. La ventaja es una dependencia menos en un proyecto que solo tiene dos en producción, y el prefijo del formato deja la puerta abierta a cambiar de algoritmo sin migrar la columna. La contrapartida es que los parámetros de coste quedan en los valores por defecto, sin la posibilidad de subirlos con el tiempo que da una librería dedicada.',
        },
        {
          titulo: 'El total ahorrado se recalcula siempre, nunca se guarda',
          texto: 'No hay columna de saldo en la meta. El acumulado sale de sumar los aportes, tanto en el servidor cuando decide si la meta se completó, como en el cliente para pintar la barra y el porcentaje. Así, corregir un aporte de hace tres meses o borrarlo ajusta el progreso sin dejar rastro de una cifra vieja: no hay nada que se pueda desincronizar. Lo que se paga es leer todos los aportes en cada carga, y por eso el layout privado los trae todos de una y las vistas trabajan sobre esa misma lista en memoria.',
        },
        {
          titulo: 'El retiro es un aporte con signo negativo, no otra tabla',
          texto: 'Sacar dinero de una meta escribe una fila más en la misma tabla con el monto en negativo. El acumulado sigue siendo una suma, el historial mantiene el orden cronológico real y la edición conserva el signo original para que un retiro no se convierta en aporte por accidente. La interfaz separa los dos casos con un conmutador y colorea el retiro en ámbar. El descuido queda a la vista en Historial, donde el signo se antepone a mano y un movimiento negativo aparece con los dos símbolos delante.',
        },
        {
          titulo: 'Tailwind está solo por sus variables, no por sus clases',
          texto: 'El proyecto instala Tailwind 4 y su plugin de formularios, pero no hay ni una clase utilitaria en toda la aplicación: el único bloque que se usa es @theme, que declara los colores y las dos tipografías como variables CSS. El estilo se escribe en atributos style en línea que leen esas variables, con algún bloque <style> suelto para animaciones y estados de hover. La ganancia es que cambiar de tema es reescribir un atributo en el documento y que un componente lleva su estilo encima sin archivo aparte. El costo es que no hay sistema que imponga la escala: los tamaños y los radios se repiten a mano y no siempre coinciden entre pantallas.',
        },
        {
          titulo: 'El tema base es el oscuro y el claro es la excepción',
          texto: 'Los tokens declarados en @theme son los del modo oscuro; el claro se define como una sobreescritura bajo el atributo data-theme igual a light. El HTML se sirve ya marcado como oscuro, así que no hay destello blanco antes de que arranque el JavaScript. La preferencia se guarda en el navegador y no en la cuenta, porque es una preferencia del dispositivo. La consecuencia es que no se consulta la preferencia del sistema en ningún momento: quien tenga el sistema en claro entra igual en oscuro hasta que lo cambie.',
        },
        {
          titulo: 'El HTML decide si es móvil antes de pintar el primer píxel',
          texto: 'En la cabecera hay un script suelto que evalúa el ancho y marca el documento, más una regla de estilo que esconde la barra lateral cuando esa marca está puesta. Está colocado deliberadamente después de la etiqueta de viewport, porque si va antes la consulta mide la ventana equivocada. Sin eso, en el celular se veía la barra lateral de escritorio un instante antes de que el componente se diera cuenta. Es un parche corto que corrige un síntoma que el propio ssr en false había creado.',
        },
        {
          titulo: 'El hoy de la aplicación está congelado en una fecha',
          texto: 'El cálculo de días restantes, el ritmo sugerido y la fecha que trae puesta el formulario de aporte salen todos de una constante fija, no del reloj. La ventana de seis meses del Resumen no lee esa constante, pero está anclada por su cuenta a junio de 2026. Viene de que la app se construyó contra los datos de diseño y se probó siempre contra ese día. La grieta se ve en el detalle de la meta: los días que llevas ahorrando sí salen del reloj real, así que esa cifra y el resto de la pantalla hablan de calendarios distintos.',
        },
        {
          titulo: 'El service worker existe pero no cachea nada',
          texto: 'Está registrado, pero no escucha peticiones: no intercepta ni una respuesta. La nota en el código lo dice sin rodeos, así nunca sirve una versión vieja después de un despliegue. Entonces está solo por dos motivos: Chrome en Android exige mostrar las notificaciones desde el service worker, y hace falta para recibir push con la app cerrada. Renunciar al modo sin conexión es explícito, no un olvido.',
        },
        {
          titulo: 'En el celular la notificación no se crea con new Notification',
          texto: 'Chrome en Android rechaza el constructor y solo acepta que la muestre el service worker. El código pide el registro esperando como máximo tres segundos, y si llega usa showNotification; si no llega, cae al constructor clásico y cierra el aviso a los ocho segundos. Esa carrera contra el reloj existe porque el registro puede tardar indefinidamente y dejar el botón colgado. Es fea, pero es la que hace que el mismo botón funcione en escritorio y en móvil.',
        },
        {
          titulo: 'El programador de recordatorios vive dentro del servidor',
          texto: 'El hook de arranque lanza un temporizador que despierta cada 30 minutos y, si ya pasaron las 8 de la mañana en hora de Colombia y no se ha enviado hoy, manda los avisos pendientes. La hora local se calcula restando cinco horas a UTC, sin librería de zonas. No hace falta cron externo ni un servicio aparte, que era el punto. El precio es directo: si algún día corren dos instancias del servidor, las dos van a enviar, porque la única protección contra el doble envío es la marca por meta en la base.',
        },
        {
          titulo: 'Sin secreto configurado, el disparo manual de recordatorios responde 401',
          texto: 'El endpoint que fuerza el envío compara una cabecera contra una variable de entorno, y si esa variable no existe rechaza igual. Lo habitual es lo contrario, que la falta de configuración deje la puerta abierta en desarrollo. Aquí el caso por defecto es el cerrado. La misma ruta acepta un parámetro para fijar qué día se considera hoy, que es lo que hace probable el envío en pruebas sin esperar a mañana.',
        },
        {
          titulo: 'El calendario y los desplegables se colocan a mano con posición fija',
          texto: 'El armazón de la app recorta el contenido en varios niveles para que solo la zona central se desplace, y eso convierte cualquier menú flotante normal en un menú cortado. La solución es medir el campo con getBoundingClientRect al abrir, decidir si el panel cabe abajo o debe ir arriba, y pintarlo con posición fija por encima de todo. En móvil el desplegable cambia a posición absoluta, porque ahí no hay padres que recorten y la posición fija se descoloca con el zoom del navegador. Son dos comportamientos distintos para el mismo componente, y esa es la contrapartida.',
        },
        {
          titulo: 'El campo de monto no deja escribir de más',
          texto: 'No valida al enviar: bloquea la tecla. Filtra todo lo que no sea un dígito, limpia lo que se pega, recorta el valor al máximo permitido y reescribe el contenido del campo dejando el cursor al final. El máximo se calcula según el caso, un aporte no puede pasar de lo que falta y un retiro no puede pasar del saldo. Es más código que un mensaje de error, pero evita el estado incómodo de haber escrito una cifra que la app va a rechazar.',
        },
        {
          titulo: 'El foco del navegador está apagado en toda la aplicación',
          texto: 'Una regla global anula el contorno en cualquier elemento, incluido el halo amarillo del autocompletado de Chrome. El comentario del código dice que el foco se comunica cambiando borde y fondo del campo, aunque en los campos de texto lo único que cambia es el fondo. La intención es que nada rompa el aspecto de la interfaz. El precio es real y va en contra del propio documento de diseño, que pedía que cada componente interactivo expusiera su estado de foco: navegar con teclado por los botones, que no cambian de fondo al enfocarse, deja de dar señal.',
        },
        {
          titulo: 'La foto de perfil se recorta en el navegador y se guarda dentro de la fila del usuario',
          texto: 'El recortador es propio: visor circular, arrastre para encuadrar, rueda o pellizco para acercar hasta tres veces, y guías que aparecen solo mientras tocas la imagen. Al guardar dibuja el encuadre en un lienzo de 256 píxeles y devuelve un JPEG al 88 por ciento como data URL, que se escribe en una columna de texto de la tabla de usuarios. No hace falta almacenamiento de archivos ni servir imágenes, y el servidor topa esa cadena en dos millones de caracteres. A cambio, esa cadena viaja en cada carga de las vistas privadas, porque el usuario se lee entero en cada petición.',
        },
        {
          titulo: 'El espejo del panel nunca puede tumbar el login',
          texto: 'Además de su propia tabla de usuarios, Sprout replica cuentas y entradas en dos tablas con el formato que lee el panel del servidor. Cada escritura del espejo está envuelta en un try que se traga el error en silencio, y el comentario del archivo lo dice: esto no debe romper el login. La marca de en línea solo escribe si pasaron más de sesenta segundos desde la última, para no meter una escritura por petición. Es duplicación de datos aceptada a cambio de no acoplar la app al panel.',
        },
        {
          titulo: 'El registro deja vacío el nombre de usuario que el login sí acepta',
          texto: 'La consulta de acceso busca por correo o por nombre de usuario, y la columna existe y es única. Pero el registro por formulario nunca la llena: solo la reciben la cuenta de la semilla y las cuentas creadas por Google, que lo derivan del correo y lo numeran hasta que no choque. En la práctica, entrar por nombre de usuario funciona para unas cuentas y para otras no. Es una decisión de recortar el formulario a tres campos que dejó viva la mitad de la funcionalidad de abajo.',
        },
        {
          titulo: 'La racha se muestra en tres pantallas y nadie la calcula',
          texto: 'Los días seguidos aparecen en Inicio, en Resumen y en la tarjeta de Ajustes, y son una columna de la tabla de usuarios. Ningún punto del código la incrementa ni la recalcula: se escribe en cero al crear la cuenta y solo la semilla de demostración le pone un valor. Es la única cifra de la interfaz que no sale de los datos reales del usuario. Está lista para conectarse, porque el historial de aportes con fecha ya tiene todo lo que haría falta para deducirla.',
        },
      ],
    },
  },
  {
    nombre: 'Vertice',
    color: '#FF6A3D',
    // Logo naranja desde el 22/11/2026; `version` salta la cache del anterior.
    logo: '/logos/vertice.svg?v=2',
    version: 2,
    stack: ['Node.js 22', 'JavaScript', 'Anthropic SDK 1.11', 'SVG'],
    descripcion:
      'Aplicativo de investigacion de operaciones: planteas un ejercicio de metodo grafico, transporte y asignacion, cadenas de Markov o colas y lo ves resolverse paso a paso mientras escribes, y si pegas el enunciado, una IA reconoce el metodo, marca de donde sale cada dato y te deja el modelo lleno.',
    arquitectura:
      'Node 22 sin frameworks: un solo servidor con node:http sirve la interfaz, la API y el acceso con Google, y la interfaz son modulos ES con SVG y Web Animations, sin paso de compilacion. Los cuatro motores de calculo corren en el navegador y recalculan en cada tecla; cuentas e historial viven en archivos JSON con escritura atomica, sesion firmada con HMAC y contrasenas en scrypt. La IA hace dos llamadas a Claude Opus 5.5 con la salida atada a un esquema JSON, una para clasificar el metodo y otra para extraer el modelo, apoyada en un RAG con BM25 en memoria sobre 124 fragmentos del curso.',
    url: 'https://vertice.acmsy.com',
    captura: 'vertice',
    // Estetica y ficha larga sacadas del repositorio de la app.
    estetica: {
      google: 'Plus+Jakarta+Sans:wght@400;500;600;700;800&family=DM+Mono:wght@400;500',
      fuente: {
        titulo: '\'Plus Jakarta Sans\', system-ui, sans-serif',
        cuerpo: '\'Plus Jakarta Sans\', system-ui, sans-serif',
        mono: '\'DM Mono\', ui-monospace, Consolas, monospace',
      },
      radio: '28px',
      curva: 'cubic-bezier(0.32, 0.72, 0, 1)',
      claro: {
        fondo: '#ECEEF5',
        sup: '#FFFFFF',
        texto: '#1B1D2A',
        suave: '#5B5F73',
        acento: '#FF6A3D',
      },
      oscuro: {
        fondo: '#0E0F14',
        sup: '#181A22',
        texto: '#F1F2F7',
        suave: '#A6A9BA',
        acento: '#FF6A3D',
      },
    },
    detalle: {
      stackRoles: [
        {
          nombre: 'Node.js 22',
          papel: 'El servidor. Un solo proceso con node:http que sirve los estáticos, trece operaciones bajo /api, las dos rutas de Google y la sonda de salud, sin Express ni ningún framework.',
        },
        {
          nombre: 'JavaScript',
          papel: 'La interfaz. Módulos ES servidos tal cual, sin compilación ni empaquetador: cuatro motores de cálculo, ocho vistas y una función de menos de veinte líneas para armar el DOM.',
        },
        {
          nombre: 'Anthropic SDK 1.11',
          papel: 'La IA. Hasta dos llamadas en streaming a Claude Opus 5.5 con la salida atada a un esquema JSON: una clasifica el método y la otra extrae el modelo.',
        },
        {
          nombre: 'SVG',
          papel: 'Los dibujos. La región factible, la red de transporte, el diagrama de Markov, las gráficas de colas y las escenas del inicio, construidos a mano y animados con la Web Animations API.',
        },
        {
          nombre: 'BM25',
          papel: 'La recuperación. Un índice de 124 fragmentos del curso buscado en memoria, sin base vectorial ni dependencias, que le pasa a la IA los cinco más parecidos al enunciado.',
        },
      ],
      unaFrase: 'Aplicación web hecha con Node 22 y JavaScript sin frameworks para resolver ejercicios de investigación de operaciones a la vista y mientras escribes: el método gráfico con su región factible, sus vértices, el mejor punto entero y la sensibilidad; transporte con costo mínimo, esquina noroeste, Vogel y la solución óptima, y asignación con el método húngaro paso a paso; cadenas de Markov con su diagrama, su clasificación, la proyección y el largo plazo; y teoría de colas con cinco modelos, el costo por número de servidores y una simulación en vivo. Si pegas el enunciado, una IA con Claude reconoce el método, marca sobre el texto de dónde sale cada dato y abre el módulo con el modelo ya lleno, y cada ejercicio queda guardado en tu cuenta para retomarlo.',
      porQueExiste: 'Los ejercicios de un curso de investigación de operaciones se resuelven con reglas propias: Lq se redondea hacia arriba y ese entero se arrastra al costo, el empate en costo mínimo se rompe a favor de la celda que asigna más, el planteamiento de transporte se escribe con su oferta y su demanda, y cuando el vértice óptimo sale con decimales se busca el mejor punto entero dentro de la región. Solver da el número final, y el propio código lo usa como referencia del óptimo, pero no da los pasos ni esas convenciones. Vértice parte de ahí: cada técnica se resuelve como se haría a mano, con cada paso a la vista, y todo se recalcula mientras escribes. De esa idea sale el resto del producto: el método gráfico con la región trazada con lápiz, la sensibilidad y los escenarios de cambio comparados con el original; transporte con los tres métodos iniciales enfrentados al óptimo y la tabla avanzando paso a paso o como red; el húngaro con sus líneas sobre los ceros; Markov con el diagrama a toda la altura, la clasificación de estados y el largo plazo; y colas con cinco modelos, el costo por servidor y una simulación que se puede mirar. La IA está para el paso más tedioso, pasar el enunciado a casillas: lee el texto, reconoce el método, marca de dónde sale cada dato y abre el módulo lleno, apoyada en los apuntes del curso. Fuera quedó todo lo que no cabe en esa idea: no hay simplex ni problemas de más de dos variables, ni transbordo, ni prueba de optimalidad paso a paso en transporte, porque la solución óptima se calcula de una vez; no hay Markov en tiempo continuo ni colas con capacidad finita; los tamaños se topan en diez restricciones, matrices de 6 × 6 y seis estados; no se exporta nada a PDF ni a Excel, no se comparten ejercicios, no hay service worker ni modo sin conexión, y desde la interfaz no se puede cambiar el nombre ni el correo, ni borrar la cuenta.',
      funcionalidades: [
        {
          area: 'Cuenta y acceso',
          items: [
            'Registro con nombre de mínimo 2 caracteres (se recortan los espacios de sobra y se guardan hasta 60), correo validado contra un patrón y contraseña de 8 a 200 caracteres',
            'El correo repetido sí se nombra al registrarse, con un 409 que invita a iniciar sesión',
            'Mismo mensaje para cuenta inexistente y contraseña equivocada, y una comparación contra un hash falso para que las dos tarden lo mismo',
            'Contraseñas con scrypt del núcleo de Node, con sal propia de 16 bytes por usuario y comparación en tiempo constante',
            'Sesión de 30 días en cookie HttpOnly, SameSite Lax y Secure cuando el origen es https',
            'Entrar o crear cuenta con Google por OAuth 2.0, alcance openid email profile, selector de cuenta forzado y un state en cookie que vive diez minutos',
            'Google exige el correo verificado; si ese correo ya tenía cuenta se le vincula, y si no, se crea una sin contraseña que puede ponerse después con «¿Olvidaste tu contraseña?»',
            'El botón de Google solo aparece si el servidor tiene credenciales; sin ellas, la ruta vuelve al acceso con un aviso en lugar de fallar',
            'Recuperar la contraseña con un enlace por correo que vence en 30 minutos y sirve una sola vez; pedir otro invalida el anterior',
            'Pedir el enlace responde lo mismo exista o no la cuenta, y la pantalla de «Revisa tu correo» repite la dirección que escribiste',
            'Al guardar la contraseña nueva se abre sesión y se cierran las abiertas en otros equipos',
            'El token del enlace se quita de la dirección apenas carga la página, para que no quede en el historial del navegador',
            'Frenos por intentos cada 15 minutos: 8 fallos de entrada por IP y correo, 8 registros y 6 pedidos de enlace por IP; además, 3 enlaces por correo cada hora',
            'Tras entrar se vuelve a la página que se pedía, solo si es una ruta propia de la app',
            'Menú de cuenta con tus iniciales, el nombre, el correo, el historial y cerrar sesión',
            'Si entra otra cuenta en el mismo navegador, los ejercicios guardados de la anterior se borran antes de mostrar nada',
          ],
        },
        {
          area: 'La pantalla de entrada',
          items: [
            'A la izquierda, un panel que resuelve en vivo un problema de cada módulo, diez segundos cada uno: el plano que se traza hasta el óptimo (2, 6), el costo mínimo celda por celda, una ficha que recorre una cadena de tres estados, una fila M/M/1 y un enunciado que se escanea',
            'Una lectura grande arriba sigue cada escena: Z, el costo total, P(A), Wq o los datos encontrados',
            'Los cinco módulos abajo con su barra de progreso; tocar uno salta a su escena',
            'El color de la página sigue al módulo que se está resolviendo, con una transición del propio color',
            'Cinco modos del formulario: entrar, crear cuenta, recuperar, enlace enviado y contraseña nueva, cada uno con su titular de dos líneas',
            'Al pasar a crear cuenta, el panel y el formulario cambian de lado deslizándose',
            'Cada campo se marca con una raya lateral del color del módulo cuando ya es válido, y el que falla se sacude',
            'Ver u ocultar la contraseña desde el propio campo',
            'Al entrar, la página se cubre con un círculo que nace del botón',
            'La escena se vuelve a dibujar a la medida si cambia el tamaño del panel, y el carrusel se detiene con la pestaña oculta',
          ],
        },
        {
          area: 'Inicio y navegación',
          items: [
            'Los cinco módulos en fila, curvados en arco: las tarjetas de los extremos giran y se alejan',
            'Cada tarjeta trae una escena animada de su técnica: restricciones que se trazan hasta el óptimo, una ficha que recorre tres estados, envíos que circulan por la red, clientes que llegan a un servidor y un enunciado cuyos datos vuelan a los campos',
            'Con el mouse encima la tarjeta crece y se endereza',
            'Al abrir un módulo la tarjeta se expande hasta cubrir la pantalla y el módulo ya viene entrando debajo; al volver, se recoge otra vez en su tarjeta',
            'Direcciones limpias para cada vista: /metodo-grafico, /transporte, /markov, /colas, /leer-enunciado e /historial, con atrás y recargar funcionando',
            'Los enlaces viejos con # pasan solos a la dirección nueva',
            'Escape vuelve al inicio desde cualquier módulo, salvo mientras escribes',
            'Cada módulo tiñe el fondo de la página con su color',
            'Detrás de todo, una retícula de plano cartesiano que se desliza despacio, con un grano leve',
            'Cargar un ejemplo y limpiar desde la cabecera de cada módulo',
          ],
        },
        {
          area: 'Método gráfico',
          items: [
            'Modelo, gráfica y resultado en una sola pantalla de tres columnas; todo se recalcula al escribir, sin botón de resolver',
            'Maximizar o minimizar, nombres opcionales para x₁ y x₂ y hasta diez restricciones con signo ≤, ≥ o =',
            'Modo texto: el modelo se escribe en renglones como «max Z = 3x1 + 5x2» o «3x1 + 2x2 <= 18», acepta x e y, los signos ≤ ≥ y fracciones, y dice qué línea no entendió',
            'Teclado: Enter avanza y crea renglón al final, las flechas suben y bajan, < > = cambian el signo y Retroceso en un renglón vacío lo borra',
            'Pegar un modelo completo en texto o renglones copiados de Excel con sus tres columnas',
            'Deshacer y rehacer con Ctrl+Z y Ctrl+Y, hasta 200 pasos',
            'Región factible con sus vértices nombrados A, B, C desde el más cercano al origen, y la recta de Z que pasa por el óptimo',
            'Cinco estados: óptimo único, óptimos múltiples con el tramo resaltado, no acotado, sin región factible y falta Z',
            'Interruptor de enteros: si el vértice óptimo tiene decimales se busca el mejor punto entero de la región y se marca como PE; los puntos enteros se dibujan si caben',
            'Tabla de vértices con su Z, y holgura o excedente de cada restricción en el punto reportado',
            'Sensibilidad: rango de c₁ y c₂ en que el óptimo no se mueve, e intervalo [LI, LS] de cada lado derecho con su precio sombra y los puntos S y W de los extremos',
            'Cortes de cada recta y de la recta de Z con los dos ejes',
            'Escenarios: hasta dos cambios sobre el original, con la región original punteada de fondo, el Z de antes y de después, y la lista de lo que cambió en palabras',
            'Pasar el cursor por un vértice o por su fila de la tabla muestra sus coordenadas y su Z',
            'Si las restricciones no caben, una flecha dice cuántas quedan arriba o abajo',
          ],
        },
        {
          area: 'Transporte y asignación',
          items: [
            'Dos modos en la misma vista, transporte y asignación, de hasta 6 × 6 y con nombres editables',
            'Balance automático: si sobra oferta se agrega un destino ficticio y si falta, un origen ficticio, los dos con costo 0',
            'Barras de reparto de la oferta y la demanda, con el ficticio rayado',
            'Cuatro métodos comparados en una franja: costo mínimo, esquina noroeste, Vogel y la solución óptima, cada uno con su costo y cuánto se aleja del óptimo',
            'La tabla se resuelve paso a paso, con la celda del paso, las filas y columnas tachadas y la explicación de cada asignación',
            'En Vogel, las penalizaciones de cada fila y columna se ven en la tabla, con la elegida resaltada',
            'Solución degenerada en la esquina noroeste: se asigna un 0 en la columna que se canceló',
            'Reproducir, pausar, paso anterior y siguiente, y una barra para saltar a cualquier paso; cada paso dura lo que toma leer su explicación',
            'Vista de red: orígenes y destinos unidos por curvas cuyo grosor sigue la cantidad enviada',
            'Resultado con las variables básicas y no básicas, la nota de qué es sobrante o demanda no cubierta, y el aporte de cada ruta al costo total',
            'Pestaña con el modelo escrito: variables, función objetivo, oferta, demanda y dominio',
            'Asignación con el método húngaro paso a paso: matriz cuadrada con fila o columna ficticia, conversión de máximo a mínimo, restas por fila y por columna, líneas que cubren los ceros trazadas sobre la tabla y ajuste',
            'La tabla se encoge para caber entera sin cortarse',
          ],
        },
        {
          area: 'Cadenas de Markov',
          items: [
            'Variable aleatoria y unidad de tiempo en la cabecera, hasta seis estados con nombre y la matriz P con la suma de cada fila al lado',
            'Las filas que no suman 1 y las celdas fuera de [0, 1] se marcan, y un aviso nombra los estados por revisar',
            'Estado inicial π(0) con su suma y un botón para repartirlo igual',
            'Un estado nuevo llega como absorbente: su fila trae 1 en la diagonal',
            'Diagrama de transición a toda la altura: estados sobre una elipse, flechas curvas con grosor según la probabilidad, lazos y etiquetas que se corren para no encimarse',
            'Pasar sobre un estado resalta sus salidas; los absorbentes llevan doble círculo y los transitorios van más tenues',
            'Un anillo alrededor de cada estado muestra π(n), con un deslizador de 0 a 20 pasos y reproducción automática',
            'Vista de proyección con las curvas de π(n) y el estado estable punteado',
            'Clasificación de la cadena en ergódica, absorbente, periódica o reducible, explicada, y de cada estado en recurrente, transitorio o absorbente',
            'Periodicidad con los ciclos listados y el MCD de sus longitudes',
            'Tabla de π(n) y la matriz Pⁿ coloreada por intensidad',
            'Largo plazo de una ergódica: estado estable, el sistema de ecuaciones y el tiempo medio de regreso 1/πᵢ',
            'Largo plazo de una absorbente: matriz fundamental N = (I − Q)⁻¹, pasos esperados hasta absorberse y probabilidades de absorción B = N·R',
          ],
        },
        {
          area: 'Teoría de colas',
          items: [
            'Cinco modelos: M/M/1, M/M/s, M/D/1, M/G/1 y M/Eₖ/1, con la notación de Kendall en grande y qué significa cada letra',
            'Tasas por segundo, minuto, hora o día; servidores de 1 a 8 y fases de Erlang de 1 a 12',
            'Utilización ρ con su barra; si llega a 1, el sistema se declara saturado y la pantalla explica por qué',
            'Lq, L, Wq, W, P₀ y Pw, con los tiempos también en la unidad menor',
            'Redondeo del curso como interruptor: Lq hacia arriba y ese entero usado en L, Wq y el costo',
            'Costo total CT = Cw·L + Cs·s, partido en espera y servicio',
            'Tabla de costo de 1 a 6 servidores con el más barato marcado; tocar una fila cambia el modelo a M/M/s con ese número',
            'Gráfica apilada del costo por servidores y gráfica de Pₙ para M/M/1 y M/M/s',
            'Las fórmulas con tus números: Pollaczek-Khintchine para los de servicio general, la ley de Little y la convención del curso',
            'Ritmo: cada cuánto llega un cliente y cada cuánto se atiende uno, con puntos que corren a ese paso',
            'Simulación en vivo: los clientes llegan al azar, hacen fila y pasan a los servidores libres, con pausa, reinicio y velocidad 1×, 2× o 4×',
            'Contadores de la simulación: en cola, atendiéndose, atendidos y el Lq observado frente al teórico',
            'Traza de los clientes en el sistema a lo largo del tiempo, con la línea del L teórico',
          ],
        },
        {
          area: 'Leer un enunciado con IA',
          items: [
            'Una hoja rayada donde pegas el ejercicio tal cual, con su conteo de caracteres; desde 20 se puede leer con el botón o con Ctrl+Enter',
            'Mientras la IA piensa, una línea de escáner recorre el texto de arriba abajo y vuelve',
            'Al llegar la respuesta, la línea hace una última pasada y enciende, al pasar, las marcas numeradas de los datos que se usaron',
            'Los cuatro métodos compiten con su barra de confianza; transporte suma la de asignación',
            'Ficha del método recomendado con su porcentaje, la razón en una frase y la lista de lo que se va a llenar, cada campo con la frase del enunciado de donde salió',
            'Una nota con los supuestos de la lectura, como el valor de un parámetro que se sustituyó',
            '«Abrir en» lleva al módulo con el modelo ya cargado',
            'Dentro de cada módulo, el botón «Leer enunciado» abre una hoja sobre el panel del modelo, muestra la propuesta y la aplica con «Usar este modelo», que se puede deshacer',
            'Errores con nombre: sin clave de API en el servidor, cupo del día agotado, sin conexión, sesión vencida o un texto con el que la IA no pudo trabajar',
            'Tope de 40 lecturas por usuario al día',
            'El texto pegado se guarda y sigue ahí al volver',
          ],
        },
        {
          area: 'Historial',
          items: [
            'Cada visita a un módulo se guarda sola en tu cuenta: cada 12 segundos si hubo cambios y al salir de la página',
            'Abrir un módulo sin tocar nada no crea entrada',
            'Título y detalle armados del propio ejercicio: «Max Z = 3x₁ + 5x₂», «Transporte 3×4», «M/M/1 · λ 10 · μ 12» o el comienzo del enunciado',
            'Resumen con el total de ejercicios y cuántos trabajaste en los últimos 7 días',
            'Filtro por módulo con su conteo y una barra proporcional',
            'Entradas agrupadas por día, Hoy, Ayer o la fecha, con la hora o «Hace N min»',
            '«Abrir» restaura los datos en su módulo, y lo que sigas cambiando actualiza esa misma entrada',
            'Borrar pide un segundo toque: el botón se arma con «¿Borrar?» durante unos tres segundos',
            'Hasta 300 entradas por cuenta; pasado el tope se van las más viejas',
            'Esqueletos mientras carga y un estado vacío con el dibujo de una región',
          ],
        },
        {
          area: 'Tema y reglas de la casa',
          items: [
            'Tema claro u oscuro que sigue al del sistema hasta que eliges uno con el botón de sol',
            'El cambio de tema se revela en círculo desde el punto que tocaste',
            'Fondo y color de la barra del sistema resueltos antes del primer pintado, sin destello',
            'Un par de colores por módulo, más un violeta para el historial; el fondo de la página toma el del módulo abierto',
            'Sin bordes ni sombras: las superficies se separan por capas de color',
            'Sin barras de desplazamiento: lo que no cabe se desvanece en el borde y una flecha que se mece avisa que hay más',
            'Los íconos se redibujan trazo a trazo al pasar el mouse',
            'Por debajo de 820 píxeles de alto, leyendas, notas y textos de apoyo ceden su espacio primero',
            'Por debajo de 900 píxeles de ancho cada vista pasa a una columna y la página vuelve a desplazarse',
            'Anillo de foco visible solo al navegar con teclado',
            'Vista previa al compartir con Open Graph y tarjeta grande de X, manifiesto con íconos normales y enmascarable, robots.txt y sitemap',
          ],
        },
      ],
      carpetas: [
        {
          carpeta: 'raíz',
          que_es: 'Un solo proyecto de Node 22 con una única dependencia, el SDK de Anthropic. Arriba viven los cinco archivos del servidor y la imagen de despliegue.',
          hijos: [
            {
              carpeta: 'servidor.js',
              que_es: 'node:http a secas: la sonda de salud, el reparto entre la API, Google y los estáticos, la puerta que manda a /entrar sin sesión y la ruta de la IA con su cupo',
            },
            {
              carpeta: 'cuentas.js',
              que_es: 'usuarios con scrypt, la cookie firmada con HMAC, los límites de intentos, la recuperación por correo con su plantilla, el flujo de Google y el historial por usuario',
            },
            {
              carpeta: 'ia.js',
              que_es: 'los dos pedidos a Claude, los esquemas JSON y las reglas de cada método, la ubicación de cada frase en el texto y la conversión al formato de cada módulo',
            },
            {
              carpeta: 'rag.js',
              que_es: 'BM25 en memoria sobre el índice del curso, con las palabras vacías del español y el tema del método pesando el doble',
            },
            {
              carpeta: 'correo.js',
              que_es: 'el envío por la API de Resend o por un cliente SMTP escrito a mano sobre TLS, más un modo de prueba que escribe el correo en la consola',
            },
            {
              carpeta: 'Dockerfile',
              que_es: 'node:22-slim con npm ci sin dependencias de desarrollo; copia solo lo que corre, el índice y la carpeta pública, y arranca como el usuario node en el puerto 3000',
            },
          ],
        },
        {
          carpeta: 'public/',
          que_es: 'Lo que se sirve tal cual: una sola página para todas las direcciones, un archivo de estilos y los módulos de JavaScript, sin paso de compilación.',
          hijos: [
            {
              carpeta: 'index.html',
              que_es: 'la página única con Open Graph, el script que fija el tema antes del primer pintado y la marca del origen que el servidor reemplaza al servirla',
            },
            {
              carpeta: 'css/estilos.css',
              que_es: 'el sistema visual entero en unas 1.800 líneas: los tokens de los dos temas, las escenas animadas del inicio y la distribución propia de cada módulo',
            },
            {
              carpeta: 'js/app.js',
              que_es: 'la navegación con direcciones limpias, la tarjeta que se abre en módulo, el menú de la cuenta y el cambio de tema',
            },
            {
              carpeta: 'js/registro.js',
              que_es: 'el registrador del historial: lee lo que cada módulo guarda en el navegador y lo sube sin tocar las vistas',
            },
            {
              carpeta: 'js/modulos.js y js/util.js',
              que_es: 'los cinco módulos con su par de colores y su ícono, y la función que arma el DOM junto al acceso al almacenamiento local',
            },
            {
              carpeta: 'correo/, manifest.webmanifest, robots.txt y sitemap.xml',
              que_es: 'las imágenes del correo de recuperación, el manifiesto con ícono enmascarable y lo que leen los buscadores',
            },
          ],
        },
        {
          carpeta: 'public/js/motores/',
          que_es: 'El cálculo, en funciones puras que no tocan el DOM; las pruebas las importan desde Node tal cual.',
          hijos: [
            {
              carpeta: 'grafico.js',
              que_es: 'vértices por cruce de rectas, región no acotada por direcciones, mejor punto entero, rangos de sensibilidad y el lector del modelo escrito como texto',
            },
            {
              carpeta: 'transporte.js',
              que_es: 'balanceo con ficticio, costo mínimo, esquina noroeste y Vogel con sus pasos, el óptimo por flujo de costo mínimo y el húngaro con el cubrimiento de König',
            },
            {
              carpeta: 'markov.js',
              que_es: 'proyección, potencias de P, inversa por Gauss-Jordan, clases de comunicación, periodo por MCD, estado estable y absorción',
            },
            {
              carpeta: 'colas.js',
              que_es: 'las medidas de los cinco modelos, la convención del curso, el costo total y la tabla por número de servidores',
            },
          ],
        },
        {
          carpeta: 'public/js/vistas/',
          que_es: 'Una vista por pantalla, cada una con su montar y su desmontar. Ninguna librería de componentes.',
          hijos: [
            {
              carpeta: 'metodo-grafico.js',
              que_es: 'la vista más grande, con el dibujo que se traza y luego se transforma, los escenarios, la sensibilidad y los cortes',
            },
            {
              carpeta: 'transporte.js',
              que_es: 'la rejilla editable, la franja de métodos, la tabla o la red paso a paso y el húngaro con sus líneas',
            },
            {
              carpeta: 'markov.js y colas.js',
              que_es: 'el diagrama con los anillos de π(n) y la proyección; el sistema, la simulación en vivo, los costos y las fórmulas',
            },
            {
              carpeta: 'enunciado.js',
              que_es: 'la hoja con su escáner, las marcas sobre el texto, los cuatro métodos que compiten y la ficha del recomendado',
            },
            {
              carpeta: 'entrar.js e historial.js',
              que_es: 'el acceso con las cinco escenas que se resuelven solas y sus cinco modos, y el historial por día con sus filtros',
            },
            {
              carpeta: 'inicio.js y comun.js',
              que_es: 'las cinco tarjetas con su escena en SVG, y las piezas compartidas: cabecera, deshacer, selectores, pestañas, contador y la hoja de IA',
            },
          ],
        },
        {
          carpeta: 'conocimiento/ y scripts/',
          que_es: 'La base del RAG y las tareas que la arman. Al repositorio solo sube el índice ya armado; las fuentes del curso se quedan en el equipo.',
          hijos: [
            {
              carpeta: 'indice.json',
              que_es: '124 fragmentos con su fuente y su tema: 47 de transporte, 39 de Markov, 34 de colas y 4 de método gráfico; es lo único del conocimiento que entra a la imagen',
            },
            {
              carpeta: 'indexar.mjs',
              que_es: 'une las diapositivas hasta fragmentos de al menos 220 caracteres, parte las notas de método por sección y escribe el índice; corre con npm run indexar',
            },
            {
              carpeta: 'extraer_texto.py',
              que_es: 'saca el texto de los .docx y .pptx del curso solo con la biblioteca estándar de Python, leyendo el XML que traen dentro',
            },
          ],
        },
        {
          carpeta: 'pruebas/ y herramientas/',
          que_es: 'Lo que se queda en el equipo y no sube al repositorio: las pruebas hechas con material del curso y el despliegue.',
          hijos: [
            {
              carpeta: 'casos.mjs',
              que_es: '24 ejercicios ya resueltos de talleres y exámenes, cada uno con su respuesta conocida',
            },
            {
              carpeta: 'ia-curso.mjs',
              que_es: 'cada enunciado pasa por la IA y luego por los motores de la app, y se compara con la respuesta; cuatro casos en paralelo y el resultado guardado en un JSON',
            },
            {
              carpeta: 'navegador.mjs',
              que_es: 'Edge sin ventana con puppeteer-core: entra con una cuenta, pega enunciados reales, espera la lectura, abre el módulo y lee lo que muestra la pantalla',
            },
            {
              carpeta: 'desplegar.sh',
              que_es: 'publica en acmsy a través del agente local y sigue el registro del despliegue',
            },
          ],
        },
      ],
      arquitectura: {
        resumen: 'Un solo proceso de Node 22 sin frameworks: servidor.js levanta node:http, sirve la carpeta pública, deja pasar a la API y a las rutas de Google, y devuelve la misma página para cualquier dirección sin extensión, así /markov o /colas se recargan sin romperse; sin sesión, toda página lleva a /entrar con la ruta pedida guardada para volver. La interfaz son módulos ES servidos tal cual, sin compilación: cuatro motores de cálculo puros que no tocan el DOM y ocho vistas que los usan y dibujan con SVG y la Web Animations API. Cada módulo guarda su ejercicio en el navegador al escribir, y un registrador aparte lo sube al historial de la cuenta. Las cuentas y el historial son archivos JSON escritos de forma atómica, con contraseñas en scrypt y la sesión en una cookie firmada con HMAC. La IA vive en dos archivos: rag.js busca con BM25 en memoria los cinco fragmentos del curso más parecidos al enunciado, e ia.js hace dos llamadas a Claude Opus 5.5 con la salida atada a un esquema JSON, una para clasificar el método y otra para extraer el modelo, que el servidor normaliza al formato exacto de cada módulo antes de devolverlo. El correo sale por Resend o por un cliente SMTP escrito a mano sobre TLS. Todo cabe en una imagen sobre node:22-slim que corre como usuario sin privilegios en el puerto 3000, con un volumen para las cuentas, publicada en acmsy detrás de Cloudflare.',
        capas: [
          {
            nombre: 'Cliente',
            piezas: [
              {
                nombre: 'Vistas y navegación',
                tecnologia: 'JavaScript · módulos ES · History API',
                que_hace: 'Ocho vistas que se montan y desmontan sobre una sola página, con direcciones limpias por módulo. Cada una guarda su ejercicio en el almacenamiento local al escribir, y un registrador aparte lo sube al historial.',
              },
              {
                nombre: 'Motores de cálculo',
                tecnologia: 'JavaScript puro',
                que_hace: 'Cuatro archivos de funciones sin DOM: método gráfico, transporte y asignación, Markov y colas. Corren en el navegador en cada tecla y en Node dentro de las pruebas.',
              },
              {
                nombre: 'Dibujo y movimiento',
                tecnologia: 'SVG · Web Animations · View Transitions',
                que_hace: 'La región factible, la red, el diagrama de transición, las gráficas, la simulación de colas y las escenas del inicio y del acceso, todo construido a mano. El cambio de tema usa una transición de vista.',
              },
            ],
          },
          {
            nombre: 'Servidor',
            piezas: [
              {
                nombre: 'Servidor HTTP',
                tecnologia: 'node:http · Node 22',
                que_hace: 'Sirve los estáticos y rechaza las rutas que se salen de la carpeta pública, reemplaza el origen público en el HTML, robots.txt y sitemap.xml, y manda a /entrar toda página pedida sin sesión.',
              },
              {
                nombre: 'Cuentas e historial',
                tecnologia: 'node:crypto · scrypt · HMAC',
                que_hace: 'Registro, entrada, recuperación por correo y Google; la cookie firmada; los límites de intentos; y el historial por usuario con un tope de 300 entradas.',
              },
              {
                nombre: 'Lectura con IA',
                tecnologia: 'Anthropic SDK 1.11 · json_schema',
                que_hace: 'Clasifica el método, extrae el modelo con el esquema de ese método y los apuntes recuperados, ubica cada frase en el texto y convierte el resultado al formato del módulo, con un cupo diario por usuario.',
              },
              {
                nombre: 'Recuperación',
                tecnologia: 'BM25 en memoria',
                que_hace: 'Puntúa los 124 fragmentos del índice contra el enunciado, favorece los del tema detectado y entrega los cinco mejores con su fuente.',
              },
            ],
          },
          {
            nombre: 'Datos y servicios',
            piezas: [
              {
                nombre: 'Archivos JSON',
                tecnologia: 'escritura atómica · volumen de Docker',
                que_hace: 'Un archivo con las cuentas, cargado a memoria al arrancar, y uno de historial por usuario. Cada escritura va a un temporal que luego se renombra, todas por una misma cola.',
              },
              {
                nombre: 'Claude Opus 5.5',
                tecnologia: 'API de Anthropic · streaming',
                que_hace: 'Hasta dos pedidos por lectura con la salida forzada a JSON. Un rechazo, una respuesta cortada o una clave inválida se traducen a códigos y mensajes que la pantalla sabe mostrar.',
              },
              {
                nombre: 'Google OAuth',
                tecnologia: 'OAuth 2.0 · openid email profile',
                que_hace: 'Flujo escrito con fetch: intercambio del código, perfil con correo verificado y vínculo por identificador de Google o por correo.',
              },
              {
                nombre: 'Resend o SMTP',
                tecnologia: 'API HTTP · node:tls',
                que_hace: 'El correo de recuperación, con su versión en texto y en HTML. Si no hay ninguno configurado, la recuperación responde que todavía no está disponible.',
              },
              {
                nombre: 'Despliegue',
                tecnologia: 'Docker · acmsy · Cloudflare',
                que_hace: 'Imagen sobre node:22-slim que corre como usuario sin privilegios, publicada en vertice.acmsy.com; la IP real de cada petición se lee primero de la cabecera de Cloudflare.',
              },
            ],
          },
        ],
      },
      decisiones: [
        {
          titulo: 'Sin frameworks ni compilación, y una sola dependencia',
          texto: 'El servidor es node:http a secas y la interfaz son módulos ES que el navegador carga tal cual: no hay Express, ni librería de interfaz, ni empaquetador, y el package.json declara una sola dependencia, el SDK de Anthropic. Lo que normalmente pone una librería está escrito en el código: leer cookies, juntar el cuerpo de la petición con su tope, firmar la sesión, armar el DOM o enviar correo por SMTP. El precio es ese código propio que hay que mantener, y que los archivos no llevan hash en el nombre: por eso el JavaScript y el CSS se sirven con no-cache, que obliga al navegador a revalidar en cada carga para no quedarse con una versión vieja después de un despliegue.',
        },
        {
          titulo: 'Los motores no tocan el DOM, y por eso las pruebas los reutilizan',
          texto: 'El cálculo vive en cuatro archivos de funciones puras, uno por técnica, separados de las vistas que dibujan. Esa frontera es la que permite que la prueba de punta a punta importe los mismos motores desde Node: el enunciado pasa por la IA, el modelo que devuelve se resuelve con el código de la app y el resultado se compara con la respuesta conocida del ejercicio. El precio aparece en los bordes: el motor gráfico da las holguras en el vértice óptimo, y cuando el modelo pide enteros la vista las vuelve a calcular en el punto que de verdad reporta.',
        },
        {
          titulo: 'El método gráfico cruza todas las rectas en lugar de usar simplex',
          texto: 'Con dos variables, el motor intersecta cada par de restricciones y ejes, se queda con los puntos que cumplen todo con una tolerancia relativa, los ordena alrededor de su centro y los nombra A, B, C desde el más cercano al origen. Para saber si la región sigue sin fin prueba las direcciones de cada recta y de los ejes: si alguna mejora Z el problema es no acotado, y si alguna la deja igual hay óptimos múltiples. Así cada vértice de la tabla es uno que de verdad se calculó, como en el método a mano. El precio es que no sirve para más de dos variables, y la IA tiene un campo propio solo para avisar cuando el enunciado parece necesitar más.',
        },
        {
          titulo: 'El punto entero se busca recorriendo la región columna por columna',
          texto: 'Cuando las variables son enteras y el vértice óptimo sale con decimales, se sigue la regla del curso: buscar los puntos enteros factibles y quedarse con el que mejor deja a Z. El motor recorre cada x entero, deduce de todas las restricciones el intervalo de y permitido y prueba solo el extremo que favorece a Z, desempatando por cercanía al óptimo continuo; si los puntos no pasan de 900, además los dibuja en la gráfica. El precio es que es una enumeración: si la región se extiende más de dos millones de unidades en x se rinde, y la sensibilidad se sigue calculando sobre el vértice continuo, algo que la propia pantalla advierte.',
        },
        {
          titulo: 'La sensibilidad se saca con geometría, sin tabla final de simplex',
          texto: 'El rango de cada coeficiente de Z es el intervalo en que el vértice óptimo sigue siendo al menos tan bueno como todos los demás, sin abrir una dirección que mejore. Para el lado derecho, el motor busca la otra recta que define el óptimo con una prueba de factibilidad dual, desliza el punto sobre ella y obtiene el intervalo [LI, LS], los puntos S y W de los extremos y el precio sombra como el cambio de Z por unidad. El precio es que solo funciona con un óptimo único: con óptimos múltiples los rangos no se calculan, y si varias rectas pasan por el mismo punto la restricción se declara degenerada y queda sin precio sombra.',
        },
        {
          titulo: 'El óptimo de transporte sale de un flujo de costo mínimo',
          texto: 'La solución óptima no se obtiene mejorando la tabla inicial, sino armando una red de fuente, orígenes, destinos y sumidero, y empujando flujo por el camino más barato que quede, encontrado con Bellman-Ford sobre la red residual. El comentario del código lo resume: da el mismo valor que Solver, y contra ese valor mide la franja cuánto se aleja cada método inicial. El precio es que el óptimo no tiene pasos de tabla ni prueba de optimalidad celda por celda, y la pantalla lo dice en lugar de inventarlos.',
        },
        {
          titulo: 'Los empates se rompen como en clase',
          texto: 'En costo mínimo, si dos celdas cuestan lo mismo gana la que permite asignar más; en Vogel, a igual penalización gana la línea con la celda más barata, y cuando queda una sola fila o columna se toma su celda más barata sin mirar penalizaciones; en la esquina noroeste, si oferta y demanda se agotan a la vez, se pone un 0 en la columna cancelada para no perder la variable básica. Son las convenciones del curso escritas como reglas explícitas. El precio es que otra regla de desempate daría una solución inicial distinta e igual de válida, y la aplicación no deja escogerla.',
        },
        {
          titulo: 'El húngaro encuentra las líneas con el teorema de König',
          texto: 'Cubrir todos los ceros con el mínimo de líneas es el paso que a mano se hace a ojo. Aquí se resuelve buscando primero un emparejamiento máximo sobre los ceros con caminos de aumento, y de ahí se deducen las filas y columnas que forman el cubrimiento mínimo. Antes, la matriz se completa a cuadrada con una fila o columna ficticia de costo 0, y un problema de máximo se convierte restando cada valor del mayor; el total final siempre se suma con la matriz original. El precio es un tope de treinta rondas de ajuste: si no alcanzara, la asignación saldría vacía y el total sin valor.',
        },
        {
          titulo: 'La convención de colas es un interruptor, y viene encendida',
          texto: 'En clase Lq se redondea hacia arriba y ese entero se arrastra: L es el techo de ⌈Lq⌉ + λ/μ, Wq es ⌈Lq⌉/λ y el costo se calcula con ese L. El motor calcula siempre los valores exactos y aparte la versión del curso, y un interruptor decide cuál se muestra; la IA lo deja encendido al llenar el módulo, y las pruebas comparan los costos con él. El precio es que con el redondeo los números dejan de cumplir la ley de Little, porque L ya no es λ·W, y por eso las tarjetas de Lq y L enseñan el valor exacto, una flecha y el entero.',
        },
        {
          titulo: 'La simulación de colas es de eventos discretos, con el reloj escalado',
          texto: 'Las llegadas son exponenciales por transformada inversa y el servicio sigue al modelo: constante en M/D/1, suma de k exponenciales en Erlang y una normal por Box-Muller recortada para M/G/1. El reloj se escala para que a 1× llegue un cliente cada 2,2 segundos reales en promedio, lo justo para seguirlo con la vista, y el Lq observado sale de integrar la cola en el tiempo para compararlo con el teórico. El precio es que la distribución «general» de M/G/1 es siempre una normal, que el promedio observado tarda en acercarse al teórico y que la simulación se detiene con la pestaña oculta.',
        },
        {
          titulo: 'La IA hace dos llamadas: una barata para clasificar y otra para extraer',
          texto: 'La primera llamada pide solo el método, una confianza para cada uno y una frase de razón, con esfuerzo bajo y un tope de 4.000 tokens; el servidor vuelve a normalizar esas confianzas para que sumen 1. La segunda ya conoce el método y extrae el modelo con esfuerzo medio, hasta 16.000 tokens y los apuntes del curso en el prompt. Desde dentro de un módulo la clasificación se salta, salvo en transporte, donde solo sirve para distinguir transporte de asignación. El precio es doble: la espera, que en las pruebas fue de 5,7 a 11 segundos por lectura y unos 8 de promedio, y que dentro de un módulo un enunciado de otro método se extrae igual con el esquema de ese módulo, porque nadie lo clasificó.',
        },
        {
          titulo: 'La respuesta de la IA está atada a un esquema, y aun así se normaliza',
          texto: 'Cada método tiene su esquema JSON con todos los campos obligatorios y ninguno de sobra, enumeraciones para signos, modelos de colas y unidades, y descripciones que funcionan como instrucciones. La API devuelve JSON que cumple el esquema, pero el servidor no confía en los tamaños: recorta a diez restricciones y a matrices de 6 × 6, corta los nombres, pasa los números a coma decimal y convierte un M/M/s de un servidor en M/M/1, hasta dejar el objeto exacto que cada módulo guarda en el navegador. Un rechazo responde 422 y una respuesta cortada por tokens, 502. El precio es que lo que pase del tope se pierde en silencio: el servidor recorta y no avisa.',
        },
        {
          titulo: 'Cada dato se ubica en el texto original, no donde la IA dice',
          texto: 'La IA devuelve de cuatro a diez frases copiadas del enunciado, cada una con el campo que llena. El servidor no las da por buenas: las busca primero tal cual, luego con una expresión que tolera espacios, mayúsculas y el espacio antes de un signo de porcentaje, y por último con prefijos cada vez más cortos hasta tres palabras, y devuelve el trozo exacto del original. En la pantalla, el área de escritura lleva detrás una capa espejo con el mismo texto donde se pintan las marcas numeradas, sincronizada con su scroll. El precio es que una frase que la IA parafraseó y no aparece se descarta sin aviso, y ese dato queda sin marca aunque sí llegue al modelo.',
        },
        {
          titulo: 'El RAG es BM25 en memoria, sin embeddings ni base vectorial',
          texto: 'El índice tiene 124 fragmentos, así que la búsqueda es léxica y vive en el mismo proceso: el texto se pasa a minúsculas, se le quitan las tildes y las palabras vacías del español, y se puntúa con BM25 con k1 = 1,4 y b = 0,75. Los fragmentos del tema del método pesan el doble y los demás bajan al 35 %, y los cinco mejores entran al prompt de extracción con su fuente. El índice se carga la primera vez que se usa y no necesita ningún servicio aparte. El precio es que un sinónimo no encuentra nada que no comparta palabras, y que la cobertura es desigual: de los 124 fragmentos, solo 4 son de método gráfico.',
        },
        {
          titulo: 'Los talleres y exámenes no entran al índice: son la prueba',
          texto: 'El guion que arma el índice lo dice en su encabezado: los enunciados de talleres y exámenes no se indexan, se usan solo para probar, así que la IA no los tiene en sus apuntes. La prueba de punta a punta recorre 24 ejercicios ya resueltos, 3 de método gráfico, 4 de transporte, 3 de asignación, 8 de Markov y 6 de colas, con cuatro trabajadores en paralelo, y la última corrida dio 24 de 24. Aparte, una segunda prueba maneja la aplicación real en Edge sin ventana. El precio es que ese material y las pruebas se quedan fuera del repositorio público, y que cada caso gasta dos llamadas a la API.',
        },
        {
          titulo: 'Cuentas e historial en archivos JSON con escritura atómica',
          texto: 'No hay base de datos: las cuentas se cargan a memoria al arrancar desde un solo archivo, y el historial de cada usuario es un archivo propio que se lee la primera vez y queda en caché. Cada escritura va a un temporal que luego se renombra encima del original, y todas pasan por una misma cola de promesas, así que nunca quedan dos a medias ni un archivo truncado. En producción esos archivos viven en un volumen de Docker. El precio es que solo puede correr un proceso, que las cuentas se buscan recorriendo la lista, y que un error de disco se registra en la consola mientras la petición responde como si se hubiera guardado.',
        },
        {
          titulo: 'La sesión es una firma con versión, no una tabla de sesiones',
          texto: 'La cookie lleva el identificador del usuario, el vencimiento y una firma HMAC-SHA256 que también cubre la versión de sesión de esa cuenta, y se verifica en tiempo constante. Restablecer la contraseña sube esa versión, y con eso todas las cookies firmadas antes dejan de valer en cualquier equipo sin tener que guardarlas en ningún lado. Si el servidor no recibe el secreto de la firma, lo genera una sola vez y lo deja en el volumen, para que un reinicio no cierre todas las sesiones. El precio es que cerrar sesión solo borra la cookie del navegador: una copia de esa cookie seguiría valiendo sus treinta días, salvo que cambie la contraseña.',
        },
        {
          titulo: 'El enlace de recuperación solo se guarda como hash',
          texto: 'El token viaja en el correo como 32 bytes en hexadecimal, pero en la cuenta queda su SHA-256 junto al vencimiento a 30 minutos; al usarlo se borra, y pedir otro sobrescribe el anterior. Pedir el enlace responde lo mismo exista o no la cuenta, y al entrar, un correo inexistente se compara contra un hash falso para tardar lo mismo que una contraseña equivocada. El precio está en el registro, que sí dice que el correo ya tiene cuenta y manda a iniciar sesión, así que por esa puerta se puede averiguar quién está registrado.',
        },
        {
          titulo: 'Los límites viven en un mapa del proceso',
          texto: 'Los intentos fallidos se cuentan en un mapa en memoria con ventanas de quince minutos: ocho fallos por la pareja de IP y correo al entrar, ocho registros y seis pedidos de enlace por IP, más un tope aparte de tres enlaces por correo cada hora; la IP se toma primero de la cabecera de Cloudflare. El cupo de la IA, cuarenta lecturas por usuario al día, vive en otro mapa igual. El precio es triple: un reinicio borra los contadores, la llave del acceso junta IP y correo, así que probar muchas cuentas desde una misma IP no se acumula en un solo contador, y el día de la IA es el de UTC, que en Colombia cambia a las siete de la noche.',
        },
        {
          titulo: 'El cliente SMTP está escrito a mano sobre TLS',
          texto: 'El correo sale por dos caminos sin dependencias: la API HTTP de Resend, o un cliente SMTP sobre node:tls que conversa paso a paso con el servidor, EHLO, AUTH LOGIN, MAIL FROM, RCPT TO y DATA, arma un mensaje multipart con texto y HTML en base64, codifica las cabeceras con tildes y duplica los puntos al comienzo de línea. Si algo falla, el error sale con la contraseña tapada, y por defecto apunta al puerto 465 de Gmail. El precio es que solo habla TLS directo: un servidor que exija STARTTLS en el 587 no funciona, y no hay reintentos.',
        },
        {
          titulo: 'El correo lleva el plano resuelto, y aguanta si bloquean las imágenes',
          texto: 'La plantilla de recuperación es solo tablas y estilos en línea, lo que respetan Gmail y Outlook, con el esquema de color fijado en claro. Arriba va la imagen del plano del método gráfico con el óptimo en (2, 6) y Z = 36 sobre una celda mandarina, luego el botón, dos fichas con «Vence en 30 min» y «Sirve una sola vez», el enlace en texto por si el botón no abre y, al pie, la fila de los módulos. Las imágenes se sirven desde el propio origen público, y si el cliente las bloquea, el color de fondo de la celda sigue en su sitio. El precio es que el correo depende de que el dominio público esté arriba para verse completo.',
        },
        {
          titulo: 'El ejercicio vive en el navegador y el historial es una copia que se sube sola',
          texto: 'Cada módulo guarda su ejercicio en el almacenamiento local con cada cambio, y un registrador aparte, sin tocar las vistas, lee esas mismas claves: toma una línea base 700 milisegundos después de entrar, para que abrir un módulo sin tocar nada no cree una entrada, y sube los cambios cada 12 segundos y al ocultar o cerrar la página con keepalive. La huella compara solo los datos del ejercicio, no la pestaña ni la vista abiertas, y abrir algo del historial lo escribe de vuelta para que la visita siga sobre esa misma entrada. El precio es que el servidor guarda el estado como JSON opaco de hasta 120 KB, validando solo el módulo y la clave, y que dos pestañas del mismo módulo comparten una sola clave: gana la última que escribe.',
        },
        {
          titulo: 'Una sola página para todas las direcciones, con la puerta en el servidor',
          texto: 'Toda ruta sin extensión devuelve la misma página, y el cliente decide qué vista montar con la History API, así /markov se puede recargar o compartir. La puerta está en el servidor: sin sesión cualquier página redirige a /entrar con la ruta pedida, y con sesión /entrar devuelve al inicio salvo que traiga un enlace de recuperación. La ruta de regreso solo se acepta si es de minúsculas y guiones, en el cliente y en el servidor, para que nadie use el acceso como redirección abierta. El precio es que el JavaScript y el CSS se sirven igual con o sin sesión, y que para un buscador todo termina en la pantalla de entrada.',
        },
        {
          titulo: 'La tarjeta se abre hasta volverse el módulo',
          texto: 'Al tocar una tarjeta del inicio, un telón con su color recorta exactamente el rectángulo de la tarjeta y se expande a pantalla completa con clip-path; a los 300 milisegundos el módulo se monta debajo, para que su propia entrada ya esté en marcha cuando el telón se desvanece. Volver hace el recorrido al revés hasta la tarjeta, y mientras dura la transición la navegación queda en espera y se resuelve al terminar. El precio es que quien entra directo por la dirección de un módulo no tiene tarjeta que abrir, y el módulo simplemente aparece con su entrada.',
        },
        {
          titulo: 'El dibujo se traza la primera vez y después se transforma',
          texto: 'Nada aparece ya dibujado: la retícula entra desde el origen, los ejes se trazan, cada restricción se recorre con un punto que hace de lápiz, la región se delinea y luego se rellena, brota el óptimo y desde él crece la recta de Z hacia sus dos extremos con una máscara. Al editar, en cambio, la vista recuerda en píxeles lo que dibujó: las rectas y la región interpolan su trazo hacia el nuevo y cada vértice viaja desde el más cercano de antes. Si algo obliga a redibujar a media entrada, la coreografía sigue con los tiempos corridos en lugar de saltar al final. El precio es una vista de más de mil líneas, la más grande del proyecto.',
        },
        {
          titulo: 'Cada módulo trae su par de colores y la página lo adopta',
          texto: 'Cada módulo define un fondo, un segundo tono y una tinta, con el mandarina para el método gráfico y un violeta aparte para el historial, y al abrir uno el fondo de la página se tiñe con un 7 % de su color. En el acceso, el color es una propiedad registrada con @property, así que el navegador puede animar el propio color cuando cambia la escena. El precio es que la marca no tiene un acento fijo en pantalla: el logo de la cabecera usa la tinta del tema, y cada vista cambia de color.',
        },
        {
          titulo: 'Sin barras de desplazamiento, con el borde desvanecido en su medida',
          texto: 'Todas las barras están ocultas. Lo que no cabe se desvanece con una máscara cuyo degradado mide lo que de verdad queda oculto, a lo sumo unas decenas de píxeles, y una flecha que se mece avisa que hay más y avanza casi una pantalla al tocarla; en la lista de restricciones dice cuántas quedan arriba o abajo. El precio es que sin barra no hay pista de cuánto contenido queda, y que la flecha no recibe el foco del teclado.',
        },
        {
          titulo: 'El tema se fija antes del primer pintado, y el botón solo alterna',
          texto: 'Un script en línea del head lee la preferencia guardada, estampa el atributo del tema y crea la etiqueta del color de la barra del sistema, y un estilo en línea pinta el fondo desde el primer cuadro. Si no hay preferencia, el tema sigue al sistema en vivo. El botón de sol revela el tema nuevo en un círculo que nace del punto que tocaste, con una transición de vista. El precio es que el botón solo alterna entre claro y oscuro: una vez que lo tocas, la interfaz no tiene cómo volver a seguir al sistema.',
        },
        {
          titulo: 'La imagen solo lleva lo que corre',
          texto: 'El Dockerfile parte de node:22-slim, instala con npm ci sin dependencias de desarrollo y copia uno por uno los cinco archivos del servidor, el índice del RAG y la carpeta pública; las fuentes del curso, las pruebas y las herramientas no se copian. Corre como el usuario node en el puerto 3000, con el directorio de las cuentas creado a su nombre para montarle un volumen. El precio es que cada archivo nuevo del servidor hay que agregarlo a mano a la lista del COPY, o la imagen arranca sin él.',
        },
      ],
    },
    landing: '#',
  },
  {
    nombre: 'MedTrail',
    enDesarrollo: true,
    color: '#0BC5F4',
    logo: '/logos/medtrail.svg',
    stack: ['Angular 22', 'Express 4', 'MySQL', 'SCSS'],
    descripcion:
      'Trazabilidad y analitica de inventario farmaceutico y de insumos: seguir cada producto desde que entra hasta que se usa, y entender el movimiento con datos en vez de suposiciones.',
    arquitectura:
      'Frontend Angular con componentes standalone y backend Express desacoplado, cada uno con su propio ciclo de build. Modelo relacional en MySQL con lotes, fechas de vencimiento y movimientos de entrada y salida como tabla de eventos, de modo que el inventario es el resultado de sumar el historial y no un campo que se sobreescribe.',
    // todavia sin desplegar en acmsy: cuando lo publiques, pon aca la url
    url: '#',
    landing: '#',
    // Estetica y ficha larga sacadas del repositorio de la app.
    estetica: {
      google: 'IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500',
      fuente: {
        titulo: '\'IBM Plex Sans\', system-ui, sans-serif',
        cuerpo: '\'IBM Plex Sans\', system-ui, sans-serif',
        mono: '\'IBM Plex Mono\', monospace',
      },
      radio: '16px',
      curva: 'ease',
      claro: {
        fondo: '#F7FBFD',
        sup: '#FFFFFF',
        texto: '#0B2C36',
        suave: '#5F7C86',
        acento: '#27CCF5',
      },
      oscuro: {
        fondo: '#011418',
        sup: '#033744',
        texto: '#E7F9FE',
        suave: '#7EA7B3',
        acento: '#27CCF5',
      },
    },
    detalle: {
      stackRoles: [
        {
          nombre: 'Angular 22',
          papel: 'La interfaz. Siete pantallas standalone con signals, carga diferida y sin zone.js.',
        },
        {
          nombre: 'Express 4',
          papel: 'La API. Un router con nueve rutas bajo /api y seis controladores.',
        },
        {
          nombre: 'MySQL',
          papel: 'Los datos. Seis tablas leídas con mysql2 en SQL directo, sin ORM.',
        },
        {
          nombre: 'SCSS',
          papel: 'El diseño. Un solo styles.scss con la paleta cian y las clases compartidas.',
        },
      ],
      unaFrase: 'Aplicación web de trazabilidad de inventario farmacéutico e insumos: lee el código GS1 de la caja, guarda cada lote con su vencimiento en MySQL y cruza el stock con el registro sanitario del INVIMA y el precio de referencia SISMED.',
      porQueExiste: 'Un hospital tiene que responder tres preguntas sobre cada caja que entra: si su registro sanitario sigue vigente ante el INVIMA, si el precio que se pagó está por encima de la referencia SISMED y cuándo vence el lote. MedTrail junta esas tres respuestas sobre el mismo dato, la unidad de inventario, identificada por GTIN, lote y vencimiento leídos del código GS1 impreso en el empaque. Alrededor de eso hay cinco pantallas de operación y una de indicadores, todas alimentadas por consultas SQL sobre la misma base y no por cálculos hechos en el navegador. Lo que quedó fuera es tan explícito como lo que entró: no hay cuentas ni inicio de sesión, la pantalla de perfil es una maqueta sin backend, el catálogo se puede crear pero no editar ni borrar, el buscador de la barra superior no filtra nada y el selector de sede se llena desde la API pero no entra en ninguna consulta. Tampoco hay integración en vivo con INVIMA ni con SISMED: las alertas y los precios de referencia son columnas de la base que alguien debe llenar.',
      funcionalidades: [
        {
          area: 'Armazón y navegación',
          items: [
            'Barra lateral de 246 px con el logo, el nombre de la app y los seis enlaces de sección',
            'El enlace de la sección activa se pinta con el cian de marca mediante routerLinkActive',
            'Tarjeta de perfil al pie de la barra lateral con iniciales, nombre y cargo, que lleva a la pantalla de perfil',
            'Barra superior que queda pegada arriba al desplazar, con buscador, selector de sede, campana con punto rojo de aviso y avatar',
            'El selector de sede se llena con GET /api/sedes y toma la primera sede como valor inicial',
            'Barra inferior de cinco pestañas por debajo de 900 px; Parametrización queda fuera de ella',
            'Encabezado de página compartido con título, subtítulo y píldora "INVIMA · SISMED sincronizados"',
            'Las siete rutas se cargan de forma diferida con loadComponent, una por pantalla',
            'Cualquier ruta desconocida y la raíz redirigen a /inventario',
            'Barra de desplazamiento oculta en toda la app, conservando el scroll por rueda y por gesto táctil',
            'Las cinco pantallas de analítica muestran su propio aviso en rojo si la llamada a la API falla; Parametrización no lo hace y Perfil no llama al servidor',
          ],
        },
        {
          area: 'Captura e inventario',
          items: [
            'Cuatro KPIs: unidades en stock con número de SKU activos, valor de inventario valorizado a SISMED, porcentaje de registro vigente y unidades que vencen en 30 días o menos',
            'El porcentaje de registro vigente muestra debajo cuántos SKU están sin verificar',
            'Tabla de stock con producto, tipo, GTIN, lote, vencimiento, estado, cantidad con su unidad de medida y ubicación',
            'Filtro por tipo con tres chips: Todos, Medicamentos e Insumos',
            'Búsqueda que cruza nombre, GTIN, lote y ubicación, escrita en el campo del panel de escaneo',
            'El estado de cada fila lo decide el servidor: alerta INVIMA si el producto tiene alerta, por vencer a 90 días o menos, y vigente en el resto',
            'Distintivo de color por estado: cian vigente, ámbar por vencer, rojo alerta',
            'Filas alternas y desplazamiento horizontal con ancho mínimo de 820 px',
            'Tarjeta de última unidad enriquecida con la entrada más reciente: laboratorio, presentación, GTIN (01), vencimiento (17), lote (10), serial (21), registro sanitario y precio SISMED',
            'Mensaje de sin resultados cuando el filtro no deja ninguna fila',
          ],
        },
        {
          area: 'Lectura de códigos GS1',
          items: [
            'La lectura ocurre solo en Parametrización, escaneando o pegando el código en un campo; la zona de escaneo de Inventario es un marco fijo y el campo que la acompaña busca dentro del stock',
            'Extracción del GTIN en tres formas: AI 01 seguido de 14 dígitos, cadena de 15 dígitos que empieza en 1 descartando el indicador, y código plano de 8 a 14 dígitos',
            'Los ceros a la izquierda se recortan y la longitud resultante define el estándar: GTIN-8, GTIN-12, GTIN-13 o GTIN-14',
            'Lote (AI 10) leído hasta el siguiente identificador conocido de la lista 17, 11, 240, 21, 10 y 37',
            'Vencimiento (AI 17) en formato YYMMDD, con siglo 19 si los dos dígitos del año son 50 o más y siglo 20 si son menores',
            'Fecha de fabricación (AI 11) aceptada solo si el año no es posterior al actual',
            'Identificador adicional (AI 240) de 1 a 30 caracteres',
            'El código se rechaza de entrada si trae espacios o puntos',
            'Conversión de dd/mm/aaaa, dd.mm.aaaa y aaaa-mm-dd a fecha ISO antes de guardar',
            'Desglose en seis casillas de lo extraído antes de guardar: GTIN, estándar, lote, vencimiento, fabricación e identificador',
            'Aviso explícito cuando del código no se puede extraer ningún GTIN',
          ],
        },
        {
          area: 'Dispensación y consumo',
          items: [
            'Tres KPIs: unidades dispensadas hoy, valor dispensado en las últimas 24 horas y número de servicios con consumo',
            'Barras de consumo por servicio de los últimos 30 días, con los cinco servicios que más consumen y ancho relativo al mayor',
            'Formulario de salida con producto y lote, cantidad, servicio destino y responsable',
            'El selector de lote muestra nombre, lote, sede y stock, y solo lista unidades con cantidad mayor que cero',
            'Previsualización del stock que queda tras la salida antes de confirmar',
            'La salida descuenta del inventario dentro de una transacción, bloqueando la fila del lote con SELECT ... FOR UPDATE',
            'Rechazo con 409 si la cantidad supera el stock, indicando cuántas unidades hay disponibles',
            'Rechazo con 400 si falta la unidad o el servicio, o si la cantidad, truncada a entero, no queda mayor que cero',
            'Al registrar, la pantalla vuelve a cargar sus datos y muestra el stock restante',
            'Tabla de las últimas ocho salidas con hora, medicamento, cantidad en rojo con signo menos, servicio, lote y responsable',
            'Siete servicios destino fijos: UCI Adultos, Urgencias, Cirugía, Hospitalización, Pediatría, Oncología y Farmacia Central',
          ],
        },
        {
          area: 'Vencimientos y alertas INVIMA',
          items: [
            'Tres KPIs por ventana (30 días o menos, 31 a 60 y 61 a 90), cada uno con valor en millones, unidades y número de lotes',
            'Gráfica de tres barras con el valor por vencer en millones de pesos, en rojo, ámbar y cian según la ventana',
            'Lista de alertas INVIMA activas con producto, motivo, referencia del registro sanitario y unidades afectadas',
            'Resumen de impacto sobre las alertas: total de unidades afectadas y su valor',
            'El cruce alerta-inventario se hace por GTIN comparado sin ceros a la izquierda o por registro sanitario igual',
            'Si la alerta no corresponde a ningún producto en stock, el nombre se toma del paréntesis de la descripción y las unidades quedan en cero',
            'Tabla de lotes con vencimiento a 90 días o menos, ordenada por fecha, con días restantes, unidades, valor y ventana',
            'Los lotes ya vencidos aparecen con días en negativo dentro de la ventana de 30 días',
          ],
        },
        {
          area: 'Sobrecostos SISMED',
          items: [
            'Tres KPIs: sobrecosto acumulado, número de ítems por encima de la referencia y sobreprecio promedio de esos ítems',
            'Tabla comparativa con precio de compra, referencia SISMED, diferencia porcentual, distribución, impacto mensual y estado',
            'Solo entran a la comparación los productos que tienen precio de compra y precio SISMED mayor que cero',
            'Orden descendente por la diferencia en pesos entre precio de compra y referencia, así que los mayores sobrecostos quedan arriba',
            'Barra de distribución que superpone el precio de compra sobre la referencia, escalada al precio más alto de la tabla',
            'La barra se pinta roja cuando hay sobrecosto y cian cuando el precio está dentro de la referencia',
            'El impacto mensual se calcula multiplicando la diferencia por el stock y se muestra como raya cuando no es positivo',
            'Leyenda de dos colores en la cabecera de la tabla y distintivo de sobrecosto o en referencia por fila',
          ],
        },
        {
          area: 'Panel de indicadores',
          items: [
            'Cinco KPIs: valor de inventario, porcentaje vencido, porcentaje con registro vigente contra la meta del 95 %, rotación mensual y exposición a alertas',
            'Gráfica de línea en SVG con las unidades dispensadas de los últimos seis meses, rejilla de cuatro niveles y etiquetas de mes',
            'Los meses sin dispensaciones se rellenan con cero para que la serie nunca tenga huecos',
            'Barras de valor por categoría en millones de pesos: medicamentos, insumos y dispositivos',
            'Cuatro indicadores de salud del inventario con barra: registro INVIMA vigente, dentro de precio SISMED, sin riesgo de vencimiento a más de 90 días y trazabilidad GS1 completa',
            'La rotación mensual es el cociente entre lo dispensado en 30 días y el stock actual, expresada con dos decimales',
            'Tabla de inventario por sede con valor y porcentaje vencido',
            'El nivel de riesgo de cada sede se clasifica en bajo, medio o alto con cortes en 1,5 % y 3 % de valor vencido',
          ],
        },
        {
          area: 'Parametrización y catálogo',
          items: [
            'Cuatro vistas dentro de una sola ruta: lista, detalle, comparación y etiqueta',
            'Alta de producto pegando o escaneando el código GS1, con el código interno propuesto como el consecutivo siguiente',
            'Si el GTIN ya está registrado, la app avisa a qué producto pertenece y agrega el lote a ese producto en vez de duplicarlo',
            'Si el GTIN es nuevo, se crea el producto con estado de registro no verificado y su GTIN de proveedor',
            'Cuando el GTIN ya existe pero el código no trae lote (AI 10), el alta se bloquea explicando el motivo',
            'Un producto sin GTIN se guarda con el valor literal Sin GTIN y se marca con un chip ámbar en la tabla',
            'Tabla del catálogo con código, nombre, tipo, GTIN por proveedor y lotes con su vencimiento',
            'Detalle del producto al pulsar una fila, con cinco KPIs: stock, valor a SISMED, precio de compra, diferencia contra la referencia y próximo vencimiento',
            'Gráfica de variación del precio de compra en índice base 100, con conmutador de 6 meses o 1 año',
            'Tabla de lotes en stock con lote, vencimiento, fabricación, serial (240) y unidades',
            'Lista de GTIN por proveedor del producto abierto',
            'Comparador de hasta cuatro productos adicionales, buscados por nombre con un desplegable de seis sugerencias',
            'Cada producto comparado lleva su color de serie, con etiquetas retirables y todas las curvas superpuestas',
            'Tabla comparativa con precio, referencia, diferencia, stock, valor, rotación y vencimiento',
            'Vista de etiqueta para productos sin código de fábrica, con código de barras dibujado en SVG, un cuadro de QR de muestra y un bloque de datos fijos equivalentes al GS1',
          ],
        },
        {
          area: 'Perfil y ajustes',
          items: [
            'Ficha con iniciales, nombre, cargo y distintivo de sesión activa',
            'Datos profesionales: cédula, registro profesional, correo institucional y sede asignada',
            'Formulario de cuenta con nombre, cargo, correo, teléfono, idioma y zona horaria',
            'Cuatro preferencias de notificación con interruptor: alertas INVIMA en tiempo real, aviso de vencimiento a 30 días, sobrecostos SISMED y resumen gerencial semanal',
            'Bloque de seguridad con cambio de contraseña y cierre de sesión',
            'Los interruptores cambian en pantalla pero no se guardan: la pantalla no tiene backend detrás',
          ],
        },
        {
          area: 'Base de datos y arranque',
          items: [
            'Un solo comando instala lo que falte, levanta backend y frontend y escribe el proxy entre ambos',
            'El backend crea la base medtrail si no existe, aplica el esquema y carga el seed solo si la tabla de productos está vacía',
            'El esquema es idempotente: las seis tablas se crean con CREATE TABLE IF NOT EXISTS',
            'Datos de ejemplo con 4 sedes, 12 productos, 18 GTIN por proveedor, 14 lotes, 24 dispensaciones y 4 alertas INVIMA',
            'Todas las fechas del seed son relativas al día actual, así que vencimientos y rotación siguen teniendo sentido cualquier día',
            'Búsqueda automática de puerto libre: desde 5177 para la API y desde 4200 para el frontend',
            'El backend imprime su puerto real en una línea marcada y el orquestador la lee para escribir proxy.conf.json',
            'Ruta de salud en /api/health con estado, nombre del servicio y hora',
            'Las rutas desconocidas bajo /api responden 404 en JSON',
            'Ctrl+C cierra los dos procesos, con taskkill en Windows y SIGTERM en el resto',
            'Un segundo script levanta solo el frontend, sin base de datos',
          ],
        },
      ],
      carpetas: [
        {
          carpeta: 'frontend/',
          que_es: 'La aplicación Angular 22 standalone, con signals y rutas diferidas.',
          hijos: [
            {
              carpeta: 'src/app/features',
              que_es: 'una carpeta por pantalla: inventory, dispensing, expirations, sismed, dashboard, parametrization y profile',
            },
            {
              carpeta: 'src/app/core',
              que_es: 'el cliente de la API, el lector GS1, el servicio de layout y los modelos de respuesta',
            },
            {
              carpeta: 'src/app/shared',
              que_es: 'los dos componentes reutilizables: encabezado de página y gráfica de línea SVG',
            },
            {
              carpeta: 'src/styles.scss',
              que_es: 'los tokens del diseño y las clases compartidas: tarjetas, KPIs, tablas, distintivos y botones',
            },
            {
              carpeta: 'src/assets',
              que_es: 'el icono SVG de MedTrail, usado como logo y como favicon',
            },
          ],
        },
        {
          carpeta: 'backend/',
          que_es: 'API REST en Express 4 con TypeScript, ejecutada por tsx sin compilación previa.',
          hijos: [
            {
              carpeta: 'src/routes',
              que_es: 'un único router con las nueve rutas bajo /api y el envoltorio que captura errores de promesas',
            },
            {
              carpeta: 'src/controllers',
              que_es: 'seis controladores, uno por pantalla, con el SQL escrito a mano',
            },
            {
              carpeta: 'src/db',
              que_es: 'el pool de mysql2 más schema.sql y seed.sql, que se aplican al arrancar',
            },
            {
              carpeta: 'src/services',
              que_es: 'el formateo de pesos, porcentajes y millones, y un parser GS1 que nadie importa',
            },
            {
              carpeta: 'src/models',
              que_es: 'los tipos de dominio del backend, hoy usados solo por el parser GS1',
            },
          ],
        },
        {
          carpeta: 'scripts/',
          que_es: 'Los dos orquestadores de arranque del monorepo, en Node puro y sin dependencias.',
          hijos: [
            {
              carpeta: 'dev-full.mjs',
              que_es: 'levanta backend y frontend, detecta puertos y escribe el proxy',
            },
            {
              carpeta: 'dev.mjs',
              que_es: 'levanta solo el frontend en el primer puerto libre desde 4200',
            },
          ],
        },
        {
          carpeta: 'raíz',
          que_es: 'Monorepo de dos mitades. Arriba solo viven los scripts y la documentación.',
          hijos: [
            {
              carpeta: 'package.json',
              que_es: 'orquesta las dos mitades: dev, install:all, backend, frontend y build',
            },
          ],
        },
      ],
      arquitectura: {
        resumen: 'Dos procesos separados y una base MySQL. El frontend es un SPA de Angular 22 con componentes standalone, signals y sin zone.js, que solo habla con /api a través de un único servicio HttpClient. El backend es Express 4 en TypeScript ejecutado por tsx sin compilación previa, con un router de nueve rutas y seis controladores que escriben SQL directo contra un pool de mysql2 de diez conexiones. No hay ORM ni capa de repositorios: cada controlador arma sus consultas, calcula lo que necesita y devuelve las cifras ya formateadas en pesos y porcentajes al estilo colombiano. La base se levanta sola: una conexión de arranque sin base seleccionada aplica schema.sql y, si la tabla de productos está vacía, carga seed.sql. En desarrollo un orquestador en Node levanta las dos mitades, busca puertos libres y escribe proxy.conf.json para que Angular reenvíe /api al puerto real del backend. No hay despliegue en el repositorio: existe un build que compila las dos mitades, pero nadie sirve el paquete de Angular desde Express.',
        capas: [
          {
            nombre: 'Cliente',
            piezas: [
              {
                nombre: 'Aplicación Angular',
                tecnologia: 'Angular 22 · standalone · signals',
                que_hace: 'Siete pantallas con carga diferida sobre un armazón de barra lateral y barra superior. Todo el estado vive en signals y valores calculados, sin zone.js ni gestor de estado.',
              },
              {
                nombre: 'Cliente de la API',
                tecnologia: 'HttpClient con fetch',
                que_hace: 'Un solo servicio con nueve métodos contra la ruta relativa /api. Ninguna pantalla llama al servidor por su cuenta.',
              },
              {
                nombre: 'Lector GS1',
                tecnologia: 'TypeScript · expresiones regulares',
                que_hace: 'Extrae GTIN, lote, vencimiento, fabricación e identificador del código escaneado y convierte las fechas a ISO, todo en el navegador.',
              },
            ],
          },
          {
            nombre: 'Servidor',
            piezas: [
              {
                nombre: 'API REST',
                tecnologia: 'Express 4 · TypeScript · tsx',
                que_hace: 'Nueve rutas bajo /api más la de salud, con manejo centralizado de errores y CORS abierto. Corre el TypeScript directo, sin paso de compilación.',
              },
              {
                nombre: 'Controladores',
                tecnologia: 'SQL sobre mysql2',
                que_hace: 'Seis módulos, uno por pantalla, que resuelven KPIs, agregados y series con consultas escritas a mano y marcadores con nombre.',
              },
              {
                nombre: 'Formateo',
                tecnologia: 'Intl con locale es-CO',
                que_hace: 'Convierte los números en las cadenas que la interfaz pinta tal cual: pesos, millones, porcentajes, múltiplos y horas.',
              },
            ],
          },
          {
            nombre: 'Datos y arranque',
            piezas: [
              {
                nombre: 'MySQL',
                tecnologia: 'mysql2 · pool de 10 conexiones',
                que_hace: 'Seis tablas InnoDB: sedes, productos, GTIN por proveedor, lotes de inventario, dispensaciones y alertas INVIMA. Fechas como cadena y decimales como número.',
              },
              {
                nombre: 'Esquema y semilla',
                tecnologia: 'schema.sql · seed.sql',
                que_hace: 'Se aplican al arrancar desde una conexión con sentencias múltiples. El seed solo entra si la tabla de productos está vacía.',
              },
              {
                nombre: 'Orquestador de desarrollo',
                tecnologia: 'Node · child_process · net',
                que_hace: 'Instala lo que falte, busca puertos libres, arranca las dos mitades, escribe el proxy y las cierra juntas.',
              },
            ],
          },
        ],
        flujo: [
          {
            de: 'Aplicación Angular',
            a: 'API REST',
            que_viaja: 'consultas de pantalla y altas',
          },
          {
            de: 'Lector GS1',
            a: 'Aplicación Angular',
            que_viaja: 'GTIN, lote y fechas ya extraídos',
          },
          {
            de: 'API REST',
            a: 'Controladores',
            que_viaja: 'petición y cuerpo JSON',
          },
          {
            de: 'Controladores',
            a: 'MySQL',
            que_viaja: 'consultas y transacciones de salida',
          },
          {
            de: 'Controladores',
            a: 'Aplicación Angular',
            que_viaja: 'KPIs, filas y series ya formateados',
          },
          {
            de: 'Orquestador de desarrollo',
            a: 'Aplicación Angular',
            que_viaja: 'puerto real del backend en proxy.conf.json',
          },
        ],
      },
      decisiones: [
        {
          titulo: 'Cada salida descuenta el saldo del lote y además queda registrada como movimiento',
          texto: 'Registrar una dispensación hace dos escrituras en la misma transacción: resta la cantidad de la columna del lote e inserta la fila en la tabla de dispensaciones. El saldo se lee sin agregar nada, lo que mantiene las consultas de inventario simples, y a la vez el historial completo sigue existiendo para la rotación y para las últimas salidas. El precio es que hay dos verdades sobre el mismo hecho: si alguien toca la tabla de lotes por fuera de la API, el saldo y el historial se separan y nada lo detecta.',
        },
        {
          titulo: 'La fila del lote se bloquea con SELECT ... FOR UPDATE antes de descontar',
          texto: 'La salida abre una transacción, lee el stock con bloqueo de fila, compara y solo entonces descuenta. Dos dispensaciones simultáneas del mismo lote no pueden vender más unidades de las que hay, que es el único punto de la app donde eso importa. El costo es que la fila queda bloqueada mientras dura la transacción y que la conexión sale de un pool de diez: bajo carga real, el cuello de botella estaría ahí.',
        },
        {
          titulo: 'El servidor elige su puerto y se lo dicta al frontend por la consola',
          texto: 'El backend prueba desde el 5177 hasta cincuenta puertos, y cuando escucha imprime una línea marcada con el puerto elegido. El orquestador lee esa línea de la salida estándar, escribe proxy.conf.json y recién entonces levanta Angular, que siempre llama a la ruta relativa /api. Así nunca hay un puerto escrito a mano en el código del frontend. El precio es que el contrato entre las dos mitades es una línea de log: si cambia ese texto, el arranque se queda esperando para siempre.',
        },
        {
          titulo: 'La base se crea sola, pero el seed solo entra si está vacía',
          texto: 'Al arrancar se abre una conexión sin base seleccionada y con sentencias múltiples habilitadas para poder correr el archivo de esquema entero. Después se cuentan los productos y solo si el total es cero se aplica la semilla. Eso permite reiniciar el proyecto sin perder lo que se haya capturado a mano. La contrapartida es que no hay migraciones: si el esquema cambia, la única salida documentada es borrar la base completa y volver a arrancar.',
        },
        {
          titulo: 'Las cifras salen ya formateadas del servidor, no del cliente',
          texto: 'El backend devuelve cadenas listas para pintar, como el valor en millones o el porcentaje con un decimal, generadas con el locale colombiano. La interfaz solo las interpola, así que no hay dos formateos distintos para el mismo número en dos pantallas. El costo se ve en las gráficas: el cliente ya no puede reordenar ni recalcular nada, y las series y las barras necesitan campos numéricos aparte junto a los formateados.',
        },
        {
          titulo: 'La API devuelve nombres de variables CSS como color de las barras',
          texto: 'Los controladores de consumo por servicio y de salud del inventario emiten cadenas del estilo var(--cyan-400) que la plantilla inyecta directo en el fondo de la barra. Con eso el orden de colores lo decide quien conoce los datos y la paleta sigue viniendo del tema. El precio es un acoplamiento raro: la API deja de ser agnóstica del cliente, y renombrar un token del CSS deja las barras sin color sin que nada falle.',
        },
        {
          titulo: 'Las alertas INVIMA se cruzan por GTIN sin ceros a la izquierda o por registro sanitario',
          texto: 'El mismo producto tiene un GTIN por proveedor y los códigos llegan con distinta cantidad de ceros delante, así que la comparación se hace recortándolos en JavaScript, después de traerse las tres tablas enteras. Si no hay coincidencia por GTIN se prueba por registro sanitario, que es lo que publica el INVIMA. La contrapartida es doble: la tabla de alertas guarda un lote, pero el cruce ignora ese campo, así que una alerta de un lote concreto termina contando como afectado todo el stock de ese producto; y la consulta que pinta el estado de cada fila del inventario se quedó comparando los GTIN tal cual dentro del SQL, sin recortar los ceros.',
        },
        {
          titulo: 'Una alerta que no toca el inventario se sigue mostrando, con nombre sacado del paréntesis',
          texto: 'Cuando la alerta no corresponde a ningún producto en stock, el nombre del medicamento se extrae del texto entre paréntesis de la descripción y las unidades afectadas quedan en cero. Así el panel muestra también las alertas nacionales que no golpean a la institución, en vez de esconderlas. El precio es evidente: la descripción pasa a ser un campo con estructura implícita, y basta escribir la alerta sin paréntesis para que se muestre la frase entera como si fuera el nombre.',
        },
        {
          titulo: 'No hay tabla de precios históricos: la curva se construye a partir del último precio',
          texto: 'El catálogo devuelve el precio de compra repetido seis veces y el cliente antepone otros seis en rampa lineal, cada uno un 1,8 % del precio actual por debajo del siguiente, para poder ofrecer la vista de un año. La serie se normaliza a índice base 100, de modo que lo que se compara entre productos es la forma de la variación. Es una decisión honesta de alcance frente a inventarse datos en la base, pero significa que la gráfica de variación de precios hoy no mide nada: es una construcción, y solo dejará de serlo cuando exista la tabla que falta.',
        },
        {
          titulo: 'En la pantalla de catálogo el producto se identifica por su posición en el arreglo',
          texto: 'El detalle y el comparador guardan el índice de la lista cargada, no el identificador de la base. Funciona porque el catálogo llega ordenado por identificador ascendente y solo se recarga al entrar a la pantalla y después de un alta, y ahorra tener que buscar por clave en cada interacción. El riesgo está claro: si la lista se recarga entre el pintado y el clic, el detalle abre otro producto sin avisar.',
        },
        {
          titulo: 'Escanear un GTIN ya registrado agrega el lote en vez de crear un producto',
          texto: 'El alta compara el GTIN sin ceros a la izquierda contra todos los registrados; si aparece, avisa a qué producto pertenece, agrega el lote y registra el proveedor nuevo si es otro. Si no aparece, crea el producto con el estado de registro en no verificado, porque de un código de barras no se puede deducir que el registro sanitario esté vigente. La contrapartida es que ese estado hay que corregirlo a mano después, y que no existe forma de crear dos productos distintos que compartan GTIN aunque el caso fuera legítimo.',
        },
        {
          titulo: 'Un producto sin código de fábrica se guarda con el texto Sin GTIN',
          texto: 'En vez de dejar la columna nula, la app escribe el literal Sin GTIN, que es lo que la tabla muestra en un chip ámbar y lo que el usuario entiende de un vistazo. El costo es que ese valor centinela hay que excluirlo a mano en cada consulta donde se cuenta la trazabilidad completa o se busca por código, y que basta olvidarlo una vez para que el indicador de trazabilidad GS1 mienta.',
        },
        {
          titulo: 'La sede es texto copiado dentro de cada lote, sin llave foránea',
          texto: 'La tabla de lotes guarda el nombre de la sede como cadena y el panel de indicadores lo une contra la tabla de sedes comparando ese texto. Eso evita una junta más en las consultas de inventario, que son las que más se ejecutan. El precio es que la integridad queda del lado del código: renombrar una sede deja su stock huérfano en el panel, y el selector de sede de la barra superior existe pero todavía no filtra ninguna consulta.',
        },
        {
          titulo: 'El frontend corre sin zone.js y el estado vive solo en signals',
          texto: 'No hay dependencia de zone.js ni entrada de polyfills en la configuración de compilación: el repintado lo dispara la escritura de una signal, incluso desde los oyentes de matchMedia del servicio de layout. La app queda más liviana y el flujo de datos es explícito. La contrapartida es que cualquier estado que se mueva fuera de una signal, por ejemplo mutando un arreglo en su sitio, no vuelve a pintarse, y no queda red de seguridad que lo tape.',
        },
        {
          titulo: 'No hay librería de animación: todo el movimiento son cuatro transiciones CSS',
          texto: 'El proyecto no instala el paquete de animaciones de Angular, aunque el encargo pedía apariciones escalonadas de tarjetas y filas y contadores animados en los KPIs. Lo que quedó son cuatro transiciones: el fondo de los enlaces de navegación y de la tarjeta de perfil en 120 milisegundos, el crecimiento de las barras en 400, y el fondo y el desplazamiento del interruptor del perfil en 150. La interfaz queda sobria y sin coste de arranque, pero también sin nada que acompañe la entrada de los datos, y no hay bloque de movimiento reducido porque no habría casi nada que anular.',
        },
        {
          titulo: 'Hay dos lectores de GS1 y el que corre es el del navegador',
          texto: 'El backend incluye un parser GS1 completo, con soporte de paréntesis y de separador FNC1, que ningún controlador importa. El que se usa es el del cliente, un port literal de la función que el desarrollador ya tenía resuelta y que el encargo pedía no reimplementar. Se respetó esa regla al pie de la letra, con dos consecuencias: hay código muerto en el servidor, y la validación del código escaneado ocurre solo en el navegador, así que la API acepta el GTIN y el lote que le manden.',
        },
        {
          titulo: 'El manejador de errores devuelve el mensaje real de la excepción',
          texto: 'Todo fallo no capturado responde 500 con un objeto que incluye un texto genérico y el mensaje original del error. Depurar una consulta rota es inmediato, que es exactamente lo que se buscaba durante el desarrollo. El precio es que un error del driver de MySQL viaja tal cual al cliente, con nombres de tabla y de columna dentro, y eso habría que apagar antes de exponer la API.',
        },
        {
          titulo: 'Las pantallas comparten clases globales en vez de componentes de interfaz',
          texto: 'Tarjetas, KPIs, tablas densas, distintivos y botones viven como clases en un único archivo de estilos, y solo el encabezado de página y la gráfica de línea son componentes de verdad. Los estilos propios de cada pantalla van en un bloque de estilo dentro de la misma plantilla. Se evita así una capa de componentes de presentación que habría que mantener en paralelo al diseño, pero el precio es que las plantillas cargan bastante estilo en línea y que hay reglas ya escritas que ninguna marca usa.',
        },
        {
          titulo: 'El seed usa fechas relativas al día de la carga',
          texto: 'Ningún dato de ejemplo tiene fecha fija: los vencimientos, los ingresos y las dispensaciones se calculan como desplazamientos sobre la fecha actual, incluido un lote con vencimiento en negativo para que el porcentaje vencido no salga siempre en cero. La demostración nunca envejece y las tres ventanas de vencimiento siempre tienen contenido. La contrapartida es que los números dejan de ser reproducibles: la misma consulta da resultados distintos según el día en que se corra.',
        },
      ],
    },
  },
  {
    nombre: 'Gestion de Proyectos',
    enDesarrollo: true,
    color: '#295072',
    logo: null,
    stack: ['React 18', 'Express 4', 'SQL Server', 'JWT'],
    descripcion:
      'Herramienta para llevar proyectos, tareas y avances en un solo lugar, con graficas que muestran como va todo sin tener que leer listas interminables.',
    arquitectura:
      'Arquitectura hexagonal: el dominio expone puertos y la infraestructura entra como adaptador, asi que la base de datos y el framework HTTP son intercambiables sin tocar los casos de uso. Frontend y API se despliegan por separado (gestion y api-gestion). Autenticacion con JWT, hash con bcrypt y limite de peticiones por IP.',
    url: 'https://gestion.acmsy.com',
    captura: 'gestion',
    landing: '#',
    // Estetica y ficha larga sacadas del repositorio de la app.
    estetica: {
      google: 'Inter:wght@400;500;600;700',
      fuente: {
        titulo: 'Inter, ui-sans-serif, system-ui, -apple-system, \'Segoe UI\', Roboto, sans-serif',
        cuerpo: 'Inter, ui-sans-serif, system-ui, -apple-system, \'Segoe UI\', Roboto, sans-serif',
        mono: 'ui-monospace, \'SF Mono\', Consolas, monospace',
      },
      radio: '6px',
      curva: 'cubic-bezier(0.4, 0, 0.2, 1)',
      claro: {
        fondo: '#EDF0F3',
        sup: '#FFFFFF',
        texto: '#0F172A',
        suave: '#64748B',
        acento: '#295072',
      },
      oscuro: {
        fondo: '#060A0D',
        sup: '#0A1218',
        texto: '#F4F7FC',
        suave: '#A0ACBE',
        acento: '#295072',
      },
    },
    detalle: {
      stackRoles: [
        {
          nombre: 'React 18',
          papel: 'La interfaz. No declara sus rutas: las arma con el árbol de navegación que devuelve la API.',
        },
        {
          nombre: 'Express 4',
          papel: 'La API. Veintidós routers bajo /api, con el dominio detrás de puertos y adaptadores.',
        },
        {
          nombre: 'SQL Server',
          papel: 'Los datos. Veintidós tablas por Knex y el driver tedious, con borrado lógico.',
        },
        {
          nombre: 'JWT',
          papel: 'La sesión. Acceso de 15 minutos en memoria y refresco de 30 días en cookie httpOnly.',
        },
        {
          nombre: 'Chart.js',
          papel: 'Las gráficas. Doce tipos que leen los colores del tema activo.',
        },
      ],
      unaFrase: 'Panel de administración en el que el menú, los permisos, los iconos y el tema salen de la base de datos, y en el que un submódulo nuevo se dibuja en un editor visual y se publica como archivos React reales, sobre una API Express con arquitectura hexagonal y SQL Server.',
      porQueExiste: 'El repositorio arranca como una semilla de arquitectura hexagonal derivada de un starter anterior, limpiada hasta dejar el esqueleto, la librería de componentes y un módulo de referencia llamado module-x. El problema que ataca no es llevar proyectos: es todo lo que hay que construir antes de poder llevarlos, y que en cada aplicación interna se vuelve a escribir igual. Por eso lo primero que se resolvió fue la maquinaria: el menú y sus rutas se leen de la base de datos, los permisos se marcan por submódulo y por acción, y crear un submódulo nuevo consiste en escribir su nombre, dibujar la pantalla en un lienzo y publicar. Lo que quedó deliberadamente fuera son los módulos de negocio en sí: module-x es la plantilla, y las carpetas ander, prueba o try que quedan en disco son ensayos del generador, sin ruta montada en la API y con sus tablas eliminadas en la migración 036 de limpieza. Los mensajes por defecto del panel del login son la única declaración de intención sobre el destino del panel: proyectos con responsable, centro y área, avance en porcentaje, tareas por responsable, costo y ahorro anual.',
      funcionalidades: [
        {
          area: 'Cuenta y sesión',
          items: [
            'Inicio de sesión con usuario y contraseña, comparada con bcrypt contra el hash guardado, con un único mensaje de error exista o no el usuario',
            'Cuenta que no está activa: la API responde 403 con un mensaje distinto al de credenciales inválidas',
            'Entrada con Google por redirección: el botón arma la URL de consentimiento y la pantalla de retorno canjea el código en el backend contra el endpoint de token de Google',
            'Si falta el identificador de cliente de Google, el botón lo avisa en pantalla en vez de fallar',
            'Formulario de recuperación de contraseña en la misma tarjeta; al enviarlo la tarjeta vuelve al inicio de sesión',
            'En pantallas anchas, el formulario y el panel de mensajes intercambian de lado al pasar a recuperación, con una transición de 700 ms',
            'Token de acceso de 15 minutos que vive sólo en memoria; el de refresco dura 30 días en cookie httpOnly',
            'Al recargar, la aplicación pide un token nuevo antes de la primera llamada para no encadenar respuestas 401',
            'Latido de actividad: un aviso al servidor como mucho cada 60 segundos mientras haya ratón, teclado, scroll o toque',
            'Rutas protegidas: sin sesión, cualquier dirección lleva al login guardando el destino para volver',
            'Mientras se comprueba la sesión, un esqueleto que imita la silueta de la vista que viene, login o panel',
          ],
        },
        {
          area: 'Navegación y permisos',
          items: [
            'El menú lateral no está escrito en el código: se arma con el árbol de módulos y submódulos que devuelve la API',
            'Constructor del menú por arrastre, para ordenar y anidar módulos y submódulos',
            'Paleta con las carpetas reales que existen dentro de src/modules, listas para arrastrarlas al menú',
            'El árbol se guarda entero en una sola llamada y el borrado es lógico, con marca de fecha',
            'Al guardar, todos los navegadores conectados reciben el árbol nuevo y refrescan el menú sin recargar',
            'Cualquier archivo con nombre <Modulo>ListPage.tsx queda indexado en tiempo de compilación, sin tocar el registro a mano',
            'Si el submódulo existe en el menú pero todavía no tiene pantalla, se muestra un marcador de módulo en construcción',
            'Permisos por submódulo con cuatro acciones: ver, crear, editar y eliminar',
            'El árbol se recorta por permisos antes de registrar las rutas: una dirección sin permiso ni siquiera existe',
            'Un submódulo aparece si tiene cualquiera de las cuatro acciones, no sólo la de ver',
            'Menú plegable a 60 px, con la preferencia guardada en el navegador',
          ],
        },
        {
          area: 'Generador de submódulos',
          items: [
            'Crear un submódulo escribiendo su nombre, de 1 a 60 caracteres: el servidor clona el módulo de referencia entero, en el backend y en el frontend',
            'El clon copia los archivos reales y renombra cinco variantes del token, distinguiendo mayúsculas: ModuleX, MODULE_X, module-x, module_x y moduleX',
            'Genera además la migración con la tabla del módulo (id, name, description, is_active y marcas de tiempo) y un seed vacío',
            'Devuelve la lista de archivos escritos y cuántos son',
            'Rechaza nombres vacíos y el nombre reservado del módulo de referencia, y responde 409 si la carpeta ya existe',
            'En desarrollo escribe sobre el repositorio en disco; en producción sólo si se enciende la variable ALLOW_MODULE_GEN',
            'En producción clona el repositorio dentro del contenedor, genera ahí y hace commit y push, y el despliegue reconstruye la aplicación con el módulo ya compilado',
            'El contenedor corre las migraciones pendientes al arrancar, así la tabla del módulo nuevo se crea sola',
          ],
        },
        {
          area: 'Editor visual de pantallas',
          items: [
            'Lienzo infinito con fondo de puntos donde conviven a la vez todas las vistas del submódulo',
            'Catálogo de 30 tipos de bloque que el panel ofrece como 47 variantes repartidas en cinco grupos: Acción, Formulario, Estructura, Datos y Feedback',
            'Se colocan arrastrando desde el panel hasta el marco, respetando su margen interno de 24 px',
            'Mover y redimensionar con ocho tiradores repartidos por el perímetro',
            'Ajuste magnético: los bloques imantan a 6 px contra el margen del marco, su centro y los bordes de otros bloques; los marcos entre sí, a 8 px por bordes y centros',
            'Zoom del 15 % al 300 %, sólo con Ctrl o Cmd más rueda, para no perder el desplazamiento normal',
            'Suprimir o Retroceso borra el bloque seleccionado y Escape lo deselecciona',
            'Panel de propiedades por bloque, con campos de texto, área de texto, listas, opciones, interruptores y selector de icono',
            'Un botón puede apuntar a otra vista del mismo proyecto',
            'El marco se redimensiona sólo en alto y nunca por debajo de los 900 px del diseño base de 1600 por 900, con opción de scroll interno',
            'Varias vistas por proyecto: crear, renombrar, reordenar, borrar y marcar cuál es la principal',
            'Guardado automático 600 ms después del último cambio',
            'Vista previa dentro del armazón real, con el menú y la cabecera de siempre',
            'Publicar escribe archivos .tsx de verdad: una página por vista, con cada bloque en su posición absoluta',
          ],
        },
        {
          area: 'Usuarios, roles y catálogos',
          items: [
            'Tabla de usuarios con avatar, usuario SAP, correo, estado y última actividad',
            'La presencia no se guarda: se calcula comparando la marca de última actividad contra el momento actual',
            'Panel lateral de 340 px con el detalle del usuario; al abrirse, la tabla suelta dos columnas y reparte el ancho entre las que quedan',
            'Asignación de roles a un usuario reemplazando la lista completa de una vez',
            'Lista de roles y ficha de detalle con la matriz de permisos por submódulo',
            'Marcado en bloque: todas las acciones de un módulo entero o de todo el árbol de una vez',
            'Rol super: acceso total sin marcar ninguna casilla, y en su ficha la matriz se reemplaza por un aviso',
            'Cargos asociados al rol desde el catálogo de servicios, con buscador',
            'El nombre del rol es único sólo entre los vivos, así que se puede reutilizar el de uno borrado',
          ],
        },
        {
          area: 'Bitácora de la aplicación',
          items: [
            'Una sola tabla recoge lo del navegador y lo del servidor, con nivel, categoría, origen y usuario',
            'El frontend acumula en memoria y envía en lotes de 25 eventos o cada 4 segundos',
            'Captura automática de errores no atrapados, promesas rechazadas sin manejar y llamadas a console.error y console.warn',
            'Cada petición HTTP del navegador queda registrada con método, dirección, estado y milisegundos',
            'El tráfico de fondo queda fuera a propósito: latido, eventos en vivo, refresco, identidad y catálogo de iconos, que llenarían la tabla sin aportar nada',
            'Identificador de sesión por carga de la aplicación, para poder seguir el rastro de un usuario concreto',
            'El servidor inyecta un identificador de petición y registra cada llamada que entra',
            'Las excepciones no controladas se guardan con su traza desde el manejador de errores',
            'Pantalla con tarjetas de resumen, filtros por nivel, origen y categoría, y refresco automático conmutable',
            'Panel lateral con el detalle completo de un evento, traza incluida',
            'Cinco niveles: error, advertencia, información, depuración y auditoría',
          ],
        },
        {
          area: 'Iconos y componentes',
          items: [
            'Los iconos no están en el código: se leen de la base de datos y se sirven por un endpoint sin autenticar, porque el login los necesita antes de entrar',
            'Galería del catálogo con buscador por nombre',
            'Subir un SVG nuevo, renombrarlo y borrarlo desde la propia galería',
            'Nombre técnico y nombre visible por separado, para poder traducir sin romper las referencias del código',
            'Los iconos se deduplican por el SHA-256 de su SVG, así subir el mismo dibujo dos veces no crea dos filas',
            'El servidor recorre los .ts, .tsx, .js y .jsx del frontend y cuenta en cuántos archivos se usa cada icono, con caché de 5 segundos',
            'Borrar un icono en uso responde con el número de submódulos que lo referencian en vez de borrarlo',
            'Catálogo de los 37 componentes compartidos, con buscador y el ejemplo en vivo de cada uno',
            'Doce tipos de gráfica: barras, barras múltiples, líneas, combinada, donut, radar, polar, dispersión, burbujas, aguja, Gantt y minigráfica',
            'Las gráficas leen las variables CSS del tema, así que siguen el acento elegido y el modo oscuro',
          ],
        },
        {
          area: 'Apariencia y preferencias',
          items: [
            'Color de acento libre: de un solo hexadecimal se generan las diez tonalidades de la escala',
            'Conmutador de modo claro y oscuro',
            'Veinticinco tipografías predefinidas, entre sin serifa, serifa y monoespaciadas',
            'Cargar una fuente propia en .ttf, .otf, .woff o .woff2 y añadirla a la lista de esa sesión',
            'Cinco tamaños de letra, de 0,88 a 1,16, que escalan sólo el texto y nunca las alturas ni los márgenes',
            'Las preferencias viven en la base de datos, así que viajan con el usuario a cualquier equipo',
            'Cada cambio se guarda solo, 600 ms después del último ajuste',
            'Al cerrar sesión, el tema vuelve a los valores por defecto para que el login no herede los colores del usuario anterior',
            'Los mensajes del panel del login se editan desde la propia aplicación: título, texto y uno de seis fondos de círculos, hasta doce mensajes',
            'Si la tabla de mensajes todavía no existe, el login se pinta con los textos por defecto en vez de romperse',
          ],
        },
        {
          area: 'Integraciones con Google',
          items: [
            'Conexión única de la cuenta de Google desde cualquiera de los siete probadores, con el consentimiento en ventana emergente',
            'El token de refresco de Google se guarda cifrado con AES-256-GCM',
            'Si faltan las credenciales de OAuth, la pantalla lo dice y no ofrece conectar nada',
            'Hojas de cálculo: crear, renombrar y borrar documentos; añadir, renombrar, duplicar y borrar pestañas',
            'Hojas de cálculo: leer, escribir, añadir y limpiar rangos, con pegado directo de datos separados por tabulaciones',
            'Drive: listar archivos, crear carpetas, renombrar, mover, enviar a la papelera, restaurar y borrar',
            'Calendario: listar calendarios y crear, ver, editar y borrar eventos',
            'Gmail: listar etiquetas y mensajes, ver uno, enviar, marcar como leído y enviar a la papelera',
            'Documentos: crear, listar, ver, renombrar, reemplazar el contenido, añadir texto al final y borrar',
            'Tareas: gestionar listas y las tareas dentro de cada lista, con alta, edición y borrado',
            'Meet: crear una sala, consultarla, terminar la conferencia activa y listar los registros de conferencias',
          ],
        },
        {
          area: 'Corredor de tests',
          items: [
            'Ejecuta la suite de Jest del backend desde el navegador, sin abrir una terminal',
            'Dos columnas con carpetas plegables por módulo: los tests disponibles y los elegidos, y se arrastra de una a la otra',
            'Se puede arrastrar una carpeta entera y se mueven todos sus tests de golpe',
            'El listado de archivos se arma recorriendo el disco, sin arrancar Jest',
            'Barra de progreso mientras corre, con la columna izquierda atenuada',
            'Resumen con totales, tabla por suite y los mensajes de los fallos',
            'Corte a los 120 segundos: si Jest se pasa, se mata el proceso',
          ],
        },
      ],
      carpetas: [
        {
          carpeta: 'raíz',
          que_es: 'Dos aplicaciones independientes en el mismo repositorio. Arriba sólo viven las instrucciones y lo que se ignora.',
          hijos: [
            {
              carpeta: '.gitignore',
              que_es: 'excluye dependencias, compilados y los archivos de entorno',
            },
          ],
        },
        {
          carpeta: 'GestionProyectos-Backend/',
          que_es: 'API REST en Express 4 con TypeScript sobre SQL Server, con la misma estructura hexagonal en cada módulo.',
          hijos: [
            {
              carpeta: 'src/modules',
              que_es: 'doce módulos de la aplicación, el de referencia module-x y ocho carpetas de ensayo del generador; cada uno con domain, ports, use-cases, dtos, validators y adapters',
            },
            {
              carpeta: 'src/external-apis/google',
              que_es: 'las siete APIs de Google y el conector compartido de OAuth, aparte de los módulos del negocio',
            },
            {
              carpeta: 'src/database',
              que_es: 'treinta y siete migraciones, diez seeds y los scripts de prueba de conexión y limpieza de la base',
            },
            {
              carpeta: 'src/shared',
              que_es: 'middlewares, errores, el emisor de eventos en vivo, el cifrado y la paginación',
            },
            {
              carpeta: 'Dockerfile',
              que_es: 'compilación en dos etapas; el arranque corre las migraciones pendientes antes del servidor',
            },
          ],
        },
        {
          carpeta: 'GestionProyectos-Frontend/',
          que_es: 'SPA de React 18 con Vite y Tailwind, servida por nginx en producción.',
          hijos: [
            {
              carpeta: 'src/modules',
              que_es: 'treinta y dos carpetas, una por módulo, con la misma división hexagonal más ui/pages, ui/components y ui/hooks',
            },
            {
              carpeta: 'src/shared/components',
              que_es: 'los treinta y siete componentes compartidos, incluidos los doce tipos de gráfica',
            },
            {
              carpeta: 'src/shared',
              que_es: 'tema, iconos, caché en IndexedDB, cliente de eventos y buscador global',
            },
            {
              carpeta: 'src/config',
              que_es: 'el registro que traduce la clave de carpeta a componente y las variables de entorno',
            },
            {
              carpeta: 'vite.config.ts',
              que_es: 'proxy hacia la API y el plugin que expone las carpetas reales de src/modules',
            },
          ],
        },
      ],
      arquitectura: {
        resumen: 'Dos aplicaciones separadas en el mismo repositorio: un SPA de React 18 compilado con Vite y servido por nginx, y una API REST de Express 4 con TypeScript sobre SQL Server, cada una en su propio contenedor. Las dos siguen el mismo esquema hexagonal: cada módulo tiene domain, ports, use-cases y adapters divididos en entrada (rutas y controladores) y salida (repositorios), de modo que un caso de uso no conoce ni a Express ni a Knex. La API monta veintidós routers bajo /api: catorce de la aplicación y ocho de las integraciones con Google, separadas en external-apis porque no son módulos del negocio. El frontend no declara sus rutas en el código: las arma en tiempo de ejecución con el árbol de navegación que devuelve la API y resuelve cada componente por su clave de carpeta. Lo que afecta a todos —el árbol del menú, los roles, la presencia de los usuarios— viaja por una única conexión de eventos del servidor multiplexada por canales. El backend además escribe código: clona el módulo de referencia para crear submódulos y convierte las vistas del editor visual en archivos .tsx. En producción el frontend hornea la URL de la API en el bundle y el backend arranca corriendo las migraciones pendientes; cada push a la rama principal dispara un webhook que reconstruye los dos contenedores.',
        capas: [
          {
            nombre: 'Cliente',
            piezas: [
              {
                nombre: 'SPA React',
                tecnologia: 'React 18 · Vite 5 · TypeScript · Tailwind 3',
                que_hace: 'Rutas generadas a partir del árbol del menú y recortadas por permisos. El tema se aplica reescribiendo variables CSS en el elemento raíz.',
              },
              {
                nombre: 'Caché local',
                tecnologia: 'IndexedDB con espejo en memoria',
                que_hace: 'Guarda el usuario y el árbol del menú para pintar el panel sin esperar a la red, y revalida contra el servidor en segundo plano.',
              },
              {
                nombre: 'Canal en vivo',
                tecnologia: 'EventSource',
                que_hace: 'Una sola conexión para toda la aplicación, con los canales multiplexados y reconexión a cargo del navegador.',
              },
            ],
          },
          {
            nombre: 'Servidor',
            piezas: [
              {
                nombre: 'API REST',
                tecnologia: 'Express 4 · TypeScript · Knex 3 · Joi',
                que_hace: '102 rutas repartidas en veintidós routers. Validación por esquema en la entrada y errores tipados en la salida.',
              },
              {
                nombre: 'Generador de submódulos',
                tecnologia: 'Node fs · git',
                que_hace: 'Clona el módulo de referencia en las dos aplicaciones, escribe migración y seed, y en producción hace commit y push para que el despliegue lo recoja.',
              },
              {
                nombre: 'Publicador del diseño',
                tecnologia: 'serializadores de bloques',
                que_hace: 'Convierte el JSON de cada vista en un archivo .tsx con imports y JSX reales, y reescribe la página de entrada del submódulo.',
              },
              {
                nombre: 'Bitácora y eventos',
                tecnologia: 'middleware HTTP · SSE',
                que_hace: 'Registra cada petición y cada excepción en una única tabla, y emite los cambios a los navegadores conectados.',
              },
            ],
          },
          {
            nombre: 'Datos y servicios',
            piezas: [
              {
                nombre: 'SQL Server',
                tecnologia: 'tedious · Knex · 37 migraciones',
                que_hace: 'Veintidós tablas con borrado lógico, índices filtrados por registros vivos y comprobación ISJSON en las columnas de preferencias.',
              },
              {
                nombre: 'APIs de Google',
                tecnologia: 'OAuth 2.0 · googleapis',
                que_hace: 'Sheets, Drive, Calendar, Gmail, Docs, Tasks y Meet con un solo consentimiento y el token de refresco cifrado por usuario.',
              },
            ],
          },
        ],
      },
      decisiones: [
        {
          titulo: 'El menú de la aplicación no está en el código, está en la base de datos',
          texto: 'Las tablas de módulos y submódulos son la fuente de verdad del menú y de las rutas. El frontend pide el árbol, lo aplana a una lista de rutas y resuelve cada componente por la clave de carpeta, con un registro fijo para las pantallas administrativas y un descubrimiento automático que indexa cualquier archivo <Modulo>ListPage.tsx. La ventaja es que un módulo nuevo aparece sin tocar el enrutador. El precio es que la aplicación no puede pintar nada hasta tener el árbol, y que una pantalla que exista en disco sin fila en la base es inalcanzable.',
        },
        {
          titulo: 'Los submódulos se generan clonando module-x, no desde plantillas de texto',
          texto: 'El generador no guarda plantillas con marcadores: copia recursivamente el módulo de referencia real, en el backend y en el frontend, y renombra cinco variantes del token respetando mayúsculas. Así el clon siempre hereda la arquitectura vigente, porque cualquier mejora en el módulo de referencia se propaga sola. La contrapartida es que module-x pasa a ser intocable: un descuido ahí se replica en cada submódulo que se cree después.',
        },
        {
          titulo: 'Generar un módulo en producción hace commit y push, no escribe archivos efímeros',
          texto: 'En desarrollo el generador escribe sobre el repositorio en disco. En producción clona el repositorio dentro del contenedor, genera ahí, y hace commit y push a la rama principal; el webhook de despliegue reconstruye la aplicación con el módulo ya compilado. Nada queda fuera del control de versiones y el contenedor puede morir sin perder trabajo. El costo es que el panel necesita credenciales de escritura sobre el repositorio y que el módulo no existe hasta que termina el despliegue.',
        },
        {
          titulo: 'El contenedor corre las migraciones al arrancar, y si fallan arranca igual',
          texto: 'El punto de entrada ejecuta las migraciones pendientes y, si el comando falla, imprime un aviso y sigue hasta levantar el servidor. Es lo que hace que la tabla de un módulo recién generado se cree sola tras el despliegue. La consecuencia asumida es que el servidor puede quedar en pie contra un esquema desactualizado en vez de negarse a arrancar.',
        },
        {
          titulo: 'El token de acceso vive sólo en memoria y no hay nada de la sesión en el navegador',
          texto: 'El acceso dura 15 minutos y se guarda en una referencia de React, nunca en almacenamiento local ni en una cookie legible; el refresco dura 30 días en una cookie httpOnly que pone el servidor. Un script inyectado no tiene de dónde robar el token. El precio es que cada recarga pierde el acceso y hay que ir a buscar uno nuevo antes de la primera petición, y por eso el arranque de la aplicación se tapa con un esqueleto.',
        },
        {
          titulo: 'El refresco no rota en cada uso',
          texto: 'La rotación era vulnerable a carreras: con varias recargas seguidas, una petición podía enviar la cookie anterior porque la nueva todavía no se había guardado, el servidor la veía ya rotada y expulsaba al usuario al login. Sin rotación, la cookie sigue siendo válida durante toda la vida de la sesión y las recargas son idempotentes. Se paga con una ventana de abuso de 30 días si la cookie se filtra, mitigada porque la sesión también se valida contra la tabla de sesiones y se puede revocar ahí.',
        },
        {
          titulo: 'El cliente HTTP pide el token antes de la primera petición, no después del primer 401',
          texto: 'Hay dos caminos: uno proactivo, que refresca cuando no hay token en memoria y el destino requiere autenticación, y uno reactivo, que reintenta una vez si aun así llega un 401. El proactivo existe porque los componentes hidratados desde el caché disparan sus peticiones antes de que termine el arranque de la sesión, y la consola se llenaba de 401 en cada recarga. Ambos comparten el mismo manejador, que deduplica internamente: diez peticiones simultáneas provocan un solo refresco. La contrapartida es que toda petición autenticada espera a ese refresco, así que si el refresco se demora se demora la pantalla entera.',
        },
        {
          titulo: 'Los ganchos del cliente HTTP se registran durante el render, no en un efecto',
          texto: 'React ejecuta los efectos de los hijos antes que los del padre. Con el registro dentro de un efecto, el proveedor de navegación y las páginas ya habían lanzado sus peticiones sin manejador de sesión, así que el refresco proactivo no podía actuar y todo terminaba en 401. Se resolvió llamando a los setters en el cuerpo del render. Es un efecto lateral durante el render, algo que React desaconseja, y sólo se sostiene porque los setters se limitan a guardar una referencia y las funciones que reciben son estables.',
        },
        {
          titulo: 'Los eventos en vivo se autentican con la cookie del refresco, no con Bearer',
          texto: 'EventSource no admite cabeceras propias, así que no hay forma de mandar un token de acceso. Se aprovecha que sí envía cookies y se valida la del refresco contra la tabla de sesiones, igual que en el endpoint de refresco pero sin rotar nada. La trampa que dejó es que la lista de canales por defecto está escrita a mano en el servidor —navigation, users y roles—: un canal nuevo que no se agregue ahí nunca llega a los clientes, y ese fue exactamente el fallo del tiempo real en la tabla de usuarios.',
        },
        {
          titulo: 'El tema del usuario se guarda en la base de datos, no en el navegador',
          texto: 'Modo, acento, tipografía y tamaño de letra viajan con la cuenta y vienen en el mismo cuerpo de la respuesta de login y del endpoint de identidad, para que el panel se pinte ya con el tema correcto. Lo único que queda del lado del navegador es una cookie con el modo, que un script en línea del index.html lee antes del primer pintado para evitar el destello blanco. El precio es que el primer render de un visitante siempre usa los valores por defecto hasta que resuelve la sesión.',
        },
        {
          titulo: 'El acento no cambia entre claro y oscuro; lo que se recalcula es la escala',
          texto: 'El tono base de la marca queda idéntico en los dos modos para que los botones no salten al alternar el tema. Lo que sí cambia es cómo se derivan las otras nueve tonalidades: en claro se mezclan canales con blanco y negro, y en oscuro se fijan luminosidades en HSL. La razón está escrita en el propio código: con una marca oscura como esta, mezclar canales con negro deja las tonalidades bajas pegadas entre sí y las gráficas dejan de distinguir segmentos. El costo es mantener dos generadores distintos, así que un ajuste en la escala clara no se refleja en la oscura.',
        },
        {
          titulo: 'El tamaño de letra escala el texto y nunca las cajas',
          texto: 'Hay un multiplicador global que sólo entra en las declaraciones de tamaño de fuente; alturas, rellenos y separaciones siguen en unidades fijas, así que ningún contenedor se mueve al cambiar de tamaño. Para que los tamaños escritos a mano en píxeles también obedezcan hay un plugin de Tailwind y, además, una lista de reglas duplicadas en el CSS plano, escrita ahí porque tocar la configuración de Tailwind obliga a reiniciar el servidor de desarrollo. Esa lista enumera un tamaño por regla, del 9 px al 32 px, así que un valor nuevo fuera de la lista se queda fijo hasta que alguien lo agregue.',
        },
        {
          titulo: 'Los iconos viven en la base de datos y se sirven sin autenticar',
          texto: 'El catálogo de SVG es una tabla, no un archivo de componentes, y el endpoint que lo devuelve es público porque la pantalla de login necesita iconos antes de que exista una sesión. Eso permite subir, renombrar y reemplazar iconos desde el propio panel, y que el menú use el icono elegido en la base. A cambio, si la petición falla los iconos aparecen vacíos, y hace falta un rastreador que recorra el código del frontend para saber cuáles se están usando de verdad antes de borrar ninguno.',
        },
        {
          titulo: 'La bitácora del navegador va en lotes y sobrevive al cierre de la pestaña',
          texto: 'Los eventos se acumulan en memoria y salen en lotes de veinticinco o cada cuatro segundos; al descargarse la página, el pendiente se manda con sendBeacon. Si el envío falla, los eventos vuelven a la cola, y cuando la cola llega a su tope se descartan primero los que no son errores. El servidor no confía en nada de eso: descarta entradas con nivel, categoría u origen inválidos, corta el lote en 500 entradas y recorta a 32 KB el contexto y el payload para que un solo volcado no llene la tabla.',
        },
        {
          titulo: 'La presencia de los usuarios no se guarda, se deriva',
          texto: 'No hay columna de conectado ni de ausente: sólo una marca de última actividad que el navegador refresca con un latido, limitado a uno por minuto. El intervalo de seguridad que corre cada treinta segundos sólo dispara si hubo interacción nueva desde el último latido; sin esa condición, la columna se mantenía fresca aunque el usuario llevara horas quieto, que era justo el fallo que se quería arreglar. La contrapartida es que cerrar la pestaña no avisa nada: el estado sólo envejece con el reloj, así que un usuario recién ido sigue apareciendo activo hasta que pasa el umbral.',
        },
        {
          titulo: 'El caché del cliente es IndexedDB, no almacenamiento local',
          texto: 'Se guardan el usuario y el árbol del menú, nunca tokens, y se eligió IndexedDB por tres razones escritas en el código: es asíncrono y no bloquea el hilo principal, admite cientos de megabytes en vez de cinco, y guarda objetos estructurados sin serializar a mano. Encima hay un espejo en memoria para que las lecturas repetidas no toquen la base, y un caché de consultas con estrategia de servir lo viejo y revalidar detrás. El único dato que se quedó en almacenamiento local es si el menú lateral está plegado, porque hace falta leerlo de forma síncrona antes del primer pintado.',
        },
        {
          titulo: 'Publicar un diseño escribe archivos .tsx, no un intérprete de JSON en tiempo de ejecución',
          texto: 'El editor guarda cada vista como JSON, pero al publicar el servidor la convierte en un componente React con sus imports y su JSX, un archivo por vista. La pantalla publicada no depende de las tablas del diseño ni de un motor de renderizado: es código como el que se habría escrito a mano, y por eso lleva una nota de que se sobrescribe al republicar. El precio es que publicar sólo funciona en desarrollo y que cualquier retoque manual en esos archivos se pierde.',
        },
        {
          titulo: 'La página publicada escala en alto pero no usa transform',
          texto: 'Lo natural sería aplicar un factor de escala al contenedor entero, pero eso rompe los desplegables de los selectores, los portales y los estados de hover. La solución fue dejar los anchos en porcentaje respecto al ancho de diseño y multiplicar sólo las alturas y las coordenadas verticales por un factor que se mide con un observador de tamaño, y que nunca agranda: sólo achica cuando la ventana es más baja que el diseño. La contrapartida es que las proporciones no se respetan: en una ventana ancha los bloques se estiran a lo largo mientras el alto se queda igual.',
        },
        {
          titulo: 'El generador de módulos y el corredor de tests son endpoints del backend',
          texto: 'El navegador no puede escribir en disco ni ejecutar Jest, así que ambas cosas se resolvieron como rutas de la API que el panel llama. El corredor lanza Jest en un proceso hijo pidiendo salida JSON, lista los archivos recorriendo el sistema de archivos para no arrancar el runner sólo para enumerar, y mata el proceso a los 120 segundos. Son herramientas de desarrollo dentro de la misma aplicación, y ahí está el riesgo: el corredor responde 403 en producción sin excepción, pero el generador se puede habilitar con una variable de entorno, así que la puerta queda entreabierta a propósito.',
        },
        {
          titulo: 'El proxy de desarrollo usa una expresión regular con la barra obligatoria',
          texto: 'El patrón del proxy es ^/api/ y no /api. Con el prefijo simple, Vite también capturaba rutas como /apis/hoja-de-calculo, que son pantallas del propio panel, y recargar en una de ellas reventaba. Es un detalle de una línea que sólo se descubre cuando una ruta concreta deja de funcionar sin motivo aparente.',
        },
        {
          titulo: 'Las carpetas de módulos se exponen con un plugin virtual de Vite',
          texto: 'El constructor del menú necesita ver las carpetas que existen dentro de src/modules, incluidas las vacías, y la utilidad estándar de Vite para indexar archivos no las detecta porque no tienen nada dentro. Se resolvió con un plugin que lee el directorio y expone la lista como módulo virtual, invalidándola cuando se crea o se borra una carpeta para que el recambio en caliente la recoja. Es acoplamiento al empaquetador a cambio de que la paleta refleje el disco de verdad.',
        },
        {
          titulo: 'La imagen del backend usa Node completo en vez de la variante recortada',
          texto: 'La etapa de compilación sí usa la imagen ligera, pero la de ejecución usa la completa porque ya trae git, y el generador de módulos lo necesita en producción para clonar, confirmar y publicar. La alternativa era instalar git con el gestor de paquetes durante la construcción, y eso reventaba la máquina virtual de desarrollo. Se cambia tamaño de imagen por una construcción que termina.',
        },
      ],
    },
  },
]

// -- EXPERIENCIA ---------------------------------------------
export const EXPERIENCIA = [
  {
    periodo: 'Noviembre 2025 - Mayo 2026',
    cargo: 'Desarrollador Full Stack',
    empresa: 'Hospital San Vicente Fundación',
    descripcion:
      'Continué desarrollando Cargue de Insumos de Cirugía y PROA, con Oncología como foco principal y con mayor profundidad que antes. Seguí trabajando con PHP, JavaScript, Python, SQL y MySQL, y sumé React, Node, SQL Server y Firebase. A eso se añadieron mejoras de arquitectura sobre los desarrollos que ya estaban en producción y una herramienta de gestión de proyectos muy por encima de la que se venía usando. Le di además un lugar mucho más importante a la seguridad dentro de los desarrollos, y trabajé en integraciones con SAP.',
  },
  {
    periodo: 'Marzo - Septiembre 2025',
    cargo: 'Desarrollador Full Stack (practicante)',
    empresa: 'Hospital San Vicente Fundación',
    descripcion:
      'Desarrollo a la medida de las necesidades del personal y los procesos del hospital. Con PHP, JavaScript, Python, SQL y MySQL, además de bastante uso de la suite de Google y Cloud Console, construí Cargue de Insumos de Cirugía, enfocado en el manejo GS1 de los insumos para optimizar el proceso, junto a Programación de Cirugías, Recepción Técnico-Administrativa de todo el ingreso de medicamentos e insumos, PROA y PIM3. Participé también en Oncología y en soluciones más pequeñas dentro del sistema general del hospital.',
  },
]

// -- TECNOLOGIAS ---------------------------------------------
// TODAS reales: salen de los package.json de los proyectos, del trabajo en
// el hospital y del CV. Sin inventar nada. No hay tope por categoria: si
// agregas una linea, la rejilla y el scroll se reacomodan solos.
export const TECNOLOGIAS = [
  {
    categoria: 'Frontend',
    items: [
      { sigla: 'Re', nombre: 'React', desc: 'Mi base para interfaces web y de escritorio.' },
      { sigla: 'An', nombre: 'Angular', desc: 'La estructura que uso en mis proyectos mas grandes.' },
      { sigla: 'Vu', nombre: 'Vue 3', desc: 'Reactivo y ligero para proyectos mas sueltos.' },
      { sigla: 'Sv', nombre: 'Svelte', desc: 'SvelteKit cuando quiero el minimo de JavaScript.' },
      { sigla: 'Nx', nombre: 'Next.js', desc: 'Renderizado en servidor y rutas listas.' },
      { sigla: 'TS', nombre: 'TypeScript', desc: 'Tipado en todo: front, back y scripts.' },
      { sigla: 'JS', nombre: 'JavaScript', desc: 'El lenguaje con el que empece y no he soltado.' },
      { sigla: 'Tw', nombre: 'Tailwind', desc: 'Estilos consistentes sin salirme del diseno.' },
      { sigla: 'Vi', nombre: 'Vite', desc: 'Arranque y compilado casi instantaneos.' },
      { sigla: 'Ht', nombre: 'HTML', desc: 'Estructura semantica y accesible.' },
      { sigla: 'Cs', nombre: 'CSS', desc: 'Layouts, animaciones y diseno responsivo.' },
      { sigla: 'Rr', nombre: 'React Router', desc: 'Navegacion y rutas del lado del cliente.' },
      { sigla: 'Sa', nombre: 'Sass', desc: 'Estilos con variables, mixins y anidamiento.' },
      { sigla: 'As', nombre: 'Astro', desc: 'Sitios rapidos que envian casi cero JavaScript.' },
      { sigla: 'Zu', nombre: 'Zustand', desc: 'Estado global sin la ceremonia de Redux.' },
      { sigla: 'Sb', nombre: 'Storybook', desc: 'Componentes documentados y probados aparte.' },
    ],
  },
  {
    categoria: 'Backend',
    items: [
      { sigla: 'No', nombre: 'Node.js', desc: 'El motor detras de casi todas mis APIs.' },
      { sigla: 'Ex', nombre: 'Express 4', desc: 'Servicios HTTP directos y sin ceremonia.' },
      { sigla: 'Fa', nombre: 'Fastify', desc: 'Cuando el rendimiento del API importa.' },
      { sigla: 'Ph', nombre: 'PHP', desc: 'Con el construi buena parte del hospital.' },
      { sigla: 'La', nombre: 'Laravel', desc: 'PHP con estructura y buenas practicas.' },
      { sigla: 'Py', nombre: 'Python', desc: 'Automatizacion, datos e integraciones.' },
      { sigla: 'Jv', nombre: 'Java', desc: 'Programacion orientada a objetos y servicios.' },
      { sigla: 'C#', nombre: 'C#', desc: 'Aplicaciones de escritorio y logica de negocio.' },
      { sigla: 'Ga', nombre: 'Apps Script', desc: 'Automatizo procesos sobre la suite de Google.' },
      { sigla: 'Jw', nombre: 'JWT', desc: 'Sesiones y rutas protegidas con token.' },
      { sigla: 'Bc', nombre: 'Bcrypt', desc: 'Contrasenas cifradas, nunca en texto plano.' },
      { sigla: 'Ap', nombre: 'API REST', desc: 'Endpoints claros y consistentes entre servicios.' },
      { sigla: 'Ne', nombre: 'NestJS', desc: 'Node con arquitectura modular y escalable.' },
      { sigla: 'Gq', nombre: 'GraphQL', desc: 'El cliente pide exactamente los datos que necesita.' },
      { sigla: 'So', nombre: 'Socket.io', desc: 'Tiempo real: chat, notificaciones y sincronia.' },
      { sigla: 'Sp', nombre: 'Spring Boot', desc: 'Java para servicios empresariales.' },
    ],
  },
  {
    categoria: 'Bases de datos',
    items: [
      { sigla: 'SS', nombre: 'SQL Server', desc: 'La que mas uso en entornos corporativos.' },
      { sigla: 'My', nombre: 'MySQL', desc: 'Relacional de siempre, rapida de montar.' },
      { sigla: 'Pg', nombre: 'PostgreSQL', desc: 'Cuando necesito potencia y consultas serias.' },
      { sigla: 'Mo', nombre: 'MongoDB', desc: 'Documentos flexibles para datos que cambian.' },
      { sigla: 'Sq', nombre: 'SQLite', desc: 'Base embebida para apps de escritorio.' },
      { sigla: 'Pr', nombre: 'Prisma', desc: 'ORM tipado que evita errores en consultas.' },
      { sigla: 'Mg', nombre: 'Mongoose', desc: 'Esquemas y validacion sobre MongoDB.' },
      { sigla: 'Fb', nombre: 'Firebase', desc: 'Tiempo real y autenticacion sin montar servidor.' },
      { sigla: 'Sl', nombre: 'SQL', desc: 'Consultas, joins y procedimientos almacenados.' },
      { sigla: 'Rd', nombre: 'Redis', desc: 'Cache en memoria para respuestas instantaneas.' },
      { sigla: 'Su', nombre: 'Supabase', desc: 'Postgres con auth y almacenamiento listos.' },
      { sigla: 'To', nombre: 'TypeORM', desc: 'Entidades y migraciones tipadas en TypeScript.' },
    ],
  },
  {
    categoria: 'Herramientas',
    items: [
      { sigla: 'Gi', nombre: 'Git', desc: 'Control de versiones en todo lo que hago.' },
      { sigla: 'Gh', nombre: 'GitHub', desc: 'Donde vive y se revisa mi codigo.' },
      { sigla: 'Dk', nombre: 'Docker', desc: 'Con el despliego el servidor de Acmsy.' },
      { sigla: 'El', nombre: 'Electron', desc: 'Llevo mis apps web al escritorio.' },
      { sigla: 'Vt', nombre: 'Vitest', desc: 'Pruebas para no romper lo que ya funciona.' },
      { sigla: 'Zo', nombre: 'Zod', desc: 'Valido los datos antes de que entren al sistema.' },
      { sigla: 'Gs', nombre: 'GSAP', desc: 'Animaciones con control cuadro a cuadro.' },
      { sigla: 'Th', nombre: 'Three.js', desc: 'Grafica 3D y shaders en el navegador.' },
      { sigla: 'Fi', nombre: 'Figma', desc: 'De donde salen mis disenos antes del codigo.' },
      { sigla: 'Gc', nombre: 'Cloud Console', desc: 'Servicios y permisos de Google Cloud.' },
      { sigla: 'Lk', nombre: 'Looker Studio', desc: 'Tableros y analitica para decisiones.' },
      { sigla: 'Of', nombre: 'Office', desc: 'Excel avanzado y hojas de calculo.' },
      { sigla: 'Lx', nombre: 'Linux', desc: 'Terminal y servidores donde corre todo.' },
      { sigla: 'Ci', nombre: 'GitHub Actions', desc: 'Pruebas y despliegues automaticos en cada push.' },
      { sigla: 'Po', nombre: 'Postman', desc: 'Pruebo y documento cada endpoint antes de usarlo.' },
      { sigla: 'Ve', nombre: 'Vercel', desc: 'Despliegue del front en minutos.' },
    ],
  },
]

// -- FORMACION -----------------------------------------------
export const CARRERA = [
  { periodo: '2026 - Actualidad', titulo: 'Ingeniería en Sistemas', institucion: 'Institución Universitaria ITM' },
  { periodo: '2023 - 2026', titulo: 'Tecnología en Desarrollo de Software', institucion: 'Institución Universitaria ITM' },
]

// OJO: esta lista es una RUTA PENDIENTE, no cursos ya hechos. Anderson pidio
// dejar 20 cursos de Platzi acordes a su perfil para irlos completando.
// Antes de publicar el sitio: borra los que no hayas hecho y ajusta la fecha
// real de los que si, o estaras diciendo algo que no es.
// `certificado`: link al certificado (se abre en otra pestana al hacer click).
export const CURSOS = [
  { nombre: 'Curso de Arquitectura de Software', institucion: 'Platzi', fecha: '2026', certificado: '#' },
  { nombre: 'Curso de Patrones de Diseno de Software', institucion: 'Platzi', fecha: '2026', certificado: '#' },
  { nombre: 'Curso de Clean Code y Buenas Practicas', institucion: 'Platzi', fecha: '2026', certificado: '#' },
  { nombre: 'Curso de React.js', institucion: 'Platzi', fecha: '2026', certificado: '#' },
  { nombre: 'Curso de Next.js', institucion: 'Platzi', fecha: '2026', certificado: '#' },
  { nombre: 'Curso de TypeScript', institucion: 'Platzi', fecha: '2026', certificado: '#' },
  { nombre: 'Curso de Backend con Node.js', institucion: 'Platzi', fecha: '2026', certificado: '#' },
  { nombre: 'Curso de API REST con Node.js', institucion: 'Platzi', fecha: '2026', certificado: '#' },
  { nombre: 'Curso de Testing con JavaScript', institucion: 'Platzi', fecha: '2026', certificado: '#' },
  { nombre: 'Curso de Seguridad en Aplicaciones Web', institucion: 'Platzi', fecha: '2026', certificado: '#' },
  { nombre: 'Curso de PostgreSQL', institucion: 'Platzi', fecha: '2025', certificado: '#' },
  { nombre: 'Curso de SQL Server', institucion: 'Platzi', fecha: '2025', certificado: '#' },
  { nombre: 'Curso de MongoDB', institucion: 'Platzi', fecha: '2025', certificado: '#' },
  { nombre: 'Curso de Docker', institucion: 'Platzi', fecha: '2025', certificado: '#' },
  { nombre: 'Curso de Git y GitHub', institucion: 'Platzi', fecha: '2025', certificado: '#' },
  { nombre: 'Curso de Python', institucion: 'Platzi', fecha: '2025', certificado: '#' },
  { nombre: 'Curso de Tailwind CSS', institucion: 'Platzi', fecha: '2025', certificado: '#' },
  { nombre: 'Curso de Angular', institucion: 'Platzi', fecha: '2025', certificado: '#' },
  { nombre: 'Curso de Inteligencia Artificial para Desarrolladores', institucion: 'Platzi', fecha: '2025', certificado: '#' },
  { nombre: 'Curso de Scrum y Metodologias Agiles', institucion: 'Platzi', fecha: '2025', certificado: '#' },
]

// -- HABILIDADES BLANDAS -------------------------------------
// Se muestran 6 (en PC: 2 filas x 3 columnas). Editá el texto de cada una.
export const HABILIDADES = [
  { titulo: 'Trabajo en equipo', desc: 'Construyo conversando con quien va a usar lo que hago. Las mejores soluciones que entregué nacieron de escuchar al usuario, nunca de suponer lo que necesitaba.' },
  { titulo: 'Iniciativa', desc: 'No espero a que me asignen la tarea. Cuando veo un proceso que se puede automatizar o un desarrollo que puede quedar mejor, lo propongo y me pongo a construirlo.' },
  { titulo: 'Responsabilidad', desc: 'Lo que me comprometo a entregar, lo entrego a tiempo. Trabajando en un hospital aprendí que cuando el software sostiene procesos críticos, eso no se negocia.' },
  { titulo: 'Aprendizaje rápido', desc: 'Cambio de lenguaje o de stack sin perder el ritmo. Lo viví al pasar de PHP y Apps Script a React, Node y SQL Server en cuestión de semanas.' },
  { titulo: 'Adaptación', desc: 'Me acomodo al contexto y no al revés. Cada área tiene su propia forma de trabajar, y mi tarea es lograr que la solución encaje ahí de manera natural.' },
  { titulo: 'Pensamiento creativo', desc: 'Vengo del dibujo y la escultura, y eso se refleja cuando programo: no me quedo con la primera opción que funciona, busco la que además queda bien resuelta.' },
]

// -- REDES (iconos de "Encuentrame en" de Sobre mi) ----------
// El icono se elige por el `label`: Telefono, Email, LinkedIn, GitHub,
// Indeed, Instagram o YouTube. Solo se pintan las que tengan `url` real,
// asi que para quitar una basta con borrar la linea.
// Instagram y YouTube estan fuera: demasiado personales para este sitio.
//
// FALTAN LOS LINKS de LinkedIn e Indeed: los iconos ya se ven, pero mientras
// digan '#' no llevan a ningun lado. Pega ahi la URL de cada perfil.
export const REDES = [
  { label: 'WhatsApp', url: 'https://wa.me/573203014462' },
  { label: 'Email', url: 'mailto:andersoncoronado157@gmail.com' },
  { label: 'GitHub', url: 'https://github.com/AndersonCoronado357' },
  { label: 'LinkedIn', url: '#' },
  { label: 'Indeed', url: '#' },
]

// -- CONTACTO (links del bloque de contacto) -----------------
// Se muestran 5. `texto` es lo que se ve; `url` es a dónde lleva.
// `label` elige el icono (mismo set que "Encuentrame en" de Sobre mi),
// `etiqueta` es el nombre chiquito de arriba y `texto` el dato en si.
export const CONTACTO = [
  { label: 'WhatsApp', etiqueta: 'WhatsApp', texto: '320 301 4462', url: 'https://wa.me/573203014462' },
  { label: 'Email', etiqueta: 'Correo', texto: 'andersoncoronado157@gmail.com', url: 'mailto:andersoncoronado157@gmail.com' },
  { label: 'GitHub', etiqueta: 'GitHub', texto: 'github.com/AndersonCoronado357', url: 'https://github.com/AndersonCoronado357' },
  { label: 'LinkedIn', etiqueta: 'LinkedIn', texto: 'linkedin.com', url: '#' },
  { label: 'Indeed', etiqueta: 'Indeed', texto: 'indeed.com', url: '#' },
]
