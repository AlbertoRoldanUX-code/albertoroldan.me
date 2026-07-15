import type { ConsultingContentData } from "../consulting-types";

export const consultingContent = {
  title: "Consulting",
  headline: "Solve one concrete business problem in 60 minutes.",
  body: "We'll review your situation, identify the bottleneck, and you'll leave with a concrete action plan.",
  focus:
    "I help founders unblock growth, sales, and internationalization challenges.",
  examplesLabel: "Common topics:",
  examples: [
    "Validating a business idea",
    "Internationalization",
    "LinkedIn positioning",
    "Georgia relocation",
    "AI automation",
  ],
  price: "250 €",
  priceDetails: [
    "One-on-one session.",
    "60 minutes.",
    "Google Meet.",
    "Payment by bank transfer.",
  ],
  cta: "Book a session",
  bookingIntro:
    "Pick a day and time. After booking, you'll receive the bank-transfer details. The session is confirmed once payment is received.",
  emailSubject: "Book a session — 60 min",
  metadata: {
    title: "Consulting",
    description:
      "A 60-minute session to solve one concrete business problem: validating a business idea, internationalization, LinkedIn, Georgia relocation, or AI automation.",
  },
} satisfies ConsultingContentData;
