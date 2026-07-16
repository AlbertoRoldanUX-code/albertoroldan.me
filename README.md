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

La guía completa no es accesible sin opt-in: el PDF en `/api/guides/[slug]/pdf` exige una cookie firmada que solo se emite al suscribirse.

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
  "downloadUrl": "/api/guides/mi-guia/pdf"
}
```

## Correo del dominio (Cloudflare Email Routing)

El dominio usa Cloudflare Email Routing (`route*.mx.cloudflare.net`).

Regla activa: `privacidad@albertoroldan.me` → reenvío a la bandeja de destino verificada en Cloudflare. Es el contacto de la política de privacidad.

## Newsletter (Supabase)

Los emails se guardan en Supabase (`newsletter_subscribers`).

1. Crea un proyecto en [Supabase](https://supabase.com) (o usa uno existente).
2. Añade en `.env.local` (y en Vercel):

```bash
SUPABASE_URL=https://xxxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJ...
# Solo para migrar desde la terminal:
SUPABASE_DB_PASSWORD=tu-password-de-postgres
```

3. Aplica las migraciones (elige una):

```bash
npm install -D pg   # una vez
npm run db:migrate
```

O pega el SQL de `supabase/migrations/*.sql` en el SQL Editor del dashboard.

Sin `SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY`, el formulario sigue respondiendo OK pero solo hace log (noop). Beehiiv/Kit son opcionales y solo harían falta si quieres enviar el boletín desde esas plataformas.

## Emails al suscribirse (Resend outbound)

Al optar por una guía, el servidor envía dos emails estilo Justin Welsh:

1. **Entrega de la guía** — enlace firmado al PDF (válido 7 días).
2. **Welcome al ensayo semanal** — solo la primera vez (o tras re-suscribirse).

Variables:

```bash
RESEND_API_KEY=re_...
# Remitente verificado en Resend, p. ej.:
RESEND_FROM_EMAIL="Alberto Roldán <alberto@iberiancaucasus.com>"
```

También ejecuta la migración `005_newsletter_email_tracking.sql` (`welcome_sent_at`, `unsubscribed_at`). Los emails incluyen enlace de baja en `/unsubscribe`.

## Archivo de emails de Justin Welsh (Resend → Supabase)

Los emails de `hello@justinwelsh.me` se reenvían desde Gmail a Resend Inbound y se guardan en `reference_emails` (asunto, cuerpo, fecha, headers).

### 1. Migración Supabase

Ejecuta `supabase/migrations/002_reference_emails.sql` en el SQL Editor.

### 2. Resend Inbound

1. En [Resend → Receiving](https://resend.com/emails), copia tu dirección `@*.resend.app` (o configura un subdominio tipo `inbound.albertoroldan.me` con MX).
2. Crea un webhook en [Webhooks](https://resend.com/webhooks):
   - URL: `https://albertoroldan.me/api/webhooks/resend`
   - Evento: `email.received`
3. Copia el signing secret del webhook.

### 3. Variables de entorno

En `.env.local` y en Vercel:

```bash
SUPABASE_URL=https://xxxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJ...
RESEND_API_KEY=re_...
RESEND_WEBHOOK_SECRET=whsec_...
RESEND_FROM_EMAIL="Alberto Roldán <alberto@iberiancaucasus.com>"
```

### 4. Filtro en Gmail

En la cuenta que recibe `alberto@iberiancaucasus.com`:

1. Ajustes → Filtros → Crear filtro.
2. **From:** `hello@justinwelsh.me`
3. Acción: **Reenviar a** `tu-alias@xxxx.resend.app` (la dirección de Receiving).

La primera vez Gmail pedirá confirmar la dirección de reenvío.

El webhook solo persiste mensajes que mencionan `justinwelsh.me` (sirve también si Gmail cambia el From al reenviar). Los reintentos son idempotentes por `resend_email_id`.

Más adelante: drip post-suscripción (mejores ensayos) y borradores del newsletter semanal.

## LinkedIn

En tus posts de LinkedIn, enlaza directamente a la guía:

```
Gratis aquí: https://albertoroldan.me/guides/field-manual
```

O a la homepage: `https://albertoroldan.me`

## Redirects legacy

Las URLs antiguas bajo `/vault/*` redirigen permanentemente a `/guides/*`.
