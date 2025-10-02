import { t, type Dictionary } from "intlayer";

const pageContent = {
  key: "footer-section",
  content: {
    title: t({
      en: "Logical Spirituality by 1234S.org:",
      tr: "1234S.org aracılığıyla Mantıksal Maneviyat:",
      de: "Logische Spiritualität von 1234S.org:",
      fr: "Spiritualité Logique par 1234S.org:"
    }),
    description: t({
      en: "A philosophical movement project.",
      tr: "Bir felsefi akım projesi.",
      de: "Ein philosophisches Bewegungsprojekt.",
      fr: "Un projet de mouvement philosophique."
    }),
    status: {
      label: t({
        en: "Status",
        tr: "Durum",
        de: "Status",
        fr: "Statut"
      }),
      text: t({
        en: "Beta version. Seeking supporters for this project.",
        tr: "Beta sürümü. Bu proje için destekçiler aranıyor.",
        de: "Beta-Version. Suche Unterstützer für dieses Projekt.",
        fr: "Version bêta. Recherche de soutiens pour ce projet."
      }),
    },
    lastUpdate: {
      label: t({
        en: "Last content update",
        tr: "Son içerik güncelleme",
        de: "Letzte Inhaltsaktualisierung",
        fr: "Dernière mise à jour du contenu"
      }),
      text: 1759382332281
    },
    developer: t({
      en: "The Spirit Guide",
      tr: "Maneviyat Rehberi",
      de: "Der Geistführer",
      fr: "Le Guide Spirituel"
    }),
    links: {
      githubCommits: "https://github.com/ebsaral/Logical-Spirituality/commits/main/",
      developer: "https://0.1234s.org"
    }
  },
} satisfies Dictionary;

export default pageContent;
