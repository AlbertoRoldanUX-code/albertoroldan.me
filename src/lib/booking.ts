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

export function getCalEmbedUrl(bookingUrl: string): string | undefined {
  const calLink = getCalLink(bookingUrl);
  if (!calLink) return undefined;

  try {
    const parsed = new URL(bookingUrl);
    parsed.searchParams.set("embed", "true");
    return parsed.toString();
  } catch {
    return `https://cal.com/${calLink}?embed=true`;
  }
}
