import { t, type Dictionary } from "intlayer";

const githubReleaseLink = "https://github.com/ebsaral/Logical-Spirituality/releases";

const ReleaseLink = (text: string) => {
  return <a className="underline hover:no-underline underline-offset-2" href={githubReleaseLink} target="_blank">{text}</a>;  
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
        en: "Status",
        tr: "Durum",
        de: "Status",
        fr: "Statut"
      }),
      text: t({
        en: ReleaseLink("Beta version"),
        tr: ReleaseLink("Beta sürümü"),
        de: ReleaseLink("Beta-Version"),
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
        en: 1759844763203,
        tr: 1759844763203,
        de: 1759844763203,
        fr: 1759844763203
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
