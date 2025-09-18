import { t, type Dictionary } from "intlayer";

const pageContent = {
  key: "examples-section",
  content: {
    title: t({
      en: "Examples for Logical Spirituality",
      tr: "Mantıksal Maneviyata Dair Örnekler"
    }),
    description: t({
      en: "To understand nature's language, you may lean on human symbols —letters, words, numbers, and songs— as keys. Listen carefully, and you'll find that nature is constantly doing in subtle detailed harmony, revealing the world's invisible rhythms.\n\n*When you hear a family recount a fatal car accident on the news, you may, in fact, be hearing a quiet confession of an unseen crime.*",
      tr: "Doğanın dilini anlamak için insanlar tarafından kullanılan sembollere —harfler, kelimeler, sayılar ve şarkılar— başvurabilirsiniz. Dikkatlice dinleyin, doğanın sürekli ince bir uyum içinde hareket ettiğini ve dünyanın görünmeyen ritimlerini ortaya çıkardığını göreceksiniz.\n\nHaberlerde bir ailenin ölümcül bir trafik kazasını anlattığını duyduğunuzda, aslında görünmeyen bir suçun sessiz itirafını da duymuş olabilirsiniz."
    }),
    items: [
      {
        title: t({
          en: "Environment",
          tr: "Çevre"
        }),
        subtitle: t({
          en: "Inflicting suffering on animals in fertile lands may, over time, turn abundance into drought.\n\nIn cases where injustice reaches extreme levels, severe consequences such as earthquakes become inevitable.",
          tr: "Verimli topraklarda hayvanlara acı çektirmek, zamanla bolluğu kuraklığa dönüştürebilir.\n\nAdaletsizliğin uç noktalara ulaştığı hususlarda, deprem gibi ağır sonuçlar kaçınılmaz olur."
        }),
      },
      {
        title: t({
          en: "Health",
          tr: "Sağlık"
        }),
        subtitle: t({
          en: "A contagious illness, like influenza, can spread far beyond the first infected individual; It is usually the negative consequence of ignoring from a distance and selfishness.\n\nIf you break your leg, it may symbolize having restricted another being's freedom, preventing them from moving forward.",
          tr: "Grip gibi bulaşıcı bir hastalık, ilk enfekte kişiden çok daha uzaklara yayılabilir; Genellikle uzak kalınarak görmezden gelmenin ve bencilliğinin olumsuz sonucudur.\n\nBacağınızı kırmanız başka bir varlığın özgürlüğünü kısıtladığınızın ve onun ilerlemesini engellediğinizin sembolü olabilir."
        }),
      },
      {
        title: t({
          en: "Talents",
          tr: "Yetenekler"
        }),
        subtitle: t({
          en: "A person's talent flourishes when it is nurtured by parents, teachers, mentors, and the community. Some talents arise naturally, shaped by the needs of the person's environment and the purpose they are meant to serve.\n\nA beautiful voice may arise as a gift, reflecting the opportunities you or your ancestors gave to the beings around you. Remember that you owe all your talents to the positive and/or negative relationships you have with your environment.",
          tr: "Bir kişinin yeteneği, ebeveynleri, öğretmenleri, rehberleri ve toplum tarafından desteklendiğinde gelişir. Bazı yetenekler doğal olarak ortaya çıkar, kişinin çevresinin ihtiyaçları ve hizmet etmesi gereken amaç tarafından şekillendirilir.\n\nGüzel bir ses, sizin veya atalarınızın etrafınızdaki varlıklara verdiği fırsatların bir yansıması olarak bir hediye olabilir. Unutmayın ki, tüm yeteneklerinizi çevrenizle olan pozitif ve/veya negatif ilişkilere borçlusunuz."
        }),
      },
      {
        title: t({
          en: "Luck (Opportunities)",
          tr: "Şans (Fırsatlar)"
        }),
        subtitle: t({
          en: "All living beings naturally have a right to access a clear path to infinite luck (opportunities). The choices and actions of every living being shape the ease and opportunities available to future generations.\n\nEven with a high level of risk, the likelihood of you having an accident can still be very low.\n\nIf your environment keeps blocking your opportunities continuously, nature's justice may clear your path in time.",
          tr: "Tüm canlıların doğal olarak sınırsız şansa (fırsatlara) erişme hakkı vardır. Her canlının seçimleri ve eylemleri, gelecekteki nesillere sunulan kolaylık ve fırsatları şekillendirir.\n\nYüksek bir risk seviyesine rağmen, kaza geçirmeniz olasılığı çok düşük olabilir.\n\nEğer çevreniz sürekli olarak fırsatlarınızı engelliyorsa, doğanın adaleti zamanla yolunuzu açar."
        }),
      }
    ]
  },
} satisfies Dictionary;

export default pageContent;