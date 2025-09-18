import { Locales, t, type Dictionary } from "intlayer";

const pageContent = {
  key: "navigation",
  content: {
    webpage: {
        title: t({
            en: "1234s.org",
            tr: "1234s.org"
        }),
        link: "https://1234s.org"
    },
    home: {
        name: "home",
        href: "#home", 
        text: t({
            en: "Logical Spirituality",
            tr: "Mantıksal Maneviyat"
        }),
    },
    interconnectedness: {
        name: "interconnectedness",
        id: "#interconnectedness", 
        text: t({
            en: "Interconnectedness",
            tr: "Bütünlük"
        }),
    },
    justiceInNature: {
        name: "justiceInNature",
        id: "#justice-in-nature", 
        text: t({
            en: "Justice",
            tr: "Adalet"
        }),
    },
    health: {
        name: "health",
        id: "#health", 
        text: t({
            en: "Health",
            tr: "Sağlık"
        }),
    },
    examples: {
        name: "examples",
        id: "#examples", 
        text: t({
            en: "Examples",
            tr: "Örnekler"
        }),
    },
    language: t({
      en: "Language",
      tr: "Dil"
    }),
    flags: {
        [Locales.ENGLISH]: '🇺🇸',
        [Locales.TURKISH]: '🇹🇷'
    }
  },
} satisfies Dictionary;

export default pageContent;