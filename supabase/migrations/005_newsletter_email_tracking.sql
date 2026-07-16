-- Track welcome email delivery and unsubscribes for transactional sends.
alter table public.newsletter_subscribers
  add column if not exists welcome_sent_at timestamptz,
  add column if not exists unsubscribed_at timestamptz;

create index if not exists newsletter_subscribers_unsubscribed_at_idx
  on public.newsletter_subscribers (unsubscribed_at)
  where unsubscribed_at is null;
