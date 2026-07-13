import Image from "next/image";
import { getSiteConfig, getThankYouContent, getUi } from "@/lib/i18n/content";
import type { Locale } from "@/lib/i18n/config";

interface ThankYouMessageProps {
  guideTitle: string;
  downloadUrl?: string;
  downloadFilename?: string;
  locale?: Locale;
}

export function ThankYouMessage({
  guideTitle,
  downloadUrl,
  downloadFilename,
  locale = "es",
}: ThankYouMessageProps) {
  const thankYouContent = getThankYouContent(locale);
  const siteConfig = getSiteConfig(locale);
  const ui = getUi(locale);

  return (
    <div className="max-w-[30rem]">
      <p className="font-sans text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
        {thankYouContent.eyebrow}
      </p>

      <h1 className="mt-5 font-serif text-[2.35rem] leading-[1.15] tracking-tight text-balance md:text-[2.75rem]">
        {thankYouContent.headline}
      </h1>

      <div className="mt-7 space-y-5 font-serif text-[1.05rem] leading-[1.75] text-foreground/90 md:text-[1.1rem] md:leading-[1.7]">
        <p>
          {ui.thankYou.emailPrefix(thankYouContent.emailArrival)}{" "}
          <em>{guideTitle}</em> {ui.thankYou.emailSuffix}{" "}
          <mark className="rounded-sm bg-[#f5efd6] px-1 py-0.5 text-foreground dark:bg-amber-900/45 dark:text-foreground">
            {thankYouContent.highlight}
          </mark>
        </p>

        {downloadUrl ? (
          <p>
            <a
              href={downloadUrl}
              download={downloadFilename}
              className="underline decoration-foreground/30 underline-offset-[5px] transition-colors hover:decoration-foreground"
            >
              {thankYouContent.pdfLinkLabel}
            </a>
          </p>
        ) : null}

        <p>{thankYouContent.newsletterNote}</p>
      </div>

      <div className="mt-10 flex flex-col items-start gap-4">
        <div className="relative size-14 overflow-hidden rounded-full bg-muted md:size-16">
          <Image
            src={siteConfig.avatar}
            alt={siteConfig.name}
            fill
            className="object-cover"
            sizes="64px"
          />
        </div>
        <p className="font-serif text-[1.65rem] italic tracking-tight md:text-[1.85rem]">
          {thankYouContent.signature}
        </p>
      </div>
    </div>
  );
}
