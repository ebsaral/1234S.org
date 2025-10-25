import { type Dictionary, t } from "intlayer";
import { Metadata } from "next";

const metadataContent = {
  key: "page-metadata",
  content: {
    title: t({
      en: "1234S.org | Logical Spirituality",
      de: "1234S.org | Logische Spiritualität",
      fr: "1234S.org | Spiritualité Logique"
    }),
    description: t({
      en: "A Comprehensive View of Spirituality Together with the Logic of Nature: Interconnectedness, Justice, Health.",
      de: "Ein umfassender Blick auf Spiritualität zusammen mit der Logik der Natur: Verbundenheit, Gerechtigkeit, Gesundheit.",
      fr: "Une vue d'ensemble de la spiritualité avec la logique de la nature: Interconnexion, Justice, Santé."
    }),
    applicationName: "1234S.org",
    authors: [
      {
        name: "Emin Buğra Saral",
        url: "https://0.1234s.org"
      }
    ],
    generator: "Next.js",
    keywords: t({
      en: "spirituality, logic, philosophy, logical, interconnectedness, wholeness, health, unity, justice, nature",
      de: "spiritualität, logik, philosophie, logisch, verbundenheit, ganzheit, gesundheit, einheit, gerechtigkeit, natur",
      fr: "spiritualité, logique, philosophie, logique, interconnexion, totalité, santé, unité, justice, nature"
    }),
    referrer: "origin",
    creator: "1234S.org",
    publisher: "Emin Buğra Saral",
    robots: {
      index: true,
      follow: true
    },
    icons: {
      icon: "https://1234s.org/icon.png",
      apple: "https://1234s.org/apple-icon.png"
    },
    manifest: "https://1234s.org/manifest.webmanifest",
    openGraph: {
      type: "website",
      images: [
        { 
          url: "http://1234s.org/logos/logo-og.png",
          secureUrl: "https://1234s.org/logos/logo-og.png"
        }
      ]
    },
    twitter: {
      card: "summary_large_image"
    },
    verification: {},
    appleWebApp: {
      capable: true,
      title: "1234S.org"
    },
    pinterest: { richPin: true }
  },
} satisfies Dictionary<Metadata>;

export default metadataContent;
