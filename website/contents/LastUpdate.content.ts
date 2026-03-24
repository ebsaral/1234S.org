import { insert, md, t, type Dictionary } from 'intlayer';

const pageContent = {
  key: 'last-update',
  content: {
    date: '2026-03-24',
    update: t({
      en: insert('Last content update: {{date}}'),
      tr: insert('Son içerik güncelleme: {{date}}'),
    }),
    reason: t({
      en: md('An information about accidents is added to Health section.'),
      tr: md('Kazalar hakkında bir bilgi Sağlık kısmına eklendi.'),
    }),
  },
} satisfies Dictionary;

export default pageContent;
