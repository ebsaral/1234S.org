import { t, type Dictionary } from 'intlayer';

const pageContent = {
  key: 'contact-section',
  content: {
    title: t({
      en: 'Contact',
      tr: 'İletişim',
    }),
    description: t({
      en: 'You can contact us for your questions, requests and opinions.',
      tr: 'Soru, istek ve görüşlerinizi bize gönderebilirsiniz.',
    }),
    form: {
      title: t({
        en: 'Contact Form',
        tr: 'İletişim Formu',
      }),
      error: {
        captcha: t({
          en: 'Captcha verification failed. Please try again.',
          tr: 'Captcha doğrulaması başarısız oldu. Lütfen tekrar deneyin.',
        }),
        server: t({
          en: 'An error occurred on our server while submitting your form. Please try again later.',
          tr: 'Form gönderilirken sunucuda bir hata oluştu. Lütfen daha sonra tekrar deneyin.',
        }),
      },
      success: t({
        en: 'Your contact form has been saved successfully!',
        tr: 'İletişim formunuz başarıyla kaydedildi!',
      }),
      select: t({
        en: 'Select...',
        tr: 'Seçiniz...',
      }),
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
      message: {
        label: t({
          en: 'Your message',
          tr: 'Mesajınız',
        }),
        required: t({
          en: 'Please enter your message.',
          tr: 'Lütfen mesajınızı giriniz.',
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
