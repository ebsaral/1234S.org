import { t, type Dictionary } from "intlayer";

const pageContent = {
  key: "project-section",
  content: {
    title: t({
      en: "Project: A philosophical movement",
      tr: "Proje: Felsefi bir akım",
      de: "Projekt: Eine philosophische Bewegung",
      fr: "Projet: Un mouvement philosophique"
    }),
    quote: t({
      en: "Better health. More luck. Countless opportunities.",
      tr: "Daha iyi sağlık. Daha fazla şans. Sayısız fırsat.",
      de: "Bessere Gesundheit. Mehr Glück. Unzählige Möglichkeiten.",
      fr: "Meilleure santé. Plus de chance. D'innombrables opportunités.",
    }),
    description: t({
      en: "Through **Logical Spirituality**, we have learned how the principles of **Equality and Freedom** exist in nature. By expanding on this fundamental knowledge, we can improve the health conditions of the environments we live in. *It is possible to live in an educated society where we never get sick or have accidents.* It is also possible to bring luck together with opportunities to everyone's lives.",
      tr: "*Mantıklı Maneviyat* aracılığıyla, **Eşitlik ve Özgürlük** ilkelerinin doğada nasıl var olduğunu öğrendik. Bu temel bilgiyi genişleterek, yaşadığımız ortamların sağlık koşullarını iyileştirebiliriz. *Hiç hasta olmadığımız veya kaza geçirmediğimiz eğitimli bir toplumda yaşamak mümkündür.* Ayrıca, şansı fırsatlarla birlikte herkesin hayatına getirmek de mümkündür.",
      de: "Durch **Logische Spiritualität** haben wir gelernt, wie die Prinzipien von **Gleichheit und Freiheit** in der Natur existieren. Indem wir dieses grundlegende Wissen erweitern, können wir die Gesundheitsbedingungen der Umgebungen, in denen wir leben, verbessern. *Es ist möglich, in einer gebildeten Gesellschaft zu leben, in der wir nie krank werden oder Unfälle haben.* Es ist auch möglich, Glück zusammen mit Chancen in das Leben aller zu bringen.",
      fr: "Grâce à la **Spiritualité Logique**, nous avons appris comment les principes d'**Égalité et de Liberté** existent dans la nature. En élargissant cette connaissance fondamentale, nous pouvons améliorer les conditions de santé des environnements dans lesquels nous vivons. *Il est possible de vivre dans une société éduquée où nous ne tombons jamais malades ou n'avons pas d'accidents.* Il est également possible d'apporter la chance avec des opportunités dans la vie de chacun."
    }),
    message: {
      title: t({
        en: "Nature's justice is in constant motion!",
        tr: "Doğadaki adalet sürekli hareket halinde!",
        de: "Die Gerechtigkeit der Natur ist in ständiger Bewegung!",
        fr: "La justice de la nature est en mouvement constant!"
      }),
      quote:  t({
        en: "We can raise awareness in people so that they can see the logic in nature and together we can heal the mistakes that repeat in our life cycles.",
        tr: "İnsanların doğadaki mantığı görebilmeleri için farkındalığı artırabiliriz ve birlikte yaşam döngülerimizde tekrarlanan hataları iyileştirebiliriz.",
        de: "Wir können das Bewusstsein der Menschen schärfen, damit sie die Logik der Natur erkennen, und gemeinsam können wir die Fehler heilen, die sich in unseren Lebenszyklen wiederholen.",
        fr: "Nous pouvons sensibiliser les gens afin qu’ils puissent voir la logique dans la nature et ensemble, nous pouvons guérir les erreurs qui se répètent dans nos cycles de vie.",
      })
    },
    items: [
      {
        title: t({
          en: "Health",
          tr: "Sağlık",
          de: "Gesundheit",
          fr: "Santé"
        }),
        subtitle: t({
          en: "It is possible to treat all diseases without medication. To be able to live in a healthy society, living conditions must be developed for everyone so that negative actions are not repeated after treatments. Because a healthy life is a fundamental right for every person.\n\nThe increase in the number of hospitals and medicines in countries proves that the general health of society is deteriorating and negative actions are increasing. Therefore, opening a hospital is not a success, but a cry for help.\n\nWhile you are reading this text right now, someone is suffering in a hospital, having an accident somewhere, or losing their lives... The fact that a worker who performs any action faces nature's justice proves that responsibilities must be shared equally.",
          tr: "Tüm hastalıkların ilaçsız tedavi edilebilmesi mümkündür. Sağlıklı bir toplumda yaşayabilmek için, tedavilerden sonra olumsuz davranışların tekrarlanmaması için herkes için yaşam koşulları geliştirilmelidir. Çünkü sağlıklı bir yaşam her insanın temel hakkıdır.\n\nÜlkelerdeki hastane ve ilaç sayısındaki artış, toplumun genel sağlığının kötüleştiğini ve olumsuz davranışların arttığını kanıtlıyor. Bu nedenle bir hastanenin açılması bir başarı değil, bir yardım çağrısıdır.\n\nSiz bu metni şu an okurken, birileri bir hastanede acı çekiyor, bir yerde kaza geçiriyor veya hayatını kaybediyor... Herhangi bir eylemi gerçekleştiren bir işçinin doğanın adaletiyle karşı karşıya kalması, sorumlulukların eşit olarak paylaşılması gerektiğini kanıtlar.",
          de: "Es ist möglich, alle Krankheiten ohne Medikamente zu behandeln. Um in einer gesunden Gesellschaft leben zu können, müssen die Lebensbedingungen für alle so entwickelt werden, dass negative Handlungen nach den Behandlungen nicht wiederholt werden. Denn ein gesundes Leben ist ein Grundrecht für jeden Menschen.\n\nDie Zunahme der Anzahl von Krankenhäusern und Medikamenten in den Ländern beweist, dass die allgemeine Gesundheit der Gesellschaft sich verschlechtert und negative Handlungen zunehmen. Daher ist die Eröffnung eines Krankenhauses kein Erfolg, sondern ein Hilferuf.\n\nWährend Sie diesen Text gerade lesen, leidet irgendwo jemand in einem Krankenhaus, hat einen Unfall oder verliert sein Leben... Wenn Sie sich darüber keine Gedanken machen möchten, müssen Sie auf die Kosten des Produkts achten.",
          fr: "Il est possible de traiter toutes les maladies sans médicaments. Pour pouvoir vivre dans une société saine, les conditions de vie doivent être développées pour que les actions négatives ne se répètent pas après les traitements. Car une vie saine est un droit fondamental pour chaque personne.\n\nL'augmentation du nombre d'hôpitaux et de médicaments dans les pays prouve que la santé générale de la société se détériore et que les actions négatives augmentent. Par conséquent, ouvrir un hôpital n'est pas un succès, mais un appel à l'aide.\n\nPendant que vous lisez ce texte en ce moment, quelqu'un souffre dans un hôpital, a un accident quelque part ou perd la vie... Si vous avez des problèmes avec votre système d'adaletiyle karşı ya kalması, sorumlulukların eşit olarak paylaşılması gerektiğini kanıtlar.",
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
          en: "The increase in quality of life in line with the principles of Equality and Freedom positively reflects on the entire society. Teaching the truth of justice in nature in detail to every person is necessary for the rights and potentials of all living beings.\n\nEveryone can learn how to gain and shape more talents, how to align social interactions better with nature's luck scale, how to improve any business in a more healthy way and how to unlock more gifts that are visibly hidden in nature's offerings. Exploring the interconnectedness of philosophy, psychology, sociology, and related fields better in depth can improve everyone's understanding of life and potential.",
          tr: "Eşitlik ve Özgürlük ilkeleri doğrultusunda yaşam kalitesinin artması tüm topluma olumlu yansır. Doğadaki adalet gerçeğini her insana ayrıntılı olarak öğretmek, tüm canlıların hakları ve potansiyelleri için gereklidir.\n\nHerkes, daha fazla yetenek kazanmayı ve şekillendirmeyi, sosyal etkileşimleri doğanın şans ölçeğiyle nasıl daha iyi hizalayacağını, herhangi bir işi nasıl daha sağlıklı bir şekilde geliştireceğini ve doğanın sunduklarında görünür şekilde gizlenmiş daha fazla hediyeyi nasıl açığa çıkaracağını öğrenebilir. Felsefe, psikoloji, sosyoloji ve ilgili alanların birbirine bağlılığını daha derinlemesine keşfetmek, herkesin yaşam anlayışını ve potansiyelini geliştirebilir.",
          de: "Die Steigerung der Lebensqualität im Einklang mit den Prinzipien der Gleichheit und Freiheit wirkt sich positiv auf die gesamte Gesellschaft aus. Jedem Menschen die Wahrheit der Gerechtigkeit in der Natur detailliert zu vermitteln, ist unerlässlich für die Rechte und das Potenzial aller Lebewesen.\n\nJeder kann lernen, wie er seine Talente weiterentwickeln und entfalten, soziale Interaktionen besser mit den natürlichen Gesetzmäßigkeiten in Einklang bringen, Unternehmen nachhaltiger führen und verborgene Gaben der Natur entdecken kann. Ein tieferes Verständnis der Zusammenhänge zwischen Philosophie, Psychologie, Soziologie und verwandten Disziplinen kann das Verständnis von Leben und Potenzial erweitern.",
          fr: "L'amélioration de la qualité de vie, conforme aux principes d'égalité et de liberté, a un impact positif sur l'ensemble de la société. Il est essentiel d'enseigner à chacun la vérité de la justice naturelle, en détail, afin de garantir les droits et le plein épanouissement de tous les êtres vivants. Chacun peut apprendre à développer ses talents, à mieux harmoniser ses interactions sociales avec les forces de la nature, à améliorer ses activités professionnelles de manière plus saine et à révéler les dons que la nature nous offre. Approfondir l'interconnexion entre la philosophie, la psychologie, la sociologie et les disciplines connexes permet à chacun de mieux comprendre la vie et son potentiel."
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
          en: "Any idea, invention, or product emerges through the inspiration (means) of living beings within the environment. Therefore, every gain must be a collective gain for society.\n\nIn nature, where everything is free, the struggles for livelihood, stress, selfishness, inequality of opportunities, and all other negatives are obstacles to a healthy life. By realizing that we have come to life to truly live, we must use the resources of the environment in a way that considers everyone's well-being.",
          tr: "Herhangi bir fikir, buluş veya ürün, çevre içindeki canlıların ilhamı (araçları) aracılığıyla ortaya çıkar. Bu nedenle, her kazanç toplum için kolektif bir kazanç olmalıdır.\n\nHer şeyin ücretsiz olduğu doğada, geçim mücadelesi, stres, bencillik, fırsat eşitsizliği ve diğer tüm olumsuzluklar sağlıklı bir yaşamın önündeki engellerdir. Gerçekten yaşamak için hayata geldiğimizi fark ederek, çevrenin kaynaklarını herkesin refahını dikkate alan bir şekilde kullanmalıyız.",
          de: "Jede Idee, Erfindung oder jedes Produkt entsteht durch die Inspiration (Mittel) von Lebewesen innerhalb der Umgebung. Daher muss jeder Gewinn ein kollektiver Gewinn für die Gesellschaft sein.\n\nIn der Natur, in der alles frei ist, sind die Kämpfe um den Lebensunterhalt, Stress, Egoismus, Ungleichheit der Chancen und alle anderen Negativen Hindernisse für ein gesundes Leben. Indem wir erkennen, dass wir zum Leben gekommen sind, um wirklich zu leben, müssen wir die Ressourcen der Umwelt auf eine Weise nutzen, die das Wohlbefinden aller berücksichtigt.",
          fr: "Toute idée, invention ou produit émerge grâce à l'inspiration (moyens) des êtres vivants au sein de l'environnement. Par conséquent, chaque gain doit être un gain collectif pour la société.\n\nDans la nature, où tout est gratuit, les luttes pour la subsistance, le stress, l'égoïsme, l'inégalité des chances et tous les autres aspects négatifs sont des obstacles à une vie saine. En réalisant que nous sommes venus à la vie pour vraiment vivre, nous devons utiliser les ressources de l'environnement d'une manière qui prend en compte le bien-être de tous.",
        }),
      }
    ],
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
          en: "I would like to convert this philosophical movement into real-world applications together. Example ideas: Building an Education and Healing platform, consultancy for business and/or non-profit projects, contributing to environmental projects, etc.",
          tr: "Bu felsefi hareketi gerçek dünya uygulamalarına  dönüştürmek istiyorum. Örnek fikirler: Eğitim ve İyileştirme platformu oluşturmak, şirketler ve/veya kar amacı gütmeyen projeler için danışmanlık, çevresel projelere katkıda bulunmak, vb.",
          de: "Ich möchte diese philosophische Bewegung gemeinsam in reale Anwendungen umsetzen. Beispielideen: Aufbau einer Bildungs- und Heilungsplattform, Beratung für Geschäfts- und/oder Non-Profit-Projekte, Beitrag zu Umweltprojekten usw.",
          fr: "J'aimerais convertir ce mouvement philosophique en applications réelles ensemble. Idées d'exemples : Construire une plateforme d'éducation et de guérison, conseil pour des projets commerciaux et/ou à but non lucratif, contribution à des projets environnementaux, etc."
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
