-- Reference emails archived for style/inspiration (e.g. Justin Welsh)
create table if not exists public.reference_emails (
  id uuid primary key default gen_random_uuid(),
  source text not null default 'justin_welsh',
  resend_email_id text not null,
  message_id text,
  from_address text not null,
  to_addresses text[] not null default '{}',
  subject text,
  text_body text,
  html_body text,
  headers jsonb,
  received_at timestamptz not null,
  created_at timestamptz not null default now(),
  constraint reference_emails_resend_email_id_key unique (resend_email_id)
);

create index if not exists reference_emails_source_received_at_idx
  on public.reference_emails (source, received_at desc);

create index if not exists reference_emails_received_at_idx
  on public.reference_emails (received_at desc);

create index if not exists reference_emails_message_id_idx
  on public.reference_emails (message_id)
  where message_id is not null;

alter table public.reference_emails enable row level security;

-- No public policies: only the service role (server) can read/write.
