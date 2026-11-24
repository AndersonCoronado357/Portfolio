# Especificación de la animación del portfolio

Este documento describe, con todo detalle, **cómo debe comportarse la animación
completa del portfolio**. La maqueta estática (formas, textos, posiciones,
colores, tipografías) ya está terminada y es correcta: **NO hay que rediseñar
nada visual**, solo agregarle el comportamiento animado que se describe acá.

---

## 0. Contexto técnico (cómo está armado hoy)

- **Stack:** React + Vite + Tailwind v4. Dev server en `npm run dev` (puerto 4321).
- **Sistema de escala:** todo el diseño está medido en "unidades Figma" sobre un
  frame de **1920×1080**. Hay un contenedor único que se escala uniforme para
  cubrir la ventana:
  - `escala = min(ventanaAncho/1920, ventanaAlto/1080)`
  - el contenedor mide `ventanaAncho/escala` × `ventanaAlto/escala` y se le aplica
    `transform: scale(escala)` con `transform-origin: top left`.
  - Adentro, **1px = 1px de Figma**. Las posiciones van en `%` (del frame) para X
    y en `px` para tamaños.
  - Nunca hay barras de scroll (`overflow: hidden`).
- **8 vistas**, cada una es un frame completo (100% de pantalla), en este orden:
  `inicio → sobre-mi → proyectos → experiencia → tecnologias → habilidades →
  formacion → contacto`.
- El **logo** (esquina superior izquierda) ya tiene su animación propia: se
  "construye" solo al cargar (canvas + mapa de crecimiento PNG). Esa animación
  **no se toca**, solo se usa como disparador del arranque.

---

## 1. La idea en una frase

> Al cargar, el logo se dibuja y de él nace todo. Después, un scroll continuo
> hacia abajo recorre las 8 vistas: el **contenido** (textos, dispositivos) se
> **desliza hacia abajo** como páginas, y por detrás **todas las formas amarillas
> son UNA sola masa persistente** que **se transforma y viaja con el scroll** para
> rearmar el decorado de cada vista. Al **llegar** a una vista la masa se **cuaja**
> en su forma exacta; una pizca de scroll la mantiene sólida; recién al pasar un
> margen vuelve a fluir.

---

## 2. Arquitectura de DOS CAPAS (lo más importante de entender)

Hay que separar en **dos capas independientes**:

### Capa A — CONTENIDO (adelante)
Textos, títulos, dispositivos (laptop/celular), línea de tiempo, iconos, etc.
**Todo lo que NO es una forma amarilla de fondo.**
- Se organiza por secciones (una por vista), apiladas.
- **Se desliza VERTICALMENTE con el scroll**: la vista actual sube y se va por
  arriba, la siguiente entra desde abajo. → Esto es lo que da la sensación de
  **que la página baja**. (Técnicamente: `translateY((indiceVista - P) * 100%)`
  donde P es la posición de scroll continua.)

### Capa B — LA MASA AMARILLA (detrás, persistente)
Todos los círculos amarillos, el recuadro grande de Inicio, los dos semicírculos
de Inicio, y la mancha (blob) de Proyectos.
- **NO se desliza con las páginas.** Es una capa fija de fondo.
- Es **una sola masa persistente**: los mismos elementos existen siempre y
  **se reconfiguran en su lugar** para formar el decorado de cada vista.
- **Se mueve/transforma con el scroll**, en sincronía con la capa A.

> **El error que se venía cometiendo:** meter las formas amarillas dentro de las
> secciones que se deslizan (entonces cada forma parecía un elemento suelto que
> aparecía/desaparecía), o hacer que "cada parte tenga su elemento por separado".
> **NO.** La masa amarilla es UNA capa aparte, persistente, que fluye como un
> único organismo.

---

## 3. La MASA AMARILLA en detalle

La masa está compuesta por **nodos** (piezas amarillas) que **siempre existen**.
Cada nodo tiene, para cada vista, una geometría objetivo (posición, tamaño,
opacidad/tono). Al scrollear, cada nodo **interpola** su geometría desde la vista
que dejás hacia la vista a la que vas.

**Regla de oro — nada desaparece de golpe:**
- Si una vista usa MENOS piezas que otra, las piezas sobrantes **NO se borran ni
  se desvanecen abruptamente**: **se funden dentro de la masa** (viajan al centro
  de la forma amarilla dominante de esa vista y quedan escondidas adentro, del
  mismo color). Cuando la vista siguiente las necesita, **vuelven a salir** desde
  ahí. Todo es continuo, como líquido: **se une, se combina en una sola cosa, se
  mueve y vuelve a salir.**

