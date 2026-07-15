"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { getCalEmbedUrl } from "@/lib/booking";
import { localizedPath } from "@/lib/i18n/paths";
import type { Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

const CONTACT_EMAIL = "alberto@iberiancaucasus.com";

interface BookCallButtonProps {
  label: string;
  emailSubject: string;
  bookingUrl?: string;
  locale?: Locale;
  /** Home section: go to consulting page #book. */
  linkToConsultingPage?: boolean;
  className?: string;
}

export function BookCallButton({
  label,
  emailSubject,
  bookingUrl,
  locale = "es",
  linkToConsultingPage = false,
  className,
}: BookCallButtonProps) {
  const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(emailSubject)}`;
  const hasInlineEmbed = Boolean(bookingUrl && getCalEmbedUrl(bookingUrl));

  if (linkToConsultingPage && bookingUrl) {
    return (
      <Link
        href={`${localizedPath("/consulting", locale)}#book`}
        className={cn(buttonVariants({ size: "lg" }), className)}
      >
        {label}
      </Link>
    );
  }

  if (bookingUrl && hasInlineEmbed && !linkToConsultingPage) {
    return (
      <a href="#book" className={cn(buttonVariants({ size: "lg" }), className)}>
        {label}
      </a>
    );
  }

  if (bookingUrl) {
    return (
      <a
        href={bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(buttonVariants({ size: "lg" }), className)}
      >
        {label}
      </a>
    );
  }

  return (
    <a href={mailtoHref} className={cn(buttonVariants({ size: "lg" }), className)}>
      {label}
    </a>
  );
}
