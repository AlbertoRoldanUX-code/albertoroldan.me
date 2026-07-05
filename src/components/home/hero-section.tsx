import { EmailForm } from "@/components/vault/email-form";
import { FadeIn } from "@/components/vault/fade-in";
import { siteConfig, testimonials } from "@/data/home";

export function HomeHeroSection() {
  return (
    <section className="px-6 pt-14 pb-16 md:pt-20 md:pb-24">
      <div className="mx-auto max-w-[42rem] text-center">
        <FadeIn>
          <h1 className="font-serif text-[2.35rem] leading-[1.12] tracking-[-0.02em] text-balance md:text-[3.35rem] md:leading-[1.08]">
            {siteConfig.tagline}
          </h1>
        </FadeIn>

        <FadeIn delay={0.08}>
          <p className="mx-auto mt-6 max-w-[34rem] font-sans text-base leading-relaxed text-muted-foreground md:mt-7 md:text-lg">
            {siteConfig.subtagline}
          </p>
        </FadeIn>

        <FadeIn delay={0.14} className="mt-10 md:mt-12">
          <EmailForm
            slug={siteConfig.newsletter.leadMagnetSlug}
            placeholder={siteConfig.newsletter.placeholder}
            buttonText={siteConfig.newsletter.buttonText}
            disclaimer={siteConfig.newsletter.disclaimer}
          />
        </FadeIn>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="border-t border-border/60 px-6 py-14 md:py-20">
      <div className="mx-auto max-w-[42rem]">
        <FadeIn>
          <p className="text-center font-sans text-[11px] font-medium tracking-[0.25em] text-muted-foreground uppercase">
            Lo que dicen los lectores
          </p>
        </FadeIn>

        <div className="mt-10 space-y-10 md:mt-12">
          {testimonials.map((item, index) => (
            <FadeIn key={item.author} delay={index * 0.06}>
              <blockquote className="text-center">
                <p className="font-serif text-lg leading-relaxed md:text-xl">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-3 font-sans text-sm text-muted-foreground">
                  — {item.author}, <cite className="not-italic">{item.title}</cite>
                </footer>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
