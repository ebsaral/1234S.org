import { t, type Dictionary } from "intlayer";

const pageContent = {
  key: "intro-section",
  priority: 2,
  content: {
    logical: {
        title: t({
            en: "Logical",
            tr: "Mantıksal"
        }),
        description: t({
            en: "Explains the cause-and-effect relationships in nature.",
            tr: "Doğadaki neden-sonuç ilişkilerini açıklar."
        })
    },
    spirituality: {
        title: t({
            en: "Spirituality",
            tr: "Maneviyat"
        }),
        description: t({
            en: "Acknowledges that universal truth encompassing all living beings is connected to a divine power.",
            tr: "Tüm canlıları kapsayan evrensel gerçeğin ilahi bir güce bağlı olduğunu kabul eder."
        })
    },
    paragraph1: t({
        en: "**Logical Spirituality** is a system of thought that details the visible and invisible connections between living beings, centering on all feelings. It defines the principles of **Interconnectedness** and **Justice** around the conditions of *physical and mental health in nature* to understand universal truth starting from the perceptible individual reality.",
        tr: "**Mantıksal Maneviyat** canlıların birbirleriyle olan görünür ve görünmez bağlarını, tüm hisleri odak noktasına alarak detaylandıran bir düşünce sistemidir. Hissedilebilen bireysel gerçekten yola çıkarak evrensel gerçeği anlayabilmek için, *doğadaki fiziksel ve zihinsel sağlık* koşullarının etrafında **Bütünlük** ve **Adalet** ilkelerini tanımlar.",
    }),
    paragraph2: t({
        en: "Beyond the divisions that have settled into human consciousness throughout our shared history, every living being shares nature as a common essence. In the laws of nature, regardless of species, age, gender, race, or class, every being is treated **equally**. In the eyes of the Creator, **every life is sacred** and possesses intrinsic **freedom**.",
        tr: "Ortak geçmişimiz boyunca insan bilincine yerleşen ayrımların ötesinde, her canlı varlık ortak bir öz olan doğayı paylaşır. Doğa kanunlarında cins, yaş, cinsiyet, ırk ve sınıf fark etmezsizin her canlı **eşit** muamele görür. Yaradan'ın nezdinde **her yaşam kutsaldır** ve içsel bir **özgürlüğe** sahiptir.",
    }),
    quote: t({
        en: "It is possible to build an educated society in which we neither fall ill nor suffer accidents — even in chaotic or hazardous environments. At the same time, we can create the conditions for greater luck and countless opportunities in everyone's life.",
        tr: "En kaotik veya tehlikeli gözüken ortamlarda bile, hiç hasta düşmediğimiz ve kaza geçirmediğimiz eğitimli bir toplum inşa edebiliriz. Aynı zamanda, herkesin hayatında daha fazla şansın ve sayısız fırsatın oluşmasını sağlayabiliriz.",
    }),
  },
} satisfies Dictionary;

export default pageContent;
