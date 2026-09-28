import { t, type Dictionary } from 'intlayer';

const pageContent = {
  key: 'story-section',
  content: {
    title: t({
      en: 'Our Philosophy',
      tr: 'Felsefemiz',
    }),
    subtitle: t({
      en: 'We are a global organization that seeks universal solutions for the rights and freedoms of all living beings.',
      tr: 'Tüm canlıların yaşam hakları ve özgürlükleri için evrensel çözümler arayan küresel bir organizasyonuz.',
    }),
    description: t({
      en: 'In the global system we live in, we have begun our journey by recognizing that different cultures actually share common reproofs. We have sought universal solutions for the rights and freedoms of all living beings. Previous teachings that are widely accepted by people mostly focus on after life, and this issue has been blocking us from seeing how God exists in the realities of nature by enabling frauds.\n\nWhile many of our shared problems, such as chaos, stress, conflict, war, and disease, still continue in different forms and at different times, we have discovered equality and freedom in the workings of nature. We have revealed the teachings of Logical Spirituality based on our life experiences.\n\nThese teachings did not emerge merely as a thought exercise, but as the culmination of years of pain, tears, joy, loss, hope, and countless experiences. Any political belief, religion, or ideology that doesn\'t align with equality and freedom in nature is a marketing strategy and fraud of that era.\n\nWe envision that this open source system of thought will renew all beliefs, and it will be known simply as "Spirituality" at global scale when everyone understands [The God](){data-tooltip-id="tooltip" data-tooltip-content="Definitions pointing to the similar divine source: Yahweh, God, Allah, Brahman, Tao, Logos, Pangu, etc."}\'s logic in nature.',
      tr: 'İçerisinde bulunduğumuz küresel sistemde, farklı kültürlerin aslında ortak sitem noktaları olduğunu fark ederek yolculuğa başladık. Tüm canlıların yaşam hakları ve özgürlükleri için evrensel çözümler aradık. İnsanların yaygın olarak kabul ettikleri geçmişteki öğretilerin neredeyse tamamı ölümden sonrasına odaklanıyor, ve bu sorun sahtekârlıkların önünü açarak [Tanrı](){data-tooltip-id="tooltip" data-tooltip-content="Benzer ilahi yolu işaret eden tanımlar: Yahveh, God, Allah, Brahman, Tao, Logos, Pangu, vb."}\'nın doğanın gerçeklerinde nasıl var olduğunu görmemizi engelliyordu. \n\nKargaşa, stres, kavga, savaş ve hastalık gibi deneyimlediğimiz birçok ortak dertlerimiz farklı biçimlerde ve zamanlarda halen devam ederken, doğanın işleyişindeki eşitliği ve özgürlüğü keşfettik. Mantıksal Maneviyat öğretilerini yaşam tecrübelerimizle harmanlayarak açığa çıkardık.\n\nBuradaki öğretiler öylesine bir düşünce egzersizi olarak değil, yıllarca yaşanan birçok acı, gözyaşı, sevinç, kayıp, umut ve deneyimlerin birleşimiyle ortaya çıktı. Doğadaki eşitlik ve özgürlükle örtüşmeyen herhangi bir siyasi inanç, din veya ideoloji, o dönemin bir pazarlama stratejisi ve kandırmacasıdır.\n\nBu açık kaynak düşünce sisteminin tüm inançları yenileyeceğini ve Tanrı\'nın doğadaki mantığını herkesin kavramasıyla birlikte küresel ölçekte yalnızca “Maneviyat” olarak adlandırılacağını öngörüyoruz.',
    }),
    items: [
      {
        title: t({
          en: 'The God = The Realities of The Universe',
          tr: 'Tanrı = Evrendeki Gerçekler',
        }),
        description: t({
          en: '',
          tr: '',
        }),
      },
      {
        title: t({
          en: 'The Realities of Nature ≈ Scientific Truths',
          tr: 'Doğadaki Gerçekler ≈ Bilimsel Gerçekler',
        }),
        description: t({
          en: 'We feel The God in the realities of nature, which is a subset of the universe. The realities of nature are explained by scientific truths.',
          tr: "Evrenin bir alt kümesi olan doğanın gerçeklerinde Tanrı'yı hissederiz. Doğadaki gerçekler, bilimsel gerçekler ile açıklanır. ",
        }),
      },
      {
        title: t({
          en: 'The God ≈ Scientific Truths',
          tr: 'Tanrı ≈ Bilimsel Gerçekler',
        }),
        description: t({
          en: 'As we free ourselves from the frauds in scientific truths, we better understand the God.',
          tr: "Bilimsel gerçeklerdeki sahtekârlıklardan arındıkça, Tanrı'yı daha iyi anlarız.",
        }),
      },
    ],
    itemsNote: t({
      en: '= (equals) , ≈ (approximately equals)',
      tr: '= (eşittir) , ≈ (yaklaşık olarak eşittir)',
    }),
    visit: t({
      en: 'Read Logical Spirituality',
      tr: "Mantıksal Maneviyat'ı Okuyun",
    }),
  },
} satisfies Dictionary;

export default pageContent;
