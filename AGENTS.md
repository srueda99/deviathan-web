<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Deviathan — Sitio web corporativo

Landing page de **Deviathan**, una empresa de software que ofrece desarrollo de
software a medida, inteligencia artificial, automatización de procesos, diseño
UI/UX, ciberseguridad e infraestructura IT. Es un sitio de una sola página
(one-page) en **español**, con estética oscura/futurista y muchas animaciones.

La interfaz y los comentarios del código están en español; mantén ese idioma al
editar.

## Stack

| Área | Tecnología |
|------|-----------|
| Framework | **Next.js 16** (App Router, Turbopack) |
| UI | **React 19**, **TypeScript 5** |
| Estilos | **Tailwind CSS v4** — configurado en `globals.css` con `@import "tailwindcss"` y el directivo `@theme` (no hay `tailwind.config`) |
| Tema claro/oscuro | **next-themes** (estrategia `class`, `defaultTheme="dark"`, sistema deshabilitado) |
| Animaciones | **framer-motion v12** vía **LazyMotion** (ver abajo) |
| Iconos | **lucide-react** y **react-icons** |
| Fuentes | **next/font/google**: Kanit (principal), Open Sans (cuerpo), Jersey 10 (acento) |
| Email | **nodemailer** (SMTP) en la API de contacto |
| Deploy | **Vercel** |

## Estructura

```
src/
├── app/
│   ├── layout.tsx          # Root layout: fuentes (next/font), <ThemeProvider>, metadata
│   ├── page.tsx            # Única página: apila las secciones + Navbar/Footer/WhatsApp
│   ├── globals.css         # Tailwind v4, variables de color (@theme), keyframes, dark mode
│   ├── favicon.ico
│   └── api/
│       └── contact/route.ts  # POST: valida el formulario y envía 2 correos con nodemailer
├── components/
│   ├── Navbar.tsx          # Barra fija, scroll suave a secciones, menú móvil, logo por tema
│   ├── Footer.tsx          # Pie con enlaces, redes y descripción
│   ├── WhatsAppIcon.tsx    # Botón flotante de WhatsApp (abajo-derecha)
│   ├── ThemeProvider.tsx   # Envuelve la app en next-themes + LazyMotion
│   ├── ThemeToggle.tsx     # Botón Sol/Luna para cambiar el tema
│   └── sections/           # Secciones grandes que componen la landing
│       ├── Hero.tsx        # Above-the-fold: título, CTAs, canvas de malla, widgets IA/automatización
│       ├── Services.tsx    # Grid de servicios (iconos lucide)
│       ├── About.tsx       # "Sobre nosotros" + lista de beneficios
│       ├── TechStack.tsx   # Tecnologías (iconos react-icons)
│       └── Contact.tsx     # Formulario de contacto → /api/contact
└── lib/
    └── utils.ts            # cn(): merge de clases Tailwind con clsx + tailwind-merge

public/logos/               # SVGs del logo en variantes de color (blanco/negro/morado)
```

`src/app/page.tsx` es el único ensamblador de la página; renderiza en orden:
`Navbar → Hero → Services → About → TechStack → Contact → Footer → WhatsAppIcon`.

## Convenciones importantes

- **Animaciones: usa `<m.*>`, nunca `<motion.*>`.** La app está envuelta en
  `<LazyMotion features={domAnimation} strict>` (en `ThemeProvider.tsx`), que
  carga bajo demanda solo las features usadas (animaciones, `whileInView`,
  `whileHover`, `whileTap`, `AnimatePresence`). El modo `strict` **lanza un error
  en runtime** si se importa/renderiza el componente `motion` completo. Importa
  `m` desde `framer-motion` y usa los hooks (`useScroll`, `useTransform`,
  `AnimatePresence`) con normalidad. No uses `drag`/`layout` (requerirían
  `domMax`).
- **Fuentes:** se declaran una sola vez en `layout.tsx` con `next/font/google`
  (self-hosted, `display: "swap"`). Kanit solo declara los pesos realmente usados
  (400/500/600/700/900); Jersey 10 va con `preload: false` por ser below-the-fold.
  Añade un peso a la lista solo si se va a usar. Las fuentes se aplican por
  variable CSS (`--font-kanit`, `--font-open-sans`, `--font-jersey-10`) y clases
  `font-kanit` / `font-open-sans` / `font-jersey-10`.
- **Colores/tema:** definidos como variables CSS en `globals.css` (`:root` y
  `.dark`) y expuestos a Tailwind vía `@theme` (`bg-background`, `text-foreground`,
  `bg-primary`, `text-accent`, etc.). El logo del Navbar cambia según
  `resolvedTheme`.
- **Componentes de sección son `"use client"`** (usan estado/animaciones). `page.tsx`
  y `layout.tsx` son Server Components; la home se prerenderiza **estática**.
- **Rendimiento** es un requisito del proyecto: el sitio se sirve estático desde el
  CDN de Vercel, así que el coste está en el cliente. Cuida el peso de JS
  (framer-motion), el número de fuentes precargadas y las pinturas costosas
  (blurs grandes, `mix-blend`, el canvas del Hero). Evita `setState` en cada
  `mousemove`/`scroll`. Consulta `.agents/skills/performance/SKILL.md` y
  `.agents/skills/vercel-react-best-practices/`.

## API de contacto

`POST /api/contact` (App Router route handler, dinámico). Recibe JSON
`{ name, email, service, message }`, valida que no falten campos y envía dos
correos con nodemailer (uno al equipo y una confirmación al usuario).

Requiere estas variables de entorno (en `.env.local`, **no** versionar):

```
SMTP_HOST=
SMTP_PORT=      # por defecto 465 (secure: true)
EMAIL_USER=
EMAIL_PASS=
```

## Comandos

```bash
npm run dev     # servidor de desarrollo (Turbopack)
npm run build   # build de producción
npm run start   # sirve el build
npm run lint    # eslint (next lint fue removido en Next 16; se usa eslint directo)
```

## Skills disponibles (`.agents/skills/`)

Gestionadas por `skills-lock.json` (no editar a mano el contenido descargado):
`frontend-design`, `performance`, `vercel-react-best-practices`,
`web-design-guidelines`. Úsalas como referencia al trabajar en diseño y
rendimiento.
