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
      en: md('A small wording update was made in the introduction of Interconnectedness section.'),
      tr: md('Bütünlük kısmının giriş cümlesinde küçük bir değişiklik yapıldı. (İngilizce)'),
    }),
  },
} satisfies Dictionary;

export default pageContent;
