import path from "node:path";
import React from "react";
import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import type { Guide, GuideSubsection } from "@/types/guide";

const fontDir = path.join(process.cwd(), "src/assets/fonts");

Font.register({
  family: "Newsreader",
  fonts: [
    {
      src: path.join(fontDir, "Newsreader-Regular.ttf"),
      fontWeight: 400,
    },
    {
      src: path.join(fontDir, "Newsreader-Medium.ttf"),
      fontWeight: 500,
    },
    {
      src: path.join(fontDir, "Newsreader-Bold.ttf"),
      fontWeight: 700,
    },
    {
      src: path.join(fontDir, "Newsreader-Italic.ttf"),
      fontWeight: 400,
      fontStyle: "italic",
    },
  ],
});

Font.register({
  family: "NotoSans",
  fonts: [
    {
      src: path.join(fontDir, "NotoSans-Regular.ttf"),
      fontWeight: 400,
    },
    {
      src: path.join(fontDir, "NotoSans-Bold.ttf"),
      fontWeight: 700,
    },
    {
      src: path.join(fontDir, "NotoSans-Italic.ttf"),
      fontWeight: 400,
      fontStyle: "italic",
    },
  ],
});

/**
 * Desactiva la hyphenación. Con tipografías subset, el hyphenator por
 * defecto de @react-pdf puede producir offsets inválidos y cortes feos
 * (p. ej. «pro-pio» en portada).
 */
Font.registerHyphenationCallback((word) => [word]);

const PAGE_BG = "#faf9f6";
const INK = "#111111";
const MUTED = "#6b6b6b";
const FAINT = "#9a9a9a";
const RULE = "#e8e6e1";