**Sensación de "una sola cosa":**
- Todas las piezas son del **mismo amarillo** y, al moverse juntas y superponerse
  durante el tramo de flujo, se leen como **una única masa**.
- Mientras fluye (solo en el tramo del medio, ver §4), los círculos pueden hacer
  un **leve estiramiento/squash** en la dirección del movimiento, para que se
  sienta líquido. Ese estiramiento es **sutil** y **cero en reposo**.

**REGLAS DURAS que NO se pueden violar (acá es donde se rompió antes):**
1. **En reposo / al llegar a una vista, cada forma es EXACTA al Figma.** Círculos
   redondos enteros, con su tono correcto; semicírculos limpios (media luna
   perfecta); el recuadro con **esquinas rectas**. Nada deformado.
2. **NUNCA usar un filtro `goo`/metaballs.** Rompía las formas: redondeaba las
   esquinas del rectángulo, deformaba los semicírculos y trababa (jank). La fusión
   "líquida" se logra solo con superposición de formas del mismo color + el
   estiramiento sutil, **sin filtros que alteren las formas**.
3. **Los semicírculos NO se deforman jamás.** Solo cambian de posición/tamaño; su
   forma de media luna se mantiene siempre limpia. (Antes se rompieron y quedaron
   como una "gorra" deforme — eso está mal.)
4. **El estiramiento/squash es solo para los círculos**, sutil, y **cero al
   frenar**. El recuadro, los semicírculos y el blob nunca se estiran.

---

## 4. ZONA DE AGUANTE (la física del scroll — clave del comportamiento)

El scroll **no** es lineal. Cerca de cada vista hay una **meseta plana** (zona de
aguante). Para la posición continua de scroll `P`:

- **Al llegar a una vista, la masa se CUAJA** en su forma exacta.
- Estando en la vista, si hacés **una pizca de scroll, la forma se mantiene
  sólida** (aguanta, no se deforma, no viaja).
- Recién cuando **seguís scrolleando y pasás el margen de aguante**, la masa
  **empieza a fluir** hacia la vista siguiente.
- Al **llegar a la vista siguiente, se cuaja de nuevo**, y se repite.

Traducido a una función (sugerencia): para el tramo entre la vista `i` y la `i+1`,
con `local = P - i` (va de 0 a 1) y un margen `HOLD ≈ 0.22`:
```
si local <= HOLD          → g = 0        (sólido en la vista i)
si local >= 1 - HOLD      → g = 1        (sólido en la vista i+1)
si no                     → g = smoothstep((local - HOLD) / (1 - 2*HOLD))
```
`g` es el factor de interpolación de TODO (posición de la masa Y deslizamiento del
contenido). Como `g` es **plano** cerca de las vistas, ahí no hay movimiento →
las formas no se deforman → quedan exactas. El líquido solo aparece en el tramo
del medio, donde `g` cambia.

**Al soltar el scroll**, si quedaste a mitad de camino, debe **asentarse suave
hasta la vista más cercana** (para que siempre termine cuajado en una vista, nunca
congelado a medio deformar). Es un asentamiento gentil a la más cercana — **no** un
"volver siempre a la anterior".

---

## 5. La transformación del RECTÁNGULO (tiene que verse de verdad)

En **Inicio** hay un **recuadro amarillo grande a la derecha** (el panel con el
nombre). Ese recuadro es un nodo de la masa. Al scrollear de Inicio a Sobre mi,
**tiene que verse una transformación REAL**: el **rectángulo se convierte en el
círculo grande** de Sobre mi.
- Interpolar de verdad: **radio de esquinas 0% → 50%**, **ancho/alto** del
  rectángulo (519×1080) → al diámetro del círculo (660×660), y **posición** del
  panel → al centro del círculo.
- Que se vea claramente el rectángulo **redondeándose y encogiéndose** hasta ser
  un círculo. (Antes "no se veía transformación real" — el cambio era pobre.)
- El **texto** del panel (nombre + descripción + botón) va en la capa de contenido
  (adelante) y **se desvanece** apenas empieza la transformación (no puede quedar
  sobre una forma que muta).

---

## 6. Arranque (al cargar la página)

- Primero se dibuja el **logo** (su animación propia, ~1.65s).
- **Sincronizado con eso**, la masa amarilla **nace fluyendo desde los costados**
  (cada pieza entra deslizándose desde el lado más cercano de la pantalla) hasta
  quedar EXACTA en la composición de Inicio. La sensación es que **todo nace del
  logo**.
- El contenido de Inicio (aro, grilla de puntos, "lo que hago", y el texto del
  panel) aparece también en ese arranque, entrando desde los lados / con su
  animación, no "apareciendo de la nada".

---

## 7. Animaciones de entrada del CONTENIDO

