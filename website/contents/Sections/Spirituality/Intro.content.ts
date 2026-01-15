import { t, type Dictionary } from "intlayer";

const pageContent = {
  key: "intro-section",
  priority: 2,
  content: {
    paragraph1: t({
        en: "**Logical Spirituality** is a system of thought that details the visible and invisible connections between living beings, centering on all feelings. It defines the principles of **Interconnectedness** and **Justice** around the conditions of *physical and mental health in nature* to understand universal truth starting from the perceptible individual reality.",
        tr: "**Mantıksal Maneviyat** canlıların birbirleriyle olan görünür ve görünmez bağlarını, tüm hisleri odak noktasına alarak detaylandıran bir düşünce sistemidir. Hissedilebilen bireysel gerçekten yola çıkarak evrensel gerçeği anlayabilmek için, *doğadaki fiziksel ve zihinsel sağlık* koşullarının etrafında **Bütünlük** ve **Adalet** ilkelerini tanımlar.",
    }),
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
    }
  },
} satisfies Dictionary;

export default pageContent;
