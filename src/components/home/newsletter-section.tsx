import { EmailForm } from "@/components/vault/email-form";
import { FadeIn } from "@/components/vault/fade-in";
import { footerCta, siteConfig } from "@/data/home";

export function NewsletterSection() {
  return (
    <section className="border-t border-border/60 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-[42rem] text-center">
        <FadeIn>
          <h2 className="font-serif text-[2rem] leading-tight tracking-[-0.02em] md:text-[2.75rem]">
            {footerCta.headline}
          </h2>
        </FadeIn>

        <FadeIn delay={0.08}>
          <p className="mx-auto mt-5 max-w-[30rem] font-sans text-base text-muted-foreground md:text-lg">
            {footerCta.subheadline}
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
