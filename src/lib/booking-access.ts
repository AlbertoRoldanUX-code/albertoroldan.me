import type { Locale } from "@/lib/i18n/config";

const STORAGE_KEY = "consulting_booking_access";
const ACCESS_TTL_MS = 1000 * 60 * 60 * 48; // 48h

export type BookingAccessPayload = {
  at: number;
  startTime?: string;
  attendeeStartTime?: string;
};

export function markBookingAccess(times?: {
  startTime?: string;
  attendeeStartTime?: string;
}): void {
  if (typeof window === "undefined") return;
  const payload: BookingAccessPayload = {
    at: Date.now(),
    startTime: times?.startTime,
    attendeeStartTime: times?.attendeeStartTime,
  };
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // ignore quota / private mode
  }
}

export function readBookingAccess(): BookingAccessPayload | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as BookingAccessPayload;
    if (!parsed?.at || Date.now() - parsed.at > ACCESS_TTL_MS) {
      sessionStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function hasBookingAccessFromQuery(searchParams: URLSearchParams): boolean {
  return Boolean(
    searchParams.get("startTime") ||
      searchParams.get("attendeeStartTime") ||
      searchParams.get("uid") ||
      searchParams.get("booked") === "1",
  );
}

export function buildPayHrefWithAccess(
  payHref: string,
  times: { startTime?: string; attendeeStartTime?: string },
): string {
  try {
    const url = new URL(payHref, window.location.origin);
    url.searchParams.set("booked", "1");
    if (times.startTime) url.searchParams.set("startTime", times.startTime);
    if (times.attendeeStartTime) {
      url.searchParams.set("attendeeStartTime", times.attendeeStartTime);
    }
    return `${url.pathname}${url.search}${url.hash}`;
  } catch {
    return payHref;
  }
}

export function localizedConsultingBookPath(locale: Locale): string {
  return locale === "en" ? "/en/consulting#book" : "/consulting#book";
}
