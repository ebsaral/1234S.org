import { insert, md, t, type Dictionary } from 'intlayer';

const pageContent = {
  key: 'last-update',
  content: {
    date: '2026-03-11',
    update: t({
      en: insert('Last content update: {{date}}'),
      tr: insert('Son içerik güncelleme: {{date}}'),
    }),
    reason: t({
      en: md('The explanation in Organ-Action-Result Analogy in Health section is updated.'),
      tr: md("Sağlık kısmındaki Organ-Eylem-Sonuç Benzetmesi'ndeki açıklama güncellendi."),
    }),
  },
} satisfies Dictionary;

export default pageContent;
