import { md, t, type Dictionary } from 'intlayer';

const pageContent = {
  key: 'project-section',
  content: {
    title: t({
      en: 'The Root of New Politics',
      tr: 'Yeni Siyasetin Kökeni',
    }),
    support: t({
      en: md(
        'To contribute to this project, which we aim to develop as a philosophical movement, you can visit our [Support](/support) page.',
      ),
      tr: md(
        'Bir felsefi akım olarak ilerletmek istediğimiz bu projemize katkıda bulunmak için [Destek](/destek) sayfamızı ziyaret edebilirsiniz.',
      ),
    }),
    explanation: t({
      en: md(
        "**Within the guidance of Logical Spirituality's teachings based on the realities of nature, we can enable a fundamental transformation in politics.** Until we make our lives more harmonious with nature through the lessons learned from our life experiences, our various health problems will continue, almost as a result of natural selection. We can raise awareness so that people can see the logic in nature and together we can heal the recurring mistakes in our life cycles.",
      ),
      tr: md(
        '**Mantıksal Maneviyat öğretilerinin rehberliğinde doğanın gerçeklerini esas alarak, siyasette köklü bir dönüşüm gerçekleştirebiliriz.** Yaşam deneyimlerimizden edindiğimiz derslerle yaşantılarımızı doğayla daha uyumlu hâle getirene dek, farklı biçimlerdeki sağlık sorunlarımız adeta doğal seçilimin bir sonucu gibi devam edecektir. İnsanların doğadaki mantığı görebilmeleri için farkındalık kazandırabiliriz ve yaşam döngülerimizde tekrarlanan hataları birlikte iyileştirebiliriz.',
      ),
    }),
    items: [
      {
        title: t({
          en: 'Health',
          tr: 'Sağlık',
        }),
        subtitle: t({
          en: md(
            'We can treat all diseases without medication. To be able to live in a healthy society, living conditions must be developed for everyone so that negative actions are not repeated after treatments. Because a healthy life is a fundamental right for every person.\n\nThe increase in the number of hospitals and medicines in countries proves that the general health of society is deteriorating and negative actions are increasing. Therefore, opening a hospital is not a success, but a cry for help.',
          ),
          tr: md(
            'İlaç kullanmadan bütün hastalıkları tedavi etmemiz mümkün. Sağlıklı bir toplumda yaşayabilmek ve tedavilerden sonra olumsuz davranışların tekrarlanmaması için her canlının yaşam koşullarının geliştirilmesi gerekir. Çünkü sağlıklı bir yaşam herkes için temel bir haktır.\n\nHastane ve ilaç sayılarındaki artış, toplumun genel sağlığının kötüleştiğini ve olumsuz davranışların arttığını kanıtlar. Dolayısıyla hastane açmak bir başarı değil, yardım çağrısıdır.',
          ),
        }),
      },
      {
        title: t({
          en: 'Education',
          tr: 'Eğitim',
        }),
        subtitle: t({
          en: md(
            "Teaching everyone in detail about the reality of Justice in Nature is essential for the rights and potential of all living beings. An increase in the quality of our lives in line with the balance of Equality and Freedom in nature, which awaits recognition, will positively impact the entire society.\n\nEveryone can learn how to gain and shape more talents, how to align social interactions better with nature's luck scale, how to improve any business in a more healthy way and how to unlock gifts in nature's offerings.",
          ),
          tr: md(
            'Doğadaki Adalet gerçeğini her insana ayrıntılı olarak öğretmek, tüm canlıların hakları ve potansiyelleri için gereklidir. Doğadaki fark edilmeyi bekleyen Eşitlik ve Özgürlük dengesi doğrultusunda yaşam kalitelerimizdeki artış, tüm topluma olumlu yansır.\n\nHerkes daha fazla yetenek edinmeyi ve şekillendirmeyi, sosyal etkileşimleri doğanın şans ölçeğiyle daha iyi uyumlu hale getirmeyi, herhangi bir işi daha sağlıklı bir şekilde nasıl geliştireceğini ve doğanın bahşettiği hediyeleri nasıl ortaya çıkaracağını öğrenmelidir.',
          ),
        }),
      },
      {
        title: t({
          en: 'Environment',
          tr: 'Çevre',
        }),
        subtitle: t({
          en: md(
            'All natural phenomena *(luck in nature)* — such as environmental changes, weather conditions, and natural disasters — reflect the mental structures of societies and the consequences of their actions. As the silent language of nature is understood, the reasons behind outcomes become easier to grasp.\n\nUser interfaces should be designed in accordance with our teachings to prevent negative actions from occurring through their use. Even moving a single paving stone can harm the health of the person who moves it. Any negativity or illness spreads to other parts of society.',
          ),
          tr: md(
            'Çevredeki değişimler *(doğadaki şanslar)*, hava koşulları ve doğal afetler gibi tüm doğa olayları, toplumların zihin yapılarının ve eylemlerinin sonuçlarını yansıtır. Doğanın sessiz dili anlaşıldıkça, olayların sebeplerini anlamak kolaylaşır.\n\nİş modelleri ve kullanıcı arayüzleri, kullanım yoluyla olumsuz eylemlerin gerçekleşmesini önlemek için öğretilerimize uygun olarak tasarlanmalıdır. Tek bir kaldırım taşını hareket ettirmek bile, onu hareket ettiren kişinin sağlığına zarar verebilir. Herhangi bir olumsuzluk veya hastalık toplumun diğer kesimlerine yayılır.',
          ),
        }),
      },
      {
        title: t({
          en: 'Life',
          tr: 'Yaşam',
        }),
        subtitle: t({
          en: md(
            'Any idea, invention, or product emerges through the inspiration *(guidance)* of living beings within the environment. Therefore, every gain must be a collective gain for society. We must reinterpret and develop individual achievements by attaining the consciousness of a life order in which all living things are interconnected.\n\nThe struggles for livelihood, stress, selfishness, inequality of opportunities, and all other negatives are obstacles to have healthy lives. We must prevent the misuse of opportunities that nature provides to bring balance.',
          ),
          tr: md(
            'Herhangi bir fikir, buluş veya ürün, çevredeki canlıların vesile *(rehber)* olmalarıyla ortaya çıkar. Bu nedenle, her kazanım toplum için ortak bir kazanım olmak zorundadır. Tüm canlıların birbirlerine bağlı olduğu bir yaşam düzeninin bilincine erişerek, bireysel başarıları tekrar yorumlamalı ve geliştirmeliyiz. \n\nGeçim mücadelesi, stres, bencillik, fırsat eşitsizliği ve diğer tüm olumsuzluklar sağlıklı yaşamamızın önündeki engellerdir. Doğanın dengeyi sağlamak için sunduğu fırsatların olumsuz biçimlerde kullanılmalarının önüne geçmeliyiz.',
          ),
        }),
      },
    ],
    message: {
      title: t({
        en: 'Justice in Nature is in constant motion! What are we waiting for?',
        tr: 'Doğadaki Adalet sürekli hareket halinde! Neyi bekliyoruz?',
      }),
      description: t({
        en: 'Better health. More luck. Countless opportunities.',
        tr: 'Daha iyi sağlık. Daha fazla şans. Sayısız fırsat.',
      }),
    },
  },
} satisfies Dictionary;

export default pageContent;
