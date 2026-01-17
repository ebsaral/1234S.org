import { t, type Dictionary } from 'intlayer';

const pageContent = {
  key: 'bank-accounts-section',
  content: {
    title: t({
      en: 'Our Bank Accounts',
      tr: 'Banka Hesaplarımız',
    }),
    labels: {
      bank: {
        name: t({
          en: 'Bank Name',
          tr: 'Banka Adı',
        }),
        swift: t({
          en: 'SWIFT',
          tr: 'SWIFT',
        }),
        branch: {
          name: t({
            en: 'Branch Name',
            tr: 'Şube Adı',
          }),
          code: t({
            en: 'Branch Code',
            tr: 'Şube Kodu',
          }),
        },
      },
      account: {
        title: t({
          en: 'Title',
          tr: 'Ünvan',
        }),
        name: t({
          en: 'Account Name',
          tr: 'Hesap Adı',
        }),
        number: t({
          en: 'Account Number',
          tr: 'Hesap Numarası',
        }),
        iban: t({
          en: 'IBAN',
          tr: 'IBAN',
        }),
        currency: t({
          en: 'Currency',
          tr: 'Para Birimi',
        }),
      },
    },
    banks: [
      {
        bank: {
          swift: 'TVBATR2A',
          name: 'Türkiye Vakıflar Bankası T.A.O.',
          branch: {
            name: 'OF',
            code: 'S01114',
          },
          title: '1234 SANAT VE İLİM DERNEĞİ',
          logo: '/logos/vakifbank.jpg',
        },
        accounts: [
          {
            name: '1234 Sanat ve İlim',
            number: '00158007367400478',
            iban: 'TR170001500158007367400478',
            currency: t({
              en: 'Turkish Lira (TRY)',
              tr: 'Türk Lirası (TRY)',
            }),
          },
          {
            name: '1234 Science and Art',
            number: '00158048025955906',
            iban: 'TR750001500158048025955906',
            currency: t({
              en: 'US Dollars (USD)',
              tr: 'Amerikan Doları (USD)',
            }),
          },
          {
            name: '1234 Science and Art',
            number: '00158048025955968',
            iban: 'TR500001500158048025955968',
            currency: t({
              en: 'Euro (EUR)',
              tr: 'Euro (EUR)',
            }),
          },
          {
            name: '1234 Science and Art',
            number: '00158048025955986',
            iban: 'TR490001500158048025955986',
            currency: t({
              en: 'Sterlin (GBP)',
              tr: 'Sterlin (GBP)',
            }),
          },
        ],
      },
    ],
  },
} satisfies Dictionary;

export default pageContent;
