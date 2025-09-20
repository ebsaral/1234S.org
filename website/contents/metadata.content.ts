import { type Dictionary, t } from "intlayer";
import { Metadata } from "next";

const metadataContent = {
  key: "page-metadata",
  content: {
    title: t({
      en: "1234S.org | Logical Spirituality",
      tr: "1234S.org | Mantıksal Maneviyat",
    }),
    description: t({
      en: "Expanding Spirituality with Logic in Nature: Interconnectedness, Justice, Health.",
      tr: "Doğadaki Mantıkla Maneviyatı Derinleştirmek: Bütünlük, Adalet, Sağlık.",
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
      tr: "maneviyat, mantık, felsefe, mantıksal, birbirine bağlılık, bütünlük, bütünsellik, sağlık, birlik, adalet, doğa"
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
      images: [{ url: "http://1234s.org/logos/logo-og.png?v=1" }]
    },
    twitter: {
      card: "summary_large_image",
      site: "@site",
      creator: "@creator",
      images:  "http://1234s.org/logos/logo-og.png?v=1"
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