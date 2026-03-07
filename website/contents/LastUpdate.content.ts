import { insert, md, t, type Dictionary } from 'intlayer';

const pageContent = {
  key: 'last-update',
  content: {
    date: '2026-03-07',
    update: t({
      en: insert('Last content update: {{date}}'),
      tr: insert('Son içerik güncelleme: {{date}}'),
    }),
    reason: t({
      en: md('Some additions are placed to descriptions in Justice section.'),
      tr: md('Adalet kısmındaki açıklamalara bazı eklemeler yapıldı.'),
    }),
  },
} satisfies Dictionary;

export default pageContent;
