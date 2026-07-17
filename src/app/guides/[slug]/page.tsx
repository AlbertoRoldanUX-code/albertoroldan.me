import type { Metadata } from "next";
import {
  GuideSlugPage,
  generateGuideSlugMetadata,
  getGuideStaticParams,
} from "@/components/vault/guide-slug-page";

interface EnGuideSlugPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getGuideStaticParams();
}

export async function generateMetadata({
  params,
}: EnGuideSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  return generateGuideSlugMetadata(slug, "en");
}

export default function Page({ params }: EnGuideSlugPageProps) {
  return <GuideSlugPage params={params} locale="en" />;
}
