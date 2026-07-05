import type { LeadMagnet } from "@/types/lead-magnet";
import { SiteLayout } from "@/components/site/site-layout";
import { AboutSection } from "@/components/vault/about-section";
import { BenefitsSection } from "@/components/vault/benefits-section";
import { CtaSection } from "@/components/vault/cta-section";
import { HeroSection } from "@/components/vault/hero-section";

interface LeadMagnetPageProps {
  data: LeadMagnet;
}

export function LeadMagnetPage({ data }: LeadMagnetPageProps) {
  return (
    <SiteLayout>
      <HeroSection data={data} />
      <BenefitsSection
        intro={data.benefitsIntro}
        benefits={data.benefits}
      />
      <AboutSection author={data.author} />
      <CtaSection
        slug={data.slug}
        cta={data.cta}
        downloadUrl={data.downloadUrl}
      />
    </SiteLayout>
  );
}
