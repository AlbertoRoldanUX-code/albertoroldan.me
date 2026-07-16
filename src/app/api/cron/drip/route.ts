import { NextResponse } from "next/server";
import { processDueDripEmails } from "@/lib/email/drip";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function isAuthorized(request: Request): boolean {
  const secret = process.env.CRON_SECRET?.trim();
  const auth = request.headers.get("authorization");

  if (secret) {
    return auth === `Bearer ${secret}`;
  }

  if (process.env.NODE_ENV === "development") {
    return true;
  }

  // Production without CRON_SECRET: only accept Vercel Cron invocations.
  return Boolean(request.headers.get("x-vercel-cron"));
}

/**
 * Daily drip processor: sample essay (~24h) then best pieces (~48h).
 * Set CRON_SECRET in Vercel so cron requests send Authorization: Bearer …
 */
export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }

  const result = await processDueDripEmails();
  return NextResponse.json({ ok: true, ...result });
}

export async function POST(request: Request) {
  return GET(request);
}
