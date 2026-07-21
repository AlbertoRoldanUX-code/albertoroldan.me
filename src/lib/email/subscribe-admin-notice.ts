import { sendEmail } from "./send";

const ADMIN_TO =
  process.env.CONTACT_TO_EMAIL?.trim() || "alberto@iberiancaucasus.com";

export interface SubscriptionAdminNotice {
  email: string;
  leadMagnetSlug: string;
  isNew: boolean;
  wasUnsubscribed: boolean;
}

/**
 * Notifies Alberto when someone opts into the newsletter.
 * Soft-fails (never blocks subscribe).
 */
export async function notifyAdminOfSubscription(
  input: SubscriptionAdminNotice,
): Promise<void> {
  const status = input.isNew
    ? "New subscriber"
    : input.wasUnsubscribed
      ? "Re-subscribed"
      : "Returning subscribe";

  const subject = `Newsletter — ${status}: ${input.email}`;
  const text = [
    status,
    `Email: ${input.email}`,
    `Lead magnet: ${input.leadMagnetSlug}`,
  ].join("\n");

  const html = `
    <p><strong>${status}</strong></p>
    <p><strong>Email:</strong> ${escapeHtml(input.email)}</p>
    <p><strong>Lead magnet:</strong> ${escapeHtml(input.leadMagnetSlug)}</p>
  `;

  const result = await sendEmail({
    to: ADMIN_TO,
    subject,
    text,
    html,
    replyTo: input.email,
    tags: [{ name: "type", value: "subscribe_notice" }],
  });

  if (!result.success && !result.message.includes("RESEND_API_KEY")) {
    console.error("[notifyAdminOfSubscription]", result.message);
  }
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
