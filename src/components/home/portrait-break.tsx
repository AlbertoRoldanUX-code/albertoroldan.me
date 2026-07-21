import Image from "next/image";
import { FadeIn } from "@/components/vault/fade-in";
import { getSiteConfig } from "@/lib/i18n/content";
import type { Locale } from "@/lib/i18n/config";

interface PortraitBreakProps {
  locale?: Locale;
}

export function PortraitBreak({ locale = "en" }: PortraitBreakProps) {
  const siteConfig = getSiteConfig(locale);

  return (
    <section className="bg-[#111111] px-6 py-16 text-[#f5f5f4] md:py-24">
      <div className="mx-auto grid max-w-[72rem] items-end gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <FadeIn className="relative aspect-[16/10] overflow-hidden md:aspect-[21/10]">
          <Image
            src={siteConfig.avatar}
            alt={siteConfig.name}
            fill
            className="object-cover object-center grayscale"
            sizes="(max-width: 1024px) 100vw, 720px"
          />
        </FadeIn>
        <FadeIn delay={0.08}>
          <p className="font-serif text-[2rem] leading-[1.15] tracking-[-0.03em] md:text-[2.75rem]">
            {siteConfig.subtagline}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
