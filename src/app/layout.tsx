import type { Metadata } from "next";
import { Newsreader, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/vault/theme-provider";
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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://albertoroldan.me",
  ),
  title: {
    default: "Alberto Roldán",
    template: "%s | albertoroldan.me",
  },
  description:
    "Un ensayo semanal sobre construir y vivir por tu cuenta.",
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
        <Analytics />
      </body>
    </html>
  );
}
