import { md, t, type Dictionary } from 'intlayer';

interface FAQContent {
  title: string;
  description: string;
  items: {
    title: string;
    subtitle: string;
  }[];
  contact: string;
}

const pageContent = {
  key: 'faq-section',
  content: {
    title: t({
      en: 'Frequently Asked Questions',
      tr: 'Sıkça Sorulan Sorular',
    }),
    description: t({
      en: md(
        "Our summarized answers to the common questions have appeared in the mind throughout some civilizations, with the guidance of Logical Spirituality's teachings.",
      ),
      tr: md(
        'Mantıksal Maneviyat öğretilerinin yardımıyla bazı kültürlerin zihinlerde oluşturduğu genel sorulara verdiğimiz özet cevaplar.',
      ),
    }),
    items: [
      {
        title: t({
          en: 'Why did we come to the world?',
          tr: 'Dünyaya neden geldik?',
        }),
        subtitle: t({
          en: 'No living being has ever been able to learn the answer to this. We keep thinking about how we came to be. According to the most up-to-date knowledge we have, we came into the world to live. By placing life at the center, we continue to find meaning at the points where our own journeys intersect. What will happen after we die is not a question we can answer, because all rewards and punishments already exist in the reality we experience.',
          tr: 'Bunun cevabını hiçbir canlı şimdiye kadar öğrenemedi. Nasıl geldiğimizi düşünmeye devam ediyoruz. Elimizdeki en güncel bilgiye göre dünyaya yaşamak için geldik. Yaşamı merkezimize alarak kendi serüvenlerimizin kesiştiği noktalarda anlamlar kazanmaya devam ediyoruz. Öldükten sonra ne olacağı bizim cevap bulabileceğimiz bir soru değil. Çünkü tüm ödüller ve cezalar hissettiğimiz gerçekte mevcut.',
        }),
      },
      {
        title: t({
          en: 'Is life nothing more than a test?',
          tr: 'Yaşam bir sınavdan ibaret mi?',
        }),
        subtitle: t({
          en: 'Since we ourselves create the general stresses and troubles in life, we can again find the answer within ourselves. Every negative thought and form of behavior directed against the sanctity of life is doomed to disappear in the justice of nature. Around this fundamental truth, it can be seen that no negatively perceived trial in our lives carries any lasting meaning.',
          tr: 'Yaşamdaki genel stresleri ve sıkıntıları bizler yarattığımız için cevabını yine kendimizde bulabiliriz. Yaşamın kutsallığı üzerine getirilen her olumsuz düşünce ve davranış biçimi doğanın adaletinde yok olmaya mahkumdur. Bu temel gerçek etrafında, hayatımızdaki olumsuz anlamdaki hiçbir sınavın kalıcı bir mana taşımadığı görülebilir.',
        }),
      },
      {
        title: t({
          en: 'Is there free will? Is there freedom?',
          tr: 'Özgür irade var mı? Özgürlük var mı?',
        }),
        subtitle: t({
          en: 'An individual’s freedom is determined by the freedom of their surroundings. Since all of our choices are reflections shaped by our environment together with the past, our freedom remains incomplete unless we understand and heal our emotions. In the sight of the Creator, all the choices we will make are already known. Therefore, life is nothing more than accompanying a shared journey of destiny with our feelings. The consequences of choices we make while ignoring the negativity around us are reflected in our later choices or in future generations. In today’s global system, the fact that the wealthy are in a position of enslaving our lives is a general result of citizens not taking responsibility and of careless consumption habits. For this reason, diseases and disasters continue to restrict our freedom.',
          tr: "Bireyin özgürlüğü çevresinin özgürlüğü ile belirlenir. Hepimizin seçimleri çevremizin geçmişle birlikte yoğrulan yansımaları olduğu için, hislerimizi anlayarak iyileştirmedikçe özgürlüğümüz eksik kalır. Yaradan'ın nezdinde yapacağımız tüm seçimler önceden bellidir. Bu yüzden, yaşam sadece ortak kader yolculuğuna hislerimizle eşlik etmekten ibarettir. Çevremizdeki olumsuzlukları ihmal ederek yaptığımız seçimlerin cezaları daha sonraki seçimlerimize veya gelecek nesillerimize yansır. Şu anki küresel sistemde zenginlerin yaşantılarımızı köleleştirmiş pozisyonda olmaları, vatandaşların sorumluluk almamaları ve umursamaz tüketme alışkanlığının genel bir sonucudur. Bundan dolayı, hastalıklar ve afetler özgürlüğümüzü kısıtlamaya devam ediyor.",
        }),
      },
      {
        title: t({
          en: 'What do concepts like angels, devils, and the like represent in nature?',
          tr: 'Melek, şeytan, vb. kavramlar doğada neyi temsil ediyor?',
        }),
        subtitle: t({
          en: 'The fundamental reasons for the emergence of mystical characters that are interpreted similarly across different belief systems are the period-specific reflections of the bonds societies established with the Creator. One of the figures mentioned in mythological narratives, the angel named Azrael, actually represents a human figure. Since there were no civil laws at that time, in societies where much suffering was experienced, certain figures would come to be placed under the special protection of the Creator. Those who harmed figures (beings) under such high protection would face punishments in nature through the Creator. The belief that the one who delivered the punishment was the figure called Azrael reflects the perspective of the society of that time in interpreting the Creator. Even if we do not see it within today’s global system, justice in nature continues to maintain its validity in the same way. Harming a being who is in need of the Creator’s protection *(see: the expression “an angel-like person”)* may lead to us losing our own lives.',
          tr: "Her farklı inanışta benzer şekilde yorumlanan mistik karakterlerin temel çıkış sebepleri, toplulukların Yaradan ile kurmuş oldukları bağların dönemsel yansımalarıdır. Mitolojik anlatılarda bahsi geçen figürlerden biri olan Azrail isimli melek aslında bir insan figürünü temsil eder. O dönemde medeni kanunlar olmadığı için, çok fazla acının yaşandığı toplumlarda Yaradan'ın özel koruması altına alınan figürler oluşurdu. Yüksek derecede koruma altına alınan figürlere (canlılara) zarar verenler, Yaradan aracılığıyla doğadaki cezalarla karşılaşırlardı. Cezayı verenin Azrail isimli figür olduğunun düşünülmesi ise o dönemde Yaradan'ı yorumlayan toplumun bakış açısıdır. Güncel küresel sistem içerisinde görmüyor olsak bile, doğadaki adalet geçerliliğini aynı şekilde korumaya devam ediyor. Yaradan'ın korumasına muhtaç olan bir canlıya zarar vermemiz *(bkz: 'melek gibi insan' deyimi)*, yaşantımızı kaybetmemize vesile olabilir.",
        }),
      },
      {
        title: t({
          en: 'What do prophets, great commanders, great thinkers, and the like represent in nature?',
          tr: 'Peygamberler, büyük komutanlar, büyük düşünürler vb. doğada neyi temsil ediyor?',
        }),
        subtitle: t({
          en: 'All people who have been interpreted as special throughout history had equal opportunities and chances in nature, just like other people. Their rising to prominence over time was due to the divine support needed to heal the harmful actions within the communities they lived in and around. All leaders who failed to use the opportunity given to them well and instead harmed other communities faced the justice of nature like everyone else and experienced the pain they inflicted on other beings. No being receives special treatment. Most people today have more opportunities and abilities than all those who were once seen as special in the past. Anyone who wants to heal any society by taking responsibility can gain similar divine support.',
          tr: 'Tarihte özel olarak yorumlanan tüm insanlar, diğer insanlar gibi doğada eşit fırsatlara ve şanslara sahiplerdi. Zaman içinde onların ön plana çıkmaları, yaşadıkları ve etraflarındaki topluluklar içindeki kötü eylemlerin iyileşmesi için gerekli olan ilahi takviyelerdi. Kendilerine verilen şansı iyi değerlendirmeyerek başka topluluklara zarar veren tüm liderler, herkes gibi doğanın adaletiyle yüzleşerek diğer canlılara verdikleri acıyı yaşadılar. Hiçbir canlı özel muamele görmez. Günümüzdeki insanların çoğunluğu, geçmişte özel olarak görülen tüm insanlardan daha fazla şansa ve yeteneklere sahipler. Sorumluluk alarak herhangi bir toplumu iyileştirmek isteyen herkes benzer ilahi takviyeleri kazanabilir.',
        }),
      },
      {
        title: t({
          en: 'What do great miracles, great curses, and the like represent in nature?',
          tr: 'Büyük mucizeler, büyük lanetler vb. doğada neyi temsil ediyor?',
        }),
        subtitle: t({
          en: 'We need to examine the factors that we interpret as miracles and curses. An event that is a miracle for you may be a curse for someone else. Even today, many similar miracles or curses exist. When the justice of nature is about to take place, the way people who possess divine support (abilities) perceive coincidences and convey them to the public is interpreted as a miracle. In this way, they gain recognition within or around communities. All communities that continue to use miracles only for themselves and, by moving away from goodness, harm other beings have to face curses (negative consequences) in nature. The concept of *coincidence* mentioned in the journey of destiny is an incomplete notion that emerged over time due to our inability to resolve cause-and-effect relationships in nature.',
          tr: 'Mucize ve lanet olarak yorumladığımız faktörleri incelememiz gerekir. Sizin için mucize olan bir vaka, başkası için bir lanet olabilir. Bugün de benzer birçok mucize veya lanet mevcuttur. Doğanın adaletinin gerçekleşeceği zamanlarda ilahi takviyelere (yeteneklere) sahip olan insanların tesadüfleri hissederek halka aktarış biçimleri mucize olarak yorumlanır. Böylece topluluklar içinde veya etraflarında bilinirlik kazanırlar. Mucizeleri sadece kendileri için kullanmaya devam edip iyilikten uzaklaşarak başka canlılara zarar veren tüm topluluklar doğadaki lanetlerle (olumsuz sonuçlarla) karşılaşmak zorunda kalırlar. Kader yolculuğunda bahsi geçen *tesadüf* anlayışı, doğadaki neden-sonuç ilişkilerini çözememekten dolayı zaman içinde oluşan eksik bir kavramdır.',
        }),
      },
      {
        title: t({
          en: 'What do jinn, unseen beings, speaking with the dead, and similar things represent in nature?',
          tr: 'Cinler, görülmeyen varlıklar, ölülerle konuşmak vb. doğada neyi temsil ediyor?',
        }),
        subtitle: t({
          en: 'As can be understood through the Principle of Interconnectedness in our teachings, everyone has a direct deep connection with nature through the Creator. The transformations, developments, or awakenings in our feelings in response to what happens around us reflect our manner of interaction with nature. The fact that the journey of destiny is independent of time and space leads to many experiences being repeated in similar cycles. Therefore, the behavior of a person from the past or the future is reflected in our current choices. Every event that we feel but cannot see aims to educate us about our interactions with nature (our environment). The existence and choices of the living beings around us are reflected in the feelings within our bodies. If we can interpret our feelings through our shared life experience, we can easily understand that our feelings aim to offer guidance rather than harm us. Because people in the past interpreted their responsibilities in nature through individual perspectives, they found it more accurate to explain their experiences through figures of invisible beings.',
          tr: 'Öğretilerimizdeki Bütünlük ilkesi ile anlayabileceğimiz üzere, herkesin Yaradan aracılığıyla doğayla olan doğrudan derin bir bağı vardır. Çevremizdeki yaşananlara yönelik hislerimizdeki dönüşümler, gelişimler veya uyarılışlar doğa ile olan etkileşim biçimimizi yansıtır. Kader yolculuğunun zamandan ve mekandan bağımsız olması, birçok yaşantının benzer döngülerde tekrarlanıyor olmasına vesile olur. Bu yüzden, geçmişteki veya gelecekteki bir insanın davranış biçimi güncel seçimlerimize yansır. Hissettiğimiz fakat göremediğimiz her vaka bize doğayla (çevremizle) olan etkileşimlerimize yönelik eğitim vermeyi amaçlar. Çevremizdeki canlıların varlıkları ve seçimleri vücudumuzdaki hislere yansırlar. Eğer hislerimizi ortak yaşam tecrübemizle yorumlayabilirsek, hislerimizin bize zarar vermekten ziyade rehberlik sunmayı amaçladıklarını kolaylıkla anlayabiliriz. Geçmişteki insanlar doğadaki sorumluluklarını bireysel bakış açılarıyla yorumladıkları için, yaşadıklarını görünmez canlı figürleriyle açıklamayı daha doğru buldular.',
        }),
      },
      {
        title: t({
          en: 'What do tarot cards, fortune-telling, and the like represent in nature?',
          tr: 'Tarot kartları, fal bakımı vb. doğada neyi temsil ediyor?',
        }),
        subtitle: t({
          en: 'On the journey of destiny, everyone has equal opportunities and chances. Our destiny is also shaped according to our past choices. The results of choices made with good intentions are reflected positively both on the individual and on their environment. Since nothing in nature is *random*, every choice we make is aligned with the next step. Therefore, any imagined work we create with good intentions, or any situation we interpret, will reach the same conclusion as when interpreting it with tarot cards. If you wish, you can create your own fortune at home by drawing many pictures with different meanings; you do not need a special card, a special reading, or a special intermediary. When the people who interpret or have interpretations done are not well-intentioned, negative outcomes are reached. As a return for their good intentions, people with more life experience may have broader and more accurate interpretive abilities.',
          tr: 'Kader yolculuğunda herkes eşit fırsatlara ve şansa sahiptir. Kaderimiz aynı zamanda geçmişteki seçimlerimize göre şekil alır. İyi niyetle yapılan seçimlerin sonucu hem bireye hem çevresine olumlu olarak yansır. Doğada *rastgele* bir şey olmadığı için, yapacağımız her seçim bir sonraki adım ile uyumlu olur. Bu yüzden, iyi niyetle çizdiğimiz herhangi bir hayal ürünü eser veya yorumladığımız herhangi bir durum, tarot kartlarıyla yorumladığımız sonuca ulaşır. Dilerseniz farklı anlamlarda birçok resim çizerek kendi falınızı siz de evinizde oluşturabilirsiniz; özel bir karta, özel bir fala, özel bir aracıya ihtiyacınız yok. Yorumlama yapan veya yaptıran insanların iyi niyetli olmadıkları durumlarda olumsuz sonuçlara ulaşılır. Yaşam tecrübesi daha fazla olan insanların iyi niyetlerinin karşılığı olarak yorumlama yetenekleri daha kapsamlı ve isabetli olabilir.',
        }),
      },
      {
        title: t({
          en: 'What do special days, zodiac signs, and the like represent in nature?',
          tr: 'Özel günler, burçlar vb. doğada neyi temsil ediyor?',
        }),
        subtitle: t({
          en: 'In fact, there is no such concept as time in the universe. What gives us the feeling of time in nature is the time it takes for the Earth to complete one orbit around the Sun (or the Sun to complete one orbit around the Earth). The ways people interpret time for their societies are shaped by their lifestyles. It is unknown whether the distances or speeds of the planets have changed throughout history. Different meanings are assigned to days so that periodically experienced miracles can spread throughout society and/or so that relationships can be kept in memory. All of our spiritual states change fluidly at different times throughout the day. Naturally, every person experiences the characteristics of every zodiac sign that has come down from the past to the present within a year (sometimes even within a single day). As the details in our lives increase, the frequency with which we experience the feelings attributed to zodiac signs increases. Predictions about zodiac signs show similarities to the results reached through tarot readings.',
          tr: 'Aslında evrende zaman diye bir kavram yoktur. Doğada zaman kavramını hissettiren ise dünyanın güneş etrafındaki (veya güneşin dünya etrafında) turunu tamamladığı süreden ibarettir. Gezegenlerin tarih boyunca mesafelerinde veya hızlarında değişiklik yaşanıp yaşanmadığı bilinmiyor. İnsanların toplumlarına yönelik zamanı yorumlama biçimleri yaşam tarzlarına göre şekil alır. Dönemsel olarak yaşanan mucizelerin toplum geneline yayılması ve/veya ilişkilerin hafızada tutulması için günlere farklı anlamlar yüklenir. Hepimizin ruhsal durumu gün içerisinde farklı zamanlarda akışkan bir biçimde değişiklikler gösterir. Haliyle her insan geçmişten günümüze gelen her burcun özelliğini bir yıl içerisinde (bazen bir gün içerisinde) yaşar. Yaşantımızdaki detaylar arttıkça, burçlara yönelik atfedilen hisleri yaşama sıklığımız artar. Burçlara yönelik tahminler tarot falıyla ulaşılan sonuçlarla benzerlik gösterir.',
        }),
      },
      {
        title: t({
          en: 'What do prayer, the evil eye, and the like represent in nature?',
          tr: 'Dua, nazar vb. doğada neyi temsil ediyor?',
        }),
        subtitle: t({
          en: 'Every production is the reflection of any environment and carry the surrounding emotions with them. No text that is regarded as sacred has the power to prevent the punishment that would arise from a negative action. If reading or reciting a text leads to positive feelings in its surroundings, this is not because the text is sacred; rather, the self and intention of the person reading it are reflected in the surrounding experience. Singing a song and reciting prayers are similar actions. What is commonly referred to in society as the evil eye is the reflection of a negative action back into our feelings. Therefore, we fall into the notion of the evil eye not because we are *very talented*, but because we have carried out a negative action or because of negative events happening around us.',
          tr: 'Herhangi bir üretim çevresinin birer yansımasıdır ve etrafındaki hisleri beraberinde taşır. Kutsal olarak atfedilen herhangi bir metnin olumsuz bir eylemden dolayı açığa çıkacak olan cezayı engelleme özelliği yoktur. Eğer bir metnin okunması veya söylenmesi çevresinde olumlu hisler yaşanmasına vesile oluyorsa, bu durum okunan metnin kutsal olmasından dolayı değildir; metni okuyan kişinin benliği ve niyeti çevresindeki yaşantıya yansır. Şarkı söylemek ve dua okumak benzer eylemlerdir. Toplum genelinde sıkça dile getirilen nazar ise gerçekleştirilen olumsuz bir eylemin hislerimize geri yansıyor olmasıdır. Haliyle *çok yetenekli* olduğumuz için değil, olumsuz bir eylem gerçekleştirdiğimiz için veya çevremizde yaşanan olumsuzluklardan dolayı nazar olgusuna kapılırız.',
        }),
      },
      {
        title: t({
          en: 'What do concepts like halal, haram, slavery, zakat, charity represent in nature?',
          tr: 'Helal, haram, köle, zekat, sadaka vb. kavramlar doğada neyi temsil ediyor?',
        }),
        subtitle: t({
          en: "By placing life, the sacred gift of the Creator, at the center of our lives, we should strive to understand all living beings through the lens of our shared health. A being in nature can be considered permissible (halal) if it does not harm our health. A being that harms our health can be considered forbidden (haram). An action or substance that harms the health of only one person or society may be beneficial to the health of another. Behaviors defined as forbidden by some leaders in the past may have emerged only as punishments for those leaders' own actions. To enslave or treat any living being as a slave is to oppose life, the sacred gift of the Creator. Therefore, any text that attempts to explain how to treat a slave (such as law, zakat, sadaqa, etc.) naturally represents associating partners with God (shirk). The illnesses or natural disasters that result from a lack of respect for life provide the necessary justice.",
          tr: "Yaradan'ın kutsalı olan yaşamı hayatımızın merkezine alarak ortak sağlığımız üzerinden tüm canlıları anlamaya çalışmalıyız. Doğadaki bir varlık sağlığımıza zarar vermiyorsa helal olarak görülebilir. Sağlığımıza zarar veren bir varlık ise haram olarak görülebilir. Sadece bir kişinin veya toplumun sağlığına zarar veren bir eylem veya madde, başka birinin sağlığına iyi geliyor olabilir. Geçmişte bazı liderler tarafından haram olarak tanımlanan davranışlar, o liderlerin kendi tavırlarından dolayı sadece kendilerine verilen cezalardan açığa çıkmış olabilir. Herhangi bir canlıyı köle yapmamız veya köle görmemiz ise Yaradan'ın kutsalı olan yaşama karşı çıkmaktır. Bu yüzden içinde köleye nasıl davranılması gerektiğini açıklamaya çalışan (kanun, zekat, sadaka, vs.) herhangi bir metin doğal olarak Yaradan'a şirk koşmayı temsil eder. Yaşama duyulmayan saygının karşılığında vücudumuzda oluşan hastalıklar veya doğal afetler gereken adaleti sağlar.",
        }),
      },
      {
        title: t({
          en: 'Do animals exist for our service? Why can some animals be eaten while others cannot?',
          tr: 'Hayvanlar bizim hizmetimiz için mi varlar? Neden bazı hayvanlar yenebiliyor, bazıları yenemiyor?',
        }),
        subtitle: t({
          en: 'Eating any animal is not permissible, and it is a choice that goes against the laws of nature. Torturing or killing any living being is an act committed against what is sacred to the Creator. In the past, because communities wanted to protect certain animals from other animals, they regarded those animals as sacred. Making animals carry loads in order to escape physical labor is a choice that weakens a society’s overall immunity and drains its energy. The negativity in the choices made is reflected back as natural disasters or social chaos. If we cannot perform an action without torturing another animal, then we do not need to perform that action. Protecting the health of other animals leads us to be more resilient and stronger. The reason we use animal skins to keep warm is, in fact, that we are killing animals. Valuing each other’s vitality helps our body temperature and the Earth’s temperature reach healthier conditions.',
          tr: "Hiçbir hayvanı yememiz serbest değil ve doğanın kanunlarına aykırı bir seçimdir. Herhangi bir canlıya işkence etmek veya öldürmek Yaradan'ın kutsalına karşı yapılan bir eylemdir. Geçmişte bazı hayvanları diğer hayvanlardan korumak istedikleri için, topluluklar o hayvanları kutsal olarak gördüler. Yük gücünden kurtulmak için hayvanlara yük taşıtmak toplumun genel bağışıklığını azaltan ve enerjisini tüketen bir seçimdir. Yapılan seçimlerdeki olumsuzluklar doğal afet veya toplumsal kaos olarak geri yansır. Herhangi bir eylemi başka bir hayvana işkence yapmadan yapamıyorsak, o eylemin yapılmasına ihtiyacımız yoktur. Diğer havyanların sağlığını korumak daha dirençli ve kuvvetli olmamıza vesile olur. Hayvanların derilerini ısınmak için kullanılıyor olmamızın nedeni, aslında hayvanları öldürüyor olmamızdır. Birbirimizin canlılığına önem vermemiz, vücut ısımızın ve dünyanın sıcaklığının olumlu sağlık koşullarına ulaşmasına vesile olur.",
        }),
      },
      {
        title: t({
          en: 'Where might we be going?',
          tr: 'Nereye gidiyor olabiliriz?',
        }),
        subtitle: t({
          en: 'In light of the current teachings we have reached, it seems easy to build a future in which no living being becomes ill, as our actions are corrected across society. In a social order where no being is sick, we would reach a way of life in which only aging would be seen as an illness (or a negative condition). What later generations who reach that point would need to think about is how they can live longer through natural means, or how they might not die at all.',
          tr: 'Ulaştığımız güncel öğretilerin ışığında, eylemlerimizin toplum genelinde düzeltilmesiyle birlikte hiçbir canlının hasta olmayacağı bir gelecek inşa etmemiz kolay gözüküyor. Hiçbir canlının hasta olmadığı bir sosyal düzende, sadece yaşlanmanın hastalık (veya olumsuzluk) olarak görüleceği bir yaşam tarzına kavuşmuş oluruz. O noktaya ulaşan sonraki nesillerin düşünmesi gereken husus ise doğal yollarla nasıl daha uzun ömürlü olabilecekleri veya hiç ölmeyecekleri olur.',
        }),
      },
    ],
    contact: t({
      en: md(
        'You can [contact us](mailto:logical.spirituality@icloud.com) to understand Logical Spirituality in depth and find answers to your questions. We continue to improve our teachings after each question or debate.',
      ),
      tr: md(
        "Mantıksal Maneviyat'ın detaylarını daha iyi anlamak ve sorularınıza cevap bulmak için [bizimle iletişime geçebilirsiniz](mailto:mantiksal.maneviyat@icloud.com). Her sorulan soruyla veya tartışmayla birlikte öğretilerimizi geliştirmeye devam ediyoruz.",
      ),
    }),
  },
} satisfies Dictionary<FAQContent>;

export default pageContent;
