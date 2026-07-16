import { Suspense } from "react";
import { SiteLayout } from "@/components/site/site-layout";
import { UnsubscribeView } from "@/components/unsubscribe/unsubscribe-view";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Darse de baja",
  description: "Cancelar la suscripción al ensayo semanal.",
  path: "/unsubscribe",
  locale: "es",
  robots: { index: false, follow: false },
});

export default function UnsubscribePage() {
  return (
    <SiteLayout locale="es">
      <Suspense fallback={null}>
        <UnsubscribeView locale="es" />
      </Suspense>
    </SiteLayout>
  );
}
