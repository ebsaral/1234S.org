import { t, type Dictionary } from "intlayer";

const pageContent = {
  key: "project-section",
  content: {
    title: t({
      en: "Project: A Philosophical Movement",
      tr: "Proje: Bir Felsefi Akım",
      de: "Projekt: Eine Philosophische Bewegung",
      fr: "Projet: Un Mouvement Philosophique"
    }),
    quote: t({
      en: "Better health. More luck. Countless opportunities.",
      tr: "Daha iyi sağlık. Daha fazla şans. Sayısız fırsat.",
      de: "Bessere Gesundheit. Mehr Glück. Unzählige Möglichkeiten.",
      fr: "Meilleure santé. Plus de chance. D'innombrables opportunités.",
    }),
    description: t({
      en: "Through **Logical Spirituality**, we have learned how the principles of **Equality and Freedom** exist in nature. By expanding on this fundamental knowledge, we can improve the health conditions of the environments we share.\n\nIt is possible to live in an educated society where we never get sick or have accidents. It is also possible to bring luck together with opportunities to everyone's lives.",
      tr: "*Mantıklı Maneviyat* aracılığıyla, **Eşitlik ve Özgürlük** ilkelerinin doğada nasıl var olduğunu öğrendik. Bu temel bilgiyi genişleterek, paylaştığımız çevrelerin sağlık koşullarını iyileştirebiliriz. *Hiç hasta olmadığımız veya kaza geçirmediğimiz eğitimli bir toplumda yaşamak mümkündür.* Ayrıca, şansı fırsatlarla birlikte herkesin hayatına getirmek de mümkündür.",
      de: "Durch **Logische Spiritualität** haben wir gelernt, wie die Prinzipien von **Gleichheit und Freiheit** in der Natur existieren. Indem wir dieses grundlegende Wissen erweitern, können wir die Gesundheitsbedingungen unserer gemeinsamen Umwelt verbessern.\n\nEs ist möglich, in einer aufgeklärten Gesellschaft zu leben, in der wir weder krank werden noch Unfälle haben. Es ist auch möglich, Glück und Chancen in das Leben aller Menschen zu bringen.",
      fr: "Grâce à la **spiritualité logique**, nous avons appris comment les principes d'**égalité et de liberté** se manifestent dans la nature. En approfondissant cette connaissance fondamentale, nous pouvons améliorer la santé des environnements que nous partageons. Il est possible de vivre dans une société instruite où la maladie et les accidents sont inexistants. Il est également possible d'offrir à chacun la chance et les opportunités."
    }),
    items: [
      {
        title: t({
          en: "Health",
          tr: "Sağlık",
          de: "Gesundheit",
          fr: "Santé"
        }),
        subtitle: t({
          en: "We can treat all diseases without medication. To be able to live in a healthy society, living conditions must be developed for everyone so that negative actions are not repeated after treatments. Because a healthy life is a fundamental right for every person.\n\nThe increase in the number of hospitals and medicines in countries proves that the general health of society is deteriorating and negative actions are increasing. Therefore, opening a hospital is not a success, but a cry for help.\n\nWhile you are reading this text right now, someone is suffering in a hospital, having an accident somewhere, or losing their lives... The fact that a worker who performs any action faces nature's justice proves that responsibilities must be shared equally.",
          tr: "İlaç kullanmadan bütün hastalıkları tedavi edebiliriz. Sağlıklı bir toplumda yaşayabilmek için, tedavilerden sonra olumsuz davranışların tekrarlanmaması için herkes için yaşam koşullarının geliştirilmesi gerekir. Çünkü sağlıklı bir yaşam her insan için temel bir haktır. Ülkelerdeki hastane ve ilaç sayısının artması, toplumun genel sağlığının kötüleştiğini ve olumsuz davranışların arttığını kanıtlıyor. Dolayısıyla bir hastane açmak bir başarı değil, bir yardım çağrısıdır. Şu anda bu metni okurken, biri hastanede acı çekiyor, bir kaza geçiriyor veya hayatını kaybediyor... Herhangi bir eylemde bulunan bir işçinin doğanın adaletiyle karşı karşıya kalması, sorumlulukların eşit olarak paylaşılması gerektiğini kanıtlıyor.",
          de: "Wir können alle Krankheiten ohne Medikamente behandeln. Um in einer gesunden Gesellschaft leben zu können, müssen die Lebensbedingungen für alle so gestaltet werden, dass sich negative Folgen nach Behandlungen nicht wiederholen. Denn ein gesundes Leben ist ein grundlegendes Menschenrecht.\n\nDie Zunahme der Anzahl von Krankenhäusern und Medikamenten in den Ländern beweist, dass sich der allgemeine Gesundheitszustand der Gesellschaft verschlechtert und negative Folgen zunehmen. Daher ist die Eröffnung eines Krankenhauses kein Erfolg, sondern ein Hilferuf.\n\nWährend Sie diesen Text lesen, leidet jemand in einem Krankenhaus, hat irgendwo einen Unfall oder verliert sein Leben… Die Tatsache, dass jeder Arbeiter, der eine bestimmte Handlung ausführt, mit den Folgen der Natur konfrontiert wird, beweist, dass die Verantwortung gleichmäßig verteilt sein muss.",
          fr: "Nous pouvons soigner toutes les maladies sans médicaments. Pour vivre dans une société saine, il est essentiel d'améliorer les conditions de vie de chacun afin d'éviter les rechutes après un traitement. Car la santé est un droit fondamental.\n\nL'augmentation du nombre d'hôpitaux et de médicaments dans les pays témoigne de la détérioration de l'état de santé général et de la multiplication des comportements à risque. Ouvrir un hôpital n'est donc pas une réussite, mais un cri de détresse.\n\nAu moment même où vous lisez ces lignes, quelqu'un souffre à l'hôpital, est victime d'un accident ou perd la vie… Le fait que tout travailleur soit confronté aux aléas de la vie prouve que les responsabilités doivent être partagées équitablement.",
        }),
      },
      {
        title: t({
          en: "Education",
          tr: "Eğitim",
          de: "Bildung",
          fr: "Éducation"
        }),
        subtitle: t({
          en: "Teaching the truth of justice in nature in detail to every person is necessary for the rights and potentials of all living beings. The increase in quality of life in line with the principles of Equality and Freedom positively reflects on the entire society.\n\nEveryone can learn how to gain and shape more talents, how to align social interactions better with nature's luck scale, how to improve any business in a more healthy way and how to unlock more gifts that are visibly hidden in nature's offerings. Exploring the interconnectedness of philosophy, psychology, sociology, and related fields better in depth can improve everyone's understanding of life and their potentials.",
          tr: "Doğadaki adalet gerçeğini her insana ayrıntılı olarak öğretmek, tüm canlıların hakları ve potansiyelleri için gereklidir. Eşitlik ve Özgürlük ilkeleri doğrultusunda yaşam kalitesindeki artış, tüm topluma olumlu yansır.\n\nHerkes daha fazla yetenek edinmeyi ve şekillendirmeyi, sosyal etkileşimleri doğanın şans ölçeğiyle daha iyi uyumlu hale getirmeyi, herhangi bir işi daha sağlıklı bir şekilde nasıl geliştireceğini ve doğanın sunduklarında açıkça gizlenmiş daha fazla yeteneği nasıl ortaya çıkaracağını öğrenebilir. Felsefe, psikoloji, sosyoloji ve ilgili alanların birbiriyle olan bağlantısını daha derinlemesine incelemek, herkesin yaşam ve potansiyelleri hakkındaki anlayışını geliştirebilir.",
          de: "Die detaillierte Vermittlung der Gerechtigkeitsprinzipien der Natur an jeden Einzelnen ist unerlässlich für die Rechte und das Potenzial aller Lebewesen. Eine Steigerung der Lebensqualität im Einklang mit den Prinzipien der Gleichheit und Freiheit wirkt sich positiv auf die gesamte Gesellschaft aus.\n\nJeder kann lernen, seine Talente zu entfalten und weiterzuentwickeln, soziale Interaktionen besser mit den natürlichen Gegebenheiten in Einklang zu bringen, Unternehmen nachhaltiger zu führen und verborgene Gaben der Natur zu entdecken. Ein tieferes Verständnis der Zusammenhänge zwischen Philosophie, Psychologie, Soziologie und verwandten Disziplinen kann das Verständnis des Lebens und der eigenen Potenziale erweitern.",
          fr: "Il est essentiel d'enseigner en détail à chacun la vérité de la justice naturelle pour le respect des droits et du potentiel de tous les êtres vivants. L'amélioration de la qualité de vie, conforme aux principes d'égalité et de liberté, a un impact positif sur l'ensemble de la société.\n\nChacun peut apprendre à développer ses talents, à mieux harmoniser ses interactions sociales avec les lois de la nature, à optimiser ses activités professionnelles et à révéler les dons que la nature nous offre. Approfondir l'interconnexion entre la philosophie, la psychologie, la sociologie et les disciplines connexes permet à chacun de mieux comprendre la vie et son potentiel."
        }),
      },
      {
        title: t({
          en: "Environment",
          tr: "Çevre",
          de: "Umwelt",
          fr: "Environnement"
        }),
        subtitle: t({
          en: "Since every creation and action in nature has consequences, environmental awareness must comply with the principles of equality and freedom in all areas.\n\nEngineering, architecture, urban planning, transportation, energy production, and all other fields must develop in accordance with the truth of justice in nature.\n\nFor example: Even moving a single paving stone can harm the health of the person who moved it. User interfaces must align with good intentions to prevent negative actions from occurring through their use.",
          tr: "Doğadaki her yaratılış ve eylemin sonuçları olduğundan, çevre bilinci tüm alanlarda eşitlik ve özgürlük ilkelerine uymalıdır.\n\nMühendislik, mimarlık, şehir planlaması, ulaşım, enerji üretimi ve diğer tüm alanlar, doğadaki adalet gerçeğine uygun olarak gelişmelidir.\n\nÖrneğin: Tek bir kaldırım taşını hareket ettirmek bile, onu hareket ettiren kişinin sağlığına zarar verebilir. Kullanıcı arayüzleri, olumsuz eylemlerin kullanım yoluyla gerçekleşmesini önlemek için iyi niyetlerle uyumlu olmalıdır.",
          de: "Da jede Schöpfung und Handlung in der Natur Konsequenzen hat, muss das Umweltbewusstsein in allen Bereichen den Prinzipien von Gleichheit und Freiheit entsprechen.\n\nIngenieurwesen, Architektur, Stadtplanung, Transport, Energieerzeugung und alle anderen Bereiche müssen sich im Einklang mit der Wahrheit der Gerechtigkeit in der Natur entwickeln.\n\nZum Beispiel: Selbst das Bewegen eines einzigen Pflastersteins kann die Gesundheit der Person schädigen, die ihn bewegt hat. Benutzeroberflächen müssen mit guten Absichten übereinstimmen, um zu verhindern, dass durch ihre Nutzung negative Handlungen auftreten.",
          fr: "Puisque chaque création et action dans la nature a des conséquences, la sensibilisation à l'environnement doit respecter les principes d'égalité et de liberté dans tous les domaines.\n\nL'ingénierie, l'architecture, l'urbanisme, le transport, la production d'énergie et tous les autres domaines doivent se développer conformément à la vérité de la justice dans la nature.\n\nPar exemple : Même déplacer une seule pierre pavée peut nuire à la santé de la personne qui l'a déplacée. Les interfaces utilisateur doivent s'aligner sur de bonnes intentions pour empêcher que des actions négatives ne se produisent par leur utilisation.",
        }),
      },
      {
        title: t({
          en: "Life",
          tr: "Yaşam",
          de: "Leben",
          fr: "Vie"
        }),
        subtitle: t({
          en: "Any idea, invention, or product emerges through the inspiration (means) of living beings within the environment. Therefore, every gain must be, and already is, a collective gain for society.\n\nIn nature, where everything is free, the struggles for livelihood, stress, selfishness, inequality of opportunities, and all other negatives are obstacles to a healthy life. By realizing that we have come to life to truly live, we must benefit from the resources of the environment in a way that considers everyone's well-being.",
          tr: "Herhangi bir fikir, buluş veya ürün, çevredeki canlıların ilhamıyla (aracılığıyla) ortaya çıkar. Bu nedenle, her kazanım toplum için kolektif bir kazanım olmalıdır ve zaten öyledir. Her şeyin bedava olduğu doğada, geçim mücadelesi, stres, bencillik, fırsat eşitsizliği ve diğer tüm olumsuzluklar sağlıklı bir yaşamın önündeki engellerdir. Yaşamak için dünyaya geldiğimizi fark ederek, çevrenin kaynaklarını herkesin refahını gözetecek şekilde değerlendirmeliyiz.",
          de: "Jede Idee, Erfindung und jedes Produkt entsteht durch die Inspiration (die Mittel) der Lebewesen in unserer Umwelt. Daher muss jeder Gewinn ein kollektiver Gewinn für die Gesellschaft sein – und ist es bereits.\n\nIn der Natur, wo alles frei ist, stellen der Kampf ums Überleben, Stress, Egoismus, ungleiche Chancen und alle anderen negativen Einflüsse Hindernisse für ein gesundes Leben dar. Indem wir erkennen, dass wir zum Leben geboren sind, müssen wir die Ressourcen der Umwelt so nutzen, dass das Wohlbefinden aller berücksichtigt wird.",
          fr: "Toute idée, invention ou produit naît de l'inspiration des êtres vivants qui nous entourent. Par conséquent, tout progrès est, et doit être, un progrès collectif pour la société. Dans la nature, où tout est gratuit, la lutte pour la survie, le stress, l'égoïsme, l'inégalité des chances et tous les autres aspects négatifs sont autant d'obstacles à une vie saine. Conscients que nous sommes venus au monde pour vivre pleinement, nous devons tirer profit des ressources de l'environnement en veillant au bien-être de tous.",
        }),
      }
    ],
        message: {
      title: t({
        en: "Nature's justice is in constant motion!",
        tr: "Doğadaki adalet sürekli hareket halinde!",
        de: "Die Gerechtigkeit der Natur ist in ständiger Bewegung!",
        fr: "La justice de la nature est en mouvement constant!"
      }),
      quote:  t({
        en: "We can raise awareness in people so that they can see the logic in nature and together we can heal the mistakes that repeat in our life cycles.",
        tr: "İnsanların doğadaki mantığı görebilmeleri için farkındalık kazandırabiliriz ve birlikte yaşam döngülerimizde tekrarlanan hataları iyileştirebiliriz.",
        de: "Wir können das Bewusstsein der Menschen schärfen, damit sie die Logik der Natur erkennen, und gemeinsam können wir die Fehler heilen, die sich in unseren Lebenszyklen wiederholen.",
        fr: "Nous pouvons sensibiliser les gens afin qu’ils puissent voir la logique dans la nature et ensemble, nous pouvons guérir les erreurs qui se répètent dans nos cycles de vie.",
      })
    },
    status: {
      title: t({
          en: "Current Status",
          tr: "Güncel Durum",
          de: "Aktueller Status",
          fr: "Statut actuel"
        }),
      items: [
        t({
          en: "I am looking for a team or organization with whom I can continue my work on the principles of nature with details.",
          tr: "Doğanın ilkeleri üzerinde çalışmalarımı detaylandırarak devam ettirebileceğim bir ekip veya organizasyon arıyorum.",
          de: "Ich suche ein Team oder eine Organisation, mit der ich meine Arbeit an den Prinzipien der Natur im Detail fortsetzen kann.",
          fr: "Je recherche une équipe ou une organisation avec laquelle je peux poursuivre mon travail sur les principes de la nature en détail.",
        }),
        t({
          en: "I would like to apply this philosophical movement's details into real-world applications. Example ideas: Building an Education and Healing platform, consultancy for any business and/or non-profit project, contributing to environmental projects, etc.",
          tr: "Bu felsefi akımın ayrıntılarını gerçek dünya uygulamalarına aktarmak istiyorum. Örnek fikirler: Bir Eğitim ve İyileştirme platformu kurmak, herhangi bir işletme ve/veya kâr amacı gütmeyen proje için danışmanlık yapmak, çevre projelerine katkıda bulunmak vb.",
          de: "Ich möchte diese Philosophie in der Praxis umsetzen. Beispiele: Aufbau einer Bildungs- und Heilungsplattform, Beratung von Unternehmen und/oder gemeinnützigen Organisationen, Mitarbeit an Umweltprojekten usw.",
          fr: "J'aimerais concrétiser cette philosophie par des applications pratiques. Par exemple: créer une plateforme d'éducation et de bien-être, proposer des services de conseil aux entreprises et/ou aux associations, contribuer à des projets environnementaux, etc."
        })
      ],
    },
    contact: {
      title: t({
        en: "Project Leader",
        tr: "Proje Lideri",
        de: "Projektleiter",
        fr: "Chef de projet"
      }),
      leader: {
        text: "Emin Buğra Saral",
        href: t({
          en: "https://0.1234s.org/en",
          tr: "https://0.1234s.org/tr",
          de: "https://0.1234s.org/en",
          fr: "https://0.1234s.org/en"
        }),
        description: t({
          en: "The Spirit Guide and Computer Engineer",
          tr: "Maneviyat Rehberi ve Bilgisayar Mühendisi",
          de: "Der Geistführer und Computeringenieur",
          fr: "Le guide spirituel et ingénieur informatique"
        })
      },
      resume: {
        text: t({
          en: "(Résumé)",
          tr: "(Öz Geçmiş)",
          de: "(Lebenslauf)",
          fr: "(Résumé)"
        }),
        href: t({
          en: "https://0.1234s.org/files/cv/english.pdf",
          tr: "https://0.1234s.org/files/cv/turkish.pdf",
          de: "https://0.1234s.org/files/cv/english.pdf",
          fr: "https://0.1234s.org/files/cv/english.pdf"
        }),
      },
      note: t({
        en: "If you would like to help me in any way or benefit from my experience, you can use the contact options below.",
        tr: "Bana herhangi bir şekilde yardımcı olmak veya deneyimlerimden faydalanmak isterseniz, aşağıdaki iletişim seçeneklerini kullanabilirsiniz.",
        de: "Wenn Sie mich unterstützen oder von meinen Erfahrungen profitieren möchten, nutzen Sie bitte die unten stehenden Kontaktmöglichkeiten.",
        fr: "Si vous souhaitez m'aider de quelque manière que ce soit ou bénéficier de mon expérience, vous pouvez utiliser les options de contact ci-dessous."
      })
    },
  },
} satisfies Dictionary;

export default pageContent;
