import { t, type Dictionary } from "intlayer";

const pageContent = {
  key: "bank-accounts-section",
  content: {
    title: t({
      en: "Our Bank Accounts",
      tr: "Banka Hesaplarımız"
    }),
    banks: [
      {
        bank: {
          swift: {
            label: t({
              en: "SWIFT",
              tr: "SWIFT"
            }),
            text: "TVBATR2A" 
          },
          name: {
            label: t({
              en: "Bank Name",
              tr: "Banka Adı",
            }),
            text: "Türkiye Vakıflar Bankası T.A.O."
          },
          branch: {
            name: {
              label: t({
                en: "Branch Name",
                tr: "Şube Adı"
              }),
              text: "OF"
            },
            code: {
              label: t({
                en: "Branch Code",
                tr: "Şube Kodu"
              }),
              text: "S01114"
            }
          },
          account: {
            label: t({
              en: "Title",
              tr: "Ünvan",
            }),
            text: "1234 SANAT VE İLİM DERNEĞİ"
          },
          logo: "/logos/vakifbank.jpg"
        },
        items: [
          {
            name: "1234 Sanat ve İlim",
            number: "00158007367400478",
            iban: "TR170001500158007367400478",
            currency: t({
              en: "Turkish Lira (TRY)",
              tr: "Türk Lirası (TRY)",
            }),
          },
          { 
            name: "1234 Science and Art",
            number: "00158048025955906",
            iban: "TR750001500158048025955906",
            currency: t({
              en: "US Dollars (USD)",
              tr: "Amerikan Doları (USD)",
            }),
          },
          {
            name: "1234 Science and Art",
            number: "00158048025955968",
            iban: "TR500001500158048025955968",
            currency: t({
              en: "Euro (EUR)",
              tr: "Euro (EUR)",
            }),
          },
          {
            name: "1234 Science and Art",
            number: "00158048025955986",
            iban: "TR490001500158048025955986",
            currency: t({
              en: "Sterlin (GBP)",
              tr: "Sterlin (GBP)",
            }),
          },
        ],
      }
    ]
  },
} satisfies Dictionary;

export default pageContent;
