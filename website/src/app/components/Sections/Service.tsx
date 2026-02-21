'use client';

import { useIntlayer } from 'next-intlayer';

import { BellElectric, Handshake } from 'lucide-react';
import { SocialIcon } from 'react-social-icons';
import ContactLink from '../Custom/Buttons/ContactLink';
import FormattedText from '../Custom/FormattedText';

const Service = () => {
  const id = 'service';
  const sectionKey = 'service';
  const content = useIntlayer(`${sectionKey}-section`);

  return (
    <section id={id} className='relative max-w-screen mx-auto overflow-hidden bg-rose-500'>
      <div className={`z-0 absolute inset-0 bg-gradient-to-br from-rose-500 to-rose-200 opacity-80'}`} />

      <div className='relative z-10 max-w-4xl mx-auto px-4 py-8'>
        <div className='relative mx-auto my-8 pb-1 rounded-2xl text-center'>
          <div
            className={`z-20 relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg my-8 transition-all duration-300 hover:scale-110`}
          >
            <Handshake className='text-rose-600' size={40} />
          </div>

          <h2 className={`text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900  leading-tight overflow-ellipsis`}>
            {content.title}
          </h2>

          <FormattedText
            className='max-w-4xl mx-auto px-6 sm:px-10 pt-6 text-center leading-relaxed text-md sm:text-lg md:text-xl text-black'
            text={content.description.value}
          />
        </div>

        <div className={`max-w-2xl mx-auto flex flex-col items-center justify-center gap-5`}>
          <ContactLink className='peer p-4 min-w-52 order-2' />
          <BellElectric className='peer-hover:animate-bell peer-active:animate-bell order-1' />
        </div>

        {content.contact.enabled && (
          <div className='max-w-5xl flex flex-col items-center mx-auto mt-10 gap-4'>
            <div className='flex items-center justify-center gap-4'>
              {content.contact.items.map((props, index) => (
                <SocialIcon
                  key={index}
                  title={props.label.value}
                  target='_blank'
                  className='transition-all duration-300 transform hover:scale-110'
                  url={props.url.value}
                />
              ))}
            </div>
            <div className='text-center'>
              <em>{content.contact.label}</em>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Service;
