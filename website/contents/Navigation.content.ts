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
  philosophy: Link;
  mission: Link;
  blog: Link;
  intro: SubLink;
  interconnectedness: SubLink;
  justice: SubLink;
  health: SubLink;
  faq: SubLink;
  project: Link;
  contact: Link;
  career: Link;
  language: string;
  flags: {
    [Locales.ENGLISH]: string;
    [Locales.TURKISH]: string;
  };
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
        en: 'Home',
        tr: 'Anasayfa',
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
        en: 'Mission',
        tr: 'Misyon',
      }),
    },
    blog: {
      text: t({
        en: 'Blog',
        tr: 'Blog',
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
    career: {
      text: t({
        en: 'Join Us',
        tr: 'Bize Katıl',
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
  },
} satisfies Dictionary<NavigationContent>;

export default pageContent;
