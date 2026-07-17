import type { Metadata } from "next";
import { ServicePolicyContent } from "@/components/service-policy/service-policy-content";
import { SiteLayout } from "@/components/site/site-layout";
import { getUi } from "@/lib/i18n/content";
import { buildPageMetadata } from "@/lib/metadata";

const ui = getUi("en");

export const metadata: Metadata = buildPageMetadata({
  title: ui.servicePolicy.title,
  description: ui.servicePolicy.description,
  path: "/service-policy",
  locale: "en",
});

export default function EnServicePolicyPage() {
  return (
    <SiteLayout locale="en">
      <ServicePolicyContent locale="en" />
    </SiteLayout>
  );
}
