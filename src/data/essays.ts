export interface Essay {
  slug: string;
  title: string;
  /** Short teaser used in the “best pieces” drip email. */
  teaser: string;
  /** Reading time label, e.g. "4 min". */
  readingTime: string;
  /** Full essay paragraphs for the web page and sample-essay drip. */
  paragraphs: string[];
}

/**
 * Evergreen essays used by the post-subscribe drip and /essays/[slug].
 * First essay is the day-1 sample send.
 */
export const essays: Essay[] = [
  {
    slug: "no-esperes-a-sentirte-preparado",
    title: "No esperes a sentirte preparado.",
    teaser:
      "Por qué la persona más competente no siempre gana, y qué mueve de verdad la aguja cuando construyes desde cero.",
    readingTime: "4 min",
    paragraphs: [
      "Te han enseñado a esperar el momento correcto.",
      "El título. El porfolio. El ahorro. El permiso de alguien que ya lo hizo. Mientras esperas, el tiempo pasa y la certeza falsa de que «casi estás listo» se convierte en una jaula cómoda.",
      "Yo también caí en eso. Leía sobre programación en lugar de escribir código malo. Diseñaba planes en lugar de poner algo delante de personas reales. El coste no fue solo el retraso. Fue la información que nunca recibí porque nunca lancé nada.",
      "Moverse antes de sentirte preparado no es imprudencia. Es hacer el coste de equivocarte lo más pequeño posible. Dejar de preguntar «¿estoy listo?» y empezar a preguntar «¿cómo lo descubro en 48 horas?»",
      "Mi primer mes en Suiza no fue como consultor. Fue como ferrallista. Después comida rápida, obras, cartero, reparto. Nada de eso estaba en un plan. Todo me enseñó la misma lección: el permiso llega después, no antes.",
      "Cuando empecé con el vino georgiano, no monté una operación perfecta. Publiqué, contacté clientes, hice un pedido de prueba. Las cajas llegaron rotas. Eso también son datos. Puede haber interés y, aun así, la logística puede destruir el margen si no la diseñas.",
      "La gente que avanza no tiene menos miedo. Tiene un ciclo más corto entre idea y realidad. Idea el lunes. Versión cutre el viernes. Personas reales delante. Señal, no aplauso.",
      "Si llevas meses «trabajando en tu proyecto» y nadie de fuera lo ha visto, no estás construyendo. Estás ensayando en privado.",
      "Esta semana, elige una cosa que llevas posponiendo. Haz la versión más cutre posible. Ponla delante de diez personas. Anota qué pasa.",
      "No necesitas sentirte preparado. Necesitas un dato.",
    ],
  },
  {
    slug: "el-permiso-llega-despues",
    title: "El permiso llega después.",
    teaser:
      "Nadie te va a autorizar a construir una vida propia. La autoridad aparece cuando ya te has movido.",
    readingTime: "3 min",
    paragraphs: [
      "Esperamos permiso como si fuera un documento.",
      "Un jefe que diga que sí. Un cliente que pida exactamente lo que sabemos hacer. Un algoritmo que nos regale alcance. Mientras esperamos, seguimos siendo opcionales.",
      "La verdad incómoda: la mayoría de permisos llegan como consecuencia, no como requisito. Publicas antes de tener audiencia. Cobras antes de sentirte experto. Te mudas antes de tener el plan perfecto.",
      "Vendí mi piso en Málaga y empecé de cero en Tbilisi. No porque tuviera todas las respuestas. Porque seguir esperando a sentirme listo me estaba costando más que equivocarme en público.",
      "Si estás esperando que el mundo te confirme que puedes, vas a esperar mucho. Empieza pequeño, en voz alta, y deja que la evidencia haga el trabajo que la duda nunca hará.",
    ],
  },
  {
    slug: "rico-en-aparencia-pobre-en-opciones",
    title: "Rico en apariencia, pobre en opciones.",
    teaser:
      "La diferencia entre parecer bien y tener margen de maniobra no está en lo que ganas.",
    readingTime: "4 min",
    paragraphs: [
      "Hay gente que gana bien y vive atrapada.",
      "Coche nuevo, alquiler alto, calendario lleno, y cero capacidad de decir que no. Parecen solventes. En realidad están una decisión mala lejos de perder el aire.",
      "Y hay gente que gana menos sobre el papel y duerme mejor. Porque tienen runway. Porque sus gastos no gobiernan su identidad. Porque pueden aguantar tres meses sin pánico.",
      "Cuando miro dinero, ya no miro solo ingresos. Miro opciones. ¿Puedo cambiar de proyecto? ¿Puedo decir no a un cliente tóxico? ¿Puedo tomarme dos semanas sin que se caiga todo?",
      "Construir riqueza real empieza por no confundir consumo con progreso. Un estilo de vida caro puede ser la forma más elegante de empobrecerte.",
      "Antes de subir el nivel de vida, sube el nivel de autonomía. El resto se ordena solo.",
    ],
  },
  {
    slug: "mudarte-es-una-habilidad",
    title: "Mudarte es una habilidad.",
    teaser:
      "Cambiar de país no es turismo con wifi. Es entrenar la capacidad de reconstruirte sin red.",
    readingTime: "4 min",
    paragraphs: [
      "Mudarte parece un evento. En realidad es una competencia.",
      "Aprender el idioma lo justo. Abrir una cuenta. Entender el mercado local. Aguantar la soledad de las primeras semanas. Volver a ser principiante cuando ya te sentías competente en otro sitio.",
      "He pasado por Bruselas, Hong Kong, Alemania, Suiza y Georgia. Cada traslado me quitó una capa de certezas y me obligó a construir otra.",
      "La gente pregunta por el destino. Yo preguntaría por la capacidad: ¿puedes generar valor en un contexto nuevo sin que alguien te traduzca el mundo?",
      "Esa habilidad paga dos veces. Primero, porque amplía tu mapa de oportunidades. Segundo, porque te vuelve menos frágil. Si tu vida solo funciona en un código postal, no eres libre. Estás alquilando estabilidad.",
      "No hace falta mudarte mañana. Pero sí merece la pena preguntarte qué parte de tu seguridad depende de no moverte nunca.",
    ],
  },
  {
    slug: "publica-antes-de-tener-audiencia",
    title: "Publica antes de tener audiencia.",
    teaser:
      "La audiencia no llega para que empieces. Llega porque empezaste cuando nadie miraba.",
    readingTime: "3 min",
    paragraphs: [
      "Esperar a tener audiencia para publicar es como esperar a estar en forma para ir al gimnasio.",
      "El trabajo en público es el mecanismo. No el premio. Cada pieza imperfecta es un imán débil. Juntas, con el tiempo, empiezan a atraer a las personas correctas.",
      "Yo publiqué en LinkedIn antes de tener producto pulido. Antes de sentirme «alguien». Publicar fue la prueba. Algunas cosas no resonaron. Otras sí. Eso es el juego.",
      "Si escribes solo en privado, perfeccionas sin calibrar. Si publicas, el mundo te edita.",
      "Esta semana, publica una idea que llevas guardando. No para viralizar. Para existir delante de alguien que aún no te conoce.",
      "La audiencia llega tarde. La disciplina de publicar tiene que llegar pronto.",
    ],
  },
];
