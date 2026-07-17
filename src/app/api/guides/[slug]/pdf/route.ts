import { getGuide } from "@/lib/guides";
import { hasGuideAccessFromRequest } from "@/lib/guides/access";
import { renderGuidePdf } from "@/lib/guides/render-guide-pdf";
import { isValidLocale } from "@/lib/i18n/config";

interface RouteContext {
  params: Promise<{ slug: string }>;
}

export async function GET(request: Request, context: RouteContext) {
  const { slug } = await context.params;
  const { searchParams } = new URL(request.url);
  const localeParam = searchParams.get("locale") ?? "en";
  const locale = isValidLocale(localeParam) ? localeParam : "en";

  const allowed = await hasGuideAccessFromRequest(request, slug);
  if (!allowed) {
    return new Response(locale === "en" ? "Not found" : "No encontrado", {
      status: 404,
    });
  }

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
      "Cache-Control": "private, no-store",
    },
  });
}
