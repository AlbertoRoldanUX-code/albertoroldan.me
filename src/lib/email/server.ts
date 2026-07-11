import { NoopEmailProvider } from "./providers/noop";
import { SupabaseEmailProvider } from "./providers/supabase";
import type { EmailProvider } from "./types";

/**
 * Server-side email provider selection.
 * Uses Supabase when credentials are present; otherwise falls back to noop.
 */
export function createServerEmailProvider(): EmailProvider {
  if (process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return new SupabaseEmailProvider();
  }

  return new NoopEmailProvider();
}
