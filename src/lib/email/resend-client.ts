import { Resend } from "resend";

let client: Resend | null = null;

export function getResendClient(): Resend {
  if (client) {
    return client;
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  client = new Resend(apiKey);
  return client;
}

export function getResendFromAddress(): string {
  const from = process.env.RESEND_FROM_EMAIL?.trim();
  if (from) {
    return from;
  }

  // Fallback for local/dev until a verified domain sender is configured.
  return "Alberto Roldán <onboarding@resend.dev>";
}
