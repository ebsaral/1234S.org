import { t, type Dictionary } from 'intlayer';

const pageContent = {
  key: 'intro-section',
  priority: 2,
  content: {
    logical: {
      title: t({
        en: 'Logical',
        tr: 'Mantıksal',
      }),
      description: t({
        en: "First time in history: Explains the cause-and-effect relationships in nature's details.",
        tr: 'Tarihte ilk kez: Doğanın detaylarındaki neden-sonuç ilişkilerini açıklar.',
      }),
    },
    spirituality: {
      title: t({
        en: 'Spirituality',
        tr: 'Maneviyat',
      }),
      description: t({
        en: 'Acknowledges that universal truth encompassing all living beings is connected to a divine power.',
        tr: 'Tüm canlıları kapsayan evrensel gerçeğin ilahi bir güce bağlı olduğunu kabul eder.',
      }),
    },
    paragraph1: t({
      en: '**Logical Spirituality**, to better understand the universal truth, is [a system of thought](){data-tooltip-id="tooltip" data-tooltip-content="The set of principles that form the foundation of a science or field of knowledge; philosophy."} that explains the visible and invisible bonds between living beings by centering on all feelings. It elaborates the perceptible individual reality around the broad observation of physical and mental health in nature through the principles of **Interconnectedness** and **Justice**.',
      tr: '**Mantıksal Maneviyat**, evrensel gerçeği daha iyi anlayabilmek için, tüm hisleri odak noktasına alarak canlıların birbirleriyle olan görünür ve görünmez bağlarını açıklayan [bir düşünce sistemidir](){data-tooltip-id="tooltip" data-tooltip-content="Bir bilimin veya bilgi alanının temelini oluşturan ilkeler bütünü; felsefe."}. **Bütünlük** ve **Adalet** ilkeleriyle, doğadaki fiziksel ve zihinsel sağlık koşullarının kapsamlı gözlemi etrafında hissedilebilen bireysel gerçeği detaylandırır.',
    }),
    paragraph2: t({
      en: 'Beyond the divisions that have settled into human consciousness throughout our shared history, every living being shares nature as a common essence. In the laws of nature, regardless of species, age, gender, race, or class, every being is treated **equally**. In the eyes of the Creator, **every life is sacred** and possesses intrinsic **freedom**.',
      tr: "Ortak geçmişimiz boyunca insan bilincine yerleşen ayrımların ötesinde, her canlı varlık ortak bir öz olan doğayı paylaşır. Doğa kanunlarında cins, yaş, cinsiyet, ırk ve sınıf fark etmeksizin her canlı **eşit** muamele görür. Tanrı'nın nezdinde **her yaşam kutsaldır** ve içsel bir **özgürlüğe** sahiptir.",
    }),
    quote: t({
      en: "It is possible to build a society in which we neither fall ill nor suffer accidents — even in chaotic or hazardous environments. At the same time, we can create the conditions for greater luck and countless opportunities in everyone's life.",
      tr: 'En kaotik veya tehlikeli gözüken ortamlarda bile, hiç hasta düşmediğimiz ve kaza geçirmediğimiz bir toplum inşa edebiliriz. Aynı zamanda, herkesin hayatında daha fazla şansın ve sayısız fırsatın oluşmasını sağlayabiliriz.',
    }),
  },
} satisfies Dictionary;

export default pageContent;
