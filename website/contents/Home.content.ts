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
        en: 'Understand Our Story',
        tr: 'Hikâyemizi Anlayın',
      }),
    },
    projects: {
      title: t({
        en: 'Our Research & Development Topics',
        tr: 'Araştırma ve Geliştirme Konularımız',
      }),
      description: t({
        en: "Reality doesn't depend on what we believe. It is our responsibility to shape our beliefs to understand the reality and, ultimately, the truth. We can either choose to stay ignorant or try to understand it.",
        tr: "Gerçek, neye inandığımıza bağlı değildir. Gerçekliği ve nihayetinde doğruyu anlamak için inançlarımızı şekillendirmek bizim sorumluluğumuzdur. Ya bihaber kalmayı seçebilir ya da O'nu anlamaya çalışabiliriz.",
      }),
      criticism: t({
        en: 'Belief systems like Judaism, Christianity, and Islam have found it appropriate to impose rules on shared realities based on their imagination. Such as halal, good deeds, haram, and sin. Their leaders have played with rules and lives according to the needs in their communities.\n\nWhile the concepts of heaven and hell are not real, the rules that the leaders tried to impose had to face the realities of nature. Nature has always won. Because the balance of Equality and Freedom, which has been made difficult to see, has honed the mistakes around the sanctity of life.\n\nWhile the followers of these belief systems were distracted by dreams, prayers, and hopes, the artificial kings of that period and today has enjoyed the taste of reality. It was thought that those who faced the realities of nature with a bitter taste in their mouths would face their punishments after death. Thus, those around kings and rulers have continued their existence and cruelty.\n\nWhat a pity. While human intelligence is constantly praised, truths have always been tried to be covered up. Whenever they realized that they had made each other slaves with their own inventions, they kept repeating the same mistakes. Therefore, neither an intelligence to be praised nor a mind to be defended can be seen in humanity. Because similar political methods are still being applied.',
        tr: 'Yahudilik, Hıristiyanlık ve Müslümanlık gibi inançlar hayal dünyası üzerinden paylaşılan gerçeklere kural koymayı doğru bulmuşlar. Helal, sevap, haram ve günah gibi. Kendi topluluklarındaki ihtiyaçlarına göre yöneticiler kurallarla ve hayatlarla oynamışlar.\n\nCennet ve cehennem kavramları gerçek değilken, yöneticilerin koymaya çalıştıkları kurallar doğanın gerçekleriyle yüzleşmek zorunda kalmış. Her zaman doğa kazanmış. Çünkü görülmesi zorlaştırılmış olan Eşitlik ve Özgürlük dengesi yaşamın kutsallığı etrafındaki hataları törpülemiş.\n\nBu inançların takipçileri hayallerle, dualarla ve umutlarla oyalanırken, o dönemin ve günümüzün yapay kralları gerçeğin tadını çıkarmışlar. Tadı kursağında kalıp doğanın gerçekleriyle yüzleşenlerin cezalandırılmasının ise ölümden sonrasına kalacağı varsayılmış. Böylece kralların ve yöneticilerin etrafındakiler varlıklarını ve zalimliklerini sürdürmüşler.\n\nYazık. İnsan aklı övülüp durulurken gerçekler hep örtbas edilmeye çalışılmış. Kendi icatlarıyla birbirlerini köle yaptıklarının her farkına vardıklarında ise aynı hataları tekrarlayıp durmuşlar. Bu yüzden insanlıkta ne övülecek bir akıl ne savunulacak bir zekâ vardır. Çünkü hâlâ benzer politik yöntemler uygulanıyor.',
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
