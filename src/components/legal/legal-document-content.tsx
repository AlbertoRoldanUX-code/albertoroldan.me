import type { PrivacyBullet, PrivacyContentData } from "@/data/privacy-types";

interface LegalDocumentContentProps {
  content: PrivacyContentData;
}

export function LegalDocumentContent({ content }: LegalDocumentContentProps) {
  return (
    <section className="px-6 py-14 md:py-20">
      <div className="mx-auto max-w-[42rem]">
        <h1 className="text-center font-serif text-[2.25rem] leading-tight tracking-[-0.02em] md:text-[2.75rem]">
          {content.title}
        </h1>
        <p className="mt-3 text-center font-sans text-sm text-muted-foreground md:text-[15px]">
          {content.effectiveLabel}: {content.effectiveDate}
          {" · "}
          {content.updatedLabel}: {content.updatedDate}
        </p>

        <div className="mt-10 space-y-10 font-sans text-base leading-relaxed text-muted-foreground md:text-[17px]">
          <p className="text-foreground/90">{content.intro}</p>

          {content.sections.map((section) => (
            <section key={section.title} className="space-y-4 pt-2 first:pt-0">
              <h2 className="font-serif text-xl font-semibold tracking-[-0.01em] text-foreground md:text-[1.35rem]">
                {section.title}
              </h2>

              {section.paragraphs?.map((paragraph) => (
                <Paragraph key={paragraph.slice(0, 48)} text={paragraph} />
              ))}

              {section.bullets ? <BulletList items={section.bullets} /> : null}

              {section.closingParagraphs?.map((paragraph) => (
                <Paragraph key={paragraph.slice(0, 48)} text={paragraph} />
              ))}

              {section.subsections?.map((subsection) => (
                <div key={subsection.heading} className="space-y-3">
                  <h3 className="font-sans text-base font-semibold text-foreground md:text-[17px]">
                    {subsection.heading}
                  </h3>
                  {subsection.paragraphs?.map((paragraph) => (
                    <Paragraph key={paragraph.slice(0, 48)} text={paragraph} />
                  ))}
                  {subsection.bullets ? (
                    <BulletList items={subsection.bullets} />
                  ) : null}
                  {subsection.closingParagraphs?.map((paragraph) => (
                    <Paragraph key={paragraph.slice(0, 48)} text={paragraph} />
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

function Paragraph({ text }: { text: string }) {
  const contactMatch = text.match(
    /^(Correo electrónico|Email):\s*(\S+@\S+)/,
  );

  if (contactMatch) {
    const [, label, email] = contactMatch;

    return (
      <p>
        <span className="font-semibold text-foreground/85">{label}:</span>{" "}
        <a
          href={`mailto:${email}`}
          className="text-foreground underline underline-offset-2 transition-colors hover:text-foreground/80"
        >
          {email}
        </a>
      </p>
    );
  }

  return <p>{text}</p>;
}

function BulletList({ items }: { items: PrivacyBullet[] }) {
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
