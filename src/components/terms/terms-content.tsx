import { LegalDocumentContent } from "@/components/legal/legal-document-content";
import { getUi } from "@/lib/i18n/content";
import type { Locale } from "@/lib/i18n/config";
import type { PrivacyContentData } from "@/data/privacy-types";

interface TermsContentProps {
  locale?: Locale;
}

export function TermsContent({ locale = "es" }: TermsContentProps) {
  const terms = getUi(locale).terms as PrivacyContentData;

  return <LegalDocumentContent content={terms} />;
}
