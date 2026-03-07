import { t, type Dictionary } from 'intlayer';

interface FooterLink {
  href: string;
  label: string;
}

interface FooterContent {
  name: string;
  social: FooterLink[];
  note: string;
  contact: FooterLink;
  github: FooterLink;
  displayProductHunt: boolean;
}

const pageContent = {
  key: 'footer-section',
  content: {
    name: t({
      en: '1234S.org',
      tr: '1234S.org',
    }),
    social: [
      {
        href: t({
          en: 'https://x.com/1234S_en',
          tr: 'https://x.com/1234S_tr',
        }),
        label: t({
          en: 'X (English)',
          tr: 'X (Türkçe)',
        }),
      },
      {
        href: 'https://www.linkedin.com/company/1234s-org',
        label: 'LinkedIn',
      },
    ],
    note: t({
      en: 'Do not forget to follow our social media accounts!',
      tr: 'Sosyal medya hesaplarımızı takip etmeyi unutmayınız!',
    }),
    contact: {
      label: t({
        en: 'Contact',
        tr: 'İletişim',
      }),
      href: t({
        en: '/contact',
        tr: '/iletisim',
      }),
    },
    github: {
      label: 'GitHub',
      href: 'https://www.github.com/ebsaral/1234S.org',
    },
    displayProductHunt: true,
  },
} satisfies Dictionary<FooterContent>;

export default pageContent;
