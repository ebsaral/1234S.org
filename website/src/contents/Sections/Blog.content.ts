import { file, md, t, type Dictionary } from 'intlayer';

type BlogPageContent = {
  notFound: string;
  title: Record<string, string>;
  description: Record<string, string>;
  labels: {
    published: string;
    updated: string;
    author: string;
  };
  items: {
    title: string;
    subtitle: string;
    date: {
      published: string;
      updated?: string;
    };
    image: {
      src: string;
      size: string;
    };
    href: string;
    author: {
      title: string;
      href: string;
    };
    slug?: string;
    content?: Record<string, string>;
  }[];
};

const pageContent = {
  key: 'blog-section',
  content: {
    notFound: t({
      en: 'Blog post is not found.',
      tr: 'Aradığınız blog içeriği bulunamadı.',
    }),
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
        en: 'Date',
        tr: 'Tarih',
      }),
      updated: t({
        en: 'Last Update Date',
        tr: 'Son Güncellenme Tarihi',
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
        href: '/blog/the-scamming-case-of-big-tech-companies',
        author: {
          title: 'Emin Buğra Saral',
          href: 'https://0.1234S.org',
        },
        slug: 'the-scamming-case-of-big-tech-companies',
        content: {
          en: md(file('../Posts/post-1-en.md')),
          tr: md(file('../Posts/post-1-tr.md')),
        },
      },
      {
        title: t({
          en: 'Some feelings cannot be bought',
          tr: 'Bazı hisler satın alınamaz',
        }),
        subtitle: t({
          en: 'A real story about trust in nature.',
          tr: 'Doğaya güvenmeyi anlatan gerçek bir hikaye.',
        }),
        date: {
          published: '2025-11-13',
        },
        image: {
          src: '/images/blog/2-flying-car.jpg',
          size: '200',
        },
        href: '/blog/some-feelings-cannot-be-bought',
        author: {
          title: 'Emin Buğra Saral',
          href: 'https://0.1234S.org',
        },
        slug: 'some-feelings-cannot-be-bought',
        content: {
          en: md(file('../Posts/post-2-en.md')),
          tr: md(file('../Posts/post-2-tr.md')),
        },
      },
    ],
  },
} satisfies Dictionary<BlogPageContent>;

export default pageContent;
