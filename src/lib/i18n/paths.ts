import { defaultLocale, type Locale } from "./config";

const nonDefaultLocale: Locale = "es";
const nonDefaultPrefix = `/${nonDefaultLocale}`;

export function getLocaleFromPath(pathname: string): Locale {
  if (pathname === nonDefaultPrefix || pathname.startsWith(`${nonDefaultPrefix}/`)) {
    return nonDefaultLocale;
  }
  return defaultLocale;
}

export function stripLocalePrefix(pathname: string): string {
  if (pathname === nonDefaultPrefix) return "/";
  if (pathname.startsWith(`${nonDefaultPrefix}/`)) {
    return pathname.slice(nonDefaultPrefix.length) || "/";
  }
  return pathname;
}

export function localizedPath(path: string, locale: Locale): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) return normalized;
  if (normalized === "/") return nonDefaultPrefix;
  return `${nonDefaultPrefix}${normalized}`;
}

export function switchLocalePath(pathname: string, targetLocale: Locale): string {
  const basePath = stripLocalePrefix(pathname);
  return localizedPath(basePath, targetLocale);
}
