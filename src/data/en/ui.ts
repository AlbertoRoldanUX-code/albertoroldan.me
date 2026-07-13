export const ui = {
  nav: {
    about: "About",
    resources: "Resources",
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
  },
  privacy: {
    title: "Privacy",
    description: "Privacy policy for albertoroldan.me",
    paragraphs: [
      "I collect your email address when you subscribe to the newsletter or download a free guide. I use it solely to send you content related to albertoroldan.me.",
      "I don't sell or share your information with third parties. You can unsubscribe at any time using the link included in every email.",
      "If you have questions about your data, reach out through the social media links in the footer.",
    ],
  },
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
