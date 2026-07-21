import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email/send";

const CONTACT_TO =
  process.env.CONTACT_TO_EMAIL?.trim() || "alberto@iberiancaucasus.com";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME = 100;
const MAX_MESSAGE = 5000;

interface ContactBody {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  website?: unknown; // honeypot
}

function asString(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;

    // Honeypot: bots fill hidden fields; pretend success.
    if (asString(body.website)) {
      return NextResponse.json({ success: true });
    }

    const name = asString(body.name);
    const email = asString(body.email)?.toLowerCase();
    const message = asString(body.message);

    if (!name || name.length > MAX_NAME) {
      return NextResponse.json(
        { success: false, message: "Invalid name." },
        { status: 400 },
      );
    }

    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email." },
        { status: 400 },
      );
    }

    if (!message || message.length > MAX_MESSAGE) {
      return NextResponse.json(
        { success: false, message: "Invalid message." },
        { status: 400 },
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    const result = await sendEmail({
      to: CONTACT_TO,
      replyTo: email,
      subject: `Contact form — ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
      tags: [{ name: "type", value: "contact" }],
    });

    if (!result.success) {
      // Local/dev without Resend: still accept so the form is usable.
      if (result.message.includes("RESEND_API_KEY")) {
        console.log("[contact]", { name, email, message });
        return NextResponse.json({ success: true });
      }

      return NextResponse.json(
        { success: false, message: "Could not send your message." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, message: "Could not send your message." },
      { status: 500 },
    );
  }
}
