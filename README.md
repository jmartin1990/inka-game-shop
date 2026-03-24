# 🎮 Inka Game Shop - Frontend UI

Proyecto de práctica del curso oficial de **Next.js** ([nextjs.org/learn](https://nextjs.org/learn)), adaptado a una tienda de videojuegos retro / moderna.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?logo=tailwind-css)
![pnpm](https://img.shields.io/badge/pnpm-8+-orange?logo=pnpm)

---

## 👤 Información del Proyecto

- **Autor:** Juan Campos
- **Stack:** `Next.js 14`, `App Router`, `TypeScript`, `Tailwind CSS`
- **Deploy:** Local y GitHub (rama `main`)

---

## 🛠️ Tecnologías Utilizadas

- **Framework:** `Next.js 14` (App Router).
- **Lenguaje:** `TypeScript` (Tipado estricto para mayor seguridad).
- **Estilos:** `Tailwind CSS` (Diseño responsivo y moderno).
- **Fuentes:** `Google Fonts` (Montserrat & Lusitana).
- **Gestor de Paquetes:** `pnpm`.

---

## 📋 Características de la Aplicación

El proyecto ha sido optimizado y conectado para ofrecer las siguientes funcionalidades:

1.  ✅ **Catálogo Dinámico:** Renderizado de videojuegos obtenidos desde la API de FastAPI.
2.  ✅ **Sistema de Ofertas:** Sección especial de promociones con precios actualizados.
3.  ✅ **Formularios Activos:** Suscripción al boletín y contacto conectados a PostgreSQL 17.
4.  ✅ **Diseño Responsivo:** Adaptado para dispositivos móviles y escritorio.
5.  ✅ **Navegación Fluida:** Uso de `next/link` y layouts optimizados.

---

## 🚀 Guía de Instalación y Uso

### 1. Preparar el Entorno

Desde la terminal en la carpeta raíz del proyecto (asegúrate de tener `pnpm` instalado):

```bash
# Instalar las dependencias
pnpm install

# Iniciar el servidor de desarrollo
pnpm dev

```

### La tienda estará disponible en: http://localhost:3000

## 📂 Estructura de Archivos Principal

- app/layout.tsx: Menú principal (Navbar) y Footer global.

- app/ui/: Estilos globales (global.css), fuentes y módulos CSS.

- public/: Almacén de assets (imágenes de tienda, héroes y novedades).

- app/tienda/: Lógica de renderizado de cartas de videojuegos.

## 🔗 Ecosistema Completo (Full Stack)

Este repositorio contiene la Interfaz (Frontend). Para que las funcionalidades de inventario, suscripción y contacto funcionen, es imprescindible ejecutar el backend:

### 👉 Repositorio Backend: [inka-game-api](https://github.com/jmartin1990/inka-game-api/)

## ⚙️ Cómo trabajan juntos:

1. Backend (API): Gestiona la lógica de negocio y PostgreSQL 17 en el puerto 8000.

2. Frontend (Next.js): Consume los datos y los presenta visualmente en el puerto 3000.

3. CORS: La API permite peticiones seguras desde este origen para garantizar la integridad de los datos.
