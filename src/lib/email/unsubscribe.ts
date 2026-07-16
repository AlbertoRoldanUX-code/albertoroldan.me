import { createHmac, timingSafeEqual } from "node:crypto";
import type { Locale } from "@/lib/i18n/config";
import { absoluteUrl } from "@/lib/metadata";

function getSigningSecret(): string {
  const secret =
    process.env.GUIDE_ACCESS_SECRET ?? process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (secret) {
    return secret;
  }

  if (process.env.NODE_ENV === "development") {
    return "dev-unsubscribe-secret";
  }

  throw new Error(
    "GUIDE_ACCESS_SECRET (or SUPABASE_SERVICE_ROLE_KEY) is required for unsubscribe tokens.",
  );
}

function sign(payload: string): string {
  return createHmac("sha256", getSigningSecret())
    .update(payload)
    .digest("base64url");
}

function safeEqual(a: string, b: string): boolean {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  if (left.length !== right.length) {
    return false;
  }
  return timingSafeEqual(left, right);
}

/** Token format: `email.signature` (email is base64url-encoded). */
export function createUnsubscribeToken(email: string): string {
  const normalized = email.trim().toLowerCase();
  const encoded = Buffer.from(normalized, "utf8").toString("base64url");
  return `${encoded}.${sign(encoded)}`;
}

export function verifyUnsubscribeToken(token: string): string | null {
  const parts = token.split(".");
  if (parts.length !== 2) {
    return null;
  }

  const [encoded, signature] = parts;
  if (!encoded || !signature) {
    return null;
  }

  if (!safeEqual(signature, sign(encoded))) {
    return null;
  }

  try {
    return Buffer.from(encoded, "base64url").toString("utf8").toLowerCase();
  } catch {
    return null;
  }
}

export function createUnsubscribeUrl(email: string, locale: Locale = "es"): string {
  const token = createUnsubscribeToken(email);
  const path = locale === "en" ? "/en/unsubscribe" : "/unsubscribe";
  return absoluteUrl(`${path}?token=${encodeURIComponent(token)}`);
}
