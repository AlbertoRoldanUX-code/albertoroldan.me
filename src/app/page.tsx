import type { Metadata } from "next";
import { AboutPreviewSection } from "@/components/home/about-preview-section";
import {
  HomeHeroSection,
  TestimonialsSection,
} from "@/components/home/hero-section";
import { EssayListSection } from "@/components/home/essay-list-section";
import { FreeResourceSection } from "@/components/home/free-resource-section";
import { NewsletterSection } from "@/components/home/newsletter-section";
import { SiteLayout } from "@/components/site/site-layout";
import {
  popularEssays,
  recentEssays,
  siteConfig,
} from "@/data/home";

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
      <EssayListSection label="Ensayos más populares" essays={popularEssays} />
      <EssayListSection
        label="Ensayos recientes"
        essays={recentEssays}
        showArchiveLink
      />
      <AboutPreviewSection />
      <NewsletterSection />
    </SiteLayout>
  );
}
