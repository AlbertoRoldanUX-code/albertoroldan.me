import type { Metadata } from "next";
import {
  GuideReaderPage,
  generateGuideMetadata,
} from "@/components/guide/guide-reader-page";

interface GuideReaderPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: GuideReaderPageProps): Promise<Metadata> {
  const { slug } = await params;
  return generateGuideMetadata(slug, "es");
}

export default function Page({ params }: GuideReaderPageProps) {
  return <GuideReaderPage params={params} locale="es" />;
}
