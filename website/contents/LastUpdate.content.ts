import { insert, md, t, type Dictionary } from 'intlayer';

const pageContent = {
  key: 'last-update',
  content: {
    date: '2026-03-17',
    update: t({
      en: insert('Last content update: {{date}}'),
      tr: insert('Son içerik güncelleme: {{date}}'),
    }),
    reason: t({
      en: md('An addition has been made to the answer of 11. question in FAQ section.'),
      tr: md('Sıkça Sorulan Sorular kısmındaki 11. sorunun cevabına ekleme yapıldı.'),
    }),
  },
} satisfies Dictionary;

export default pageContent;
