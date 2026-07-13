-- Grants for server-side access when "Automatically expose new tables" is off.
grant select, insert, update, delete on table public.newsletter_subscribers to service_role;
