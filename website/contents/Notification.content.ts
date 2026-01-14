import { t, type Dictionary } from "intlayer";

const pageContent = {
  key: "notification",
  content: {
    copyIbanSuccess: t({
      en: "🎉 Copied IBAN!",
      tr: "🎉 IBAN kopyalandı!"
    })
  },
} satisfies Dictionary;

export default pageContent;
