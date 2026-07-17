import type { Metadata } from "next";
import { TermsContent } from "@/components/terms/terms-content";
import { SiteLayout } from "@/components/site/site-layout";
import { getUi } from "@/lib/i18n/content";
import { buildPageMetadata } from "@/lib/metadata";

const ui = getUi("es");

export const metadata: Metadata = buildPageMetadata({
  title: ui.terms.title,
  description: ui.terms.description,
  path: "/terms",
  locale: "es",
});

export default function TermsPage() {
  return (
    <SiteLayout locale="es">
      <TermsContent locale="es" />
    </SiteLayout>
  );
}
