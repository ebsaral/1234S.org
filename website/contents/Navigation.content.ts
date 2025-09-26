import { Locales, t, type Dictionary } from "intlayer";

const pageContent = {
  key: "navigation",
  content: {
    webpage: {
        title: t({
            en: "1234S.org",
            tr: "1234S.org",
            de: "1234S.org"
        }),
        link: "https://1234s.org"
    },
    home: {
        text: t({
            en: "Logical Spirituality",
            tr: "Mantıksal Maneviyat",
            de: "Logische Spiritualität"
        }),
    },
    interconnectedness: { 
        text: t({
            en: "Interconnectedness",
            tr: "Bütünlük",
            de: "Verbundenheit"
        }),
    },
    justiceInNature: { 
        text: t({
            en: "Justice",
            tr: "Adalet",
            de: "Gerechtigkeit"
        }),
    },
    health: { 
        text: t({
            en: "Health",
            tr: "Sağlık",
            de: "Gesundheit"
        }),
    },
    examples: { 
        text: t({
            en: "Examples",
            tr: "Örnekler",
            de: "Beispiele"
        }),
    },
    contact: {
        text: t({
            en: "Contact",
            tr: "İletişim",
            de: "Kontakt"
        }),
    },
    language: t({
      en: "Language",
      tr: "Dil",
      de: "Sprache"
    }),
    flags: {
        [Locales.ENGLISH]: '🇺🇸',
        [Locales.TURKISH]: '🇹🇷',
        [Locales.GERMAN]: '🇩🇪'
    }
  },
} satisfies Dictionary;

export default pageContent;
