import { insert, md, t, type Dictionary } from 'intlayer';

type BlogPageContent = {
  notFound: string;
  title: Record<string, string>;
  description: Record<string, string>;
  labels: {
    search: string;
    sorting: string;
    asc: string;
    desc: string;
    byCreateDate: string;
    byUpdateDate: string;
    published: string;
    updated: string;
    author: string;
    viewAll: string;
    readingTime: typeof insert;
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
      en: md('Ideas, researches, facts, explanations, examples to detail **The Root of New Politics** mission.'),
      tr: md('**Yeni Siyasetin Kökeni** misyonunu detaylandıran fikirler, araştırmalar, gerçekler, açıklamalar ve örnekler.'),
    }),
    labels: {
      search: t({
        en: 'Search in blog posts',
        tr: 'İçeriklerde arama yapın',
      }),
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
        en: 'All blog posts',
        tr: 'Tüm içerikler',
      }),
      readingTime: insert(
        t({
          en: '{{min}} min',
          tr: '{{min}} dk',
        }),
      ),
    },
    history: {
      label: t({
        en: 'Changes (GitHub)',
        tr: 'Değişiklikler (GitHub)',
      }),
      href: insert('https://github.com/ebsaral/1234S.org/commits/main/website/posts/{{slug}}.{{locale}}.md'),
    },
  },
} satisfies Dictionary<BlogPageContent>;

export default pageContent;
