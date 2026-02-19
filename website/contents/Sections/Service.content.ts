import { t, type Dictionary } from 'intlayer';

const pageContent = {
  key: 'service-section',
  content: {
    title: t({
      en: 'Our Services',
      tr: 'Hizmetlerimiz',
    }),
    description: t({
      en: 'This page is still under construction!',
      tr: 'Bu sayfa henüz yapım aşamasındadır!',
    }),
    topics: {
      items: [],
    },
    contactLabel: t({
      en: 'Join our community channels in Whatsapp or Telegram!',
      tr: "WhatsApp veya Telegram'daki topluluk kanallarımıza katılın!",
    }),
    contact: [
      {
        label: t({
          en: 'WhatsApp Group Invite Link',
          tr: 'WhatsApp Grup Davet Linki',
        }),
        url: t({
          en: 'https://chat.whatsapp.com/Kza49cCtIMf9HsD0VNhH7V',
          tr: 'https://chat.whatsapp.com/CI3boPYbZpb0no69TwgxaD',
        }),
      },
      {
        label: t({
          en: 'Telegram Group Link',
          tr: 'Telegram Grup Linki',
        }),
        url: t({
          en: 'https://t.me/en1234S',
          tr: 'https://t.me/tr1234S',
        }),
      },
    ],
  },
} satisfies Dictionary;

export default pageContent;
