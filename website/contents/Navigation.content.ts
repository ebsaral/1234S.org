import { Locales, t, type Dictionary } from "intlayer";

const pageContent = {
  key: "navigation",
  content: {
    webpage: {
        title: t({
            en: "1234S.org",
            tr: "1234S.org",
        }),
        link: "https://1234s.org"
    },
    home: {
        text: t({
            en: "Home",
            tr: "Anasayfa",
        }),
    },
    about: {
        text: t({
            en: "About",
            tr: "Hakkımızda",
        }),
    },
    spirituality: {
        text: t({
            en: "Logical Spirituality",
            tr: "Mantıksal Maneviyat",
        }),
    },
    support: {
        text: t({
            en: "Support",
            tr: "Destek",
        }),
    },
    interconnectedness: { 
        text: t({
            en: "Interconnectedness",
            tr: "Bütünlük",
        }),
    },
    justiceInNature: { 
        text: t({
            en: "Justice",
            tr: "Adalet",
        }),
    },
    health: { 
        text: t({
            en: "Health",
            tr: "Sağlık",
        }),
    },
    project: { 
        text: t({
            en: "Project",
            tr: "Proje",
        }),
    },
    contact: {
        text: t({
            en: "Contact",
            tr: "İletişim",
        }),
    },
    language: t({
      en: "Language",
      tr: "Dil",
    }),
    flags: {
        [Locales.ENGLISH]: '🇺🇸',
        [Locales.TURKISH]: '🇹🇷',
    }
  },
} satisfies Dictionary;

export default pageContent;
