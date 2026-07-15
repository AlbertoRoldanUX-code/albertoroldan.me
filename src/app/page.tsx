import type { Metadata } from "next";
import { AboutPreviewSection } from "@/components/home/about-preview-section";
import { ConsultingContent } from "@/components/consulting/consulting-content";
import { HomeHeroSection } from "@/components/home/hero-section";
import { FreeResourceSection } from "@/components/home/free-resource-section";
import { NewsletterSection } from "@/components/home/newsletter-section";
import { SiteLayout } from "@/components/site/site-layout";
import { getSiteConfig } from "@/lib/i18n/content";

export const metadata: Metadata = {
  title: getSiteConfig("es").name,
  description: getSiteConfig("es").subtagline,
};

export default function HomePage() {
  return (
    <SiteLayout locale="es">
      <HomeHeroSection locale="es" />
      <FreeResourceSection locale="es" />
      <AboutPreviewSection locale="es" />
      <ConsultingContent locale="es" asSection />
      <NewsletterSection locale="es" />
    </SiteLayout>
  );
}
