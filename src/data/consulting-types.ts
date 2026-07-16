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

export interface ConsultingService {
  id: string;
  title: string;
  /** Short paragraphs shown under the title */
  summary: string[];
  idealForLabel: string;
  idealFor: string[];
  /** What you leave the session with */
  outcomesLabel: string;
  outcomes: string[];
  duration: string;
  price: string;
}

export interface ConsultingLink {
  title: string;
  href: string;
  external?: boolean;
}

export interface ConsultingFaqItem {
  question: string;
  answer: string;
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
  /** Profile layout (EveryExpert-style) */
  profile: {
    tagline: string;
    bio: string[];
    /** One sentence: why book with you */
    valueProp: string;
    location: string;
    category: string;
    servicesHeading: string;
    linksHeading: string;
    availabilityCta: string;
  };
  services: ConsultingService[];
  links: ConsultingLink[];
  faq: {
    heading: string;
    items: ConsultingFaqItem[];
  };
  payment: ConsultingPaymentCopy;
  metadata: {
    title: string;
    description: string;
  };
}
