import type { Locale } from "@/lib/i18n/config";
import { isValidLocale } from "@/lib/i18n/config";
import { createServiceSupabaseClient } from "@/lib/supabase/server";
import { sendEmail } from "./send";
import { buildBestPiecesEmail } from "./templates/best-pieces";
import { buildSampleEssayEmail } from "./templates/sample-essay";
import { createUnsubscribeUrl } from "./unsubscribe";

/** Hours between drip steps (Justin sends ~24h apart). */
export const DRIP_STEP_DELAY_HOURS = 24;

export interface DripProcessResult {
  step1Sent: number;
  step2Sent: number;
  errors: number;
}

type SubscriberRow = {
  email: string;
  locale: string | null;
  drip_step: number;
  welcome_sent_at: string | null;
  drip_1_sent_at: string | null;
};

function resolveLocale(value: string | null | undefined): Locale {
  return typeof value === "string" && isValidLocale(value) ? value : "es";
}

function hoursAgo(hours: number): Date {
  return new Date(Date.now() - hours * 60 * 60 * 1000);
}

function isDue(timestamp: string | null, hours: number): boolean {
  if (!timestamp) {
    return false;
  }
  return new Date(timestamp) <= hoursAgo(hours);
}

async function sendDripStep(
  email: string,
  locale: Locale,
  step: 1 | 2,
): Promise<boolean> {
  const unsubscribeUrl = createUnsubscribeUrl(email, locale);

  if (step === 1) {
    const sample = buildSampleEssayEmail({ locale, unsubscribeUrl });
    const result = await sendEmail({
      to: email,
      subject: sample.subject,
      html: sample.html,
      text: sample.text,
      tags: [
        { name: "type", value: "drip_sample_essay" },
        { name: "drip_step", value: "1" },
      ],
    });
    return result.success;
  }

  const best = buildBestPiecesEmail({ locale, unsubscribeUrl });
  const result = await sendEmail({
    to: email,
    subject: best.subject,
    html: best.html,
    text: best.text,
    tags: [
      { name: "type", value: "drip_best_pieces" },
      { name: "drip_step", value: "2" },
    ],
  });
  return result.success;
}

/**
 * Sends due post-subscribe drip emails (sample essay → best pieces).
 * Safe to run on a daily cron; respects unsubscribes.
 */
export async function processDueDripEmails(): Promise<DripProcessResult> {
  const supabase = createServiceSupabaseClient();
  if (!supabase) {
    console.warn("[drip] Supabase not configured; skipping.");
    return { step1Sent: 0, step2Sent: 0, errors: 0 };
  }

  const result: DripProcessResult = {
    step1Sent: 0,
    step2Sent: 0,
    errors: 0,
  };

  const { data: candidates, error } = await supabase
    .from("newsletter_subscribers")
    .select("email, locale, drip_step, welcome_sent_at, drip_1_sent_at")
    .is("unsubscribed_at", null)
    .lt("drip_step", 2)
    .not("welcome_sent_at", "is", null);

  if (error) {
    console.error("[drip] select", error.message);
    return { ...result, errors: 1 };
  }

  const now = new Date().toISOString();

  for (const row of (candidates ?? []) as SubscriberRow[]) {
    const locale = resolveLocale(row.locale);
    const email = row.email.trim().toLowerCase();

    try {
      if (row.drip_step === 0 && isDue(row.welcome_sent_at, DRIP_STEP_DELAY_HOURS)) {
        const sent = await sendDripStep(email, locale, 1);
        if (!sent) {
          result.errors += 1;
          continue;
        }

        const { error: updateError } = await supabase
          .from("newsletter_subscribers")
          .update({ drip_step: 1, drip_1_sent_at: now, updated_at: now })
          .eq("email", email)
          .is("unsubscribed_at", null);

        if (updateError) {
          console.error("[drip] update step1", email, updateError.message);
          result.errors += 1;
          continue;
        }

        result.step1Sent += 1;
        continue;
      }

      if (
        row.drip_step === 1 &&
        isDue(row.drip_1_sent_at, DRIP_STEP_DELAY_HOURS)
      ) {
        const sent = await sendDripStep(email, locale, 2);
        if (!sent) {
          result.errors += 1;
          continue;
        }

        const { error: updateError } = await supabase
          .from("newsletter_subscribers")
          .update({ drip_step: 2, drip_2_sent_at: now, updated_at: now })
          .eq("email", email)
          .is("unsubscribed_at", null);

        if (updateError) {
          console.error("[drip] update step2", email, updateError.message);
          result.errors += 1;
          continue;
        }

        result.step2Sent += 1;
      }
    } catch (err) {
      result.errors += 1;
      console.error(
        "[drip] send failed",
        email,
        err instanceof Error ? err.message : err,
      );
    }
  }

  return result;
}
