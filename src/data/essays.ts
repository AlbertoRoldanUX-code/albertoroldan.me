export interface Essay {
  category: string;
  title: string;
  description: string;
  issue: number;
  date: string;
  readTime: string;
  isNew?: boolean;
  href?: string;
}

export const allEssays: Essay[] = [
  {
    category: "Trabajo",
    title: "Deja de afilar el hacha.",
    description:
      "Por qué la persona más hábil no siempre gana, y qué mueve la aguja cuando construyes desde cero.",
    issue: 15,
    date: "4 de julio, 2026",
    readTime: "4 min",
    isNew: true,
  },
  {
    category: "Mentalidad",
    title: "Certeza fabricada.",
    description:
      "Te han convencido de que discutas sobre la cosa equivocada.",
    issue: 14,
    date: "27 de junio, 2026",
    readTime: "4 min",
  },
  {
    category: "Libertad",
    title: "Rico y sin ahorros.",
    description:
      "La diferencia entre parecer rico y estar seguro no es lo que ganas.",
    issue: 13,
    date: "20 de junio, 2026",
    readTime: "4 min",
  },
  {
    category: "Decisiones",
    title: "Irreasonable.",
    description:
      "Por qué las decisiones que parecen equivocadas construyen vidas que se sienten bien.",
    issue: 12,
    date: "6 de junio, 2026",
    readTime: "5 min",
  },
  {
    category: "Trabajo",
    title: "Tu nuevo rabbit hole.",
    description:
      "El movimiento más difícil al aprender algo nuevo es el primero. Por qué nunca ha sido tan fácil darlo, y qué ha estado trabajando en tu contra.",
    issue: 11,
    date: "30 de mayo, 2026",
    readTime: "4 min",
  },
  {
    category: "Libertad",
    title: "Pequeño para ver.",
    description:
      "Cuando la vida se ensancha, prestar atención a las personas importantes se vuelve más difícil.",
    issue: 10,
    date: "23 de mayo, 2026",
    readTime: "4 min",
  },
  {
    category: "Ambición",
    title: "El coste de la ambición.",
    description:
      "Lo que nadie te dice sobre querer más de lo que tienes.",
    issue: 9,
    date: "16 de mayo, 2026",
    readTime: "5 min",
  },
  {
    category: "Propósito",
    title: "Propósito sintético.",
    description:
      "Cuando los resolutores de problemas se quedan sin problemas, fabrican otros falsos.",
    issue: 8,
    date: "18 de abril, 2026",
    readTime: "5 min",
  },
  {
    category: "Decisiones",
    title: "Pequeño a propósito.",
    description:
      "Un negocio que elige no crecer. Y por qué esa decisión es más difícil de lo que parece.",
    issue: 7,
    date: "17 de enero, 2026",
    readTime: "4 min",
  },
  {
    category: "Mentalidad",
    title: "El mapa que no existe.",
    description:
      "Por qué buscar el camino correcto antes de moverte es la trampa más común.",
    issue: 6,
    date: "10 de enero, 2026",
    readTime: "4 min",
  },
  {
    category: "Trabajo",
    title: "Validar antes de creer.",
    description:
      "Cómo dejé de tomar decisiones basadas en opiniones y empecé a usar datos reales.",
    issue: 5,
    date: "3 de enero, 2026",
    readTime: "5 min",
  },
  {
    category: "Libertad",
    title: "Diseñar la vida primero.",
    description:
      "Por qué empecé a pensar en cómo quería vivir antes de pensar en qué negocio construir.",
    issue: 4,
    date: "21 de diciembre, 2025",
    readTime: "4 min",
  },
];

export const popularEssays = allEssays.filter((e) =>
  [12, 8, 7].includes(e.issue),
);

export const recentEssays = allEssays.filter((e) =>
  [15, 14, 13].includes(e.issue),
);

export const essayCategories = [
  ...new Set(allEssays.map((e) => e.category)),
].sort();

export const ESSAYS_PER_PAGE = 8;
