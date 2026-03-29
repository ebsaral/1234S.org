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
    ],
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
