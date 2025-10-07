import { t, type Dictionary } from "intlayer";

const pageContent = {
  key: "movement-section",
  content: {
    title: t({
      en: "Project: Time for Action",
      tr: "Proje: Hareket Vakti",
      de: "Projekt: Zeit für Bewegung",
      fr: "Projet : Il est temps d’agir"
    }),
    quote: t({
      en: "I think you might want to support this project.",
      tr: "Bence bu projeye destek olmak isteyebilirsiniz.",
      de: "Ich denke, Sie möchten dieses Projekt vielleicht unterstützen.",
      fr: "Je pense que vous voudrez peut-être soutenir ce projet.",
    }),
    description: t({
      en: "Through **Logical Spirituality**, we have learned how the principles of **Equality and Freedom** exist in nature. By expanding on this fundamental knowledge, we must improve the health conditions of the societies we live in.\n\nWhile you are reading this text right now, someone is suffering in a hospital, having an accident somewhere, or losing their life. **It is possible to live in an (educated) society where we never get sick or have accidents.**",
      tr: "**Eşitlik ve Özgürlük** ilkelerinin doğada nasıl var olduklarını **Mantıksal Maneviyat** aracılığıyla öğrenmiş olduk. Bu temel bilgileri detaylandırarak, içinde yaşadığımız toplumların sağlık koşullarını iyileştirmemiz gerekiyor.\n\nSiz şu an bu yazıyı okurken, birileri hastanede acı çekiyor, bir yerlerde kaza geçiriyor veya hayattan kopuyor. **Hiç hastalanmadığımız ve kaza geçirmediğimiz (eğitimli) bir toplumda yaşamamız mümkün.**",
      de: "Durch die **Logische Spiritualität** haben wir gelernt, wie die Prinzipien von **Gleichheit und Freiheit** in der Natur existieren. Indem wir dieses grundlegende Wissen vertiefen, müssen wir die Gesundheitsbedingungen der Gesellschaften, in denen wir leben, verbessern.\n\nWährend Sie diesen Text lesen, leidet jemand im Krankenhaus, erleidet irgendwo einen Unfall oder verliert sein Leben. **Es ist möglich, in einer (gebildeten) Gesellschaft zu leben, in der wir niemals krank werden oder Unfälle haben.**",
      fr: "Grâce à la **Spiritualité Logique**, nous avons appris comment les principes d’**Égalité et de Liberté** existent dans la nature. En approfondissant ces connaissances fondamentales, nous devons améliorer les conditions de santé des sociétés dans lesquelles nous vivons.\n\nPendant que vous lisez ce texte, quelqu’un souffre à l’hôpital, subit un accident quelque part ou perd la vie. **Il est possible de vivre dans une société (éduquée) où nous ne tombons jamais malades et ne subissons aucun accident.**"
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
          en: "It is possible to treat all diseases without medication. To be able to live in a healthy society, living conditions must be developed for everyone so that negative actions are not repeated after treatments. Because a healthy life is a fundamental right for every person.\n\nThe increase in the number of hospitals and medicines in countries proves that the general health of society is deteriorating and negative actions are increasing. Therefore, opening a hospital is not a success, but a cry for help.",
          tr: "Tüm hastalıkların ilaçsız tedavisi mümkün. Sağlıklı bir toplumda yaşayabilmek için, tedaviler ardından olumsuz eylemlerin tekrarlanmayacağı yaşam koşullarının herkes için geliştirilmesi gerekir. Çünkü sağlıklı bir yaşam her insanın temel hakkıdır.\n\nÜlkelerin hastane ve ilaç sayılarındaki artış, genel toplum sağlığının bozulduğunu ve olumsuz eylemlerin çoğaldığını kanıtlar. Bu yüzden hastane açılması bir başarı değil, yardım çığlığıdır.",
          de: "Es ist möglich, alle Krankheiten ohne Medikamente zu behandeln. Um in einer gesunden Gesellschaft leben zu können, müssen Lebensbedingungen für alle entwickelt werden, damit negative Handlungen nach Behandlungen nicht wiederholt werden. Denn ein gesundes Leben ist ein grundlegendes Recht jedes Menschen.\n\nDer Anstieg der Zahl von Krankenhäusern und Medikamenten in den Ländern beweist, dass die allgemeine Gesundheit der Gesellschaft sich verschlechtert und negative Handlungen zunehmen. Daher ist die Eröffnung eines Krankenhauses kein Erfolg, sondern ein Hilferuf.",
          fr: "Il est possible de traiter toutes les maladies sans médicaments. Pour pouvoir vivre dans une société saine, des conditions de vie doivent être développées pour tous afin que les actions négatives ne se répètent pas après les traitements. Car une vie saine est un droit fondamental de chaque personne.\n\nL'augmentation du nombre d'hôpitaux et de médicaments dans les pays prouve que la santé générale de la société se détériore et que les actions négatives se multiplient. Par conséquent, ouvrir un hôpital n'est pas un succès, mais un cri d'aide."
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
          en: "The increase in quality of life in line with the principles of Equality and Freedom positively reflects on the entire society. Teaching the truth of justice in nature in detail to every person is necessary for the rights and potentials of all living beings.\n\nEducation systems should be redesigned in accordance with the principles of nature, rather than supporting a hierarchical structure. The fact that a worker who performs any action must face nature's justice proves that responsibilities should be shared equally.",
          tr: "Eşitlik ve Özgürlük ilkeleri doğrultusunda yaşam kalitelerindeki artış, tüm topluma olumlu bir biçimde yansır. Doğadaki adalet gerçeğinin her insana detaylarıyla öğretilmesi tüm canlıların hakları ve potansiyelleri için gereklidir.\n\nEğitim sistemleri, hiyerarşik bir yapıyı desteklemek yerine, doğadaki ilkelere uygun bir şekilde yeniden tasarlanmalıdır. Herhangi bir eylemi gerçekleştiren bir çalışanın doğanın adaletiyle yüzleşmek zorunda kalması, sorumlulukların eşit paylaşılması gerektiğini kanıtlar.",
          de: "Die Steigerung der Lebensqualität im Einklang mit den Prinzipien von Gleichheit und Freiheit wirkt sich positiv auf die gesamte Gesellschaft aus. Die Wahrheit der Gerechtigkeit in der Natur jedem Menschen im Detail zu lehren, ist notwendig für die Rechte und Potenziale aller Lebewesen.\n\nBildungssysteme sollten gemäß den Prinzipien der Natur neu gestaltet werden, anstatt eine hierarchische Struktur zu unterstützen. Die Tatsache, dass ein Arbeiter, der eine Handlung ausführt, der Gerechtigkeit der Natur gegenüberstehen muss, beweist, dass Verantwortung gleichmäßig geteilt werden sollte.",
          fr: "L'augmentation de la qualité de vie conformément aux principes d'Égalité et de Liberté se répercute positivement sur l'ensemble de la société. Enseigner la vérité de la justice dans la nature à chaque personne en détail est nécessaire pour les droits et potentiels de tous les êtres vivants.\n\nLes systèmes éducatifs devraient être repensés conformément aux principes de la nature, plutôt que de soutenir une structure hiérarchique. Le fait qu'un travailleur accomplissant une action doive faire face à la justice de la nature prouve que les responsabilités doivent être partagées équitablement."
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
          en: "Since every creation and action in nature has consequences, environmental awareness must comply with the principles of equality and freedom in all areas.\n\nEngineering, architecture, urban planning, transportation, energy production, and all other fields must develop in accordance with the truth of justice in nature. For example: even moving a single paving stone can harm the health of the person who moved it.",
          tr: "Doğada gerçekleştirilen her yaratımın ve eylemin sonuçları olduğu için, çevre bilincinin her alanda eşitlik ve özgürlük ilkelerine uyumlu olması zorunludur. \n\nMühendislik, mimarlık, şehir planlaması, ulaşım, enerji üretimi ve diğer tüm alanlarda doğadaki adalet gerçeğine uygun gelişim gösterilmelidir. Örnek olarak: Bir kaldırım taşının yerinden oynatılması bile, o kaldırım taşını oynatan kişinin sağlığına zarar verir.",
          de: "Da jede Schöpfung und Handlung in der Natur Konsequenzen hat, muss das Umweltbewusstsein in allen Bereichen den Prinzipien von Gleichheit und Freiheit entsprechen.\n\nIngenieurwesen, Architektur, Stadtplanung, Transport, Energieerzeugung und alle anderen Bereiche müssen sich gemäß der Wahrheit der Gerechtigkeit in der Natur entwickeln. Zum Beispiel: Schon das Bewegen eines Pflastersteins kann die Gesundheit der Person schädigen, die ihn bewegt.",
          fr: "Puisque chaque création et action dans la nature a des conséquences, la conscience environnementale doit respecter les principes d'égalité et de liberté dans tous les domaines.\n\nLe génie, l'architecture, l'urbanisme, les transports, la production d'énergie et tous les autres domaines doivent se développer conformément à la vérité de la justice dans la nature. Par exemple : déplacer ne serait-ce qu'une seule pierre de trottoir peut nuire à la santé de la personne qui l'a déplacée."
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
          en: "Any idea, invention, or product emerges through the inspiration (means) of living beings in the environment. Therefore, every gain must be a collective gain for society.\n\nIn nature, where everything is free, the struggles for livelihood, stress, selfishness, inequality of opportunities, and all other negatives are obstacles to a healthy life. By realizing that we have come to life to truly live, we must use the resources of the environment in a way that considers everyone's well-being.",
          tr: "Herhangi bir fikir, icat veya ürün, çevredeki canlıların ilham (vesile) olmaları ile açığa çıkar. Bu yüzden her kazanç toplumun ortak kazancı olmak zorundadır.\n\nHer şeyin bedava olduğu doğada, geçim derdi, stres, bencillik, fırsat eşitsizliği ve diğer tüm olumsuzluklar sağlıklı bir yaşamın önündeki engellerdir. Hayata yaşamak için geldiğimizin bilincine vararak, çevrenin kaynaklarını herkesin refahını düşünecek şekilde kullanmalıyız.",
          de: "Jede Idee, Erfindung oder jedes Produkt entsteht durch die Inspiration (Mittel) von Lebewesen in der Umgebung. Daher muss jeder Gewinn ein gemeinschaftlicher Gewinn für die Gesellschaft sein.\n\nIn der Natur, in der alles kostenlos ist, sind Existenzsorgen, Stress, Egoismus, Ungleichheit der Chancen und alle anderen Negativitäten Hindernisse für ein gesundes Leben. Indem wir erkennen, dass wir zum Leben gekommen sind, um wirklich zu leben, müssen wir die Ressourcen der Umwelt so nutzen, dass das Wohl aller berücksichtigt wird.",
          fr: "Toute idée, invention ou produit émerge grâce à l'inspiration (moyen) des êtres vivants dans l'environnement. Par conséquent, tout gain doit être un gain collectif pour la société.\n\nDans la nature, où tout est gratuit, les soucis de subsistance, le stress, l'égoïsme, l'inégalité des opportunités et toutes les autres négativités sont des obstacles à une vie saine. En prenant conscience que nous sommes venus à la vie pour vivre pleinement, nous devons utiliser les ressources de l'environnement de manière à considérer le bien-être de tous."
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
          en: "I am looking for a team or organization with which I can work together on the principles of nature.",
          tr: "Doğanın ilkelerine yönelik birlikte çalışmalar yapabileceğim bir ekip veya organizasyon arıyorum.",
          de: "Ich suche ein Team oder eine Organisation, mit der ich gemeinsam nach den Prinzipien der Natur arbeiten kann.",
          fr: "Je recherche une équipe ou une organisation avec laquelle je peux travailler ensemble sur les principes de la nature."
        })
      ]
    },
    contact: {
      title: t({
        en: "Project Leader",
        tr: "Proje Lideri",
        de: "Projektleiter",
        fr: "Chef de projet"
      }),
      description: t({
        en: "The Spirit Guide | Computer Engineer",
        tr: "Maneviyat Rehberi | Bilgisayar Mühendisi",
        de: "Der Geistführer | Computeringenieur",
        fr: "Le guide spirituel | Ingénieur informatique"
      }),
      leader: {
        text: "Emin Buğra Saral",
        href: t({
          en: "https://0.1234s.org/en",
          tr: "https://0.1234s.org/tr",
          de: "https://0.1234s.org/en",
          fr: "https://0.1234s.org/en"
        })
      }
    },
  },
} satisfies Dictionary;

export default pageContent;
