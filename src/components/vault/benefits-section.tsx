import type { LeadMagnetBenefit } from "@/types/lead-magnet";
import { FadeIn } from "@/components/vault/fade-in";
import { SectionDivider } from "@/components/vault/section-divider";

interface BenefitsSectionProps {
  title?: string;
  intro?: string;
  benefits: LeadMagnetBenefit[];
}

export function BenefitsSection({
  title = "Qué incluye",
  intro,
  benefits,
}: BenefitsSectionProps) {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-[42rem]">
        <FadeIn>
          <h2 className="font-serif text-[2rem] leading-tight tracking-[-0.02em] md:text-[2.5rem]">
            {title}
          </h2>
        </FadeIn>

        {intro && (
          <FadeIn delay={0.05}>
            <p className="mt-5 max-w-[38rem] font-sans text-[15px] leading-[1.7] text-muted-foreground md:text-base">
              {intro}
            </p>
          </FadeIn>
        )}

        <div className="mt-12 md:mt-14">
          <SectionDivider />
          {benefits.map((benefit, index) => (
            <FadeIn key={benefit.label} delay={index * 0.03}>
              <div className="py-6 md:py-7">
                <div className="grid grid-cols-1 gap-2 md:grid-cols-[7.5rem_1fr] md:items-baseline md:gap-10">
                  <span className="font-sans text-[10px] font-medium tracking-[0.22em] text-muted-foreground uppercase">
                    {benefit.label}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl leading-snug md:text-[1.65rem]">
                      {benefit.title}
                    </h3>
                    {benefit.description && (
                      <p className="mt-2 font-sans text-sm leading-relaxed text-muted-foreground">
                        {benefit.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <SectionDivider />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
