import { insert, md, t, type Dictionary } from 'intlayer';

const pageContent = {
  key: 'last-update',
  content: {
    date: '2026-08-19',
    update: t({
      en: insert('Last content update: {{date}}'),
      tr: insert('Son içerik güncelleme: {{date}}'),
    }),
    reason: t({
      en: md(
        'Some explanations in the Health section have been updated. Some examples in the Organ-Action-Consequence section have been removed.',
      ),
      tr: md(
        'Sağlık kısmındaki bazı açıklamalar güncellendi. Organ-Eylem-Sonuç Benzetmesi kısmındaki bazı örnekler silindi.',
      ),
    }),
  },
} satisfies Dictionary;

export default pageContent;
