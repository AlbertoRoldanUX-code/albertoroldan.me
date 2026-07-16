import type { Metadata } from "next";
import { PaymentContent } from "@/components/consulting/payment-content";
import { SiteLayout } from "@/components/site/site-layout";
import { getConsultingContent } from "@/lib/i18n/content";

const content = getConsultingContent("es").payment;

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
  robots: { index: false, follow: false },
};

export default function ConsultingPayPage() {
  return (
    <SiteLayout locale="es">
      <PaymentContent locale="es" />
    </SiteLayout>
  );
}
