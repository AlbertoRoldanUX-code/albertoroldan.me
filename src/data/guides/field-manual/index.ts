import type { Guide } from "@/types/guide";
import { fieldManualCapacities } from "./capacities";

export const fieldManualGuide: Guide = {
  slug: "field-manual",
  cover: {
    eyebrow: "Una guía de Alberto Roldán.",
    title:
      "Las 7 capacidades que el colegio no te enseñó para construir algo propio",
    subtitle:
      "Lo que aprendí pasando de trabajos manuales a programador autodidacta y creador de negocios desde Georgia",
    author: "Alberto Roldán",
    website: "albertoroldan.me",
  },
  introduction: {
    title:
      "Las 7 capacidades que el colegio no te enseñó para construir algo propio",
    subtitle:
      "Lo que aprendí pasando de trabajos manuales a programador autodidacta y creador de negocios desde Georgia",
    byline: "Alberto Roldán",
    sections: [
      {
        heading: "Antes de leer esta guía",
        paragraphs: [
          "No escribo esto desde la cima. Lo escribo desde el camino.",
          "Dejé la universidad porque sentía que no estaba aprendiendo cosas útiles para la vida que quería construir. Después viví y trabajé en Bruselas, Hong Kong, Alemania, Suiza, Argentina y España. Fui voluntario, profesor de idiomas, cocinero, instalador de placas solares, ferrallista, cartero y repartidor.",
          "Más tarde estudié diseño UX, aprendí programación por mi cuenta y terminé trabajando como desarrollador. Fundé un producto de automatización con IA, conseguí clientes y acabé cerrándolo. Después vendí mi piso en Málaga y me mudé a Tbilisi para empezar de nuevo.",
          "Nada de eso siguió un plan perfecto.",
          "De hecho, casi todo lo importante que he aprendido vino de moverme antes de sentirme preparado: perder un trabajo, cambiar de país, aprender una habilidad nueva, publicar antes de tener audiencia, vender vino georgiano antes de tener la logística resuelta. Así fui descubriendo, con datos reales, qué funcionaba y qué no.",
          "Por eso esta guía no va de copiar mis pasos.",
          "Mis pasos no se pueden copiar. Tus circunstancias serán otras. Tu país será otro. Tu mercado será otro. Tu timing será otro.",
          "Lo que sí puedes desarrollar son las capacidades que se repiten cuando construyes algo propio: moverte rápido, leer señales reales, crear activos, diseñar tu vida antes que tu negocio y tomar decisiones sin esperar permiso.",
          "Esta guía recoge siete capacidades que he ido desarrollando a la fuerza. Cada una tiene la misma estructura: qué es, qué me costó, cómo se veía cuando la desarrollé, qué te cuesta si nunca la desarrollas, cómo se ve en la práctica, el error común y un ejercicio concreto.",
          "No necesitas leerla como un plan cerrado. Léela como un manual de campo.",
          "Al final no tendrás una fórmula. Tendrás algo más útil: criterio.",
        ],
      },
    ],
  },
  capacities: fieldManualCapacities,
  closing: {
    title: "A qué suma todo esto en realidad",
    paragraphs: [
      "Estas siete capacidades no aparecen en secuencia limpia. Se desarrollan juntas, se refuerzan y a veces se contradicen.",
      "Mi trayectoria no fue una línea recta. Pasé por trabajos manuales, varios países, diseño, programación, ventas y negocios que funcionaron durante un tiempo y después dejaron de hacerlo.",
      "Ninguno de esos pasos puede copiarse exactamente, pero las capacidades que desarrollé sí pueden entrenarse.",
      "No necesitas tener un mapa completo. Necesitas aprender a moverte, observar y corregir mientras avanzas.",
    ],
  },
  author: {
    name: "Alberto Roldán",
    website: "albertoroldan.me",
    bio: [
      "Alberto Roldán crea negocios desde Tbilisi, Georgia. Pasó de trabajos manuales a programador autodidacta, fundó y cerró un producto de IA, y ahora exporta vino georgiano a Europa. Escribe cada semana sobre lo que aprende en el camino.",
    ],
  },
  invitation: {
    title: "¿Y ahora qué?",
    paragraphs: [
      "No dejes que esta guía se quede en una carpeta de tu ordenador.",
      "Empieza por una sola capacidad: la que más te incomode.",
      "Cada semana comparto lo que voy aprendiendo mientras construyo negocios desde Georgia.",
    ],
    buttonText: "Suscríbete en albertoroldan.me",
    buttonUrl: "https://albertoroldan.me",
  },
};
