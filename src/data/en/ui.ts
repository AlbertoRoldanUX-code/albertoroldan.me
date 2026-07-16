import type { PrivacyContentData } from "../privacy-types";

export const ui = {
  nav: {
    about: "About",
    resources: "Resources",
    consulting: "Consulting",
  },
  footer: {
    privacy: "Privacy",
  },
  language: {
    label: "Language",
    es: "ES",
    en: "EN",
  },
  resources: {
    title: "Resources",
    cta: "Get the free guide →",
  },
  about: {
    readMore: "Read more →",
  },
  guide: {
    back: "← Back",
    notFound: "Guide not found",
    print: "Print / PDF",
    pages: "pages",
    pageOf: (current: number, total: number) =>
      `Page ${current} of ${total}`,
    benefitsTitle: "What's included",
  },
  email: {
    loading: "Sending…",
    error: "Something went wrong. Please try again.",
    ariaLabel: "Email address",
  },
  thankYou: {
    emailPrefix: (arrival: string) =>
      `In ${arrival} you'll receive a free copy of`,
    emailSuffix: "in your inbox.",
  },
  survey: {
    questionOf: (step: number, total: number) =>
      `Question ${step + 1} of ${total}`,
    otherPlaceholder: "Tell me a bit more…",
    continue: "Continue",
    back: "Back",
  },
  privacy: {
    title: "Privacy Policy",
    description: "Privacy policy for albertoroldan.me",
    effectiveLabel: "Effective",
    updatedLabel: "Last updated",
    effectiveDate: "July 15, 2026",
    updatedDate: "July 16, 2026",
    intro:
      "This Privacy Policy describes how Alberto Fernández Roldán (“I,” “me,” or “my”) collects, uses, and shares personal information about you when you visit albertoroldan.me (the “Site”), subscribe to the newsletter, download a free guide, or otherwise interact with my services (collectively, the “Services”). This Privacy Policy explains what personal data I process, for what purpose, how long I retain it, with whom I may share it, and what rights you can exercise.",
    sections: [
      {
        title: "1. Who I am",
        paragraphs: [
          "The controller of personal information collected through the Services is Alberto Fernández Roldán, an Individual Entrepreneur registered in Georgia, Identification Code / Tax ID 304812022.",
          "Professional address: 47 Ketevan Tsamebuli Avenue 14, Tbilisi 0101, Georgia.",
          "For any privacy-related inquiry you can write to: privacidad@albertoroldan.me.",
        ],
      },
      {
        title: "2. Information I collect",
        paragraphs: [
          "I collect a small amount of information, only as needed to operate the Services.",
        ],
        subsections: [
          {
            heading: "Information you provide:",
            bullets: [
              {
                label: "Email address",
                text: "when you subscribe to the newsletter, request a free guide, or contact me directly.",
              },
              {
                label: "Survey responses",
                text: "when you choose to answer the optional survey after subscribing (for example, whether you work independently, your current goal, or topics you’re interested in). These are used to tailor the content and offers I send you.",
              },
            ],
          },
          {
            heading: "Information collected automatically:",
            bullets: [
              {
                label: "Aggregate analytics.",
                text: "I use Vercel Web Analytics to count page views and identify popular content. This service is cookieless and anonymizes IP addresses; I do not use it to identify individual visitors.",
              },
              {
                label: "Local browser storage.",
                text: "The Site remembers your light/dark theme preference using your browser’s localStorage. This data stays on your device and is not transmitted to me. After you subscribe, your email may be stored temporarily in sessionStorage to associate the optional onboarding survey.",
              },
              {
                label: "Technical guide_access cookie.",
                text: "After you subscribe, a technical guide_access cookie may be set to allow temporary access to the requested guide after subscription. It does not contain your email address.",
              },
              {
                label: "Standard server logs.",
                text: "Like most websites, the hosting provider retains short-lived request logs (IP address, user agent, timestamp, URL) for security and abuse prevention.",
              },
            ],
          },
        ],
      },
      {
        title: "3. How I use your information",
        bullets: [
          {
            text: "To send you the weekly essay and any newsletters or downloads you request",
          },
          {
            text: "To deliver and support free guides or other resources you request",
          },
          {
            text: "To respond to your inquiries and support requests",
          },
          {
            text: "To personalize the content and offers I show you, based on optional survey responses",
          },
          {
            text: "To measure aggregate site usage and improve the Services",
          },
          {
            text: "To detect, prevent, and address fraud, abuse, or security issues",
          },
          {
            text: "To comply with legal obligations",
          },
        ],
        closingParagraphs: [
          "The main legal basis is your consent when you subscribe (Art. 6(1)(a) GDPR) and, where applicable, my legitimate interest in operating and improving the Services (Art. 6(1)(f)). When I must retain data due to a legal obligation, the basis is compliance with a legal obligation (Art. 6(1)(c)).",
        ],
      },
      {
        title: "4. How I share your information",
        paragraphs: [
          "I never sell, rent, or trade your personal information. I share it only with the following categories of recipients, and only as needed to operate the Services:",
        ],
        subsections: [
          {
            heading: "Service providers",
            bullets: [
              {
                label: "Supabase",
                text: "— stores newsletter subscriptions and optional survey responses.",
              },
              {
                label: "Vercel",
                text: "— hosts the Site and provides cookieless web analytics.",
              },
              {
                label: "Resend",
                text: "— handles sending emails related to the Services, including transactional messages and the newsletter.",
              },
              {
                label: "Cal.com",
                text: "— manages scheduling for consulting sessions.",
              },
            ],
            closingParagraphs: [
              "These providers only receive the information they need to perform their specific function. They process data solely to provide the contracted services and in accordance with any applicable data processing agreements.",
            ],
          },
          {
            heading: "Legal disclosures",
            paragraphs: [
              "I may disclose information if I believe in good faith that doing so is required by law, court order, or to protect the rights, property, or safety of Alberto Fernández Roldán, subscribers, or the public.",
            ],
          },
          {
            heading: "Business transfers",
            paragraphs: [
              "If I am involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. I will notify you of any such change.",
            ],
          },
        ],
      },
      {
        title: "5. Cookies and tracking technologies",
        paragraphs: [
          "The Site itself does not set marketing or advertising cookies. I use only what is necessary for the Site to function:",
        ],
        bullets: [
          {
            text: "localStorage for your theme preference. This stays on your device.",
          },
          {
            text: "sessionStorage temporarily to link the optional survey after subscription.",
          },
          {
            text: "Technical guide_access cookie to allow temporary access to the requested guide after subscription.",
          },
          {
            text: "Vercel Web Analytics, which does not use cookies and collects aggregated, anonymized data.",
          },
        ],
        closingParagraphs: [
          "You can configure your browser to block or delete technical cookies, although some Site features may stop working properly.",
          "Third-party services I link to (for example, social media profiles) may set their own cookies on their own domains under their respective privacy policies.",
        ],
      },
      {
        title: "6. Data retention",
        paragraphs: [
          "I retain personal information only as long as needed to provide the Services and to meet legal obligations.",
        ],
        bullets: [
          {
            label: "The emails of subscribers",
            text: "are retained until you unsubscribe or request deletion. You can unsubscribe at any time using the link at the bottom of every email.",
          },
          {
            label: "Survey responses",
            text: "are retained with the subscription while it remains active, unless you request earlier deletion.",
          },
          {
            label: "Server logs and analytics data",
            text: "are retained on a rolling basis, typically no more than 90 days.",
          },
        ],
      },
      {
        title: "7. Your rights",
        paragraphs: ["You have the right to:"],
        bullets: [
          {
            label: "Access",
            text: "— request a copy of the personal information I hold about you.",
          },
          {
            label: "Correction",
            text: "— ask me to correct information that is inaccurate.",
          },
          {
            label: "Deletion",
            text: "— ask me to delete your personal information.",
          },
          {
            label: "Objection",
            text: "— object to processing of your data where applicable.",
          },
          {
            label: "Restriction",
            text: "— ask me to restrict processing in the cases provided by law.",
          },
          {
            label: "Portability",
            text: "— receive your data in a structured format, where applicable.",
          },
          {
            label: "Withdraw consent",
            text: "— where processing is based on consent, without affecting the lawfulness of prior processing.",
          },
          {
            label: "Unsubscribe from the newsletter",
            text: "— at any time. The link is in every email I send.",
          },
        ],
        closingParagraphs: [
          "To exercise any of these rights you can write to: privacidad@albertoroldan.me.",
        ],
        subsections: [
          {
            heading: "Residents of the EEA, UK, and Switzerland (GDPR)",
            paragraphs: [
              "If you live in the European Economic Area, the United Kingdom, or Switzerland, you may also lodge a complaint with your local data protection authority. I rely on your consent (when you subscribe) and my legitimate interests (operating and improving the Services) as legal bases for processing.",
              "If you believe I have not handled your request properly, you may lodge a complaint with the data protection authority competent in your place of residence, workplace, or where you consider the infringement has occurred.",
            ],
          },
          {
            heading: "California residents (CCPA / CPRA)",
            paragraphs: [
              "California residents have the right to know what personal information is collected, the right to request deletion, the right to correct inaccurate information, and the right not to be discriminated against for exercising these rights. I do not sell or share personal information for cross-context behavioral advertising as those terms are defined under California law.",
            ],
          },
        ],
      },
      {
        title: "8. International transfers",
        paragraphs: [
          "I am based in Georgia, and my service providers may process your information in the European Union, the United States, and other countries. Where required, I rely on appropriate safeguards (such as Standard Contractual Clauses or equivalent measures) for international transfers of personal information out of the EEA, the UK, and Switzerland.",
        ],
      },
      {
        title: "9. Security",
        paragraphs: [
          "I use reasonable administrative, technical, and organizational safeguards to protect personal information. No method of transmission or storage is 100% secure; however, I work with reputable service providers who maintain industry-standard security practices.",
        ],
      },
      {
        title: "10. Children’s privacy",
        paragraphs: [
          "The Services are not directed to children under the age of 16, and I do not knowingly collect personal information from children under that age. If you believe a child has provided me with personal information, please contact me and I will delete it.",
        ],
      },
      {
        title: "11. Third-party links",
        paragraphs: [
          "The Site may link to third-party websites and services (for example, social media profiles). Their privacy practices are governed by their own policies, which I encourage you to review.",
        ],
      },
      {
        title: "12. Changes to this policy",
        paragraphs: [
          "I may update this Privacy Policy from time to time. When I do, I will revise the “Last updated” date at the top of this page. If the changes are material, I will provide a more prominent notice (such as an email to current subscribers).",
        ],
      },
      {
        title: "13. Contact me",
        paragraphs: [
          "If you have any questions about this Privacy Policy or wish to exercise any of your rights, you can write to:",
          "Email: privacidad@albertoroldan.me",
          "Mail: Alberto Fernández Roldán, 47 Ketevan Tsamebuli Avenue 14, Tbilisi 0101, Georgia",
        ],
      },
    ],
  } as PrivacyContentData,

  metadata: {
    notFound: "Not found",
    aboutTitle: "About",
    resourcesTitle: "Resources",
    resourcesDescription:
      "Free guides to build something of your own and gain autonomy.",
    thankYouTitle: "You're in",
    thankYouDescription: (brand: string) =>
      `Your guide is on its way. In the meantime, answer a few quick questions to help improve ${brand}`,
  },
};
