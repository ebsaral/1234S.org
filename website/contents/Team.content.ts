import { md, t, type Dictionary } from 'intlayer';
import { TeamContent } from './types';

const pageContent = {
  key: 'team-section',
  content: {
    title: t({
      en: 'Our Team',
      tr: 'Ekibimiz',
    }),
    members: [
      {
        name: 'Emin Buğra Saral',
        description: t({
          en: md(
            'As the founder of Logical Spirituality movement, he guides individuals and communities toward a deeper understanding of nature. Through his well-intentioned courageous actions, the lessons he learned emphasize the interconnectedness of all living beings and importance of aligning our actions with natural order.\n\nHe is a protean [Spirit Guide](){data-tooltip-id="tooltip" data-tooltip-content="A new and mystical title that embodies the awareness of all living beings guiding one another through visible and invisible bonds."} with engineering, feeling and artistic skills.',
          ),
          tr: md(
            'Mantıksal Maneviyat akımının kurucusu olarak bireyleri ve toplulukları doğanın ilkelerine dair daha derin bir anlayışa yönlendirmektedir. İyi niyetle ve cesurca aldığı eylemleri sayesinde deneyimlediği öğretileri, tüm canlıların birbirlerine bağlılığını ve eylemlerimizin doğal düzenle uyumlu olmasının önemini vurgulamaktadır.\n\nMühendislik, sezgi ve sanatsal becerileri olan çok yönlü bir [Maneviyat Rehberi](){data-tooltip-id="tooltip" data-tooltip-content="Görünür ve görünmez bağlarla tüm canlıların birbirlerine rehberlik etmesinin farkında olan yeni ve mistik bir ünvan."}\'dir.',
          ),
        }),
        birthday: {
          year: 1988,
          month: 9,
          day: 28,
        },
        image: {
          src: '/members/eminbugrasaral.jpg',
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