const styles = StyleSheet.create({
  coverPage: {
    backgroundColor: PAGE_BG,
    color: INK,
    paddingTop: 56,
    paddingBottom: 56,
    paddingHorizontal: 64,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  page: {
    backgroundColor: PAGE_BG,
    fontFamily: "Newsreader",
    fontSize: 11,
    lineHeight: 1.65,
    color: INK,
    paddingTop: 56,
    paddingBottom: 64,
    paddingHorizontal: 64,
  },
  eyebrow: {
    fontFamily: "NotoSans",
    fontSize: 9,
    fontWeight: 700,
    color: FAINT,
    letterSpacing: 2.5,
  },
  coverTitle: {
    fontFamily: "Newsreader",
    fontSize: 32,
    fontWeight: 400,
    lineHeight: 1.18,
  },
  coverSubtitle: {
    fontFamily: "Newsreader",
    fontSize: 15,
    fontStyle: "italic",
    color: MUTED,
    marginTop: 18,
    lineHeight: 1.45,
  },
  coverBottom: {
    paddingTop: 20,
  },
  coverRule: {
    borderBottomWidth: 1,
    borderBottomColor: RULE,
    marginBottom: 22,
  },
  coverAuthor: {
    fontFamily: "Newsreader",
    fontSize: 14,
    fontWeight: 500,
  },
  coverSite: {
    fontFamily: "NotoSans",
    fontSize: 9,
    color: FAINT,
    letterSpacing: 2.5,
    marginTop: 6,
  },
  sectionTitle: {
    fontFamily: "Newsreader",
    fontSize: 22,
    fontWeight: 400,
    lineHeight: 1.2,
    marginBottom: 10,
  },
  sectionSubtitle: {
    fontFamily: "Newsreader",
    fontSize: 14,
    fontStyle: "italic",
    color: MUTED,
    marginBottom: 10,
    lineHeight: 1.45,
  },
  paragraph: {
    fontFamily: "Newsreader",
    fontSize: 11,
    lineHeight: 1.65,
    marginBottom: 10,
  },
  capacityHeader: {
    marginTop: 0,
    marginBottom: 18,
  },
  capacityLabel: {
    fontFamily: "NotoSans",
    fontSize: 9,
    fontWeight: 700,
    color: FAINT,
    letterSpacing: 2.5,
    marginBottom: 12,
  },
  capacityRule: {
    borderBottomWidth: 1,
    borderBottomColor: RULE,
    marginBottom: 18,
  },
  capacityTitle: {
    fontFamily: "Newsreader",
    fontSize: 24,
    fontWeight: 400,
    lineHeight: 1.18,
    marginBottom: 18,
  },
  stepLabel: {
    fontFamily: "Newsreader",
    fontWeight: 700,
  },
  authorBlock: {
    marginTop: 28,
    paddingTop: 22,
    borderTopWidth: 1,
    borderTopColor: RULE,
  },
  authorName: {
    fontFamily: "Newsreader",
    fontSize: 14,
    fontWeight: 700,
    marginBottom: 10,
  },
  authorBio: {
    fontFamily: "Newsreader",
    fontSize: 11,
    fontStyle: "italic",
    lineHeight: 1.65,
    marginBottom: 10,
  },
  authorSite: {
    fontFamily: "NotoSans",
    fontSize: 9,
    color: FAINT,
    letterSpacing: 2.5,
    marginTop: 12,
  },
  authorNote: {
    fontFamily: "Newsreader",
    fontSize: 10,
    fontStyle: "italic",
    color: MUTED,
    marginTop: 18,
    lineHeight: 1.55,
  },
  byline: {
    fontFamily: "Newsreader",
    fontSize: 11,
    marginBottom: 22,
  },
  sectionRule: {
    borderBottomWidth: 1,
    borderBottomColor: RULE,
    marginBottom: 26,
  },
  h3: {
    fontFamily: "Newsreader",
    fontSize: 14,
    fontWeight: 500,
    marginTop: 18,
    marginBottom: 10,
  },
  pageNumber: {
    position: "absolute",
    bottom: 28,
    left: 64,
    right: 64,
    textAlign: "center",
    fontFamily: "NotoSans",
    fontSize: 8,
    color: FAINT,
  },
});

function sanitizePdfText(text: string): string {
  return text.replaceAll("→", "->");
}

function Subsection({ subsection }: { subsection: GuideSubsection }) {
  return (
    <View>
      {subsection.heading ? (
        <Text style={styles.h3}>{subsection.heading}</Text>
      ) : null}

      {subsection.intro ? (
        <Text style={styles.paragraph}>{sanitizePdfText(subsection.intro)}</Text>
      ) : null}

      {subsection.paragraphs?.map((paragraph, index) => (
        <Text key={index} style={styles.paragraph}>
          {sanitizePdfText(paragraph)}
        </Text>
      ))}

      {subsection.steps?.map((step, index) => (
        <Text key={index} style={styles.paragraph}>
          <Text style={styles.stepLabel}>{step.label} </Text>
          {sanitizePdfText(step.text)}
        </Text>
      ))}

      {subsection.outcome ? (
        <Text style={styles.paragraph}>
          <Text style={styles.stepLabel}>Cómo saber que funcionó: </Text>
          {sanitizePdfText(subsection.outcome)}
        </Text>
      ) : null}
    </View>
  );
}

interface GuidePdfDocumentProps {
  guide: Guide;
}

export function GuidePdfDocument({ guide }: GuidePdfDocumentProps) {
  const eyebrow = guide.cover.eyebrow.toUpperCase();
  const website = guide.cover.website.toUpperCase();
  const authorSite = guide.author.website.toUpperCase();

  return (
    <Document
      title={guide.cover.title}
      author={guide.cover.author}
      subject={guide.cover.subtitle}
      language="es"
    >
      <Page size="A4" style={styles.coverPage}>
        <Text style={styles.eyebrow}>{eyebrow}</Text>

        <View>
          <Text style={styles.coverTitle}>{guide.cover.title}</Text>
          <Text style={styles.coverSubtitle}>{guide.cover.subtitle}</Text>
        </View>

        <View style={styles.coverBottom}>
          <View style={styles.coverRule} />
          <Text style={styles.coverAuthor}>{guide.cover.author}</Text>
          <Text style={styles.coverSite}>{website}</Text>
        </View>
      </Page>

      <Page size="A4" style={styles.page} wrap>
        <Text style={styles.sectionTitle}>{guide.introduction.title}</Text>
        <Text style={styles.sectionSubtitle}>
          {guide.introduction.subtitle}
        </Text>
        <Text style={styles.byline}>Por: {guide.introduction.byline}</Text>
        <View style={styles.sectionRule} />

        {guide.introduction.sections.map((section, index) => (
          <Subsection key={index} subsection={section} />
        ))}
      </Page>

      {guide.capacities.map((capacity) => (
        <Page key={capacity.number} size="A4" style={styles.page} wrap>
          <Text style={styles.capacityLabel}>
            {`CAPACIDAD ${capacity.number}`}
          </Text>
          <View style={styles.capacityRule} />
          <Text style={styles.capacityTitle}>{capacity.title}</Text>

          {capacity.subsections.map((subsection, index) => (
            <Subsection key={index} subsection={subsection} />
          ))}
        </Page>
      ))}

      <Page size="A4" style={styles.page} wrap>
        <Text style={styles.sectionTitle}>{guide.closing.title}</Text>
        {guide.closing.paragraphs.map((paragraph, index) => (
          <Text key={index} style={styles.paragraph}>
            {sanitizePdfText(paragraph)}
          </Text>
        ))}

        <View style={styles.authorBlock}>
          <Text style={styles.authorName}>{guide.author.name}</Text>
          {guide.author.bio.map((paragraph, index) => (
            <Text key={index} style={styles.authorBio}>
              {sanitizePdfText(paragraph)}
            </Text>
          ))}
          <Text style={styles.authorSite}>{authorSite}</Text>
          {guide.author.note ? (
            <Text style={styles.authorNote}>
              {sanitizePdfText(guide.author.note)}
            </Text>
          ) : null}
        </View>

        {guide.invitation.title ? (
          <Text style={[styles.sectionTitle, { marginTop: 28 }]}>
            {guide.invitation.title}
          </Text>
        ) : null}
        {guide.invitation.paragraphs?.map((paragraph, index) => (
          <Text key={index} style={styles.paragraph}>
            {sanitizePdfText(paragraph)}
          </Text>
        ))}
        {guide.invitation.text ? (
          <Text style={styles.paragraph}>
            {sanitizePdfText(guide.invitation.text)}
          </Text>
        ) : null}
        {guide.invitation.buttonText && guide.invitation.buttonUrl ? (
          <Text style={styles.paragraph}>
            {guide.invitation.buttonText}: {guide.invitation.buttonUrl}
          </Text>
        ) : null}
      </Page>
    </Document>
  );
}
