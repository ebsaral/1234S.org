import { t, type Dictionary } from "intlayer";

const pageContent = {
  key: "hero-section",
  content: {
    videoQuerySelector: '#video-section',
    title: t({
      en: "Logical Spirituality",
      tr: "Mantıksal Maneviyat"
    }),
    subtitle: t({
      en: "Expanding Spirituality with Logic in Nature",
      tr: "Doğadaki Mantıkla Maneviyatı Derinleştirmek"
    }),
    description: t({
      en: "What if the universe is not random at all? What if every illness, every stroke of luck, every success and failure, even every disaster, follows a deeper pattern?",
      tr: "Ya evrendeki hiçbir şey rastgele değilse? Her hastalık, her şans eseri olay, her başarı ve başarısızlık, hatta her felaket, daha derin bir düzeni mi takip ediyor?"
    }),
    watchVideo: t({
      en: "Watch Video",
      tr: "Videoyu İzle"
    }),
    learnMore: t({
      en: "Learn More",
      tr: "Daha Fazla Bilgi"
    }),
    scrollIndicator: t({
      en: "Scroll to explore",
      tr: "Keşfetmek için kaydırın"
    })
  },
} satisfies Dictionary;

export default pageContent;