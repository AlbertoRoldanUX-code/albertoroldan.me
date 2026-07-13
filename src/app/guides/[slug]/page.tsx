import type { Metadata } from "next";
import {
  GuideSlugPage,
  generateGuideSlugMetadata,
  getGuideStaticParams,
} from "@/components/vault/guide-slug-page";

interface GuideSlugPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getGuideStaticParams();
}

export async function generateMetadata({
  params,
}: GuideSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  return generateGuideSlugMetadata(slug, "es");
}

export default function Page({ params }: GuideSlugPageProps) {
  return <GuideSlugPage params={params} locale="es" />;
}
