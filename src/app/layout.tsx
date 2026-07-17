import type { Metadata } from "next";
import { headers } from "next/headers";
import { Newsreader, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SiteStructuredData } from "@/components/site/site-structured-data";
import { ThemeProvider } from "@/components/vault/theme-provider";
import { siteUrl } from "@/lib/metadata";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Alberto Roldán",
  authors: [{ name: "Alberto Roldán", url: siteUrl }],
  creator: "Alberto Roldán",
  publisher: "Alberto Roldán",
  title: {
    default: "Alberto Roldán",
    template: "%s | albertoroldan.me",
  },
  description:
    "A weekly essay for people who want to build a freer life without waiting for permission.",
  category: "Personal development",
  keywords: [
    "Alberto Roldan",
    "Alberto Roldán",
    "self employment",
    "personal freedom",
    "online business",
    "Georgia",
    "work money freedom",
    "trabajo independiente",
  ],
  openGraph: {
    siteName: "Alberto Roldán",
    type: "website",
    url: siteUrl,
    locale: "en_US",
    alternateLocale: ["es_ES"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@albertoroldanes",
    creator: "@albertoroldanes",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const locale = headersList.get("x-locale") === "es" ? "es" : "en";

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${newsreader.variable} ${inter.variable} font-sans`}>
        <ThemeProvider>{children}</ThemeProvider>
        <SiteStructuredData />
        <Analytics />
      </body>
    </html>
  );
}
