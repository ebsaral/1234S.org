import { t, type Dictionary } from 'intlayer';

const videomodalplayerContent = {
  key: 'VideoModalPlayer',
  content: {
    fullscreen: t({
      en: 'Fullscreen',
      tr: 'Tam Ekran',
    }),
    close: t({
      en: 'Close',
      tr: 'Kapat',
    }),
  },
} satisfies Dictionary;

export default videomodalplayerContent;
