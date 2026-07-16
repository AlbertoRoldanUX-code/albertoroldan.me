import type { PrivacyContentData } from "../privacy-types";

export const ui = {
  nav: {
    about: "About",
    resources: "Resources",
    consulting: "Consulting",
  },
  footer: {
    privacy: "Privacy",
    terms: "Terms",
    servicePolicy: "Service policy",
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
    description:
      "How I collect, use, and protect your personal data on albertoroldan.me: newsletter, free guides, and consulting.",
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
            text: "To manage session bookings and confirm them after payment is received",
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
                text: "— manages scheduling for consulting sessions. Payment is completed afterward on the Site (bank transfer); the session is only confirmed once payment is received.",
              },
              {
                label: "Wise (or another transfer provider)",
                text: "— you may use the payment details published on the Site to pay for the session. The Site does not process card payments.",
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

  terms: {
    title: "Terms of Service",
    description:
      "Terms of use for albertoroldan.me: newsletter, free content, consulting, and responsibilities.",
    effectiveLabel: "Effective",
    updatedLabel: "Last updated",
    effectiveDate: "July 16, 2026",
    updatedDate: "July 16, 2026",
    intro:
      "These Terms of Service (“Terms”) govern your access to and use of albertoroldan.me (the “Site”) and related services, including the newsletter, free guides, and consulting (collectively, the “Services”), offered by Alberto Fernández Roldán (“I,” “me,” or “my”). By using the Site or the Services, you agree to these Terms.",
    sections: [
      {
        title: "1. Acceptance",
        paragraphs: [
          "If you do not agree to these Terms, do not use the Site or the Services. If you use the Site on behalf of an organization, you confirm that you have authority to bind it to these Terms.",
        ],
      },
      {
        title: "2. Description of the Services",
        paragraphs: [
          "The Site offers editorial content, a newsletter, downloadable guides and resources, and the option to book a one-to-one consulting session.",
          "The Services are provided as described on the Site from time to time. I may modify, suspend, or discontinue any part of the Services with or without notice.",
        ],
      },
      {
        title: "3. Acceptable use",
        paragraphs: [
          "You may use the Site and the Services only for personal, lawful purposes and in a manner consistent with these Terms and applicable law.",
          "The following is prohibited:",
        ],
        bullets: [
          {
            text: "attempting to access unauthorized areas or automating access in an abusive way;",
          },
          {
            text: "interfering with the Site’s operation;",
          },
          {
            text: "distributing malware, spam, or other unlawful or deceptive content;",
          },
          {
            text: "copying, reselling, or commercially exploiting the content or the Services without my prior written permission.",
          },
        ],
      },
      {
        title: "4. Subscriptions and communications",
        paragraphs: [
          "When you subscribe to the newsletter or request a guide, you provide a valid email address and agree to receive communications related to the Services. You may unsubscribe at any time using the link in every email.",
          "You are responsible for the accuracy of the information you provide. If you provide false information or someone else’s details without authorization, I may suspend access to the Services.",
        ],
      },
      {
        title: "5. Consulting",
        paragraphs: [
          "Specific terms for booking, payment, rescheduling, cancellation, and refunds for the consulting session are governed by the Service delivery policy published on the Site. If there is a conflict between those operational details and these Terms, the Service delivery policy prevails for that session.",
          "Consulting is a strategic guidance service. It does not constitute legal, tax, or regulated financial advice, and it does not guarantee any particular results.",
          "Any decisions you make based on the consulting session are your sole responsibility.",
        ],
      },
      {
        title: "6. Intellectual property",
        paragraphs: [
          "The Site, its design, text, guides, and other content are owned by me or my licensors and are protected by applicable intellectual property laws.",
          "You are granted a limited, non-exclusive, non-transferable license to access and use the content for your personal use. Any other use requires prior written permission.",
        ],
      },
      {
        title: "7. Third-party content and links",
        paragraphs: [
          "The Site may include links to third-party websites or services. I do not control those sites and am not responsible for their content, policies, or practices. Your use of third parties is governed by their own terms.",
        ],
      },
      {
        title: "8. Privacy",
        paragraphs: [
          "How personal data is processed is described in the Site’s Privacy Policy. By using the Services, you also agree to that policy to the extent it applies.",
        ],
      },
      {
        title: "9. Disclaimer of warranties",
        paragraphs: [
          "The Site and the Services are provided “as is” and “as available,” without warranties of any kind, express or implied, including warranties of merchantability, fitness for a particular purpose, or non-infringement.",
          "I do not warrant that the Site will be uninterrupted, error-free, or fully secure, or that the content is complete or up to date at all times.",
        ],
      },
      {
        title: "10. Limitation of liability",
        paragraphs: [
          "To the fullest extent permitted by law, I will not be liable for indirect, incidental, special, consequential, or punitive damages, or for loss of profits, data, or business opportunities arising from your use of or inability to use the Site or the Services.",
          "Total aggregate liability for claims related to these Terms or the Services will not exceed the amount you paid for the Services in the twelve (12) months before the claim or, if you have made no payment, €0.",
          "Nothing in these Terms excludes or limits liability that cannot be excluded or limited by law.",
        ],
      },
      {
        title: "11. Indemnification",
        paragraphs: [
          "You agree to hold me harmless from claims, damages, losses, and expenses (including reasonable attorneys’ fees) arising from your misuse of the Site or the Services, or from your breach of these Terms.",
        ],
      },
      {
        title: "12. Governing law and disputes",
        paragraphs: [
          "These Terms are governed by the laws of Georgia, without regard to conflict-of-law rules. The courts of Tbilisi, Georgia, have exclusive jurisdiction, except where mandatory consumer-protection law gives you a different forum.",
        ],
      },
      {
        title: "13. Changes",
        paragraphs: [
          "I may update these Terms at any time. The version published on this page, with its “Last updated” date, will be in force. Continued use of the Site or the Services after a change will constitute acceptance of the updated Terms.",
        ],
      },
      {
        title: "14. Severability",
        paragraphs: [
          "If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions will remain in full force and effect.",
        ],
      },
      {
        title: "15. Contact",
        paragraphs: [
          "If you have questions about these Terms, you can write to:",
          "Email: hola@albertoroldan.me",
        ],
      },
    ],
  } as PrivacyContentData,

  servicePolicy: {
    title: "Service delivery policy",
    description:
      "Terms for the consulting session: booking, payment, rescheduling, cancellation, and refunds.",
    effectiveLabel: "Effective",
    updatedLabel: "Last updated",
    effectiveDate: "July 16, 2026",
    updatedDate: "July 16, 2026",
    intro:
      "This policy describes how the consulting session offered on albertoroldan.me is delivered. By booking and paying, you accept these terms.",
    sections: [
      {
        title: "1. What you purchase",
        paragraphs: [
          "You purchase a one-to-one strategy session of up to 60 minutes held by video call on Google Meet. The current price is shown on the consulting page at the time of booking.",
        ],
      },
      {
        title: "2. Booking and confirmation",
        paragraphs: [
          "You choose an available time slot on the calendar. You then receive the payment page to complete the bank transfer.",
          "Booking a time slot does not confirm the session. The session is confirmed only after payment is received. Until then, the slot may remain available to someone else and the reservation may be cancelled.",
          "The session is confirmed only once payment has been received.",
          "Once payment is confirmed, you will receive an email with the confirmation and call details.",
        ],
      },
      {
        title: "3. Rescheduling",
        paragraphs: [
          "You may request a change of date or time with at least 24 hours’ notice. The new date is subject to availability.",
        ],
      },
      {
        title: "4. Cancellations and refunds",
        bullets: [
          {
            text: "If you cancel with more than 24 hours’ notice, you may choose to reschedule the session or request a full refund.",
          },
          {
            text: "If you cancel with less than 24 hours’ notice, there is no refund.",
          },
          {
            text: "If I have to cancel the session, you may choose another date or a full refund.",
          },
        ],
      },
      {
        title: "5. No-show",
        paragraphs: [
          "If you do not join the confirmed call and 15 minutes have passed since the scheduled start time without prior notice, the session will be considered a no-show, deemed delivered, and no refund will be given.",
        ],
      },
      {
        title: "6. Contact",
        paragraphs: [
          "To reschedule, cancel, or ask about this policy, write to:",
          "Email: alberto@iberiancaucasus.com",
          "I will aim to reply within two business days.",
        ],
      },
      {
        title: "7. Updates",
        paragraphs: [
          "This policy may be updated at any time. The version published on this page will be in force.",
        ],
      },
    ],
  } as PrivacyContentData,

  metadata: {
    notFound: "Not found",
    notFoundDescription:
      "The page you're looking for doesn't exist or has moved. Head back to the albertoroldan.me home page.",
    aboutTitle: "About",
    aboutDescription:
      "From Málaga to Tbilisi: I build businesses from Georgia and write every week about work, money, and freedom.",
    resourcesTitle: "Resources",
    resourcesDescription:
      "Free guides to build something of your own and gain autonomy.",
    thankYouTitle: "You're in",
    thankYouDescription: (brand: string) =>
      `Your guide is on its way. In the meantime, answer a few quick questions to help improve ${brand}`,
  },
};
