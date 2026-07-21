import { EmailForm } from "@/components/vault/email-form";
import { FadeIn } from "@/components/vault/fade-in";
import { getFooterCta, getSiteConfig } from "@/lib/i18n/content";
import type { Locale } from "@/lib/i18n/config";

interface NewsletterSectionProps {
  locale?: Locale;
}

export function NewsletterSection({ locale = "en" }: NewsletterSectionProps) {
  const footerCta = getFooterCta(locale);
  const siteConfig = getSiteConfig(locale);

  return (
    <section className="bg-[#111111] px-6 py-20 text-[#f5f5f4] md:py-28">
      <div className="mx-auto max-w-[42rem] text-center">
        <FadeIn>
          <h2 className="font-serif text-[2.25rem] leading-[1.1] tracking-[-0.03em] md:text-[3.25rem]">
            {footerCta.headline}
          </h2>
        </FadeIn>

        <FadeIn delay={0.08}>
          <p className="mx-auto mt-5 max-w-[30rem] font-sans text-base text-white/65 md:text-lg">
            {footerCta.subheadline}
          </p>
        </FadeIn>

        <FadeIn delay={0.14} className="mt-10 md:mt-12 [&_input]:border-white/20 [&_input]:bg-white/5 [&_input]:text-white [&_input]:placeholder:text-white/40 [&_button]:bg-white [&_button]:text-black [&_p]:text-white/45">
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
