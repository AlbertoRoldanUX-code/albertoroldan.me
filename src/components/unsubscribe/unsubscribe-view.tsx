"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";

interface UnsubscribeViewProps {
  locale?: Locale;
}

type Status = "loading" | "ok" | "already" | "error";

const copy = {
  es: {
    loading: "Procesando tu baja…",
    okTitle: "Te has dado de baja.",
    okBody: "Ya no recibirás más emails. Si fue un error, vuelve a suscribirte cuando quieras.",
    alreadyTitle: "Ya estabas dado de baja.",
    alreadyBody: "No te enviaremos más emails a esta dirección.",
    errorTitle: "No se pudo completar la baja.",
    errorBody:
      "El enlace no es válido o ha caducado. Escríbeme a privacidad@albertoroldan.me si necesitas ayuda.",
    home: "Volver al inicio",
  },
  en: {
    loading: "Processing your unsubscribe…",
    okTitle: "You’re unsubscribed.",
    okBody: "You won’t receive more emails. If this was a mistake, you can subscribe again anytime.",
    alreadyTitle: "You were already unsubscribed.",
    alreadyBody: "We won’t send more emails to this address.",
    errorTitle: "We couldn’t unsubscribe you.",
    errorBody:
      "This link is invalid or expired. Email privacidad@albertoroldan.me if you need help.",
    home: "Back to home",
  },
} as const;

export function UnsubscribeView({ locale = "en" }: UnsubscribeViewProps) {
  const searchParams = useSearchParams();
  const token = searchParams.get("token") ?? "";
  const [status, setStatus] = useState<Status>("loading");
  const t = copy[locale];

  useEffect(() => {
    if (!token) {
      setStatus("error");
      return;
    }

    let cancelled = false;

    (async () => {
      try {
        const response = await fetch("/api/unsubscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        });
        const result = (await response.json()) as {
          success?: boolean;
          alreadyUnsubscribed?: boolean;
        };

        if (cancelled) {
          return;
        }

        if (!result.success) {
          setStatus("error");
          return;
        }

        setStatus(result.alreadyUnsubscribed ? "already" : "ok");
      } catch {
        if (!cancelled) {
          setStatus("error");
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [token]);

  const title =
    status === "ok"
      ? t.okTitle
      : status === "already"
        ? t.alreadyTitle
        : status === "error"
          ? t.errorTitle
          : t.loading;

  const body =
    status === "ok"
      ? t.okBody
      : status === "already"
        ? t.alreadyBody
        : status === "error"
          ? t.errorBody
          : null;

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-lg flex-col justify-center px-6 py-16 text-center">
      <h1 className="font-serif text-3xl tracking-tight text-foreground md:text-4xl">
        {title}
      </h1>
      {body ? (
        <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
          {body}
        </p>
      ) : null}
      <Link
        href={localizedPath("/", locale)}
        className="mt-8 text-sm text-foreground underline underline-offset-4"
      >
        {t.home}
      </Link>
    </div>
  );
}
