import { t, type Dictionary } from "intlayer";

const githubReleaseLink = "https://github.com/ebsaral/Logical-Spirituality/releases";

const ReleaseLink = (text: string) => {
  return <a className="underline hover:no-underline underline-offset-2" href={githubReleaseLink} target="_blank" title="GitHub Releases">{text}</a>;  
}

const pageContent = {
  key: "footer-section",
  content: {
    title: t({
      en: "Logical Spirituality by 1234S.org:",
      tr: "1234S.org aracılığıyla Mantıksal Maneviyat:"
    }),
    description: t({
      en: "A philosophical movement project.",
      tr: "Bir felsefi akım projesi."
    }),
    status: {
      label: t({
        en: "Releases",
        tr: "Sürümler"
      }),
      text: t({
        en: ReleaseLink("Beta Version"),
        tr: ReleaseLink("Beta Sürümü")
      }),
    },
    lastUpdate: {
      label: t({
        en: "Last content update",
        tr: "Son içerik güncelleme",
      }),
      text: t({
        en: 1762712159492,
        tr: 1762677416166
      }),
    },
    developer: t({
      en: "The Spirit Guide",
      tr: "Maneviyat Rehberi"
    }),
    links: {
      githubCommits: "https://github.com/ebsaral/Logical-Spirituality/commits/main/",
      developer: t({
        en: "https://0.1234s.org/en",
        tr: "https://0.1234s.org/tr"
      }),
      social: [
        { url: t({
            en: "https://www.instagram.com/logical.spirituality",
            tr: "https://www.instagram.com/mantiksal.maneviyat",
          }), 
          label: "Instagram"
        },
        { url: t({
            en: "https://x.com/1234S_en",
            tr: "https://x.com/1234S_tr",
          }),
          label: "X"
        }, 
        { url: "https://www.linkedin.com/company/1234s-org", label: "LinkedIn" },
        { url: "https://github.com/ebsaral/Logical-Spirituality", label: "GitHub" }
      ]
    }
  },
} satisfies Dictionary;

export default pageContent;
