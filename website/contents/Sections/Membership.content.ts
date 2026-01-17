import { t, type Dictionary } from 'intlayer';

const pageContent = {
  key: 'membership-section',
  content: {
    title: t({
      en: 'Association Membership',
      tr: 'Dernek Üyeliği',
    }),
    description: t({
      en: '**1234 Science & Art Association** does not charge membership fees and you can become a member for free. If you wish, you can fill out the pre-application form below to have our association contact you for your official membership.',
      tr: '**1234 Sanat ve İlim Derneği** üyelik aidatı talep etmez ve ücretsiz üye olabilirsiniz. Dilerseniz, resmi üyeliğiniz için aşağıdaki ön başvuru formunu doldurarak derneğimizin sizinle iletişime geçmesini sağlayabilirsiniz.',
    }),
    form: {
      title: t({
        en: 'Pre-Application Form',
        tr: 'Ön Başvuru Formu',
      }),
      error: {
        captcha: t({
          en: 'Captcha verification failed. Please try again.',
          tr: 'Captcha doğrulaması başarısız oldu. Lütfen tekrar deneyin.',
        }),
        server: t({
          en: 'An error occurred on our server while submitting your application. Please try again later.',
          tr: 'Başvurunuz gönderilirken sunucuda bir hata oluştu. Lütfen daha sonra tekrar deneyin.',
        }),
      },
      success: t({
        en: 'Your membership application has been saved successfully!',
        tr: 'Üyelik başvurunuz başarıyla kaydedildi!',
      }),
      select: t({
        en: 'Select...',
        tr: 'Seçiniz...',
      }),
      id: {
        label: t({
          en: 'Your ID Number',
          tr: 'TC Kimlik Numarası',
        }),
        required: t({
          en: 'Please enter your ID Number.',
          tr: 'Lütfen TC Kimlik Numaranızı giriniz.',
        }),
        message: t({
          en: 'ID Number must be at least 11 characters.',
          tr: 'TC Kimlik Numarası en az 11 karakter olmalıdır.',
        }),
      },
      name: {
        label: t({
          en: 'Full Name',
          tr: 'Ad Soyad',
        }),
        required: t({
          en: 'Please enter your full name.',
          tr: 'Lütfen adınızı ve soyadınızı giriniz.',
        }),
        message: t({
          en: 'Full Name must be at least 3 characters.',
          tr: 'Ad Soyad en az 3 karakter olmalıdır.',
        }),
      },
      email: {
        placeholder: t({
          en: 'name@email.com',
          tr: 'isim@eposta.com',
        }),
        label: t({
          en: 'E-mail Address',
          tr: 'E-posta Adresi',
        }),
        required: t({
          en: 'Please enter your email address.',
          tr: 'Lütfen E-posta adresinizi giriniz.',
        }),
        message: t({
          en: 'Please enter a valid Email Address.',
          tr: 'Lütfen geçerli bir E-posta Adresi girin.',
        }),
      },
      mother: {
        label: t({
          en: "Mother's name",
          tr: 'Anne Adı',
        }),
        required: t({
          en: "Please enter your mother's name.",
          tr: 'Lütfen annenizin adını giriniz.',
        }),
        message: t({
          en: "Mother's Name must be at least 3 characters.",
          tr: 'Anne Adı en az 3 karakter olmalıdır.',
        }),
      },
      father: {
        label: t({
          en: "Father's Name",
          tr: 'Baba Adı',
        }),
        required: t({
          en: "Please enter your father's name.",
          tr: 'Lütfen babanızın adını giriniz.',
        }),
        message: t({
          en: "Father's Name must be at least 3 characters.",
          tr: 'Baba Adı en az 3 karakter olmalıdır.',
        }),
      },
      birthday: {
        label: t({
          en: 'Date of Birth',
          tr: 'Doğum Tarihi',
        }),
        required: t({
          en: 'Please enter your date of birth',
          tr: 'Lütfen doğum tarihinizi giriniz.',
        }),
      },
      gender: {
        label: t({
          en: 'Gender',
          tr: 'Cinsiyet',
        }),
        options: {
          female: t({
            en: 'Female',
            tr: 'Kadın',
          }),
          male: t({
            en: 'Male',
            tr: 'Erkek',
          }),
          other: t({
            en: 'Other',
            tr: 'Diğer',
          }),
        },
        required: t({
          en: 'Please select your gender.',
          tr: 'Lütfen cinsiyetinizi seçiniz.',
        }),
      },
      education: {
        label: t({
          en: 'Education Level',
          tr: 'Eğitim Seviyesi',
        }),
      },
      occupation: {
        label: t({
          en: 'Occupation',
          tr: 'Meslek',
        }),
      },
      address: {
        label: t({
          en: 'Address',
          tr: 'Adres',
        }),
        required: t({
          en: 'Please enter your address.',
          tr: 'Lütfen adresinizi giriniz.',
        }),
        message: t({
          en: 'Address must be at least 10 characters.',
          tr: 'Adres en az 10 karakter olmalıdır.',
        }),
      },
      note: {
        label: t({
          en: 'If you would like to leave a note...',
          tr: 'Bırakmak istediğiniz bir not varsa...',
        }),
      },
      phone: {
        label: t({
          en: 'Phone Number',
          tr: 'Telefon Numarası',
        }),
        required: t({
          en: 'Please enter your phone number.',
          tr: 'Lütfen telefon numaranızı giriniz.',
        }),
        message: t({
          en: 'Enter a valid phone number.',
          tr: 'Geçerli bir telefon numarası giriniz.',
        }),
      },
      submitButton: {
        label: t({
          en: 'Submit Form',
          tr: 'Formu Gönder',
        }),
        onSubmitLabel: t({
          en: 'Submitting...',
          tr: 'Gönderiliyor...',
        }),
      },
    },
  },
} satisfies Dictionary;

export default pageContent;
