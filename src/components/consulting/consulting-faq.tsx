import type { ConsultingFaqItem } from "@/data/consulting-types";
import { FadeIn } from "@/components/vault/fade-in";

interface ConsultingFaqProps {
  heading: string;
  items: ConsultingFaqItem[];
}

export function ConsultingFaq({ heading, items }: ConsultingFaqProps) {
  return (
    <section className="mt-14 md:mt-16">
      <FadeIn>
        <h2 className="font-sans text-lg font-semibold tracking-tight">
          {heading}
        </h2>
      </FadeIn>

      <dl className="mt-5 divide-y divide-border/70 border-t border-border/70">
        {items.map((item, index) => (
          <FadeIn key={item.question} delay={0.04 * (index + 1)}>
            <div className="py-5">
              <dt className="font-sans text-[15px] font-semibold tracking-tight text-foreground">
                {item.question}
              </dt>
              <dd className="mt-2 font-sans text-sm leading-relaxed text-muted-foreground md:text-[15px] md:leading-relaxed">
                {item.answer}
              </dd>
            </div>
          </FadeIn>
        ))}
      </dl>
    </section>
  );
}
