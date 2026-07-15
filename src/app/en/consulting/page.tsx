import type { Metadata } from "next";
import { ConsultingContent } from "@/components/consulting/consulting-content";
import { SiteLayout } from "@/components/site/site-layout";
import { getConsultingContent } from "@/lib/i18n/content";

const content = getConsultingContent("en");

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
};

export default function ConsultingPageEn() {
  return (
    <SiteLayout locale="en">
      <ConsultingContent locale="en" />
    </SiteLayout>
  );
}
