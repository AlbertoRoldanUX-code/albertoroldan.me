export interface WritingBenefit {
  before: string;
  highlight: string;
  after: string;
}

export const aboutContent = {
  greeting: "Hola, soy Alberto Roldán.",
  avatar: "/images/avatar.jpg",
  signature: "Alberto Roldán",
  intro: [
    "Construyo negocios desde Georgia y escribo cada semana sobre lo que aprendo en el camino, sin permiso, sin momento perfecto y sin mapa.",
    "Dejé la universidad porque no aprendía cosas útiles para la vida real. Fui voluntario en Bruselas, enseñé idiomas en Hong Kong y trabajé de relaciones públicas y de extra en películas. Después pasé por Alemania y Suiza: cocinas, obras, placas solares, repartos.",
    "Trabajé como cocinero, ferrallista, cartero, repartidor y profesor antes de aprender programación por mi cuenta. Más tarde vendí mi piso en Málaga para empezar de cero en Tbilisi.",
    "Nada de eso siguió un plan perfecto. Casi todo lo importante que he aprendido vino de moverme antes de sentirme preparado: cambiar de país, aprender una habilidad nueva, publicar antes de tener audiencia.",
    "Hoy escribo para quienes quieren construir una vida más libre sin esperar el momento ideal. Cada sábado comparto una idea práctica que me habría gustado aprender diez años antes. Si eso te suena, te invito a unirte.",
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
        before: "Cómo ganar más ",
        highlight: "libertad",
        after: " en tu vida sin tirarlo todo.",
      },
      {
        before: "Qué ",
        highlight: "decisiones",
        after: " valen la pena, y cuáles cuestan demasiado.",
      },
      {
        before: "Cómo diseñar ",
        highlight: "una carrera independiente",
        after: " con sentido sin quedarte atrapado por ella.",
      },
    ] satisfies WritingBenefit[],
    outro:
      "Escribo porque nadie me lo contó así cuando empecé. Y porque las capacidades que se acumulan cuando trabajas por tu cuenta no se enseñan en ningún sitio.",
  },
};
