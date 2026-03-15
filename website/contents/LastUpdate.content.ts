import { insert, md, t, type Dictionary } from 'intlayer';

const pageContent = {
  key: 'last-update',
  content: {
    date: '2026-03-15',
    update: t({
      en: insert('Last content update: {{date}}'),
      tr: insert('Son içerik güncelleme: {{date}}'),
    }),
    reason: t({
      en: md('A new paragraph has been added into Health section.'),
      tr: md('Sağlık kısmına yeni bir paragraf eklendi.'),
    }),
  },
} satisfies Dictionary;

export default pageContent;
