import { ExpertProfile } from "@/components/consulting/expert-profile";
import { BookingCalendar } from "@/components/consulting/booking-calendar";
import { ConsultingFaq } from "@/components/consulting/consulting-faq";
import { FadeIn } from "@/components/vault/fade-in";
import { getConsultingContent } from "@/lib/i18n/content";
import { getBookingUrl } from "@/lib/booking";
import type { Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";

interface ConsultingContentProps {
  locale?: Locale;
  /** Home: less top padding so it sits as a section. */
  asSection?: boolean;
}

export function ConsultingContent({
  locale = "en",
  asSection = false,
}: ConsultingContentProps) {
  const content = getConsultingContent(locale);
  const bookingUrl = getBookingUrl();

  return (
    <>
      <ExpertProfile
        content={content}
        locale={locale}
        bookingUrl={bookingUrl}
        asSection={asSection}
      />

      {!asSection ? (
        <div className="border-t border-border/60 px-6 pb-20 md:pb-28">
          <div className="mx-auto max-w-[45rem]">
            {bookingUrl ? (
              <FadeIn delay={0.05}>
                <BookingCalendar
                  bookingUrl={bookingUrl}
                  title={content.cta}
                  intro={content.bookingIntro}
                  locale={locale}
                  payHref={localizedPath("/consulting/pay", locale)}
                />
              </FadeIn>
            ) : null}

            <ConsultingFaq
              heading={content.faq.heading}
              items={content.faq.items}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
