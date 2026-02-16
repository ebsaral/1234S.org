import { insert, md, t, type Dictionary } from 'intlayer';

const pageContent = {
  key: 'last-update',
  content: {
    update: t({
      en: insert('Last content update: {{date}}'),
      tr: insert('Son içerik güncelleme: {{date}}'),
    }),
    reason: t({
      en: md('Updated the description of FAQ section, and added contact text.'),
      tr: md('SSS kısmının açıklaması güncellendi ve iletişim metni eklendi.'),
    }),
  },
} satisfies Dictionary;

export default pageContent;
