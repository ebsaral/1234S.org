import { t, type Dictionary } from 'intlayer';
import { HomePageContent } from './types';

const pageContent = {
  key: 'home-page',
  content: {
    title: t({
      en: '1234 Science & Art Association',
      tr: '1234 Sanat ve İlim Derneği',
    }),
    intro: t({
      en: "Founded with the aim of establishing **Logical Spirituality** as one of the world's leading philosophical movements, embracing the principles of **Interconnectedness, Justice, and Health in Nature** revealed through its teachings. We continue our work to develop, disseminate, and sustain efforts that improve the mental and physical well-being of individuals, society, and the natural environment.",
      tr: "Dünyanın sayılı felsefi akımlarından biri olmasını amaçladığımız **Mantıksal Maneviyat**'ın öğretileriyle birlikte açığa çıkan **Doğada Bütünlük, Adalet ve Sağlık** ilkelerini benimseyerek kuruldu. Bireyin, toplumun ve doğal çevrenin zihinsel ve fiziksel sağlığını iyileştirecek çalışmalarımızı geliştirmeye, yaygınlaştırmaya ve süreklilik kazandırmaya devam ediyoruz.",
    }),
    readMore: {
      text: t({
        en: 'View Logical Spirituality',
        tr: "Mantıksal Maneviyat'ı İncele",
      }),
      href: '/philosophy',
    },
    projects: {
      title: t({
        en: 'Our Research and Development Topics',
        tr: 'Araştırma ve Geliştirme Konularımız',
      }),
      description: t({
        en: 'Kindly visit our *support* page to help us in detailing these topics and communicating them openly to the public, so that our association can improve the overall quality of life for all communities.',
        tr: 'Tüm toplulukların genel yaşam kalitelerini iyileştirmek istiyoruz. Derneğimizin bu konuları detaylandırmasına ve kamuoyuna açıkça aktarmasına yardımcı olmak için lütfen *destek* sayfamızı ziyaret edin!',
      }),
      items: [
        {
          title: t({
            en: 'Social and Environment Health',
            tr: 'Toplum ve Çevre Sağlığı',
          }),
          subtitle: t({
            en: 'Why living beings get sick and how to protect against diseases naturally without resorting to medication. The cause-and-effect relationships of natural disasters in our behavior and how to prevent them.',
            tr: 'Canlıların neden hastalandıkları ve ilaçlara başvurmadan hastalıklardan korunmanın doğal yollarla nasıl sağlanabileceği. Doğal afetlerin davranış biçimlerimizde görülebilen sebep-sonuç ilişkileri ve nasıl önlenebilecekleri.',
          }),
        },
        {
          title: t({
            en: 'Chance and Balance in Nature',
            tr: 'Doğada Şans ve Denge',
          }),
          subtitle: t({
            en: "How chance (opportunity) arises, takes shape, renews, and disappears within the order of nature; how social interactions can be brought into greater harmony with nature's scale of chance and balance.",
            tr: 'Şansın (fırsatların), doğanın düzeni içerisinde nasıl oluştuğu, şekillendiği, yenilendiği ve yok olduğu; doğanın şans ve denge ölçeğiyle sosyal etkileşimlerin nasıl daha uyumlu getirilebileceği.',
          }),
        },
        {
          title: t({
            en: 'Understanding and Improving Talents',
            tr: 'Yetenekleri Anlamak ve Geliştirmek',
          }),
          subtitle: t({
            en: "How abilities (talents) emerge and develop in nature's justice scale. How  behaviors in nature indirectly and directly influence the development of abilities.",
            tr: 'Yeteneklerin doğanın denge terazisinde nasıl ortaya çıktığı ve geliştiği. Doğadaki davranışların yeteneklerin gelişimini dolaylı olarak veya doğrudan nasıl etkilediği.',
          }),
        },
        {
          title: t({
            en: 'Translating Art in Nature',
            tr: 'Doğadaki Sanatın Tercümesi',
          }),
          subtitle: t({
            en: "To understand and translate nature's universal language better through symbols developed by the human mind for every individual's daily life.",
            tr: 'Her bireyin günlük yaşamı için insan zihni tarafından geliştirilen semboller aracılığıyla doğanın evrensel dilini daha iyi anlamak ve tercüme etmek.',
          }),
        },
        {
          title: t({
            en: 'Patterns of Interconnectedness',
            tr: 'Bütünlük İçindeki Düzen',
          }),
          subtitle: t({
            en: 'How various disciplines are interconnected within small and large life cycles that repeat in similar patterns across all communities.',
            tr: 'Çeşitli disiplinlerin, tüm topluluklarda benzer örüntülerle tekrarlanan küçük ve büyük yaşam döngüleri içinde nasıl birbirlerine bağlı oldukları.',
          }),
        },
        {
          title: t({
            en: 'Historical and Current Experiences',
            tr: 'Tarihi ve Güncel Deneyimler',
          }),
          subtitle: t({
            en: 'Reinterpretation of historical events and current developments in our lives, from global changes to personal life experiences, from an integrative perspective.',
            tr: 'Küresel değişimlerden kişisel yaşam deneyimlerine kadar tarihi olayların ve yaşantımızdaki güncel gelişmelerin bütünleştirici bir bakış açısıyla yeniden yorumlanması.',
          }),
        },
        {
          title: t({
            en: 'Healthy Business Practices',
            tr: 'Sağlıklı İş Uygulamaları',
          }),
          subtitle: t({
            en: 'How to heal and improve business practices using the possibilities offered by current technology for societal and environmental health.',
            tr: 'Toplum ve çevre sağlığı için güncel teknolojinin imkanlarıyla iş uygulamalarının nasıl iyileştirilmeleri ve geliştirilmeleri gerektiği.',
          }),
        },
        {
          title: t({
            en: 'Tackling Global Challenges',
            tr: 'Küresel Sorunlarla Mücadele',
          }),
          subtitle: t({
            en: "To respond to global challenges with innovative, visionary, inclusive, and comprehensive solutions, without postpoing society's peace anymore.",
            tr: 'Toplumun huzurunu daha fazla ertelemeksizin yenilikçi, vizyoner, kapsayıcı ve kapsamlı çözümlerle küresel sorunlara yanıt vermek.',
          }),
        },
        {
          title: t({
            en: "Unlocking Nature's Mysteries",
            tr: 'Doğanın Gizemlerini Sunmak',
          }),
          subtitle: t({
            en: "To bring to society the natural gifts that nature already offers us but that we don't easily see.",
            tr: 'Doğanın bize halihazırda sunduğu fakat kolayca göremediğimiz doğal armağanları topluma kazandırmak.',
          }),
        },
      ],
    },
  },
} satisfies Dictionary<HomePageContent>;

export default pageContent;
