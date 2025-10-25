import { Locales, t, type Dictionary } from "intlayer";

const pageContent = {
  key: "navigation",
  content: {
    webpage: {
        title: t({
            en: "1234S.org",
            de: "1234S.org",
            fr: "1234S.org"
        }),
        link: "https://1234s.org"
    },
    home: {
        text: t({
            en: "Logical Spirituality",
            de: "Logische Spiritualität",
            fr: "Spiritualité Logique"
        }),
    },
    interconnectedness: { 
        text: t({
            en: "Interconnectedness",
            de: "Verbundenheit",
            fr: "Interconnexion"
        }),
    },
    justiceInNature: { 
        text: t({
            en: "Justice",
            de: "Gerechtigkeit",
            fr: "Justice"
        }),
    },
    health: { 
        text: t({
            en: "Health",
            de: "Gesundheit",
            fr: "Santé"
        }),
    },
    movement: { 
        text: t({
            en: "Project",
            de: "Projekt",
            fr: "Projet"
        }),
    },
    contact: {
        text: t({
            en: "Contact",
            de: "Kontakt",
            fr: "Contact"
        }),
    },
    language: t({
      en: "Language",
      de: "Sprache",
      fr: "Langue"
    }),
    flags: {
        [Locales.ENGLISH]: '🇺🇸',
        [Locales.GERMAN]: '🇩🇪',
        [Locales.FRENCH]: '🇫🇷'
    }
  },
} satisfies Dictionary;

export default pageContent;
