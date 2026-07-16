import type { Metadata } from "next";
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
    "Un ensayo semanal para personas que quieren construir una vida más libre sin esperar permiso.",
  category: "Personal development",
  keywords: [
    "Alberto Roldan",
    "Alberto Roldán",
    "trabajo independiente",
    "libertad personal",
    "negocios online",
    "Georgia",
    "self employment",
    "work money freedom",
  ],
  openGraph: {
    siteName: "Alberto Roldán",
    type: "website",
    url: siteUrl,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${newsreader.variable} ${inter.variable} font-sans`}>
        <ThemeProvider>{children}</ThemeProvider>
        <SiteStructuredData />
        <Analytics />
      </body>
    </html>
  );
}
