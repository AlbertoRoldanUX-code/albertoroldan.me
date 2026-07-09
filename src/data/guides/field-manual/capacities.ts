import type { GuideCapacity } from "@/types/guide";
import { fieldManualCapacitiesPart2 } from "./capacities-part2";

const capacities1to3: GuideCapacity[] = [
  {
    number: 1,
    title: "Moverse antes de sentirse preparado",
    subsections: [
      {
        heading: "Qué es",
        paragraphs: [
          "La capacidad de actuar antes de tenerlo todo resuelto, y usar la acción como forma de aprender, no como recompensa por haber aprendido.",
          "La mayoría espera el permiso, el título, el curso terminado, el portfolio perfecto. Yo hice lo contrario: me metí en programación porque los trabajos de UX pedían HTML y CSS, sin esperar a saberlo perfectamente. Aprendí haciendo. Eso no es valentía. Es la única forma que conozco de descubrir si algo merece tu tiempo.",
          "Moverse antes de sentirse preparado no significa ser imprudente. Significa hacer el coste de equivocarte lo más pequeño posible. Dejar de preguntar «¿estoy listo?» y empezar a preguntar «¿cómo lo descubro en 48 horas?»",
        ],
      },
      {
        heading: "Qué me costó no tenerla al principio",
        paragraphs: [
          "Durante mucho tiempo esperé señales externas. El diploma. El ascenso. La validación de alguien con más experiencia.",
          "Cuando me despidieron de un puesto de desarrollador en Göttingen, lo vi como veredicto sobre mi valía en lugar de como dato sobre el encaje. Perdí meses buscando la siguiente etiqueta correcta en lugar de probar algo pequeño.",
          "Antes de eso, en Suiza, ya había hecho lo más duro que he hecho en la vida: ferrallista. Lo más duro no fue solo el cuerpo. Fueron las faltas de respeto. Pero también aprendí que podía entrar en un mercado sin estar «preparado».",
          "Perdí meses preparándome para moverme en lugar de moverme. Leyendo sobre programación en lugar de escribir código malo. Planificando la mudanza en lugar de probar una semana en el nuevo país. El coste no fue solo el tiempo. Fue el feedback que nunca recibí porque nunca lancé nada.",
        ],
      },
      {
        heading: "Cómo se veía cuando la desarrollé",
        paragraphs: [
          "Antes de Suiza había dejado la universidad, sido voluntario en Bruselas, enseñado idiomas y trabajado de relaciones públicas y extra en Hong Kong, empezado un ausbildung en Roding y pasado por Leipzig — donde vi un cartel en un restaurante español y acabé de cocinero. Pero mi primer mes en Suiza no fue como consultor. Fue como ferrallista. Después en una cadena de comida rápida, un restaurante mexicano del que me echaron, temporero en una obra. Me llamaron por teléfono para ser cartero mientras estaba en la obra. Repartí comida en bici eléctrica y paquetes en moto. Nada de eso estaba en ningún plan. Todo me enseñó que el permiso llega después, no antes.",
          "Después de mis prácticas de UX, no esperé a dominar un stack completo. Los trabajos pedían HTML y CSS; abrí un editor y empecé a construir cosas rotas. Aprendí haciendo, no esperando el título perfecto.",
          "Cuando vendí el piso en Málaga, no esperé a tener Georgia resuelta al cien por cien. Llegué a Tbilisi y fui resolviendo fiscalidad, alojamiento y proveedores sobre la marcha.",
          "Con el vino georgiano no monté una operación perfecta. Publiqué, contacté clientes en España, hice un pedido de prueba. Y las cajas llegaron rotas. Eso también son datos: el producto interesa, la logística mata si no la diseñas.",
          "Publiqué en LinkedIn antes de tener producto pulido. La publicación fue la prueba.",
        ],
      },
      {
        heading: "Qué te cuesta si nunca la desarrollas",
        paragraphs: [
          "Pasas años preparándote para intentar algo. Haces cursos, diseñas la marca, planificas el lanzamiento, y nunca pruebas si alguien quiere lo que construyes.",
          "Conozco gente que lleva dieciocho meses «trabajando en su proyecto». Tienen web preciosa y cero clientes. Han hecho todo excepto lo único que importa: mostrárselo a alguien real y pedirle que pague o que reaccione.",
          "El coste no es solo tu tiempo. Es la certeza falsa de que «casi estás listo». Casi nunca llega.",
        ],
      },
      {
        heading: "Cómo se ve en la práctica",
        paragraphs: [
          "Alguien con esta capacidad tiene una idea el lunes y el viernes tiene una versión cutre delante de personas reales. Espera que sea tosco. Busca señal, no aplauso.",
          "Alguien sin ella tiene una idea el lunes, pasa tres meses construyendo la versión perfecta, y cuando lanza está agotado, sobre-invertido emocionalmente, y destrozado si no funciona de inmediato. O nunca lanza.",
        ],
      },
      {
        heading: "El error común",
        paragraphs: [
          "Confundir preparación con acción. Hacer un curso sobre cómo lanzar un negocio, leer tres libros sobre validación, y mapear todo el embudo antes de tener un solo dato real. Nada de eso es moverse. Moverse es poner algo real delante de personas reales y ver qué pasa.",
        ],
      },
      {
        heading: "El ejercicio",
        intro: "Qué vas a hacer: Lanzar una prueba real en 48 horas.",
        steps: [
          {
            label: "Paso 1:",
            text: "Escribe una idea que llevas semanas (o meses) posponiendo. Si tienes varias, elige la que más miedo te da.",
          },
          {
            label: "Paso 2:",
            text: "Define la versión más cutre posible. Un post en LinkedIn preguntando si pagarían por X. Un PDF de una página. Una landing con un botón de reserva. No gastes dinero. Límite: 48 horas.",
          },
          {
            label: "Paso 3:",
            text: "Lánzala. Ponla delante de al menos 10 personas reales. Mensajes directos, post público, email a contactos. Busca reacciones honestas, no apoyo de amigos.",
          },
          {
            label: "Paso 4:",
            text: "Documenta qué pasó. Números, preguntas, objeciones, entusiasmo. Tres cosas que aprendiste y que no habrías aprendido planificando.",
          },
        ],
        outcome:
          "Tienes datos reales de personas reales. Probablemente te sientas incómodo con lo poco pulido que quedó. Eso significa que lanzaste en lugar de perfeccionar.",
      },
    ],
  },
  {
    number: 2,
    title: "Validar con datos, no con opiniones",
    subsections: [
      {
        heading: "Qué es",
        paragraphs: [
          "La capacidad de notar lo que el mercado te dice de verdad: ventas, mensajes, preguntas de compra. No lo que te gustaría que te dijera.",
          "Las opiniones son baratas. «Me encanta la idea» no paga facturas. Un mensaje directo preguntando precio sí. Una venta sí. Un cliente que repite sí.",
          "Validar con datos es prestar atención a lo que la gente hace, no a lo que dice que hará.",
        ],
      },
      {
        heading: "Qué me costó no tenerla al principio",
        paragraphs: [
          "Cuando empecé con el vino georgiano, escuché mucho entusiasmo. Amigos diciendo «qué buena idea». Pero el entusiasmo no me avisó de que las cajas llegarían rotas. Los reembolsos y las quejas sí.",
          "En LinkedIn, mis posts sobre temas que a mí me interesaban generaban likes. Los posts sobre problemas concretos que la gente quería resolver generaban mensajes directos y ventas. Durante meses presté más atención a los likes.",
          "Ignoré señales reales porque no encajaban con mi plan. Quería ser «el tipo de UX» o «el tipo de tech». El mercado me pedía otra cosa. Cada semana que ignoré eso fue una semana perdida.",
        ],
      },
      {
        heading: "Cómo se veía cuando la desarrollé",
        paragraphs: [
          "Con el vino georgiano dejé de preguntar «¿os gusta?» y empecé a medir: ¿responden? ¿piden precios? ¿compran? Un pedido de prueba con cajas rotas en tránsito fue un dato brutal sobre logística, no sobre el producto.",
          "Con los tours publiqué la oferta y mandé emails antes de montar la operación completa. Casi nadie respondió. Eso también es señal, y me ahorró meses construyendo algo que nadie pedía.",
          "Con un producto de IA que vendí durante un año, aprendí la diferencia entre «interesante demo» y «cliente que paga y se queda». Algunos pagaron unos meses. Otros meses de conversación sin cierre. Los datos decían algo que no quería oír: ciclo largo, ticket bajo, mercado comoditizado.",
          "La regla que uso ahora: publicar antes de construir. Si nadie reacciona al post, no construyo el producto entero.",
        ],
      },
      {
        heading: "Qué te cuesta si nunca la desarrollas",
        paragraphs: [
          "Construyes cosas que nadie quiere y te preguntas por qué no funcionan. Trabajas más duro: más features, más contenido, más anuncios. Sin abordar el problema de fondo: estás resolviendo lo incorrecto.",
          "Peor: construyes algo que funciona lo suficiente para mantenerte a flote pero nunca despega, porque está ligeramente desalineado con lo que el mercado quiere y nunca te acercas lo bastante a la señal para corregir.",
        ],
      },
      {
        heading: "Cómo se ve en la práctica",
        paragraphs: [
          "Alguien con esta capacidad lee sus datos con curiosidad, no con sesgo de confirmación. Nota cuando algo rinde distinto de lo esperado y pregunta por qué. Toma decisiones basadas en lo que funciona, aunque rompa su plan.",
          "Alguien sin ella redobla la apuesta en lo planeado, explica el bajo rendimiento, ignora los mensajes que no encajan, y sigue empujando hacia el producto que quiere construir en lugar del que el mercado pide.",
        ],
      },
      {
        heading: "El error común",
        paragraphs: [
          "Confundir señales de vanidad con señales reales. Likes y seguidores importan, pero son más débiles que ingresos y mensajes directos. La señal más fuerte es que alguien te dé dinero. La segunda es una «pregunta de compra»: alguien que se toma la molestia de preguntarte precio, plazos o disponibilidad.",
        ],
      },
      {
        heading: "El ejercicio",
        intro: "Qué vas a hacer: Una auditoría de señales seguida de una decisión.",
        steps: [
          {
            label: "Paso 1:",
            text: "Recopila datos de los últimos 90 días: engagement, ventas, mensajes directos, emails, preguntas de clientes, reembolsos. Escríbelo sin filtrar.",
          },
          {
            label: "Paso 2:",
            text: "Responde por escrito: ¿Qué contenido supera al resto? ¿Sobre qué te escriben más? ¿Qué vende con menos esfuerzo? ¿En qué inviertes tiempo sin respuesta? ¿Qué tema evitas porque no encaja con tu plan?",
          },
          {
            label: "Paso 3:",
            text: "Identifica la señal más clara que has estado ignorando. No la que quieres. La que recibes.",
          },
          {
            label: "Paso 4:",
            text: "Toma una decisión basada en esa señal. Escríbela y comprométete.",
          },
        ],
        outcome:
          "Has identificado algo que ignorabas y el mercado te dice que importa. La decisión te resulta incómoda. Suele significar que es la correcta.",
      },
    ],
  },
  {
    number: 3,
    title: "Construir habilidades que nadie puede quitarte",
    subsections: [
      {
        heading: "Qué es",
        paragraphs: [
          "La capacidad de invertir en competencias que te pertenecen, que no dependen de un empleador, un visado, un algoritmo o un mercado concreto.",
          "Cuando me despidieron en Göttingen, lo que me quedó no fue el puesto. Fueron las habilidades: resolver problemas, comunicar, aprender bajo presión. Nadie me las quitó.",
          "Las habilidades transferibles son el único activo que cruzan fronteras contigo.",
        ],
      },
      {
        heading: "Qué me costó no tenerla al principio",
        paragraphs: [
          "Durante años optimicé para títulos y empresas, no para capacidades. Quería estar en la empresa correcta en lugar de ser la persona correcta.",
          "Cuando me echaron del puesto de desarrollador en Göttingen, me di cuenta de que había construido sobre algo frágil: la aprobación de otros. No había invertido lo suficiente en lo mío.",
        ],
      },
      {
        heading: "Cómo se veía cuando la desarrollé",
        paragraphs: [
          "Me metí en programación porque los trabajos de UX pedían HTML y CSS. Nadie me dio permiso. Lo hice porque necesitaba otra opción cuando el empleo desapareció.",
          "Viví en varios países no como turista sino trabajando. Cada estancia me dejó algo: un idioma, una red, una forma de resolver problemas en contextos distintos.",
          "Desarrollé ventas haciendo demos reales, propuestas reales, clientes que pagaron y se fueron. Aprendí a escribir publicando cada semana. Los idiomas que hablo no los estudié en abstracto: los necesité para trabajar, vender y vivir.",
        ],
      },
      {
        heading: "Qué te cuesta si nunca la desarrollas",
        paragraphs: [
          "Dependes de estructuras que pueden desaparecer mañana. Un despido, un cambio de visado, una reestructuración. Y tu identidad profesional se tambalea.",
          "No acumulas nada que te siga cuando cambias de contexto. Cada transición empieza de cero.",
        ],
      },
      {
        heading: "Cómo se ve en la práctica",
        paragraphs: [
          "Alguien con esta capacidad dedica tiempo cada semana a mejorar algo que le pertenece: escribir, vender, programar, aprender un idioma, entender un mercado nuevo.",
          "Alguien sin ella optimiza solo para el trabajo actual. Cuando ese trabajo desaparece, no tiene red.",
        ],
      },
      {
        heading: "El error común",
        paragraphs: [
          "Confundir credenciales con habilidades. Un título no es lo mismo que saber hacer algo. Un cargo no es lo mismo que poder repetir el resultado en otro contexto.",
        ],
      },
      {
        heading: "El ejercicio",
        intro: "Qué vas a hacer: Mapear tus habilidades transferibles y elegir una para desarrollar.",
        steps: [
          {
            label: "Paso 1:",
            text: "Lista todo lo que sabes hacer que no depende de tu empleador actual: habilidades técnicas, blandas, idiomas, experiencia internacional.",
          },
          {
            label: "Paso 2:",
            text: "Marca cuáles te han generado ingresos o oportunidades reales, no cuáles te suenan bien en un CV.",
          },
          {
            label: "Paso 3:",
            text: "Elige una habilidad a desarrollar en las próximas dos semanas. Algo concreto: publicar tres veces, completar un proyecto de código, hacer diez llamadas de venta.",
          },
          {
            label: "Paso 4:",
            text: "Al final de las dos semanas, documenta qué cambió. ¿Nuevas oportunidades? ¿Más confianza? ¿Datos?",
          },
        ],
        outcome:
          "Tienes un mapa claro de lo que te pertenece y un plan activo para fortalecerlo.",
      },
    ],
  },
];

export const fieldManualCapacities: GuideCapacity[] = [
  ...capacities1to3,
  ...fieldManualCapacitiesPart2,
];
