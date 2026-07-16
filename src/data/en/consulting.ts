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
    "Payment by bank transfer required before the session.",
  ],
  cta: "Reserve a time",
  bookingIntro:
    "Pick the time that works best for you. Payment comes after to confirm the booking.",
  emailSubject: "Book a session — 60 min",
  profile: {
    tagline: "Founder in Georgia. I write about work, money, and freedom.",
    bio: [
      "I help founders get clients, create content, and build online businesses.",
      "From manual labor to self-taught programmer and founder.",
    ],
    valueProp:
      "I went from manual labor to building online businesses while living in Georgia. Now I help other founders take that path faster.",
    location: "Tbilisi, Georgia",
    category: "Entrepreneurship & independent work",
    servicesHeading: "Services",
    linksHeading: "Links",
    availabilityCta: "View availability",
  },
  services: [
    {
      id: "strategy-60",
      title: "60-minute strategy session",
      summary: [
        "We'll solve one concrete business problem.",
        "You'll leave with a clear action plan.",
      ],
      idealForLabel: "Ideal for:",
      idealFor: [
        "Validating an idea",
        "Getting clients",
        "Creating content",
        "Automating processes",
        "Internationalizing your business",
      ],
      outcomesLabel: "By the end of the session you'll have:",
      outcomes: [
        "a clear action plan",
        "defined priorities",
        "concrete next steps",
      ],
      duration: "60 min",
      price: "€250.00",
    },
  ],
  links: [
    {
      title: "Free guide: the 7 capacities school never taught you",
      href: "/guides/field-manual",
    },
    {
      title: "About me — from Málaga to Tbilisi",
      href: "/about",
    },
  ],
  faq: {
    heading: "FAQ",
    items: [
      {
        question: "Is the session recorded?",
        answer:
          "Not by default. If you want us to record it so you can review it later, tell me at the start of the call.",
      },
      {
        question: "What if I need to change the date?",
        answer:
          "You can reschedule with at least 24 hours' notice. The new date is subject to availability.",
      },
      {
        question: "How does payment work?",
        answer:
          "You pick a time on the calendar, then pay by bank transfer (Wise or SEPA). The session is only confirmed once I receive payment.",
      },
      {
        question: "Is this for me?",
        answer:
          "Yes, if you run your own business (or are building one) and want to solve a concrete bottleneck: clients, content, automation, or internationalization. It's not generic coaching or long-term mentoring.",
      },
    ],
  },
  payment: {
    title: "Payment",
    headline: "Just one step left to confirm your session.",
    reservedCallout: "Your session is temporarily reserved.",
    body: "Complete payment as soon as you can. Until I receive it, the slot may remain available for someone else. Once I receive it, you'll get a confirmation email.",
    stepsLabel: "Steps",
    steps: [
      'Click "Pay now" and complete the 250 € payment in Wise (you can also transfer using the details below).',
      'Click "I\'ve paid" once you\'ve done it.',
      "I'll review the payment and confirm the session by email.",
    ],
    transferTitle: "SEPA bank transfer",
    fields: {
      beneficiary: "Beneficiary",
      iban: "IBAN",
      bank: "Bank",
      amount: "Amount",
      reference: "Reference",
    },
    copyLabel: "Copy",
    copiedLabel: "Copied",
    payLinkCta: "Pay now",
    payQrCaption: "Or scan the QR code with your phone.",
    payQrAlt: "QR code to pay for the session with Wise",
    emailFallback:
      "Transfer details are not published here yet. Email me and I'll send the IBAN right away:",
    sepaOutsideNote:
      "Transferring from outside the SEPA zone? Email me and I'll send the international bank details.",
    confirmCta: "I've paid",
    confirmSubject: "Payment confirmation — 60 min session",
    confirmBody:
      "Hi Alberto,\n\nI've just transferred 250 € for the session.\n\nName:\nBooked date/time:\nReference used:\n\nThanks.",
    confirmAckHeadline: "Got it — thanks for letting me know.",
    confirmAckBody:
      "I'll review the transfer as soon as I can, and you'll get an email when the session is confirmed.",
    backToBooking: "Back to booking",
    sessionLabel: "Strategy session",
    gateHeadline: "Reserve a time first.",
    gateBody:
      "The payment page comes after you pick a day and time on the calendar. Book your slot and I'll bring you here to confirm the session.",
    gateCta: "Reserve a time",
    metadata: {
      title: "Confirm session",
      description:
        "Complete bank-transfer payment to confirm your 60-minute consulting session.",
    },
  },
  metadata: {
    title: "Consulting",
    description:
      "A 60-minute session to solve one concrete business problem: validating a business idea, internationalization, LinkedIn, Georgia relocation, or AI automation.",
  },
} satisfies ConsultingContentData;
