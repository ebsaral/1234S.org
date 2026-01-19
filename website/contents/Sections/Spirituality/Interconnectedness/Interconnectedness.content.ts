import { md, t, type Dictionary } from 'intlayer';

interface InterconnectednessContent {
  title: string;
  subtitle: string;
  quote: string;
  description: string;
  experiment: {
    title: string;
    subtitle: string;
    description: string;
    steps: {
      title: string;
      description: string;
    }[];
  };
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  paragraph4: string;
  examples: {
    title: string;
    subtitle: string;
    description: string;
    items: {
      title: string;
      description: string;
    }[];
  };
}

export default {
  key: 'interconnectedness-section',
  content: {
    title: t({
      en: 'Interconnectedness',
      tr: 'Bütünlük',
    }),
    subtitle: t({
      en: 'A Unified Being',
      tr: 'Birleşik Bir Yaşam',
    }),
    quote: t({
      en: md(
        'Just as the organs in a body are dependent on each other, all living beings are also dependent on one another through visible and invisible connections.',
      ),
      tr: md(
        'Tıpkı bir vücuttaki organların birbirlerine bağımlı olması gibi, tüm canlılar da görünür ve görünmez bağlar aracılığıyla birbirlerine bağımlıdır.',
      ),
    }),
    description: t({
      en: md(
        'We all strive to live in harmony with nature within a tiny area in the boundless universe that we define as Earth. To better understand the harmony between our minds and bodies, we need to consider our observations from a broader perspective, as a small reflection of nature.',
      ),
      tr: md(
        'Hepimiz, sınırsız evrenin içinde küçücük bir alan olan ve Dünya olarak tanımladığımız bir bütünde, doğayı hissederek yaşamaya çalışıyoruz. Zihnimizin vücudumuzla olan uyumunu daha iyi kavrayabilmek için, doğanın küçük bir iz düşümü olarak, gözlemlerimizi daha geniş bir bakış açısıyla ele almamız gerekiyor.',
      ),
    }),
    experiment: {
      title: t({
        en: 'You can gain awareness through this experiment!',
        tr: 'Bu örnek deneyle farkındalık kazanabilirsiniz!',
      }),
      subtitle: t({
        en: 'In this experiment, which you will conduct by following the steps below, you need to produce a work of art in the form of writing, drawing, music, dance, or free movement.',
        tr: 'Aşağıdaki adımları izleyerek gerçekleştireceğiniz deneyde yazı, resim, müzik, dans veya serbest hareket şeklinde bir eser üretmeniz gerekiyor.',
      }),
      description: t({
        en: 'The color choices, movements, speech, and even thoughts of other living beings you have neither heard nor seen get reflected in every form of your work. In the details you observe, you can see that you are reflecting the traces of the beings around you, regardless of distance, through your own existence.',
        tr: 'Duymadığınız veya görmediğiniz diğer canlıların renk seçimleri, hareketleri, konuşmaları ve hatta düşünceleri bile eserinizin her biçimine yansır. İzlediğiniz detaylarda, kendi varlığınız aracılığıyla etrafınızdaki varlıkların izlerini de mesafe fark etmeksizin yansıttığınızı görebilirsiniz.',
      }),
      steps: [
        {
          title: t({
            en: 'Record',
            tr: 'Kaydetmek',
          }),
          description: t({
            en: 'To observe the actions you choose to take while creating your artwork and the movements of those around you, begin recording the areas you deem necessary using a video recorder. Examples: The space you are in, the surroundings of the space, etc.',
            tr: 'Eserinizi üretirken seçtiğiniz eylemleri ve çevrenizde bulunanların hareketlerini gözlemleyebilmek için, gerekli bulduğunuz alanları görsel kaydedici kullanarak kayıt altına almaya başlayın. Örnek: Bulunduğunuz mekan, mekanın çevresi, vb.',
          }),
        },
        {
          title: t({
            en: 'Focus',
            tr: 'Odaklanmak',
          }),
          description: t({
            en: 'During the creative process, you should allow your mind to be as free as possible and focus on yourself. Therefore, you can wear noise-canceling headphones or close your eyes.',
            tr: 'Üretim esnasında zihninizi olabildiğince serbert bırakmalı ve kendinize odaklanmaya özen göstermelisiniz. Bu yüzden, ses geçirmeyen bir kulaklık takabilir veya gözlerinizi kapatabilirsiniz.',
          }),
        },
        {
          title: t({
            en: 'Produce',
            tr: 'Üretmek',
          }),
          description: t({
            en: 'Allow those around you to perform their actions as they wish in your room, house, garden, workplace, or on the street. Focus on your work and begin to create freely.',
            tr: 'Etrafınızda bulunanların odanızda, evinizde, bahçenizde, işyerinizde veya sokağınızda istedikleri eylemleri gerçekleştirmelerine izin verin. Eserinize odaklanın ve serbestçe üretmeye başlayın.',
          }),
        },
        {
          title: t({
            en: 'Watch',
            tr: 'İzlemek',
          }),
          description: t({
            en: 'After the process, carefully examine the work you have recorded. You can see the harmony between a word you spoke, an action you performed, a mistake you made, or a choice you took, and other living beings.',
            tr: 'Sürecin ardından kaydettiğiniz eserinizi dikkatlice inceleyin. Söylediğiniz bir kelimenin, uyguladığınız bir hareketin, yaptığınız bir hatanın veya gerçekleştirdiğiniz bir seçimin diğer canlılarla olan ahengini görebilirsiniz.',
          }),
        },
      ],
    },
    paragraph1: t({
      en: md(
        'Rather than egocentric approaches, we can gain awareness of the depth of our connection with nature by paying attention to the details of our environment and creations. Because every action reflects the details of the life around it. Every movement, sound, thought, and work of art is interconnected in harmony with the balance of nature.',
      ),
      tr: md(
        'Benmerkezci yaklaşımlardan ziyade, çevremizin ve yaratımlarımızın ayrıntılarına dikkat ederek doğayla olan bağımızın derinliğine yönelik farkındalık kazanabiliriz. Çünkü gerçekleştirilen her eylem aynı zamanda çevresindeki yaşamın detaylarını yansıtır. Her hareket, ses, düşünce ve sanat eseri doğadaki dengeyle uyumlu bir biçimde birbirine bağlıdır.',
      ),
    }),
    paragraph2: t({
      en: md(
        "**Mind mediates human imagination as a mixture of different symbols. Intelligence, on the other hand, is the ultimate outcome of life experiences in the mind. Mental and physical development is shaped in a similar context throughout a person's life.**",
      ),
      tr: md(
        '**Akıl, farklı sembollerin bir karışımı olarak insanın hayal gücüne aracılık eder. Zekâ ise zihindeki yaşam tecrübesinin son ucudur. Zihinsel ve fiziksel gelişim insanın tüm yaşam sürecinde benzer bağlamda şekil alır.**',
      ),
    }),
    paragraph3: t({
      en: md(
        'Our emotions, beyond time and space, reflect onto each other in an intertwined manner. Consequently, our life connections are multifaceted. Our senses, which can make invisible connections with each other visible, prove the interconnectedness of life to us in different ways.',
      ),
      tr: md(
        'Hislerimiz, zamanın ve mekanın ötesinde, iç içe geçmiş bir biçimde birbirimize yansır. Haliyle yaşam bağlarımız çok yönlüdür. Birbirimizle olan görünmez bağları görünür kılabilen duyularımız, farklı şekillerde yaşamın bütünlüğünü bize kanıtlar.',
      ),
    }),
    paragraph4: t({
      en: md(
        'By gaining the interconnected perspective, we can also understand how the journey of life, which begins in the womb, takes shape. Because the ways (actions) parents form connections with their environment and the choices of living beings in that environment are also reflected in the genetic sequence of a baby. Every baby, as a small reflection of nature, visibly carries the traces of both their near and distant surroundings.',
      ),
      tr: md(
        'Bütünlük bakış açısını kazandığımızda, rahimde başlayan yaşam yolculuğunun nasıl şekil aldığını da anlayabiliriz. Çünkü ebeveynlerin çevreleriyle olan bağ kurma biçimleri (eylemleri) ve çevredeki canlıların seçimleri de bir bebeğin genlerindeki dizilime yansır. Her bebek, doğanın küçük bir iz düşümü olarak, hem yakın hem uzak çevresinin izlerini görünür biçimde taşır.',
      ),
    }),
    examples: {
      title: t({
        en: 'Details in our lives',
        tr: 'Yaşantımızdaki detaylar',
      }),
      subtitle: t({
        en: "Every moment of our daily lives is filled with life's miracles, often unseen but felt. The seemingly individual journey of our minds is, in fact, a shared reflection of our physical and mental connections.",
        tr: 'Günlük yaşantımızın her anı çoğu zaman görmediğimiz ama hissettiğimiz yaşam mucizeleriyle doludur. Zihnimizin bireysel gibi gözüken yolcuğu, aslında fiziksel ve zihinsel bağlarımızın birer ortak yansımasıdır.',
      }),
      items: [
        {
          title: t({
            en: 'Location Independent',
            tr: 'Mekandan Bağımsız',
          }),
          description: t({
            en: "The emotional states of those watching any broadcast simultaneously are reflected in each other's feelings, even if they are not speaking to each other. Even if the broadcaster is reciting their lines from memory, their chosen actions and tone of voice combine with the feelings of the viewers they see or don't see, and are reflected outwardly.",
            tr: 'Herhangi bir yayını aynı anda izleyenlerin duygu durumları, birbirleriyle konuşmuyor olsalar bile birbirlerinin hislerine yansır. Yayıncı söyleyeceği sözleri ezberinden söylese bile, seçtiği eylemler ve tonlamalar gördüğü veya görmediği izleyicilerin hisleriyle birleşerek dışarıya yansır.',
          }),
        },
        {
          title: t({
            en: 'Sources of Inspiration',
            tr: 'İlham Kaynakları',
          }),
          description: t({
            en: 'While we might be at home, simply considering which song to play, the presence of someone passing by on the street can inspire (or influence) our choice. Similarly, every new thought is essentially the product of the blending of the living things around us in our minds, and we are merely the ones reflecting the output.',
            tr: 'Bulunduğumuz evde öylece hangi şarkıyı çalacağımızı düşünürken, sokaktan geçen birinin varlığı seçimimize ilham (veya vesile) olur. Benzer şekilde, her yeni düşünce aslında çevremizdeki canlıların zihnimizde harmanlanmasının ürünüdür ve biz sadece çıktıyı yansıtan kişi oluruz.',
          }),
        },
        {
          title: t({
            en: 'Timeless',
            tr: 'Zamandan Bağımsız',
          }),
          description: t({
            en: 'The emotional impact of a broadcast recorded in the past reflects the feelings of those watching or present during the filming. Similarly, any production we undertake now carries the emotional impact it will have on others in the future.',
            tr: 'Geçmiş zamanda kaydedilen bir yayında mevcut olan his kümesi, o yayını izleyenlerin veya çekim esnasında orada bulunanların hislerini yansıtır. Aynı zamanda, şu an gerçekleştirdiğimiz herhangi bir üretim, gelecekte başkalarına yaşatacağı his kümesini de barındırır.',
          }),
        },
        {
          title: t({
            en: 'The Balance of Empathy',
            tr: 'Empatinin Dengesi',
          }),
          description: t({
            en: 'In any place we shop, the stress of an employee or another customer can manifest in us as spontaneous sweating. Any action that someone else does unintentionally can appear as a negative sensation in our bodies.',
            tr: 'Alışveriş yaptığımız herhangi bir yerde bir çalışanın veya başka bir müşterinin stresi bize durduk yere terlemek olarak yansıyabilir. Başkasının zorunlu olarak istemeden yaptığı herhangi bir eylem vücudumuzda olumsuz bir his olarak belirir.',
          }),
        },
        {
          title: t({
            en: 'The Health Chain in Products',
            tr: 'Ürünlerdeki Sağlık Zinciri',
          }),
          description: t({
            en: 'Any product we use carries with it all the emotions experienced during its production. All the negative effects a product has had on other living beings before reaching us cause that product to manifest itself in our lives in a way that harms our health.',
            tr: 'Kullandığımız herhangi bir ürün, üretimi esnasında yaşanan tüm his kümelerini beraberinde getirir. Herhangi bir ürünün bize gelene kadar başka canlılarda yaşattığı tüm olumsuzluklar, o ürünün hayatımızda sağlığımızı bozacak şekilde varlık göstermesine sebep olur.',
          }),
        },
      ],
      description: t({
        en: 'We can elaborate on these examples by reinterpreting our shared experiences. When we blend the focus of our minds with our senses, we can notice many commonalities. However, our inability to be free in our actions and our tendency to make stereotypical choices makes it difficult for us to see the divine connections we have with each other.',
        tr: 'Ortak yaşantımızı tekrar yorumlayarak bu örnekleri detaylandırabiliriz. Zihnimizin odak noktasını duyularımızla harmanladığımızda birçok ortak noktayı fark edebiliriz. Eylemlerimizde özgür olamayıp basmakalıp seçimler yapmamız ise birbirimizle olan ilahi bağlarımızı görmemizi zorlaştırır.',
      }),
    },
  },
} satisfies Dictionary<InterconnectednessContent>;
