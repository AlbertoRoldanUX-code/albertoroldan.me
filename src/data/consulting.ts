import type { ConsultingContentData } from "./consulting-types";

export const consultingContent = {
  eyebrow: "Consultoría 1:1",
  title:
    "Construye un sistema en LinkedIn que genere conversaciones con clientes.",
  subtitle:
    "Si publicas sin constancia, no sabes qué escribir o tus publicaciones no generan conversaciones, esta consultoría te ayuda a construir un sistema que puedas mantener durante años.",
  heroCta: "Solicitar una conversación",
  forWhom: {
    title: "Para quién es",
    intro:
      "Esta consultoría es para personas que ya están construyendo algo propio y necesitan un canal claro de captación.",
    items: [
      "Freelancers y fundadores que quieren clientes sin depender solo del boca a boca",
      "Profesionales independientes que publican a ratos y no ven resultados",
      "Quienes saben que LinkedIn importa, pero no tienen un sistema que puedan sostener",
    ],
  },
  includes: {
    title: "Qué trabajamos",
    intro:
      "No optimizamos solo tu perfil. Construimos un sistema completo: posicionamiento, creación de contenido, distribución, conversaciones y seguimiento para que LinkedIn deje de depender de la inspiración.",
    items: [
      {
        title: "Posicionamiento y perfil",
        description:
          "Qué ofreces, a quién, y cómo se lee tu perfil en diez segundos. Headline, About y prueba social que vendan sin sonar a plantilla.",
      },
      {
        title: "Creación y distribución de contenido",
        description:
          "Qué publicar, con qué ritmo y cómo reutilizar ideas. Un sistema que puedas ejecutar aunque no te sientas inspirado ese día.",
      },
      {
        title: "Conversaciones y seguimiento",
        description:
          "Conexiones, comentarios y mensajes que abren puertas sin parecer spam. El contenido atrae; la conversación cierra.",
      },
      {
        title: "Plan que puedes sostener",
        description:
          "Sales con prioridades concretas y un ritmo realista: qué hacer primero, qué medir y qué ignorar.",
      },
    ],
  },
  process: {
    title: "Cómo funciona",
    intro:
      "Si no creo que pueda ayudarte, te lo diré y no te propondré trabajar conmigo.",
    steps: [
      {
        label: "01",
        title: "Escribes",
        description:
          "Cuéntame en pocas líneas qué construyes, a quién quieres llegar y dónde estás atascado.",
      },
      {
        label: "02",
        title: "Vemos si encaja",
        description:
          "Leo tu mensaje y te digo con claridad si tiene sentido o no. Sin presión y sin propuestas forzadas.",
      },
      {
        label: "03",
        title: "Trabajamos",
        description:
          "Sesión 1:1 (o un acompañamiento corto) centrado en tu sistema: perfil, contenido, conversaciones y seguimiento.",
      },
    ],
  },
  whyMe: {
    title: "¿Por qué conmigo?",
    photo: "/images/avatar.png",
    photoAlt: "Alberto Roldán",
    paragraphs: [
      "Mientras construía VivaSpeak, conseguí clientes sin una audiencia enorme. Lo hice con mensajes claros, conversaciones reales y un sistema sostenible.",
      "Escribo cada semana sobre trabajo, dinero y libertad y utilizo LinkedIn para atraer oportunidades reales hacia mis negocios. Todo lo que enseño es algo que utilizo yo mismo.",
      "No te vendo fórmulas milagrosas. Te ayudo a construir un sistema que encaje con tu negocio y que puedas mantener durante años.",
    ],
    credentialsIntro:
      "Mi experiencia viene de construir y vender, no solo de hablar sobre ello.",
    credentials: [
      "Trabajé como desarrollador de software antes de dedicarme a construir negocios propios.",
      "Fundé VivaSpeak, un producto de automatización de ventas.",
      "He conseguido clientes para mis propios negocios utilizando LinkedIn como principal canal de adquisición, sin depender de anuncios.",
    ],
  },
  outcome:
    "Al terminar tendrás un perfil más claro, un sistema de contenido adaptado a tu negocio y un plan concreto para generar conversaciones con clientes de forma constante.",
  closing: {
    title: "Convierte LinkedIn en un sistema de adquisición, no en una lotería.",
    body: "Escríbeme y vemos si tiene sentido trabajar juntos. Si creo que puedo ayudarte, te propondré los siguientes pasos. Si no, también te lo diré.",
    cta: "Escribir a Alberto",
    note: "Respondo personalmente a alberto@iberiancaucasus.com",
  },
  emailSubject: "Consultoría LinkedIn",
  metadata: {
    title: "Consultoría",
    description:
      "Consultoría 1:1 para freelancers y fundadores que quieren convertir LinkedIn en un canal predecible de captación: sistema de contenido, conversaciones y seguimiento.",
  },
} satisfies ConsultingContentData;
