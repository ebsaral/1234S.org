import { t, type Dictionary } from "intlayer";

const pageContent = {
  key: "ending-section",
  content: {
    statement: t({
      en: "In the presence of nature's justice, claiming your rights to equality and freedom can never be questioned. Equality exists because no being escapes consequences. Freedom exists because each being chooses its path within them.",
      tr: "Doğadaki adaletin huzurunda, eşitlik ve özgürlük için haklarınızı talep etmeniz asla sorgulanamaz. Eşitlik, hiçbir varlık sonuçlardan kaçamadığı için vardır. Özgürlük ise her varlığın kendi içindeki yolunu seçebilmesinden doğar.",
      de: "In Gegenwart der Gerechtigkeit der Natur kann das Einfordern Ihrer Rechte auf Gleichheit und Freiheit niemals in Frage gestellt werden. Gleichheit existiert, weil kein Wesen den Konsequenzen entkommt. Freiheit existiert, weil jedes Wesen seinen eigenen Weg darin wählt."
    })
  },
} satisfies Dictionary;

export default pageContent;
