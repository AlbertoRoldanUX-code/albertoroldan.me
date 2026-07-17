import { LegalDocumentContent } from "@/components/legal/legal-document-content";
import { getUi } from "@/lib/i18n/content";
import type { Locale } from "@/lib/i18n/config";
import type { PrivacyContentData } from "@/data/privacy-types";

interface PrivacyContentProps {
  locale?: Locale;
}

export function PrivacyContent({ locale = "en" }: PrivacyContentProps) {
  const privacy = getUi(locale).privacy as PrivacyContentData;

  return <LegalDocumentContent content={privacy} />;
}
