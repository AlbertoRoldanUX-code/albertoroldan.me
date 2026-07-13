import type { Metadata } from "next";
import { ResourcesContent } from "@/components/resources/resources-content";
import { SiteLayout } from "@/components/site/site-layout";
import { getUi } from "@/lib/i18n/content";

const ui = getUi("en");

export const metadata: Metadata = {
  title: ui.metadata.resourcesTitle,
  description: ui.metadata.resourcesDescription,
};

export default function EnResourcesPage() {
  return (
    <SiteLayout locale="en">
      <ResourcesContent locale="en" />
    </SiteLayout>
  );
}
