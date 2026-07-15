import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/vault/fade-in";
import { SectionDivider } from "@/components/vault/section-divider";
import { buttonVariants } from "@/components/ui/button";
import { getConsultingContent } from "@/lib/i18n/content";
import type { Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

const CONTACT_EMAIL = "alberto@iberiancaucasus.com";

interface ConsultingContentProps {
  locale?: Locale;
}

export function ConsultingContent({ locale = "es" }: ConsultingContentProps) {
  const content = getConsultingContent(locale);
  const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(content.emailSubject)}`;

  return (
    <>
      <section className="px-6 pt-14 pb-16 md:pt-20 md:pb-24">
        <div className="mx-auto max-w-[42rem] text-center">
          <FadeIn>
            <p className="font-sans text-[11px] font-medium tracking-[0.3em] text-muted-foreground uppercase">
              {content.eyebrow}
            </p>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h1 className="mt-8 font-serif text-[2.35rem] leading-[1.12] tracking-[-0.02em] text-balance md:mt-10 md:text-[3.35rem] md:leading-[1.08]">
              {content.title}
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mx-auto mt-7 max-w-[34rem] font-sans text-base leading-relaxed text-muted-foreground md:mt-8 md:text-lg">
              {content.subtitle}
            </p>
          </FadeIn>

          <FadeIn delay={0.15} className="mt-10 md:mt-12">
            <Link
              href={mailtoHref}
              className={cn(buttonVariants({ size: "lg" }))}
            >
              {content.heroCta}
            </Link>
          </FadeIn>
        </div>
      </section>

      <div className="mx-auto max-w-[42rem] border-t border-border/60 px-6" />

      <section className="px-6 py-14 md:py-20">
        <div className="mx-auto max-w-[42rem]">
          <FadeIn>
            <h2 className="font-serif text-[1.75rem] leading-tight tracking-[-0.02em] md:text-[2rem]">
              {content.forWhom.title}
            </h2>
          </FadeIn>

          <FadeIn delay={0.05}>
            <p className="mt-5 font-serif text-lg leading-[1.75] md:text-[1.2rem] md:leading-[1.7]">
              {content.forWhom.intro}
            </p>
          </FadeIn>

          <ul className="mt-8 space-y-4 font-serif text-lg leading-[1.75] md:text-[1.2rem] md:leading-[1.7]">
            {content.forWhom.items.map((item) => (
              <li key={item.slice(0, 32)} className="flex gap-3">
                <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-foreground" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-14 md:py-20">
        <div className="mx-auto max-w-[42rem]">
          <FadeIn>
            <h2 className="font-serif text-[1.75rem] leading-tight tracking-[-0.02em] md:text-[2rem]">
              {content.includes.title}
            </h2>
          </FadeIn>

          <FadeIn delay={0.05}>
            <p className="mt-5 max-w-[38rem] font-serif text-lg leading-[1.75] md:text-[1.2rem] md:leading-[1.7]">
              {content.includes.intro}
            </p>
          </FadeIn>

          <div className="mt-12 md:mt-14">
            <SectionDivider />
            {content.includes.items.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.03}>
                <div className="py-6 md:py-7">
                  <h3 className="font-serif text-xl leading-snug md:text-[1.65rem]">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                    {item.description}
                  </p>
                </div>
                <SectionDivider />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14 md:py-20">
        <div className="mx-auto max-w-[42rem]">
          <FadeIn>
            <h2 className="font-serif text-[1.75rem] leading-tight tracking-[-0.02em] md:text-[2rem]">
              {content.process.title}
            </h2>
          </FadeIn>

          <FadeIn delay={0.05}>
            <p className="mt-5 max-w-[38rem] font-serif text-lg leading-[1.75] md:text-[1.2rem] md:leading-[1.7]">
              {content.process.intro}
            </p>
          </FadeIn>

          <div className="mt-12 md:mt-14">
            <SectionDivider />
            {content.process.steps.map((step, index) => (
              <FadeIn key={step.label} delay={index * 0.03}>
                <div className="py-6 md:py-7">
                  <div className="grid grid-cols-1 gap-2 md:grid-cols-[7.5rem_1fr] md:items-baseline md:gap-10">
                    <span className="font-sans text-[10px] font-medium tracking-[0.22em] text-muted-foreground uppercase">
                      {step.label}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl leading-snug md:text-[1.65rem]">
                        {step.title}
                      </h3>
                      <p className="mt-2 font-sans text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
                <SectionDivider />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14 md:py-20">
        <div className="mx-auto max-w-[42rem]">
          <FadeIn>
            <h2 className="font-serif text-[1.75rem] leading-tight tracking-[-0.02em] md:text-[2rem]">
              {content.whyMe.title}
            </h2>
          </FadeIn>

          <FadeIn delay={0.04}>
            <div className="relative mt-8 aspect-square w-full max-w-[14rem] overflow-hidden rounded-sm bg-muted md:mt-10">
              <Image
                src={content.whyMe.photo}
                alt={content.whyMe.photoAlt}
                fill
                className="object-cover"
                sizes="224px"
              />
            </div>
          </FadeIn>

          <div className="mt-8 space-y-5 font-serif text-lg leading-[1.75] md:mt-10 md:text-[1.2rem] md:leading-[1.7]">
            {content.whyMe.paragraphs.map((paragraph) => (
              <FadeIn key={paragraph.slice(0, 40)}>
                <p>{paragraph}</p>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.08}>
            <div className="mt-10 border-t border-border/60 pt-8">
              <p className="font-serif text-lg leading-[1.75] md:text-[1.2rem] md:leading-[1.7]">
                {content.whyMe.credentialsIntro}
              </p>
              <ul className="mt-6 list-disc space-y-3 pl-6 font-serif text-base leading-[1.7] marker:text-foreground md:text-lg md:leading-[1.75]">
                {content.whyMe.credentials.map((credential) => (
                  <li key={credential}>{credential}</li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 py-16 pb-20 md:py-24 md:pb-28">
        <div className="mx-auto max-w-[42rem] text-center">
          <FadeIn>
            <h2 className="font-serif text-[2rem] leading-tight tracking-[-0.02em] text-balance md:text-[2.5rem]">
              {content.closing.title}
            </h2>
          </FadeIn>

          <FadeIn delay={0.05}>
            <p className="mx-auto mt-5 max-w-[34rem] font-serif text-lg leading-[1.75] md:text-[1.2rem] md:leading-[1.7]">
              {content.outcome}
            </p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <p className="mx-auto mt-5 max-w-[32rem] font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
              {content.closing.body}
            </p>
          </FadeIn>

          <FadeIn delay={0.12} className="mt-10 md:mt-12">
            <Link
              href={mailtoHref}
              className={cn(buttonVariants({ size: "lg" }))}
            >
              {content.closing.cta}
            </Link>
            <p className="mt-4 font-sans text-sm text-muted-foreground">
              {content.closing.note}
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
