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

          <div className='flex flex-col gap-3 items-center justify-center text-gray-300 text-xs whitespace-pre-line'>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5'>
              <p>
                {new Date().getFullYear()} © {content.name}
              </p>
            </div>
            <div className='flex flex-col items-center justify-center gap-3 sm:gap-5'>
              <p className='text-center'>
                <a className='link-underline' href={content.stackshare.href.value}>
                  {content.stackshare.label}
                </a>
              </p>
            </div>

            {locale === Locales.ENGLISH && content.displayProductHunt.value && (
              <a
                className='mt-2'
                href='https://www.producthunt.com/products/1234s-org-a-philosophical-movement?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-1234s&#0045;org&#0045;a&#0045;philosophical&#0045;movement'
                target='_blank'
              >
                <img
                  src='https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1036802&theme=light&t=1762851644144'
                  alt='1234S&#0046;org&#0032;&#0124;&#0032;A&#0032;Philosophical&#0032;Movement - Logical&#0032;Spirituality&#0058;&#0032;Interconnectedness&#0044;&#0032;Justice&#0044;&#0032;Health | Product Hunt'
                  style={{ width: '250px', height: '54px' }}
                  width='250'
                  height='54'
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
