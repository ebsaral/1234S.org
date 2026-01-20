import { t, type Dictionary } from 'intlayer';

interface FooterLink {
  href: string;
  label: string;
}

interface FooterContent {
  title: string;
  description: string;
  association: {
    name: string;
    description: string;
    warning: string;
    contact: {
      title: string;
      email: string;
      phone: string;
      address: string;
    };
    social: FooterLink[];
    bylaw: FooterLink;
    license: FooterLink;
  };
  stackshare: FooterLink;
  displayProductHunt: boolean;
}

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
    association: {
      name: t({
        en: '1234 Science & Art Association',
        tr: '1234 Sanat ve İlim Derneği',
      }),
      warning: t({
        en: 'Our association needs to reach **a total of 16 members by June 2026**: 5 full members and 5 alternate members for the board of directors, and 3 full members and 3 alternate members for the supervisory board. *Otherwise, according to the associations law, closure proceedings will be initiated for our association.*',
        tr: 'Derneğimizin **Haziran 2026** ayına kadar yönetim kurulu için 5 asıl ve 5 yedek, denetim kurulu için ise 3 asıl ve 3 yedek olmak üzere **toplamda 16 üyeye** ulaşması gerekiyor. *Aksi halde, dernekler kanununa göre derneğimizin kapanış işlemleri başlatılacak.*',
      }),
      description: t({
        en: "This website's layout is being developed based on our association's bylaw.",
        tr: 'Bu internet sitesinin şablonu derneğimizin tüzüğü esas alınarak geliştiriliyor.',
      }),
      bylaw: {
        label: t({
          en: 'Association Bylaw',
          tr: 'Dernek Tüzüğü',
        }),
        href: t({
          en: '/files/1234S-association-bylaw.pdf',
          tr: '/files/1234S-dernek-tuzugu.pdf',
        }),
      },
      license: {
        label: t({
          en: 'Activity License (TR)',
          tr: 'Faaliyet Belgesi',
        }),
        href: t({
          en: '/files/1234S-faaliyet-belgesi.pdf',
          tr: '/files/1234S-faaliyet-belgesi.pdf',
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
    },
    stackshare: {
      label: 'stackshare.io',
      href: 'https://stackshare.io/ebsaral3651/1234stack',
    },
    displayProductHunt: true,
  },
} satisfies Dictionary<FooterContent>;

export default pageContent;
