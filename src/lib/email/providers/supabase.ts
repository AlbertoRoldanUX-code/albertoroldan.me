import type {
  EmailProvider,
  EmailSubscribePayload,
  EmailSubscribeResult,
} from "../types";
import { sendSubscriptionEmails } from "../subscription-emails";
import { isValidLocale } from "@/lib/i18n/config";
import { createServiceSupabaseClient } from "@/lib/supabase/server";

/**
 * Persists newsletter subscriptions in Supabase and sends opt-in emails.
 * Requires SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.
 */
export class SupabaseEmailProvider implements EmailProvider {
  async subscribe(
    payload: EmailSubscribePayload,
  ): Promise<EmailSubscribeResult> {
    const supabase = createServiceSupabaseClient();
    if (!supabase) {
      throw new Error("Supabase credentials are not configured.");
    }

    const email = payload.email.trim().toLowerCase();
    const locale =
      typeof payload.locale === "string" && isValidLocale(payload.locale)
        ? payload.locale
        : "es";

    const { data: existing, error: selectError } = await supabase
      .from("newsletter_subscribers")
      .select("email, welcome_sent_at, unsubscribed_at, drip_step")
      .eq("email", email)
      .maybeSingle();

    if (selectError) {
      console.error("[SupabaseEmailProvider]", selectError.message);
      return {
        success: false,
        message: "No se pudo completar la suscripción. Inténtalo de nuevo.",
      };
    }

    const now = new Date().toISOString();
    const isNew = !existing;
    const wasUnsubscribed = Boolean(existing?.unsubscribed_at);
    const needsWelcome =
      isNew || wasUnsubscribed || !existing?.welcome_sent_at;

    const { error } = await supabase.from("newsletter_subscribers").upsert(
      {
        email,
        lead_magnet_slug: payload.leadMagnetSlug,
        source: "website",
        locale,
        updated_at: now,
        // Re-subscribe clears prior unsubscribe and restarts the drip.
        unsubscribed_at: null,
        ...(needsWelcome
          ? {
              drip_step: 0,
              drip_1_sent_at: null,
              drip_2_sent_at: null,
            }
          : {}),
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

    const { welcomeSent } = await sendSubscriptionEmails({
      email,
      leadMagnetSlug: payload.leadMagnetSlug,
      locale,
      sendWelcome: needsWelcome,
    });

    if (welcomeSent) {
      const { error: welcomeError } = await supabase
        .from("newsletter_subscribers")
        .update({ welcome_sent_at: now })
        .eq("email", email);

      if (welcomeError) {
        console.error(
          "[SupabaseEmailProvider] welcome_sent_at",
          welcomeError.message,
        );
      }
    }

    return {
      success: true,
      message: "Suscripción confirmada. Te escribo cada semana.",
    };
  }
}
