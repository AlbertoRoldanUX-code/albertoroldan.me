export const ui = {
  nav: {
    about: "Sobre mí",
    resources: "Recursos",
  },
  footer: {
    privacy: "Privacidad",
  },
  language: {
    label: "Idioma",
    es: "ES",
    en: "EN",
  },
  resources: {
    title: "Recursos",
    cta: "Obtén la guía gratuita →",
  },
  about: {
    readMore: "Leer más →",
  },
  guide: {
    back: "← Volver",
    notFound: "Guía no encontrada",
    print: "Imprimir / PDF",
    pages: "páginas",
    pageOf: (current: number, total: number) =>
      `Página ${current} de ${total}`,
    benefitsTitle: "Qué incluye",
  },
  email: {
    loading: "Enviando…",
    error: "Algo salió mal. Inténtalo de nuevo.",
    ariaLabel: "Dirección de correo electrónico",
  },
  thankYou: {
    emailPrefix: (arrival: string) => `En ${arrival} recibirás un ejemplar gratuito de`,
    emailSuffix: "en tu bandeja de entrada.",
  },
  survey: {
    questionOf: (step: number, total: number) =>
      `Pregunta ${step + 1} de ${total}`,
    otherPlaceholder: "Cuéntame un poco más…",
    continue: "Continuar",
    back: "Atrás",
  },
  privacy: {
    title: "Privacidad",
    description: "Política de privacidad de albertoroldan.me",
    paragraphs: [
      "Recopilo tu dirección de correo electrónico cuando te suscribes al newsletter o descargas una guía gratuita. La uso únicamente para enviarte contenido relacionado con albertoroldan.me.",
      "No vendo ni comparto tu información con terceros. Puedes darte de baja en cualquier momento usando el enlace incluido en cada email.",
      "Si tienes preguntas sobre tus datos, escríbeme a través de las redes sociales enlazadas en el pie de página.",
    ],
  },
  metadata: {
    notFound: "No encontrado",
    aboutTitle: "Sobre mí",
    resourcesTitle: "Recursos",
    resourcesDescription:
      "Guías gratuitas para construir algo propio y ganar autonomía.",
    thankYouTitle: "Ya estás dentro",
    thankYouDescription: (brand: string) =>
      `Tu guía está en camino. Mientras tanto, responde unas preguntas rápidas para mejorar ${brand}`,
  },
};
