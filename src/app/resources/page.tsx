import type { Metadata } from "next";
import { ResourcesContent } from "@/components/resources/resources-content";
import { SiteLayout } from "@/components/site/site-layout";

export const metadata: Metadata = {
  title: "Recursos",
  description:
    "Guías gratuitas y recursos para construir algo propio.",
};

export default function ResourcesPage() {
  return (
    <SiteLayout>
      <ResourcesContent />
    </SiteLayout>
  );
}
