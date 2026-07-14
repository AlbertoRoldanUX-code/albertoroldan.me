import type { Metadata } from "next";
import { OnboardingSurvey } from "@/components/thank-you/onboarding-survey";
import { ThankYouMessage } from "@/components/thank-you/thank-you-message";
import { SiteLayout } from "@/components/site/site-layout";
import { hasGuideAccess } from "@/lib/guides/access";
import { getFeaturedGuide, getSiteConfig, getUi } from "@/lib/i18n/content";
import { getDefaultLeadMagnet, getLeadMagnet } from "@/lib/lead-magnets";

const siteConfig = getSiteConfig("en");
const ui = getUi("en");

export const metadata: Metadata = {
  title: ui.metadata.thankYouTitle,
  description: ui.metadata.thankYouDescription(siteConfig.brand),
  robots: { index: false, follow: false },
};

interface EnThankYouPageProps {
  searchParams: Promise<{ slug?: string }>;
}

export default async function EnThankYouPage({
  searchParams,
}: EnThankYouPageProps) {
  const { slug } = await searchParams;
  const leadMagnet =
    (slug ? getLeadMagnet(slug, "en") : undefined) ?? getDefaultLeadMagnet("en");

  const guideTitle = leadMagnet.title || getFeaturedGuide("en").title;
  const canDownload = await hasGuideAccess(leadMagnet.slug);
  const downloadUrl = canDownload ? leadMagnet.downloadUrl : undefined;

  return (
    <SiteLayout locale="en">
      <section className="px-6 py-14 md:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[64rem] gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          <ThankYouMessage
            guideTitle={guideTitle}
            downloadUrl={downloadUrl}
            downloadFilename={downloadUrl ? `${leadMagnet.slug}.pdf` : undefined}
            locale="en"
          />
          <OnboardingSurvey locale="en" />
        </div>
      </section>
    </SiteLayout>
  );
}
