import path from "node:path";
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

const styles = StyleSheet.create({
  page: {
    fontFamily: "NotoSans",
    fontSize: 10.5,
    lineHeight: 1.5,
    color: "#111111",
    paddingTop: 48,
    paddingBottom: 56,
    paddingHorizontal: 48,
  },
  coverEyebrow: {
    fontSize: 9,
    color: "#9a9a9a",
    marginBottom: 24,
  },
  coverTitle: {
    fontSize: 20,
    fontWeight: 700,
    lineHeight: 1.3,
    marginBottom: 12,
  },
  coverSubtitle: {
    fontSize: 11,
    fontStyle: "italic",
    color: "#555555",
    marginBottom: 28,
  },
  coverMeta: {
    fontSize: 11,
    marginBottom: 4,
  },
  coverSite: {
    fontSize: 9,
    color: "#9a9a9a",
  },
  h2: {
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 1.3,
    marginBottom: 10,
    marginTop: 16,
  },
  h3: {
    fontSize: 11,
    fontWeight: 700,
    marginTop: 12,
    marginBottom: 6,
  },
  paragraph: {
    marginBottom: 8,
  },
  italic: {
    fontStyle: "italic",
  },
  capacityLabel: {
    fontSize: 9,
    color: "#9a9a9a",
    marginBottom: 4,
    marginTop: 16,
  },
  stepLabel: {
    fontWeight: 700,
  },
  muted: {
    color: "#6b6b6b",
    fontSize: 10,
    fontStyle: "italic",
    marginTop: 10,
  },
  footer: {
    marginTop: 20,
    paddingTop: 12,
  },
});

function Subsection({ subsection }: { subsection: GuideSubsection }) {
  return (
    <View>
      {subsection.heading ? (
        <Text style={styles.h3}>{subsection.heading}</Text>
      ) : null}

      {subsection.intro ? (
        <Text style={styles.paragraph}>{subsection.intro}</Text>
      ) : null}

      {subsection.paragraphs?.map((paragraph, index) => (
        <Text key={index} style={styles.paragraph}>
          {paragraph}
        </Text>
      ))}

      {subsection.steps?.map((step, index) => (
        <Text key={index} style={styles.paragraph}>
          <Text style={styles.stepLabel}>{step.label} </Text>
          {step.text}
        </Text>
      ))}

      {subsection.outcome ? (
        <Text style={styles.paragraph}>
          <Text style={styles.stepLabel}>Cómo saber que funcionó: </Text>
          {subsection.outcome}
        </Text>
      ) : null}
    </View>
  );
}

interface GuidePdfDocumentProps {
  guide: Guide;
}

export function GuidePdfDocument({ guide }: GuidePdfDocumentProps) {
  return (
    <Document
      title={guide.cover.title}
      author={guide.cover.author}
      subject={guide.cover.subtitle}
      language="es"
    >
      <Page size="A4" style={styles.page}>
        <Text style={styles.coverEyebrow}>{guide.cover.eyebrow}</Text>
        <Text style={styles.coverTitle}>{guide.cover.title}</Text>
        <Text style={styles.coverSubtitle}>{guide.cover.subtitle}</Text>
        <Text style={styles.coverMeta}>{guide.cover.author}</Text>
        <Text style={styles.coverSite}>{guide.cover.website}</Text>

        <Text style={styles.h2}>{guide.introduction.title}</Text>
        <Text style={[styles.paragraph, styles.italic]}>
          {guide.introduction.subtitle}
        </Text>
        <Text style={styles.paragraph}>Por: {guide.introduction.byline}</Text>

        {guide.introduction.sections.map((section, index) => (
          <Subsection key={index} subsection={section} />
        ))}

        {guide.capacities.map((capacity) => (
          <View key={capacity.number}>
            <Text style={styles.capacityLabel}>
              Capacidad {capacity.number}
            </Text>
            <Text style={styles.h2}>{capacity.title}</Text>
            {capacity.subsections.map((subsection, index) => (
              <Subsection key={index} subsection={subsection} />
            ))}
          </View>
        ))}

        <Text style={styles.h2}>{guide.closing.title}</Text>
        {guide.closing.paragraphs.map((paragraph, index) => (
          <Text key={index} style={styles.paragraph}>
            {paragraph}
          </Text>
        ))}

        <View style={styles.footer}>
          <Text style={[styles.paragraph, { fontWeight: 700 }]}>
            {guide.author.name}
          </Text>
          {guide.author.bio.map((paragraph, index) => (
            <Text key={index} style={[styles.paragraph, styles.italic]}>
              {paragraph}
            </Text>
          ))}
          <Text style={styles.coverSite}>{guide.author.website}</Text>
          {guide.author.note ? (
            <Text style={styles.muted}>{guide.author.note}</Text>
          ) : null}
        </View>

        {guide.invitation.title ? (
          <Text style={styles.h2}>{guide.invitation.title}</Text>
        ) : null}
        {guide.invitation.paragraphs?.map((paragraph, index) => (
          <Text key={index} style={styles.paragraph}>
            {paragraph}
          </Text>
        ))}
        {guide.invitation.text ? (
          <Text style={styles.paragraph}>{guide.invitation.text}</Text>
        ) : null}
        <Text style={styles.paragraph}>
          {guide.invitation.buttonText}: {guide.invitation.buttonUrl}
        </Text>
      </Page>
    </Document>
  );
}
