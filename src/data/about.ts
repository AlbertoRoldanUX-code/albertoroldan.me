export interface WritingBenefit {
  before: string;
  highlight: string;
  after: string;
}

export const aboutContent = {
  greeting: "Hola, soy Alberto.",
  avatar: "/images/avatar.svg",
  signature: "Alberto Roldán",
  intro: [
    "Construyo negocios desde Georgia y escribo cada semana sobre lo que aprendo en el camino — sin permiso, sin momento perfecto y sin mapa.",
    "Empecé como ferrallista en Suiza. Después fui cartero, repartidor de comida e instalador de placas solares en Alemania. Estudié UX Design, aprendí programación por mi cuenta, viví en varios países y terminé vendiendo mi piso en Málaga para empezar de cero en Tbilisi.",
    "Nada de eso siguió un plan perfecto. Casi todo lo importante que he aprendido vino de moverme antes de sentirse preparado: perder un trabajo, cambiar de país, aprender una habilidad nueva, publicar antes de tener audiencia, vender vino georgiano antes de tener la logística resuelta.",
    "Hoy escribo para quienes quieren construir algo propio sin esperar el momento ideal. Si eso te suena, te invito a unirte.",
  ],
  writingHelp: {
    title: "Cómo te ayudará mi escritura",
    intro:
      "Cada sábado por la mañana recibirás un ensayo sobre una de estas cosas:",
    benefits: [
      {
        before: "",
        highlight: "Lo que realmente quieres",
        after: ", no solo lo que te enseñaron a querer.",
      },
      {
        before: "Tu ",
        highlight: "mentalidad",
        after: ", y las suposiciones que nunca te has molestado en cuestionar.",
      },
      {
        before: "Cómo construir más ",
        highlight: "libertad",
        after: " en tu vida sin tirarlo todo.",
      },
      {
        before: "Qué ",
        highlight: "decisiones",
        after: " valen la pena, y cuáles cuestan demasiado.",
      },
      {
        before: "Cómo construir ",
        highlight: "trabajo propio",
        after: " con sentido sin quedarte atrapado por él.",
      },
    ] satisfies WritingBenefit[],
    outro:
      "Escribo porque nadie me lo contó así cuando empecé. Y porque las capacidades que se acumulan cuando construyes por tu cuenta no se enseñan en ningún sitio.",
  },
};
