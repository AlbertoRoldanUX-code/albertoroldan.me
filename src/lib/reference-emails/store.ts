import { createServiceSupabaseClient } from "@/lib/supabase/server";
import type { ReferenceEmailInsert } from "./types";

export type StoreReferenceEmailResult =
  | { success: true; id: string }
  | { success: false; message: string };

/**
 * Upserts a reference email by Resend email id (idempotent retries).
 */
export async function storeReferenceEmail(
  email: ReferenceEmailInsert,
): Promise<StoreReferenceEmailResult> {
  const supabase = createServiceSupabaseClient();

  if (!supabase) {
    return {
      success: false,
      message: "Supabase credentials are not configured.",
    };
  }

  const { data, error } = await supabase
    .from("reference_emails")
    .upsert(
      {
        source: email.source,
        resend_email_id: email.resendEmailId,
        message_id: email.messageId,
        from_address: email.fromAddress,
        to_addresses: email.toAddresses,
        subject: email.subject,
        text_body: email.textBody,
        html_body: email.htmlBody,
        headers: email.headers,
        received_at: email.receivedAt,
      },
      { onConflict: "resend_email_id" },
    )
    .select("id")
    .single();

  if (error) {
    console.error("[storeReferenceEmail]", error.message);
    return {
      success: false,
      message: error.message,
    };
  }

  return { success: true, id: data.id as string };
}

const JUSTIN_SENDER = "hello@justinwelsh.me";
const JUSTIN_DOMAIN = "justinwelsh.me";

/**
 * Accepts emails that look like Justin Welsh originals, including Gmail forwards
 * where the envelope From may be your own address.
 */
export function isJustinWelshEmail(input: {
  fromAddress: string;
  headers: Record<string, string> | null;
  subject: string | null;
  textBody: string | null;
  htmlBody: string | null;
}): boolean {
  const haystack = [
    input.fromAddress,
    input.headers?.from,
    input.headers?.["reply-to"],
    input.headers?.["x-original-from"],
    input.headers?.["x-google-original-from"],
    input.subject,
    input.textBody,
    input.htmlBody,
  ]
    .filter(Boolean)
    .join("\n")
    .toLowerCase();

  return (
    haystack.includes(JUSTIN_SENDER) || haystack.includes(JUSTIN_DOMAIN)
  );
}
