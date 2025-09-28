import { t, type Dictionary } from "intlayer";

const pageContent = {
  key: "justiceInNature-section",
  content: {
    title: t({
      en: "Justice in Nature:\nThe Unseen Logic",
      tr: "Doğadaki Adalet: Görünmeyen Mantık",
      de: "Gerechtigkeit in der Natur:\nDie unsichtbare Logik"
    }),
    description: t({
      en: "While interconnectedness principle describes the web of life, **nature itself enforces balance through justice**. Every being is treated equally within the natural justice, and every being is free to act — but **every action carries its own consequences**.\n\nEach being in nature brings a means for you to carry out either a good or a bad action. While others may interpret your actions differently, nature knows your true intention and draws the fitting consequence toward you. In its details, every negative consequence tells a silent scream in nature. Grasping the details, however, may require a great attention.",
      tr: "Bütünlük ilkesi yaşamın ağını tanımlarken, **doğanın kendisi adalet yoluyla dengeyi sağlar**. Doğal adalet içinde her varlık eşit muamele görür ve her varlık özgürce hareket edebilir — ancak **her eylem kendi sonuçlarını beraberinde getirir**.\n\nDoğadaki her bir varlık, sizin iyi ya da kötü bir eylem gerçekleştirmenize vesile olan anlamlar barındırır. Başkaları eylemlerinizi farklı şekilde yorumlasa bile, doğa sizin gerçek niyetinizi bilir ve ona uygun sonucu size doğru çeker. Detaylarının içinde, her olumsuz sonuç doğadaki sessiz bir çığlığı anlatır. Detayları kavrayabilmek ise büyük bir özen gerektirebilir.",
      de: "Während das Prinzip der Verbundenheit das Netz des Lebens beschreibt, **erzwingt die Natur selbst das Gleichgewicht durch Gerechtigkeit**. Jedes Wesen wird innerhalb der natürlichen Gerechtigkeit gleich behandelt und jedes Wesen ist frei zu handeln — aber **jede Handlung trägt ihre eigenen Konsequenzen**.\n\nJedes Wesen in der Natur bringt ein Mittel mit, durch das Sie eine gute oder eine schlechte Handlung ausführen können. Während andere Ihre Handlungen unterschiedlich interpretieren mögen, kennt die Natur Ihre wahre Absicht und zieht die passende Konsequenz zu Ihnen hin. In ihren Details erzählt jede negative Konsequenz einen stillen Schrei in der Natur. Die Details zu erfassen, erfordert jedoch große Aufmerksamkeit."
    }),
    positiveConsequences: {
      title: t({
        en: "Positive Consequences",
        tr: "Olumlu Sonuçlar",
        de: "Positive Konsequenzen"
      }),
      nature: t({
        en: "Fertile soil, balanced weather, and ecological harmony emerge when environments are respected.",
        tr: "Verimli toprak, dengeli hava koşulları ve ekolojik uyum, çevreye saygı gösterildiğinde ortaya çıkar.",
        de: "Fruchtbarer Boden, ausgeglichenes Wetter und ökologische Harmonie entstehen, wenn die Umwelt respektiert wird."
      }),
      health: t({
        en: "Strong immunity, recovery from disease, and long life result from alignment with care and balance.",
        tr: "Güçlü bağışıklık, hastalıklardan iyileşme ve uzun ömür, özen gösterme ve dengeyle uyumdan kaynaklanır.",
        de: "Starke Immunität, Genesung von Krankheiten und ein langes Leben resultieren aus Fürsorge und Gleichgewicht."
      }),
      luck: t({
        en: "Meeting supportive people, discovering opportunities, or receiving natural protection often follow from bravery, compassion, empathy and caring.",
        tr: "Destekleyici insanlarla karşılaşmak, fırsatlar keşfetmek veya doğal korunma kazanmak genellikle cesaret, şefkat, empati ve ilgiden sonra gelir.",
        de: "Unterstützende Menschen zu treffen, Chancen zu entdecken oder natürlichen Schutz zu erhalten, folgt oft auf Mut, Mitgefühl, Empathie und Fürsorge."
      }),
    },
    negativeConsequences: {
      title: t({
        en: "Negative Consequences",
        tr: "Olumsuz Sonuçlar",
        de: "Negative Konsequenzen"
      }),
      nature: t({
        en: "Droughts, floods, hurricanes, and global warming emerge from exploitation and imbalance.",
        tr: "Kuraklıklar, seller, kasırgalar ve küresel ısınma, sömürü ve dengesizlikten kaynaklanır.",
        de: "Dürren, Überschwemmungen, Wirbelstürme und globale Erwärmung entstehen aus Ausbeutung und Ungleichgewicht."
      }),
      health: t({
        en: "Heart disease, depression, pandemics, and even genetic disorders manifest as part of deeper misalignments.",
        tr: "Kalp hastalıkları, depresyon, pandemiler ve hatta genetik bozukluklar daha derin uyumsuzlukların bir parçası olarak yaşamlarımıza yansır.",
        de: "Herzkrankheiten, Depressionen, Pandemien und sogar genetische Störungen zeigen sich als Teil tieferer Fehlanpassungen."
      }),
      luck: t({
        en: "All accidents in traffic, workplaces, or homes arise as a result of our relationships with beings.",
        tr: "Trafikte, işyerlerinde veya evlerdeki tüm kazalar, varlıklarla olan ilişkilerimizin sonucu olarak ortaya çıkarlar.",
        de: "Alle Unfälle im Verkehr, in Arbeitsstätten oder in Häusern entstehen als Folge unserer Beziehungen zu Lebewesen."
      }),
    },
    equality: {
      title: t({
        en: "Equality",
        tr: "Eşitlik",
        de: "Gleichheit"
      }),
      subtitle: t({
        en: "Same Laws, Shared Health",
        tr: "Aynı Yasalar, Ortak Sağlık",
        de: "Gleiche Gesetze, geteilte Gesundheit"
      }),
      description: t({
        en: "All beings are governed by the same natural laws: birth, death, nourishment, disease, and healing. None can escape gravity, aging, or cause-and-effect.\n\nBecause the health of each being depends on relationships within its environment, no life exists in isolation. The suffering of one organism affects others — families, communities, ecosystems — just as the thriving of one brings benefits beyond itself.\n\nEquality, then, is not merely a moral stance. It is a **biological and ecological fact**: Every being's survival is tied to the well-being of others in different shapes.",
        tr: "Tüm canlılar aynı doğa yasalarına tabidir: doğum, ölüm, beslenme, hastalık ve iyileşme. Hiçbiri yer çekiminden, yaşlanmadan veya sebep-sonuç ilişkisinden kaçamaz.\n\nHer canlının sağlığı, çevresiyle olan ilişkilerine bağlı olduğundan, hiçbir yaşam tek başına var olmaz. Bir canlının çektiği acı, tıpkı birinin gelişmesinin kendi ötesinde faydalar sağlaması gibi, diğer canlıları da -aileleri, toplulukları, ekosistemleri- etkiler.\n\nÖyleyse eşitlik, yalnızca ahlaki bir duruş değildir. **Biyolojik ve ekolojik bir gerçektir**: Her canlının hayatta kalması, diğerlerinin refahına farklı şekillerde bağlıdır.",
        de: "Alle Wesen unterliegen denselben Naturgesetzen: Geburt, Tod, Ernährung, Krankheit und Heilung. Keines kann der Schwerkraft, dem Altern oder Ursache und Wirkung entkommen.\n\nDa die Gesundheit jedes Wesens von den Beziehungen in seiner Umwelt abhängt, existiert kein Leben isoliert. Das Leiden eines Organismus betrifft andere — Familien, Gemeinschaften, Ökosysteme — ebenso wie das Gedeihen eines einzelnen Nutzen über sich hinaus bringt.\n\nGleichheit ist also nicht nur eine moralische Haltung. Sie ist eine **biologische und ökologische Tatsache**: Das Überleben jedes Wesens ist auf unterschiedliche Weise mit dem Wohlergehen anderer verbunden."
      }),
    },
    freedom: {
      title: t({
        en: "Freedom",
        tr: "Özgürlük",
        de: "Freiheit"
      }),
      subtitle: t({
        en: "Choices Within Natural Limits",
        tr: "Doğal Sınırlar İçindeki Seçimler",
        de: "Wahlmöglichkeiten innerhalb natürlicher Grenzen"
      }),
      description: t({
        en: "Every being is free to act to nurture, harm, protect, exploit, cooperate, or ignore. But freedom does not mean escaping consequences. The health of individuals, societies, and ecosystems reflects the sum of all actions taken within them.\n\nFreedom is therefore **real but bounded**: Destructive actions bring harm back to the system — and eventually to the actor. Harmony arises only when freedom respects equality; chaos emerges when it does not.\n\nTrue freedom requires honoring the shared health of all beings.",
        tr: "Her varlık beslemek, zarar vermek, korumak, sömürmek, iş birliği yapmak veya görmezden gelmek için hareket etmekte özgürdür. Ancak özgürlük, sonuçlardan kaçmak anlamına gelmez. Bireylerin, toplumların ve ekosistemlerin sağlığı, içlerinde gerçekleştirilen tüm eylemlerin toplamını yansıtır.\n\nBu nedenle özgürlük **gerçek ama sınırlıdır**: Yıkıcı eylemler sisteme ve nihayetinde eylemde bulunana zarar verir. Uyum, ancak özgürlük eşitliğe saygı gösterdiğinde ortaya çıkar; saygı göstermediğinde ise kaos ortaya çıkar.\n\nGerçek özgürlük, tüm varlıkların ortak sağlığına saygı duymayı gerektirir.",
        de: "Jedes Wesen ist frei zu handeln: zu nähren, zu schaden, zu schützen, auszubeuten, zusammenzuarbeiten oder zu ignorieren. Aber Freiheit bedeutet nicht, den Konsequenzen zu entkommen. Die Gesundheit von Individuen, Gesellschaften und Ökosystemen spiegelt die Summe aller darin getroffenen Handlungen wider.\n\nFreiheit ist daher **real, aber begrenzt**: Zerstörerische Handlungen bringen Schaden zurück ins System — und schließlich zum Handelnden selbst. Harmonie entsteht nur, wenn Freiheit die Gleichheit respektiert; Chaos entsteht, wenn sie es nicht tut.\n\nWahre Freiheit erfordert die Achtung der gemeinsamen Gesundheit aller Wesen."
      }),
    },
    paragraph1: t({
      en: "Since the beginning of life, justice in nature has always existed, and the laws of nature, though expressed in different forms, have always retained their validity. Every living being represents a unique aspect of this justice. Whenever humanity's approach to nature centered solely on itself, or when governance succumbed to selfishness, the civilizations they built inevitably lost their order —sooner or later— through other communities or through natural interventions. Similar principles of justice operate openly and visibly in the animal world as well.\n\nWhat must be understood is that the common ground shared by all living beings is feelings. When the human mind reduces the symbols of nature solely to its own framework of meaning (out of self-centeredness) and ignores other creatures, it ends up postponing its own well-being. Throughout history, earthquakes, storms, floods, droughts, plagues, animal attacks, conflicts, and wars have compelled our feelings to mature and have forced us to perceive nature as a whole.\n\nNature, in order to maintain balance, *somehow* intervenes in the communication between feelings; it turns events and means into the necessary instruments for balance. The creative phenomenon that governs these feelings and makes them meaningful within a unity has been expressed throughout human history through different symbols and belief systems. **Logical Spirituality, on the other hand, seeks to explore the logic within the felt dimension of the Creator by grounding itself in nature — the widest circle of this unity.**\n\nFrom the Creator's perspective, we don't have a free will. Within our perspective created out of its presence and squeezed in nature, we have all choices.",
      tr: "Yaşamın başlangıcından bu yana doğada adalet her zaman var olmuş ve doğa yasaları, farklı biçimlerde ifade edilse de, geçerliliğini her zaman korumuştur. Her canlı, bu adaletin kendine özgü bir yönünü temsil eder. İnsanlığın doğaya yaklaşımı yalnızca kendine odaklandığında veya yönetim bencilliğe yenik düştüğünde, inşa ettikleri medeniyetler kaçınılmaz olarak -er ya da geç- diğer topluluklar veya doğal müdahaleler aracılığıyla düzenlerini kaybetmiştir. Benzer adalet ilkeleri hayvanlar aleminde de açıkça ve gözle görülür bir şekilde işler. Anlaşılması gereken şey, tüm canlıların paylaştığı ortak zeminin duygular olduğudur. İnsan zihni, doğanın sembollerini yalnızca kendi anlam çerçevesine indirgediğinde (benmerkezcilikten dolayı) ve diğer canlıları görmezden geldiğinde, kendi refahını ertelemiş olur. Tarih boyunca depremler, fırtınalar, seller, kuraklıklar, vebalar, hayvan saldırıları, çatışmalar ve savaşlar duygularımızı olgunlaştırmış ve doğayı bir bütün olarak algılamamızı sağlamıştır. Doğa, dengeyi sağlamak için *bir şekilde* duygular arasındaki iletişime müdahale eder; olayları ve araçları denge için gerekli araçlara dönüştürür. Bu duyguları yöneten ve onları bir bütünlük içinde anlamlı kılan yaratıcı olgu, insanlık tarihi boyunca farklı semboller ve inanç sistemleri aracılığıyla ifade edilmiştir. **Mantıksal Maneviyat ise, konuyu bu bütünlüğün en geniş halkası olan doğayla açıklayarak, Yaratıcı'nın hissedilen boyutundaki mantığı keşfetmeyi amaçlar.**\n\nYaradan'ın bakış açısından, özgür irademiz yoktur. Onun huzurundan yaratılmış ve doğaya sıkıştırılmış bakış açımızla, tüm seçimlere sahibiz.",
      de: "Seit Beginn des Lebens existiert Gerechtigkeit in der Natur, und die Naturgesetze haben, obwohl sie in unterschiedlichen Formen ausgedrückt werden, ihre Gültigkeit stets bewahrt. Jedes Lebewesen repräsentiert einen einzigartigen Aspekt dieser Gerechtigkeit. Wann immer der Umgang der Menschheit mit der Natur sich ausschließlich auf sich selbst konzentrierte oder die Regierung dem Egoismus erlag, verloren die Zivilisationen, die sie errichteten, unweigerlich früher oder später ihre Ordnung — durch andere Gemeinschaften oder durch natürliche Eingriffe. Ähnliche Prinzipien der Gerechtigkeit wirken auch in der Tierwelt offen und sichtbar.\n\nWas verstanden werden muss, ist, dass der gemeinsame Boden aller Lebewesen die Gefühle sind. Wenn der menschliche Verstand die Symbole der Natur ausschließlich auf seinen eigenen Bedeutungsrahmen reduziert (aus Selbstzentrierung) und andere Kreaturen ignoriert, verschiebt er letztlich sein eigenes Wohlbefinden. Im Laufe der Geschichte haben Erdbeben, Stürme, Überschwemmungen, Dürren, Seuchen, Tierangriffe, Konflikte und Kriege unsere Gefühle gezwungen, zu reifen und uns dazu gebracht, die Natur als Ganzes wahrzunehmen.\n\nDie Natur greift, um das Gleichgewicht zu wahren, *irgendwie* in die Kommunikation zwischen den Gefühlen ein; sie verwandelt Ereignisse und Mittel in die notwendigen Instrumente für das Gleichgewicht. Das kreative Phänomen, das diese Gefühle lenkt und sie in einer Einheit sinnvoll macht, wurde im Laufe der Menschheitsgeschichte durch verschiedene Symbole und Glaubenssysteme ausgedrückt. **Die Logische Spiritualität hingegen versucht, die Logik innerhalb der gefühlten Dimension des Schöpfers zu erforschen, indem sie sich in der Natur verankert — dem weitesten Kreis dieser Einheit.**\n\nAus der Perspektive des Schöpfers haben wir keinen freien Willen. Aus unserer Perspektive, die aus seiner Präsenz heraus geschaffen und in die Natur hineingepresst wurde, haben wir alle Wahlmöglichkeiten."
    }),
    keyTakeaway: t({
      en: "Justice is the natural unfolding of balance. By honoring equality and freedom — not just for ourselves, but for every being — we align with Logic in Nature and invite positive outcomes into the interconnected whole. Every misalignment tends to disappear or disolve in nature's justice scale, as an act of fairness. Not causing any harm even it's done to you by having trust in nature gets you closer to a better life and the wholeness of nature.",
      tr: "Adalet, dengenin doğal bir açılımıdır. Sadece kendimiz için değil, her varlık için eşitlik ve özgürlüğe saygı göstererek, Doğadaki Mantıkla uyum içinde olur ve bütünleşik yapıya olumlu sonuçlar davet ederiz. Her türlü uyumsuzluk, doğanın adalet terazisinde adil bir çözüm olarak yok olma eğilimindedir. Size yapılsa bile birilerine zararla karşılık vermemek, sizi daha iyi bir hayata ve doğanın bütünlüğüne yaklaştırır.",
      de: "Gerechtigkeit ist die natürliche Entfaltung des Gleichgewichts. Indem wir Gleichheit und Freiheit ehren — nicht nur für uns selbst, sondern für jedes Wesen — stimmen wir uns mit der Logik der Natur ab und laden positive Ergebnisse in das verbundene Ganze ein. Jede Fehlanpassung neigt dazu, auf der Gerechtigkeitsskala der Natur zu verschwinden oder sich aufzulösen, als Akt der Fairness. Keinen Schaden zu verursachen, selbst wenn er Ihnen angetan wird, und auf die Natur zu vertrauen, bringt Sie einem besseren Leben und der Ganzheit der Natur näher."
    }) 
  },
} satisfies Dictionary;

export default pageContent;
