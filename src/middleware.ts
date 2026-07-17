import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getLocaleFromPath } from "@/lib/i18n/paths";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const locale = getLocaleFromPath(pathname);

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", locale);

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
