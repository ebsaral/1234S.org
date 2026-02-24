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
      en: md('A revision has been made to the note of the consequences table in the Justice section.'),
      tr: md('Adalet kısmındaki örnek tablonun notunda değişiklik yapıldı. (İngilizce)'),
    }),
  },
} satisfies Dictionary;

export default pageContent;
