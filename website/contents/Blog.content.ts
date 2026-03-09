import { insert, md, t, type Dictionary } from 'intlayer';

type BlogPageContent = {
  notFound: string;
  title: Record<string, string>;
  description: Record<string, string>;
  labels: {
    sorting: string;
    asc: string;
    desc: string;
    byCreateDate: string;
    byUpdateDate: string;
    published: string;
    updated: string;
    author: string;
    viewAll: string;
  };
  history: {
    label: string;
    href: typeof insert;
  };
};

const pageContent = {
  key: 'blog-section',
  content: {
    notFound: t({
      en: "Blog post does not exist or it hasn't been translated to English yet.",
      tr: 'Aradığınız içerik mevcut değil veya henüz Türkçeye çevirisi yapılmadı.',
    }),
    title: t({
      en: md('# Blog'),
      tr: md('# Blog'),
    }),
    description: t({
      en: md('Ideas, researches, articles, explanations, examples...'),
      tr: md('Fikirler, araştırmalar, makaleler, açıklamalar, örnekler...'),
    }),
    labels: {
      sorting: t({
        en: 'Sorting',
        tr: 'Sıralama',
      }),
      asc: t({
        en: 'Earliest',
        tr: 'En Eski',
      }),
      desc: t({
        en: 'Latest',
        tr: 'En Yeni',
      }),
      byCreateDate: t({
        en: 'By Create Date',
        tr: 'Yayınlanma Tarihine Göre',
      }),
      byUpdateDate: t({
        en: 'By Update Date',
        tr: 'Güncellenme Tarihine Göre',
      }),
      published: t({
        en: 'Published',
        tr: 'Yayınlanma',
      }),
      updated: t({
        en: 'Updated',
        tr: 'Güncellenme',
      }),
      author: t({
        en: 'Author',
        tr: 'Yazar',
      }),
      viewAll: t({
        en: 'View all blog posts',
        tr: 'Tüm içerikleri göster',
      }),
    },
    history: {
      label: t({
        en: 'Changes made (GitHub)',
        tr: 'Yapılan değişiklikler (GitHub)',
      }),
      href: insert('https://github.com/ebsaral/1234S.org/commits/main/website/posts/{{slug}}.{{locale}}.md'),
    },
  },
} satisfies Dictionary<BlogPageContent>;

export default pageContent;
