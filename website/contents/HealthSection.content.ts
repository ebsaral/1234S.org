import { t, type Dictionary } from "intlayer";

const pageContent = {
  key: "health-section",
  content: {
    title: t({
      en: "Health: The Body as a Mirror of Nature's Justice",
      tr: "Sağlık: Doğadaki Adaletin Aynası",
      de: "Gesundheit: Der Körper als Spiegel der Gerechtigkeit der Natur",
      fr: "Santé : Le corps comme miroir de la justice de la nature"
    }),
    quote: t({
      en: "The human body itself proves the logic to be observed.\nOur physical and mental health directly reflects alignment with nature's justice and the quality of our relationships.",
      tr: "İnsan bedeni, gözlemlenmesi gereken mantığı bizzat kanıtlar.\nFiziksel ve zihinsel sağlığımız, doğanın adaletiyle uyumumuzu ve ilişkilerimizin niteliğini doğrudan yansıtır.",
      de: "Der menschliche Körper selbst beweist die Logik, die zu beachten ist.\nUnsere körperliche und geistige Gesundheit spiegelt direkt die Übereinstimmung mit der Gerechtigkeit der Natur und die Qualität unserer Beziehungen wider.",
      fr: "Le corps humain lui-même prouve la logique à observer.\nNotre santé physique et mentale reflète directement l’alignement avec la justice de la nature et la qualité de nos relations."
    }),
    description: t({
      en: "Qualities like compassion, honesty, forgiveness, and support for others strengthen our organs, mental resilience, and overall well-being. Negative or harmful actions disrupt balance, weaken the body, and manifest as illness or stress.\n\nNothing is random in nature: Every disease explains (y)our misalignments — consequences of your actions.\n\nActions can be both inward and outward in any relationship. **Your relationship with yourself is equally important as your relationships with others.**",
      tr: "Her hastalık, doğaya yönelik olumsuz eylemlerimizin sonuçlarını vücudumuz aracılığıyla bize açıklar. Eylemlerimiz, herhangi bir ilişkide hem içe hem dışa yönelik olabilir. **Kendimize yönelik olan eylemlerimiz, başkalarına yönelik eylemlerimiz kadar önemlidir.**\n\nİyi niyet, merhamet, dürüstlük, paylaşım ve başkalarına yardım etme gibi olumlu özellikler, organlarımızı, zihinsel dayanıklılığımızı ve genel sağlığımızı güçlendirir. Olumsuz eylemlerimizin sonuçları ise bize hastalık olarak yansıdığı için, doğayla olan bağımız düzelmedikçe iyileşmemiz imkansızlaşır veya başka bir hastalıkla karşılaşırız. Sanılanın aksine, sağlıklı ve uzun bir yaşam için özel bir beslenmeye veya ilaca ihtiyaç duymayız. Haliyle daha iyi bir sağlık için, daha iyi bir insan olmalıyız.",
      de: "",
      fr: ""
    }),
    analogy: {
      title: t({
        en: "Organ-Action-Consequence Analogy",
        tr: "Organ-Eylem-Sonuç Benzetmesi",
        de: "Organ-Handlung-Folge-Analogie",
        fr: "Analogie Organe-Action-Conséquence"
      }),
      quote: t({
        en: "",
        tr: "Vücudumuzdaki organların işlevleri, bir toplulukta ve toplumda gerçekleştirdiğimiz eylemlerin sonuçlarını açıklamaya yardımcı olur. Böylelikle organlarımızın sağlık durumları ve işleyiş amaçları bir araya gelerek bize sessiz bir rehberlik sunar. Aşağıdaki örnekleri inceleyerek kendi bedeninizdeki organların işlevlerini ve sağlık durumlarını daha iyi gözlemleyebilirsiniz.",
        de: "",
        fr: ""
      }),
      items: [
        t({
          en: "",
          tr: "Sağlıklı bir zihin ve bağışıklık sistemi, doğanın size çok değer verdiğini gösterir.",
          de: "",
          fr: ""
        }),
        t({
          en: "",
          tr: "Hastalık, uyumsuzluğumuzun bir işaretidir. Çevreyle ve birbirimizle olan ilişkilerimizdeki dengeyi yeniden sağlamamızı amaçlar.",
          de: "Krankheit signalisiert Fehlanpassung und drängt uns, das Gleichgewicht in unseren Beziehungen zur Umwelt und zueinander wiederherzustellen.",
          fr: "La maladie signale un désalignement et nous incite à rétablir l’équilibre dans nos relations avec l’environnement et les autres."
        }),
        t({
          en: "",
          tr: "Doğayla muazzam bir uyum yakaladığınızda, zihinsel ve fiziksel sağlığınız kapsamlı bir koruma kalkanına sahip olur.",
          de: "Wenn die Übereinstimmung mit der Natur erreicht wird, folgt die Gesundheit auf natürliche Weise, und Krankheit wird selten — eine Belohnung für das Leben im Einklang mit den Prinzipien, die das Leben erhalten.",
          fr: "Lorsque l’alignement avec la nature est atteint, la santé suit naturellement et la maladie devient rare — une récompense pour vivre en harmonie avec les principes qui soutiennent la vie."
        })
      ],
    },
    paragraph1: t({
      en: "",
      tr: "Sağlıklı bir yaşam, sadece güçlü bir bedene sahip olmakla ilgili değildir; aynı zamanda, kişinin bütün potansiyelini geliştiren bir zihnin de varlığına bağlıdır. Zihinsel sağlık, odaklanma, fırsatlar, yetenek ve diğer şans unsurları aracılığıyla büyümeyi besler — bunların tümü de doğanın adalet terazisine bağlıdır.\n\nKalıtsal hastalıkların iyileşmesi için daha fazla çaba göstermek gerekir. Muhtemelen çoğu genetik hastalığın tedavisi sadece bir sonraki nesilde gerçekleşebilir. Çünkü bizden önceki nesiller tarafından doğaya verilen zararın incelenmesi ve telafi edilmesi gereklidir. İnsanı doğanın bir parçası olarak görürken, diğer canlıları unutmamalıyız. Öz eleştiri ve farkındalık her iyileşmemizin başlangıcıdır. Bu yüzden bazı geleneklerin tekrar yorumlanması gerekir.\n\n**Bir virüs, mikrop veya kimyasal vücudumuza girdiğinde, eylemlerimizdeki seçimlerle şekillenen bir yolla vücudumuzda ilerler.** Zararlı davranış kalıplarında ısrar etmek, bunların vücudumuza zarar vererek yayılmasına yol açar. Çevremizle birlikte kendi vücut sistemimizi anladıkça ve eylemlerimizi farkındalık, iyileşme ve yenilenme ile yönlendirdikçe, vücudumuz dengesini yeniden kazanır ve zararlı maddeleri dışarıya atar.\n\nBenzer şekilde, **Organ-Eylem-Sonuç Benzetmesi yaşadığımız tüm kazalar için de geçerlidir.** Herhangi bir kaza sonucunda vücudumuzda oluşan hasarlar, kazadan önceki eylemlerimizin bir yansıması olarak bize ders vermeyi amaçlar. Yaşanılan bir kazanın oluşma şekli, sebep olan eylemimizi açıklar. Zihnimizdeki odak noktamızı ve vücudumuzu nasıl kullandığımızı anlatır.\n\nDoğada hafızamız, düşüncemiz, duygularımız ve hislerimiz; çevremizdeki dengenin sağlanması için Yaradan aracılığıyla şekil değiştirebilir, sınanabilir hatta silinebilir. Doğayla kurulan dengeli bir bağ, güçlü bir zihinsel yapıya olanak tanır. Doğa, her zaman hatalarımızı telafi etme fırsatını sunar. Maalesef bazı hatalar ise geri dönülemeyecek kayıplara yol açar.\n\n**Her musibetin bir hayırı vardır.** Pozitif eylemlerimiz, yetenekler ve fırsatlar gibi farklı biçimlerde bize geri dönebilir. İster bize ister çevremize yönelik gerçekleştirilen olumsuz eylemler ise koruma kalkanı, artan farkındalık ve güçlenmiş yetenekler biçiminde geri dönüş sağlayabilir. Öte yandan, doğayla uyumumuz sağlıklı olmadığında yeteneklerimizi, düşünme veya hissetme becerilerimizi ve fırsatlarımızı kaybedebiliriz.\n\nHaksız yere yaşanılan herhangi bir zararın sorumluları sonuçlarıyla zaman içinde yüzleşmek zorunda kalır. Çünkü her canlının eşit ve özgür yaşama hakkı vardır. **Herhangi bir inanç veya bakış açısına dayanan kişisel görüşler, doğanın adaletiyle (dengesiyle) örtüşmeyebilir.** Doğanın adaletinin tecelli etmesi gerektiği durumlarda önüne geçebilecek herhangi bir teknoloji ne şu an vardır ne de gelecekte olacaktır.\n\n*Mevcut sistemlerimizde önümüze konulan herhangi bir korku faktörü, aslında geçmişte de olduğu gibi sadece bir meydan okumadır. Eylem-Sonuç ilişkilerini düşünerek doğanın mantığını kavradığınızda, sanılanın aksine herhangi birinin başka birini sebepsizce öldüremeyeceğini görebilirsiniz.*",
      de: "Jeder menschliche Körper beginnt das Leben als ein komplexes System, das die Erfahrungen, Entscheidungen und Prägungen sowohl des Individuums als auch seiner Vorfahren trägt. Ihr Körper ist das gesamte System, wobei jedes Organ als lebenswichtiges Teilsystem dient. Anhand der obigen Beispiele lässt sich erkennen, dass alle genetischen Krankheiten und Umweltnachteile mit dem Verhalten unserer Vorfahren in unserer Umwelt und deren Interaktionen mit der Natur zusammenhängen. Alle Krankheiten können ohne Medikamente geheilt werden, wenn sie gesund sind und die Folgen für die nächsten Generationen positiv sind.\n\n**Wenn ein Virus, Keim oder eine Chemikalie in den Körper gelangt, bewegt es sich auf einem Weg, der durch Ihre Entscheidungen und Handlungen geformt wird.** Das Festhalten an schädlichen Mustern erlaubt es, tiefer einzudringen und die Auswirkungen Ihres Lebens auf Ihren Körper widerzuspiegeln. Wenn Sie beginnen, Ihr eigenes System (Leben und Umwelt) zu verstehen und Ihre Handlungen mit Bewusstsein, Heilung und Erneuerung leiten, stellt der Körper allmählich sein Gleichgewicht wieder her. Heilung fließt natürlich aus der Harmonie, die Sie in sich selbst kultivieren.\n\nÄhnlich gilt **die Organ-Handlung-Ergebnis-Analogie auch für Unfälle.** Jeder Schaden, den Ihr Körper durch einen Unfall erleidet, soll Ihnen eine Lektion erteilen und spiegelt die Handlungen wider, die Sie vor dem Vorfall unternommen haben. Die Art und Weise, wie ein Unfall passiert ist, erklärt Ihre Handlung, die ihn verursacht hat. \n\nIhre geistige Gesundheit wird auch stark von den Folgen Ihrer Beziehungen geprägt. In der Natur können Ihr Gedächtnis, Ihre Gedanken, Emotionen und Gefühle neu geformt, herausgefordert oder sogar ausgelöscht werden, um Gleichgewicht, Gerechtigkeit und Freude für alle wiederherzustellen.\n\nDenken Sie daran, dass die Natur immer die Möglichkeit bietet, Fehler wiedergutzumachen, auch wenn einige Fehler zu irreversiblen Verlusten führen können. Wenn Ihnen Unrecht zugefügt wird, werden diejenigen, die verantwortlich sind, im Laufe der Zeit die Konsequenzen tragen, während Sie sich erholen. **Persönliche Meinungen, die auf irgendeinem Glauben oder einer Perspektive basieren, stimmen möglicherweise nicht mit der Gerechtigkeitsskala der Natur überein.** Es gibt keine Technologie – und wird es auch niemals geben –, die sich der Gerechtigkeit der Natur in den Weg stellen kann, wenn sie sich durchsetzen muss.",
      fr: "Chaque corps humain commence la vie en tant que système complexe, portant les expériences, les choix et les empreintes à la fois de l'individu et de ses ancêtres. Votre corps est l'ensemble du système, chaque organe servant de sous-système vital. En suivant les exemples ci-dessus, vous constaterez que toutes les maladies génétiques et tous les désavantages environnementaux sont liés aux actions menées par vos ancêtres dans votre environnement et à leurs interactions avec la nature. Toutes les maladies peuvent être guéries sans médicament lorsque les actions et les interactions sont saines, et les résultats peuvent contribuer à l'épanouissement des générations futures.\n\n**Lorsqu'un virus, un germe ou un produit chimique pénètre dans le corps, il suit un chemin façonné par vos choix et actions.** Persister dans des schémas nuisibles permet à cela de s'enfoncer plus profondément, reflétant les effets de votre vie sur votre corps. À mesure que vous commencez à comprendre votre propre système (vie et environnement) et à guider vos actions avec conscience, guérison et renouveau, le corps restaure progressivement son équilibre. La récupération découle naturellement de l'harmonie que vous cultivez à l'intérieur.\n\nDe même, **l'analogie Organe-Action-Sonséquence s'applique également aux accidents.** Tout dommage que votre corps subit à la suite d'un accident est destiné à vous enseigner une leçon, reflétant les actions que vous avez entreprises avant l'incident. La façon dont un accident s'est produit explique votre action qui l'a causé.\n\nVotre santé mentale est également profondément façonnée par les conséquences de vos relations. Dans la nature, votre mémoire, vos pensées, vos émotions et vos sentiments peuvent être remodelés, remis en question, voire effacés pour rétablir l'équilibre, la justice et la joie pour tous.\n\nN'oubliez pas que la nature offre toujours l'occasion de réparer vos erreurs, bien que certaines erreurs puissent entraîner des pertes irréversibles. Si vous êtes lésé de manière injuste, les responsables feront face à des conséquences au fil du temps alors que vous vous rétablissez. **Les opinions personnelles basées sur une croyance ou une perspective quelconque peuvent ne pas être en accord avec l'échelle de justice de la nature.** Aucune technologie n'existe — et n'existera jamais — qui puisse faire obstacle à la justice de la nature lorsqu'elle doit prévaloir."
    }),
    examples: [
      t({
        en: "",
        tr: "Gözün işlevleri: Görme, odaklanma, renk algısı, ışık miktarını ayarlama...\n\nÖrnekler: Zayıf görme yeteneği, birinin yolunu engellediğiniz anları veya fırsatlarına göz yumduğunuz zamanları yansıtır. Odaklanma eylemine yönelik yarattığınız olumsuzluklar, gözünüzdeki odaklanmaya yansır. ",
        de: "",
        fr: ""
      }),
      t({
        en: "",
        tr: "Kulağın işlevleri: İşitme, denge, yön tayini...\n\nÖrnekler: İşitme duyunuzun azalması, birinin yardım çığlığını veya isteğini duymazdan geldiğiniz veya yön bulmasını engellediğiniz zamanları yansıtır.",
        de: "Wenn Ihr Gehör nachgelassen hat, kann es Zeiten widerspiegeln, in denen Sie die Stimme oder den Hilferuf von jemandem ignoriert haben oder als Sie die Freiheit eines anderen, gehört zu werden, zum Schweigen gebracht haben.",
        fr: "Si votre audition a diminué, cela peut refléter les moments où vous avez ignoré la voix ou l’appel à l’aide de quelqu’un, ou lorsque vous avez réduit au silence la liberté d’un autre d’être entendu."
      }),
      t({
        en: "",
        tr: "Kalbin işlevleri: Kan pompalama, dolaşım, şefkatle bağlantı kurma...\n\nÖrnekler: Birinin yaşamında yarattığınız zorluklar kalp damarlarınıza ve kan dolaşımınıza yansır. Kalp krizi riski artar.",
        de: "",
        fr: ""
      }),
      t({
        en: "If you've experienced a form of cancer, it may symbolize the harm or suffering you once caused — perhaps taking a life or inflicting deep pain on another living being.",
        tr: "Eğer vücudunuzda ağrılar varsa, ağrının olduğu bölgenin amacını yansıtan eylemleriniz olmuş demektir.\n\nEğer kansere yakalandıysanız bir canı aldınız veya bir canlıya derin acılar yaşattınız demektir.",
        de: "",
        fr: ""
      })
    ],
  },
} satisfies Dictionary;

export default pageContent;
