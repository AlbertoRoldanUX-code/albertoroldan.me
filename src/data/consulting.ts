import type { ConsultingContentData } from "./consulting-types";

export const consultingContent = {
  title: "Consultoría",
  headline: "Resuelve un problema concreto de tu negocio en 60 minutos.",
  body: "Analizaremos tu situación, identificaremos el cuello de botella y saldrás con un plan de acción concreto.",
  focus:
    "Ayudo a emprendedores a resolver bloqueos relacionados con crecimiento, ventas e internacionalización.",
  examplesLabel: "Algunos temas habituales:",
  examples: [
    "Validación de una idea de negocio",
    "Internacionalización",
    "Posicionamiento en LinkedIn",
    "Relocación a Georgia",
    "Automatización con IA",
  ],
  price: "250 €",
  priceDetails: ["Sesión individual.", "60 minutos.", "Google Meet."],
  cta: "Reservar una sesión",
  bookingIntro:
    "Selecciona el día y la hora que mejor te venga. Tras reservar recibirás automáticamente el enlace de Google Meet.",
  emailSubject: "Reserva de sesión — 60 min",
  metadata: {
    title: "Consultoría",
    description:
      "Sesión de 60 minutos para resolver un problema concreto de tu negocio: validación de una idea, internacionalización, LinkedIn, relocación a Georgia o automatización con IA.",
  },
} satisfies ConsultingContentData;
