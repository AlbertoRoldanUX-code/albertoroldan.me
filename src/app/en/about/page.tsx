import type { Metadata } from "next";
import { AboutContent } from "@/components/about/about-content";
import { SiteLayout } from "@/components/site/site-layout";
import { getAboutContent, getUi } from "@/lib/i18n/content";

export const metadata: Metadata = {
  title: getUi("en").metadata.aboutTitle,
  description: getAboutContent("en").intro[0],
};

export default function EnAboutPage() {
  return (
    <SiteLayout locale="en">
      <AboutContent locale="en" />
    </SiteLayout>
  );
}
