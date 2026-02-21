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
          en: 'https://logicalspirituality.substack.com',
          tr: 'https://maneviyat.substack.com',
        }),
        label: 'Substack',
      },
      {
        href: 'https://www.linkedin.com/company/1234s-org',
        label: 'LinkedIn',
      },
    ],
    github: {
      label: 'GitHub',
      href: 'https://www.github.com/ebsaral/1234S.org',
    },
    displayProductHunt: true,
  },
} satisfies Dictionary<FooterContent>;

export default pageContent;
