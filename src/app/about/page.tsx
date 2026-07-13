import type { Metadata } from "next";
import { AboutContent } from "@/components/about/about-content";
import { SiteLayout } from "@/components/site/site-layout";
import { getAboutContent, getUi } from "@/lib/i18n/content";

export const metadata: Metadata = {
  title: getUi("es").metadata.aboutTitle,
  description: getAboutContent("es").intro[0],
};

export default function AboutPage() {
  return (
    <SiteLayout locale="es">
      <AboutContent locale="es" />
    </SiteLayout>
  );
}
