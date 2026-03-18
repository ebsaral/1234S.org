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
        en: 'The functions of the organs in our body help explain the consequences of the actions we perform in a community and society. The health conditions and functions of our organs come together to provide us with a silent guide. Depending on the outcomes of how we use our organs, we either become ill or healthier.',
        tr: 'Vücudumuzdaki organların işlevleri, bir toplulukta ve toplumda gerçekleştirdiğimiz eylemlerin sonuçlarını açıklamaya yardımcı olur. Organlarımızın sağlık durumları ve işleyiş amaçları bir araya gelerek bize sessiz bir rehber sunarlar. Organlarımızı kullanırken vesile oldukları sonuçlara göre hastalanır veya daha sağlıklı oluruz.',
      }),
      subtitle: t({
        en: md(
          'Under normal conditions, no living being becomes ill. Therefore, we need to reconstruct the concept of ‘normal’ imposed on us by traditional politics in a way that aligns with the principles of nature.\n\nBy examining these examples, you can better observe the functions and health conditions of the organs in your own body.',
        ),
        tr: md(
          'Normal şartlar altında hiçbir canlı hastalanmaz. Bu yüzden geleneksel politikaların bize dayattığı ‘normal’ anlayışını doğanın ilkeleriyle uyumlu olacak bir şekilde yeniden yapılandırmamız gerekiyor.\n\nBu örnekleri inceleyerek kendi bedeninizdeki organların işlevlerini ve sağlık durumlarını daha iyi gözlemleyebilirsiniz.',
        ),
      }),
      items: [
        t({
          en: 'A healthy mind and immune system indicate that our relationships in nature are highly positive.',
          tr: 'Sağlıklı bir zihin ve bağışıklık sistemi, doğada ilişkilerimizin çok olumlu olduğunu gösterir.',
        }),
        t({
          en: 'Any illness is a sign of our disharmony. It advises to restore balance in our relationships with the environment and with each other.',
          tr: 'Herhangi bir hastalık, uyumsuzluğumuzun bir işaretidir. Çevreyle ve birbirimizle olan ilişkilerimizdeki dengeyi yeniden sağlamamızı öğütler.',
        }),
      ],
      examples: [
        t({
          en: 'The degree of negativity caused by the sentences we use while speaking determines the level of inflammation we experience in our throat. If we compensate for that negativity, we can recover faster.',
          tr: 'Konuşurken kullandığımız cümlelerin vesile oldukları olumsuzluğun boyutuna göre boğazımızda iltihaplanma yaşarız. Yaşattığımız olumsuzluğu telafi edersek daha hızlı iyileşiriz.',
        }),
        t({
          en: "Poor vision may reflect the moments when we overlooked someone's opportunities. Negativity generated in relation to our focusing actions can be mirrored in our eyesight.",
          tr: 'Zayıf görme yeteneği, bir canlının fırsatlarına göz yumduğumuz anları yansıtabilir. Odaklanma eylemine yönelik yarattığımız olumsuzluklar, gözümüzdeki odaklanmaya yansıyabilir.',
        }),
        t({
          en: 'A decline in our hearing may reflect the times when we ignored or obstructed the call for help or request of ourself and others.',
          tr: 'İşitme duyumuzun azalması, kendimizin ve başka bir canlının yardım çığlığını/isteğini duymazdan geldiğimiz veya yön bulmasını engellediğimiz zamanları yansıtabilir.',
        }),
        t({
          en: 'The difficulties we create in our own life and in the lives of others can increase our risk of a heart attack.',
          tr: 'Kendimizin ve başka bir canlının yaşamında yarattığımız zorluklar kalp krizi riskimizi yükseltebilir.',
        }),
        t({
          en: 'A hunchback in our body may reflect the moments when we imposed life difficulties on ourself and others.',
          tr: 'Vücudumuzdaki kambur, hem kendimize hem başka canlılara yaşam zorlukları yüklediğimiz anları yansıtabilir.',
        }),
        t({
          en: 'If we have diabetes, the degree to which we are strict with yourself and those around us may be reflected in your blood.',
          tr: 'Eğer diyabet sorunu yaşıyorsak, kendimize ve etrafımızdaki insanlara katı davranma oranımız kanımıza yansıyordur.',
        }),
        t({
          en: 'If we have developed cancer, we have taken a life or caused deep suffering to a living being. Every cancer manifests itself in our body at different stages as the accumulation of the consequences of our negative actions.',
          tr: 'Eğer kansere yakalandıysak, bir canı aldık veya bir canlıya derin acılar yaşatmışızdır. Her kanser, olumsuz eylemlerimizden doğan sonuçların birikimleri olarak farklı evrelerde vücudumuza yansır.',
        }),
      ],
      info: t({
        en: 'Considering the interconnectedness of all living beings, we can understand how the health of those around us is reflected in our own health through our feelings. A characteristic that is normally very strong might deteriorate when we enter a new environment — *our vision might decrease, we might stumble while walking, or we might have difficulty thinking*. Therefore, the health of every individual in society is important to all of us.',
        tr: 'Tüm canlıların birbirleriyle olan bağları göz önünde bulundurulduğunda, çevremizdeki canlıların sağlık durumlarının hislerimiz aracılığıyla kendi sağlığımıza yansıdığını anlayabiliriz. Normalde çok sağlam olan bir özelliğimiz, herhangi bir çevreye girdiğimizde sağlığını kaybedebilir — *görme oranımız düşebilir, yürürken sendeleyebiliriz veya düşünürken zorlanabiliriz*. Bu yüzden toplumdaki her bireyin sağlığı hepimiz için önemlidir.',
      }),
    },
    paragraph1: t({
      en: md(
        "Even though each body's relationship with its environment is different, the consequences it experiences are similar. We cannot possess anything in nature. The negative actions we facilitate while using any object *(such as an organ, vehicle, or money)* affect our health and lives in a similar way. Along with our physical health, depending on our intentions, we can also lose our luck and opportunities.\n\nContrary to common belief, for a healthy and long life, we do not need special nutrition, treatment, or medication. Current treatment methods cannot go beyond patching the outcomes arising from repeated negative actions within any community. Therefore, for better health, we need to become better people and build a society that values good relationships.",
      ),
      tr: md(
        'Her vücudun çevresiyle olan ilişkileri farklı olsa bile hissettiği sonuçlar benzerdir. Doğada hiçbir şeye sahip olamayız. Herhangi bir varlığı *(organ, araç, para gibi)* kullanırken vesile olduğumuz olumsuz eylemler sağlığımızı ve yaşantımızı benzer şekilde etkiler. Fiziksel sağlımızla birlikte, niyetimize bağlı olarak şansımızı ve imkanlarımızı da kaybedebiliriz.\n\nBilinenin aksine, sağlıklı ve uzun bir yaşam için özel bir beslenmeye, tedaviye veya ilaca ihtiyaç duymayız. Güncel tedavi yöntemleri, herhangi bir topluluk içinde tekrarlanan olumsuz eylemlerden dolayı açığa çıkan sonuçlara yama uygulamaktan öteye gidemez. Bu yüzden daha iyi bir sağlık için, daha iyi bir insan olmamız ve iyi ilişkilere önem veren bir toplum inşa etmemiz gerekir.',
      ),
    }),
    paragraph2: t({
      en: md(
        "A healthy life is not just about having a strong body; it also depends on the presence of a mind that develops one's full potential. Mental health nourishes growth through focus, opportunities, talents, and other elements of chance — all of which are subject to nature's scale of justice. We may possess natural talents that arise from our relationships with our environment.\n\nWithin nature's interconnectedness, we can understand that illnesses developing during a baby's growth are connected to the parents' interactions with their environment. More effort is needed to cure hereditary diseases. Most likely, the treatment of many genetic illnesses can only occur in the next generation, because the harm done to nature through previous and current generations must be examined and remedied. While seeing humans as part of nature, we must not forget other beings. Therefore, some traditions may need reinterpretation: self-criticism and awareness are the beginning of every healing.\n\n**Whenever a microbe, virus, or chemical begins to harm our body, it navigates within us according to the chain of actions we choose in our lifetime.** Persisting in harmful behavior patterns leads to their spreading by damaging our body. As we understand our body systems together with our environment and guide our actions with awareness, healing, and renewal, our body regains balance and finds a way to eliminate harmful substances. In situations of high harmony with nature, conscious harms to our body lead to the responsible parties being punished in nature. Even with every  breath we take, we contribute to nature's punishment for every choice that harms us. We might be also living in the environment that faces the punishment.\n\n**The Organ-Action-Result Analogy applies to all accidents we experience.** Any injuries sustained in an accident serve as a lesson to us, reflecting our negative actions prior to the accident. The manner in which an accident occurs and the location of the injuries in our organs reveal the nature of our actions that caused them; they reveal our mental focus and how we use our bodies. No accident happens just because. Contrary to common belief, no living creature can harm another without a justifiable reason in nature. The fear factors in current management systems are merely mental strategies that force the attainment of freedom.\n\nTo maintain balance in nature, our memory, thoughts, and feelings may be reshaped, tested, and erased through the Creator. A balanced connection with nature enables a strong mental structure. Even if opportunities arise to compensate for mistakes, some errors lead to irreversible consequences.\n\nThrough the examples in our lives, We can see how the stress factor, which has negative effects on our health and cannot be fully defined, originates in the basic context, how it is formed, and why it causes problems. **In order to observe that natural disasters occur with a cause-and-effect relationship similar to that in our bodies, we need to understand ourselves and our environment better.** Stress, which emerges from the accumulation of negative actions originating in a specific environment, shapes earthquakes by reflecting on fault lines as a process. The more we understand nature's silent language, the better we can understand how we should live in harmony.",
      ),
      tr: md(
        'Sağlıklı bir yaşam, sadece güçlü bir bedene sahip olmak değildir; aynı zamanda, kişinin bütün potansiyelini geliştiren bir zihnin varlığına bağlıdır. Zihinsel sağlık, odaklanma, fırsatlar, yetenekler ve diğer şans unsurları aracılığıyla büyümeyi besler — bunların tümü de doğanın adalet terazisine bağlıdır. Çevremizle olan ilişkilerin getirileri olan doğal yeteneklere sahip olabiliriz.\n\nDoğanın bütünlüğünde, bir bebeğin gelişimi esnasında oluşan hastalıkların ebeveylerin çevreleriyle olan ilişkilerine bağlı olduğunu anlayabiliriz. Kalıtsal hastalıkların iyileşmesi için daha fazla çaba göstermek gerekir. Muhtemelen çoğu genetik hastalığın tedavisi sadece bir sonraki nesilde gerçekleşebilir. Çünkü bizden önceki ve mevcut nesiller aracılığıyla doğaya verilen zararın incelenmesi ve telafi edilmesi gerekir. İnsanı doğanın bir parçası olarak görürken, diğer canlıları unutmamalıyız. Bu yüzden, bazı geleneklerin tekrar yorumlanması gerekebilir: Öz eleştiri ve farkındalık her iyileşmenin başlangıcıdır.\n\n**Herhangi mikrop, virüs veya kimyasal vücudumuza zarar vermeye başladığında, yaşamımız boyunca seçimlerimizle oluşturduğumuz eylem zincirine göre vücudumuzda yön bulur.** Zararlı davranış kalıplarında ısrar etmek, bunların vücudumuza zarar vererek yayılmasına yol açar. Çevremizle birlikte kendi vücut sistemimizi anladıkça ve eylemlerimizi farkındalık, iyileşme ve yenilenme ile yönlendirdikçe, vücudumuz dengesini yeniden kazanır ve zararlı maddelerden kurtulmanın bir yolunu bulur. Doğayla uyumumuzun çok iyi olduğu durumlarda, vücudumuza verilen bilinçli zararlar sorumlularının doğada cezalandırılmasına vesile olur. Aldığımız her nefesle bile bize zarar veren her eylemin sorumlusunun doğada cezalandırılmasına vesile oluruz. İçinde yaşadığımız çevrenin cezalandırılmasıyla yüzleşmek zorunda da kalabiliriz.\n\n**Organ-Eylem-Sonuç Benzetmesi yaşadığımız tüm kazalar için de geçerlidir.** Herhangi bir kaza sonucunda vücudumuzda oluşan hasarlar, kazadan önceki olumsuz eylemlerimizin bir yansıması olarak bize bir ders vermeyi amaçlar. Yaşadığımız bir kazanın oluşma şekli ve organlarımızdaki hasarların yeri, sebep olan eylem(ler)imizin biçimlerini açıklar; zihnimizdeki odak noktamızı ve vücudumuzu nasıl kullandığımızı anlatır. Hiçbir kaza sebepsiz yere olmaz. Bilinenin aksine, hiçbir canlı başka bir canlıya doğada haklı bir sebebi olmadan zarar veremez. Güncel yönetim sistemlerindeki korku faktörleri, sadece özgürlüğe ulaşılmasını zorlayan zihinsel stratejilerden ibarettir.\n\nDoğadaki dengenin sağlanabilmesi için, Yaradan aracılığıyla hafızamız, düşüncelerimiz ve hislerimiz şekil değiştirebilir, sınanabilir ve silinebilir. Doğayla kurulan dengeli bir bağ, sağlam bir zihinsel yapıya imkan tanır. Hatalarımızı telafi etme fırsatı yeniden doğsa bile, bazı hatalar geri dönülemeyecek sonuçlara vesile olur.\n\nSağlığımıza olumsuz etkilerde bulunan ve tam olarak tanımlanamayan stres faktörünün, temel bağlamda nasıl kaynaklandığını, nasıl biçimlendiğini ve neden sorunlara yol açtığını yaşantılarımızdaki örneklerle görebiliriz. **Doğal afetlerin vücudumuzdakine benzer bir sebep-sonuç ilişkisiyle gerçekleştiklerini gözlemleyebilmemiz için kendimizi ve çevremizi daha iyi tanımamız gerekir.** Belirli bir çevrede kaynaklanan olumsuz eylemlerin birikiminden açığa çıkan stres, bir süreç halinde fay hatlarına yansıyarak depremleri şekillendirir. Doğanın sessiz dilini anladıkça nasıl bir ahenk içinde yaşamamız gerektiğini daha iyi anlayabiliriz.',
      ),
    }),
    paragraph3: t({
      en: md(
        "Within the principle of Interconnectedness in nature, we represent individuals and structures spread over different bodies. The members of a family represent the reflection of a single spirit in different bodies. The smallest and largest building blocks of communities exhibit similar workings in accordance with the principle of Justice in Nature. For example, in the structural integrity of a sports team, the actions of the smaller building blocks that make up that integrity are reflected in the team's success (spirit). We can better see the *silent* language of nature by deciphering the connections between these building blocks. We can read in the connections in nature how even the choices we make in our simple individual lives are reflected in the spirit of the entire society. We can discover that we share a deep connection even with people with whom we have no direct biological relation.",
      ),
      tr: md(
        'Doğadaki Bütünlük ilkesi içerisinde, farklı vücutlara bölünmüş bireyleri ve yapıları temsil ederiz. Bir ailenin bireyleri, tek bir ruhun farklı vücutlara yansımasını temsil eder. Toplulukların en küçük yapıtaşları ile en büyük yapıtaşları, Doğadaki Adalet ilkesi doğrultusunda benzer işleyişler gösterir. Örneğin, bir spor takımının yapısal bütünlüğünde, o bütünlüğü oluşturan küçük yapıtaşlarının eylemleri takımın başarısına (ruhuna) yansır. Doğanın *sessiz* dilini bu yapıtaşlarının arasındaki bağlantıyı çözerek daha iyi görebiliriz. Tek kişilik basit bir yaşantımızda gerçekleştirdiğimiz seçimlerin bile tüm toplumun ruhuna yansıdığını doğadaki bağlantılarda okuyabiliriz. Biyolojik bağımızın bulunmadığı insanlarla bile derin bir bağı paylaştığımızı keşfedebiliriz.',
      ),
    }),
    paragraph4: t({
      en: md(
        'Just as the consequences of negative actions we take are reflected back into our bodies, the consequences of negative actions performed by all organs (divisons) within a company or organization are reflected back into the organs of the company or organization. Along with financial losses, some losses in the health of employees occur, proportional to the rate of crimes committed in nature. We can see the details of the interconnectedness in nature by comparing any company with a human body. The laws of our current system may not align with the laws in nature, but everyone living in a community or society has equal responsibilities. Therefore, it is also a natural fact that everyone should have equal rights.',
      ),
      tr: md(
        'Gerçekleştiren olumsuz eylemlerin sonuçlarının vücudumuza geri yansımasına benzer şekilde, bir şirketteki veya organizasyondaki tüm organların (bölümlerin) gerçekleştirdiği olumsuz eylemlerin sonuçları şirketin veya organizasyonun organlarına geri yansır. Finansal kayıplarla birlikte, doğada işlenen suçların oranına göre çalışanların sağlıklarında kayıplar yaşanır. Herhangi bir şirketin yapısını insan vücudu ile karşılaştırarak doğadaki bütünlüğün detaylarını görebiliriz. İçerisinde bulunduğumuz güncel sistemin kanunları doğanın kanunlarıyla örtüşmüyor olabilir fakat bir toplulukta veya toplumda yaşayan herkes eşit sorumluluklara sahiptir. Haliyle herkesin eşit haklara sahip olması da doğal bir gerçektir.',
      ),
    }),
  },
} satisfies Dictionary;

export default pageContent;
