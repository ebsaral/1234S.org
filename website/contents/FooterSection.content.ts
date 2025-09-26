import { t, type Dictionary } from "intlayer";

const pageContent = {
  key: "footer-section",
  content: {
    title: t({
      en: "Logical Spirituality",
      tr: "Mantıksal Maneviyat"
    }),
    description: t({
      en: "A philosophical movement project",
      tr: "Bir felsefi akım projesi"
    }),
    copyright: {
      mark: "©"
    },
    status: {
      label: t({
        en: "Status",
        tr: "Durum"
      }),
      text: t({
        en: "Beta version.",
        tr: "Beta sürümü."
      }),
    },
    lastUpdate: {
      label: t({
        en: "Last content update",
        tr: "Son içerik güncelleme"
      }),
      text: 1758469608961
    },
    developer: t({
      en: "The Spirit Guide",
      tr: "Maneviyat Rehberi"
    }),
    links: {
      githubCommits: "https://github.com/ebsaral/Logical-Spirituality/commits/main/",
      developer: "https://0.1234s.org"
    }
  },
} satisfies Dictionary;

export default pageContent;