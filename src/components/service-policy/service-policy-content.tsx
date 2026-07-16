import { LegalDocumentContent } from "@/components/legal/legal-document-content";
import { getUi } from "@/lib/i18n/content";
import type { Locale } from "@/lib/i18n/config";
import type { PrivacyContentData } from "@/data/privacy-types";

interface ServicePolicyContentProps {
  locale?: Locale;
}

export function ServicePolicyContent({
  locale = "es",
}: ServicePolicyContentProps) {
  const servicePolicy = getUi(locale).servicePolicy as PrivacyContentData;

  return <LegalDocumentContent content={servicePolicy} />;
}
