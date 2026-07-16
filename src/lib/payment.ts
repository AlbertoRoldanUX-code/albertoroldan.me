/**
 * Bank-transfer payment details for consulting sessions (Wise SEPA).
 * Card MoRs (Stripe, Polar, etc.) are not available for this IE in Georgia.
 *
 * IMPORTANT: Next.js only inlines NEXT_PUBLIC_* when accessed with static
 * keys (process.env.NEXT_PUBLIC_FOO). Dynamic process.env[key] is empty
 * in client bundles.
 */

export type PaymentDetails = {
  amountLabel: string;
  amountEuros: number;
  currency: string;
  iban?: string;
  bic?: string;
  beneficiary?: string;
  bank?: string;
  reference?: string;
  /** Optional Wise / Revolut payment-request URL */
  paymentLink?: string;
  configured: boolean;
};

function trim(value: string | undefined): string | undefined {
  const next = value?.trim();
  return next || undefined;
}

export function getPaymentDetails(): PaymentDetails {
  const amountRaw = trim(process.env.NEXT_PUBLIC_PAYMENT_AMOUNT) ?? "250";
  const amountEuros = Number.parseFloat(amountRaw);
  const safeAmount = Number.isFinite(amountEuros) && amountEuros > 0 ? amountEuros : 250;
  const currency = (trim(process.env.NEXT_PUBLIC_PAYMENT_CURRENCY) ?? "EUR").toUpperCase();
  const iban = trim(process.env.NEXT_PUBLIC_PAYMENT_IBAN);
  const bic = trim(process.env.NEXT_PUBLIC_PAYMENT_BIC);
  const beneficiary = trim(process.env.NEXT_PUBLIC_PAYMENT_BENEFICIARY);
  const bank = trim(process.env.NEXT_PUBLIC_PAYMENT_BANK);
  const reference = trim(process.env.NEXT_PUBLIC_PAYMENT_REFERENCE);
  const paymentLink = trim(process.env.NEXT_PUBLIC_PAYMENT_LINK);

  const configured = Boolean(iban || paymentLink);

  return {
    amountEuros: safeAmount,
    currency,
    amountLabel:
      currency === "EUR"
        ? `${safeAmount.toLocaleString("es-ES")} €`
        : `${safeAmount.toLocaleString("en-US")} ${currency}`,
    iban,
    bic,
    beneficiary,
    bank,
    reference,
    paymentLink,
    configured,
  };
}

export function getPaymentSuccessPath(locale: "es" | "en"): string {
  return locale === "en" ? "/en/consulting/pay" : "/consulting/pay";
}

export function getPaymentSuccessUrl(locale: "es" | "en"): string | undefined {
  const site = trim(process.env.NEXT_PUBLIC_SITE_URL)?.replace(/\/$/, "");
  if (!site) return undefined;
  return `${site}${getPaymentSuccessPath(locale)}`;
}
