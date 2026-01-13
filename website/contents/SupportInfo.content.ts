import { t, type Dictionary } from "intlayer";

const pageContent = {
  key: "support-info-section",
  content: {
    title: t({
      en: "How?",
      tr: "Nasıl mı?"
    }),
    items: [
      {
        title: t({
          en: "We can form collaborations.",
          tr: "İş birlikleri yapabiliriz.",
        }),
      },
      {
        title: t({
          en: "You can suggest or promote us.",
          tr: "Bizi önerebilirsiniz veya tanıtabilirsiniz.",
        }),
      },
      {
        title: t({
          en: "You can invite us.",
          tr: "Bizi davet edebilirsiniz.",
        }),
      },
      {
        title: t({
          en: "You can give us opportunities.",
          tr: "Bize imkanlar tanıyabilirsiniz.",
        }),
      },
      {
        title: t({
          en: "You can join us as a member or volunteer.",
          tr: "Bize üye veya gönüllü olarak katılabilirsiniz.",
        }),
      },
    ],
    contact: [
      {
          label: t(
            {
              en: "WhatsApp Group Invite Link",
              tr: "WhatsApp Grup Davet Linki"
            }
          ),
          url: t(
            {
              en: "https://chat.whatsapp.com/Kza49cCtIMf9HsD0VNhH7V",
              tr: "https://chat.whatsapp.com/CI3boPYbZpb0no69TwgxaD"
            }
          )
      },
      {
          label: t({
            en: "Telegram Group Link",
            tr: "Telegram Grup Linki"
          }),
          url: t({
            en: "https://t.me/en1234S",
            tr: "https://t.me/tr1234S"
          })
      }
    ],
    bankAccountInfo: t({
      en: "For your donations, our association's state approved bank account will be shared here.",
      tr: "Bağışlarınız için, derneğimizin devlet onaylı banka hesabı burada paylaşılacaktır."
    }),
    soon: t({
      en: "SOON!",
      tr: "YAKINDA!"
    })
  },
} satisfies Dictionary;

export default pageContent;
