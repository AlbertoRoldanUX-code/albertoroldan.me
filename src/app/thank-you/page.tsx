import type { Metadata } from "next";
import { OnboardingSurvey } from "@/components/thank-you/onboarding-survey";
import { ThankYouMessage } from "@/components/thank-you/thank-you-message";
import { SiteLayout } from "@/components/site/site-layout";
import { featuredGuide, siteConfig } from "@/data/home";
import { getDefaultLeadMagnet, getLeadMagnet } from "@/lib/lead-magnets";

export const metadata: Metadata = {
  title: "Ya estás dentro",
  description: `Tu guía está en camino. Mientras tanto, responde unas preguntas rápidas para mejorar ${siteConfig.brand}`,
  robots: { index: false, follow: false },
};

interface ThankYouPageProps {
  searchParams: Promise<{ slug?: string }>;
}

export default async function ThankYouPage({ searchParams }: ThankYouPageProps) {
  const { slug } = await searchParams;
  const leadMagnet =
    (slug ? getLeadMagnet(slug) : undefined) ?? getDefaultLeadMagnet();

  const guideTitle =
    leadMagnet.title || featuredGuide.title;
  const downloadUrl = leadMagnet.downloadUrl;

  return (
    <SiteLayout>
      <section className="px-6 py-14 md:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[64rem] gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          <ThankYouMessage
            guideTitle={guideTitle}
            downloadUrl={downloadUrl}
          />
          <OnboardingSurvey />
        </div>
      </section>
    </SiteLayout>
  );
}
