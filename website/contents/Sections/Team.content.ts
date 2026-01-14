import { t, type Dictionary } from "intlayer";

const pageContent = {
  key: "team-section",
  content: {
    title: t({
      en: "Our Team",
      tr: "Ekibimiz",
    }),
    description: t({
      en: "Meet our dedicated association members who drive our mission forward.",
      tr: "Mantıksal Maneviyat akımını ileriye taşıyan dernek üyelerimizi tanıyın.",
    }), 
    members: [
      {
        name: "Emin Buğra Saral",
        title: t({
          en: "Chairman of the Board",
          tr: "Yönetim Kurulu Başkanı"
        }),
        profession: t({
          en: "Computer Engineer",
          tr: "Bilgisayar Mühendisi",
        }),
        birthday: {
          year: 1988,
          month: 9,
          day: 28
        },
        experience: {
          title: t({
            en: "Spirit Guide",
            tr: "Maneviyat Rehberi",
          }), 
          badge: t({
            en: "Advanced",
            tr: "İleri Seviye",
          }),
        },
        description: t({
          en: "Emin Buğra Saral, the founder of the Logical Spirituality movement and our association, guides individuals and communities toward a deeper understanding of the principles of nature. Through his well-intentioned and courageous actions, the lessons he learned emphasize the interconnectedness of all living beings and the importance of aligning our actions with the natural order. He approaches his diverse interests with curiosity, open-mindedness, talent, humility, empathy, creativity, spontaneity and humor. While being a protean personality, he is a *funnywise* Spirit Guide with engineering, feeling and artistic skills.",
          tr: "Mantıksal Maneviyat akımının ve derneğimizin kurucusu olan Emin Buğra Saral, bireyleri ve toplulukları doğanın ilkelerine dair daha derin bir anlayışa yönlendirmektedir. İyi niyetle ve cesurca aldığı eylemleri sayesinde deneyimlediği öğretileri, tüm canlıların birbirlerine bağlılığını ve eylemlerimizin doğal düzenle uyumlu olmasının önemini vurgulamaktadır. Meraklı, açık fikirli, yetenekli, mütevazı, anlayışlı, yaratıcı, spontane ve nükteli olarak yaklaştığı çeşitli ilgi alanları bulunmaktadır. Çok yönlü bir kişiliğe sahip olmakla birlikte mühendislik, sezgi ve sanatsal becerileri olan *eğlendeli* bir Maneviyat Rehberi'dir.",
        }),
        image: {
          src: "/members/eminbugrasaral.jpg",
          size: 120
        },
        links: [
          {
            name: t({
              en: "For more information",
              tr: "Daha fazla bilgi için",
            }),
            href: t({
              en: "https://0.1234s.org/en",
              tr: "https://0.1234s.org/tr",
            }),
          }
        ],
      },
      {
        name: "Yunus Emre Saral",
        title: t({
          en: "Vice Chairman of the Board",
          tr: "Yönetim Kurulu Başkan Yardımcısı"
        }),
        profession: t({
          en: "Unemployed",
          tr: "İşsiz",
        }),
        birthday: {
          year: 1990,
          month: 10,
          day: 31
        },
        image: {
          src: "/members/yunusemresaral.jpg",
          size: 120
        },
      },
      {
        name: "Hatice Saral",
        title: t({
          en: "Secretary of the Board",
          tr: "Yönetim Kurulu Sekreteri"
        }),
        profession: t({
          en: "Retired\n(Serial Entrepreneur)",
          tr: "Emekli\n(Seri Girişimci)",
        }),
        birthday: {
          year: 1966,
          month: 2,
          day: 1
        },
        image: {
          src: "/members/haticesaral.jpg",
          size: 120
        },
      },
      {
        name: "Ömer Lütfü Saral",
        title: t({
          en: "Treasurer of the Board",
          tr: "Yönetim Kurulu Saymanı"
        }),
        profession: t({
          en: "Retired\n(Worker, Serial Entrepreneur, Journalist)",
          tr: "Emekli\n(İşçi, Seri Girişimci, Gazeteci)",
        }),
        birthday: {
          year: 1960,
          month: 12,
          day: 28
        },
        image: {
          src: "/members/omerlutfusaral.jpg",
          size: 120
        },
      },
      {
        name: t({
          en: "Your name?",
          tr: "İsminiz?"
        }),
        image: {
          src: "/members/placeholder.jpg",
          size: 120
        },
        join: true
      },
    ],
    join: t({
      en: "Join Us!",
      tr: "Bize Katıl!"
    }),
    total: {
      count: 7,
      label: t({
        en: "Total member count",
        tr: "Toplam üye sayısı"
      })
    },
    note: t({
      en: "If you would like to benefit from my experience and help me, you can use the contact options below. I already have a great understanding of the principles of nature and I can contribute thoroughly to all social projects.",
      tr: "Deneyimlerimden faydalanmak ve bana yardımcı olmak isterseniz, aşağıdaki iletişim seçeneklerini kullanabilirsiniz. Doğanın ilkelerine yönelik derin bir mutabakata sahibim ve tüm toplumsal projelere detaylı bir şekilde katkıda bulunabilirim.",
    })
  },
} satisfies Dictionary;

export default pageContent;
