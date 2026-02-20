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
          en: 'WhatsApp Community Invite Link',
          tr: 'WhatsApp Topluluk Davet Linki',
        }),
        url: 'https://chat.whatsapp.com/Fb57HFEEZ2ECJ1tusZCVKS',
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
