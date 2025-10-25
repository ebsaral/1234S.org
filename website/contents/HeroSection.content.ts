import { t, type Dictionary } from "intlayer";

const pageContent = {
  key: "hero-section",
  content: {
    videoQuerySelector: '#video-section',
    title: t({
      en: "Logical Spirituality",
      de: "Logische Spiritualität",
      fr: "Spiritualité Logique"
    }),
    subtitle: t({
      en: "A Comprehensive View of Spirituality \nTogether with the Logic of Nature",
      de: "Ein umfassender Blick auf Spiritualität \nzusammen mit der Logik der Natur",
      fr: "Une vue d'ensemble de la spiritualité \navec la logique de la nature"
    }),
    description: t({
      en: "What if the universe is not random at all? What if every illness, every stroke of luck, every success and failure, even every disaster, follows a deeper pattern?",
      de: "Was, wenn das Universum überhaupt nicht zufällig ist? Was, wenn jede Krankheit, jeder Glücksfall, jeder Erfolg und Misserfolg, ja sogar jede Katastrophe einem tieferen Muster folgt?",
      fr: "Et si l’univers n’était pas du tout aléatoire ? Et si chaque maladie, chaque coup de chance, chaque succès et échec, voire chaque catastrophe, suivait un schéma plus profond ?"
    }),
    watchVideo: t({
      en: "Watch Video",
      de: "Video ansehen",
      fr: "Regarder la vidéo"
    }),
    learnMore: t({
      en: "Learn More",
      de: "Mehr erfahren",
      fr: "En savoir plus"
    }),
    scrollIndicator: t({
      en: "Scroll to explore",
      de: "Scrollen, um zu entdecken",
      fr: "Faites défiler pour explorer"
    })
  },
} satisfies Dictionary;

export default pageContent;
