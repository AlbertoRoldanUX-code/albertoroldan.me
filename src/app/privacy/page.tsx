import type { Metadata } from "next";
import { PrivacyContent } from "@/components/privacy/privacy-content";
import { SiteLayout } from "@/components/site/site-layout";
import { getUi } from "@/lib/i18n/content";
import { buildPageMetadata } from "@/lib/metadata";

const ui = getUi("es");

export const metadata: Metadata = buildPageMetadata({
  title: ui.privacy.title,
  description: ui.privacy.description,
  path: "/privacy",
  locale: "es",
});

export default function PrivacyPage() {
  return (
    <SiteLayout locale="es">
      <PrivacyContent locale="es" />
    </SiteLayout>
  );
}
