import { t, type Dictionary } from "intlayer";

const pageContent = {
  key: "home-page",
  content: {
    title: t({
      en: "1234 Science & Art Association",
      tr: "1234 Sanat ve İlim Derneği",
    }),
    intro: t({
      en: "Founded with the aim of becoming one of the world's leading philosophical movements in line with the principles of Interconnectedness, Justice and Health in Nature, along with the teachings of Logical Spirituality, it seeks to develop, disseminate, and sustain efforts to improve the mental and physical health of individuals, society, and the natural environment.",
      tr: "Doğada Bütünlük, Adalet ve Sağlık ilkeleri doğrultusunda dünyanın sayılı felsefi akımlarından biri olmayı hedefleyen Mantıksal Maneviyat öğretileriyle birlikte; bireyin, toplumun ve doğal çevrenin zihinsel ve fiziksel sağlığını iyileştirmeye yönelik çalışmaları geliştirmek, yaygınlaştırmak ve süreklilik kazandırmak amacıyla kurulmuştur.",
    }),
    projects: {
      title: t({
        en: "General Scope of Our Focus Topics",
        tr: "İlgilendiğimiz Konuların Genel Kapsamları", 
      }),
      items: [
      {
        title: t({
          en: "Social and Environment Health",
          tr: "Toplum ve Çevre Sağlığı",
        }),
        subtitle: t({
          en: "Why living beings get sick and how to protect against diseases naturally without resorting to medication. The cause-and-effect relationships of natural disasters in our behavior and how to prevent them.",
          tr: "Canlıların neden hastalandıkları ve ilaçlara başvurmadan hastalıklardan korunmanın doğal yollarla nasıl sağlanabileceği. Doğal afetlerin davranış biçimlerimizde görülebilen sebep-sonuç ilişkileri ve nasıl önlenebilecekleri.",
        }),
      },
      {
        title: t({
          en: "Understanding and Improving Talents",
          tr: "Yetenekleri Anlamak ve Geliştirmek",
        }),
        subtitle: t({
          en: "How abilities (talents) emerge and develop, and how behaviors in nature directly influence the development of abilities.",
          tr: "Yeteneklerin nasıl ortaya çıktığı ve geliştiği, doğadaki davranışların yeteneklerin gelişimini nasıl doğrudan etkilediği.",
        }),
      },
      {
        title: t({
          en: "Chance and Balance in Nature",
          tr: "Doğada Şans ve Denge",
        }),
        subtitle: t({
          en: "How chance (opportunity) arises, takes shape, renews, and disappears within the order of nature; how social interactions can be brought into greater harmony with nature's scale of chance and balance.",
          tr: "Şansın (fırsatların), doğanın düzeni içerisinde nasıl oluştuğu, şekillendiği, yenilendiği ve yok olduğu; doğanın şans ve denge ölçeğiyle sosyal etkileşimlerin nasıl daha uyumlu getirilebileceği.",
        }),
      },
      {
        title: t({
          en: "Healthy Business Practices",
          tr: "Sağlıklı İş Uygulamaları",
        }),
        subtitle: t({
          en: "How to improve business practices using the possibilities offered by current technology for individual and societal mental (spiritual) health.",
          tr: "Bireysel ve toplumsal ruh sağlığı için güncel teknolojinin imkanlarıyla iş uygulamalarının nasıl geliştirilmeleri gerektiği.",
        }),
      },
      {
        title: t({
          en: "Translating Art in Nature",
          tr: "Doğadaki Sanatı Tercüme Etmek",
        }),
        subtitle: t({
          en: "A better understanding and translation of nature's universal language through symbols developed by the human mind.",
          tr: "İnsan zihniyle gelişen semboller aracılığıyla doğanın evrensel dilinin daha iyi anlaşılması ve tercüme edilmesi.",
        }),
      },
      {
        title: t({
          en: "Patterns of Interconnectedness",
          tr: "Bütünlük İçindeki Düzen",
        }),
        subtitle: t({
          en: "How various disciplines are interconnected within small and large life cycles that repeat in similar patterns across all communities.",
          tr: "Çeşitli disiplinlerin, tüm topluluklarda benzer örüntülerle tekrarlanan küçük ve büyük yaşam döngüleri içinde nasıl birbirlerine bağlı oldukları.",
        }),
      },
      {
        title: t({
          en: "Tackling Global Challenges",
          tr: "Küresel Sorunlarla Mücadele",
        }),
        subtitle: t({
          en: "To respond to global challenges with innovative, visionary, inclusive, and comprehensive solutions.",
          tr: "Küresel sorunlara yenilikçi, vizyoner, kapsayıcı ve kapsamlı çözümlerle yanıt vermek.",
        }),
      },
      {
        title: t({
          en: "Historical and Current Experiences",
          tr: "Tarihi ve Güncel Deneyimler",
        }),
        subtitle: t({
          en: "Reinterpretation of historical events and current developments in our lives, from global changes to personal life experiences, from an integrative perspective.",
          tr: "Küresel değişimlerden kişisel yaşam deneyimlerine kadar tarihi olayların ve yaşantımızdaki güncel gelişmelerin bütünleştirici bir bakış açısıyla yeniden yorumlanması.",
        }),
      },
      {
        title: t({
          en: "Unlocking Nature's Mysteries",
          tr: "Doğanın Gizemlerini Sunmak",
        }),
        subtitle: t({
          en: "To bring to society the natural gifts that nature already offers us but that we don't see.",
          tr: "Doğanın bize halihazırda sunduğu fakat göremediğimiz doğal armağanları topluma kazandırmak.",
        }),
      },
    ],
    },

    leader: {
      name: "Emin Buğra Saral",
      title: t({
        en: "Spirit Guide",
        tr: "Maneviyat Rehberi",
      }),
      image: {
        src: "/eminbugrasaral-2023.jpg",
        size: 120
      },
      href: t({
        en: "https://0.1234s.org/en",
        tr: "https://0.1234s.org/tr",
      }),
    }
  },
} satisfies Dictionary;

export default pageContent;
