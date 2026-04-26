import { insert, md, t, type Dictionary } from 'intlayer';

const pageContent = {
  key: 'last-update',
  content: {
    date: '2026-04-26',
    update: t({
      en: insert('Last content update: {{date}}'),
      tr: insert('Son içerik güncelleme: {{date}}'),
    }),
    reason: t({
      en: md('The introduction text in Organ-Action-Consequence Analogy section is updated.'),
      tr: md('Organ-Eylem-Sonuç Benzetmesi kısmındaki giriş metni güncellendi.'),
    }),
  },
} satisfies Dictionary;

export default pageContent;
