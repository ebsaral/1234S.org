import { insert, md, t, type Dictionary } from 'intlayer';

const pageContent = {
  key: 'last-update',
  content: {
    date: '2026-02-24',
    update: t({
      en: insert('Last content update: {{date}}'),
      tr: insert('Son içerik güncelleme: {{date}}'),
    }),
    reason: t({
      en: md('The explanation of the Organ–Action–Result Analogy area in the Health section has been simplified.'),
      tr: md('Sağlık kısmındaki Organ-Eylem-Sonuç Benzetmesi bölümünün açıklaması sadeleştirildi.'),
    }),
  },
} satisfies Dictionary;

export default pageContent;
