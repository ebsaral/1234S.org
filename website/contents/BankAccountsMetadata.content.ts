import { type Dictionary, t } from "intlayer";
import { Metadata } from "next";

const metadataContent = {
  key: "bank-accounts-page-metadata",
  content: {
    title: t({
      en: "Bank Accounts | 1234 Science & Art Association",
      tr: "Banka Hesaplar | 1234 Sanat ve İlim Derneği",
    }),
    description: t({
      en: "View our bank account details to support 1234 Science & Art Association.",
      tr: "1234 Sanat ve İlim Derneği'ni desteklemek için banka hesap bilgilerimizi görüntüleyin",
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
      en: "spirituality, logic, philosophy, logical, interconnectedness, wholeness, health, unity, justice, nature, support",
      tr: "maneviyat, mantık, felsefe, mantıksal, birbirine bağlılık, bütünlük, bütünsellik, sağlık, birlik, adalet, doğa, destek",
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
