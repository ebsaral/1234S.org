import { t, type Dictionary } from 'intlayer';

const pageContent = {
  key: 'action-section',
  content: {
    title: t({
      en: 'Our Action Plan',
      tr: 'Eylem Planımız',
    }),
    complaintLink: t({
      en: 'The complaint file [WHRC 37992](/files/WHRC_37992.pdf) has been sent to [UN Human Rights Council](https://www.ohchr.org/) on October 16, 2026.',
      tr: '[WHRC 37992](/files/WHRC_37992_TR_translation.pdf) (Çeviri) dosya numaralı şikâyet, 16 Ekim 2026 tarihinde [BM İnsan Hakları Konseyi](https://www.ohchr.org/)’ne gönderilmiştir.',
    }),
    items: [
      {
        title: t({
          en: 'The legal case and informing the public',
          tr: 'Hukuki süreç ve kamuoyunun bilgilendirilmesi',
        }),
        subtitle: t({
          en: '- Explaining [The Rape Case Of Big Tech Companies](/en/blog/the-rape-case-of-big-tech-companies) to the public and filing lawsuits against responsible parties to initiate legal proceedings.\n- Reporting to the public about the illegal business practices of those companies and legal proceedings transparently, honestly, and in detail.',
          tr: "- [Büyük Teknoloji Şirketlerinin Tecavüz Vakası](/tr/blog/buyuk-teknoloji-sirketlerinin-tecavuz-vakasi)'nın kamuoyuna açıklanması ve sorumlular hakkında yasal işlemlerin başlatılması için davalar açılması.\n- Bu şirketlerin yasa dışı ticari uygulamaları ve hukuki süreç hakkında kamuoyunu şeffaf, dürüst ve ayrıntılı bir şekilde bilgilendirmek.",
        }),
        status: {
          key: 'on-hold',
          text: t({
            en: 'Getting Blocked',
            tr: 'Engelleniyor',
          }),
        },
      },
      {
        title: t({
          en: 'Improving health conditions',
          tr: 'Sağlık koşullarının iyileştirilmesi',
        }),
        subtitle: t({
          en: '- Ensuring that all compensation for the financial and non-financial damages caused by companies is used to improve public health and prevent potential frauds.\n- Proving the validity of our teachings in patient treatment methods and transitioning to a global health system that will end the use of pharmaceuticals.',
          tr: '- Şirketlerin sebep oldukları maddi ve manevi zararlar için ödenen tüm tazminatların toplum sağlığını iyileştirmek ve olası sahtekârlıkları önlemek için kullanılmalarını sağlamak.\n- Hasta tedavi yöntemlerinde öğretilerimizin geçerliliği kanıtlamak ve ilaç kullanımına son verilecek bir küresel sağlık sistemine geçiş yapmak.',
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
          en: 'Transforming business models',
          tr: 'İş modellerinin dönüştürülmesi',
        }),
        subtitle: t({
          en: '- By developing block mechanisms against business models that cause harm in public, leading a healthy direction to sustainable business models.\n- Monitoring the health conditions of the public and ensuring that the necessary measures are being taken to improve them.',
          tr: '- Toplum sağlığına zarar veren iş modellerine karşı engelleyici mekanizmalar geliştirerek, sürdürülebilir iş modellerine geçilmesine öncülük etmek.\n- Kamu sağlığı koşullarını takip etmek ve bunları iyileştirmek için gerekli önlemlerin alındığına emin olmak.',
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
          en: '- Ensuring all living conditions are free of scientific and management frauds.\n- Improving all work conditions to eliminate inequalities in all competitions; redesigning the global politics in accordance with [the principles of nature](/spirituality) as a process.',
          tr: '- Tüm yaşam koşullarının bilimsel ve idari alandaki usulsüzlüklerden arındırılmalarını sağlamak.\n- Tüm rekabet alanlarında eşitsizlikleri ortadan kaldırmak için çalışma koşullarını iyileştirmek; küresel siyaseti, bir süreç olarak [doğanın ilkelerine](/maneviyat) uygun şekilde yeniden tasarlamak.',
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
      en: 'You can help us reach individuals and/or organizations that can assist with any step in our action plan. To contribute to the development and proceeding of this philosophical movement that handles all steps above together, you can visit our <u>**Contact**</u> page.',
      tr: 'Eylem planımızdaki herhangi bir adıma yardım edebilecek kişi ve/veya kurumlara ulaşmamızı sağlayabilirsiniz. Tüm adımları bir bütün olarak ele alan bu felsefi akımın geliştirilmesine ve ilerlemesine katkıda bulunmak için <u>**İletişim**</u> sayfamızı ziyaret edebilirsiniz.',
    }),
  },
} satisfies Dictionary;

export default pageContent;
