import { getCalEmbedUrl } from "@/lib/booking";

interface BookingCalendarProps {
  bookingUrl: string;
  title: string;
  intro?: string;
}

export function BookingCalendar({
  bookingUrl,
  title,
  intro,
}: BookingCalendarProps) {
  const embedUrl = getCalEmbedUrl(bookingUrl);

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

  // Calendly / other: anchor target for #book + open externally via the CTA
  return <div id="book" className="scroll-mt-24" />;
}
