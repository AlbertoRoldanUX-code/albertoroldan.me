"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { getCalEmbedUrl } from "@/lib/booking";
import {
  buildPayHrefWithAccess,
  markBookingAccess,
} from "@/lib/booking-access";
import type { Locale } from "@/lib/i18n/config";

interface BookingCalendarProps {
  bookingUrl: string;
  title: string;
  intro?: string;
  locale?: Locale;
  /** Post-booking payment page (not shown as a pre-booking CTA). */
  payHref?: string;
}

function isCalOrigin(origin: string): boolean {
  try {
    const host = new URL(origin).hostname;
    return /(^|\.)cal\.com$/i.test(host);
  } catch {
    return false;
  }
}

function isBookingSuccessfulMessage(data: unknown): boolean {
  if (!data) return false;

  if (typeof data === "string") {
    return /bookingSuccessful/i.test(data);
  }

  if (typeof data !== "object") return false;

  const record = data as Record<string, unknown>;

  if (typeof record.type === "string" && /bookingSuccessful/i.test(record.type)) {
    return true;
  }

  if (
    typeof record.fullType === "string" &&
    /bookingSuccessful/i.test(record.fullType)
  ) {
    return true;
  }

  if (
    typeof record.method === "string" &&
    /bookingSuccessful/i.test(record.method)
  ) {
    return true;
  }

  if (record.detail && typeof record.detail === "object") {
    const detail = record.detail as Record<string, unknown>;
    if (typeof detail.type === "string" && /bookingSuccessful/i.test(detail.type)) {
      return true;
    }
  }

  try {
    return /bookingSuccessful/i.test(JSON.stringify(data));
  } catch {
    return false;
  }
}

function extractBookingTimes(data: unknown): {
  startTime?: string;
  attendeeStartTime?: string;
} {
  if (!data || typeof data !== "object") return {};

  const record = data as Record<string, unknown>;
  const candidates: unknown[] = [record];

  if (record.data && typeof record.data === "object") candidates.push(record.data);
  if (record.detail && typeof record.detail === "object") {
    const detail = record.detail as Record<string, unknown>;
    candidates.push(detail);
    if (detail.data && typeof detail.data === "object") candidates.push(detail.data);
  }
  if (record.arg && typeof record.arg === "object") candidates.push(record.arg);

  for (const candidate of candidates) {
    if (!candidate || typeof candidate !== "object") continue;
    const row = candidate as Record<string, unknown>;
    const startTime =
      typeof row.startTime === "string"
        ? row.startTime
        : typeof row.start === "string"
          ? row.start
          : undefined;
    const attendeeStartTime =
      typeof row.attendeeStartTime === "string" ? row.attendeeStartTime : undefined;
    if (startTime || attendeeStartTime) {
      return { startTime, attendeeStartTime };
    }
  }

  return {};
}

export function BookingCalendar({
  bookingUrl,
  title,
  intro,
  locale = "es",
  payHref,
}: BookingCalendarProps) {
  const embedUrl = getCalEmbedUrl(bookingUrl, locale);
  const router = useRouter();
  const redirected = useRef(false);

  useEffect(() => {
    if (!payHref) return;

    const goToPay = (data?: unknown) => {
      if (redirected.current) return;
      redirected.current = true;
      const times = data ? extractBookingTimes(data) : {};
      markBookingAccess(times);
      router.push(buildPayHrefWithAccess(payHref, times));
    };

    const onMessage = (event: MessageEvent) => {
      if (!isCalOrigin(event.origin)) return;
      if (!isBookingSuccessfulMessage(event.data)) return;
      goToPay(event.data);
    };

    const onCalEvent = (event: Event) => {
      goToPay((event as CustomEvent).detail);
    };

    window.addEventListener("message", onMessage);
    window.addEventListener("CAL::bookingSuccessfulV2", onCalEvent);
    window.addEventListener("CAL::bookingSuccessful", onCalEvent);

    return () => {
      window.removeEventListener("message", onMessage);
      window.removeEventListener("CAL::bookingSuccessfulV2", onCalEvent);
      window.removeEventListener("CAL::bookingSuccessful", onCalEvent);
    };
  }, [payHref, router]);

  if (embedUrl) {
    return (
      <div id="book" className="mt-14 scroll-mt-24 md:mt-16">
        {intro ? (
          <p className="mb-5 font-sans text-sm text-muted-foreground md:mb-6">
            {intro}
          </p>
        ) : null}
        <div className="mx-auto max-w-[45rem] overflow-hidden rounded-md border border-border/60 bg-card">
          <iframe
            src={embedUrl}
            title={title}
            className="h-[min(44rem,85vh)] w-full border-0"
            loading="lazy"
            allow="payment *"
          />
        </div>
      </div>
    );
  }

  return <div id="book" className="scroll-mt-24" />;
}
