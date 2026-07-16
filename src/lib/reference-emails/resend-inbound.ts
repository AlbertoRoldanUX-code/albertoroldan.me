import { getResendClient } from "@/lib/email/resend-client";
import {
  isJustinWelshEmail,
  storeReferenceEmail,
} from "./store";
import type { ReferenceEmailInsert } from "./types";

type ResendReceivedEvent = {
  type: string;
  created_at?: string;
  data: {
    email_id: string;
    created_at?: string;
    from?: string;
    to?: string[];
    subject?: string;
    message_id?: string;
  };
};

function normalizeHeaders(
  headers: Record<string, string> | null | undefined,
): Record<string, string> | null {
  if (!headers || Object.keys(headers).length === 0) {
    return null;
  }

  const normalized: Record<string, string> = {};
  for (const [key, value] of Object.entries(headers)) {
    normalized[key.toLowerCase()] = value;
  }
  return normalized;
}

/**
 * Verifies a Resend webhook when RESEND_WEBHOOK_SECRET is set.
 * Returns the parsed event payload.
 */
export function verifyResendWebhook(input: {
  payload: string;
  headers: Headers;
}): ResendReceivedEvent {
  const webhookSecret = process.env.RESEND_WEBHOOK_SECRET;
  const event = JSON.parse(input.payload) as ResendReceivedEvent;

  if (!webhookSecret) {
    console.warn(
      "[resend-inbound] RESEND_WEBHOOK_SECRET missing; skipping signature verification.",
    );
    return event;
  }

  const resend = getResendClient();
  const id = input.headers.get("svix-id");
  const timestamp = input.headers.get("svix-timestamp");
  const signature = input.headers.get("svix-signature");

  if (!id || !timestamp || !signature) {
    throw new Error("Missing Svix signature headers.");
  }

  return resend.webhooks.verify({
    payload: input.payload,
    headers: { id, timestamp, signature },
    webhookSecret,
  }) as ResendReceivedEvent;
}

/**
 * Fetches full inbound email content from Resend and stores Justin Welsh emails.
 */
export async function processResendReceivedEmail(
  event: ResendReceivedEvent,
): Promise<{ stored: boolean; id?: string; reason?: string }> {
  if (event.type !== "email.received") {
    return { stored: false, reason: `ignored_event:${event.type}` };
  }

  const emailId = event.data.email_id;
  if (!emailId) {
    return { stored: false, reason: "missing_email_id" };
  }

  const resend = getResendClient();
  const { data: received, error } = await resend.emails.receiving.get(emailId);

  if (error || !received) {
    console.error("[resend-inbound] Failed to fetch email", emailId, error);
    throw new Error(error?.message ?? "Failed to fetch received email.");
  }

  const headers = normalizeHeaders(
    (received.headers as Record<string, string> | null | undefined) ?? null,
  );

  const candidate: ReferenceEmailInsert = {
    source: "justin_welsh",
    resendEmailId: received.id ?? emailId,
    messageId: received.message_id ?? event.data.message_id ?? null,
    fromAddress: received.from ?? event.data.from ?? "unknown",
    toAddresses: received.to ?? event.data.to ?? [],
    subject: received.subject ?? event.data.subject ?? null,
    textBody: received.text ?? null,
    htmlBody: received.html ?? null,
    headers,
    receivedAt:
      received.created_at ??
      event.data.created_at ??
      event.created_at ??
      new Date().toISOString(),
  };

  if (!isJustinWelshEmail(candidate)) {
    console.info(
      "[resend-inbound] Skipping non-Justin email",
      candidate.fromAddress,
      candidate.subject,
    );
    return { stored: false, reason: "not_justin_welsh" };
  }

  const result = await storeReferenceEmail(candidate);
  if (!result.success) {
    throw new Error(result.message);
  }

  return { stored: true, id: result.id };
}