Cuando el contenido de una vista entra (mientras la página baja hacia ella), sus
elementos **se construyen de a poco** y **desde varias direcciones** (izquierda,
derecha, algo de profundidad) — **no todos subiendo desde abajo**. Cada vista
puede sentirse distinta.
- **Prohibido:** rebotes (`elastic`/`back`), parpadeos, desenfoques (`blur`).
- Movimientos **suaves y profesionales**, con eases tipo `power`. Que no se vea
  "de plantilla".
- La sensación general es de **bajar**, pero con variedad en cómo entra cada cosa.

---

## 8. Header conectado al scroll

- La **píldora** de arriba a la derecha dice **"Desarrollador de Software"** en
  Inicio y **"Anderson Coronado"** en el resto. **No debe cambiar de golpe**: hace
  un **crossfade** conectado al scroll (mientras bajás de Inicio a la siguiente, un
  texto se desvanece y el otro aparece; el fondo pasa de blanco a amarillo
  gradualmente).
- El **subrayado/color del ítem activo del nav** también **se interpola** con el
  scroll (se ilumina de a poco según a qué vista estás llegando), no salta.

---

## 9. Reglas generales y errores a NO repetir

✅ **Debe cumplirse:**
- Scroll continuo hacia abajo; se siente **una sola experiencia** que fluye.
- La **masa amarilla es UN solo organismo persistente** que se transforma con el
  scroll (no piezas sueltas).
- **Zona de aguante:** cuaja en la vista, aguanta una pizca, después fluye.
- **Formas EXACTAS al Figma en reposo**, siempre.
- Transformación **real y visible** del rectángulo → círculo.
- **Se ve que la página baja.**
- Header conectado al scroll (píldora + nav).
- Sin barras de scroll.

❌ **NO hacer (errores ya cometidos):**
- ❌ Meter las formas amarillas dentro de las secciones que se deslizan (se ven
  sueltas / "cada parte su elemento por separado").
- ❌ Usar filtro `goo`/metaballs (rompe las esquinas del rectángulo, deforma los
  semicírculos, traba).
- ❌ Deformar los semicírculos o cualquier forma en reposo.
- ❌ Que todo entre "subiendo desde abajo".
- ❌ Reemplazar el "bajar la página" por simples fundidos en el mismo lugar.
- ❌ Que la transformación del rectángulo sea un cambio pobre / no se vea.

---

## 10. Datos técnicos: geometría de la masa amarilla por vista

Cada nodo se posiciona por su **centro**. `x`,`y` en **% del frame 1920×1080**;
`d` = diámetro en px (Figma); `op` = opacidad (tono del amarillo `#E5B80B`).

> Los tonos por opacidad, si se usan colores sólidos, equivalen sobre blanco a:
> `1 → #e5b80b`, `0.8 → #eac63c`, `0.6 → #efd46d`, `0.3 → #f7eab6`, `0.2 → #faf1ce`.

### Nodos-círculo (hay 12; índices 0..11)
El nodo `0` es siempre el **círculo grande** (o el protagonista) de la vista. Los
que no figuran en una vista se **funden en la masa** (centro de la forma
dominante) — ver §3.

**inicio** (composición central; el nodo 0 = círculo 493 en el centro, y los demás
son el arco de orbes + la columna, posicionados RELATIVO al centro del círculo
grande con offsets `dx,dy` en px):
- 0: centro (36.64%, 58.19%), d=493
- 1: d=62, offset (−398.5, −119.5)   · 2: d=35, (−381, −198)   · 3: d=71, (−328, −258)
- 4: d=35, (−275, −311)   · 5: d=71, (−203, −348)   · 6: d=93, (−88, −375)
- 7: d=88, (307.5, −104.5)   · 8: d=49, (319, −29)   · 9: d=100, (301.5, 50.5)
  *(1–6 = arco superior-izquierdo; 7–9 = columna derecha)*

**sobre-mi:**
- 0: (74.74, 66.76) d=660 · 1: (90.1, 47.22) d=272 op.8 · 2: (2.27, 96.62) d=223 op.8
- 3: (81.25, 27.04) d=140 op.6 · 4: (66.15, 22.04) d=100 op.6 · 5: (9.53, 42.59) d=236 op.3
- 6: (61.17, 13.66) d=49 op.6 · 7: (21.56, 20.56) d=68 op.2

**proyectos:** (además del blob, ver abajo)
- 2: (2.27, 96.62) d=223 op.8 · 5: (6.9, 77.55) d=177 op.3 · 7: (16.25, 89.44) d=68 op.2

