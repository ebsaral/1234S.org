import { t, type Dictionary } from "intlayer";

const pageContent = {
  key: "footer-section",
  content: {
    title: t({
      en: "Logical Spirituality",
      tr: "Mantıksal Maneviyat",
      de: "Logische Spiritualität"
    }),
    description: t({
      en: "A philosophical movement project",
      tr: "Bir felsefi akım projesi",
      de: "Ein philosophisches Bewegungsprojekt"
    }),
    copyright: {
      mark: "©"
    },
    status: {
      label: t({
        en: "Status",
        tr: "Durum",
        de: "Status"
      }),
      text: t({
        en: "Beta version. Seeking supporters for this project.",
        tr: "Beta sürümü. Bu proje için destekçiler aranıyor.",
        de: "Beta-Version. Suche Unterstützer für dieses Projekt."
      }),
    },
    lastUpdate: {
      label: t({
        en: "Last content update",
        tr: "Son içerik güncelleme",
        de: "Letzte Inhaltsaktualisierung"
      }),
      text: 1759076994338
    },
    developer: t({
      en: "The Spirit Guide",
      tr: "Maneviyat Rehberi",
      de: "Der Geistführer"
    }),
    links: {
      githubCommits: "https://github.com/ebsaral/Logical-Spirituality/commits/main/",
      developer: "https://0.1234s.org"
    }
  },
} satisfies Dictionary;

export default pageContent;
