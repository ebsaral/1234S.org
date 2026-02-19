'use client';

import axios from 'axios';
import { useIntlayer, useLocale } from 'next-intlayer';
import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import SubmitFormButton from './Buttons/SubmitFormButton';

const ContactForm = ({ className = '' }) => {
  const { locale } = useLocale();
  const content = useIntlayer('contact-section', locale);
  const recaptchaRef = useRef();
  const [serverError, setServerError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const token = await recaptchaRef.current.executeAsync();

    try {
      const res = await axios.post(`/api/${locale}/contact`, {
        ...data,
        token,
      });
      if (res.status == 200) {
        reset();
        setServerError(null);
        toast.success(content.form.success.value, { closeOnClick: true });
      }
    } catch (error) {
      setServerError(error.response.data.message);
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 ${className}`}>
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6 space-y-4'>
        <h2 className='text-xl font-semibold text-center'>{content.form.title}</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='flex flex-col items-start justify-start gap-4'>
            {/* Name */}
            <div className='w-full'>
              <label className='block text-sm font-medium mb-1'>{content.form.name.label}</label>
              <input
                type='text'
                className='w-full rounded-lg border p-2 focus:outline-none focus:ring'
                {...register('name', {
                  required: content.form.name.required.value,
                  minLength: { value: 2, message: content.form.name.message.value },
                })}
              />
              {errors.name && <p className='text-sm text-red-500 mt-1'>{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div className='w-full'>
              <label className='block text-sm font-medium mb-1'>{content.form.email.label}</label>
              <input
                type='email'
                placeholder={content.form.email.placeholder.value}
                className='w-full rounded-lg border p-2 focus:outline-none focus:ring'
                {...register('email', {
                  required: content.form.email.required.value,
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: content.form.email.message.value,
                  },
                })}
              />
              {errors.email && <p className='text-sm text-red-500 mt-1'>{errors.email.message}</p>}
            </div>

            {/* Phone */}
            <div className='w-full'>
              <label className='block text-sm font-medium mb-1'>{content.form.phone.label}</label>
              <input
                type='tel'
                placeholder='+90 5xx xxx xx xx'
                className='w-full rounded-lg border p-2 focus:outline-none focus:ring'
                {...register('phone', {
                  required: content.form.phone.required.value,
                  pattern: {
                    value: /^\+?(\d{1,3})?[-.\s]?(\(?\d{3}\)?[-.\s]?)?(\d[-.\s]?){6,9}\d$/,
                    message: content.form.phone.message.value,
                  },
                })}
              />
              {errors.phone && <p className='text-sm text-red-500 mt-1'>{errors.phone.message}</p>}
            </div>
          </div>

          <div className='flex flex-col items-start justify-start gap-4'>
            {/* Birthday */}
            <div className='w-full'>
              <label className='block text-sm font-medium mb-1'>{content.form.birthday.label}</label>
              <input
                type='date'
                className='w-full rounded-lg border p-2 focus:outline-none focus:ring'
                {...register('birthday')}
              />
              {errors.birthday && <p className='text-sm text-red-500 mt-1'>{errors.birthday.message}</p>}
            </div>

            {/* Message */}
            <div className='w-full'>
              <label className='block text-sm font-medium mb-1'>{content.form.message.label}</label>
              <textarea
                rows={4}
                className='w-full rounded-lg border p-2 focus:outline-none focus:ring resize-none'
                {...register('message', { required: content.form.message.required.value })}
              />
              {errors.message && <p className='text-sm text-red-500 mt-1'>{errors.message.message}</p>}
            </div>
          </div>
        </div>
        <div className='mx-auto flex items-center justify-center'>
          <SubmitFormButton
            text={content.form.submitButton.label.value}
            onSubmitText={content.form.submitButton.onSubmitLabel.value}
            isSubmitting={isSubmitting}
          />
        </div>
        {serverError && <p className='text-sm text-red-500 mt-1'>{serverError}</p>}

        <ReCAPTCHA
          ref={recaptchaRef}
          size='invisible'
          sitekey={process.env.NEXT_PUBLIC_GOOGLE_SITE_KEY}
          onChange={(data) => {
            console.log('ReCAPTCHA onChange:', data);
          }}
        />
      </form>
    </div>
  );
};

export default ContactForm;
