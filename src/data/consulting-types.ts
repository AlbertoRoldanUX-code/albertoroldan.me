export interface ConsultingPaymentCopy {
  title: string;
  headline: string;
  reservedCallout: string;
  body: string;
  stepsLabel: string;
  steps: string[];
  transferTitle: string;
  fields: {
    beneficiary: string;
    iban: string;
    bank: string;
    amount: string;
    reference: string;
  };
  copyLabel: string;
  copiedLabel: string;
  /** Shown only when NEXT_PUBLIC_PAYMENT_LINK is set */
  payLinkCta: string;
  payQrCaption: string;
  payQrAlt: string;
  emailFallback: string;
  sepaOutsideNote: string;
  confirmCta: string;
  confirmSubject: string;
  confirmBody: string;
  confirmAckHeadline: string;
  confirmAckBody: string;
  backToBooking: string;
  sessionLabel: string;
  gateHeadline: string;
  gateBody: string;
  gateCta: string;
  metadata: {
    title: string;
    description: string;
  };
}

export interface ConsultingContentData {
  title: string;
  headline: string;
  body: string;
  focus: string;
  examplesLabel: string;
  examples: string[];
  price: string;
  priceDetails: string[];
  cta: string;
  bookingIntro: string;
  emailSubject: string;
  payment: ConsultingPaymentCopy;
  metadata: {
    title: string;
    description: string;
  };
}
