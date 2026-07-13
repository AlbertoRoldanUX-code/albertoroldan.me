import { defaultLocale, type Locale } from "./config";

export function getLocaleFromPath(pathname: string): Locale {
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    return "en";
  }
  return defaultLocale;
}

export function stripLocalePrefix(pathname: string): string {
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) {
    return pathname.slice(3) || "/";
  }
  return pathname;
}

export function localizedPath(path: string, locale: Locale): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) return normalized;
  if (normalized === "/") return "/en";
  return `/en${normalized}`;
}

export function switchLocalePath(pathname: string, targetLocale: Locale): string {
  const basePath = stripLocalePrefix(pathname);
  return localizedPath(basePath, targetLocale);
}
