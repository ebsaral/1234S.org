import { Locales, t, type Dictionary } from 'intlayer';

type Link = {
  text: string;
};

type SubLink = Link & {
  hash: string;
};

interface NavigationContent {
  webpage: {
    title: string;
    link: string;
  };
  home: Link;
  about: Link;
  philosophy: Link;
  mission: Link;
  support: Link;
  project: Link;
  contact: Link;
  intro: SubLink;
  interconnectedness: SubLink;
  justice: SubLink;
  health: SubLink;
  faq: SubLink;
  language: string;
  flags: {
    [Locales.ENGLISH]: string;
    [Locales.TURKISH]: string;
  };
  budgetIssue: string;
  closeButton: string;
}

const pageContent = {
  key: 'navigation',
  content: {
    webpage: {
      title: t({
        en: '1234S.org',
        tr: '1234S.org',
      }),
      link: 'https://1234s.org',
    },
    home: {
      text: t({
        en: 'Our Association',
        tr: 'Derneğimiz',
      }),
    },
    about: {
      text: t({
        en: 'About',
        tr: 'Hakkımızda',
      }),
    },
    philosophy: {
      text: t({
        en: 'Logical Spirituality',
        tr: 'Mantıksal Maneviyat',
      }),
    },
    mission: {
      text: t({
        en: 'Our Mission',
        tr: 'Misyonumuz',
      }),
    },
    support: {
      text: t({
        en: 'Support Us',
        tr: 'Destek Olun',
      }),
    },
    intro: {
      text: t({
        en: 'Intro',
        tr: 'Giriş',
      }),
      hash: 'a',
    },
    interconnectedness: {
      text: t({
        en: 'Interconnectedness',
        tr: 'Bütünlük',
      }),
      hash: 'b',
    },
    justice: {
      text: t({
        en: 'Justice',
        tr: 'Adalet',
      }),
      hash: 'c',
    },
    health: {
      text: t({
        en: 'Health',
        tr: 'Sağlık',
      }),
      hash: 'd',
    },
    faq: {
      text: t({
        en: 'FAQ',
        tr: 'SSS',
      }),
      hash: 'faq',
    },
    project: {
      text: t({
        en: 'Project',
        tr: 'Proje',
      }),
    },
    contact: {
      text: t({
        en: 'Contact',
        tr: 'İletişim',
      }),
    },
    language: t({
      en: 'Language',
      tr: 'Dil',
    }),
    flags: {
      [Locales.ENGLISH]: '🇺🇸',
      [Locales.TURKISH]: '🇹🇷',
    },
    budgetIssue: t({
      en: 'While our teachings are being used in all dissembling political speeches at the moment, our financial difficulties continue to increase. Any contribution or assistance that helps clear our way forward would be deeply appreciated.',
      tr: 'Öğretilerimiz şu anki tüm siyasi konuşmalarda iki yüzlü biçimlerde kullanılıyor. Fakat mali sıkıntılarımız artmaya devam ediyor. Yolumuzu açabilecek herhangi bir katkıda veya yardımda bulunabilirseniz memnun oluruz.',
    }),
    closeButton: t({
      en: 'Close',
      tr: 'Kapat',
    }),
  },
} satisfies Dictionary<NavigationContent>;

export default pageContent;
