import { insert, md, t, type Dictionary } from 'intlayer';

const pageContent = {
  key: 'last-update',
  content: {
    date: '2026-03-13',
    update: t({
      en: insert('Last content update: {{date}}'),
      tr: insert('Son içerik güncelleme: {{date}}'),
    }),
    reason: t({
      en: md(
        'An addition has been made to the answer to the fifth question in the Frequently Asked Questions section.',
      ),
      tr: md("Sıkça Sorulan Sorular'daki beşinci sorunun cevabına ekleme yapıldı."),
    }),
  },
} satisfies Dictionary;

export default pageContent;
