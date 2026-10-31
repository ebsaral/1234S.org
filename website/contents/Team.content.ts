import { t, type Dictionary } from 'intlayer';
import { TeamContent } from './types';

const pageContent = {
  key: 'team-section',
  content: {
    title: t({
      en: 'Our Team',
      tr: 'Ekibimiz',
    }),
    cofounder: {
      label: t({
        en: 'Become our co-founder!',
        tr: 'Kurucu ortağımız olun!',
      }),
      href: t({
        en: '/contact',
        tr: '/iletisim',
      }),
      title: t({
        en: 'Would you like to lead the Logical Spirituality movement? ',
        tr: 'Mantıksal Maneviyat akımına liderlik etmek ister misiniz?',
      }),
      description: t({
        en: 'We are excited to collaborate with like-minded individuals and/or organisations. If you are interested in sustainable and fair solutions that consider the well-being of every individual and society, please reach out to us.',
        tr: 'Benzer düşüncelere sahip bireyler ve/veya kuruluşlarla iş birliği yapmaktan heyecan duyuyoruz. Her bireyin ve toplumun refahını göz önünde bulunduran sürdürülebilir ve adil çözümlerle ilgileniyorsanız, lütfen bizimle iletişime geçin.',
      }),
    },
    members: [
      {
        name: 'Emin Buğra Saral',
        description: t({
          en: 'As the founder of Logical Spirituality, he guides individuals and communities toward a deeper understanding of nature. Through his well-intentioned courageous actions, the lessons he learned emphasize the wholeness of all living beings and importance of aligning our actions with natural order.\n\nHe is a multifaceted [Spirit Guide](){data-tooltip-id="tooltip" data-tooltip-content="A new and mystical title that embodies the awareness of all living beings guiding one another through visible and invisible bonds. When every human becomes aware of their bonds with each other, this title won’t be needed anymore because it will be the definition of what we call human today."} with engineering, feeling and artistic skills. He is still upset for being the only best human on this entire planet.',
          tr: 'Mantıksal Maneviyat\'ın kurucusu olarak bireyleri ve toplulukları doğanın ilkelerine dair daha derin bir anlayışa yönlendirmektedir. İyi niyetle ve cesurca aldığı eylemleri sayesinde deneyimlediği öğretileri, tüm canlıların birbirlerine bağlılığını ve eylemlerimizin doğal düzenle uyumlu olmasının önemini vurgulamaktadır.\n\nMühendislik, sezgi ve sanatsal becerileri olan çok yönlü bir [Maneviyat Rehberi](){data-tooltip-id="tooltip" data-tooltip-content="Görünür ve görünmez bağlarla tüm canlıların birbirlerine rehberlik etmesinin farkında olan yeni ve mistik bir ünvan. Her insanın birbirleriyle olan bağların farkına varmasıyla, Maneviyat Rehberi ünvanına ihtiyaç duyulmayacak çünkü bugünkü insan kavramını yeniden tanımlamış olacak."}\'dir. Bu koskoca gezegendeki tek en iyi insan olmasına hâlâ üzülüyor.',
        }),
        birthday: {
          year: 1988,
          month: 9,
          day: 28,
        },
        image: {
          src: '/images/people/eminbugrasaral-2025-with-spoon.jpg',
          size: 120,
        },
        links: [
          {
            text: t({
              en: 'Website',
              tr: 'İnternet Sitesi',
            }),
            href: t({
              en: 'https://0.1234s.org',
              tr: 'https://0.1234s.org',
            }),
          },
          {
            text: t({
              en: 'Resume',
              tr: 'Öz Geçmiş',
            }),
            href: t({
              en: 'https://0.1234s.org/resume',
              tr: 'https://0.1234s.org/ozgecmis',
            }),
          },
          {
            text: t({
              en: 'Match Me on Y Combinator!',
              tr: "Y Combinator'da Eşleşelim! (İng.)",
            }),
            href: 'https://www.startupschool.org/cofounder-matching/candidate/KfZfRGyVR',
          },
        ],
      },
    ],
    contact: t({
      en: 'Contact',
      tr: 'İletişim',
    }),
    note: t({
      en: 'If you would like to benefit from my experience and help me, you can use the contact options below. I already have a great understanding of the principles of nature and I can contribute thoroughly to all social projects.',
      tr: 'Deneyimlerimden faydalanmak ve bana yardımcı olmak isterseniz, aşağıdaki iletişim seçeneklerini kullanabilirsiniz. Doğanın ilkelerine yönelik derin bir mutabakata sahibim ve tüm toplumsal projelere detaylı bir şekilde katkıda bulunabilirim.',
    }),
  },
} satisfies Dictionary<TeamContent>;

export default pageContent;
