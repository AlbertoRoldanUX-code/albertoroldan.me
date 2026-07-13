import type { Metadata } from "next";
import { AboutPreviewSection } from "@/components/home/about-preview-section";
import { HomeHeroSection } from "@/components/home/hero-section";
import { FreeResourceSection } from "@/components/home/free-resource-section";
import { NewsletterSection } from "@/components/home/newsletter-section";
import { SiteLayout } from "@/components/site/site-layout";
import { getSiteConfig } from "@/lib/i18n/content";

export const metadata: Metadata = {
  title: getSiteConfig("en").name,
  description: getSiteConfig("en").subtagline,
};

export default function EnHomePage() {
  return (
    <SiteLayout locale="en">
      <HomeHeroSection locale="en" />
      <FreeResourceSection locale="en" />
      <AboutPreviewSection locale="en" />
      <NewsletterSection locale="en" />
    </SiteLayout>
  );
}
