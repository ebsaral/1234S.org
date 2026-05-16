import { t, type Dictionary } from 'intlayer';

const pageContent = {
  key: 'action-section',
  content: {
    title: t({
      en: 'Action Plan',
      tr: 'Eylem Planı',
    }),
    items: [
      {
        title: t({
          en: 'The legal case and informing the public',
          tr: 'Hukuki süreç ve kamuoyunun bilgilendirilmesi',
        }),
        subtitle: t({
          en: 'Initiating legal proceedings and following up on the necessary regulations to ensure compliance regarding [The Rape Case Of Big Tech Companies](/en/blog/the-rape-case-of-big-tech-companies). Informing the public about the illegal business practices of those companies throughout the entire legal process.',
          tr: '[Büyük Teknoloji Şirketlerinin Tecavüz Vakası](/tr/blog/buyuk-teknoloji-sirketlerinin-tecavuz-vakasi) hakkında yasal işlemlerin başlatılması için dava açılması ve gerekli düzenlemelerin uygulanması için sürecin takip edilmesi. Tüm dava sürecinde, şirketlerin uyguladıkları yasal olmayan iş modelleri hakkında kamuoyunun bilgilendirilmesi.',
        }),
        status: {
          key: 'on-hold',
          text: t({
            en: 'On Hold',
            tr: 'Beklemede',
          }),
        },
      },
      {
        title: t({
          en: 'Analyzing health situations',
          tr: 'Sağlık durumlarının incelenmesi',
        }),
        subtitle: t({
          en: 'Analyzing changes in the health status of citizens after removing biological devices connected to the illicit global economy via artificial intelligence. Sharing the findings transparently and reliably with the public.',
          tr: 'Yasa dışı küresel ekonomiye yapay zeka vasıtasıyla bağlanmış olan biyolojik cihazların vücutlarımızdan çıkartılmalarının ardından, vatandaşların sağlık durumlarındaki değişikliklerin analiz edilmesi. Gözlemlerin şeffaf ve güvenilir bir şekilde kamuoyu ile paylaşılması.',
        }),
        status: {
          key: 'not-started',
          text: t({
            en: 'Not Started',
            tr: 'Başlamadı',
          }),
        },
      },
      {
        title: t({
          en: 'Transforming health sector',
          tr: 'Sağlık sektörünün dönüştürülmesi',
        }),
        subtitle: t({
          en: 'Proving the validity of our teachings in patient treatment methods and transitioning to a healthy global health model that will end the use of pharmaceuticals.',
          tr: 'Hasta tedavi yöntemlerinde öğretilerimizin geçerliliğin kanıtlanması ve ilaç kullanımına son verilecek sağlıklı bir küresel sağlık modeline geçiş yapılması.',
        }),
        status: {
          key: 'not-started',
          text: t({
            en: 'Not Started',
            tr: 'Başlamadı',
          }),
        },
      },
      {
        title: t({
          en: 'Developing business models',
          tr: 'İş modellerinin geliştirilmesi',
        }),
        subtitle: t({
          en: 'By implementing control mechanisms against illegal business models, giving wing to healthy (sustainable) business models.',
          tr: 'Yasa dışı iş modellerini kontrol eden mekanizmaların devreye alınmalarıyla birlikte, sağlıklı iş modellerinin önlerinin açılması.',
        }),
        status: {
          key: 'not-started',
          text: t({
            en: 'Not Started',
            tr: 'Başlamadı',
          }),
        },
      },
      {
        title: t({
          en: 'Ensuring equal opportunities',
          tr: 'Fırsat eşitliğinin sağlanması',
        }),
        subtitle: t({
          en: 'By introducing healthy business models, eliminating inequalities in all competitions and redesigning the global politics in accordance with [the principles of nature](/spirituality) as a process.',
          tr: 'Sağlıklı iş modellerinin kullanıma sunulmasıyla birlikte, rekabetlerdeki fırsat eşitsizliklerinin giderilmesi için çalışmalar yapılması ve bir süreç halinde küresel politika sisteminin [doğanın ilkelerine](/maneviyat) göre yeniden tasarlanması.',
        }),
        status: {
          key: 'not-started',
          text: t({
            en: 'Not Started',
            tr: 'Başlamadı',
          }),
        },
      },
    ],
  },
} satisfies Dictionary;

export default pageContent;
