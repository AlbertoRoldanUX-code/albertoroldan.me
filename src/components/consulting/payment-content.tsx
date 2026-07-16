"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CopyField } from "@/components/consulting/copy-field";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn } from "@/components/vault/fade-in";
import { getConsultingContent } from "@/lib/i18n/content";
import {
  hasBookingAccessFromQuery,
  localizedConsultingBookPath,
  readBookingAccess,
} from "@/lib/booking-access";
import type { Locale } from "@/lib/i18n/config";
import { getPaymentDetails } from "@/lib/payment";
import { formatPaymentReference } from "@/lib/payment-reference";
import { cn } from "@/lib/utils";

const CONTACT_EMAIL = "alberto@iberiancaucasus.com";
const PAYMENT_QR_SRC = "/images/wise-payment-qr.png";

interface PaymentContentProps {
  locale?: Locale;
}

function PaymentContentInner({ locale = "es" }: PaymentContentProps) {
  const content = getConsultingContent(locale).payment;
  const payment = getPaymentDetails();
  const searchParams = useSearchParams();
  const [acked, setAcked] = useState(false);
  const [allowed, setAllowed] = useState<boolean | null>(null);
  const [storedTimes, setStoredTimes] = useState<{
    startTime?: string;
    attendeeStartTime?: string;
  }>({});

  useEffect(() => {
    const fromQuery = hasBookingAccessFromQuery(searchParams);
    const stored = readBookingAccess();
    setStoredTimes({
      startTime: stored?.startTime,
      attendeeStartTime: stored?.attendeeStartTime,
    });
    setAllowed(fromQuery || Boolean(stored));
  }, [searchParams]);

  const reference = useMemo(
    () =>
      formatPaymentReference({
        locale,
        sessionLabel: content.sessionLabel,
        fallbackReference: payment.reference,
        startTime:
          searchParams.get("startTime") || storedTimes.startTime || null,
        attendeeStartTime:
          searchParams.get("attendeeStartTime") ||
          storedTimes.attendeeStartTime ||
          null,
      }),
    [
      content.sessionLabel,
      locale,
      payment.reference,
      searchParams,
      storedTimes.attendeeStartTime,
      storedTimes.startTime,
    ],
  );

  const confirmMailto = useMemo(() => {
    const body = `${content.confirmBody}\n\n${content.fields.reference}: ${reference}\n`;
    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(content.confirmSubject)}&body=${encodeURIComponent(body)}`;
  }, [
    content.confirmBody,
    content.confirmSubject,
    content.fields.reference,
    reference,
  ]);

  const fallbackMailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(content.confirmSubject)}`;
  const sepaMailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    locale === "en"
      ? "International transfer details — session"
      : "Datos internacionales — sesión",
  )}`;

  const fields: { label: string; value: string; mono?: boolean }[] = [];
  if (payment.beneficiary) {
    fields.push({ label: content.fields.beneficiary, value: payment.beneficiary });
  }
  if (payment.iban) {
    fields.push({ label: content.fields.iban, value: payment.iban, mono: true });
  }
  if (payment.bank) {
    fields.push({ label: content.fields.bank, value: payment.bank });
  }
  fields.push({
    label: content.fields.amount,
    value: payment.amountLabel,
  });
  fields.push({
    label: content.fields.reference,
    value: reference,
    mono: true,
  });

  function handleConfirmPaid() {
    setAcked(true);
    window.open(confirmMailto, "_blank", "noopener,noreferrer");
  }

  if (allowed === null) {
    return <PaymentContentFallback locale={locale} />;
  }

  if (!allowed) {
    return (
      <section className="px-6 pt-14 pb-20 md:pt-20 md:pb-28">
        <div className="mx-auto max-w-[36rem]">
          <FadeIn>
            <p className="font-sans text-[11px] font-semibold tracking-[0.25em] text-foreground uppercase">
              {content.title}
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="mt-6 font-serif text-[2rem] leading-tight tracking-[-0.02em] text-balance md:text-[2.75rem]">
              {content.gateHeadline}
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-5 font-serif text-lg leading-[1.7] text-muted-foreground md:text-[1.2rem] md:leading-[1.65]">
              {content.gateBody}
            </p>
          </FadeIn>
          <FadeIn delay={0.15} className="mt-8">
            <Link
              href={localizedConsultingBookPath(locale)}
              className={cn(buttonVariants({ size: "lg" }))}
            >
              {content.gateCta}
            </Link>
          </FadeIn>
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 pt-14 pb-20 md:pt-20 md:pb-28">
      <div className="mx-auto max-w-[36rem]">
        <FadeIn>
          <p className="font-sans text-[11px] font-semibold tracking-[0.25em] text-foreground uppercase">
            {content.title}
          </p>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h1 className="mt-6 font-serif text-[2rem] leading-tight tracking-[-0.02em] text-balance md:text-[2.75rem]">
            {content.headline}
          </h1>
        </FadeIn>

        <FadeIn delay={0.08}>
          <p className="mt-6 font-serif text-lg leading-[1.65] md:text-[1.2rem]">
            {content.reservedCallout}
          </p>
          <p className="mt-3 font-serif text-lg leading-[1.7] text-muted-foreground md:text-[1.15rem] md:leading-[1.65]">
            {content.body}
          </p>
        </FadeIn>

        <FadeIn delay={0.12}>
          <p className="mt-10 font-sans text-sm text-muted-foreground">
            {content.stepsLabel}
          </p>
          <ol className="mt-3 list-decimal space-y-2 pl-5 font-serif text-lg leading-[1.6] md:text-[1.15rem]">
            {content.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </FadeIn>

        <FadeIn delay={0.14}>
          <p className="mt-10 font-serif text-3xl tracking-[-0.02em] md:text-[2.25rem]">
            {payment.amountLabel}
          </p>
        </FadeIn>

        {payment.paymentLink ? (
          <FadeIn delay={0.16} className="mt-8">
            <a
              href={payment.paymentLink}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              {content.payLinkCta}
            </a>

            <div className="mt-8 flex flex-col items-start gap-3">
              <p className="font-sans text-sm text-muted-foreground">
                {content.payQrCaption}
              </p>
              <a
                href={payment.paymentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Image
                  src={PAYMENT_QR_SRC}
                  alt={content.payQrAlt}
                  width={220}
                  height={220}
                  className="rounded-xl border border-border/60 bg-white"
                  priority
                />
              </a>
            </div>
          </FadeIn>
        ) : null}

        <FadeIn delay={0.18}>
          <div className="mt-10 rounded-md border border-border/60 bg-card px-4 py-1 md:px-5">
            <p className="pt-4 font-sans text-[11px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
              {content.transferTitle}
            </p>
            {payment.configured && payment.iban ? (
              <div className="mt-1 pb-1">
                {fields.map((field) => (
                  <CopyField
                    key={field.label}
                    label={field.label}
                    value={field.value}
                    copyLabel={content.copyLabel}
                    copiedLabel={content.copiedLabel}
                    mono={field.mono}
                  />
                ))}
              </div>
            ) : (
              <p className="py-4 font-serif text-base leading-relaxed text-muted-foreground md:text-lg">
                {content.emailFallback}{" "}
                <a
                  href={fallbackMailto}
                  className="text-foreground underline underline-offset-4"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
            )}
          </div>
          {payment.configured && payment.iban ? (
            <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
              {content.sepaOutsideNote}{" "}
              <a
                href={sepaMailto}
                className="text-foreground underline underline-offset-4"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          ) : null}
        </FadeIn>

        {acked ? (
          <FadeIn delay={0.05} className="mt-10">
            <p className="font-serif text-xl leading-snug md:text-2xl">
              {content.confirmAckHeadline}
            </p>
            <p className="mt-3 font-serif text-lg leading-[1.65] text-muted-foreground md:text-[1.15rem]">
              {content.confirmAckBody}
            </p>
          </FadeIn>
        ) : (
          <FadeIn delay={0.2} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={handleConfirmPaid}
              className={cn(buttonVariants({ size: "lg" }))}
            >
              {content.confirmCta}
            </button>
            <Link
              href={localizedConsultingBookPath(locale)}
              className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
            >
              {content.backToBooking}
            </Link>
          </FadeIn>
        )}
      </div>
    </section>
  );
}

export function PaymentContent({ locale = "es" }: PaymentContentProps) {
  return (
    <Suspense fallback={<PaymentContentFallback locale={locale} />}>
      <PaymentContentInner locale={locale} />
    </Suspense>
  );
}

function PaymentContentFallback({ locale }: { locale: Locale }) {
  const content = getConsultingContent(locale).payment;
  return (
    <section className="px-6 pt-14 pb-20 md:pt-20 md:pb-28">
      <div className="mx-auto max-w-[36rem]">
        <p className="font-sans text-[11px] font-semibold tracking-[0.25em] text-foreground uppercase">
          {content.title}
        </p>
        <h1 className="mt-6 font-serif text-[2rem] leading-tight tracking-[-0.02em] md:text-[2.75rem]">
          {content.headline}
        </h1>
      </div>
    </section>
  );
}
