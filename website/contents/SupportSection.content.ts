import { t, type Dictionary } from "intlayer";

const pageContent = {
  key: "support-section",
  content: {
    title: t({
      en: "How you can support us",
      tr: "Destek olabileceğiniz yollar",
    }),
    description: t({
      en: "Here you can find areas where you can offer support and ways to help.",
      tr: "Destek olabileceğiniz konuları ve yardım edebileceğiniz yöntemleri burada bulabilirsiniz.",
    }),
    methods: {
      title: t({
        en: "How can you help?",
        tr: "Nasıl yardım edebilirsiniz?"
      }),
      items: [
        {
          title: t({
            en: "We can form collaborations",
            tr: "İş birlikleri yapabiliriz",
          }),
          style: "text-purple-800 bg-purple-100"
        },
        {
          title: t({
            en: "You can suggest or promote us",
            tr: "Bizi önerebilirsiniz veya tanıtabilirsiniz",
          }),
          style: "text-purple-800 bg-purple-100"
        },
        {
          title: t({
            en: "You can invite us",
            tr: "Bizi davet edebilirsiniz",
          }),
          style: "text-purple-800 bg-purple-100"
        },
        {
          title: t({
            en: "You can give us opportunities",
            tr: "Bize imkanlar tanıyabilirsiniz",
          }),
          style: "text-purple-800 bg-purple-100"
        },
      ]
    },
    topics: {
      items: [
        {
          title: t({ 
            en: "Philosophical, Scientific and Academic Studies",
            tr: "Felsefi, Bilimsel ve Akademik Çalışmalar",
          }),
          description: t({
            en: "We would like to conduct or commission scientific and artistic research on the relationship between humanity, society, nature, and the universe in accordance with the principles of Logical Spirituality; and to share the results of these studies with the public through reports, publications, and events.",
            tr: "Mantıksal Maneviyat ilkelerine uygun olarak insanlık, toplum, doğa ve evren arasındaki ilişki üzerine bilimsel ve sanatsal araştırmalar yapmak veya yaptırmak; bu çalışmaların sonuçlarını raporlar, yayınlar ve etkinlikler aracılığıyla kamuoyuyla paylaşmak istiyoruz.",
          }),
        },
        {
          title: t({ 
            en: "Education, Awareness and Dissemination",
            tr: "Eğitim, Farkındalık ve Yaygınlaştırma",
          }),
          description: t({
            en: "We would like to organize training programs, seminars, conferences, panels, courses, workshops, and similar activities on critical thinking, ethical awareness, social responsibility, sustainable living, and the human-nature relationship.",
            tr: "Eleştirel düşünme, etik farkındalık, toplumsal sorumluluk, sürdürülebilir yaşam ve insan-doğa ilişkisi konularında eğitim programları, seminerler, konferanslar, paneller, kurslar, atölyeler ve benzeri faaliyetler düzenlemek istiyoruz.",
          }),
        },
        {
          title: t({ 
            en: "Publishing and Content Production",
            tr: "Yayıncılık ve İçerik Üretimi",
          }),
          description: t({
            en: "We would like to prepare, publish, or have published books, magazines, articles, reports, bulletins, visual and digital publications in line with the objectives; to create websites, digital platforms, and online publishing channels.",
            tr: "Amaçlar doğrultusunda kitaplar, dergiler, makaleler, raporlar, bültenler, görsel ve dijital yayınlar hazırlamak, yayımlatmak veya yayımlanmasını sağlamak; web siteleri, dijital platformlar ve çevrimiçi yayıncılık kanalları oluşturmak istiyoruz.",
          }),
        },
        {
          title: t({ 
            en: "Interdisciplinary Studies in Science, Art and Technology",
            tr: "Bilim, Sanat ve Teknolojide Disiplinlerarası Çalışmalar",
          }),
          description: t({
            en: "We would like to examine the impacts of scientific advancements, artistic productions, and technological transformations on individuals and society; to develop projects in these areas and to conduct interdisciplinary collaborations",
            tr: "Bilimsel ilerlemelerin, sanatsal üretimlerin ve teknolojik dönüşümlerin bireyler ve toplum üzerindeki etkilerini incelemek; bu alanlarda projeler geliştirmek ve disiplinlerarası iş birlikleri yürütmek istiyoruz.",
          }),
        },
        {
          title: t({ 
            en: "Community, Cultural and Social Activities",
            tr: "Toplumsal, Kültürel ve Sosyal Faaliyetler",
          }),
          description: t({
            en: "We would like to organize or participate in meetings, workshops, symposiums, exhibitions, forums, trips, sports, art and entertainment events with the aim of increasing social awareness and cultural interaction.",
            tr: "Toplumsal farkındalığı ve kültürel etkileşimi artırmayı amaçlayan toplantılar, atölyeler, sempozyumlar, sergiler, forumlar, geziler, spor, sanat ve eğlence etkinlikleri düzenlemek veya katılmak istiyoruz.",
          }),
        },
        {
          title: t({ 
            en: "Social Solidarity and Interaction",
            tr: "Sosyal Dayanışma ve Etkileşim",
          }),
          description: t({
            en: "We would like to establish social and cultural facilities and open clubs to foster interpersonal relationships among members; to organize activities such as meetings, concerts, balls, theater performances, exhibitions, sports events, trips, and recreational activities for members to enjoy during their leisure time.",
            tr: "Üyeler arasında kişilerarası ilişkileri geliştirmek amacıyla sosyal ve kültürel tesisler kurmak ve kulüpler açmak; üyelerin boş zamanlarında keyif alabilecekleri toplantılar, konserler, balolar, tiyatro gösterileri, sergiler, spor etkinlikleri, geziler ve eğlence faaliyetleri gibi etkinlikler düzenlemek istiyoruz.",
          }),
        },
        {
          title: t({ 
            en: "National and International Collaborations",
            tr: "Ulusal ve Uluslararası İş Birlikleri",
          }),
          description: t({
            en: "We would like to carry out joint projects with public institutions and organizations, universities, non-governmental organizations, foundations, federations, and similar natural or legal persons in Türkiye and abroad; to establish federations, join federations, or become a member of international organizations.",
            tr: "Türkiye'deki ve yurtdışındaki kamu kurum ve kuruluşları, üniversiteler, sivil toplum kuruluşları, vakıflar, federasyonlar ve benzeri gerçek veya tüzel kişilerle ortak projeler yürütmek; federasyonlar kurmak, federasyonlara katılmak veya uluslararası kuruluşlara üye olmak istiyoruz.",
          }),
        },
        {
          title: t({ 
            en: "Creating Platforms and Collaborative Structures",
            tr: "Platformlar ve İş Birliği Yapıları Oluşturma",
          }),
          description: t({
            en: "In areas related to the association's purpose and not prohibited by law, we would like to create platforms with other associations, foundations, trade unions, and civil society organizations to achieve common goals.",
            tr: "Derneğin amacıyla ilgili ve kanunen yasaklanmamış alanlarda, ortak hedeflere ulaşmak için diğer dernekler, vakıflar, sendikalar ve sivil toplum kuruluşları ile platformlar oluşturmak istiyoruz.",
          }),
        },
        {
          title: t({ 
            en: "Movable and Immovable Assets",
            tr: "Taşınır ve Taşınmaz Varlıklar",
          }),
          description: t({
            en: "We would like to provide a healthy working environment, procure all kinds of technical tools and equipment, fixtures and stationery for our association's activities.",
            tr: "Derneğimizin faaliyetleri için sağlıklı bir çalışma ortamı sağlamak, her türlü teknik araç ve gereç, demirbaş ve kırtasiye temin etmek istiyoruz.",
          }),
        },
      ]
    },
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
        birthday: new Date(1988, 9, 28),
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
          en: "Emin Buğra Saral, the founder of the Logical Spirituality movement and our association, guides individuals and communities toward a deeper understanding of the principles of nature. His teachings emphasize the interconnectedness of all living beings and the importance of aligning our actions with the natural order. He approaches his diverse interests with curiosity, open-mindedness, talent, humility, empathy, creativity, spontaneity and humor. While being a protean personality, he is a *funnywise* Spirit Guide with engineering, feeling and artistic skills.",
          tr: "Mantıksal Maneviyat akımının ve derneğimizin kurucusu olan Emin Buğra Saral, bireyleri ve toplulukları doğanın ilkelerine dair daha derin bir anlayışa yönlendirmektedir. Öğretileri, tüm canlıların birbirlerine bağlılığını ve eylemlerimizin doğal düzenle uyumlu olmasının önemini vurgulamaktadır. Meraklı, açık fikirli, yetenekli, mütevazı, anlayışlı, yaratıcı, spontane ve nükteli olarak yaklaştığı çeşitli ilgi alanları bulunmaktadır. Çok yönlü bir kişiliğe sahip olmakla birlikte mühendislik, sezgi ve sanatsal becerileri olan *eğlendeli* bir Maneviyat Rehberi'dir.",
        }),
        image: {
          src: "/eminbugrasaral-2023.jpg",
          size: 120
        },
        links: [
          {
            name: t({
              en: "Contact",
              tr: "İletişim",
            }),
            href: t({
              en: "https://0.1234s.org/en",
              tr: "https://0.1234s.org/tr",
            }),
          }
        ],
      }
    ],
    note: t({
      en: "If you would like to benefit from my experience and help me, you can use the contact options below. I already have a great understanding of the principles of nature and I can contribute thoroughly to all social projects.",
      tr: "Deneyimlerimden faydalanmak ve bana yardımcı olmak isterseniz, aşağıdaki iletişim seçeneklerini kullanabilirsiniz. Doğanın ilkelerine yönelik derin bir mutabakata sahibim ve tüm toplumsal projelere detaylı bir şekilde katkıda bulunabilirim.",
    })
  },
} satisfies Dictionary;

export default pageContent;
