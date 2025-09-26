import { t, type Dictionary } from "intlayer";

const pageContent = {
  key: "hero-section",
  content: {
    videoQuerySelector: '#video-section',
    title: t({
      en: "Logical Spirituality",
      tr: "Mantıksal Maneviyat",
      de: "Logische Spiritualität"
    }),
    subtitle: t({
      en: "Expanding Spirituality with Nature's Logic",
      tr: "Doğanın Mantığıyla Maneviyatı Derinleştirmek",
      de: "Spiritualität mit der Logik der Natur erweitern"
    }),
    description: t({
      en: "What if the universe is not random at all? What if every illness, every stroke of luck, every success and failure, even every disaster, follows a deeper pattern?",
      tr: "Ya evrendeki hiçbir şey rastgele değilse? Her hastalık, her şans eseri olay, her başarı ve başarısızlık, hatta her felaket, daha derin bir düzeni mi takip ediyor?",
      de: "Was, wenn das Universum überhaupt nicht zufällig ist? Was, wenn jede Krankheit, jeder Glücksfall, jeder Erfolg und Misserfolg, ja sogar jede Katastrophe einem tieferen Muster folgt?"
    }),
    watchVideo: t({
      en: "Watch Video",
      tr: "Videoyu İzle",
      de: "Video ansehen"
    }),
    learnMore: t({
      en: "Learn More",
      tr: "Daha Fazla Bilgi",
      de: "Mehr erfahren"
    }),
    scrollIndicator: t({
      en: "Scroll to explore",
      tr: "Keşfetmek için kaydırın",
      de: "Scrollen, um zu entdecken"
    })
  },
} satisfies Dictionary;

export default pageContent;
