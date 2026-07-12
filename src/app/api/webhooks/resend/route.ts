import { NextResponse } from "next/server";
import {
  processResendReceivedEmail,
  verifyResendWebhook,
} from "@/lib/reference-emails/resend-inbound";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const payload = await request.text();

  try {
    const event = verifyResendWebhook({
      payload,
      headers: request.headers,
    });

    const result = await processResendReceivedEmail(event);

    return NextResponse.json({ ok: true, ...result });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Webhook processing failed.";
    console.error("[api/webhooks/resend]", message);

    const isSignatureError =
      /signature|svix|invalid|missing svix/i.test(message);

    return NextResponse.json(
      { ok: false, message },
      { status: isSignatureError ? 400 : 500 },
    );
  }
}
