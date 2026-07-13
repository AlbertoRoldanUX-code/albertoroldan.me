import type { LeadMagnetCta } from "@/types/lead-magnet";
import { EmailForm } from "@/components/vault/email-form";
import { FadeIn } from "@/components/vault/fade-in";
import type { Locale } from "@/lib/i18n/config";

interface CtaSectionProps {
  slug: string;
  cta: LeadMagnetCta;
  downloadUrl?: string;
  locale?: Locale;
}

export function CtaSection({
  slug,
  cta,
  downloadUrl,
  locale = "es",
}: CtaSectionProps) {
  return (
    <section className="px-6 py-16 pb-20 md:py-24 md:pb-28">
      <div className="mx-auto max-w-[42rem] text-center">
        <FadeIn>
          <h2 className="font-serif text-[2rem] leading-tight tracking-[-0.02em] md:text-[2.75rem]">
            {cta.headline}
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-10 md:mt-12">
          <EmailForm
            slug={slug}
            placeholder={cta.placeholder}
            buttonText={cta.buttonText}
            disclaimer={cta.disclaimer}
            downloadUrl={downloadUrl}
            locale={locale}
          />
        </FadeIn>
      </div>
    </section>
  );
}
