import { BookCallButton } from "@/components/consulting/book-call-button";
import { BookingCalendar } from "@/components/consulting/booking-calendar";
import { FadeIn } from "@/components/vault/fade-in";
import { getConsultingContent } from "@/lib/i18n/content";
import { getBookingUrl } from "@/lib/booking";
import type { Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

interface ConsultingContentProps {
  locale?: Locale;
  /** Home: less top padding so it sits as a section. */
  asSection?: boolean;
}

export function ConsultingContent({
  locale = "es",
  asSection = false,
}: ConsultingContentProps) {
  const content = getConsultingContent(locale);
  const bookingUrl = getBookingUrl();

  return (
    <section
      className={cn(
        "px-6",
        asSection
          ? "border-t border-border/60 py-14 md:py-20"
          : "pt-14 pb-20 md:pt-20 md:pb-28",
      )}
    >
      <div className="mx-auto max-w-[36rem]">
        <FadeIn>
          <p className="font-sans text-[11px] font-semibold tracking-[0.25em] text-foreground uppercase">
            {content.title}
          </p>
        </FadeIn>

        <FadeIn delay={0.05}>
          {asSection ? (
            <h2 className="mt-6 font-serif text-[1.75rem] leading-tight tracking-[-0.02em] text-balance md:text-[2.25rem]">
              {content.headline}
            </h2>
          ) : (
            <h1 className="mt-6 font-serif text-[2rem] leading-tight tracking-[-0.02em] text-balance md:text-[2.75rem]">
              {content.headline}
            </h1>
          )}
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-5 font-serif text-lg leading-[1.7] text-muted-foreground md:text-[1.2rem] md:leading-[1.65]">
            {content.body}
          </p>
        </FadeIn>

        <FadeIn delay={0.12}>
          <p className="mt-8 font-serif text-lg leading-[1.65] md:text-[1.15rem]">
            {content.focus}
          </p>
        </FadeIn>

        <FadeIn delay={0.14}>
          <p className="mt-8 font-sans text-sm text-muted-foreground">
            {content.examplesLabel}
          </p>
          <ul className="mt-3 space-y-2 font-serif text-lg leading-[1.6] md:text-[1.15rem]">
            {content.examples.map((example) => (
              <li key={example} className="flex gap-2.5">
                <span className="text-muted-foreground" aria-hidden>
                  •
                </span>
                <span>{example}</span>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.16}>
          <p className="mt-10 font-serif text-3xl tracking-[-0.02em] md:text-[2.25rem]">
            {content.price}
          </p>
          <ul className="mt-3 space-y-1 font-sans text-sm leading-relaxed text-muted-foreground">
            {content.priceDetails.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.18} className="mt-8">
          <BookCallButton
            label={content.cta}
            emailSubject={content.emailSubject}
            bookingUrl={bookingUrl}
            locale={locale}
            linkToConsultingPage={asSection}
          />
        </FadeIn>
      </div>

      {!asSection && bookingUrl ? (
        <div className="mx-auto max-w-[45rem]">
          <FadeIn delay={0.2}>
            <BookingCalendar
              bookingUrl={bookingUrl}
              title={content.cta}
              intro={content.bookingIntro}
            />
          </FadeIn>
        </div>
      ) : null}
    </section>
  );
}
