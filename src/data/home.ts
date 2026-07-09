export interface Testimonial {
  quote: string;
  author: string;
  title: string;
}

export const siteConfig = {
  brand: "albertoroldan.",
  name: "Alberto Roldán",
  avatar: "/images/avatar.png",
  tagline:
    "Un ensayo semanal sobre construir y vivir por tu cuenta.",
  subtagline:
    "Conversación real sobre trabajo, libertad y decisiones que encajan con tu vida.",
  newsletter: {
    placeholder: "nombre@email.com",
    buttonText: "Suscríbete gratis",
    disclaimer: "Sin spam. Date de baja cuando quieras.",
    leadMagnetSlug: "field-manual",
  },
  social: {
    x: "https://x.com/albertoroldanes",
    linkedin: "https://www.linkedin.com/in/albertoroldaninfo/",
    instagram: "https://instagram.com/albertoroldaninfo",
  },
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Uno de los pocos newsletters que leo cada semana sin falta.",
    author: "Lector habitual",
    title: "Constructor independiente",
  },
  {
    quote:
      "Nadie destila mejor la experiencia de construir por tu cuenta en acciones concretas.",
    author: "Suscriptor",
    title: "Emprendedor en remoto",
  },
  {
    quote:
      "En una era de consejos genéricos, Alberto es la alternativa refrescante.",
    author: "Lector",
    title: "Autodidacta y builder",
  },
];

export const featuredGuide = {
  slug: "field-manual",
  eyebrow: "Recurso gratuito",
  title: "Las 7 capacidades que el colegio nunca te enseñó",
  subtitle: "para construir por tu cuenta.",
  tagline: "Las 7 capacidades que realmente se acumulan",
  cta: "Descarga la guía gratuita de 30 páginas",
  coverImage: "/images/guide-cover.svg",
};

export const aboutPreview = {
  title: "Sobre Alberto",
  bio: "Pasé de ferrallista en Suiza a programador autodidacta y constructor de negocios desde Georgia. Escribo cada semana sobre las decisiones de trabajo, dinero y vida que permiten a personas ambiciosas construir por su cuenta — sin permiso, sin momento perfecto y sin mapa.",
  avatar: "/images/avatar.png",
  href: "/about",
};

export const footerCta = {
  headline: "Un ensayo, cada sábado por la mañana.",
  subheadline:
    "Únete a quienes construyen y viven por su cuenta.",
};
