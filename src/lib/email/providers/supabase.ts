import { createClient } from "@supabase/supabase-js";
import type {
  EmailProvider,
  EmailSubscribePayload,
  EmailSubscribeResult,
} from "../types";

/**
 * Persists newsletter subscriptions in Supabase.
 * Requires SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.
 */
export class SupabaseEmailProvider implements EmailProvider {
  async subscribe(
    payload: EmailSubscribePayload,
  ): Promise<EmailSubscribeResult> {
    const url = process.env.SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!url || !serviceRoleKey) {
      throw new Error("Supabase credentials are not configured.");
    }

    const supabase = createClient(url, serviceRoleKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    const email = payload.email.trim().toLowerCase();
    const { error } = await supabase.from("newsletter_subscribers").upsert(
      {
        email,
        lead_magnet_slug: payload.leadMagnetSlug,
        source: "website",
        updated_at: new Date().toISOString(),
      },
      { onConflict: "email" },
    );

    if (error) {
      console.error("[SupabaseEmailProvider]", error.message);
      return {
        success: false,
        message: "No se pudo completar la suscripción. Inténtalo de nuevo.",
      };
    }

    return {
      success: true,
      message: "Suscripción confirmada. Te escribo cada semana.",
    };
  }
}
