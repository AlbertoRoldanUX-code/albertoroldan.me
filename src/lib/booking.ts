import type { Locale } from "@/lib/i18n/config";

/**
 * Public booking URL (Cal.com or Calendly).
 * Example: https://cal.com/tu-usuario/strategy-session
 */
export function getBookingUrl(): string | undefined {
  const url = process.env.NEXT_PUBLIC_BOOKING_URL?.trim();
  return url || undefined;
}

/** Extract Cal.com `user/event` path from a full URL, if applicable. */
export function getCalLink(bookingUrl: string): string | undefined {
  try {
    const parsed = new URL(bookingUrl);
    if (!/(^|\.)cal\.com$/i.test(parsed.hostname)) return undefined;
    const path = parsed.pathname.replace(/^\/+|\/+$/g, "");
    return path || undefined;
  } catch {
    return undefined;
  }
}

/** Locale for Cal.com UI when embedded. */
export function getCalUiLocale(locale: Locale): string {
  return locale === "en" ? "en" : "es";
}

export function getCalEmbedUrl(
  bookingUrl: string,
  locale: Locale = "es",
): string | undefined {
  const calLink = getCalLink(bookingUrl);
  if (!calLink) return undefined;

  try {
    const parsed = new URL(bookingUrl);
    // Prefer app.cal.com for embeds (cal.com rewrites here)
    if (parsed.hostname === "cal.com") {
      parsed.hostname = "app.cal.com";
    }
    parsed.searchParams.set("embed", "true");
    parsed.searchParams.set("layout", "month_view");
    parsed.searchParams.set("ui.lang", getCalUiLocale(locale));
    return parsed.toString();
  } catch {
    return `https://app.cal.com/${calLink}?embed=true&layout=month_view`;
  }
}
