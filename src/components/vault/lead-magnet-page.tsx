import type { LeadMagnet } from "@/types/lead-magnet";
import { SiteLayout } from "@/components/site/site-layout";
import { AboutSection } from "@/components/vault/about-section";
import { BenefitsSection } from "@/components/vault/benefits-section";
import { CtaSection } from "@/components/vault/cta-section";
import { HeroSection } from "@/components/vault/hero-section";
import { getUi } from "@/lib/i18n/content";
import type { Locale } from "@/lib/i18n/config";

interface LeadMagnetPageProps {
  data: LeadMagnet;
  locale?: Locale;
}

export function LeadMagnetPage({ data, locale = "es" }: LeadMagnetPageProps) {
  const ui = getUi(locale);

  return (
    <SiteLayout locale={locale}>
      <HeroSection data={data} locale={locale} />
      <BenefitsSection
        title={ui.guide.benefitsTitle}
        intro={data.benefitsIntro}
        benefits={data.benefits}
      />
      <AboutSection author={data.author} />
      <CtaSection
        slug={data.slug}
        cta={data.cta}
        downloadUrl={data.downloadUrl}
        locale={locale}
      />
    </SiteLayout>
  );
}
