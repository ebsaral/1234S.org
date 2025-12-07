import { t, type Dictionary } from "intlayer";

const pageContent = {
  key: "footer-section",
  content: {
    title: t({
      en: "Logical Spirituality by 1234S.org:",
      tr: "1234S.org aracılığıyla Mantıksal Maneviyat:"
    }),
    description: t({
      en: "An open source philosophical movement project.",
      tr: "Bir açık kaynak felsefi akım projesi."
    }),
    developer: t({
      en: "Spirit Guide",
      tr: "Maneviyat Rehberi"
    }),
    links: {
      githubCommits: "https://github.com/ebsaral/Logical-Spirituality/commits/main/",
      developer: t({
        en: "https://0.1234s.org/en",
        tr: "https://0.1234s.org/tr"
      }),
      social: [
        {
          url: t({
            en: "https://www.instagram.com/logical.spirituality",
            tr: "https://www.instagram.com/mantiksal.maneviyat",
          }), 
          label: "Instagram"
        },
        {
          url: t({
            en: "https://x.com/1234S_en",
            tr: "https://x.com/1234S_tr",
          }),
          label: "X"
        },
        {
          url: t({
            en: "https://logicalspirituality.substack.com",
            tr: "https://maneviyat.substack.com",
          }),
          label: "Substack"
        },
        {
          url: "https://www.linkedin.com/company/1234s-org",
          label: "LinkedIn"
        },
        {
          url: "https://github.com/ebsaral/Logical-Spirituality",
          label: "GitHub"
        }
      ]
    }
  },
} satisfies Dictionary;

export default pageContent;
