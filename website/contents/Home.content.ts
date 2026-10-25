import { t, type Dictionary } from 'intlayer';
import { HomePageContent } from './types';

const pageContent = {
  key: 'home-page',
  content: {
    logo: {
      title: t({
        en: '1234S.org Logo',
        tr: '1234S.org Logo',
      }),
      src: '/logos/logo.svg',
    },
    title: t({
      en: "The World's Most Valuable Knowledge!",
      tr: 'Dünyanın En Değerli Bilgileri!',
    }),
    description: t({
      en: 'We continue our work to improve the mental and physical health of individuals, society, and the natural environment.',
      tr: 'Bireylerin, toplumun ve doğal çevrenin zihinsel ve fiziksel sağlığını iyileştirmek için çalışmalarımıza devam ediyoruz.',
    }),
    video: {
      src: t({
        en: 'https://youtu.be/xSRXGfIS2Cc',
        tr: 'https://youtu.be/2J4HR1k9j3Q',
      }),
      thumbnail: t({
        en: '/images/intro-video-thumbnail-en.png',
        tr: '/images/intro-video-thumbnail-tr.png',
      }),
      button: {
        label: t({
          en: 'Watch the Video',
          tr: 'Videoyu İzle',
        }),
      },
    },
    jamButton: {
      enable: t({
        en: 'One more time!',
        tr: 'O zaman dans!',
      }),
      disable: t({
        en: 'Take it easy, champ.',
        tr: 'Sakin ol şampiyon.',
      }),
      image: t({
        en: '/images/dance.png',
        tr: '/images/dans.png',
      }),
    },
    storyButton: {
      label: t({
        en: 'Read Our Story',
        tr: 'Hikâyemizi Okuyun',
      }),
    },
    projects: {
      title: t({
        en: '## Our Research and Development Topics',
        tr: '## Araştırma ve Geliştirme Konularımız',
      }),
      description: t({
        en: "Reality doesn't depend on what we believe. It is our responsibility to shape our beliefs to understand the reality and, ultimately, the truth. We can either choose to stay ignorant or try to understand it.",
        tr: "Gerçek, neye inandığımıza bağlı değildir. Gerçekliği ve nihayetinde doğruyu anlamak için inançlarımızı şekillendirmek bizim sorumluluğumuzdur. Ya bihaber kalmayı seçebilir ya da O'nu anlamaya çalışabiliriz.",
      }),
      items: [
        {
          title: t({
            en: '### Patterns of Wholeness',
            tr: '### Bütünlük İçindeki Düzen',
          }),
          subtitle: t({
            en: 'How various disciplines are interconnected within small and large life cycles that repeat in similar patterns across all communities. How to understand and translate nature\'s universal language better through symbols developed by the [human intelligence](){data-tooltip-id="tooltip" data-tooltip-content="Intelligence is defined as the life experience of a living being. It is one of the abilities bestowed by nature, yet it is not a tool for superiority. It cannot be measured through tests or without fully understanding the individual."} for every living being\'s daily life.',
            tr: 'Çeşitli disiplinlerin, tüm topluluklarda benzer örüntülerle tekrarlanan küçük ve büyük yaşam döngüleri içinde, nasıl birbirlerine bağlı oldukları. Her canlının günlük yaşamı için, [insan zekâsı](){data-tooltip-id="tooltip" data-tooltip-content="Bir canlının yaşam tecrübesine zekâ denir. Doğada bahşedilen yeteneklerden biridir fakat bir üstünlük aracı değildir. Herhangi bir insanı tamamen anlamadan veya test yoluyla ölçülemez."}nın geliştirdiği sembollerle doğanın evrensel dilinin nasıl daha iyi anlaşılacağı ve tercüme edileceği.',
          }),
        },
        {
          title: t({
            en: '### Handling Global Issues',
            tr: '### Küresel Sorunların Çözümü',
          }),
          subtitle: t({
            en: "How to fix to all global issues permanently with honest, inclusive, innovative, simple, visionary, comprehensive, and sustainable solutions, without postpoing society's peace anymore. Reinterpretation of historical events and current developments in our lives, from global changes to personal life experiences.",
            tr: 'Toplumun huzurunu daha fazla ertelemeksizin, dürüst, yenilikçi, basit, vizyoner, kapsayıcı, kapsamlı ve sürdürülebilir çözümlerle bütün küresel sorunların kalıcı bir biçimde nasıl çözüleceği. Küresel değişimlerden kişisel yaşam deneyimlerine kadar tarihi olayların ve yaşantımızdaki güncel gelişmelerin yeniden yorumlanması.',
          }),
        },

        {
          title: t({
            en: "### Nature's Health",
            tr: '### Doğanın Sağlığı',
          }),
          subtitle: t({
            en: "Why living beings get sick and how to protect against diseases naturally without resorting to medication. The cause-and-effect relationships of natural disasters and accidents in our behavior and how to prevent them. How to bring to society the natural gifts that nature already offers us but that we don't easily see.",
            tr: 'Canlıların neden hastalandıkları ve ilaçlara başvurmadan hastalıklardan korunmanın doğal yollarla nasıl sağlanabileceği. Doğal afetlerin ve kazaların davranış biçimlerimizde görülebilen sebep-sonuç ilişkileri ve nasıl önlenebilecekleri. Doğanın bize halihazırda sunduğu fakat kolayca göremediğimiz doğal armağanların topluma nasıl kazandıralacağı.',
          }),
        },
        {
          title: t({
            en: '### Opportunities and Talents',
            tr: '### Fırsatlar ve Yetenekler',
          }),
          subtitle: t({
            en: "How opportunity (chance) arises, takes shape, renews, and disappears within the order of nature; how social interactions can be brought into greater harmony with nature's scale of chance and balance. How  behaviors in nature indirectly and directly influence the development of abilities.",
            tr: 'Fırsatların (şansın), doğanın düzeni içerisinde nasıl oluştuğu, şekillendiği, yenilendiği ve yok olduğu; doğanın şans ve denge ölçeğiyle sosyal etkileşimlerin nasıl daha uyumlu hale getirilebileceği. Doğadaki davranışların yeteneklerin gelişimini dolaylı olarak veya doğrudan nasıl etkilediği.',
          }),
        },
      ],
    },
  },
} satisfies Dictionary<HomePageContent>;

export default pageContent;
