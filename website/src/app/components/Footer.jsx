'use client';

import { useIntlayer, useLocale } from 'next-intlayer';
import { SocialIcon } from 'react-social-icons';

import { Locales } from 'intlayer';

const Footer = () => {
  const content = useIntlayer('footer-section');
  const { locale, pathWithoutLocale } = useLocale();

  return (
    <footer id='contact' className='stars-box pt-4 pb-10'>
      <div className='stars'></div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl flex flex-col justify-center items-center gap-8'>
          {/* Social Media section */}
          <div id='social-links' className='flex flex-col gap-8 items-center justify-center mt-4'>
            <div className='flex justify-center items-center gap-4'>
              {content.social.map((props, index) => (
                <SocialIcon
                  key={index}
                  title={props.label.value}
                  target='_blank'
                  className='transition-all duration-300 transform hover:scale-110'
                  url={props.href.value}
                />
              ))}
            </div>
          </div>

          <div className='inline-flex items-center justify-center gap-3 sm:gap-5'>
            <p className='text-center text-gray-300'>
              <em>{content.note}</em>
            </p>
          </div>

          <div className='flex flex-col gap-3 items-center justify-center text-gray-300 text-xs whitespace-pre-line'>
            <div className='flex flex-col items-center justify-center gap-3 sm:gap-5'>
              <p>
                <a className='link-underline' href={content.contact.href.value}>
                  {content.contact.label}
                </a>
              </p>
              <p>
                {new Date().getFullYear()} © {content.name}
              </p>
            </div>
            <div className='flex flex-row items-center justify-center gap-3 sm:gap-5'>
              <p className='text-center'>
                <a className='link-underline' href={content.github.href.value}>
                  {content.github.label}
                </a>
              </p>
              <p className='text-center'>
                <a
                  className='text-gray-100 hover:text-gray-200 link-underline hover:no-underline'
                  href={content.productHunt.href.value}
                >
                  {content.productHunt.label}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
