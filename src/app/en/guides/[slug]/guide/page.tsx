import type { Metadata } from "next";
import {
  GuideReaderPage,
  generateGuideMetadata,
} from "@/components/guide/guide-reader-page";

interface EnGuideReaderPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: EnGuideReaderPageProps): Promise<Metadata> {
  const { slug } = await params;
  return generateGuideMetadata(slug, "en");
}

export default function Page({ params }: EnGuideReaderPageProps) {
  return <GuideReaderPage params={params} locale="en" />;
}
