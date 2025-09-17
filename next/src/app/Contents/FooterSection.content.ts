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
        en: "In development; alpha version.",
        tr: "Geliştirilme aşamasında; alpha sürümü."
      }),
    },
    lastUpdate: {
      label: t({
        en: "Last update",
        tr: "Son güncelleme"
      }),
      text: 1757837394712
    },
    developer: t({
      en: "The Spirit Guide",
      tr: "Maneviyat Rehberi"
    }),
    links: {
      githubCommits: "https://github.com/ebsaral/Logical-Spirituality/commits/main/",
      developer: "https://ebsaral.vercel.app",
      theme: "https://emergent.sh"
    }
  },
} satisfies Dictionary;

export default pageContent;