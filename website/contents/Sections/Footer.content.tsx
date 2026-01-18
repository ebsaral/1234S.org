import { t, type Dictionary } from 'intlayer';

const pageContent = {
  key: 'footer-section',
  content: {
    title: t({
      en: 'Logical Spirituality by 1234S.org:',
      tr: '1234S.org aracılığıyla Mantıksal Maneviyat:',
    }),
    description: t({
      en: 'A philosophical movement project:\nThe Root of New Politics',
      tr: 'Bir felsefi akım projesi:\nYeni Siyasetin Kökeni',
    }),
    developer: t({
      en: 'Spirit Guide',
      tr: 'Maneviyat Rehberi',
    }),
    links: {
      social: [
        {
          url: t({
            en: 'https://logicalspirituality.substack.com',
            tr: 'https://maneviyat.substack.com',
          }),
          label: 'Substack',
        },
        {
          url: 'https://www.linkedin.com/company/1234s-org',
          label: 'LinkedIn',
        },
      ],
    },
    association: {
      name: t({
        en: '1234 Science & Art Association',
        tr: '1234 Sanat ve İlim Derneği',
      }),
      description: t({
        en: 'Registry Number: 61-027-050 (Türkiye)',
        tr: 'Kütük Numarası: 61-027-050',
      }),
    },
    contact: {
      title: t({
        en: 'Write us an e-mail',
        tr: 'Bize e-posta yazın',
      }),
      email: t({
        en: 'ebsaral@icloud.com',
        tr: 'ebsaral@icloud.com',
      }),
      phone: '+90 532 258 00 93',
      address: t({
        en: 'Sulaklı, Sultan Murat Sk. No:2, 61830 Of/Trabzon Türkiye',
        tr: 'Sulaklı Mah. Sultan Murat Sk. No:2, 61830 Of/Trabzon',
      }),
    },
    bylaw: {
      text: t({
        en: 'Association Bylaw',
        tr: 'Dernek Tüzüğü',
      }),
      href: t({
        en: '/files/1234S-association-bylaw.pdf',
        tr: '/files/1234S-dernek-tuzugu.pdf',
      }),
    },
    explanation: t({
      en: "This website's layout is being developed based on our association's bylaw.",
      tr: 'Bu internet sitesinin şablonu derneğimizin tüzüğü esas alınarak geliştiriliyor.',
    }),
    stackshare: {
      label: 'stackshare.io',
      href: 'https://stackshare.io/ebsaral3651/1234stack',
    },
  },
} satisfies Dictionary;

export default pageContent;
