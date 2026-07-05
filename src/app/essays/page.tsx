import type { Metadata } from "next";
import { EssayArchive } from "@/components/essays/essay-archive";
import { SiteLayout } from "@/components/site/site-layout";

export const metadata: Metadata = {
  title: "Ensayos",
  description:
    "Archivo de ensayos sobre construir y vivir por tu cuenta.",
};

export default function EssaysPage() {
  return (
    <SiteLayout>
      <EssayArchive />
    </SiteLayout>
  );
}
