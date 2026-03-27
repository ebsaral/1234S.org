import { insert, md, t, type Dictionary } from 'intlayer';

const pageContent = {
  key: 'last-update',
  content: {
    date: '2026-03-27',
    update: t({
      en: insert('Last content update: {{date}}'),
      tr: insert('Son içerik güncelleme: {{date}}'),
    }),
    reason: t({
      en: md('The description text in Introduction section is updated.'),
      tr: md('Giriş kısmındaki açıklama metni güncellendi.'),
    }),
  },
} satisfies Dictionary;

export default pageContent;
