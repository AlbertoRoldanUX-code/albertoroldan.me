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
  priceDetails: [
    "Sesión individual.",
    "60 minutos.",
    "Google Meet.",
    "Pago obligatorio por transferencia bancaria antes de la sesión.",
  ],
  cta: "Reservar horario",
  bookingIntro:
    "Elige el horario que mejor te venga. El pago se realiza después para confirmar la reserva.",
  emailSubject: "Reserva de sesión — 60 min",
  profile: {
    tagline:
      "Emprendedor en Georgia. Escribo sobre trabajo, dinero y libertad.",
    bio: [
      "Ayudo a emprendedores a conseguir clientes, crear contenido y construir negocios online.",
      "De trabajos manuales a programador autodidacta y fundador.",
    ],
    valueProp:
      "He pasado de trabajos manuales a construir negocios online viviendo en Georgia. Ahora ayudo a otros emprendedores a recorrer ese camino más rápido.",
    location: "Tbilisi, Georgia",
    category: "Emprendimiento & trabajo independiente",
    servicesHeading: "Servicios",
    linksHeading: "Enlaces",
    availabilityCta: "Ver disponibilidad",
  },
  services: [
    {
      id: "strategy-60",
      title: "Sesión estratégica de 60 minutos",
      summary: [
        "Resolveremos un problema concreto de tu negocio.",
        "Saldrás con un plan de acción claro.",
      ],
      idealForLabel: "Ideal para:",
      idealFor: [
        "Validar una idea",
        "Conseguir clientes",
        "Crear contenido",
        "Automatizar procesos",
        "Internacionalizar tu negocio",
      ],
      outcomesLabel: "Al terminar la sesión tendrás:",
      outcomes: [
        "un plan de acción claro",
        "prioridades definidas",
        "siguientes pasos concretos",
      ],
      duration: "60 min",
      price: "250,00 €",
    },
  ],
  links: [
    {
      title: "Guía gratuita: las 7 capacidades que el colegio no te enseñó",
      href: "/guides/field-manual",
    },
    {
      title: "Sobre mí — de Málaga a Tbilisi",
      href: "/about",
    },
  ],
  faq: {
    heading: "Preguntas frecuentes",
    items: [
      {
        question: "¿La sesión queda grabada?",
        answer:
          "Por defecto no. Si quieres que la grabemos para que puedas revisarla después, dímelo al inicio de la llamada.",
      },
      {
        question: "¿Qué pasa si necesito cambiar la fecha?",
        answer:
          "Puedes reprogramar avisando con al menos 24 horas de antelación. La nueva fecha estará sujeta a disponibilidad.",
      },
      {
        question: "¿Cómo se realiza el pago?",
        answer:
          "Eliges un horario en el calendario y después pagas por transferencia (Wise o SEPA). La sesión solo se confirma cuando recibo el pago.",
      },
      {
        question: "¿Es para mí?",
        answer:
          "Sí, si tienes un negocio propio o estás montándolo y quieres resolver un bloqueo concreto: clientes, contenido, automatización o internacionalización. No es coaching genérico ni mentoring a largo plazo.",
      },
    ],
  },
  payment: {
    title: "Pago",
    headline: "Solo falta confirmar tu sesión.",
    reservedCallout: "Tu sesión ha quedado reservada temporalmente.",
    body: "Completa el pago lo antes posible. Hasta recibirlo, el horario puede quedar disponible para otra persona. En cuanto lo reciba, recibirás un email de confirmación.",
    stepsLabel: "Pasos",
    steps: [
      'Pulsa "Pagar ahora" y completa el pago de 250 € en Wise (también puedes transferir con los datos de abajo).',
      'Pulsa "Ya he pagado" cuando lo hayas hecho.',
      "Revisaré el pago y confirmaré la sesión por email.",
    ],
    transferTitle: "Transferencia SEPA",
    fields: {
      beneficiary: "Beneficiario",
      iban: "IBAN",
      bank: "Banco",
      amount: "Importe",
      reference: "Concepto / referencia",
    },
    copyLabel: "Copiar",
    copiedLabel: "Copiado",
    payLinkCta: "Pagar ahora",
    payQrCaption: "O escanea el código QR con el móvil.",
    payQrAlt: "Código QR para pagar la sesión con Wise",
    emailFallback:
      "Los datos de transferencia aún no están publicados aquí. Escríbeme y te envío el IBAN al momento:",
    sepaOutsideNote:
      "¿Realizas la transferencia desde fuera de la zona SEPA? Escríbeme y te facilitaré los datos internacionales.",
    confirmCta: "Ya he pagado",
    confirmSubject: "Confirmación de pago — sesión 60 min",
    confirmBody:
      "Hola Alberto,\n\nAcabo de realizar la transferencia de 250 € por la sesión.\n\nNombre:\nFecha/hora reservada:\nConcepto usado:\n\nGracias.",
    confirmAckHeadline: "Perfecto. He recibido tu aviso.",
    confirmAckBody:
      "Revisaré la transferencia lo antes posible y recibirás un email cuando la sesión quede confirmada.",
    backToBooking: "Volver a reservar",
    sessionLabel: "Sesión estratégica",
    gateHeadline: "Primero reserva un horario.",
    gateBody:
      "La página de pago forma parte del proceso tras elegir día y hora en el calendario. Reserva tu hueco y te llevaré aquí para confirmar la sesión.",
    gateCta: "Reservar horario",
    metadata: {
      title: "Confirmar sesión",
      description:
        "Completa el pago por transferencia para confirmar tu sesión de consultoría de 60 minutos.",
    },
  },
  metadata: {
    title: "Consultoría",
    description:
      "Sesión de 60 minutos para resolver un problema concreto de tu negocio: validación de una idea, internacionalización, LinkedIn, relocación a Georgia o automatización con IA.",
  },
} satisfies ConsultingContentData;
