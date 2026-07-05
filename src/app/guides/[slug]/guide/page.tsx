import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GuideDocument } from "@/components/guide/guide-document";
import { GuidePageCount, GuidePageIndicator } from "@/components/guide/guide-page-indicator";
import { PrintButton } from "@/components/guide/print-button";
import { getGuide } from "@/lib/guides";
import { getLeadMagnet } from "@/lib/lead-magnets";
import "./guide.css";

interface GuideReaderPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: GuideReaderPageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  const leadMagnet = getLeadMagnet(slug);

  if (!guide) {
    return { title: "Guía no encontrada" };
  }

  return {
    title: leadMagnet?.seo?.title ?? guide.cover.title,
    description: leadMagnet?.seo?.description ?? guide.cover.subtitle,
  };
}

export default async function GuideReaderPage({ params }: GuideReaderPageProps) {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#f3f2ef] py-8 md:py-12">
      <div className="no-print mx-auto mb-6 flex max-w-[720px] items-center justify-between px-6 md:px-12">
        <Link
          href={`/guides/${slug}`}
          className="font-sans text-sm text-[#6b6b6b] underline-offset-2 hover:underline"
        >
          ← Volver
        </Link>
        <div className="flex items-center gap-4">
          <GuidePageCount />
          <PrintButton />
        </div>
      </div>

      <GuideDocument guide={guide} />
      <GuidePageIndicator />
    </div>
  );
}
