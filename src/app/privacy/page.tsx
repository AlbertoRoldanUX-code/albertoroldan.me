import type { Metadata } from "next";
import { SiteLayout } from "@/components/site/site-layout";
import { getUi } from "@/lib/i18n/content";

const ui = getUi("es");

export const metadata: Metadata = {
  title: ui.privacy.title,
  description: ui.privacy.description,
};

export default function PrivacyPage() {
  return (
    <SiteLayout locale="es">
      <section className="px-6 py-14 md:py-20">
        <div className="mx-auto max-w-[42rem]">
          <h1 className="font-serif text-[2.25rem] leading-tight tracking-[-0.02em] md:text-[2.75rem]">
            {ui.privacy.title}
          </h1>

          <div className="mt-8 space-y-5 font-sans text-base leading-relaxed text-muted-foreground md:text-[17px]">
            {ui.privacy.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
