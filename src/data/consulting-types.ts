export interface ConsultingBullet {
  title: string;
  description: string;
}

export interface ConsultingStep {
  label: string;
  title: string;
  description: string;
}

export interface ConsultingContentData {
  eyebrow: string;
  title: string;
  subtitle: string;
  heroCta: string;
  forWhom: {
    title: string;
    intro: string;
    items: string[];
  };
  includes: {
    title: string;
    intro: string;
    items: ConsultingBullet[];
  };
  process: {
    title: string;
    intro: string;
    steps: ConsultingStep[];
  };
  whyMe: {
    title: string;
    photo: string;
    photoAlt: string;
    paragraphs: string[];
    credentialsIntro: string;
    credentials: string[];
  };
  outcome: string;
  closing: {
    title: string;
    body: string;
    cta: string;
    note: string;
  };
  emailSubject: string;
  metadata: {
    title: string;
    description: string;
  };
}
