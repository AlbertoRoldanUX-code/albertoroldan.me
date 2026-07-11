export interface WritingBenefit {
  before: string;
  highlight: string;
  after: string;
}

export const aboutContent = {
  greeting: "Hola, soy Alberto.",
  avatar: "/images/avatar.png",
  signature: "Alberto Roldán",
  intro: [
    "Construyo negocios desde Georgia y escribo cada semana sobre lo que aprendo en el camino, sin permiso, sin momento perfecto y sin mapa.",
    "Dejé la universidad porque decidí que no aprendía cosas útiles para la vida real. Fui voluntario en Bruselas, en Hong Kong enseñé idiomas, trabajé de relaciones públicas y de extra en películas, empecé una formación profesional de tornero fresador en un pueblo de Baviera y a los seis meses me mudé a Leipzig. Ahí vi un cartel en un restaurante español y acabé de cocinero; también lavaplatos, carpas y placas solares. Viajé por Sudamérica y decidí irme a Suiza.",
    "En Suiza fui ferrallista, después en una cadena de comida rápida, un restaurante mexicano del que me echaron, temporero en una obra, cartero (me llamaron por teléfono mientras estaba en la obra), reparto de comida en bici eléctrica y paquetes en moto. Ahí empecé a ordenar mi vida con la matriz de Eisenhower, de Los 7 hábitos de Stephen Covey: dejé trabajos que ya no encajaban conmigo y me mudé a Argentina para estudiar diseño UX online. Me metí en programación porque los trabajos pedían HTML y CSS. Desde Málaga di soporte SAP HCM a trabajadores de una gran cadena de supermercados. Volví a Göttingen (el puesto se llamaba SAP HXM Consultant, pero era desarrollador) y de ahí me echaron. Terminé vendiendo mi piso en Málaga para empezar de cero en Tbilisi.",
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
