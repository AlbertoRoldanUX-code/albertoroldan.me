import type { Metadata } from "next";
import { ResourcesContent } from "@/components/resources/resources-content";
import { SiteLayout } from "@/components/site/site-layout";

export const metadata: Metadata = {
  title: "Recursos",
  description:
    "Guías gratuitas para construir algo propio y ganar autonomía.",
};

export default function ResourcesPage() {
  return (
    <SiteLayout>
      <ResourcesContent />
    </SiteLayout>
  );
}
