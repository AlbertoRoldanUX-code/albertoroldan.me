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

const siteConfig = getSiteConfig("es");

export const metadata: Metadata = buildPageMetadata({
  title: "Alberto Roldán — Construye un negocio propio",
  description: siteConfig.subtagline,
  path: "/",
  locale: "es",
});

export default function EsHomePage() {
  return (
    <SiteLayout locale="es">
      <HomeHeroSection locale="es" />
      <AuthorityBand locale="es" />
      <StorySection locale="es" />
      <PortraitBreak locale="es" />
      <FreeResourceSection locale="es" />
      <PrinciplesSection locale="es" />
      <HomeConsultingSection locale="es" />
      <NewsletterSection locale="es" />
    </SiteLayout>
  );
}
