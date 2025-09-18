import { t, type Dictionary } from "intlayer";

const pageContent = {
  key: "health-section",
  content: {
    title: t({
      en: "Health: The Body as a Mirror of Nature's Justice",
      tr: "Sağlık: Doğadaki Adaletin Aynası Olarak Vücut"
    }),
    quote: t({
      en: "Our physical and mental health directly reflects alignment with nature's justice and the quality of our relationships:\n**EVERY DISEASE** is caused by (y)our actions.",
      tr: "Fiziksel ve zihinsel sağlığımız, doğanın adaletiyle ve ilişkilerimizin niteliğiyle olan uyumumuzu doğrudan yansıtır:\n**HER HASTALIK** eylemlerimizden kaynaklanır."
    }),
    description: t({
      en: "Positive actions — compassion, honesty, forgiveness, and support for others — strengthen our organs, mental resilience, and overall well-being.\nNegative or harmful actions disrupt balance, weaken the body, and manifest as illness or stress.\n\nActions can be both inward and outward in any relationship. **If you are harmed unjustly, those responsible will face consequences over time as you recover.** **Your relationship with yourself is equally important as your relationships with others.**",
      tr: "Olumlu eylemler — şefkat, dürüstlük, affedicilik ve başkalarını desteklemek — organlarımızı, zihinsel dayanıklılığımızı ve genel sağlığımızı güçlendirir.\nOlumsuz veya zararlı eylemler dengeyi bozar, bedeni zayıflatır ve hastalık veya stres olarak ortaya çıkar.\n\nEylemler hem içe hem dışa dönük olabilir. **Eğer haksız yere zarar görürsen, sen iyileşirken sorumlular zamanla sonuçlarıyla yüzleşecektir.** **Kendinizle olan ilişkiniz, başkalarıyla olan ilişkileriniz kadar önemlidir.**"
    }),
    analogy: {
      title: t({
        en: "Organ-Action-Consequence Analogy",
        tr: "Organ-Eylem-Sonuç Benzetmesi"
      }),
      quote: t({
        en: "The condition of each organ provides us with a natural guidance about the consequences of (y)our choices. Every illness teaches us, through our organs, the outcomes of the choices we make regarding equality and freedom in nature.",
        tr: "Her organın durumu, seçimlerimizin sonuçları hakkında bize doğal bir rehberlik sunar. Her hastalık, doğadaki eşitlik ve özgürlükle ilgili yaptığımız seçimlerin sonuçlarını  organlarımız aracılığıyla ders olarak bize anlatır."
      }),
      description: t({
        en: "Body organs function much like individuals' roles within a society or environment: Each organ's biological role (purpose) presents a silent reflection of the choices we make in nature.",
        tr: "Vücut organları, bir toplum veya çevredeki bireylerin rollerine çok benzer şekilde işlev görür: Her organın biyolojik rolü (amacı), doğada yaptığımız seçimlerin sessiz bir yansımasını sunar."
      }),
      items: [
        t({
          en: "A healthy heart, brain, or immune system reflects actions that respect equality and freedom.",
          tr: "Sağlıklı bir kalp, beyin veya bağışıklık sistemi, eşitlik ve özgürlüğe saygı gösteren eylemleri yansıtır."
        }),
        t({
          en: "Unhealthy organs indicate imbalance, signaling misalignment with nature's justice. Balancing your relations with nature (environment) can bring health to your organs — even without a medicine.",
          tr: "Sağlıksız organlar, dengesizliği ve doğanın yasasıyla uyumsuzluğu gösterir. Doğayla (çevrenizle) ilişkilerinizi dengelemek, ilaç kullanmadan bile organlarınıza sağlık getirebilir."
        }),
        t({
          en: "At some point, when alignment is complete, nature protects your well-being — you may achieve a state where illness rarely occurs or doesn't occur, as a reward for living in harmony with justice.",
          tr: "Bir noktada, uyum tam olduğunda, doğa sağlığınızı korur — adaletle uyum içinde yaşamanın ödülü olarak hastalık nadiren meydana gelir veya hiç meydana gelmez."
        })
      ],
    },
    paragraph1: t({
      en: "Every human body begins life as a complex system, carrying the experiences, choices, and imprints of both the individual and their ancestors. Your body is the whole system, with each organ serving as a vital subsystem. \n\n**When a virus, germ or chemical enters a body, the path it follows is shaped by the decisions and actions you make**. Illness is not random — it can be understood as a warning or a consequence given by nature. If you ignore this signal and continue acting in ways harmful to yourself and/or your environment, the illness may spread deeper into your system, reflecting the direction of your choices to your body. When you begin to understand your own system (your life and environment) and align your actions with healing, responsibility, and renewal, the illness gradually finds its way out. Positive change fosters balance and recovery from within. \n\nSimilarly, **The Organ-Action-Result Analogy also applies to accidents.** Any damage your body sustains as a result of an accident is intended to teach you a lesson, reflecting the actions you took before the incident. The way an accident occurred explains your action that caused it. \n\nRemember, nature always offers the opportunity to make amends for your mistakes, though some errors may lead to irreversible losses. **Personal opinions based on any belief or perspective may not align with nature's justice scale.**",
      tr: "Her insan bedeni, hem bireyin hem de atalarının deneyimlerini, seçimlerini ve izlerini taşıyan karmaşık bir sistem olarak hayata başlar. Vücudunuz bütün bir sistemdir ve her organ, bu sistemin hayati bir alt sistemi olarak işlev görür. **Bir virüs, mikrop veya kimyasal vücuda girdiğinde, izleyeceği yol aldığınız kararlar ve yaptığınız eylemler tarafından şekillenir.** Hastalık rastgele oluşmaz — doğa tarafından verilen bir uyarı veya sonuç olarak anlaşılabilir. Bu sinyali görmezden gelip kendinize ve/veya çevrenize zarar veren şekilde hareket etmeye devam ederseniz, hastalık seçimlerinizin vücudunuzdaki yönünü yansıtarak sisteminizde daha derinlere yayılabilir. Kendi sisteminizi (hayatınızı ve çevrenizi) anlamaya başladığınızda ve eylemlerinizi iyileşme, sorumluluk ve yenilenme ile uyumlu hale getirdiğinizde, hastalık yavaş yavaş vücudunuzdan çıkış yolunu bulur. İçsel olumlu değişim, dengeyi ve içeriden iyileşmeyi destekler.\n\nBenzer şekilde, **Organ-Eylem-Sonuç Benzetmesi kazalar için de geçerlidir.** Yaşadığınız herhangi bir kaza sonucunda vücudunuzda oluşan hasarlar, kazadan önceki eylemlerinizin bir yansıması olarak size bir ders vermeyi amaçlar. Yaşanılan bir kazanın oluşma şekli, sebep olan eyleminizi açıklar.\n\nUnutmayın ki doğa, her zaman hatalarınızı telafi etme fırsatını sunar. Bazı hatalar ise geri dönülemeyecek kayıplara yol açar. **Herhangi bir inanç veya bakış açısına dayanan kişisel görüşler, doğanın adaletiyle (dengesiyle) örtüşmeyebilir.**"
    }),
    examples: [
      t({
        en: "If you had a heart attack before, probably you caused a lot of struggle (blocks) in some living being's life.",
        tr: "Kalp krizi geçirdiyseniz, muhtemelen bir canlının yaşamında bilerek büyük bir zorluk yarattınız."
      }),
      t({
        en: "If your eyes can't see properly, probably you ignored/blocked someone's path.",
        tr: "Gözleriniz düzgün göremiyorsa, muhtemelen bir canlının yolunu görmezden geldiniz veya engellediniz."
      }),
      t({
        en: "If your ears lost their hearing, probably you ignored somebody's voice or cry for help. Or, you blocked someone's freedom to hear.",
        tr: "Kulaklarınız duyma yetisini kaybettiyse, muhtemelen bir canlının sesini veya yardım çığlığını duymazdan geldiniz. Veya, birinin duyma özgürlüğünü kısıtlamış olabilirsiniz."
      }),
      t({
        en: "If you had a form of cancer, probably you caused a living's death or you tortured them.",
        tr: "Bir tür kanser geçirdiyseniz, muhtemelen bir canlının ölümüne sebep oldunuz veya ona işkence ettiniz."
      })
    ],
  },
} satisfies Dictionary;

export default pageContent;