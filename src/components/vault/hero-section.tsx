import type { LeadMagnet } from "@/types/lead-magnet";
import { EmailForm } from "@/components/vault/email-form";
import { FadeIn } from "@/components/vault/fade-in";
import { GuideCover } from "@/components/vault/guide-cover";
import type { Locale } from "@/lib/i18n/config";

interface HeroSectionProps {
  data: LeadMagnet;
  locale?: Locale;
}

export function HeroSection({ data, locale = "es" }: HeroSectionProps) {
  return (
    <section className="px-6 pt-8 pb-16 md:pt-10 md:pb-24">
      <div className="mx-auto max-w-[42rem] text-center">
        <FadeIn>
          <p className="font-sans text-[11px] font-medium tracking-[0.3em] text-muted-foreground uppercase">
            {data.eyebrow}
          </p>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h1 className="mt-8 font-serif text-[2.35rem] leading-[1.12] tracking-[-0.02em] text-balance md:mt-10 md:text-[3.35rem] md:leading-[1.08]">
            {data.title}
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mx-auto mt-7 max-w-[36rem] font-serif text-lg leading-[1.65] text-foreground/85 md:mt-8 md:text-[1.35rem] md:leading-[1.6]">
            {data.subtitle}
          </p>
        </FadeIn>

        <FadeIn delay={0.15} className="mt-10 md:mt-12">
          <EmailForm
            slug={data.slug}
            placeholder={data.cta.placeholder}
            buttonText={data.cta.buttonText}
            disclaimer={data.cta.disclaimer}
            downloadUrl={data.downloadUrl}
            locale={locale}
          />
        </FadeIn>
      </div>

      <GuideCover
        className="mt-14 md:mt-20"
        image={data.coverImage}
        alt={data.coverAlt ?? data.title}
      />
    </section>
  );
}
