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
    id: "stage",
    question: "¿En qué fase estás?",
    options: [
      { id: "exploring", label: "Explorando ideas" },
      { id: "building", label: "Construyendo algo" },
      { id: "earning", label: "Ya facturo por mi cuenta" },
      { id: "stuck", label: "Atascado en el empleo" },
    ],
  },
  {
    id: "priority",
    question: "¿Qué te importa más ahora mismo?",
    options: [
      { id: "freedom", label: "Más libertad en el día a día" },
      { id: "skills", label: "Desarrollar capacidades propias" },
      { id: "income", label: "Generar ingresos por mi cuenta" },
      { id: "clarity", label: "Claridad sobre qué construir" },
    ],
  },
  {
    id: "content",
    question: "¿Qué tipo de contenido te ayuda más?",
    options: [
      { id: "stories", label: "Historias reales y lecciones" },
      { id: "frameworks", label: "Marcos y ejercicios prácticos" },
      { id: "mindset", label: "Mentalidad y decisiones" },
      { id: "all", label: "Un poco de todo" },
    ],
  },
];

export const surveyComplete = {
  eyebrow: "LISTO",
  headline: "Gracias.",
  body: "Tus respuestas me ayudan a escribir cosas más útiles. Revisa tu bandeja de entrada: la guía debería estar ahí en unos minutos.",
};
