import { permanentRedirect } from "next/navigation";

interface GuideReaderPageProps {
  params: Promise<{ slug: string }>;
}

/** Full guide content is PDF-only after opt-in; no web reader. */
export default async function Page({ params }: GuideReaderPageProps) {
  const { slug } = await params;
  permanentRedirect(`/en/guides/${slug}`);
}
