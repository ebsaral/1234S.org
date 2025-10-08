import { t, type Dictionary } from "intlayer";

const pageContent = {
  key: "justiceInNature-section",
  content: {
    title: t({
      en: "Justice: The Unseen Logic in Nature",
      tr: "Adalet: Doğadaki Görülmeyen Mantık",
      de: "Gerechtigkeit: Die unsichtbare Logik der Natur",
      fr: "Justice : La logique invisible dans la nature"
    }),
    description: t({
      en: "While Interconnectedness details the bonds in our lives through our feelings, Justice in Nature provides the balance between our bonds. **Justice proves itself in the vitality and health conditions of living beings.** In the freedom granted by nature, every being is treated equally.\n\nEvery entity contains meanings composed of different sets of feelings and serves as a means for us to perform good or bad actions. Every action we take brings its own consequences, whether positive or negative. The Creator always knows our true intention and guides the necessary outcome in our lives. **No being can escape the cause-and-effect relationship.**",
      tr: "Bütünlük yaşamımızdaki bağları hislerimizle detaylandırırken, doğadaki adalet bağlarımız arasındaki dengeyi sağlar. **Adalet, canlılığın ve canlıların sağlık durumlarında kendini kanıtlar.** Doğada bahşedilen özgürlükte her canlı eşit muamele görür.\n\nHer varlık farklı his kümelerinden oluşan anlamlar barındırır ve iyi ya da kötü eylemler gerçekleştirmemize vesile olur. Her eylemimiz olumlu veya olumsuz olarak kendi sonuçlarını beraberinde getirir. Yaradan gerçek niyetimizi her zaman bilir ve yaşamımızda gerekli olan sonucu bize doğru çeker. **Sebep-sonuç ilişkisinden hiçbir canlı kaçamaz.**",
      de: "Während die Verbundenheit die Bindungen in unserem Leben durch unsere Gefühle detailliert beschreibt, sorgt die Gerechtigkeit in der Natur für das Gleichgewicht zwischen unseren Bindungen. **Gerechtigkeit beweist sich in der Vitalität und im Gesundheitszustand der Lebewesen.** In der von der Natur gewährten Freiheit wird jedes Wesen gleich behandelt.\n\nJedes Wesen enthält Bedeutungen, die aus unterschiedlichen Gefühlsgruppen bestehen, und dient als Mittel für uns, gute oder schlechte Handlungen auszuführen. Jede Handlung, die wir durchführen, bringt ihre eigenen Folgen mit sich, sei es positiv oder negativ. Der Schöpfer kennt immer unsere wahre Absicht und zieht das notwendige Ergebnis in unserem Leben in die richtige Richtung. **Kein Lebewesen kann der Ursache-Wirkungs-Beziehung entkommen.**",
      fr: "Alors que l’Interconnexion détaille les liens dans nos vies à travers nos sentiments, la Justice dans la Nature fournit l’équilibre entre nos liens. **La justice se prouve dans la vitalité et l'état de santé des êtres vivants.** Dans la liberté accordée par la nature, chaque être est traité de manière égale.\n\nChaque entité contient des significations composées de différents ensembles de sentiments et sert de moyen pour nous permettre d'accomplir des actions bonnes ou mauvaises. Chaque action que nous effectuons entraîne ses propres conséquences, qu'elles soient positives ou négatives. Le Créateur connaît toujours notre véritable intention et guide le résultat nécessaire dans nos vies. **Aucun être ne peut échapper à la relation de cause à effet.**"
    }),
    equality: {
      title: t({
        en: "Equality",
        tr: "Eşitlik",
        de: "Gleichheit",
        fr: "Égalité"
      }),
      subtitle: t({
        en: "Shared Health, Same Laws",
        tr: "Ortak Sağlık, Aynı Yasalar",
        de: "Geteilte Gesundheit, Gleiche Gesetze",
        fr: "Santé partagée, mêmes lois"
      }),
      description: t({
        en: "All living beings are subject to the same natural laws in their shared life: birth, growth, illness, recovery, and death.\n\nWithin the scope of Interconnectedness, just as the positive development of a being provides benefits to its surroundings, the pain felt by one affects the health of all around it. Equality is **a biological and ecological truth.**",
        tr: "Tüm canlılar ortak yaşamlarında aynı doğa yasalarına tabidir: doğum, gelişim, hastalık, iyileşme ve ölüm.\n\nBütünlük kapsamında, bir canlının olumlu gelişiminin etrafına faydalar sağlaması gibi, birinin hissettiği acı tüm çevresinin sağlığını da etkiler. Eşitlik **biyolojik ve ekolojik bir gerçektir.**",
        de: "Alle Lebewesen unterliegen in ihrem gemeinsamen Leben denselben Naturgesetzen: Geburt, Wachstum, Krankheit, Heilung und Tod.\n\nIm Rahmen der Verbundenheit wirkt sich der Schmerz, den ein Lebewesen empfindet, auf die Gesundheit aller um es herum aus, genauso wie die positive Entwicklung eines Lebewesens seiner Umgebung Vorteile bringt. Gleichheit ist **eine biologische und ökologische Wahrheit.**",
        fr: "Tous les êtres vivants sont soumis aux mêmes lois naturelles dans leur vie commune : naissance, croissance, maladie, guérison et mort.\n\nDans le cadre de l’interconnexion, tout comme le développement positif d’un être apporte des bienfaits à son environnement, la douleur ressentie par l’un affecte la santé de tous ceux qui l’entourent. L'égalité est **une vérité biologique et écologique.**"
      }),
    },
    freedom: {
      title: t({
        en: "Freedom",
        tr: "Özgürlük",
        de: "Freiheit",
        fr: "Liberté"
      }),
      subtitle: t({
        en: "Choices Within Natural Limits",
        tr: "Doğal Sınırlar İçindeki Seçimler",
        de: "Wahlmöglichkeiten innerhalb natürlicher Grenzen",
        fr: "Des choix dans les limites naturelles"
      }),
      description: t({
        en: "Every being is free to live, nourish, harm, protect, exploit, cooperate, or ignore. Destructive actions harm both the actor and the ecosystem.\n\n**When equality is not respected, the limits of freedom are determined by nature.** Respecting the life of all beings allows for greater freedom.",
        tr: "Her varlık yaşamak, beslemek, zarar vermek, korumak, sömürmek, iş birliği yapmak veya görmezden gelmek için özgürdür. Yıkıcı eylemler eylemde bulunana ve ekosisteme zarar verir.\n\n **Eşitliğe saygı gösterilmediğinde, özgürlüğün sınırları doğada belirir.** Tüm canlıların yaşamına saygı duymak, daha özgür olmayı sağlar.",
        de: "Jedes Wesen ist frei zu leben, zu ernähren, zu schaden, zu schützen, auszubeuten, zusammenzuarbeiten oder zu ignorieren. Zerstörerische Handlungen schaden sowohl dem Handelnden als auch dem Ökosystem.\n\n**Wenn Gleichheit nicht respektiert wird, legt die Natur die Grenzen der Freiheit fest.** Das Leben aller Wesen zu respektieren ermöglicht größere Freiheit.",
        fr: "Chaque être est libre de vivre, nourrir, nuire, protéger, exploiter, coopérer ou ignorer. Les actions destructrices nuisent à l'acteur et à l'écosystème.\n\n**Lorsque l'égalité n'est pas respectée, les limites de la liberté sont déterminées par la nature.** Respecter la vie de tous les êtres permet d'être plus libre."
      }),
    },
    paragraph1: t({
      en: "The Creator ensures justice in nature by intervening in the connections between our feelings; transforming beings into elements necessary for balance. The health conditions needed for the principles of equality and freedom allow harmony at different times and in various ways. For physical health to be used positively, the factors of chance and talent, which are the balancing tools of mental health, are shaped.\n\nAll diseases, epidemics, earthquakes, storms, floods, droughts, animal attacks, conflicts, crises, and wars experienced from the beginning to the present reveal justice in nature. Humanity delays its own welfare when it reduces the symbols of nature to its own frame of meaning and disregards other living beings. **All outcomes directly reflect how the principles of equality and freedom are applied.** Every negative outcome is a silent cry of injustice in nature. *For example: while watching someone recount a traffic accident on the news, we simultaneously hear the confession of their another unseen wrongdoing.*\n\n**Any teaching or knowledge may not align with the balance of justice in nature.** In situations where the justice of nature must prevail, no technology will ever exist to prevent it.",
      tr: "Yaradan, hislerimiz arasındaki bağlara müdahale ederek doğadaki adaleti sağlar; varlıkları denge için gerekli unsurlara dönüştürür. Eşitlik ve özgürlük ilkeleri için ihtiyaç duyulan sağlık koşulları farklı zamanlarda ve şekillerde uyumu sağlar. Fiziksel sağlığın olumlu bir biçimde kullanılabilmesi için zihinsel sağlığın denge araçları olan şans ve yetenek faktörleri şekillenir.\n\nBaşlangıçtan günümüze yaşanılan tüm hastalıklar, salgınlar, depremler, fırtınalar, seller, kuraklıklar, hayvan saldırıları, çatışmalar, krizler ve savaşlar doğadaki adaleti gözler önüne serer. İnsanlık, doğanın sembollerini yalnızca kendi anlam çerçevesine indirgediğinde ve diğer canlıları umursamadığında, kendi refahını da ertelemiş olur. **Tüm sonuçlar eşitlik ve özgürlük ilkelerinin nasıl uygulandığını doğrudan yansıtır.** Her olumsuz sonuç, doğada yaşanan adaletsizliğin sessiz bir çığlığıdır. *Örnek olarak: Haberlerde geçirdiği trafik kazasını anlatan birini izlerken, aynı zamanda o kişinin görmediğimiz başka bir suçunu itiraf ettiğini duyarız.*\n\n**Herhangi bir öğreti veya bilgi, doğadaki adalet dengesiyle örtüşmeyebilir.** Doğadaki adaletin tecelli etmesi gerektiği durumlarda önüne geçebilecek herhangi bir teknoloji hiçbir zaman var olmayacaktır.",
      de: "Der Schöpfer gewährleistet die Gerechtigkeit in der Natur, indem er in die Verbindungen unserer Gefühle eingreift und die Wesen in die für das Gleichgewicht notwendigen Elemente verwandelt. Die für die Prinzipien von Gleichheit und Freiheit erforderlichen Gesundheitsbedingungen ermöglichen zu unterschiedlichen Zeiten und auf unterschiedliche Weise Harmonie. Damit die körperliche Gesundheit positiv genutzt werden kann, werden die Faktoren Glück und Talent, die die Balancewerkzeuge der geistigen Gesundheit sind, geformt.\n\nAlle Krankheiten, Epidemien, Erdbeben, Stürme, Überschwemmungen, Dürren, Tierangriffe, Konflikte, Krisen und Kriege, die von Anfang bis heute erlebt wurden, zeigen die Gerechtigkeit in der Natur. Die Menschheit verzögert ihr eigenes Wohl, wenn sie die Symbole der Natur auf ihren eigenen Bedeutungsrahmen reduziert und andere Lebewesen ignoriert. **Alle Ergebnisse spiegeln direkt wider, wie die Prinzipien von Gleichheit und Freiheit angewendet werden.** Jedes negative Ergebnis ist ein stiller Schrei der Ungerechtigkeit in der Natur. *Beispiel: Während wir in den Nachrichten jemanden sehen, der einen Verkehrsunfall schildert, hören wir gleichzeitig das Geständnis eines anderen, unsichtbaren Fehlverhaltens.*\n\n**Jegliche Lehre oder Wissen kann möglicherweise nicht mit dem Gleichgewicht der Gerechtigkeit in der Natur übereinstimmen.** In Situationen, in denen die Gerechtigkeit der Natur walten muss, wird niemals eine Technologie existieren, die dies verhindern könnte.",
      fr: "Le Créateur assure la justice dans la nature en intervenant dans les liens entre nos sentiments ; il transforme les êtres en éléments nécessaires à l'équilibre. Les conditions de santé nécessaires aux principes d'égalité et de liberté permettent l'harmonie à différents moments et de différentes manières. Pour que la santé physique soit utilisée positivement, les facteurs de chance et de talent, qui sont les outils d'équilibre de la santé mentale, se développent.\n\nToutes les maladies, épidémies, tremblements de terre, tempêtes, inondations, sécheresses, attaques animales, conflits, crises et guerres vécus depuis le début jusqu'à aujourd'hui révèlent la justice dans la nature. L'humanité retarde son propre bien-être lorsqu'elle réduit les symboles de la nature à son propre cadre de sens et ignore les autres êtres vivants. **Tous les résultats reflètent directement la manière dont les principes d'égalité et de liberté sont appliqués.** Chaque résultat négatif est un cri silencieux d'injustice dans la nature. *Par exemple : pendant que nous regardons quelqu’un raconter un accident de la circulation aux informations, nous entendons simultanément la confession d’un autre méfait invisible.*\n\n**Toute enseignement ou connaissance peut ne pas s'aligner avec l'équilibre de la justice dans la nature.** Dans les situations où la justice de la nature doit prévaloir, aucune technologie ne pourra jamais l'empêcher."
    }),
    positiveConsequences: {
      title: t({
        en: "Positive Consequences",
        tr: "Olumlu Sonuçlar",
        de: "Positive Konsequenzen",
        fr: "Conséquences positives"
      }),
      nature: t({
        en: "Fertile soil, balanced weather conditions, and ecological harmony...",
        tr: "Verimli toprak, dengeli hava koşulları ve ekolojik uyum...",
        de: "Fruchtbarer Boden, ausgeglichene Wetterbedingungen und ökologische Harmonie...",
        fr: "Sol fertile, conditions météorologiques équilibrées et harmonie écologique..."
      }),
      health: t({
        en: "Having a strong immune system, achieving robust mental health, increased talents, and a long lifespan...",
        tr: "Güçlü bağışıklık sistemine sahip olmak, güçlü zihin sağlığına erişmek, yeteneklerde artış ve uzun ömür...",
        de: "Ein starkes Immunsystem zu haben, robuste geistige Gesundheit zu erreichen, Zunahme von Fähigkeiten und ein langes Leben...",
        fr: "Avoir un système immunitaire fort, accéder à une santé mentale solide, accroissement des talents et longue durée de vie..."
      }),
      luck: t({
        en: "Encountering supportive elements, discovering new opportunities, finding practical solutions, and gaining natural protection...",
        tr: "Destekleyici unsurlarla karşılaşmak, yeni fırsatlar keşfetmek, pratik çözüm bulmak ve doğal korunma kazanmak...",
        de: "Auf unterstützende Elemente treffen, neue Chancen entdecken, praktische Lösungen finden und natürlichen Schutz gewinnen...",
        fr: "Rencontrer des éléments de soutien, découvrir de nouvelles opportunités, trouver des solutions pratiques et obtenir une protection naturelle..."
      }),
    },
    negativeConsequences: {
      title: t({
        en: "Negative Consequences",
        tr: "Olumsuz Sonuçlar",
        de: "Negative Konsequenzen",
        fr: "Conséquences négatives"
      }),
      nature: t({
        en: "Droughts, floods, hurricanes, fires, and global warming...",
        tr: "Kuraklıklar, seller, kasırgalar, yangınlar ve küresel ısınma...",
        de: "Dürren, Überschwemmungen, Hurrikane, Brände und globale Erwärmung...",
        fr: "Sécheresses, inondations, ouragans, incendies et réchauffement climatique..."
      }),
      health: t({
        en: "Physical and mental illnesses; heart attacks, genetic disorders, and pandemics...",
        tr: "Fiziksel ve zihinsel hastalıklar; kalp krizleri, genetik bozukluklar ve pandemiler...",
        de: "Physische und psychische Krankheiten; Herzinfarkte, genetische Störungen und Pandemien...",
        fr: "Maladies physiques et mentales ; crises cardiaques, troubles génétiques et pandémies..."
      }),
      luck: t({
        en: "Economic difficulties, missed opportunities, all kinds of home/work/street accidents...",
        tr: "Ekonomik zorluklar, fırsat kayıpları, her türlü ev/iş/sokak kazaları...",
        de: "Wirtschaftliche Schwierigkeiten, verpasste Chancen, alle Arten von Unfällen zu Hause, bei der Arbeit oder auf der Straße...",
        fr: "Difficultés économiques, occasions manquées, tous types d'accidents à la maison, au travail ou dans la rue..."
      }),
    },
  },
} satisfies Dictionary;

export default pageContent;
