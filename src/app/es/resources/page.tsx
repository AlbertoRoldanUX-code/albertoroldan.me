import type { Metadata } from "next";
import { ResourcesContent } from "@/components/resources/resources-content";
import { SiteLayout } from "@/components/site/site-layout";
import { getUi } from "@/lib/i18n/content";
import { buildPageMetadata } from "@/lib/metadata";

const ui = getUi("es");

export const metadata: Metadata = buildPageMetadata({
  title: ui.metadata.resourcesTitle,
  description: ui.metadata.resourcesDescription,
  path: "/resources",
  locale: "es",
});

export default function ResourcesPage() {
  return (
    <SiteLayout locale="es">
      <ResourcesContent locale="es" />
    </SiteLayout>
  );
}
