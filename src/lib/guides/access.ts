import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const GUIDE_ACCESS_COOKIE = "guide_access";

/** Access lasts 7 days after opt-in. */
const ACCESS_TTL_SECONDS = 60 * 60 * 24 * 7;

function getSigningSecret(): string {
  const secret =
    process.env.GUIDE_ACCESS_SECRET ?? process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (secret) {
    return secret;
  }

  if (process.env.NODE_ENV === "development") {
    return "dev-guide-access-secret";
  }

  throw new Error(
    "GUIDE_ACCESS_SECRET (or SUPABASE_SERVICE_ROLE_KEY) is required to protect guide downloads.",
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

/** Cookie value: `slug.exp.signature` */
export function createGuideAccessToken(slug: string, now = Date.now()): string {
  const exp = Math.floor(now / 1000) + ACCESS_TTL_SECONDS;
  const payload = `${slug}.${exp}`;
  return `${payload}.${sign(payload)}`;
}

export function verifyGuideAccessToken(
  token: string,
  slug: string,
  now = Date.now(),
): boolean {
  const parts = token.split(".");
  if (parts.length !== 3) {
    return false;
  }

  const [tokenSlug, expRaw, signature] = parts;
  if (!tokenSlug || !expRaw || !signature || tokenSlug !== slug) {
    return false;
  }

  const exp = Number(expRaw);
  if (!Number.isFinite(exp) || exp * 1000 < now) {
    return false;
  }

  const payload = `${tokenSlug}.${expRaw}`;
  return safeEqual(signature, sign(payload));
}

export function guideAccessCookieOptions(maxAge = ACCESS_TTL_SECONDS) {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge,
  };
}

export async function hasGuideAccess(slug: string): Promise<boolean> {
  const jar = await cookies();
  const token = jar.get(GUIDE_ACCESS_COOKIE)?.value;
  if (!token) {
    return false;
  }
  return verifyGuideAccessToken(token, slug);
}
