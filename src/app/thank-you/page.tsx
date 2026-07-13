import type { Metadata } from "next";
import { OnboardingSurvey } from "@/components/thank-you/onboarding-survey";
import { ThankYouMessage } from "@/components/thank-you/thank-you-message";
import { SiteLayout } from "@/components/site/site-layout";
import { getFeaturedGuide, getSiteConfig, getUi } from "@/lib/i18n/content";
import { getDefaultLeadMagnet, getLeadMagnet } from "@/lib/lead-magnets";

const siteConfig = getSiteConfig("es");
const ui = getUi("es");

export const metadata: Metadata = {
  title: ui.metadata.thankYouTitle,
  description: ui.metadata.thankYouDescription(siteConfig.brand),
  robots: { index: false, follow: false },
};

interface ThankYouPageProps {
  searchParams: Promise<{ slug?: string }>;
}

export default async function ThankYouPage({ searchParams }: ThankYouPageProps) {
  const { slug } = await searchParams;
  const leadMagnet =
    (slug ? getLeadMagnet(slug, "es") : undefined) ?? getDefaultLeadMagnet("es");

  const guideTitle = leadMagnet.title || getFeaturedGuide("es").title;
  const downloadUrl = leadMagnet.downloadUrl;

  return (
    <SiteLayout locale="es">
      <section className="px-6 py-14 md:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[64rem] gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          <ThankYouMessage
            guideTitle={guideTitle}
            downloadUrl={downloadUrl}
            downloadFilename={downloadUrl ? `${leadMagnet.slug}.pdf` : undefined}
            locale="es"
          />
          <OnboardingSurvey locale="es" />
        </div>
      </section>
    </SiteLayout>
  );
}
