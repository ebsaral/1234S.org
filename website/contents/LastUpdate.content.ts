import { insert, md, t, type Dictionary } from 'intlayer';

const pageContent = {
  key: 'last-update',
  content: {
    date: '2026-04-01',
    update: t({
      en: insert('Last content update: {{date}}'),
      tr: insert('Son içerik güncelleme: {{date}}'),
    }),
    reason: t({
      en: md(
        "A new question has been added to the Frequently Asked Questions section, and an update has been made to the answer to the question 'Where might we be going?'",
      ),
      tr: md(
        "Sıkça Sorulan Sorular kısmına yeni bir soru eklendi ve 'Nereye Gidiyor Olabiliriz?' sorusunun cevabına ekleme yapıldı.",
      ),
    }),
  },
} satisfies Dictionary;

export default pageContent;
