export const thankYouContent = {
  eyebrow: "YA ESTÁS DENTRO",
  headline: "Tu guía está en camino.",
  emailArrival: "2–3 minutos",
  highlight:
    "Mientras tanto, tómate 15 segundos en responder unas preguntas rápidas para que pueda crear mejor contenido para ti.",
  pdfLinkLabel: "O descarga el PDF ahora.",
  newsletterNote:
    "También te he añadido a mi ensayo semanal. Cada sábado por la mañana recibirás una pieza sobre trabajo, dinero y libertad.",
  signature: "Alberto Roldán",
};

export interface SurveyOption {
  id: string;
  label: string;
  /** When true, selecting this option requires free-text input. */
  allowCustom?: boolean;
}

export interface SurveyQuestion {
  id: string;
  question: string;
  options: SurveyOption[];
}

export const surveyQuestions: SurveyQuestion[] = [
  {
    id: "working-for-yourself",
    question: "¿Trabajas por tu cuenta?",
    options: [
      { id: "yes", label: "Sí" },
      { id: "no", label: "No" },
    ],
  },
  {
    id: "current-goal",
    question: "¿Qué estás intentando conseguir ahora mismo?",
    options: [
      { id: "better-job", label: "Conseguir un trabajo mejor." },
      { id: "start-business", label: "Montar un negocio." },
      { id: "grow-business", label: "Hacer crecer un negocio que ya tengo." },
      { id: "unclear", label: "Todavía no lo tengo claro." },
      { id: "other", label: "Otro", allowCustom: true },
    ],
  },
  {
    id: "topic-interest",
    question: "¿Qué tema te interesa más?",
    options: [
      { id: "business", label: "Negocios." },
      { id: "programming-ai", label: "Programación e IA." },
      { id: "living-abroad", label: "Vivir en el extranjero." },
      { id: "productivity", label: "Productividad." },
      { id: "other", label: "Otro", allowCustom: true },
    ],
  },
];

export const surveyComplete = {
  eyebrow: "LISTO",
  headline: "Gracias.",
  body: "Tus respuestas me ayudan a escribir cosas más útiles. Revisa tu bandeja de entrada: la guía debería estar ahí en unos minutos.",
};
