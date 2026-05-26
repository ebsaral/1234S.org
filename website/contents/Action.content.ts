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
          en: '- Initiating legal proceedings and following up on the necessary regulations to ensure compliance regarding [The Rape Case Of Big Tech Companies](/en/blog/the-rape-case-of-big-tech-companies).\n- Compensating all citizens for the financial and moral damages caused by companies.\n- Informing the public about the illegal business practices of those companies throughout the entire legal process.',
          tr: '- [Büyük Teknoloji Şirketlerinin Tecavüz Vakası](/tr/blog/buyuk-teknoloji-sirketlerinin-tecavuz-vakasi) hakkında yasal işlemlerin başlatılması için dava açılması.\n- Şirketlerin yaşattıkları maddi ve manevi hasarların tüm vatandaşlara tazminat olarak geri ödenmesi.\n- Tüm dava sürecinde, şirketlerin uyguladıkları yasal olmayan iş modelleri hakkında kamuoyunun bilgilendirilmesi.',
        }),
        status: {
          key: 'on-hold',
          text: t({
            en: 'Being Kept Waiting / Getting Blocked',
            tr: 'Bekletiliyor / Engelleniyor',
          }),
        },
      },
      {
        title: t({
          en: 'Improving health conditions',
          tr: 'Sağlık koşullarının iyileştirilmesi',
        }),
        subtitle: t({
          en: '- Analyzing changes in the health status of citizens after removing biological devices connected to the illicit global economy via artificial intelligence.\n- Ensuring that all compensation paid by companies being used to improve public health and preventing possible fraud methods.\n- Sharing all reports transparently and honestly, in details, with the public.',
          tr: '- Yasa dışı küresel ekonomiye yapay zekâ vasıtasıyla bağlanmış olan biyolojik cihazların vücutlarımızdan çıkartılmalarının ardından, vatandaşların sağlık durumlarındaki değişikliklerin analiz edilmesi.\n- Şirketlerin ödedikleri tüm tazminatın halkın sağlığını iyileştirmek için kullanılması ve tekrarlanabilecek hilekârlıkların önüne geçilmesi.\n- Raporların şeffaf ve dürüst bir şekilde, detaylarıyla birlikte, kamuoyu ile paylaşılması.',
        }),
        status: {
          key: 'not-started',
          text: t({
            en: 'Not Started',
            tr: 'Başlatılmadı',
          }),
        },
      },
      {
        title: t({
          en: 'Transforming health sector',
          tr: 'Sağlık sektörünün dönüştürülmesi',
        }),
        subtitle: t({
          en: '- Proving the validity of our teachings in patient treatment methods and transitioning to a healthy global health model that will end the use of pharmaceuticals.',
          tr: '- Hasta tedavi yöntemlerinde öğretilerimizin geçerliliğin kanıtlanması ve ilaç kullanımına son verilecek sağlıklı bir küresel sağlık modeline geçiş yapılması.',
        }),
        status: {
          key: 'not-started',
          text: t({
            en: 'Not Started',
            tr: 'Başlatılmadı',
          }),
        },
      },
      {
        title: t({
          en: 'Developing business models',
          tr: 'İş modellerinin geliştirilmesi',
        }),
        subtitle: t({
          en: '- By implementing block mechanisms against business models that cause harm in public, giving wing to healthy (sustainable) business models.',
          tr: '- Halkın sağlığına zarar veren iş modellerini engelleyen mekanizmaları devreye alarak, sağlıklı (sürdürülebilir) iş modellerinin önünün açılması.',
        }),
        status: {
          key: 'not-started',
          text: t({
            en: 'Not Started',
            tr: 'Başlatılmadı',
          }),
        },
      },
      {
        title: t({
          en: 'Ensuring equal opportunities',
          tr: 'Fırsat eşitliğinin sağlanması',
        }),
        subtitle: t({
          en: '- Improving work conditions to eliminate inequalities in all competitions and redesigning the global politics in accordance with [the principles of nature](/spirituality) as a process.',
          tr: '- Rekabetlerdeki fırsat eşitsizliklerinin giderilmesi için çalışmalar yapılması ve bir süreç halinde küresel politika sisteminin [doğanın ilkelerine](/maneviyat) göre yeniden tasarlanması.',
        }),
        status: {
          key: 'not-started',
          text: t({
            en: 'Not Started',
            tr: 'Başlatılmadı',
          }),
        },
      },
    ],
    support: t({
      en: 'To contribute to the development and proceeding of this philosophical movement, you can visit our <u>**Contact**</u> page. You can help us reach individuals and/or organizations that can assist with any step in our action plan.',
      tr: 'Bu felsefi akımın geliştirilmesine ve ilerlemesine katkıda bulunmak için <u>**İletişim**</u> sayfamızı ziyaret edebilirsiniz. Eylem planımızdaki herhangi bir adıma yardım edebilecek kişi ve/veya kurumlara ulaşmamızı sağlayabilirsiniz.',
    }),
  },
} satisfies Dictionary;

export default pageContent;
