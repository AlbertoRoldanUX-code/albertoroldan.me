export interface Resource {
  slug: string;
  category: string;
  title: string;
  subtitle?: string;
  description: string;
  coverImage: string;
  href: string;
  featured?: boolean;
}

export const guides: Resource[] = [
  {
    slug: "field-manual",
    category: "Trabajo",
    title:
      "Las 7 capacidades que el colegio no te enseñó para construir algo propio",
    subtitle: "Las siete capacidades que más impacto han tenido en mi vida.",
    description:
      "Un manual de campo sobre las capacidades que se acumulan cuando diseñas una vida propia, con historias reales desde Georgia, validación con datos y ejercicios concretos.",
    coverImage: "/images/guide-cover.svg",
    href: "/guides/field-manual",
    featured: true,
  },
];
