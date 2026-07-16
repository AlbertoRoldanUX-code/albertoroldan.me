import type { Metadata } from "next";
import { AboutContent } from "@/components/about/about-content";
import { SiteLayout } from "@/components/site/site-layout";
import { getUi } from "@/lib/i18n/content";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: getUi("en").metadata.aboutTitle,
  description: getUi("en").metadata.aboutDescription,
  path: "/about",
  locale: "en",
});

export default function EnAboutPage() {
  return (
    <SiteLayout locale="en">
      <AboutContent locale="en" />
    </SiteLayout>
  );
}
