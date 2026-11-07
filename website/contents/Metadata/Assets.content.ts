import { type Dictionary, t } from 'intlayer';
import { Metadata } from 'next';

const metadataContent = {
  key: 'assets-page-metadata',
  content: {
    title: t({
      en: 'File Explorer | 1234S.org',
      tr: 'Dosya Gezgini | 1234S.org',
    }),
    description: t({
      en: 'File expolorer for 1234S.org, providing access to public files and resources related to the mission of New Politics.',
      tr: '1234S.org için dosya gezgini, Yeni Politika misyonuyla ilgili genel dosyalara ve kaynaklara erişim sağlar.',
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
      en: 'spirituality, logic, philosophy, logical, wholeness, wholeness, health, unity, justice, nature, support',
      tr: 'maneviyat, mantık, felsefe, mantıksal, birbirine bağlılık, bütünlük, bütünsellik, sağlık, birlik, adalet, doğa, destek',
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
