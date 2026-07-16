import type { PrivacyContentData } from "./privacy-types";

export const ui = {
  nav: {
    about: "Sobre mí",
    resources: "Recursos",
    consulting: "Consultoría",
  },
  footer: {
    privacy: "Privacidad",
    servicePolicy: "Prestación del servicio",
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
    title: "Política de privacidad",
    description: "Política de privacidad de albertoroldan.me",
    effectiveLabel: "Vigente",
    updatedLabel: "Última actualización",
    effectiveDate: "15 de julio de 2026",
    updatedDate: "16 de julio de 2026",
    intro:
      "Esta Política de privacidad describe cómo Alberto Fernández Roldán (“yo”, “me” o “mi”) recopila, utiliza y comparte información personal sobre ti cuando visitas albertoroldan.me (el “Sitio”), te suscribes al newsletter, descargas una guía gratuita o interactúas de otro modo con mis servicios (conjuntamente, los “Servicios”). Esta Política de privacidad explica qué datos personales trato, con qué finalidad, durante cuánto tiempo los conservo, con quién puedo compartirlos y qué derechos puedes ejercer.",
    sections: [
      {
        title: "1. Responsable del tratamiento",
        paragraphs: [
          "El responsable del tratamiento de los datos personales recogidos a través de los Servicios es Alberto Fernández Roldán, Individual Entrepreneur registrado en Georgia, con Identification Code / Tax ID 304812022.",
          "Domicilio profesional: 47 Ketevan Tsamebuli Avenue 14, Tbilisi 0101, Georgia.",
          "Para cualquier consulta relacionada con privacidad puedes escribir a: privacidad@albertoroldan.me.",
        ],
      },
      {
        title: "2. Datos que recogemos",
        paragraphs: [
          "Recojo una cantidad limitada de información, solo la necesaria para operar los Servicios.",
        ],
        subsections: [
          {
            heading: "Información que facilitas:",
            bullets: [
              {
                label: "Dirección de correo electrónico",
                text: "cuando te suscribes al newsletter, solicitas una guía gratuita o te pones en contacto conmigo.",
              },
              {
                label: "Respuestas a encuestas",
                text: "cuando decides responder la encuesta opcional tras suscribirte (por ejemplo, si trabajas de forma independiente, tu objetivo actual o los temas que te interesan). Se usan para adaptar el contenido y las ofertas que te envío.",
              },
            ],
          },
          {
            heading: "Información recogida de forma automática:",
            bullets: [
              {
                label: "Analítica agregada.",
                text: "Uso Vercel Web Analytics para contar visitas a páginas e identificar contenido popular. Este servicio no usa cookies y anonimiza las direcciones IP; no lo empleo para identificar a visitantes individuales.",
              },
              {
                label: "Almacenamiento local del navegador.",
                text: "El Sitio recuerda tu preferencia de tema claro/oscuro mediante localStorage. Estos datos permanecen en tu dispositivo y no se me transmiten. Tras suscribirte, el email puede guardarse temporalmente en sessionStorage para asociar la encuesta opcional de onboarding.",
              },
              {
                label: "Cookie técnica guide_access.",
                text: "Tras suscribirte, puede establecerse una cookie técnica guide_access para permitir el acceso temporal a la guía solicitada tras la suscripción. No contiene tu dirección de correo.",
              },
              {
                label: "Registros de servidor.",
                text: "Como la mayoría de sitios web, el proveedor de alojamiento retiene registros de solicitud de corta duración (dirección IP, user agent, marca temporal, URL) por motivos de seguridad y prevención de abusos.",
              },
            ],
          },
        ],
      },
      {
        title: "3. Cómo uso tu información",
        bullets: [
          {
            text: "Enviarte el ensayo semanal y cualquier newsletter o descarga que solicites",
          },
          {
            text: "Entregar y dar soporte a las guías u otros recursos gratuitos solicitados",
          },
          {
            text: "Responder a tus consultas y solicitudes de atención",
          },
          {
            text: "Personalizar el contenido y las ofertas que te muestro, a partir de respuestas opcionales a encuestas",
          },
          {
            text: "Gestionar reservas de sesiones y confirmarlas tras recibir el pago",
          },
          {
            text: "Medir el uso agregado del Sitio y mejorar los Servicios",
          },
          {
            text: "Detectar, prevenir y abordar fraude, abusos o incidencias de seguridad",
          },
          {
            text: "Cumplir obligaciones legales",
          },
        ],
        closingParagraphs: [
          "La base legal principal es tu consentimiento al suscribirte (art. 6.1.a del RGPD) y, cuando proceda, el interés legítimo en operar y mejorar los Servicios (art. 6.1.f). Si debo conservar datos por obligación legal, la base será el cumplimiento de una obligación legal (art. 6.1.c).",
        ],
      },
      {
        title: "4. Cómo comparto tu información",
        paragraphs: [
          "Nunca vendo, alquilo ni comercio con tu información personal. Solo la comparto con las siguientes categorías de destinatarios, y únicamente en la medida necesaria para operar los Servicios:",
        ],
        subsections: [
          {
            heading: "Proveedores de servicios",
            bullets: [
              {
                label: "Supabase",
                text: "— almacena las suscripciones al newsletter y las respuestas de la encuesta opcional.",
              },
              {
                label: "Vercel",
                text: "— aloja el Sitio y proporciona analítica web sin cookies.",
              },
              {
                label: "Resend",
                text: "— gestiona el envío de correos electrónicos relacionados con los Servicios, incluidos mensajes transaccionales y el newsletter.",
              },
              {
                label: "Cal.com",
                text: "— gestiona la reserva de horario de las sesiones de consultoría. El pago se completa después en el Sitio (transferencia bancaria); la sesión solo se confirma cuando el pago ha sido recibido.",
              },
              {
                label: "Wise (u otro proveedor de transferencia)",
                text: "— puedes usar sus datos de pago publicados en el Sitio para abonar la sesión. El Sitio no procesa pagos con tarjeta.",
              },
            ],
            closingParagraphs: [
              "Estos proveedores solo reciben la información que necesitan para su función concreta. Tratan los datos únicamente para prestar los servicios contratados y conforme a los acuerdos de tratamiento de datos que resulten aplicables.",
            ],
          },
          {
            heading: "Revelaciones legales",
            paragraphs: [
              "Puedo divulgar información si creo de buena fe que es necesario por ley, por orden judicial, o para proteger los derechos, la propiedad o la seguridad de Alberto Fernández Roldán, de los suscriptores o del público.",
            ],
          },
          {
            heading: "Transferencias de negocio",
            paragraphs: [
              "Si me involucro en una fusión, adquisición o venta de activos, tu información puede transferirse como parte de esa operación. Te informaré de cualquier cambio de ese tipo.",
            ],
          },
        ],
      },
      {
        title: "5. Cookies y tecnologías similares",
        paragraphs: [
          "El Sitio no establece cookies de marketing o publicidad. Solo uso lo necesario para que el Sitio funcione:",
        ],
        bullets: [
          {
            text: "localStorage para tu preferencia de tema. Permanece en tu dispositivo.",
          },
          {
            text: "sessionStorage de forma temporal para enlazar la encuesta opcional tras la suscripción.",
          },
          {
            text: "Cookie técnica guide_access para permitir el acceso temporal a la guía solicitada tras la suscripción.",
          },
          {
            text: "Vercel Web Analytics, que no utiliza cookies y recopila datos agregados y anonimizados.",
          },
        ],
        closingParagraphs: [
          "Puedes configurar tu navegador para bloquear o eliminar las cookies técnicas, aunque algunas funcionalidades del Sitio podrían dejar de funcionar correctamente.",
          "Los servicios de terceros a los que enlace (por ejemplo, perfiles en redes sociales) pueden establecer sus propias cookies en sus dominios conforme a sus respectivas políticas de privacidad.",
        ],
      },
      {
        title: "6. Plazo de conservación",
        paragraphs: [
          "Conservo la información personal solo el tiempo necesario para prestar los Servicios y cumplir obligaciones legales.",
        ],
        bullets: [
          {
            label: "Los emails de los suscriptores",
            text: "se conservan hasta que te des de baja o solicites la eliminación. Puedes cancelar la suscripción en cualquier momento con el enlace al pie de cada email.",
          },
          {
            label: "Las respuestas a las encuestas",
            text: "se conservan asociadas a la suscripción mientras esta permanezca activa, salvo que solicites su eliminación antes.",
          },
          {
            label: "Los registros del servidor y los datos analíticos",
            text: "se conservan de forma rotativa, normalmente no más de 90 días.",
          },
        ],
      },
      {
        title: "7. Tus derechos",
        paragraphs: ["Tienes derecho a:"],
        bullets: [
          {
            label: "Acceso",
            text: "— solicitar una copia de la información personal que tengo sobre ti.",
          },
          {
            label: "Rectificación",
            text: "— pedirme que corrija información inexacta.",
          },
          {
            label: "Supresión",
            text: "— pedirme que elimine tu información personal.",
          },
          {
            label: "Oposición",
            text: "— oponerte al tratamiento de tus datos cuando resulte aplicable.",
          },
          {
            label: "Limitación",
            text: "— pedir que limite el tratamiento en los casos previstos por la normativa.",
          },
          {
            label: "Portabilidad",
            text: "— recibir tus datos en un formato estructurado, cuando resulte aplicable.",
          },
          {
            label: "Retirar el consentimiento",
            text: "— cuando el tratamiento se base en él, sin que ello afecte a la licitud del tratamiento previo.",
          },
          {
            label: "Darse de baja del newsletter",
            text: "— en cualquier momento. El enlace está en cada email que envío.",
          },
        ],
        closingParagraphs: [
          "Para ejercer cualquiera de estos derechos puedes escribir a: privacidad@albertoroldan.me.",
        ],
        subsections: [
          {
            heading: "Residentes en el EEE, Reino Unido y Suiza (RGPD)",
            paragraphs: [
              "Si resides en el Espacio Económico Europeo, el Reino Unido o Suiza, también puedes presentar una reclamación ante tu autoridad local de protección de datos. Me baso en tu consentimiento (cuando te suscribes) y en mis intereses legítimos (operar y mejorar los Servicios) como bases jurídicas del tratamiento.",
              "Si consideras que no he atendido correctamente tu solicitud, puedes presentar una reclamación ante la autoridad de protección de datos competente en tu lugar de residencia, trabajo o donde consideres que se ha producido la infracción.",
            ],
          },
          {
            heading: "Residentes de California (CCPA / CPRA)",
            paragraphs: [
              "Los residentes de California tienen derecho a saber qué información personal se recoge, a solicitar su eliminación, a corregir información inexacta y a no ser discriminados por ejercer estos derechos. No vendo ni comparto información personal para publicidad conductual entre contextos, según esos términos se definen en la ley de California.",
            ],
          },
        ],
      },
      {
        title: "8. Transferencias internacionales",
        paragraphs: [
          "Mi actividad está basada en Georgia, y mis proveedores de servicios pueden tratar tu información en la Unión Europea, Estados Unidos u otros países. Cuando sea necesario, me apoyo en garantías adecuadas (como cláusulas contractuales tipo u otras medidas equivalentes) para las transferencias internacionales de datos personales desde el EEE, el Reino Unido y Suiza.",
        ],
      },
      {
        title: "9. Seguridad",
        paragraphs: [
          "Aplico medidas administrativas, técnicas y organizativas razonables para proteger la información personal. Ningún método de transmisión o almacenamiento es 100 % seguro; trabajo con proveedores con prácticas de seguridad estándar del sector.",
        ],
      },
      {
        title: "10. Privacidad de menores",
        paragraphs: [
          "Los Servicios no están dirigidos a menores de 16 años y no recopilo conscientemente datos personales de menores de esa edad. Si crees que un menor me ha facilitado datos personales, contacta conmigo y los eliminaré.",
        ],
      },
      {
        title: "11. Enlaces a terceros",
        paragraphs: [
          "El Sitio puede enlazar a sitios y servicios de terceros (por ejemplo, perfiles en redes sociales). Sus prácticas de privacidad se rigen por sus propias políticas, que te animo a revisar.",
        ],
      },
      {
        title: "12. Cambios en esta política",
        paragraphs: [
          "Puedo actualizar esta Política de privacidad de vez en cuando. Cuando lo haga, revisaré la fecha de “Última actualización” al inicio de esta página. Si los cambios son sustanciales, proporcionaré un aviso más destacado (por ejemplo, un email a los suscriptores actuales).",
        ],
      },
      {
        title: "13. Contacto",
        paragraphs: [
          "Si tienes cualquier consulta relacionada con esta Política de privacidad o deseas ejercer alguno de tus derechos, puedes escribir a:",
          "Email: privacidad@albertoroldan.me",
          "Correo: Alberto Fernández Roldán, 47 Ketevan Tsamebuli Avenue 14, Tbilisi 0101, Georgia",
        ],
      },
    ],
  } as PrivacyContentData,

  servicePolicy: {
    title: "Política de prestación del servicio",
    description:
      "Condiciones de la sesión de consultoría: reserva, pago, reprogramación, cancelación y devoluciones.",
    effectiveLabel: "Vigente",
    updatedLabel: "Última actualización",
    effectiveDate: "16 de julio de 2026",
    updatedDate: "16 de julio de 2026",
    intro:
      "Esta política describe cómo se presta la sesión de consultoría ofrecida en albertoroldan.me. Al reservar y pagar, aceptas estas condiciones.",
    sections: [
      {
        title: "1. Qué compras",
        paragraphs: [
          "Adquieres una sesión estratégica individual de hasta 60 minutos realizada por videollamada mediante Google Meet. El precio vigente aparece en la página de consultoría en el momento de la reserva.",
        ],
      },
      {
        title: "2. Proceso de reserva y confirmación",
        paragraphs: [
          "Eliges un horario disponible en el calendario. Después recibes la página de pago para completar la transferencia.",
          "La reserva del horario no confirma la sesión. La sesión queda confirmada únicamente tras recibir el pago. Hasta entonces, el hueco puede quedar disponible para otra persona y la reserva puede cancelarse.",
          "La sesión únicamente quedará confirmada una vez recibido el pago.",
          "Cuando el pago se confirme, recibirás un email con la confirmación y los detalles de la llamada.",
        ],
      },
      {
        title: "3. Reprogramaciones",
        paragraphs: [
          "Puedes solicitar un cambio de fecha o de hora avisando con al menos 24 horas de antelación. La nueva fecha estará sujeta a disponibilidad.",
        ],
      },
      {
        title: "4. Cancelaciones y devoluciones",
        bullets: [
          {
            text: "Si cancelas con más de 24 horas de antelación, puedes elegir entre reprogramar la sesión o solicitar el reembolso íntegro.",
          },
          {
            text: "Si cancelas con menos de 24 horas de antelación, no hay devolución.",
          },
          {
            text: "Si yo tengo que cancelar la sesión, puedes elegir otra fecha o el reembolso completo.",
          },
        ],
      },
      {
        title: "5. No-show",
        paragraphs: [
          "Si no acudes a la llamada confirmada y han transcurrido 15 minutos desde la hora de inicio sin previo aviso, la sesión se considerará no presentada, se dará por realizada y no habrá devolución.",
        ],
      },
      {
        title: "6. Contacto",
        paragraphs: [
          "Para reprogramar, cancelar o cualquier consulta sobre esta política, escribe a:",
          "Correo electrónico: alberto@iberiancaucasus.com",
          "Intentaré responder en un plazo de dos días laborables.",
        ],
      },
      {
        title: "7. Actualizaciones",
        paragraphs: [
          "Esta política podrá actualizarse en cualquier momento. La versión publicada en esta página será la vigente.",
        ],
      },
    ],
  } as PrivacyContentData,

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
