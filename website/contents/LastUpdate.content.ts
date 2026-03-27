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
      en: md('A link to the blog article about the importance of reading nature is added to Justice section.'),
      tr: md('Doğayı okumanın önemini anlatan içeriğin bağlantısı Adalet kısmına eklendi.'),
    }),
  },
} satisfies Dictionary;

export default pageContent;
