import Image from "next/image";
import Link from "next/link";
import { aboutPreview } from "@/data/home";
import { FadeIn } from "@/components/vault/fade-in";

export function AboutPreviewSection() {
  return (
    <section className="border-t border-border/60 px-6 py-14 md:py-20">
      <div className="mx-auto max-w-[52rem]">
        <FadeIn>
          <h2 className="font-sans text-[11px] font-semibold tracking-[0.25em] text-foreground uppercase">
            {aboutPreview.title}
          </h2>
        </FadeIn>

        <div className="mt-8 grid items-start gap-8 md:mt-10 md:grid-cols-[12rem_1fr] md:gap-12">
          <FadeIn delay={0.05}>
            <div className="relative aspect-square w-full max-w-[12rem] overflow-hidden rounded-md bg-muted">
              <Image
                src={aboutPreview.avatar}
                alt="Alberto Roldán"
                fill
                className="object-cover"
                sizes="192px"
              />
            </div>
          </FadeIn>

          <div>
            <FadeIn delay={0.1}>
              <p className="font-serif text-lg leading-[1.7] md:text-[1.35rem] md:leading-[1.65]">
                {aboutPreview.bio}
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <Link
                href={aboutPreview.href}
                className="mt-6 inline-block font-serif text-base underline-offset-4 hover:underline md:text-lg"
              >
                Leer más →
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
