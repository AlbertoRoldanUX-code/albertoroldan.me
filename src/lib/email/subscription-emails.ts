import { createGuideAccessToken } from "@/lib/guides/access";
import type { Locale } from "@/lib/i18n/config";
import { absoluteUrl } from "@/lib/metadata";
import { sendEmail } from "./send";
import { buildGuideDeliveryEmail } from "./templates/guide-delivery";
import { buildWelcomeEmail } from "./templates/welcome";
import { createUnsubscribeUrl } from "./unsubscribe";

export interface SubscriptionEmailInput {
  email: string;
  leadMagnetSlug: string;
  locale: Locale;
  /** When false, only the guide email is sent (returning subscribers). */
  sendWelcome: boolean;
}

export interface SubscriptionEmailResult {
  guideSent: boolean;
  welcomeSent: boolean;
}

/**
 * Sends Justin-style opt-in emails: guide delivery (+ welcome for new subs).
 * Drip follow-ups (sample essay + best pieces) are sent by /api/cron/drip.
 * Never throws — subscribe must succeed even if delivery fails.
 */
export async function sendSubscriptionEmails(
  input: SubscriptionEmailInput,
): Promise<SubscriptionEmailResult> {
  const unsubscribeUrl = createUnsubscribeUrl(input.email, input.locale);
  const token = createGuideAccessToken(input.leadMagnetSlug);
  const localeQuery = input.locale === "en" ? "&locale=en" : "";
  const downloadUrl = absoluteUrl(
    `/api/guides/${input.leadMagnetSlug}/pdf?token=${encodeURIComponent(token)}${localeQuery}`,
  );

  let guideSent = false;
  let welcomeSent = false;

  const guide = buildGuideDeliveryEmail({
    locale: input.locale,
    leadMagnetSlug: input.leadMagnetSlug,
    downloadUrl,
    unsubscribeUrl,
  });

  if (guide) {
    const result = await sendEmail({
      to: input.email,
      subject: guide.subject,
      html: guide.html,
      text: guide.text,
      tags: [
        { name: "type", value: "guide_delivery" },
        { name: "lead_magnet", value: input.leadMagnetSlug },
      ],
    });
    guideSent = result.success;
  }

  if (input.sendWelcome) {
    const welcome = buildWelcomeEmail({
      locale: input.locale,
      unsubscribeUrl,
    });
    const result = await sendEmail({
      to: input.email,
      subject: welcome.subject,
      html: welcome.html,
      text: welcome.text,
      tags: [{ name: "type", value: "welcome" }],
    });
    welcomeSent = result.success;
  }

  return { guideSent, welcomeSent };
}
