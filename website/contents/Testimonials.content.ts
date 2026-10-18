import { t, type Dictionary } from 'intlayer';
import { TestimonialsContent } from './types';

const pageContent = {
  key: 'testimonials-section',
  content: {
    title: t({
      en: 'What citizens say?',
      tr: 'Vatandaşlar ne diyor?',
    }),
    items: [
      {
        name: t({
          en: 'A Disabled',
          tr: 'Bir Engelli',
        }),
        text: t({
          en: 'If I had been raised with these teachings here, I might not have lost my leg. Damn it!',
          tr: 'Eğer buradaki öğretilere göre yetiştirilmiş olsaydım, bacağımı kaybetmeyebilirdim. Lanet olsun!',
        }),
      },
      {
        name: t({
          en: 'A Teacher',
          tr: 'Bir Öğretmen',
        }),
        text: t({
          en: 'It wasn’t ignorance that was shameful, it was refusing to learn. Now, not doing is also shameful.',
          tr: 'Bilmemek değil, öğrenmemek ayıptı. Artık yapmamak da ayıp oldu.',
        }),
      },
      {
        name: t({
          en: 'A Soldier',
          tr: 'Bir Asker',
        }),
        text: t({
          en: 'I didn’t know that the weapons we saw as power were actually inventions meant to destroy us.',
          tr: 'Güç olarak gördüğümüz silahların aslında bizi yok etmek için vesile olan icatlar olduklarını bilmiyordum.',
        }),
      },
      {
        name: t({
          en: 'A Religion Officer',
          tr: 'Bir Din Görevlisi',
        }),
        text: t({
          en: "So all the people we’ve followed by saying 'the command comes from above' were ordinary servants like us.",
          tr: "Demek ki, 'emir büyük yerden' diyerek dinlediğimiz insanların tamamı bizim gibi sıradan kullardı.",
        }),
      },
      {
        name: t({
          en: 'A Professor',
          tr: 'Bir Profesör',
        }),
        text: t({
          en: 'After receiving all those diplomas and awards, seeing what I thought I knew is actually what I don’t know hurts a bit.',
          tr: 'Aldığım o kadar diplomadan ve ödülden sonra bildiklerimin aslında bilmediklerim olduğunu görmem biraz acıtmadı değil.',
        }),
      },
      {
        name: t({
          en: 'An Ordinary Citizen',
          tr: 'Sıradan Bir Vatandaş',
        }),
        text: t({
          en: 'I want to live in a system where we can no longer be fooled. Let’s hope for the best!',
          tr: 'Artık kandırılamayacağımız bir sistemde yaşamak istiyorum. Hakkımızda hayırlısı olsun!',
        }),
      },
      {
        name: t({
          en: 'An Atheist',
          tr: 'Bir Ateist',
        }),
        text: t({
          en: 'I have read somewhere before that God exists, but no one had ever explained how it does. I’m in shock!',
          tr: 'Tanrının var olduğunu daha önce bir yerlerde okumuştum, fakat hiç kimse nasıl var olduğunu anlatmamıştı. Şoktayım!',
        }),
      },
      {
        name: t({
          en: 'A Business Person',
          tr: 'Bir İş İnsanı',
        }),
        text: t({
          en: 'I was struggling to understand why we are working so much. It turns out we need more practical and healthy solutions.',
          tr: 'Neden bu kadar fazla çalıştığımızı anlamakta zorlanıyordum. Daha pratik ve sağlıklı çözümlerin bulunması gerekiyormuş.',
        }),
      },
      {
        name: t({
          en: 'A Sales Person',
          tr: 'Bir Pazarlamacı',
        }),
        text: t({
          en: 'Is it okay if I don’t comment on this?',
          tr: 'Ben yorum yapmasam olur mu acaba?',
        }),
      },
      {
        name: t({
          en: 'A Lawyer',
          tr: 'Bir Avukat',
        }),
        text: t({
          en: 'The fact that the entire system actually protects the rich is not fair. I like seeing that we can access equal opportunities easily.',
          tr: 'Tüm sistemin aslında zenginleri koruyor olması hiç adil değil. Eşit fırsatlara kolayca erişebileceğimizi görmek hoşuma gitti.',
        }),
      },
      {
        name: t({
          en: 'An Artist',
          tr: 'Bir Sanatçı',
        }),
        text: t({
          en: 'Honestly, being able to see that we’re not much different from the other citizens is quite eye-opening.',
          tr: 'Açıkçası, diğer vatandaşlardan pek bir farkımızın olmadığını görebilmek epey ufuk açıcı oldu.',
        }),
      },
      {
        name: t({
          en: 'A Doctor',
          tr: 'Bir Doktor',
        }),
        text: t({
          en: 'Realizing that all the healing powers in nature are easily accessible is truly hopeful. Not much to say beside wishing everyone health.',
          tr: 'Doğanın detaylarında tüm şifaların kolayca ulaşılabilir olduklarını görebilmek umut veren bir bilgi oldu. Sağlık olsun, ne diyelim.',
        }),
      },
      {
        name: t({
          en: 'A Victim of Systematic Frauds',
          tr: 'Sistematik Hilekârlıkların Bir Mağduru',
        }),
        text: t({
          en: "The lack of sufficient life experience in my family unfairly lowered the quality of our lives for years. The experience I've gained through my personal efforts never seems to find the necessary value in their lives.",
          tr: 'Ailemin yeterli hayat tecrübesinin olmaması yaşam kalitemizi yıllarca haksız yere düşürdü. Benim kişisel çabalarımla edindiğim tecrübem ise yaşantılarında gereken değeri bulmakta zorlanıyor.',
        }),
      },
    ],
    chatBox: {
      title: t({
        en: 'WhatsApp chat with a friend',
        tr: 'Bir arkadaşımla WhatsApp sohbeti',
      }),
      items: [
        {
          text: t({
            en: 'Are you losing your mind? You seem a bit detached from the “reality”. You were never very close though 😂',
            tr: 'Akıl sağlığını eline alamıyor musun? “Gerçek”ten biraz uzaklaşmış gibisin? Hiç çok yakın değildin ama 😂',
          }),
        },
        {
          text: t({
            en: 'Well, I haven’t met anyone more realistic and at the same time idealistic than me in this life. It would be a miracle for me if such a thing happens. :)\n\nAny health issue is not in my hands. It’s not in your hands either. It takes a lot of focus to understand the issue and it needs to be taken as a whole.\n\nI didn’t understand why you thought I was really detached. When the issue is examined and understood, the reality of my complaint will be seen anyway.',
            tr: 'Valla bu hayatta benden daha gerçekçi ve aynı zamanda idealist birine henüz rastlamadım. Benim için de mucize olur böyle bir şey gerçekleşirse. :)\n\nHerhangi bir sağlık konusu benim elimde değil. Aynı zamanda senin elinde de değil. Konuyu anlamak için epey odaklanmak gerekiyor ve bir bütün olarak ele almak gerekiyor. \n\nGerçekten uzaklaştığımı neden düşündüğünü ise anlamadım. Konu incelenip anlaşıldığında şikâyetimin gerçekliği ortaya çıkacak zaten.',
          }),
        },
        {
          text: t({
            en: 'I don’t think what you think is really detachment. You may be right in what you say. But there is also the environment, the norms of the environment, the social reality. You seem unable to see it as it is. That’s why I thought so.',
            tr: 'Senin ne düşündüğün gerçekten uzaklaşmak değil. Dediğinde haklı olabilirsin. Ama bir de çevre var, çevrenin normları, toplumsal gerçek. Bunu olduğu gibi göremiyor gibisin. Bu yüzden öyle düşündüm.',
          }),
        },
        {
          text: t({
            en: 'The reality is unique and is accepted as absolute through the discussions of different perspectives. There may be different perspectives on spiritual matters. However, the crimes of technology companies that I have exposed are not really a matter that depends on perspectives. Issues that will create social transformation always take time, but every second that the crimes I complained about is not examined, we are experiencing serious losses as a global society.',
            tr: 'Gerçek bir tanedir ve farklı bakış açılarının tartışmaları sonucunda mutlak olarak kabul edilir. Spiritüel (maneviyat) konularında farklı bakış açıları olabilir. Fakat teknoloji şirketlerinin ifşa ettiğim suçları pek bakış açılarına bağlı olan bir konu değil. Toplumsal dönüşüm yaratacak konular mutlaka zaman alır fakat şikayet ettiğim konunun incelenmediği her saniye küresel toplum olarak ciddi kayıplar yaşanıyor.',
          }),
        },
        {
          text: t({
            en: 'Each individual may have a different reality. The environment and perspective can be infinitely different. So is the reality.',
            tr: 'Her bir bireyin gerçeği farklı olabilir. Çevre ve bakış açısı sonsuz farklı olabilir. Gerçek de.',
          }),
        },
        {
          text: t({
            en: 'Yes in thought (in the world of imagination), no in nature. It is necessary to interpret the truth based on feelings, not thoughts.',
            tr: 'Düşünce (hayal dünyasında) olarak evet, doğada ise hayır. Gerçeği hislere dayayarak yorumlamak gerekiyor, düşüncelere değil.',
          }),
        },
        {
          text: t({
            en: 'Yes, even in nature. There are no universal truths in nature either, they change according to time and dimension.',
            tr: 'Doğa dahil evet. Doğada dahi evrensel gerçekler yoktur, zaman ve boyuta göre değişir.',
          }),
        },
        {
          text: t({
            en: 'The universal reality is the same for everyone. Because everyone has the same feelings. Feelings do not vary from person to person. \n\nIslamic “scholars” have interpreted seeking the truth as reality and have taken a book as their guide in their imagination that does not explain how to reach the truth.\n\nFeelings do not change according to perspective. How we interpret feelings, however, may change according to time and dimension. We approach the truth by observing nature. Many spiritual teachings are also in this quest.\n\nHowever, the illegal crimes that technology companies commit within us and in nature make it difficult for us to perceive the truth. Therefore, everyone has different interpretations of the truth in their minds. Thus, they prevent all societies from reaching the universal truth.',
            tr: 'Evrensel gerçek herkes için aynıdır. Çünkü herkes aynı hislere sahiptir. Hisler kişiden kişiye değişiklik göstermiyor. \n\nİslam “alimleri” gerçeği aramayı hakikat diyerek yorumlamış ve hakikate nasıl ulaşılacağını anlatmayan hayal dünyasındaki bir kitabı kendilerine rehber edinmişlerdir.\n\nHisler bakış açısına göre değişmez. Hisleri nasıl yorumladığımız ise zaman ve boyuta göre değişebilir. Doğada gözlemleyerek gerçeğe yaklaşırız. Birçok spiritüel öğreti de bu arayış içindedir.\n\nFakat teknoloji şirketlerinin bünyemizde ve doğada işlediği yasa dışı suçlar gerçekleri algılamakta zorluklar yaşamamıza sebep oluyor. Bu yüzden gerçek hakkında herkesin kafasında farklı yorumlar oluşuyor. Haliyle evrensel gerçeğe tüm toplumların ulaşmasını engelliyorlar.',
          }),
        },
        {
          text: t({
            en: 'Human is no longer in nature. Nature is forgotten. Political, economic and social influences determine feelings. Animal desires coming from nature do not create natural consequences. Society and economy that resemble the feelings of humans are not nature. Yet, no human’s moral set is the same as another.',
            tr: 'İnsan artık doğada yok. Doğa unutuldu. Siyasi, ekonomik ve toplumsal etkiler hisleri belirliyor. Doğadan gelen hayvani istekler, doğal sonuçları oluşturmuyor. İnsanların hislerini benzeştiren toplum ve ekonomi, doğa değil. Yine de hiçbir insanın ahlaki kümesi birbiriyle aynı değil.',
          }),
        },
        {
          text: t({
            en: " The way we interpret humanity, which arises from the conflicts of different perspectives in nature, continues to evolve. It has not yet been able to settle on a common plane. Therefore, it is necessary to guide different thought systems in accordance with the realities of nature. \n\nCitizens are not yet aware that the obstacles to humanity's efforts to integrate with nature are being placed by large technology companies. It is not very meaningful at this time to categorize citizens who do not know how their feelings are controlled and how their ability to comprehend nature is hindered as political, economic, and social influences. Citizens need to understand what kind of illegal structure they are in and a thought system that will not deceive them needs to guide this awakening phase. They need knowledge, sincere interest, and help in order to interpret moral sets out of the realm of imagination and into a real plane.",
            tr: 'Doğanın içindeki farklı bakış açılarının çatışmalarından doğan insanlığı nasıl yorumladığımız gelişmeye devam ediyor. Henüz ortak bir düzleme oturabilmiş değil. Bu yüzden farklı düşünce sistemlerine doğadaki gerçeklere uygun bir şekilde yön vermek gerekiyor. \n\nİnsanlığın doğayla olan bütünleşme çabasının önündeki engellerin büyük teknoloji şirketleri tarafından konulduğunu vatandaşlar henüz bilmiyorlar. Hislerinin nasıl kontrol edildiğini ve doğayı kavrama yeteneklerinin nasıl engellediğini bilmeyen vatandaşları siyasi, ekonomik ve toplumsal etkiler diyerek farklı kategorilerde yorumlamak şu an pek anlamlı değil. Vatandaşların nasıl bir yasa dışı yapı içerisinde oldukları anlamaları ve kandırılmayacakları bir düşünce sisteminin bu uyanma evresine yön vermesi gerekiyor. Ahlaki kümeleri hayal dünyasından çıkarıp gerçek bir düzlemde yorumlayabilmeleri için bilgiye, dürüst ilgiye ve yardıma ihtiyaçları var.',
          }),
        },
        {
          text: t({
            en: 'The chance of being able to settle on a common plane is quite low, or impossible. I will continue as chaos. I agree with the other theses in this message.',
            tr: 'Ortak bir düzleme oturabilme şansı oldukça düşük, ya da mümkün değil. Kaos olarak devam edeceğim. Bu mesajdaki diğer tezlerine katılıyorum.',
          }),
        },
        {
          text: t({
            en: 'I do not believe it is impossible. There will definitely be difficulties arising from the obstacles that have come from the past to the present. It is unknown without trying. Thank you. :)',
            tr: 'İmkansız olduğuna inanmıyorum. Geçmişten günümüze gelen engellerden doğan zorluklar olacaktır mutlaka. Denemeden bilinmez. Teşekkürler. :)',
          }),
        },
        {
          text: t({
            en: 'Thank you.',
            tr: 'Ben teşekkür ederim.',
          }),
        },
      ],
    },
    prev: t({
      en: 'Prev',
      tr: 'Önceki',
    }),
    next: t({
      en: 'Next',
      tr: 'Sonraki',
    }),
  },
} satisfies Dictionary<TestimonialsContent>;

export default pageContent;
