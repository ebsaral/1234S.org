'use client';

import { useIntlayer } from 'next-intlayer';

import FormattedText from '@/app/components/Custom/FormattedText';
import { FileHeart } from 'lucide-react';
import ContactForm from '../Custom/ContactForm';

const Contact = () => {
  const id = 'contact';
  const sectionKey = 'contact';
  const content = useIntlayer(`${sectionKey}-section`);

  return (
    <section id={id} className='relative max-w-screen mx-auto overflow-hidden bg-blue-500 pb-6'>
      <div className={`absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-200 opacity-80'}`} />

      <div className='max-w-4xl mx-auto px-4'>
        <div className='relative mx-auto mt-16 pb-1 rounded-2xl text-center'>
          <div
            className={`z-20 relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg my-8 transition-all duration-300 hover:scale-110`}
          >
            <FileHeart className='text-blue-600' size={40} />
          </div>

          <h2
            className={`text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-5 leading-tight overflow-ellipsis`}
          >
            {content.title}
          </h2>

          <FormattedText
            className='max-w-4xl mx-auto px-6 sm:px-10 py-6 text-center leading-relaxed text-md sm:text-lg md:text-xl text-black'
            text={content.description.value}
          />
        </div>
      </div>
      <div className='mx-auto w-full z-10 relative top-0 flex flex-col items-center justify-start'>
        <ContactForm className='mx-auto w-full' />
      </div>
    </section>
  );
};

export default Contact;
