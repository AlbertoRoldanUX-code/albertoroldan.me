-- Drip post-suscripción (estilo Justin Welsh: ensayo día 1 + mejores piezas día 2).
alter table public.newsletter_subscribers
  add column if not exists locale text not null default 'es',
  add column if not exists drip_step smallint not null default 0,
  add column if not exists drip_1_sent_at timestamptz,
  add column if not exists drip_2_sent_at timestamptz;

alter table public.newsletter_subscribers
  drop constraint if exists newsletter_subscribers_locale_check;

alter table public.newsletter_subscribers
  add constraint newsletter_subscribers_locale_check
  check (locale in ('es', 'en'));

alter table public.newsletter_subscribers
  drop constraint if exists newsletter_subscribers_drip_step_check;

alter table public.newsletter_subscribers
  add constraint newsletter_subscribers_drip_step_check
  check (drip_step between 0 and 2);

create index if not exists newsletter_subscribers_drip_due_idx
  on public.newsletter_subscribers (drip_step, welcome_sent_at, drip_1_sent_at)
  where unsubscribed_at is null and drip_step < 2;