**experiencia:**
- 0: (76.3, 66.76) d=660 · 1: (91.67, 47.22) d=272 op.8 · 2: (2.27, 96.62) d=223 op.8
- 3: (82.81, 27.04) d=140 op.6 · 4: (67.71, 22.04) d=100 op.6 · 5: (3.75, 46.02) d=166 op.3
- 6: (62.73, 13.66) d=49 op.6 · 7: (21.56, 20.56) d=68 op.2 · 8: (41.82, 41.11) d=272 op.8
- 9: (36.2, 78.24) d=140 op.6 · 10: (22.55, 47.22) d=100 op.6 · 11: (53.46, 72.27) d=49 op.6

**tecnologias:** (vista pendiente, decorado mínimo)
- 2: (2.27, 96.62) d=223 op.8 · 5: (50, 50) d=300 op.3 · 6: (62.73, 13.66) d=49 op.6
- 7: (21.56, 20.56) d=68 op.2

**habilidades:**
- 1: (99.97, 47.5) d=223 op.8 · 2: (2.27, 96.62) d=223 op.8 · 3: (91.38, 22.27) d=177 op.3
- 4: (86.77, 40.46) d=68 op.2 · 5: (6.9, 77.55) d=177 op.3 · 7: (16.25, 89.44) d=68 op.2

**formacion:**
- 0: (76.3, 66.76) d=660 · 1: (91.67, 47.22) d=272 op.8 · 2: (2.27, 96.62) d=223 op.8
- 3: (82.81, 27.04) d=140 op.6 · 4: (67.71, 22.04) d=100 op.6 · 5: (6.9, 77.55) d=177 op.3
- 6: (62.73, 13.66) d=49 op.6 · 7: (16.25, 89.44) d=68 op.2 · 8: (91.38, 22.27) d=177 op.3
- 9: (86.77, 40.46) d=68 op.2

**contacto:**
- 0: (24.17, 46.2) d=754 · 1: (7.32, 61.34) d=311 op.8 · 3: (14.32, 83.7) d=160 op.6
- 4: (28.78, 92.82) d=95 op.6 · 5: (5.47, 86.11) d=168 op.3 · 6: (17.68, 99.4) d=49 op.6
- 7: (11.54, 69.31) d=65 op.2

### "MASA" dominante por vista (a dónde se funden los nodos que sobran)
- inicio (36.64, 58.19) d493 · sobre-mi (74.74, 66.76) d660 · proyectos (79.0, 73.29) d900
- experiencia (76.3, 66.76) d660 · tecnologias (50, 50) d300 · habilidades (99.97, 47.5) d223
- formacion (76.3, 66.76) d660 · contacto (24.17, 46.2) d754

### Nodos especiales
- **PANEL (rectángulo → círculo):** solo existe como rectángulo en **inicio**:
  posición Figma `[1401, 0]`, tamaño `519×1080`, esquinas rectas (radio 0). En las
  demás vistas se funde en la masa como círculo chico (radio 50%). Su
  transformación rect→círculo es la de §5.
- **SEMICÍRCULO SUPERIOR (media luna, cúpula):** solo en **inicio**. Caja Figma
  `[843, 298]`, `168×84`. Forma: mitad superior redondeada, base recta.
- **SEMICÍRCULO INFERIOR:** solo en **inicio**. Caja Figma `[953, 335]`, `107×49`.
  Forma: mitad inferior redondeada.
  *(Los dos juntos forman el detalle "sol" arriba a la derecha del círculo grande.
  Deben verse SIEMPRE como medias lunas limpias, nunca deformados.)*
- **BLOB (mancha orgánica):** solo en **proyectos**. Es un SVG (`/blob-proyectos.svg`),
  caja Figma `[1046, 239]`, `941×1105`. En las demás vistas se funde en la masa.

---

## 11. Resumen para el que lo implemente

1. Dejá la maqueta estática como está (no rediseñar).
2. Sacá las formas amarillas de las secciones y ponelas en **una capa de fondo
   única y persistente** (la masa).
3. Hacé el **scroll continuo** con **zona de aguante** (§4) y **asentamiento** a la
   vista más cercana al soltar.
4. Capa de contenido: **se desliza hacia abajo** con el scroll (§2A).
5. Capa de masa: cada nodo **interpola** su geometría entre vistas (§10), se
   **funde/reaparece** en la masa (§3), con **squash sutil solo en círculos** y
   **cero en reposo**. **Sin goo. Formas exactas en reposo. Semicírculos limpios.**
6. Transformación **real** del rectángulo → círculo (§5).
7. Arranque desde el logo, entradas variadas del contenido (§6, §7).
8. Header conectado al scroll (§8).
9. Respetá las **reglas duras** (§3) y los **errores a no repetir** (§9).
