# INKA Game Shop

Proyecto de práctica del curso oficial de Next.js (https://nextjs.org/learn), adaptado a una tienda de videojuegos retro / moderna.

- Autor: Juan Campos
- Stack: Next.js 14, App Router, TypeScript, Tailwind CSS
- Deploy: local y GitHub (rama `main`)

---

## 🗂️ Rutas de la aplicación

- `/` — Inicio (Hero + llamado a tienda + novedades)
- `/tienda` — Catálogo de videojuegos (cartas con imagenes)
- `/tienda/ofertas` — Promociones + paquetes con precio
- `/nosotros` — Historia + imagen representativa
- `/contacto` — Formulario de contacto sin backend (UI)

---

## 🧩 Contenido incluido

- Navegación en `app/layout.tsx` (menu principal + footer)
- Contenidos estáticos en páginas con `next/image`
- Imágenes en `public/`:
  - `hero-peru-videojuegos.png`, `hero-peru-videojuegos-mobile.png`
  - `nosotros/inka-gaming-peru.png`
  - `novedades/peru-game-1.png`, etc.
  - `tienda/*` y `tienda/ofertas/*`
- CSS: `app/ui/global.css`, `home.module.css`
- Fonts: `app/ui/fonts.ts` (Montserrat + Lusitana)

---

## 🧹 Limpiado y enfocado

El proyecto fue simplificado quitando artefactos del tutorial Next.js:
- eliminado dashboard de invoices/customers
- eliminado recorrido de query/seed/data templates
- no quedan dependencias de ejemplo innecesarias

---

## ▶️ Instrucciones para ejecutar

```bash
pnpm install
pnpm dev
