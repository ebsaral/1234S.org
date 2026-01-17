import { type Dictionary, t } from 'intlayer';
import { Metadata } from 'next';

const metadataContent = {
  key: 'mission-page-metadata',
  content: {
    title: t({
      en: 'Our Mission | 1234 Science & Art Association',
      tr: 'Misyonumuz | 1234 Sanat ve İlim Derneği',
    }),
    description: t({
      en: 'The Mission of 1234S.org: Extending the Application of Logical Spirituality for a Better Life through Interconnectedness, Justice, and Health.',
      tr: "1234S.org'un Amacı: Bütünlük, Adalet ve Sağlık Yoluyla Daha İyi Bir Yaşam İçin Mantıksal Maneviyat'ın Uygulanma Kapsamını Genişletmek.",
    }),
    applicationName: '1234S.org',
    authors: [
      {
        name: 'Emin Buğra Saral',
        url: 'https://0.1234s.org',
      },
    ],
    generator: 'Next.js',
    keywords: t({
      en: 'spirituality, logic, philosophy, logical, interconnectedness, wholeness, health, unity, justice, nature',
      tr: 'maneviyat, mantık, felsefe, mantıksal, birbirine bağlılık, bütünlük, bütünsellik, sağlık, birlik, adalet, doğa',
    }),
    referrer: 'origin',
    creator: '1234S.org',
    publisher: 'Emin Buğra Saral',
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: 'https://1234s.org/icon.png',
      apple: 'https://1234s.org/apple-icon.png',
    },
    manifest: 'https://1234s.org/manifest.webmanifest',
    openGraph: {
      type: 'website',
      images: [
        {
          url: 'http://1234s.org/logos/logo-og.png',
          secureUrl: 'https://1234s.org/logos/logo-og.png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
    },
    verification: {},
    appleWebApp: {
      capable: true,
      title: '1234S.org',
    },
    pinterest: { richPin: true },
  },
} satisfies Dictionary<Metadata>;

export default metadataContent;
