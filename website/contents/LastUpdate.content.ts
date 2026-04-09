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
      en: md(
        'A new question has been added to the Frequently Asked Questions section, and answers to some questions have been expanded.',
      ),
      tr: md('Sıkça Sorulan Sorular kısmına yeni bir soru eklendi ve bazı soruların cevapları genişletildi.'),
    }),
  },
} satisfies Dictionary;

export default pageContent;
