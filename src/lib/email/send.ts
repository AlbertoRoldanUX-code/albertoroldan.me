import { getResendClient, getResendFromAddress } from "./resend-client";

export interface SendEmailInput {
  to: string;
  subject: string;
  html: string;
  text: string;
  /** Optional reply-to address (e.g. contact form sender). */
  replyTo?: string;
  /** Optional tags for Resend analytics. */
  tags?: Array<{ name: string; value: string }>;
}

export type SendEmailResult =
  | { success: true; id: string }
  | { success: false; message: string };

/**
 * Sends a transactional email via Resend.
 * Fails soft when RESEND_API_KEY is missing so local subscribe still works.
 */
export async function sendEmail(
  input: SendEmailInput,
): Promise<SendEmailResult> {
  if (!process.env.RESEND_API_KEY) {
    console.warn(
      "[sendEmail] RESEND_API_KEY missing; skipping send:",
      input.subject,
    );
    return {
      success: false,
      message: "RESEND_API_KEY is not configured.",
    };
  }

  try {
    const resend = getResendClient();
    const { data, error } = await resend.emails.send({
      from: getResendFromAddress(),
      to: input.to,
      subject: input.subject,
      html: input.html,
      text: input.text,
      replyTo: input.replyTo,
      tags: input.tags,
    });

    if (error) {
      console.error("[sendEmail]", error.message);
      return { success: false, message: error.message };
    }

    return { success: true, id: data?.id ?? "unknown" };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to send email.";
    console.error("[sendEmail]", message);
    return { success: false, message };
  }
}
