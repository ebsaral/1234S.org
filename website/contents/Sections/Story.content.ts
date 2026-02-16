import { md, t, type Dictionary } from 'intlayer';

const pageContent = {
  key: 'story-section',
  content: {
    title: t({
      en: 'Our Adventure',
      tr: 'Serüvenimiz',
    }),
    description: t({
      en: md(
        'In the global system we live in, we began our journey by recognizing that different cultures actually share common reproofs. We sought universal solutions for the rights and freedoms of all living beings.\n\nWhile many of our shared problems, such as chaos, stress, conflict, war, and disease, still continue in different forms and at different times, we discovered the truth of justice in the workings of nature. We revealed the teachings of Logical Spirituality based on our life experiences in a way that encompasses all living beings.\n\nBy better feeling and learning the language of nature, we rolled up our sleeves to build a way of life that protects the rights and potentials of all living beings. On this path, we are leading sustainable and fair solutions that consider the well-being of every individual and society.',
      ),
      tr: md(
        'İçerisinde bulunduğumuz küresel sistemde, farklı kültürlerin aslında ortak sitem noktaları olduğunu fark ederek yolculuğa başladık. Tüm canlıların yaşam hakları ve özgürlükleri için evrensel çözümler aradık.\n\nKargaşa, stres, kavga, savaş ve hastalık gibi deneyimlediğimiz birçok ortak dertlerimiz farklı biçimlerde ve zamanlarda halen devam ederken, doğanın işleyişindeki adalet gerçeğini keşfettik. Bu gerçeği temel alan Mantıksal Maneviyat öğretilerini yaşam tecrübelerimizle harmanlayarak her canlıyı kapsayan bir biçimde açığa çıkardık.\n\nDoğanın dilini daha iyi hissederek ve öğrenerek, tüm canlıların haklarını ve potansiyellerini koruyan bir yaşam düzeni inşa etmek için kolları sıvadık. Bu yolda, her bireyin ve toplumun refahını gözeten, sürdürülebilir ve adil çözümlere öncülük ediyoruz.',
      ),
    }),
  },
} satisfies Dictionary;

export default pageContent;
