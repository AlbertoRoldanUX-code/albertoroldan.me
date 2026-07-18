import type { Metadata } from "next";
import { AuthorityBand } from "@/components/home/authority-band";
import { FreeResourceSection } from "@/components/home/free-resource-section";
import { HomeConsultingSection } from "@/components/home/home-consulting-section";
import { HomeHeroSection } from "@/components/home/hero-section";
import { NewsletterSection } from "@/components/home/newsletter-section";
import { PortraitBreak } from "@/components/home/portrait-break";
import { PrinciplesSection } from "@/components/home/principles-section";
import { StorySection } from "@/components/home/story-section";
import { SiteLayout } from "@/components/site/site-layout";
import { getSiteConfig } from "@/lib/i18n/content";
import { buildPageMetadata } from "@/lib/metadata";

const siteConfig = getSiteConfig("en");

export const metadata: Metadata = buildPageMetadata({
  title: "Alberto Roldán — Build a business you own",
  description: siteConfig.subtagline,
  path: "/",
  locale: "en",
});

export default function HomePage() {
  return (
    <SiteLayout locale="en">
      <HomeHeroSection locale="en" />
      <AuthorityBand locale="en" />
      <StorySection locale="en" />
      <PortraitBreak locale="en" />
      <FreeResourceSection locale="en" />
      <PrinciplesSection locale="en" />
      <HomeConsultingSection locale="en" />
      <NewsletterSection locale="en" />
    </SiteLayout>
  );
}
