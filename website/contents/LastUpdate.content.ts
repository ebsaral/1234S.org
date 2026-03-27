import { insert, md, t, type Dictionary } from 'intlayer';

const pageContent = {
  key: 'last-update',
  content: {
    date: '2026-03-27',
    update: t({
      en: insert('Last content update: {{date}}'),
      tr: insert('Son içerik güncelleme: {{date}}'),
    }),
    reason: t({
      en: md('Add a link to the blog article about how to play in nature to Health section.'),
      tr: md('Doğada nasıl oynamamız gerektiğini anlatan içeriğin bağlantısı Sağlık kısmına eklendi.'),
    }),
  },
} satisfies Dictionary;

export default pageContent;
