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
    id: "stage",
    question: "What stage are you at?",
    options: [
      { id: "exploring", label: "Exploring ideas" },
      { id: "building", label: "Building something" },
      { id: "earning", label: "Already earning on my own" },
      { id: "stuck", label: "Stuck in employment" },
    ],
  },
  {
    id: "priority",
    question: "What matters most to you right now?",
    options: [
      { id: "freedom", label: "More freedom day to day" },
      { id: "skills", label: "Developing my own capacities" },
      { id: "income", label: "Generating income on my own" },
      { id: "clarity", label: "Clarity on what to build" },
    ],
  },
  {
    id: "content",
    question: "What type of content helps you most?",
    options: [
      { id: "stories", label: "Real stories and lessons" },
      { id: "frameworks", label: "Frameworks and practical exercises" },
      { id: "mindset", label: "Mindset and decisions" },
      { id: "all", label: "A bit of everything" },
    ],
  },
];

export const surveyComplete = {
  eyebrow: "DONE",
  headline: "Thank you.",
  body: "Your answers help me write more useful things. Check your inbox — the guide should be there in a few minutes.",
};
