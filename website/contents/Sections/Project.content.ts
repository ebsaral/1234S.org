import { t, type Dictionary } from 'intlayer';

const pageContent = {
  key: 'project-section',
  content: {
    title: t({
      en: 'The Root of New Politics',
      tr: 'Yeni Siyasetin Kökeni',
    }),
    support: t({
      en: 'To contribute to this project, which we aim to develop as a philosophical movement, you can visit our Support page.',
      tr: 'Bir felsefi akım olarak ilerletmek istediğimiz bu projemize katkıda bulunmak için Destek sayfamızı ziyaret edebilirsiniz.',
    }),
    explanation: t({
      en: "**Within the guidance of Logical Spirituality's teachings based on the realities of nature, we can enable a fundamental transformation in politics.** Until we make our lives more harmonious with nature through the lessons learned from our life experiences, our various health problems will continue, almost as a result of natural selection. We can raise awareness so that people can see the logic in nature and together we can heal the recurring mistakes in our life cycles.",
      tr: '**Mantıksal Maneviyat öğretilerinin rehberliğinde doğanın gerçeklerini esas alarak, siyasette köklü bir dönüşüm gerçekleştirebiliriz.** Yaşam deneyimlerimizden edindiğimiz derslerle yaşantılarımızı doğayla daha uyumlu hâle getirene dek, farklı biçimlerdeki sağlık sorunlarımız adeta doğal seçilimin bir sonucu gibi devam edecektir. İnsanların doğadaki mantığı görebilmeleri için farkındalık kazandırabiliriz ve yaşam döngülerimizde tekrarlanan hataları birlikte iyileştirebiliriz.',
    }),
    items: [
      {
        title: t({
          en: 'Health',
          tr: 'Sağlık',
        }),
        subtitle: t({
          en: "We can treat all diseases without medication. To be able to live in a healthy society, living conditions must be developed for everyone so that negative actions are not repeated after treatments. Because a healthy life is a fundamental right for every person.\n\nThe increase in the number of hospitals and medicines in countries proves that the general health of society is deteriorating and negative actions are increasing. Therefore, opening a hospital is not a success, but a cry for help. While you are reading this text right now, someone is suffering in a hospital, having an accident somewhere, or losing their life...\n\nEach consequence can be analyzed to understand its underlying causes, and society can be educated about these reasons. The fact that a worker who performs any action faces nature's justice proves that responsibilities must be shared equally.",
          tr: 'İlaç kullanmadan bütün hastalıkları tedavi etmemiz mümkündür. Sağlıklı bir toplumda yaşayabilmek ve tedavilerden sonra olumsuz davranışların tekrarlanmaması için her canlının yaşam koşullarının geliştirilmesi gerekir. Çünkü sağlıklı bir yaşam herkes için temel bir haktır.\n\nHastane ve ilaç sayılarındaki artış, toplumun genel sağlığının kötüleştiğini ve olumsuz davranışların arttığını kanıtlar. Dolayısıyla  hastane açmak bir başarı değil, yardım çağrısıdır. Şu anda siz bu metni okurken, birileri hastanede acı çekiyor, kaza geçiriyor veya hayatını kaybediyor...\n\nTüm olumsuzlukların sebepleri analiz edilebilir ve çözümler topluma öğretilebilir. Herhangi bir eylemde bulunan bir işçinin doğanın adaletiyle karşı karşıya kalması, sorumlulukların eşit olarak paylaşılması gerektiğini kanıtlar.',
        }),
      },
      {
        title: t({
          en: 'Education',
          tr: 'Eğitim',
        }),
        subtitle: t({
          en: "Teaching everyone in detail about the reality of justice in nature is essential for the rights and potential of all living beings. An increase in the quality of life in line with the balance of Equality and Freedom in nature, which awaits recognition, will positively impact the entire society.\n\nEveryone can learn how to gain and shape more talents, how to align social interactions better with nature's luck scale, how to improve any business in a more healthy way and how to unlock gifts in nature's offerings.\n\nThe teachings of Logical Spirituality, which will revolutionize the social sciences, enable us to gain a deeper understanding of the interconnections between art, philosophy, psychology, sociology, and other related fields.",
          tr: 'Doğadaki adalet gerçeğini her insana ayrıntılı olarak öğretmek, tüm canlıların hakları ve potansiyelleri için gereklidir. Doğadaki fark edilmeyi bekleyen Eşitlik ve Özgürlük dengesi doğrultusunda yaşam kalitesindeki artış, tüm topluma olumlu yansır.\n\nHerkes daha fazla yetenek edinmeyi ve şekillendirmeyi, sosyal etkileşimleri doğanın şans ölçeğiyle daha iyi uyumlu hale getirmeyi, herhangi bir işi daha sağlıklı bir şekilde nasıl geliştireceğini ve doğanın bahşettiği hediyeleri nasıl ortaya çıkaracağını öğrenmelidir.\n\nSosyal bilimlerde çığır açacak olan Mantıksal Maneviyat öğretileri, sanat, felsefe, psikoloji, sosyoloji ve diğer alanların birbiriyle olan bağlantılarını daha derinlemesine anlamamızı sağlar.',
        }),
      },
      {
        title: t({
          en: 'Environment',
          tr: 'Çevre',
        }),
        subtitle: t({
          en: 'All natural phenomena (luck in nature) — such as environmental changes, weather conditions, and natural disasters — reflect the mental structures of societies and the consequences of their actions. As the silent language of nature is understood, the reasons behind outcomes become easier to grasp.\n\nUser interfaces should be designed in accordance with our teachings to prevent negative actions from occurring through their use. Even moving a single paving stone can harm the health of the person who moves it. Any negativity or illness spreads to other parts of society.',
          tr: 'Çevredeki değişimler (doğadaki şanslar), hava koşulları ve doğal afetler gibi tüm doğa olayları, toplumların zihin yapılarının ve eylemlerinin sonuçlarını yansıtır. Doğanın sessiz dili anlaşıldıkça, olayların sebeplerini anlamak kolaylaşır.\n\nİş modelleri ve kullanıcı arayüzleri, kullanım yoluyla olumsuz eylemlerin gerçekleşmesini önlemek için öğretilerimize uygun olarak tasarlanmalıdır. Tek bir kaldırım taşını hareket ettirmek bile, onu hareket ettiren kişinin sağlığına zarar verebilir. Herhangi bir olumsuzluk veya hastalık toplumun diğer kesimlerine yayılır.',
        }),
      },
      {
        title: t({
          en: 'Life',
          tr: 'Yaşam',
        }),
        subtitle: t({
          en: "Any idea, invention, or product emerges through the inspiration (means) of living beings within the environment. Therefore, every gain must be, and already is, a collective gain for society. We must reinterpret individual achievements by attaining the consciousness of a life order in which all living things are interconnected.\n\nIn nature, where everything is supposed to be free, the struggles for livelihood, stress, selfishness, inequality of opportunities, and all other negatives are obstacles to a healthy life. By realizing that we have come to life to truly live, we must benefit from the resources of the environment in a way that considers everyone's well-being. We must prevent the misuse of opportunities that nature provides to bring balance.",
          tr: 'Herhangi bir fikir, buluş veya ürün, çevredeki canlıların ilhamıyla (vesilesiyle) ortaya çıkar. Bu nedenle, her kazanım toplum için ortak bir kazanım olmalıdır ve zaten öyledir. Tüm canlıların birbirlerine bağlı olduğu bir yaşam düzeninin bilincine erişerek, bireysel başarıları tekrar yorumlamalıyız. \n\nHer şeyin bedava olması gereken doğada, geçim mücadelesi, stres, bencillik, fırsat eşitsizliği ve diğer tüm olumsuzluklar sağlıklı bir yaşamın önündeki engellerdir. Yaşamak için dünyaya geldiğimizi fark ederek, çevrenin kaynaklarını herkesin refahını gözetecek şekilde değerlendirmeliyiz. Doğanın dengeyi sağlamak için sunduğu fırsatların olumsuz biçimlerde kullanılmalarının önüne geçmeliyiz.',
        }),
      },
    ],
    message: {
      title: t({
        en: "Nature's justice is in constant motion! What are we waiting for?",
        tr: 'Doğadaki adalet sürekli hareket halinde! Neyi bekliyoruz?',
      }),
      description: t({
        en: 'Better health. More luck. Countless opportunities.',
        tr: 'Daha iyi sağlık. Daha fazla şans. Sayısız fırsat.',
      }),
    },
  },
} satisfies Dictionary;

export default pageContent;
