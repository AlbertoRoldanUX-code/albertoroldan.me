import type { Metadata } from "next";
import { AboutPreviewSection } from "@/components/home/about-preview-section";
import { ConsultingContent } from "@/components/consulting/consulting-content";
import { HomeHeroSection } from "@/components/home/hero-section";
import { FreeResourceSection } from "@/components/home/free-resource-section";
import { NewsletterSection } from "@/components/home/newsletter-section";
import { SiteLayout } from "@/components/site/site-layout";
import { getSiteConfig } from "@/lib/i18n/content";
import { buildPageMetadata } from "@/lib/metadata";

const siteConfig = getSiteConfig("en");

export const metadata: Metadata = buildPageMetadata({
  title: "Alberto Roldán - Work, money, and freedom",
  description: siteConfig.subtagline,
  path: "/",
  locale: "en",
});

export default function HomePage() {
  return (
    <SiteLayout locale="en">
      <HomeHeroSection locale="en" />
      <FreeResourceSection locale="en" />
      <AboutPreviewSection locale="en" />
      <ConsultingContent locale="en" asSection />
      <NewsletterSection locale="en" />
    </SiteLayout>
  );
}
