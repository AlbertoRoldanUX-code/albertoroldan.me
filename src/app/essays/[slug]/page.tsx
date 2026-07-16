import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EssayArticle } from "@/components/essays/essay-article";
import { EssayStructuredData } from "@/components/essays/essay-structured-data";
import { SiteLayout } from "@/components/site/site-layout";
import { getEssay, getEssays } from "@/lib/essays";
import { buildPageMetadata } from "@/lib/metadata";

interface EssayPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getEssays("es").map((essay) => ({ slug: essay.slug }));
}

export async function generateMetadata({
  params,
}: EssayPageProps): Promise<Metadata> {
  const { slug } = await params;
  const essay = getEssay(slug, "es");
  if (!essay) {
    return {};
  }

  return buildPageMetadata({
    title: essay.title,
    description: essay.teaser,
    path: `/essays/${slug}`,
    locale: "es",
    type: "article",
  });
}

export default async function EssayPage({ params }: EssayPageProps) {
  const { slug } = await params;
  const essay = getEssay(slug, "es");
  if (!essay) {
    notFound();
  }

  return (
    <SiteLayout locale="es">
      <EssayStructuredData essay={essay} locale="es" />
      <EssayArticle essay={essay} locale="es" />
    </SiteLayout>
  );
}
