import type { Metadata } from "next";
import { PrivacyContent } from "@/components/privacy/privacy-content";
import { SiteLayout } from "@/components/site/site-layout";
import { getUi } from "@/lib/i18n/content";

const ui = getUi("es");

export const metadata: Metadata = {
  title: ui.privacy.title,
  description: ui.privacy.description,
};

export default function PrivacyPage() {
  return (
    <SiteLayout locale="es">
      <PrivacyContent locale="es" />
    </SiteLayout>
  );
}
