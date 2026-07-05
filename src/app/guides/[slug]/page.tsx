import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LeadMagnetPage } from "@/components/vault/lead-magnet-page";
import { getAllLeadMagnetSlugs, getLeadMagnet } from "@/lib/lead-magnets";
import { buildLeadMagnetMetadata } from "@/lib/metadata";

interface GuideSlugPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllLeadMagnetSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: GuideSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getLeadMagnet(slug);

  if (!data) {
    return { title: "No encontrado" };
  }

  return buildLeadMagnetMetadata(data);
}

export default async function GuideSlugPage({ params }: GuideSlugPageProps) {
  const { slug } = await params;
  const data = getLeadMagnet(slug);

  if (!data) {
    notFound();
  }

  return <LeadMagnetPage data={data} />;
}
