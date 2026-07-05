export interface LeadMagnetBenefit {
  label: string;
  title: string;
  description?: string;
}

export interface LeadMagnetAuthor {
  name: string;
  bio: string;
  avatar: string;
  signature?: string;
  socialProof?: string;
}

export interface LeadMagnetCta {
  headline: string;
  buttonText: string;
  placeholder: string;
  disclaimer: string;
}

export interface LeadMagnet {
  slug: string;
  brand: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  coverImage: string;
  coverAlt?: string;
  benefits: LeadMagnetBenefit[];
  benefitsIntro?: string;
  author: LeadMagnetAuthor;
  cta: LeadMagnetCta;
  downloadUrl?: string;
  seo?: {
    title?: string;
    description?: string;
    ogImage?: string;
  };
}
