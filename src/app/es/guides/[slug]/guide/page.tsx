import { permanentRedirect } from "next/navigation";

interface GuideReaderPageProps {
  params: Promise<{ slug: string }>;
}

/** El contenido completo solo se entrega por PDF tras el opt-in; no hay lector web. */
export default async function Page({ params }: GuideReaderPageProps) {
  const { slug } = await params;
  permanentRedirect(`/es/guides/${slug}`);
}
