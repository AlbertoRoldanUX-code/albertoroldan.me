# albertoroldan.me

Sitio personal con homepage, newsletter y landings de guías gratuitas. Inspirado en [justinwelsh.me](https://justinwelsh.me).

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Framer Motion
- next-themes (dark/light mode)

## Getting started

```bash
npm install
npm run dev
```

Abre **https://localhost:3000** (HTTPS, igual que tus otros proyectos).

Si faltan los certificados locales:

```bash
npm run setup:https
```

## Rutas

| Ruta | Descripción |
|------|-------------|
| `/` | Homepage con newsletter, ensayos y recursos |
| `/about` | Sobre mí |
| `/essays` | Archivo de ensayos |
| `/resources` | Recursos gratuitos |
| `/guides/[slug]` | Landing de una guía (lead magnet) |
| `/guides/[slug]/guide` | Lector web de la guía completa |

Guía actual: `/guides/field-manual`

## Lead magnets (sin registro manual)

Cada lead magnet es un JSON en `src/data/lead-magnets/`. El sistema lo detecta automáticamente.

Añade un archivo, por ejemplo `mi-guia.json`, y estará disponible en `/guides/mi-guia`.

```json
{
  "slug": "mi-guia",
  "brand": "albertoroldán.",
  "eyebrow": "Guía gratuita",
  "title": "...",
  "subtitle": "...",
  "coverImage": "/images/guide-cover.svg",
  "benefits": [{ "label": "Capacidad 1", "title": "..." }],
  "author": { "name": "...", "bio": "...", "avatar": "..." },
  "cta": { "headline": "...", "buttonText": "...", "placeholder": "...", "disclaimer": "..." },
  "downloadUrl": "/guides/mi-guia/guide"
}
```

## Newsletter (Supabase)

Los emails se guardan en Supabase (`newsletter_subscribers`).

1. Crea un proyecto en [Supabase](https://supabase.com) (o usa uno existente).
2. Ejecuta el SQL de `supabase/migrations/001_newsletter_subscribers.sql` en el SQL Editor.
3. Añade en `.env.local` (y en Vercel):

```bash
SUPABASE_URL=https://xxxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJ...
```

Sin esas variables, el formulario sigue respondiendo OK pero solo hace log (noop). Beehiiv/Kit son opcionales y solo harían falta si quieres enviar el boletín desde esas plataformas.

## LinkedIn

En tus posts de LinkedIn, enlaza directamente a la guía:

```
Gratis aquí: https://albertoroldan.me/guides/field-manual
```

O a la homepage: `https://albertoroldan.me`

## Redirects legacy

Las URLs antiguas bajo `/vault/*` redirigen permanentemente a `/guides/*`.
