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
      en: md('The research link is added into the answer about Freedom in FAQ section.'),
      tr: md('SSS kısmındaki Özgürlük hakkındaki cevaba araştırma yazısının bağlantısı eklendi.'),
    }),
  },
} satisfies Dictionary;

export default pageContent;
