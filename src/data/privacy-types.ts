export type PrivacyBullet = {
  label?: string;
  text: string;
};

export type PrivacySubsection = {
  heading: string;
  paragraphs?: string[];
  bullets?: PrivacyBullet[];
  closingParagraphs?: string[];
};

export type PrivacySection = {
  title: string;
  paragraphs?: string[];
  bullets?: PrivacyBullet[];
  subsections?: PrivacySubsection[];
  closingParagraphs?: string[];
};

export type PrivacyContentData = {
  title: string;
  description: string;
  effectiveLabel: string;
  updatedLabel: string;
  effectiveDate: string;
  updatedDate: string;
  intro: string;
  sections: PrivacySection[];
};
