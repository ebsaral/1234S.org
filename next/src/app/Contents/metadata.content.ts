import { type Dictionary, t } from "intlayer";
import { Metadata } from "next";

const metadataContent = {
  key: "page-metadata",
  content: {
    title: t({
      en: "Logical Spirituality",
      tr: "Mantıksal Maneviyat",
    }),
    description: t({
      en: "A philosophical movement project.",
      tr: "Bir felsefi akım projesi.",
    }),
  },
} satisfies Dictionary<Metadata>;

export default metadataContent;