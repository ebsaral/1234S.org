import { t, type Dictionary } from "intlayer";

const pageContent = {
  key: "project-section",
  content: {
    title: t({
      en: "Project: A Philosophical Movement",
      tr: "Proje: Bir Felsefi Akım",
    }),
    quote: t({
      en: "Better health. More luck. Countless opportunities.",
      tr: "Daha iyi sağlık. Daha fazla şans. Sayısız fırsat.",
    }),
    description: t({
      en: "Through **Logical Spirituality**, we have learned how the principles of **Equality and Freedom** exist in nature. By expanding on this fundamental knowledge, we can improve the health conditions of the environments we share.\n\nIt is possible to live in an educated society where we neither get sick nor have accidents. It is also possible to bring luck together with opportunities to everyone's lives.",
      tr: "*Mantıklı Maneviyat* aracılığıyla, **Eşitlik ve Özgürlük** ilkelerinin doğada nasıl var olduğunu öğrendik. Bu temel bilgiyi genişleterek, paylaştığımız çevrelerin sağlık koşullarını iyileştirebiliriz. **Hiç hasta olmadığımız ve kaza geçirmediğimiz eğitimli bir toplumda yaşayabiliriz. Aynı zamanda doğadaki şansı fırsatlarıyla birlikte herkesin hayatına sunabiliriz.**",
    }),
    items: [
      {
        title: t({
          en: "Health",
          tr: "Sağlık",
        }),
        subtitle: t({
          en: "We can treat all diseases without medication. To be able to live in a healthy society, living conditions must be developed for everyone so that negative actions are not repeated after treatments. Because a healthy life is a fundamental right for every person.\n\nThe increase in the number of hospitals and medicines in countries proves that the general health of society is deteriorating and negative actions are increasing. Therefore, opening a hospital is not a success, but a cry for help. While you are reading this text right now, someone is suffering in a hospital, having an accident somewhere, or losing their lives... Each consequence can be analyzed to understand its underlying causes, and society can be educated about these reasons. The fact that a worker who performs any action faces nature's justice proves that responsibilities must be shared equally.",
          tr: "İlaç kullanmadan bütün hastalıkları tedavi edebiliriz. Sağlıklı bir toplumda yaşayabilmek ve tedavilerden sonra olumsuz davranışların tekrarlanmaması için her canlının yaşam koşullarının geliştirilmesi gerekir. Çünkü sağlıklı bir yaşam herkes için temel bir haktır.\n\nHastane ve ilaç sayılarındaki artış, toplumun genel sağlığının kötüleştiğini ve olumsuz davranışların arttığını kanıtlar. Dolayısıyla  hastane açmak bir başarı değil, yardım çağrısıdır. Şu anda siz bu metni okurken, birileri hastanede acı çekiyor, kaza geçiriyor veya hayatını kaybediyorlar... Tüm olumsuzlukların sebepleri analiz edilebilir ve çözümler topluma öğretilebilir. Herhangi bir eylemde bulunan bir işçinin doğanın adaletiyle karşı karşıya kalması, sorumlulukların eşit olarak paylaşılması gerektiğini kanıtlar.",
        }),
      },
      {
        title: t({
          en: "Education",
          tr: "Eğitim",
        }),
        subtitle: t({
          en: "Teaching the truth of justice in nature in detail to every person is necessary for the rights and potentials of all living beings. The increase in quality of life in line with the principles of Equality and Freedom positively reflects on the entire society.\n\nEveryone can learn how to gain and shape more talents, how to align social interactions better with nature's luck scale, how to improve any business in a more healthy way and how to unlock more gifts that are visibly hidden in nature's offerings. The teachings of Logical Spirituality, which will revolutionize the social sciences, enable us to gain a deeper understanding of the interconnections between philosophy, psychology, sociology, and other related fields.",
          tr: "Doğadaki adalet gerçeğini her insana ayrıntılı olarak öğretmek, tüm canlıların hakları ve potansiyelleri için gereklidir. Eşitlik ve Özgürlük ilkeleri doğrultusunda yaşam kalitesindeki artış, tüm topluma olumlu yansır.\n\nHerkes daha fazla yetenek edinmeyi ve şekillendirmeyi, sosyal etkileşimleri doğanın şans ölçeğiyle daha iyi uyumlu hale getirmeyi, herhangi bir işi daha sağlıklı bir şekilde nasıl geliştireceğini ve doğanın bahşettiklerinde görülmeyi bekleyen daha fazla kazancı nasıl ortaya çıkaracağını öğrenebilir. Sosyal bilimlerde çığır açacak olan Mantıksal Maneviyat öğretileri, felsefe, psikoloji, sosyoloji ve diğer alanların birbiriyle olan bağlantılarını daha derinlemesine anlamamızı sağlar.",
        }),
      },
      {
        title: t({
          en: "Environment",
          tr: "Çevre",
        }),
        subtitle: t({
          en: "All natural phenomena — such as environmental changes, weather conditions, and natural disasters — reflect the mental structures of societies and the consequences of their actions. As the silent language of nature is understood, the reasons behind outcomes become easier to grasp.\n\nEngineering, architecture, urban planning, transportation, energy production, and all other fields must develop in accordance with the truth of justice in nature.\n\nUser interfaces should be designed in accordance with the teachings of Logical Spirituality to prevent negative actions from occurring through their use. Even moving a single paving stone can harm the health of the person who moves it. Any negativity or illness spreads to other parts of society.",
          tr: "Çevredeki değişimler, hava koşulları ve doğal afetler gibi tüm doğa olayları, toplumların zihin yapılarının ve eylemlerinin sonuçlarını yansıtır. Doğanın sessiz dili anlaşıldıkça, olayların sebeplerini anlamak kolaylaşır.\n\nMühendislik, mimarlık, şehir planlaması, ulaşım, enerji üretimi ve diğer tüm alanlar, doğadaki adalet gerçeğine uygun olarak gelişmelidir.\n\nİş modelleri ve kullanıcı arayüzleri, kullanım yoluyla olumsuz eylemlerin gerçekleşmesini önlemek için Mantıklı Maneviyat öğretilerine uygun olarak tasarlanmalıdır. Tek bir kaldırım taşını hareket ettirmek bile, onu hareket ettiren kişinin sağlığına zarar verebilir. Herhangi bir olumsuzluk veya hastalık toplumun diğer kesimlerine yayılır.",
        }),
      },
      {
        title: t({
          en: "Life",
          tr: "Yaşam",
        }),
        subtitle: t({
          en: "Any idea, invention, or product emerges through the inspiration (means) of living beings within the environment. Therefore, every gain must be, and already is, a collective gain for society. We must reinterpret individual achievements by attaining the consciousness of a life order in which all living things are interconnected.\n\nIn nature, where everything is free, the struggles for livelihood, stress, selfishness, inequality of opportunities, and all other negatives are obstacles to a healthy life. By realizing that we have come to life to truly live, we must benefit from the resources of the environment in a way that considers everyone's well-being. The misuse of the opportunities that nature provides to maintain balance should be prevented.",
          tr: "Herhangi bir fikir, buluş veya ürün, çevredeki canlıların ilhamıyla (aracılığıyla) ortaya çıkar. Bu nedenle, her kazanım toplum için ortak bir kazanım olmalıdır ve zaten öyledir. Tüm canlıların birbirlerine bağlı olduğu bir yaşam düzeninin bilincine erişerek, bireysel başarıları tekrar yorumlamalıyız. \n\nHer şeyin bedava olduğu doğada, geçim mücadelesi, stres, bencillik, fırsat eşitsizliği ve diğer tüm olumsuzluklar sağlıklı bir yaşamın önündeki engellerdir. Yaşamak için dünyaya geldiğimizi fark ederek, çevrenin kaynaklarını herkesin refahını gözetecek şekilde değerlendirmeliyiz. Doğanın dengeyi sağlamak için sunduğu fırsatların olumsuz biçimlerde değerlendirilmelerinin önüne geçilmelidir.",
        }),
      }
    ],
        message: {
      title: t({
        en: "Nature's justice is in constant motion!",
        tr: "Doğadaki adalet sürekli hareket halinde!",
      }),
      quote:  t({
        en: "We can raise awareness in people so that they can see the logic in nature and together we can heal the mistakes that repeat in our life cycles.",
        tr: "İnsanların doğadaki mantığı görebilmeleri için farkındalık kazandırabiliriz ve birlikte yaşam döngülerimizde tekrarlanan hataları iyileştirebiliriz.",
      })
    },
    status: {
      title: t({
          en: "Project's Status",
          tr: "Projenin Durumu",
        }),
      items: [
        t({
          en: "I am looking for a team or organization with whom I can continue my work on the principles of nature with details.",
          tr: "Doğanın ilkeleri üzerinde çalışmalarımı detaylandırarak devam ettirebileceğim bir ekip veya organizasyon arıyorum.",
        }),
        t({
          en: "I would like to apply this philosophical movement's details into real-world applications. Example ideas: Building an Education and Healing platform, consultancy for any business and/or non-profit project, contributing to environmental projects, etc.",
          tr: "Bu felsefi akımın ayrıntılarını gerçek dünya uygulamalarına aktarmak istiyorum. Örnek fikirler: Bir Eğitim ve Sağlık platformu kurmak, herhangi bir işletme ve/veya kâr amacı gütmeyen proje için danışmanlık yapmak, çevre projelerine katkıda bulunmak vb.",
        })
      ],
    },
    contact: {
      title: t({
        en: "Project Leader",
        tr: "Proje Lideri",
      }),
      leader: {
        text: "Emin Buğra Saral",
        image: {
          src: "/eminbugrasaral-2025.jpg",
          description: t({
            en: "Let's paint a tired Emin, given a spoon instead of a microphone.",
            tr: "Eline mikrofon yerine kaşık verilmiş yorgun bir Emin resmedelim.",
          }), 
          size: 120
        },
        href: t({
          en: "https://0.1234s.org/en",
          tr: "https://0.1234s.org/tr",
        }),
        description: t({
          en: "The Spirit Guide and Computer Engineer",
          tr: "Maneviyat Rehberi ve Bilgisayar Mühendisi",
        })
      },
      resume: {
        text: t({
          en: "Résumé",
          tr: "Öz Geçmiş",
        }),
        href: t({
          en: "https://0.1234s.org/files/cv/english.pdf",
          tr: "https://0.1234s.org/files/cv/turkish.pdf",
        }),
      },
      note: t({
        en: "If you would like to help me in any way or benefit from my experience, you can use the contact options below.",
        tr: "Bana herhangi bir şekilde yardımcı olmak veya deneyimlerimden faydalanmak isterseniz, aşağıdaki iletişim seçeneklerini kullanabilirsiniz.",
      })
    },
    sponsorship: {
      href: t({
        en: "files/sponsorship.pdf",
        tr: "files/sponsorluk.pdf",
      }),
      title: t({
        en: "View the details for sponsorship",
        tr: "Sponsorluk için detaylara göz atın",
      })
    }
  },
} satisfies Dictionary;

export default pageContent;
