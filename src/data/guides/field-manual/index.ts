import type { Guide } from "@/types/guide";
import { fieldManualCapacities } from "./capacities";

export const fieldManualGuide: Guide = {
  slug: "field-manual",
  cover: {
    eyebrow: "Una guía de albertoroldan.",
    title:
      "Las 7 capacidades que el colegio nunca te enseñó para construir por tu cuenta.",
    subtitle:
      "Lo que aprendí pasando de ferrallista en Suiza a programador autodidacta y constructor de negocios desde Georgia",
    author: "Alberto Roldán",
    website: "albertoroldan.me",
  },
  introduction: {
    title:
      "Las 7 capacidades que el colegio nunca te enseñó para construir por tu cuenta.",
    subtitle:
      "Lo que aprendí pasando de ferrallista en Suiza a programador autodidacta y constructor de negocios desde Georgia",
    byline: "Alberto Roldán",
    sections: [
      {
        heading: "Antes de leer esta guía",
        paragraphs: [
          "No escribo esto desde una cima. Lo escribo desde el camino.",
          "Mi primer mes en Suiza trabajé como ferrallista. Después fui cartero, repartidor de comida e instalador de placas solares en Alemania. Más tarde estudié UX Design, aprendí programación por mi cuenta, viví en varios países y terminé vendiendo mi piso en Málaga para empezar de cero en Tbilisi.",
          "Nada de eso siguió un plan perfecto.",
          "De hecho, casi todo lo importante que he aprendido vino de moverme antes de sentirme preparado: perder un trabajo, cambiar de país, aprender una habilidad nueva, publicar antes de tener audiencia, vender vino georgiano antes de tener la logística resuelta. Y descubrir en el camino, con datos reales, qué funcionaba y qué no.",
          "Por eso esta guía no va de copiar mis pasos.",
          "Mis pasos no se pueden copiar. Tus circunstancias serán otras. Tu país será otro. Tu mercado será otro. Tu timing será otro.",
          "Lo que sí puedes desarrollar son las capacidades que se repiten cuando construyes algo propio: moverte rápido, leer señales reales, crear activos, diseñar tu vida antes que tu negocio y tomar decisiones sin esperar permiso.",
          "Esta guía recoge siete capacidades que he ido desarrollando a la fuerza, no en un país concreto, sino en el camino. Cada una tiene la misma estructura: qué es, qué me costó, cómo se veía cuando la desarrollé, qué te cuesta si nunca la desarrollas, cómo se ve en la práctica, el error común y un ejercicio concreto.",
          "No necesitas leerla como un plan cerrado. Léela como un manual de campo.",
          "Al final no tendrás una fórmula. Tendrás algo más útil: criterio.",
        ],
      },
    ],
  },
  overview: {
    title: "Las 7 capacidades de un vistazo",
    intro: [
      "Cada capacidad incluye un ejercicio al final. Sin plazos rígidos. Avanza a tu ritmo. Lo que importa es el resultado, no el calendario.",
    ],
    rows: [
      {
        capacity: "1. Moverse antes de sentirse preparado",
        length: "48 horas",
        output: "Una prueba real lanzada",
      },
      {
        capacity: "2. Validar con datos, no con opiniones",
        length: "1 semana",
        output: "Auditoría de señales + una decisión",
      },
      {
        capacity: "3. Construir habilidades que nadie puede quitarte",
        length: "2 semanas",
        output: "Mapa de habilidades + un plan de desarrollo",
      },
      {
        capacity: "4. Crear antes de consumir",
        length: "1 semana",
        output: "Ratio creación/consumo + un cambio concreto",
      },
      {
        capacity: "5. Convertir el contenido en un activo",
        length: "2 semanas",
        output: "Auditoría de activos + un activo iniciado",
      },
      {
        capacity: "6. Diseñar una vida antes que un negocio",
        length: "1 semana",
        output: "Documento de vida ideal + una decisión geográfica o fiscal",
      },
      {
        capacity: "7. Pensar como un constructor",
        length: "3 días",
        output: "Documento de claridad de una página",
      },
    ],
  },
  capacities: fieldManualCapacities,
  closing: {
    title: "A qué suma todo esto en realidad",
    paragraphs: [
      "Estas siete capacidades no aparecen en secuencia limpia. Se desarrollan juntas, se refuerzan y a veces se contradicen. Moverte antes de sentirte preparado te da datos para validar. Validar con datos te dice qué habilidades merece la pena construir. Construir habilidades te da libertad para diseñar la vida que quieres.",
      "Lo que he aprendido: las tácticas caducan, las capacidades no. Un negocio de automatización con IA me enseñó más sobre ciclos de venta largos y commodity que cualquier curso. Cerrarlo fue una decisión con datos, no un fracaso. El vino georgiano me enseñó que el interés existe, pero la logística mata márgenes si no la lees con honestidad. Publicar antes de tener producto me enseñó más que meses preparando el lanzamiento perfecto.",
      "Lo que todavía no sé: cuál de mis apuestas actuales escalará de verdad. Si Georgia seguirá siendo mi base. No tengo respuestas limpias. Tengo datos parciales y la costumbre de seguir probando.",
      "Lo que estoy construyendo ahora mismo: exportación de vino georgiano, contenido que acumula, y esta misma guía, no como teórico que ya lo resolvió todo, sino como constructor en marcha.",
      "El camino no fue una línea recta. Fue ferrallista, cartero, consultor, desarrollador, fundador de un producto que tuve que cerrar, vender el piso, mudarme a otro continente, validar vino con cajas rotas en tránsito, y seguir publicando mientras aprendo. Ninguno de esos pasos se repite exactamente. Las capacidades sí.",
      "Al final no tendrás un mapa. Tendrás algo mejor: la capacidad de moverte sin uno.",
    ],
  },
  author: {
    name: "Alberto Roldán",
    website: "albertoroldan.me",
    bio: [
      "Alberto Roldán construye negocios desde Tbilisi, Georgia. Pasó de ferrallista en Suiza a programador autodidacta, fundó y cerró un producto de IA, y ahora exporta vino georgiano a Europa. Escribe cada semana sobre lo que aprende en el camino.",
    ],
    note: "Nota breve: El marco de capacidades está inspirado en Justin Welsh. Las historias y los errores son míos.",
  },
  invitation: {
    text: "Si esta guía te ha resultado útil, cada semana comparto lo que voy aprendiendo construyendo negocios desde Georgia.",
    buttonText: "Suscríbete en albertoroldan.me",
    buttonUrl: "https://albertoroldan.me",
  },
};
