import type { Metadata } from "next";
import { AboutPreviewSection } from "@/components/home/about-preview-section";
import {
  HomeHeroSection,
  TestimonialsSection,
} from "@/components/home/hero-section";
import { FreeResourceSection } from "@/components/home/free-resource-section";
import { NewsletterSection } from "@/components/home/newsletter-section";
import { SiteLayout } from "@/components/site/site-layout";
import { siteConfig } from "@/data/home";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.subtagline,
};

export default function HomePage() {
  return (
    <SiteLayout>
      <HomeHeroSection />
      <TestimonialsSection />
      <FreeResourceSection />
      <AboutPreviewSection />
      <NewsletterSection />
    </SiteLayout>
  );
}
