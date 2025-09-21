import { t, type Dictionary } from "intlayer";

const pageContent = {
  key: "health-section",
  content: {
    title: t({
      en: "Health: The Body as a Mirror of Nature's Justice",
      tr: "Sağlık: Doğadaki Adaletin Aynası Olarak Vücut"
    }),
    quote: t({
      en: "The human body itself proves the logic to be observed.\nOur physical and mental health directly reflects alignment with nature's justice and the quality of our relationships.",
      tr: "İnsan bedeni, gözlemlenmesi gereken mantığı bizzat kanıtlar.\nFiziksel ve zihinsel sağlığımız, doğanın adaletiyle uyumumuzu ve ilişkilerimizin niteliğini doğrudan yansıtır."
    }),
    description: t({
      en: "Qualities like compassion, honesty, forgiveness, and support for others strengthen our organs, mental resilience, and overall well-being. Negative or harmful actions disrupt balance, weaken the body, and manifest as illness or stress.\n\nNothing is random in nature: Every disease explains (y)our misalignments — consequences of your actions.\n\nActions can be both inward and outward in any relationship. **Your relationship with yourself is equally important as your relationships with others.**",
      tr: "Merhamet, dürüstlük, affetme ve başkalarına yardım etme gibi nitelikler, organlarımızı, zihinsel dayanıklılığımızı ve genel sağlığımızı güçlendirir. Olumsuz veya zararlı eylemler dengeyi bozar, bedeni zayıflatır ve hastalık veya stres olarak kendini gösterir.\n\nDoğada hiçbir şey rastgele değildir: Her hastalık, uyumsuzluklarımızı — eylemlerimizin sonuçlarını — açıklar.\n\nEylemler, herhangi bir ilişkide hem içe hem dışa yönelik olabilir. **Kendinizle olan ilişkiniz, başkalarıyla olan ilişkileriniz kadar önemlidir.**"}),
    analogy: {
      title: t({
        en: "Organ-Action-Consequence Analogy",
        tr: "Organ-Eylem-Sonuç Benzetmesi"
      }),
      quote: t({
        en: "Body organs function like members of a society, each with a specific role reflecting the harmony — or imbalance — of our choices in nature. Their condition combined with their purpose offers silent guidance.",
        tr: "Vücut organları, toplumdaki bireyler gibi işlev görür; her biri, doğadaki seçimlerimizin uyumunu veya dengesizliğini yansıtan özel bir role sahiptir. Sağlık durumları ve işleyiş amaçları bir araya geldiğinde size sessiz bir rehberlik sunarlar."
      }),
      items: [
        t({
          en: "A healthy heart, brain, or immune system shows alignment with equality, freedom, and nature's justice.",
          tr: "Sağlıklı bir kalp, beyin veya bağışıklık sistemi, eşitlik, özgürlük ve doğanın adaletiyle uyumu gösterir."
        }),
        t({
          en: "Illness signals misalignment, urging us to restore balance in our relationships with the environment and with one another.",
          tr: "Hastalık, uyumsuzluğun bir işaretidir.  Çevreyle ve birbirimizle olan ilişkilerimizdeki dengeyi yeniden sağlamamızı amaçlar."
        }),
        t({
          en: "When alignment within nature is achieved, health naturally follows, and illness becomes rare — a reward for living in harmony with the principles that sustain life.",
          tr: "Doğayla uyum sağlandığında sağlık kendiliğinden gelir. Hastalık ise nadiren uğrar; bu, hayatı sürdüren ilkelerle uyum içinde yaşamanın bir ödülüdür."
        })
      ],
    },
    paragraph1: t({
      en: "Every human body begins life as a complex system, carrying the experiences, choices, and imprints of both the individual and their ancestors. Your body is the whole system, with each organ serving as a vital subsystem. \n\n**When a virus, germ, or chemical enters the body, it moves along a path shaped by your choices and actions.** Persisting in harmful patterns allows it to sink deeper, reflecting the effects of your life on your body. As you come to understand your own system—your life, your environment—and guide your actions with awareness, healing, and renewal, the body gradually restores its balance. Recovery flows naturally from the harmony you cultivate within.\n\nSimilarly, **The Organ-Action-Result Analogy also applies to accidents.** Any damage your body sustains as a result of an accident is intended to teach you a lesson, reflecting the actions you took before the incident. The way an accident occurred explains your action that caused it. \n\nRemember, nature always offers the opportunity to make amends for your mistakes, though some errors may lead to irreversible losses. If you are harmed unjustly, those responsible will face consequences over time as you recover. **Personal opinions based on any belief or perspective may not align with nature's justice scale.**",
      tr: "Her insan bedeni, hem bireyin hem de atalarının deneyimlerini, seçimlerini ve izlerini taşıyan karmaşık bir sistem olarak hayata başlar. Vücudunuz bütün bir sistemdir ve her organ, bu sistemin hayati bir alt sistemi olarak işlev görür.\n\n**Bir virüs, mikrop veya kimyasal vücuda girdiğinde, seçimleriniz ve eylemlerinizle şekillenen bir yolda ilerler.** Zararlı davranış kalıplarında ısrar etmek, bunların daha derinlere işlemesine ve hayatınızın vücudunuz üzerindeki etkilerini yansıtmasına olanak tanır. Kendi sisteminizi (hayatınızı, çevrenizi) anladıkça ve eylemlerinizi farkındalık, iyileşme ve yenilenme ile yönlendirdikçe, vücut yavaş yavaş dengesini yeniden kazanır. İyileşme, içinizde geliştirdiğiniz uyumdan doğal olarak kaynaklanır.\n\nBenzer şekilde, **Organ-Eylem-Sonuç Benzetmesi kazalar için de geçerlidir.** Yaşadığınız herhangi bir kaza sonucunda vücudunuzda oluşan hasarlar, kazadan önceki eylemlerinizin bir yansıması olarak size bir ders vermeyi amaçlar. Yaşanılan bir kazanın oluşma şekli, sebep olan eyleminizi açıklar.\n\nUnutmayın ki doğa, her zaman hatalarınızı telafi etme fırsatını sunar. Bazı hatalar ise geri dönülemeyecek kayıplara yol açar. Haksız yere zarar görürseniz, iyileştikçe sorumlular zamanla sonuçlarıyla yüzleşecektir. **Herhangi bir inanç veya bakış açısına dayanan kişisel görüşler, doğanın adaletiyle (dengesiyle) örtüşmeyebilir.**"
    }),
    examples: [
      t({
        en: "Weakened vision may reflect moments when you overlooked someone's needs or obstructed their path, mirroring times you turned a blind eye to their opportunities.",
        tr: "Zayıf görme yeteneği, birinin ihtiyaçlarını görmezden geldiğiniz veya yolunu engellediğiniz anları, yani onların fırsatlarına göz yumduğunuz zamanları yansıtabilir."
      }),
      t({
        en: "If your hearing has diminished, it may reflect times when you ignored someone’s voice or cry for help, or when you silenced another’s freedom to be heard.",
        tr: "İşitme duyunuz azaldıysa, bu durum birinin sesini veya yardım çığlığını görmezden geldiğiniz veya bir başkasının duyulma özgürlüğünü susturduğunuz zamanları yansıtıyor olabilir."
      }),
      t({
        en: "If you've experienced a heart attack, it may symbolize the ways your actions, choices, or neglect have created struggles or obstacles in another being's life.",
        tr: "Eğer kalp krizi geçirdiyseniz, bu durum eylemlerinizin, seçimlerinizin veya ihmallerinizin başka bir canlının hayatında mücadelelere veya engellere yol açmasının sembolü olabilir."
      }),
      t({
        en: "If you've experienced a form of cancer, it may symbolize the harm or suffering you once caused — perhaps taking a life or inflicting deep pain on another living being.",
        tr: "Eğer bir kanser türü geçirdiyseniz, bu bir zamanlar neden olduğunuz zararı veya acıyı sembolize ediyor olabilir; belki bir canı aldınız veya başka bir canlıya derin acı verdiniz."
      })
    ],
  },
} satisfies Dictionary;

export default pageContent;