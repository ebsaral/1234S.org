import { Locales, t, type Dictionary } from "intlayer";

const pageContent = {
  key: "navigation",
  content: {
    webpage: {
        title: t({
            en: "1234S.org",
            tr: "1234S.org",
            de: "1234S.org",
            fr: "1234S.org"
        }),
        link: "https://1234s.org"
    },
    home: {
        text: t({
            en: "Logical Spirituality",
            tr: "Mantıksal Maneviyat",
            de: "Logische Spiritualität",
            fr: "Spiritualité Logique"
        }),
    },
    interconnectedness: { 
        text: t({
            en: "Interconnectedness",
            tr: "Bütünlük",
            de: "Verbundenheit",
            fr: "Interconnexion"
        }),
    },
    justiceInNature: { 
        text: t({
            en: "Justice",
            tr: "Adalet",
            de: "Gerechtigkeit",
            fr: "Justice"
        }),
    },
    health: { 
        text: t({
            en: "Health",
            tr: "Sağlık",
            de: "Gesundheit",
            fr: "Santé"
        }),
    },
    examples: { 
        text: t({
            en: "Examples",
            tr: "Örnekler",
            de: "Beispiele",
            fr: "Exemples"
        }),
    },
    contact: {
        text: t({
            en: "Contact",
            tr: "İletişim",
            de: "Kontakt",
            fr: "Contact"
        }),
    },
    language: t({
      en: "Language",
      tr: "Dil",
      de: "Sprache",
      fr: "Langue"
    }),
    flags: {
        [Locales.ENGLISH]: '🇺🇸',
        [Locales.TURKISH]: '🇹🇷',
        [Locales.GERMAN]: '🇩🇪',
        [Locales.FRENCH]: '🇫🇷'
    }
  },
} satisfies Dictionary;

export default pageContent;
