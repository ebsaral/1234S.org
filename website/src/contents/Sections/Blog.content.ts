import { md, t, type Dictionary } from 'intlayer';

const pageContent = {
  key: 'blog-section',
  content: {
    title: t({
      en: md('# Blog'),
      tr: md('# Blog'),
    }),
    description: t({
      en: md('Articles, researches, teories, examples, explanations...'),
      tr: md('Makaleler, araştırmalar, teoriler, örnekler, açıklamalar...'),
    }),
    labels: {
      published: t({
        en: 'Publish',
        tr: 'Yayınlanma',
      }),
      updated: t({
        en: 'Last Update',
        tr: 'Son Güncellenme',
      }),
      author: t({
        en: 'Author',
        tr: 'Yazar',
      }),
    },
    items: [
      {
        title: t({
          en: 'The Scamming Case of Big Tech Companies!',
          tr: 'Büyük Teknoloji Şirketlerinin Dolandırıcılık Vakası!',
        }),
        subtitle: t({
          en: 'Ever wondered why some companies scale far faster than others—even when they seem to follow the same investor playbook? Let’s take a closer look.',
          tr: 'Bazı şirketlerin, aynı yatırımcı stratejilerini izliyor gibi görünseler bile, neden diğerlerinden çok daha hızlı büyüdüğünü hiç merak ettiniz mi? Gelin daha yakından inceleyelim.',
        }),
        date: {
          published: '2025-12-18',
          updated: '2026-02-21',
        },
        image: {
          src: '/images/blog/1-apple-imac.jpg',
          size: '200',
        },
        href: t({
          en: 'https://ebsaral.substack.com/p/the-scamming-case-of-big-tech?utm_source=1234S.org',
          tr: 'https://ebsaral.substack.com/p/buyuk-teknoloji-sirketlerinin-dolandiricilik-vakasi?utm_source=1234S.org',
        }),
        author: {
          title: 'Emin Buğra Saral',
          href: 'https://0.1234S.org',
        },
      },
    ],
  },
} satisfies Dictionary;

export default pageContent;
