import { createServiceSupabaseClient } from "@/lib/supabase/server";
import { verifyUnsubscribeToken } from "@/lib/email/unsubscribe";

export type UnsubscribeResult =
  | { success: true; email: string; alreadyUnsubscribed: boolean }
  | { success: false; message: string };

export async function unsubscribeWithToken(
  token: string,
): Promise<UnsubscribeResult> {
  const email = verifyUnsubscribeToken(token);
  if (!email) {
    return { success: false, message: "invalid_token" };
  }

  const supabase = createServiceSupabaseClient();
  if (!supabase) {
    return { success: false, message: "not_configured" };
  }

  const { data: existing, error: selectError } = await supabase
    .from("newsletter_subscribers")
    .select("email, unsubscribed_at")
    .eq("email", email)
    .maybeSingle();

  if (selectError) {
    console.error("[unsubscribe]", selectError.message);
    return { success: false, message: "db_error" };
  }

  if (!existing) {
    return { success: false, message: "not_found" };
  }

  if (existing.unsubscribed_at) {
    return { success: true, email, alreadyUnsubscribed: true };
  }

  const { error } = await supabase
    .from("newsletter_subscribers")
    .update({
      unsubscribed_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .eq("email", email);

  if (error) {
    console.error("[unsubscribe]", error.message);
    return { success: false, message: "db_error" };
  }

  return { success: true, email, alreadyUnsubscribed: false };
}
