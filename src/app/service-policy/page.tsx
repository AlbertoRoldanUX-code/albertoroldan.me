import type { Metadata } from "next";
import { ServicePolicyContent } from "@/components/service-policy/service-policy-content";
import { SiteLayout } from "@/components/site/site-layout";
import { getUi } from "@/lib/i18n/content";
import { buildPageMetadata } from "@/lib/metadata";

const ui = getUi("es");

export const metadata: Metadata = buildPageMetadata({
  title: ui.servicePolicy.title,
  description: ui.servicePolicy.description,
  path: "/service-policy",
  locale: "es",
});

export default function ServicePolicyPage() {
  return (
    <SiteLayout locale="es">
      <ServicePolicyContent locale="es" />
    </SiteLayout>
  );
}
