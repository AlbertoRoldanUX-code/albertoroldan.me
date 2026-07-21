import { NextResponse } from "next/server";
import { createServerEmailProvider } from "@/lib/email/server";
import {
  GUIDE_ACCESS_COOKIE,
  createGuideAccessToken,
  guideAccessCookieOptions,
} from "@/lib/guides/access";
import { getGuide } from "@/lib/guides";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const leadMagnetSlug =
      typeof body.leadMagnetSlug === "string" ? body.leadMagnetSlug : "";
    const downloadUrl =
      typeof body.downloadUrl === "string" ? body.downloadUrl : undefined;

    if (!email || !leadMagnetSlug) {
      return NextResponse.json(
        { success: false, message: "Email and lead magnet are required." },
        { status: 400 },
      );
    }

    const result = await createServerEmailProvider().subscribe({
      email,
      leadMagnetSlug,
      downloadUrl,
      locale: "en",
    });

    const response = NextResponse.json(result, {
      status: result.success ? 200 : 422,
    });

    if (result.success && getGuide(leadMagnetSlug)) {
      response.cookies.set(
        GUIDE_ACCESS_COOKIE,
        createGuideAccessToken(leadMagnetSlug),
        guideAccessCookieOptions(),
      );
    }

    return response;
  } catch {
    return NextResponse.json(
      { success: false, message: "Something went wrong." },
      { status: 500 },
    );
  }
}
