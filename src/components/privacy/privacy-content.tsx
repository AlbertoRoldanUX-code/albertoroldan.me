import { getUi } from "@/lib/i18n/content";
import type { Locale } from "@/lib/i18n/config";
import type { PrivacyBullet, PrivacyContentData } from "@/data/privacy-types";

interface PrivacyContentProps {
  locale?: Locale;
}

export function PrivacyContent({ locale = "es" }: PrivacyContentProps) {
  const privacy = getUi(locale).privacy as PrivacyContentData;

  return (
    <section className="px-6 py-14 md:py-20">
      <div className="mx-auto max-w-[42rem]">
        <h1 className="text-center font-serif text-[2.25rem] leading-tight tracking-[-0.02em] md:text-[2.75rem]">
          {privacy.title}
        </h1>
        <p className="mt-3 text-center font-sans text-sm text-muted-foreground md:text-[15px]">
          {privacy.effectiveLabel}: {privacy.effectiveDate}
          <span className="mx-1.5 text-border">·</span>
          {privacy.updatedLabel}: {privacy.updatedDate}
        </p>

        <div className="mt-10 space-y-10 font-sans text-base leading-relaxed text-muted-foreground md:text-[17px]">
          <p className="text-foreground/90">{privacy.intro}</p>

          {privacy.sections.map((section) => (
            <section key={section.title} className="space-y-4">
              <h2 className="font-serif text-xl font-semibold tracking-[-0.01em] text-foreground md:text-[1.35rem]">
                {section.title}
              </h2>

              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}

              {section.bullets ? <BulletList items={section.bullets} /> : null}

              {section.closingParagraphs?.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}

              {section.subsections?.map((subsection) => (
                <div key={subsection.heading} className="space-y-3">
                  <h3 className="font-sans text-base font-semibold text-foreground md:text-[17px]">
                    {subsection.heading}
                  </h3>
                  {subsection.paragraphs?.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                  {subsection.bullets ? (
                    <BulletList items={subsection.bullets} />
                  ) : null}
                  {subsection.closingParagraphs?.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </div>
              ))}
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

function BulletList({
  items,
}: {
  items: PrivacyBullet[];
}) {
  return (
    <ul className="list-disc space-y-2.5 pl-5 marker:text-foreground/40">
      {items.map((item) => (
        <li key={`${item.label ?? ""}${item.text.slice(0, 40)}`}>
          {item.label ? (
            <>
              <span className="font-semibold text-foreground/85">
                {item.label}
              </span>{" "}
              {item.text}
            </>
          ) : (
            item.text
          )}
        </li>
      ))}
    </ul>
  );
}
