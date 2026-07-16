import type { Locale } from "@/lib/i18n/config";

/**
 * Build a human payment reference from Cal.com redirect query params when present.
 * Example: "Sesión estratégica · 16 julio · 10:00"
 */
export function formatPaymentReference(options: {
  locale: Locale;
  sessionLabel: string;
  fallbackReference?: string;
  startTime?: string | null;
  attendeeStartTime?: string | null;
}): string {
  const raw = options.attendeeStartTime || options.startTime;
  const base = options.fallbackReference?.trim() || options.sessionLabel;

  if (!raw) return base;

  const date = new Date(raw);
  if (Number.isNaN(date.getTime())) return base;

  const tag = options.locale === "en" ? "en-GB" : "es-ES";
  const datePart = new Intl.DateTimeFormat(tag, {
    day: "numeric",
    month: "long",
  }).format(date);
  const timePart = new Intl.DateTimeFormat(tag, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);

  return `${options.sessionLabel} · ${datePart} · ${timePart}`;
}
