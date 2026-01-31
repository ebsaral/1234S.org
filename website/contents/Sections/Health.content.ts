import { md, t, type Dictionary } from 'intlayer';

const pageContent = {
  key: 'health-section',
  content: {
    title: t({
      en: 'Health',
      tr: 'Sağlık',
    }),
    subtitle: t({
      en: 'The Mirror of Justice',
      tr: 'Adaletin Aynası',
    }),
    quote: t({
      en: "Our bodies prove the logic in nature to be observed. Our physical and mental health directly reflect alignment with nature's justice and the quality of our relationships.",
      tr: 'Bedenlerimiz, gözlemlememiz gereken doğadaki mantığı kanıtlar. Fiziksel ve zihinsel sağlığımız, doğanın adaletiyle uyumumuzu ve ilişkilerimizin niteliğini doğrudan yansıtır.',
    }),
    description: t({
      en: md(
        "Every illness reveals our negative actions to us through our body. Our actions in every relationship are directed both inward and outward. **Actions toward ourselves are as important as actions toward others.**\n\nPositive qualities such as goodwill, compassion, honesty, sharing, and helping others strengthen our organs, mental resilience, and our environment's health. Unless we repair our negative actions in nature, our illness will not heal or we may contract another disease.",
      ),
      tr: md(
        'Her hastalık, olumsuz eylemlerimizi vücudumuz aracılığıyla bize açıklar. Eylemlerimiz, her ilişkide hem içe hem dışa yöneliktir. **Kendimize yönelik olan eylemlerimiz, başkalarına yönelik eylemlerimiz kadar önemlidir.**\n\nİyi niyet, merhamet, dürüstlük, paylaşım ve başkalarına yardım etme gibi olumlu özellikler, organlarımızı, zihinsel dayanıklılığımızı ve çevremizin sağlığını güçlendirir. Doğada gerçekleştirdiğimiz olumsuz eylemlerimizi onarmadıkça, hastalığımız iyileşmez veya bir başka hastalığa yakalanırız.',
      ),
    }),
    analogy: {
      title: t({
        en: 'Organ-Action-Consequence Analogy',
        tr: 'Organ-Eylem-Sonuç Benzetmesi',
      }),
      quote: t({
        en: 'The functions of the organs in our body help explain the consequences of the actions we perform in a community and society. In this way, the health conditions and functions of our organs come together to provide us with a silent guide. Depending on the outcomes of how we use our organs, we either become ill or healthier. By examining the examples below, you can better observe the functions and health conditions of the organs in your own body.',
        tr: 'Vücudumuzdaki organların işlevleri, bir toplulukta ve toplumda gerçekleştirdiğimiz eylemlerin sonuçlarını açıklamaya yardımcı olur. Böylelikle organlarımızın sağlık durumları ve işleyiş amaçları bir araya gelerek bize sessiz bir rehber sunarlar. Organlarımızı kullanırken vesile oldukları sonuçlara göre hastalanır veya daha sağlıklı oluruz. Aşağıdaki örnekleri inceleyerek kendi bedeninizdeki organların işlevlerini ve sağlık durumlarını daha iyi gözlemleyebilirsiniz.',
      }),
      items: [
        t({
          en: 'A healthy mind and immune system show that nature values us greatly.',
          tr: "Sağlıklı bir zihin ve bağışıklık sistemi, Yaradan'ın canlılarıyla çok olumlu ilişkilerimizin olduğunu gösterir.",
        }),
        t({
          en: 'Any illness is a sign of our disharmony. It advises to restore balance in our relationships with the environment and with each other.',
          tr: 'Herhangi bir hastalık, uyumsuzluğumuzun bir işaretidir. Çevreyle ve birbirimizle olan ilişkilerimizdeki dengeyi yeniden sağlamamızı öğütler.',
        }),
        t({
          en: 'When we achieve remarkable harmony with nature, our mental and physical health gain a comprehensive protective shield.',
          tr: 'Doğayla muazzam bir uyum yakaladığımızda, zihinsel ve fiziksel sağlığımız kapsamlı bir koruma kalkanına sahip olur.',
        }),
      ],
      examples: [
        t({
          en: 'The degree of negativity caused by the sentences you use while speaking determines the level of inflammation you experience in your throat. If you compensate for that negativity, you will recover faster.',
          tr: 'Konuşurken kullandığınız cümlelerin vesile oldukları olumsuzluğun boyutuna göre boğazınızda iltihaplanma yaşarsınız. Yaşattığınız olumsuzluğu telafi ederseniz daha hızlı iyileşirsiniz.',
        }),
        t({
          en: "Poor vision may reflect the moments when you overlooked someone's opportunities. Negativity generated in relation to your focusing actions can be mirrored in your eyesight.",
          tr: 'Zayıf görme yeteneği, birinin fırsatlarına göz yumduğunuz anları yansıtabilir. Odaklanma eylemine yönelik yarattığınız olumsuzluklar, gözünüzdeki odaklanmaya yansıyabilir.',
        }),
        t({
          en: 'A decline in your hearing may reflect the times when you ignored or obstructed the call for help or request of yourself or others.',
          tr: 'İşitme duyunuzun azalması, kendinizin veya başka birinin yardım çığlığını/isteğini duymazdan geldiğiniz veya yön bulmasını engellediğiniz zamanları yansıtabilir.',
        }),
        t({
          en: 'The difficulties you create in your own life and in the lives of others can increase your risk of a heart attack.',
          tr: 'Kendinizin ve başka birinin yaşamında yarattığınız zorluklar kalp krizi riskinizi yükseltebilir.',
        }),
        t({
          en: 'A hunchback in your body may reflect the moments when you imposed life difficulties on yourself and others.',
          tr: 'Vücudunuzdaki kambur, hem kendinize hem başkalarına yaşam zorlukları yüklediğinizi anları yansıtabilir.',
        }),
        t({
          en: 'If you have diabetes, the degree to which you are strict with yourself and those around you is reflected in your blood.',
          tr: 'Eğer diyabet sorunu yaşıyorsanız, kendinize ve etrafınızdaki insanlara katı davranma oranınız kanınıza yansıyordur.',
        }),
        t({
          en: 'If you have developed cancer, you have taken a life or caused deep suffering to a living being. Every cancer manifests itself in your body at different stages as the accumulation of the consequences of your negative actions.',
          tr: 'Eğer kansere yakalandıysanız, bir canı aldınız veya bir canlıya derin acılar yaşatmışsınızdır. Her kanser, olumsuz eylemlerinizden doğan sonuçların birikimleri olarak farklı evrelerde vücudunuza yansır.',
        }),
      ],
      info: t({
        en: "Even though each body's relationship with its environment is different, the consequences it experiences are similar. We cannot possess anything in nature. The negative actions we facilitate while using any object *(such as an organ, vehicle, or money)* affect our health and lives in a similar way. Along with our physical health, depending on our intentions, we can also lose our luck and opportunities.",
        tr: 'Her vücudun çevresiyle olan ilişkileri farklı olsa bile hissettiği sonuçlar benzerdir. Doğada hiçbir şeye sahip olamayız. Herhangi bir varlığı *(organ, araç, para gibi)* kullanırken vesile olduğumuz olumsuz eylemler sağlığımızı ve yaşantımızı benzer şekilde etkiler. Fiziksel sağlımızla birlikte, niyetimize bağlı olarak şansımızı ve imkanlarımızı da kaybedebiliriz.',
      }),
    },
    paragraph1: t({
      en: md(
        'Contrary to common belief, for a healthy and long life, we do not need special nutrition, treatment, or medication. Current treatment methods cannot go beyond patching the outcomes arising from repeated negative actions within any community. Therefore, for better health, we need to become better people and build a society that values good relationships.',
      ),
      tr: md(
        'Bilinenin aksine, sağlıklı ve uzun bir yaşam için özel bir beslenmeye, tedaviye veya ilaca ihtiyaç duymayız. Güncel tedavi yöntemleri, herhangi bir topluluk içinde tekrarlanan olumsuz eylemlerden dolayı açığa çıkan sonuçlara yama uygulamaktan öteye gidemez. Bu yüzden daha iyi bir sağlık için, daha iyi bir insan olmamız ve iyi ilişkilere önem veren bir toplum inşa etmemiz gerekir.',
      ),
    }),
    paragraph2: t({
      en: md(
        "A healthy life is not just about having a strong body; it also depends on the presence of a mind that develops one's full potential. Mental health nourishes growth through focus, opportunities, talents, and other elements of chance — all of which are subject to nature's scale of justice. We may possess natural talents that arise from our relationships with our environment.\n\nWithin nature's interconnectedness, we can understand that illnesses developing during a baby's growth are connected to the parents' interactions with their environment. More effort is needed to cure hereditary diseases. Most likely, the treatment of many genetic illnesses can only occur in the next generation, because the harm done to nature through previous and current generations must be examined and remedied. While seeing humans as part of nature, we must not forget other beings. Therefore, some traditions may need reinterpretation: self-criticism and awareness are the beginning of every healing.\n\n**Whenever a microbe, virus, or chemical begins to harm our body, it navigates within us according to the actions we choose.** Persisting in harmful behavior patterns leads to their spreading by damaging our body. As we understand our body systems together with our environment and guide our actions with awareness, healing, and renewal, our body regains balance and finds a way to eliminate harmful substances. In situations of high harmony with nature, conscious harms to our body lead to the responsible parties being punished in nature.\n\n**The Organ-Action-Result Analogy applies to all accidents we experience.** Any injuries sustained in an accident serve as a lesson to us, reflecting our negative actions prior to the accident. The manner in which an accident occurs and the location of the injuries in our organs reveal the nature of our actions that caused them; they reveal our mental focus and how we use our bodies. No accident happens just because. Contrary to common belief, no living creature can harm another without a justifiable reason in nature. The fear factors in current management systems are merely mental strategies that force the attainment of freedom.\n\nTo maintain balance in nature, our memory, thoughts, and feelings may be reshaped, tested, and erased through the Creator. A balanced connection with nature enables a strong mental structure. Even if opportunities arise to compensate for mistakes, some errors lead to irreversible consequences.\n\nThus, we can see how the stress factor, which has negative effects on our health and cannot be fully defined, originates in the basic context, how it is formed, and why it causes problems. **In order to observe that natural disasters occur with a cause-and-effect relationship similar to that in our bodies, we need to understand ourselves and our environment better.** Stress, which emerges from the accumulation of negative actions originating in a specific environment, shapes earthquakes by reflecting on fault lines as a process. The more we understand nature's silent language, the better we can understand how we should live in harmony.",
      ),
      tr: md(
        'Sağlıklı bir yaşam, sadece güçlü bir bedene sahip olmak değildir; aynı zamanda, kişinin bütün potansiyelini geliştiren bir zihnin varlığına bağlıdır. Zihinsel sağlık, odaklanma, fırsatlar, yetenekler ve diğer şans unsurları aracılığıyla büyümeyi besler — bunların tümü de doğanın adalet terazisine bağlıdır. Çevremizle olan ilişkilerin getirileri olan doğal yeteneklere sahip olabiliriz.\n\nDoğanın bütünlüğünde, bir bebeğin gelişimi esnasında oluşan hastalıkların ebeveylerin çevreleriyle olan ilişkilerine bağlı olduğunu anlayabiliriz. Kalıtsal hastalıkların iyileşmesi için daha fazla çaba göstermek gerekir. Muhtemelen çoğu genetik hastalığın tedavisi sadece bir sonraki nesilde gerçekleşebilir. Çünkü bizden önceki ve mevcut nesiller aracılığıyla doğaya verilen zararın incelenmesi ve telafi edilmesi gerekir. İnsanı doğanın bir parçası olarak görürken, diğer canlıları unutmamalıyız. Bu yüzden, bazı geleneklerin tekrar yorumlanması gerekebilir: Öz eleştiri ve farkındalık her iyileşmenin başlangıcıdır.\n\n**Herhangi mikrop, virüs veya kimyasal vücudumuza zarar vermeye başladığında, seçtiğimiz eylemlere göre vücudumuzda yön bulur.** Zararlı davranış kalıplarında ısrar etmek, bunların vücudumuza zarar vererek yayılmasına yol açar. Çevremizle birlikte kendi vücut sistemimizi anladıkça ve eylemlerimizi farkındalık, iyileşme ve yenilenme ile yönlendirdikçe, vücudumuz dengesini yeniden kazanır ve zararlı maddelerden kurtulmanın bir yolunu bulur. Doğayla uyumumuzun çok iyi olduğu durumlarda, vücudumuza verilen bilinçli zararlar sorumlularının doğada cezalandırılmasına vesile olur.\n\n**Organ-Eylem-Sonuç Benzetmesi yaşadığımız tüm kazalar için de geçerlidir.** Herhangi bir kaza sonucunda vücudumuzda oluşan hasarlar, kazadan önceki olumsuz eylemlerimizin bir yansıması olarak bize bir ders vermeyi amaçlar. Yaşadığımız bir kazanın oluşma şekli ve organlarımızdaki hasarların yeri, sebep olan eylem(ler)imizin biçimlerini açıklar; zihnimizdeki odak noktamızı ve vücudumuzu nasıl kullandığımızı anlatır. Hiçbir kaza sebepsiz yere olmaz. Bilinenin aksine, hiçbir canlı başka bir canlıya doğada haklı bir sebebi olmadan zarar veremez. Güncel yönetim sistemlerindeki korku faktörleri, sadece özgürlüğe ulaşılmasını zorlayan zihinsel stratejilerden ibarettir.\n\nDoğadaki dengenin sağlanabilmesi için, Yaradan aracılığıyla hafızamız, düşüncelerimiz ve hislerimiz şekil değiştirebilir, sınanabilir ve silinebilir. Doğayla kurulan dengeli bir bağ, sağlam bir zihinsel yapıya imkan tanır. Hatalarımızı telafi etme fırsatı yeniden doğsa bile, bazı hatalar geri dönülemeyecek sonuçlara vesile olur.\n\nBöylece, sağlığımıza olumsuz etkilerde bulunan ve tam olarak tanımlanamayan stres faktörünün, temel bağlamda nasıl kaynaklandığını, nasıl biçimlendiğini ve neden sorunlara yol açtığını görebiliriz. **Doğal afetlerin vücudumuzdakine benzer bir sebep-sonuç ilişkisiyle gerçekleştiklerini gözlemleyebilmemiz için kendimizi ve çevremizi daha iyi tanımamız gerekir.** Belirli bir çevrede kaynaklanan olumsuz eylemlerin birikiminden açığa çıkan stres, bir süreç halinde fay hatlarına yansıyarak depremleri şekillendirir. Doğanın sessiz dilini anladıkça nasıl bir ahenk içinde yaşamamız gerektiğini daha iyi anlayabiliriz.',
      ),
    }),
    paragraph3: t({
      en: '',
      tr: '',
    }),
  },
} satisfies Dictionary;

export default pageContent;
