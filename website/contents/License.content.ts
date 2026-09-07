import { insert, t, type Dictionary } from 'intlayer';

const pageContent = {
  key: 'license',
  content: {
    url: t({
      en: 'https://creativecommons.org/licenses/by/4.0/deed.en',
      tr: 'https://creativecommons.org/licenses/by/4.0/deed.tr',
    }),
    text: t({
      en: 'License: CC BY 4.0',
      tr: 'Lisans: CC BY 4.0',
    }),
  },
} satisfies Dictionary;

export default pageContent;
