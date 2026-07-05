import type { Metadata } from "next";
import { SiteLayout } from "@/components/site/site-layout";

export const metadata: Metadata = {
  title: "Privacidad",
  description: "Política de privacidad de albertoroldan.me",
};

export default function PrivacyPage() {
  return (
    <SiteLayout>
      <section className="px-6 py-14 md:py-20">
        <div className="mx-auto max-w-[42rem]">
          <h1 className="font-serif text-[2.25rem] leading-tight tracking-[-0.02em] md:text-[2.75rem]">
            Privacidad
          </h1>

          <div className="mt-8 space-y-5 font-sans text-base leading-relaxed text-muted-foreground md:text-[17px]">
            <p>
              Recopilo tu dirección de correo electrónico cuando te suscribes
              al newsletter o descargas una guía gratuita. La uso únicamente
              para enviarte contenido relacionado con albertoroldan.me.
            </p>
            <p>
              No vendo ni comparto tu información con terceros. Puedes darte de
              baja en cualquier momento usando el enlace incluido en cada email.
            </p>
            <p>
              Si tienes preguntas sobre tus datos, escríbeme a través de las
              redes sociales enlazadas en el pie de página.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
