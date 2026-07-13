import { getGuide } from "@/lib/guides";
import { renderGuidePdf } from "@/lib/guides/render-guide-pdf";
import { isValidLocale } from "@/lib/i18n/config";

interface RouteContext {
  params: Promise<{ slug: string }>;
}

export async function GET(request: Request, context: RouteContext) {
  const { slug } = await context.params;
  const { searchParams } = new URL(request.url);
  const localeParam = searchParams.get("locale") ?? "es";
  const locale = isValidLocale(localeParam) ? localeParam : "es";
  const guide = getGuide(slug, locale);

  if (!guide) {
    return new Response(
      locale === "en" ? "Guide not found" : "Guía no encontrada",
      { status: 404 },
    );
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
