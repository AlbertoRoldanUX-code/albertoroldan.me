import { getGuide } from "@/lib/guides";
import { renderGuidePdf } from "@/lib/guides/render-guide-pdf";

interface RouteContext {
  params: Promise<{ slug: string }>;
}

export async function GET(_request: Request, context: RouteContext) {
  const { slug } = await context.params;
  const guide = getGuide(slug);

  if (!guide) {
    return new Response("Guía no encontrada", { status: 404 });
  }

  const buffer = await renderGuidePdf(guide);
  const filename = `${slug}.pdf`;

  return new Response(new Uint8Array(buffer), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "public, max-age=3600",
    },
  });
}
