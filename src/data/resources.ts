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

export type ResourceFilter = "guides" | "tools" | "masterclass";

export const resourceFilters: { id: ResourceFilter; label: string }[] = [
  { id: "guides", label: "Guías gratuitas" },
  { id: "tools", label: "Herramientas que uso" },
  { id: "masterclass", label: "Masterclass de pago" },
];

export const guides: Resource[] = [
  {
    slug: "field-manual",
    category: "Trabajo",
    title:
      "Las 7 capacidades que el colegio nunca te enseñó para construir por tu cuenta.",
    subtitle: "Las 7 capacidades que realmente se acumulan",
    description:
      "Un manual de campo sobre las capacidades que se acumulan cuando construyes algo propio — con historias reales desde Georgia, validación con datos y ejercicios concretos.",
    coverImage: "/images/guide-cover.svg",
    href: "/guides/field-manual",
    featured: true,
  },
];

export const comingSoonMessages: Record<
  Exclude<ResourceFilter, "guides">,
  string
> = {
  tools:
    "Pronto compartiré las herramientas que uso para escribir, construir y gestionar mis proyectos.",
  masterclass:
    "Estoy preparando contenido más profundo. Suscríbete al newsletter para enterarte primero.",
};
