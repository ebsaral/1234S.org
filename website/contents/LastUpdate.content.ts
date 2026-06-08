import { insert, md, t, type Dictionary } from 'intlayer';

const pageContent = {
  key: 'last-update',
  content: {
    date: '2026-06-08',
    update: t({
      en: insert('Last content update: {{date}}'),
      tr: insert('Son içerik güncelleme: {{date}}'),
    }),
    reason: t({
      en: md('An addition about restricting freedom was made to a paragraph in the Health section.'),
      tr: md('Sağlık kısmındaki bir paragrafa özgürlüğü kısıtlama hakkında ekleme yapıldı.'),
    }),
  },
} satisfies Dictionary;

export default pageContent;
