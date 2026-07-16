import { Suspense } from "react";
import { SiteLayout } from "@/components/site/site-layout";
import { UnsubscribeView } from "@/components/unsubscribe/unsubscribe-view";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Unsubscribe",
  description: "Unsubscribe from the weekly essay.",
  path: "/unsubscribe",
  locale: "en",
  robots: { index: false, follow: false },
});

export default function UnsubscribePageEn() {
  return (
    <SiteLayout locale="en">
      <Suspense fallback={null}>
        <UnsubscribeView locale="en" />
      </Suspense>
    </SiteLayout>
  );
}
