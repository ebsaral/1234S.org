import { insert, md, t, type Dictionary } from 'intlayer';

const pageContent = {
  key: 'last-update',
  content: {
    date: '2026-03-26',
    update: t({
      en: insert('Last content update: {{date}}'),
      tr: insert('Son içerik güncelleme: {{date}}'),
    }),
    reason: t({
      en: md('A new description paragraph is added to Interconnectedness section.'),
      tr: md('Bütünlük kısmına yeni bir açıklama paragrafı eklendi.'),
    }),
  },
} satisfies Dictionary;

export default pageContent;
