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
        en: "Releases",
        tr: "Sürümler",
        de: "Veröffentlichungen",
        fr: "Publications"
      }),
      text: t({
        en: ReleaseLink("Beta Version"),
        tr: ReleaseLink("Beta Sürümü"),
        de: ReleaseLink("Betaversion"),
        fr: ReleaseLink("Version bêta")
      }),
    },
    lastUpdate: {
      label: t({
        en: "Last content update",
        tr: "Son içerik güncelleme",
        de: "Letzte Inhaltsaktualisierung",
        fr: "Dernière mise à jour du contenu"
      }),
      text: t({
        en: 1760273514112,
        tr: 1760273514112,
        de: 1760273514112,
        fr: 1760273514112
      }),
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
