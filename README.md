# Porfolio 2025 - Mathias Ledesma

Portfolio personal desarrollado con Next.js 16, TypeScript y Tailwind CSS 4.

La app muestra experiencia profesional, skills, proyectos destacados y CV.

## Caracteristicas

- Landing interactiva con consultas rapidas.
- Secciones de presentacion, skills, proyectos y contacto.
- Configuracion centralizada del contenido en `portfolio-config.json`.
- UI moderna con componentes estilo shadcn/ui y animaciones con Framer Motion.


## Stack tecnico

- `Next.js 16` (App Router)
- `React 19`
- `TypeScript`
- `Tailwind CSS 4`
- `Framer Motion`
- `Radix UI` + utilidades UI custom

## Requisitos

- `Node.js` 20 o superior recomendado.
- `pnpm` (recomendado) o `npm`.

## Instalacion y ejecucion local

1. Clonar el repositorio.
2. Instalar dependencias:

```bash
pnpm install
```

3. Crear archivo de entorno:

```bash
cp .env.example .env.local
```

4. Completar variables necesarias en `.env.local`.
5. Levantar entorno de desarrollo:

```bash
pnpm dev
```

6. Abrir [http://localhost:3000](http://localhost:3000).

## Variables de entorno

Definidas en `.env.example`:

- `NEXT_PUBLIC_SITE_URL`: opcional, util para dominio publico/canonical URL.

## Scripts disponibles

- `pnpm dev`: ejecuta el servidor de desarrollo.
- `pnpm build`: genera build de produccion.
- `pnpm start`: inicia la app en modo produccion.
- `pnpm lint`: corre linting con configuracion de Next.js.

## Estructura principal

- `src/app`: rutas y layout principal.
- `src/components`: componentes de UI y secciones del portfolio.
- `src/lib`: carga/parsing de configuracion y utilidades.
- `src/types`: tipos TypeScript del dominio.
- `public`: assets estaticos (imagenes, CV, icons).
- `portfolio-config.json`: fuente de verdad del contenido del portfolio.

## Personalizacion de contenido

Todo el contenido principal del sitio se gestiona en `portfolio-config.json`, incluyendo:

- datos personales y bio,
- experiencia y educacion,
- skills por categoria,
- proyectos y links,
- redes sociales,

Despues de editar ese archivo, los cambios se reflejan automaticamente en la app.

## Build de produccion

```bash
pnpm build
pnpm start
```

## Deploy

Se puede desplegar en Vercel u otra plataforma compatible con Next.js.

Para Vercel, importar el repositorio y definir las variables de entorno en el panel del proyecto.
