import { Locales, t, type Dictionary } from 'intlayer';

const pageContent = {
  key: 'navigation',
  content: {
    webpage: {
      title: t({
        en: '1234S.org',
        tr: '1234S.org',
      }),
      link: 'https://1234s.org',
    },
    home: {
      text: t({
        en: 'Our Association',
        tr: 'Derneğimiz',
      }),
    },
    about: {
      text: t({
        en: 'About',
        tr: 'Hakkımızda',
      }),
    },
    philosophy: {
      text: t({
        en: 'Logical Spirituality',
        tr: 'Mantıksal Maneviyat',
      }),
    },
    mission: {
      text: t({
        en: 'Our Mission',
        tr: 'Misyonumuz',
      }),
    },
    support: {
      text: t({
        en: 'Support Us',
        tr: 'Destek Olun',
      }),
    },
    intro: {
      text: t({
        en: 'Intro',
        tr: 'Giriş',
      }),
    },
    interconnectedness: {
      text: t({
        en: 'Interconnectedness',
        tr: 'Bütünlük',
      }),
    },
    justice: {
      text: t({
        en: 'Justice',
        tr: 'Adalet',
      }),
    },
    health: {
      text: t({
        en: 'Health',
        tr: 'Sağlık',
      }),
    },
    project: {
      text: t({
        en: 'Project',
        tr: 'Proje',
      }),
    },
    contact: {
      text: t({
        en: 'Contact',
        tr: 'İletişim',
      }),
    },
    language: t({
      en: 'Language',
      tr: 'Dil',
    }),
    flags: {
      [Locales.ENGLISH]: '🇺🇸',
      [Locales.TURKISH]: '🇹🇷',
    },
    budgetIssue: t({
      en: 'While our teachings are being used in all dissembling political speeches at the moment, our financial difficulties continue to increase. Any contribution or assistance that helps clear our way forward would be deeply appreciated.',
      tr: 'Öğretilerimiz şu anki tüm siyasi konuşmalarda iki yüzlü biçimlerde kullanılıyor. Fakat mali sıkıntılarımız artmaya devam ediyor. Yolumuzu açabilecek herhangi bir katkıda veya yardımda bulunabilirseniz memnun oluruz.',
    }),
    closeButton: t({
      en: 'Close',
      tr: 'Kapat',
    }),
  },
} satisfies Dictionary;

export default pageContent;
