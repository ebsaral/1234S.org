import { md, t, type Dictionary } from 'intlayer';

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
  productHunt: FooterLink;
  interconnectedness: string;
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
          en: 'https://www.x.com/1234S_en',
          tr: 'https://www.x.com/1234S_tr',
        }),
        label: t({
          en: 'X (English)',
          tr: 'X (Türkçe)',
        }),
      },
      {
        href: t({
          en: 'https://www.instagram.com/logical.spirituality',
          tr: 'https://www.instagram.com/mantiksal.maneviyat',
        }),
        label: t({
          en: 'Instagram (English)',
          tr: 'Instagram (Türkçe)',
        }),
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
    productHunt: {
      label: 'Product Hunt',
      href: 'https://www.producthunt.com/products/1234s-org-a-philosophical-movement',
    },
    interconnectedness: t({
      en: md(
        'Shaped within [The Interconnectedness of Nature](/spirituality#b), you may find pieces from your own being reflected on this website.\nThank you for being a part of this movement. ❤️',
      ),
      tr: md(
        '[Doğadaki Bütünlük](/maneviyat#b) çerçevesinde şekil alan kendi benliğinizden kesitleri bu internet sitesinin içeriğine yansımış halde bulabilirsiniz.\nBu akımın bir parçası olduğunuz için teşekkürler. ❤️',
      ),
    }),
  },
} satisfies Dictionary<FooterContent>;

export default pageContent;
