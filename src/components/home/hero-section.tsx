import { EmailForm } from "@/components/vault/email-form";
import { FadeIn } from "@/components/vault/fade-in";
import { getSiteConfig } from "@/lib/i18n/content";
import type { Locale } from "@/lib/i18n/config";

interface HomeHeroSectionProps {
  locale?: Locale;
}

export function HomeHeroSection({ locale = "es" }: HomeHeroSectionProps) {
  const siteConfig = getSiteConfig(locale);

  return (
    <section className="px-6 pt-14 pb-16 md:pt-20 md:pb-24">
      <div className="mx-auto max-w-[42rem] text-center">
        <FadeIn>
          <h1 className="font-serif text-[2.35rem] leading-[1.12] tracking-[-0.02em] text-balance md:text-[3.35rem] md:leading-[1.08]">
            {siteConfig.tagline}
          </h1>
        </FadeIn>

        <FadeIn delay={0.08}>
          <p className="mx-auto mt-6 max-w-[34rem] font-sans text-base leading-relaxed text-muted-foreground md:mt-7 md:text-lg">
            {siteConfig.subtagline}
          </p>
        </FadeIn>

        <FadeIn delay={0.14} className="mt-10 md:mt-12">
          <EmailForm
            slug={siteConfig.newsletter.leadMagnetSlug}
            placeholder={siteConfig.newsletter.placeholder}
            buttonText={siteConfig.newsletter.buttonText}
            disclaimer={siteConfig.newsletter.disclaimer}
            locale={locale}
          />
        </FadeIn>
      </div>
    </section>
  );
}
