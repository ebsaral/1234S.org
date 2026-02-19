import { insert, md, t, type Dictionary } from 'intlayer';

const pageContent = {
  key: 'last-update',
  content: {
    date: '2026-02-19',
    update: t({
      en: insert('Last content update: {{date}}'),
      tr: insert('Son içerik güncelleme: {{date}}'),
    }),
    reason: t({
      en: md('Added an answer for fasting in FAQ section.'),
      tr: md('SSS kısmına oruç tutmayla ilgili cevap eklendi.'),
    }),
  },
} satisfies Dictionary;

export default pageContent;
