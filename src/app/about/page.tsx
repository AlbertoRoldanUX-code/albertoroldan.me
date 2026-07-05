import type { Metadata } from "next";
import { AboutContent } from "@/components/about/about-content";
import { SiteLayout } from "@/components/site/site-layout";
import { aboutContent } from "@/data/about";

export const metadata: Metadata = {
  title: "Sobre mí",
  description: aboutContent.intro[0],
};

export default function AboutPage() {
  return (
    <SiteLayout>
      <AboutContent />
    </SiteLayout>
  );
}
