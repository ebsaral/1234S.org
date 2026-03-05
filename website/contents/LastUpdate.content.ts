import { insert, md, t, type Dictionary } from 'intlayer';

const pageContent = {
  key: 'last-update',
  content: {
    date: '2026-03-05',
    update: t({
      en: insert('Last content update: {{date}}'),
      tr: insert('Son içerik güncelleme: {{date}}'),
    }),
    reason: t({
      en: md(
        'The explanations about the journey of harmful substances in our body and punishments in nature are updated.',
      ),
      tr: md(
        'Sağlık kısmındaki zararlı maddelerin vücudumuzdaki yolculuğuna ve doğadaki cezalandırmaya yönelik açıklamalar güncellendi.',
      ),
    }),
  },
} satisfies Dictionary;

export default pageContent;
