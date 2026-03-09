import { t, type Dictionary } from 'intlayer';

type ServiceContent = {
  title: string;
  description: string;
  topics: {
    items: [];
  };
  contact: {
    enabled: boolean;
    label: string;
    items: {
      label: string;
      url: string;
    }[];
  };
};

const pageContent = {
  key: 'service-section',
  content: {
    title: t({
      en: 'Our Services',
      tr: 'Hizmetlerimiz',
    }),
    description: t({
      en: 'This page is getting renewed!',
      tr: 'Bu sayfa yapım aşamasında!',
    }),
    topics: {
      items: [],
    },
    contact: {
      enabled: false,
      label: t({
        en: 'Join our community channels in Whatsapp or Telegram!',
        tr: "WhatsApp veya Telegram'daki topluluk kanallarımıza katılın!",
      }),
      items: [
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
  },
} satisfies Dictionary<ServiceContent>;

export default pageContent;
