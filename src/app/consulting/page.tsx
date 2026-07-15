import type { Metadata } from "next";
import { ConsultingContent } from "@/components/consulting/consulting-content";
import { SiteLayout } from "@/components/site/site-layout";
import { getConsultingContent } from "@/lib/i18n/content";

const content = getConsultingContent("es");

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
};

export default function ConsultingPage() {
  return (
    <SiteLayout locale="es">
      <ConsultingContent locale="es" />
    </SiteLayout>
  );
}
