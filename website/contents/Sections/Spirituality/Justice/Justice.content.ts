import { md, t, type Dictionary } from 'intlayer';

interface JusticeContent {
  title: string;
  subtitle: string;
  description: string;
  equality: {
    title: string;
    subtitle: string;
    description: string;
  };
  freedom: {
    title: string;
    subtitle: string;
    description: string;
  };
  statement: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  positiveConsequences: {
    title: string;
    nature: string;
    health: string;
    luck: string;
  };
  negativeConsequences: {
    title: string;
    nature: string;
    health: string;
    luck: string;
  };
}

const pageContent = {
  key: 'justice-section',
  content: {
    title: t({
      en: 'Justice',
      tr: 'Adalet',
    }),
    subtitle: t({
      en: 'The Logic in Nature',
      tr: 'Doğadaki Mantık',
    }),
    description: t({
      en: md(
        `While Interconnectedness details the bonds in our lives through our feelings, the justice in nature provides the balance between our bonds. **Justice proves itself in the vitality and health conditions of living beings.**\n\nEvery entity contains meanings composed of different sets of feelings and serves as a means for us to perform good or bad actions. Every action we take brings its own consequences, whether positive or negative. The Creator always knows our true intention and guides the necessary outcome in our lives. **No being can escape the cause-and-effect relationship.**`,
      ),
      tr: md(
        `Bütünlük yaşamımızdaki bağları hislerimizle detaylandırırken, doğadaki adalet bağlarımız arasındaki dengeyi sağlar. **Adalet, canlılığın ve canlıların sağlık durumlarında kendini kanıtlar.**\n\nHer varlık farklı his kümelerinden oluşan anlamlar barındırır ve iyi ya da kötü eylemler gerçekleştirmemize vesile olur. Her eylemimiz olumlu veya olumsuz olarak kendi sonuçlarını beraberinde getirir. Yaradan gerçek niyetimizi her zaman bilir ve yaşamımızda gerekli olan sonucu bize doğru çeker. **Sebep-sonuç ilişkisinden hiçbir canlı kaçamaz.**`,
      ),
    }),
    paragraph1: t({
      en: md(
        'The Creator ensures justice in nature by intervening in the connections between our feelings; transforming beings into elements necessary for balance. The health conditions needed for the principles of equality and freedom allow harmony at different times and in various ways. For physical health to be used positively, the factors of chance and talent, which are the balancing tools of mental health, are shaped.',
      ),
      tr: md(
        'Yaradan, hislerimiz arasındaki bağlara müdahale ederek doğadaki adaleti sağlar; varlıkları denge için gerekli unsurlara dönüştürür. Eşitlik ve özgürlük ilkeleri için ihtiyaç duyulan sağlık koşulları farklı zamanlarda ve şekillerde uyumu sağlar. Fiziksel sağlığın olumlu bir biçimde kullanılabilmesi için zihinsel sağlığın denge araçları olan şans ve yetenek faktörleri şekillenir.',
      ),
    }),
    paragraph2: t({
      en: md(
        'All diseases, epidemics, earthquakes, storms, floods, droughts, animal attacks, conflicts, crises, and wars experienced from the beginning to the present reveal justice in nature. Humanity delays its own welfare when it reduces the symbols of nature to its own frame of meaning and disregards other living beings. **All outcomes directly reflect how the principles of equality and freedom are applied.** Every negative outcome is a cry of injustice in nature. *For example: While watching someone recount a traffic accident on the news, we simultaneously hear the confession of their another unseen wrongdoing.*',
      ),
      tr: md(
        'Başlangıçtan günümüze yaşanılan tüm hastalıklar, salgınlar, depremler, fırtınalar, seller, kuraklıklar, hayvan saldırıları, kazalar, çatışmalar, krizler ve savaşlar doğadaki adaleti gözler önüne serer. İnsanlık, doğanın sembollerini yalnızca kendi anlam çerçevesine indirgediğinde ve diğer canlıları umursamadığında, kendi refahını da ertelemiş olur. **Tüm sonuçlar eşitlik ve özgürlük ilkelerinin nasıl uygulandığını doğrudan yansıtır.** Her olumsuz sonuç, doğada yaşanan adaletsizliğin çığlığıdır. *Örneğin: Haberlerde geçirdiği trafik kazasını anlatan birini izlerken, aynı zamanda o kişinin görmediğimiz başka bir suçunu itiraf ettiğini duyarız.*',
      ),
    }),
    paragraph3: t({
      en: md(
        '**Any teaching, knowledge or belief may not align with the balance of justice in nature.** Because the Creator always knows the true intentions behind our actions in nature, the consequences of our actions will manifest in our health (our lives) when necessary. In situations where the justice of nature must prevail, no technology will ever exist to prevent it.',
      ),
      tr: md(
        '**Herhangi bir öğreti, bilgi veya inanış, doğadaki adalet dengesiyle örtüşmeyebilir.** Yaradan doğada gerçekleştirdiğimiz eylemlerimizin gerçek niyetlerini her zaman bildiği için, eylemlerimizin oluşturacağı sonuçlar sağlığımızda (hayatımızda) gerektiği zaman tezahür edecektir. Doğadaki adaletin tecelli etmesi gerektiği durumlarda önüne geçebilecek herhangi bir teknoloji hiçbir zaman var olmayacaktır.',
      ),
    }),
    equality: {
      title: t({
        en: md('### Equality'),
        tr: md('### Eşitlik'),
      }),
      subtitle: t({
        en: md('Shared Health, Same Laws'),
        tr: md('Ortak Sağlık, Aynı Yasalar'),
      }),
      description: t({
        en: md(
          'Within the scope of Interconnectedness, just as the positive development of a being provides benefits to its surroundings, the pain felt by one affects the health of all around it.',
        ),
        tr: md(
          'Bütünlük kapsamında, bir canlının olumlu gelişiminin etrafına faydalar sağlaması gibi, birinin hissettiği acı da tüm çevresinin sağlığını etkiler.',
        ),
      }),
    },
    freedom: {
      title: t({
        en: md('### Freedom'),
        tr: md('### Özgürlük'),
      }),
      subtitle: t({
        en: md('Choices Within Natural Limits'),
        tr: md('Doğal Sınırlar İçindeki Seçimler'),
      }),
      description: t({
        en: md(
          'When equality is not respected, the limits of freedom are determined by nature. Respecting the life of all beings allows for greater freedom.',
        ),
        tr: md(
          'Eşitliğe saygı gösterilmediğinde, özgürlüğün sınırları doğada belirir. Tüm canlıların yaşamına saygı duymak, daha özgür olmayı sağlar.',
        ),
      }),
    },
    statement: t({
      en: md('Equality is a **biological** and **ecological** truth.'),
      tr: md('Eşitlik **biyolojik ve ekolojik** bir gerçektir.'),
    }),
    positiveConsequences: {
      title: t({
        en: md('### Positive Consequences'),
        tr: md('### Olumlu Sonuçlar'),
      }),
      nature: t({
        en: md('Fertile soil, balanced weather conditions, and ecological harmony...'),
        tr: md('Verimli toprak, dengeli hava koşulları ve ekolojik uyum...'),
      }),
      health: t({
        en: md(
          'Having a strong immune system, achieving robust mental health, increased talents, and a long lifespan...',
        ),
        tr: md(
          'Güçlü bağışıklık sistemine sahip olmak, güçlü zihin sağlığına erişmek, yeteneklerde artış ve uzun ömür...',
        ),
      }),
      luck: t({
        en: md(
          'Encountering supportive elements, discovering new opportunities, finding practical solutions, and gaining natural protection...',
        ),
        tr: md(
          'Destekleyici unsurlarla karşılaşmak, yeni fırsatlar keşfetmek, pratik çözüm bulmak ve doğal korunma kazanmak...',
        ),
      }),
    },
    negativeConsequences: {
      title: t({
        en: md('### Negative Consequences'),
        tr: md('### Olumsuz Sonuçlar'),
      }),
      nature: t({
        en: md('Droughts, floods, hurricanes, fires, and global warming...'),
        tr: md('Kuraklıklar, seller, kasırgalar, yangınlar ve küresel ısınma...'),
      }),
      health: t({
        en: md('Physical and mental illnesses; heart attacks, genetic disorders, and pandemics...'),
        tr: md('Fiziksel ve zihinsel hastalıklar; kalp krizleri, genetik bozukluklar ve pandemiler...'),
      }),
      luck: t({
        en: md('Economic difficulties, missed opportunities, all kinds of home/work/street accidents...'),
        tr: md('Ekonomik zorluklar, fırsat kayıpları, her türlü ev/iş/sokak kazaları...'),
      }),
    },
  },
} satisfies Dictionary<JusticeContent>;

export default pageContent;
