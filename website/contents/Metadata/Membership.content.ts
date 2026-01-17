import { type Dictionary, t } from 'intlayer';
import { Metadata } from 'next';

const metadataContent = {
  key: 'membership-page-metadata',
  content: {
    title: t({
      en: 'Association Membership | 1234 Science & Art Association',
      tr: 'Dernek Üyeliği | 1234 Sanat ve İlim Derneği',
    }),
    description: t({
      en: 'Join the 1234 Science & Art Association to support our mission of promoting  Interconnectedness, Justice and Health in Nature through Logical Spirituality.',
      tr: "1234 Sanat ve İlim Derneği'ne katılarak Mantıksal Maneviyat yoluyla Doğada Bütünlük, Adalet ve Sağlığı teşvik etme misyonumuzu destekleyin.",
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
      en: 'spirituality, logic, philosophy, logical, interconnectedness, wholeness, health, unity, justice, nature, support, membership',
      tr: 'maneviyat, mantık, felsefe, mantıksal, birbirine bağlılık, bütünlük, bütünsellik, sağlık, birlik, adalet, doğa, destek, üyelik',
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
