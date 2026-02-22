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
  consequences: {
    title: string;
    labels: {
      source: string;
      means: string;
      result: string;
    };
    items: {
      source: string;
      means: string;
      result: string;
    }[];
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
        '**Any teaching, knowledge or belief may not align with the balance of justice in nature.** Because the Creator always knows the true intentions behind our actions in nature, the consequences of our actions will manifest in our health when necessary. In situations where the justice of nature must prevail, no power or technology will ever exist to prevent it.',
      ),
      tr: md(
        '**Herhangi bir öğreti, bilgi veya inanış, doğadaki adalet dengesiyle örtüşmeyebilir.** Yaradan doğada gerçekleştirdiğimiz eylemlerimizin gerçek niyetlerini her zaman bildiği için, eylemlerimizin oluşturacağı sonuçlar sağlığımızda gerektiği zaman tezahür eder. Doğadaki adaletin tecelli etmesi gerektiği durumlarda önüne geçebilecek herhangi bir güç veya teknoloji hiçbir zaman var olmayacaktır.',
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
    consequences: {
      title: t({
        en: 'You can understand how justice in nature generally applies punishment from this example table:',
        tr: 'Doğadaki adaletin genel olarak nasıl cezalandırdığını bu örnek tablodan anlayabilirsiniz:',
      }),
      labels: {
        source: t({
          en: 'Source',
          tr: 'Kaynak',
        }),
        means: t({
          en: 'Means',
          tr: 'Vesile',
        }),
        result: t({
          en: 'Result',
          tr: 'Sonuç',
        }),
      },
      items: [
        {
          source: t({
            en: 'A small community living around a lake and animals that live with them.',
            tr: 'Bir göl etrafında yaşayan küçük bir topluluk ve onlarla birlikte yaşayan hayvanları.',
          }),
          means: t({
            en: 'The community is constantly slaughtering animals for food or other purposes.',
            tr: 'Topluluk beslenmek için veya başka amaçla hayvanları sürekli keserek yaşamdan koparıyor.',
          }),
          result: t({
            en: "Air temperatures are rising and the lake is drying up. Thus, the community's source of livelihood is disappearing.",
            tr: 'Hava sıcaklıkları artıyor ve göl kuruyor. Böylece topluluğun yaşam kaynağı ortadan kalkıyor.',
          }),
        },
        {
          source: t({
            en: 'Scientists working in a laboratory and the animals they keep as test subjects.',
            tr: 'Bir laboratuvarda çalışan bilim insanları ve denek olarak besledikleri hayvanları.',
          }),
          means: t({
            en: 'Scientists torture or kill animals under the guise of experiments.',
            tr: 'Bilim insanları deney bahanesiyle hayvanlara işkence ediyor veya yaşamdan koparıyorlar.',
          }),
          result: t({
            en: 'Scientists are developing cancer, disabilities, or other illnesses depending on the level of violence they inflict.',
            tr: 'Bilim insanları uyguladıkları şiddete göre kanser, sakatlık veya diğer hastalıklara yakalanıyorlar.',
          }),
        },
        {
          source: t({
            en: "A company's executives, employees, and the products they launch.",
            tr: 'Bir şirketin yöneticileri, çalışanları ve piyasaya sürdükleri ürünler.',
          }),
          means: t({
            en: 'The company is adding harmful substances to its products or causing problems during use.',
            tr: 'Şirket ürünlerine zararlı maddeler ekliyor veya kullanım esnasında olumsuzluklar yaşatıyor.',
          }),
          result: t({
            en: 'With every negative event that occurs, the company suffers asset losses and its employees lose their health.',
            tr: 'Yaşatılan her olumsuzlukta şirket varlık kaybı yaşıyor ve çalışanları sağlıklarını kaybediyor.',
          }),
        },
      ],
      note: t({
        en: 'Positive actions (choices) lead to outcomes that justice in nature offers as a reward.',
        tr: 'Olumlu eylemler (seçimler) ise doğadaki adaletin ödül olarak sunduğu sonuçlara vesile olur.',
      }),
    },
  },
} satisfies Dictionary<JusticeContent>;

export default pageContent;
