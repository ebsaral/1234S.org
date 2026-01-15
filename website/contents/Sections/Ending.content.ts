import { t, type Dictionary } from "intlayer";

const pageContent = {
  key: "ending-section",
  content: {
    statement: t({
      en: "In the presence of nature's justice, claiming your rights to equality and freedom can never be questioned. Equality exists because no being escapes consequences. Freedom exists because each being chooses its path within them.",
      tr: "Doğadaki adaletin huzurunda, eşitlik ve özgürlük için haklarınızı talep etmeniz asla sorgulanamaz. Eşitlik, hiçbir varlık sonuçlardan kaçamadığı için vardır. Özgürlük ise her varlığın kendi içindeki yolunu seçebilmesinden doğar."
    }),
    progress: t({
      en: "Note: This page has not been completed yet. Content is getting updated periodically.",
      tr: "Not: Bu sayfa henüz tam olarak tamamlanmamıştır; içerik güncelleme süreci devam etmektedir."
    })
  },
} satisfies Dictionary;

export default pageContent;
