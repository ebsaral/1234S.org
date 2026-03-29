'use client';

import { FaGithub, FaProductHunt } from 'react-icons/fa';
import { FaInstagram, FaSquareXTwitter } from 'react-icons/fa6';
import { useIntlayer } from 'react-intlayer';
import { MarkdownRenderer } from 'react-intlayer/markdown';
import CountdownClock from './Custom/CountdownClock';
import MarkdownProvider from './Custom/MarkdownProvider';

const Footer = () => {
  const content = useIntlayer('footer-section');

  return (
    <MarkdownProvider>
      <footer id='contact' className='stars-box pt-4 pb-10'>
        <div className='stars'></div>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-7xl flex flex-col justify-center items-center gap-8'>
            {/* Social Media section */}
            <div className='flex flex-col gap-8 items-center justify-center mt-4'>
              <div className='flex justify-center items-center gap-4'>
                {/* X (Twitter) */}
                <a
                  className='hover:scale-110 transition-all duration-300 text-gray-100 opacity-90 hover:opacity-100'
                  href={content.social[0].href.value}
                  title={content.social[0].label.value}
                  aria-label={content.social[0].label.value}
                >
                  <FaSquareXTwitter size={36} />
                </a>

                {/* Instagram */}
                <a
                  className='hover:scale-110 transition-all duration-300 text-gray-100 opacity-90 hover:opacity-100'
                  href={content.social[1].href.value}
                  title={content.social[1].label.value}
                  aria-label={content.social[1].label.value}
                >
                  <FaInstagram size={36} />
                </a>
              </div>
            </div>

            {/* Note & Links */}
            <div className='flex flex-col items-center justify-center gap-3 sm:gap-5'>
              <p className='text-center text-gray-300'>
                <em>{content.note}</em>
              </p>
              <p className='flex flex-row items-center justify-center gap-3 sm:gap-5 text-sm font-medium link-underline'>
                <a className='text-gray-100 hover:no-underline' href={content.career.href.value}>
                  {content.career.label}
                </a>
                <a className='text-gray-100 hover:no-underline' href={content.contact.href.value}>
                  {content.contact.label}
                </a>
              </p>
            </div>

            <div className='flex flex-col gap-3 items-center justify-center text-gray-300 text-xs whitespace-pre-line'>
              {/* Interconnectedness claim */}
              <div className='link-underline text-center text-xs'>
                <MarkdownRenderer>{content.interconnectedness.value}</MarkdownRenderer>
              </div>

              {/* Development Links */}
              <div className='flex flex-row items-center justify-center gap-3 sm:gap-5 mt-4'>
                <div className='link-underline text-center hover:scale-110 transition-all duration-300'>
                  <a
                    className='text-gray-100 opacity-90 hover:opacity-100'
                    href={content.github.href.value}
                    title={content.github.label.value}
                    aria-label={content.github.label.value}
                  >
                    <FaGithub size={24} />
                  </a>
                </div>
                <div className='link-underline text-center hover:scale-110 transition-all duration-300'>
                  <a
                    className='text-gray-100 opacity-90 hover:opacity-100'
                    href={content.productHunt.href.value}
                    title={content.productHunt.label.value}
                    aria-label={content.productHunt.label.value}
                  >
                    <FaProductHunt size={24} />
                  </a>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center gap-3 sm:gap-5'>
                <p>
                  {new Date().getFullYear()} © {content.name}
                </p>
              </div>
            </div>
            <CountdownClock className='mb-10 max-w-sm' targetDate={new Date('2026-09-16T23:59:59')} />
          </div>
        </div>
      </footer>
    </MarkdownProvider>
  );
};

export default Footer;
