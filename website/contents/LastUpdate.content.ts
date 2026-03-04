import { insert, md, t, type Dictionary } from 'intlayer';

const pageContent = {
  key: 'last-update',
  content: {
    date: '2026-03-04',
    update: t({
      en: insert('Last content update: {{date}}'),
      tr: insert('Son içerik güncelleme: {{date}}'),
    }),
    reason: t({
      en: md(
        'A new paragraph about the language of nature waiting to be understood is added to Justice in Nature section.',
      ),
      tr: md('Doğadaki Adalet kısmına, doğanın anlaşılmayı bekleyen diline dair yeni bir paragraf eklendi.'),
    }),
  },
} satisfies Dictionary;

export default pageContent;
