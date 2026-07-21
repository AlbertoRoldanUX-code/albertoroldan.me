import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { stripLocalePrefix } from "@/lib/i18n/paths";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Site is English-only: redirect legacy /es paths to the EN equivalent.
  if (pathname === "/es" || pathname.startsWith("/es/")) {
    const url = request.nextUrl.clone();
    url.pathname = stripLocalePrefix(pathname);
    return NextResponse.redirect(url, 308);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", "en");

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
