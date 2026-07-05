export interface GuideStep {
  label: string;
  text: string;
}

export interface GuideSubsection {
  heading: string;
  paragraphs?: string[];
  intro?: string;
  steps?: GuideStep[];
  outcome?: string;
}

export interface GuideCapacity {
  number: number;
  title: string;
  subsections: GuideSubsection[];
}

export interface GuideOverviewRow {
  capacity: string;
  length: string;
  output: string;
}

export interface GuideAuthor {
  name: string;
  bio: string[];
  website: string;
  note?: string;
}

export interface GuideInvitation {
  text: string;
  buttonText: string;
  buttonUrl: string;
}

export interface Guide {
  slug: string;
  cover: {
    eyebrow: string;
    title: string;
    subtitle: string;
    author: string;
    website: string;
  };
  introduction: {
    title: string;
    subtitle: string;
    byline: string;
    sections: GuideSubsection[];
  };
  overview: {
    title: string;
    intro?: string[];
    rows: GuideOverviewRow[];
  };
  capacities: GuideCapacity[];
  closing: {
    title: string;
    paragraphs: string[];
  };
  author: GuideAuthor;
  invitation: GuideInvitation;
}
