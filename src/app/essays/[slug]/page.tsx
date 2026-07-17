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
  return getEssays("en").map((essay) => ({ slug: essay.slug }));
}

export async function generateMetadata({
  params,
}: EssayPageProps): Promise<Metadata> {
  const { slug } = await params;
  const essay = getEssay(slug, "en");
  if (!essay) {
    return {};
  }

  return buildPageMetadata({
    title: essay.title,
    description: essay.teaser,
    path: `/essays/${slug}`,
    locale: "en",
    type: "article",
  });
}

export default async function EssayPageEn({ params }: EssayPageProps) {
  const { slug } = await params;
  const essay = getEssay(slug, "en");
  if (!essay) {
    notFound();
  }

  return (
    <SiteLayout locale="en">
      <EssayStructuredData essay={essay} locale="en" />
      <EssayArticle essay={essay} locale="en" />
    </SiteLayout>
  );
}
