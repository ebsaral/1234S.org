import { md, t, type Dictionary } from 'intlayer';

type BlogPageContent = {
  notFound: string;
  title: Record<string, string>;
  description: Record<string, string>;
  labels: {
    published: string;
    updated: string;
    author: string;
  };
};

const pageContent = {
  key: 'blog-section',
  content: {
    notFound: t({
      en: "Blog post does not exist, or it hasn't been translated to English yet.",
      tr: 'Aradığınız blog içeriği mevcut değil, veya henüz Türkçeye çevirisi yapılmadı.',
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
    },
  },
} satisfies Dictionary<BlogPageContent>;

export default pageContent;
