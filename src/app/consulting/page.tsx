import type { Metadata } from "next";
import { ConsultingContent } from "@/components/consulting/consulting-content";
import { SiteLayout } from "@/components/site/site-layout";
import { getConsultingContent } from "@/lib/i18n/content";
import { buildPageMetadata } from "@/lib/metadata";

const content = getConsultingContent("es");

export const metadata: Metadata = buildPageMetadata({
  title: content.metadata.title,
  description: content.metadata.description,
  path: "/consulting",
  locale: "es",
});

export default function ConsultingPage() {
  return (
    <SiteLayout locale="es">
      <ConsultingContent locale="es" />
    </SiteLayout>
  );
}
