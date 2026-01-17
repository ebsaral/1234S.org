import { t, type Dictionary } from 'intlayer';

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
      en: 'Just as the organs in a body are dependent on each other, all living beings are also dependent on one another through visible and invisible connections.',
      tr: 'Tıpkı bir vücuttaki organların birbirlerine bağımlı olması gibi, tüm canlılar da görünür ve görünmez bağlar aracılığıyla birbirlerine bağımlıdır.',
    }),
    description: t({
      en: 'We all strive to live in harmony with nature within a tiny area in the boundless universe that we define as Earth. To better understand the harmony between our minds and bodies, we need to consider our observations from a broader perspective, as a small reflection of nature.\n\nRather than egocentric approaches, we can gain awareness of the depth of our connection with nature by paying attention to the details of our environment and creations. Because every action reflects the details of the life around it. Every movement, sound, thought, and work of art is interconnected in harmony with the balance of nature.',
      tr: 'Hepimiz, sınırsız evrenin içinde küçücük bir alan olan ve Dünya olarak tanımladığımız bir bütünde, doğayı hissederek yaşamaya çalışıyoruz. Zihnimizin vücudumuzla olan uyumunu daha iyi kavrayabilmek için, doğanın küçük bir iz düşümü olarak, gözlemlerimizi daha geniş bir bakış açısıyla ele almamız gerekiyor.\n\nBenmerkezci yaklaşımlardan ziyade, çevremizin ve yaratımlarımızın ayrıntılarına dikkat ederek doğayla olan bağımızın derinliğine yönelik farkındalık kazanabiliriz. Çünkü gerçekleştirilen her eylem aynı zamanda çevresindeki yaşamın detaylarını yansıtır. Her hareket, ses, düşünce ve sanat eseri doğadaki dengeyle uyumlu bir biçimde birbirine bağlıdır.',
    }),
    experiment: {
      title: t({
        en: 'You can gain awareness through this experiment!',
        tr: 'Bu örnek deneyle farkındalık kazanabilirsiniz!',
      }),
      subtitle: t({
        en: 'In this experiment, you will need to create a work of art in the form of writing, drawing, music, dance, or free movement.',
        tr: 'Bu deneyde yazı, resim, müzik, dans veya serbest hareket şeklinde bir eser üretmeniz gerekecek.',
      }),
      description: t({
        en: 'The color choices, movements, speech, and even thoughts of other living beings you have neither heard nor seen are reflected in every form of your work. In the details you observe, you can see that you are reflecting the traces of the beings around you, regardless of distance, through your own existence.',
        tr: 'Duymadığınız veya görmediğiniz diğer canlıların renk seçimleri, hareketleri, konuşmaları ve hatta düşünceleri bile eserinizin her biçimine yansıdı. İzlediğiniz detaylarda, kendi varlığınız aracılığıyla etrafınızdaki varlıkların izlerini de mesafe fark etmeksizin yansıttığınızı görebilirsiniz.',
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
            tr: 'Üretim',
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
      en: "Mind mediates human imagination as a mixture of different symbols. Intelligence, on the other hand, is the ultimate outcome of life experiences in the mind. When we become aware of the perspective of interconnectedness, we can see how the life journey that begins in the womb takes shape. The ways (actions) parents form connections with their environment and the choices of living beings in that environment are reflected in the genetic sequence of a baby. As a small reflection of nature, every baby visibly carries the traces of both their near and distant surroundings. Mental and physical development is shaped in a similar context throughout a person's life. Our emotions, beyond time and space, reflect onto each other in an intertwined manner. Consequently, our life connections are multifaceted. Our senses, which can make invisible connections with each other visible, prove the interconnectedness of life to us in different ways.\n\nThe emotional states of viewers watching an online broadcast reflect on the broadcaster's feelings, even if they are not talking to each other; while you are at home thinking about which song to play, the presence of a passerby on the street inspires (or serves as a means for) your choice; the stress of someone at the store where you shop can reflect on you as unexpected sweating; the set of emotions present in a previously recorded broadcast will also reflect the feelings of those who watch it or were present during its recording; any product you use carries all the emotional sets experienced during its production... We can multiply these examples by reinterpreting the details of our lives. In fact, every moment is filled with unseen life miracles.",
      tr: 'Akıl, farklı sembollerin bir karışımı olarak insanın hayal gücüne aracılık eder. Zekâ ise zihindeki yaşam tecrübesinin son ucudur. Bütünlük bakış açısını fark ettiğimizde, rahimde başlayan yaşam yolculuğunun nasıl şekil aldığını görebiliriz. Ebeveynlerin çevreleriyle olan bağ kurma biçimleri (eylemleri) ve çevredeki canlıların seçimleri bir bebeğin genlerindeki dizilime yansır. Doğanın küçük bir iz düşümü olarak, her bebek hem yakın hem uzak çevresinin izlerini görünür biçimde taşır. Zihinsel ve fiziksel gelişim insanın tüm yaşam sürecinde benzer bağlamda şekil alır. Hislerimiz, zamanın ve mekanın ötesinde, iç içe geçmiş bir biçimde birbirimize yansır. Haliyle yaşam bağlarımız çok yönlüdür. Birbirimizle olan görünmez bağları görünür kılabilen duyularımız, farklı şekillerde yaşamın bütünlüğünü bize kanıtlar.\n\nBir internet yayınını izleyenlerin duygu durumları, birbirleriyle konuşmuyor olsalar bile, yayıncının hislerine yansır; siz evinizde öylece hangi şarkıyı çalacağınızı düşünürken sokaktan geçen birinin varlığı seçiminize ilham (veya vesile) olur; alışveriş yaptığınız marketteki birinin stresi size durduk yere terlemek olarak yansır; geçmiş zamanda kaydedilen bir yayında mevcut olan his kümesi, o yayını izleyenlerin veya çekim esnasında orada bulunanların hislerini de gelecekte bize yansıtır; kullandığınız herhangi bir ürün, üretimi esnasında yaşanan tüm his kümelerini beraberinde getirir... Örnekleri hayatımızın detaylarını tekrar yorumlayarak çoğaltabiliriz. Aslında her an görmediğimiz yaşam mucizeleriyle doludur.',
    }),
  },
} satisfies Dictionary<InterconnectednessContent>;
