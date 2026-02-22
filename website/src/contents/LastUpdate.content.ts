import { insert, md, t, type Dictionary } from 'intlayer';

const pageContent = {
  key: 'last-update',
  content: {
    date: '2026-02-22',
    update: t({
      en: insert('Last content update: {{date}}'),
      tr: insert('Son içerik güncelleme: {{date}}'),
    }),
    reason: t({
      en: md('Add a note under the table in Justice section.'),
      tr: md('Adalet kısmındaki sonuçlar tablosuna not eklendi.'),
    }),
  },
} satisfies Dictionary;

export default pageContent;
