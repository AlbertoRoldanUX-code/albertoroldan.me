import type { SurveyQuestion } from "@/data/thank-you";

export const thankYouContent = {
  eyebrow: "YOU'RE IN",
  headline: "Your guide is on its way.",
  emailArrival: "2–3 minutes",
  highlight:
    "In the meantime, take 15 seconds to answer a few quick questions so I can create better content for you.",
  pdfLinkLabel: "Or download the PDF now.",
  newsletterNote:
    "I've also added you to my weekly essay. Every Saturday morning you'll receive a piece about work, money, and freedom.",
  signature: "Alberto Roldán",
};

export const surveyQuestions: SurveyQuestion[] = [
  {
    id: "working-for-yourself",
    question: "Do you work for yourself?",
    options: [
      { id: "yes", label: "Yes" },
      { id: "no", label: "No" },
    ],
  },
  {
    id: "current-goal",
    question: "What are you trying to achieve right now?",
    options: [
      { id: "better-job", label: "Get a better job." },
      { id: "start-business", label: "Start a business." },
      { id: "grow-business", label: "Grow a business I already have." },
      { id: "unclear", label: "I'm not sure yet." },
      { id: "other", label: "Other", allowCustom: true },
    ],
  },
  {
    id: "topic-interest",
    question: "Which topic interests you most?",
    options: [
      { id: "business", label: "Business." },
      { id: "programming-ai", label: "Programming & AI." },
      { id: "living-abroad", label: "Living abroad." },
      { id: "productivity", label: "Productivity." },
      { id: "other", label: "Other", allowCustom: true },
    ],
  },
];

export const surveyComplete = {
  eyebrow: "DONE",
  headline: "Thank you.",
  body: "Your answers help me write more useful things. Check your inbox — the guide should be there in a few minutes.",
};
