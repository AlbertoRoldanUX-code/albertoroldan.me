import { ContactForm } from "@/components/home/contact-form";
import { FadeIn } from "@/components/vault/fade-in";
import { getContactSection } from "@/lib/i18n/content";
import type { Locale } from "@/lib/i18n/config";

interface ContactSectionProps {
  locale?: Locale;
}

export function ContactSection({ locale = "en" }: ContactSectionProps) {
  const contact = getContactSection(locale);

  return (
    <section id="contact" className="scroll-mt-24 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[42rem]">
        <FadeIn>
          <p className="font-sans text-[11px] font-medium tracking-[0.28em] text-muted-foreground uppercase">
            {contact.eyebrow}
          </p>
          <h2 className="mt-4 font-serif text-[2.5rem] leading-[1.08] tracking-[-0.03em] md:text-[3.5rem]">
            {contact.title}
          </h2>
          <p className="mt-5 max-w-[34rem] font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
            {contact.lead}
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="relative mt-10 md:mt-12">
          <ContactForm copy={contact.form} />
        </FadeIn>
      </div>
    </section>
  );
}
