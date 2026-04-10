import { insert, md, t, type Dictionary } from 'intlayer';

const pageContent = {
  key: 'last-update',
  content: {
    date: '2026-04-10',
    update: t({
      en: insert('Last content update: {{date}}'),
      tr: insert('Son içerik güncelleme: {{date}}'),
    }),
    reason: t({
      en: md('The answer about fasting is expanded in Frequently Asked Questions section.'),
      tr: md('Sıkça Sorulan Sorular kısmındaki oruç ile ilgili sorunun cevabına ekleme yapıldı.'),
    }),
  },
} satisfies Dictionary;

export default pageContent;
