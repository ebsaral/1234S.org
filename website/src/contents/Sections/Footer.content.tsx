import { t, type Dictionary } from 'intlayer';

interface FooterLink {
  href: string;
  label: string;
}

interface FooterContent {
  name: string;
  contact: {
    title: string;
    email: string;
  };
  social: FooterLink[];
  note: string;
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
    contact: {
      title: t({
        en: 'Send an e-mail',
        tr: 'E-posta gönder',
      }),
      email: t({
        en: 'logical.spirituality@icloud.com',
        tr: 'mantiksal.maneviyat@icloud.com',
      }),
    },
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
      tr: "Sosyal medya hesaplarımızı takip etmeyi unutmayınız!'",
    }),
    github: {
      label: 'GitHub',
      href: 'https://www.github.com/ebsaral/1234S.org',
    },
    displayProductHunt: true,
  },
} satisfies Dictionary<FooterContent>;

export default pageContent;
