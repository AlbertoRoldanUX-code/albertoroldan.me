import Image from "next/image";
import type { LeadMagnetAuthor } from "@/types/lead-magnet";
import { FadeIn } from "@/components/vault/fade-in";
import { SectionDivider } from "@/components/vault/section-divider";

interface AboutSectionProps {
  author: LeadMagnetAuthor;
}

export function AboutSection({ author }: AboutSectionProps) {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-[34rem] text-center">
        <FadeIn>
          <div className="relative mx-auto size-[4.5rem] overflow-hidden rounded-full bg-muted md:size-20">
            <Image
              src={author.avatar}
              alt={author.name}
              fill
              className="object-cover"
              sizes="80px"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <p className="mt-8 font-serif text-lg leading-[1.7] text-balance md:text-[1.35rem] md:leading-[1.65]">
            Soy {author.name}. {author.bio}
          </p>
        </FadeIn>

        {author.signature && (
          <FadeIn delay={0.14}>
            <p
              className="mt-8 font-serif text-[1.75rem] italic tracking-tight md:text-[2rem]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {author.signature}
            </p>
          </FadeIn>
        )}
      </div>

      <SectionDivider className="mx-auto mt-16 max-w-[42rem] md:mt-20" />
    </section>
  );
}
