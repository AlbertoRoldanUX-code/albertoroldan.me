import Image from "next/image";
import { NewsletterSection } from "@/components/home/newsletter-section";
import { getAboutContent } from "@/lib/i18n/content";
import type { Locale } from "@/lib/i18n/config";

interface AboutContentProps {
  locale?: Locale;
}

export function AboutContent({ locale = "es" }: AboutContentProps) {
  const { greeting, avatar, signature, intro, writingHelp } =
    getAboutContent(locale);

  return (
    <>
      <section className="px-6 pt-14 pb-16 md:pt-20 md:pb-24">
        <div className="mx-auto max-w-[36rem] text-center">
          <h1 className="font-serif text-[2.25rem] leading-tight tracking-[-0.02em] md:text-[2.75rem]">
            {greeting}
          </h1>

          <div className="relative mx-auto mt-10 aspect-square w-full max-w-[14rem] overflow-hidden rounded-sm bg-muted md:mt-12">
            <Image
              src={avatar}
              alt="Alberto Roldán"
              fill
              className="object-cover"
              sizes="224px"
              priority
            />
          </div>

          <div className="mt-10 space-y-5 text-left font-serif text-lg leading-[1.75] md:mt-12 md:text-[1.2rem] md:leading-[1.7]">
            {intro.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>

          <p
            className="mt-10 font-serif text-[1.75rem] italic tracking-tight md:text-[2rem]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {signature}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[36rem] border-t border-border/60 px-6" />

      <section className="px-6 py-14 md:py-20">
        <div className="mx-auto max-w-[36rem]">
          <h2 className="font-serif text-[1.75rem] leading-tight tracking-[-0.02em] md:text-[2rem]">
            {writingHelp.title}
          </h2>

          <p className="mt-5 font-serif text-lg leading-[1.75] md:text-[1.2rem] md:leading-[1.7]">
            {writingHelp.intro}
          </p>

          <ul className="mt-6 space-y-4 font-serif text-lg leading-[1.75] md:text-[1.2rem] md:leading-[1.7]">
            {writingHelp.benefits.map((benefit) => (
              <li key={benefit.highlight} className="flex gap-2">
                <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-foreground" />
                <span>
                  {benefit.before}
                  <span className="underline decoration-foreground/30 underline-offset-4">
                    {benefit.highlight}
                  </span>
                  {benefit.after}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-8 font-serif text-lg leading-[1.75] md:text-[1.2rem] md:leading-[1.7]">
            {writingHelp.outro}
          </p>
        </div>
      </section>

      <NewsletterSection locale={locale} />
    </>
  );
}
