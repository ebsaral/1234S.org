"use client";

import { useIntlayer, useLocale } from 'next-intlayer';
import {SocialIcon} from "react-social-icons";

import { useIntersectionObserver } from '../hooks/useScrollEffects';
import { Locales } from 'intlayer';
import { Feather } from 'lucide-react';

const Footer = () => {
  const content = useIntlayer("footer-section");
  const { locale } = useLocale();
  const [sectionRef] = useIntersectionObserver();

  return (
    <footer id="contact" ref={sectionRef} className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white pt-10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mx-auto w-20 h-20 text-center text-gray-300 text-sm mb-8">
              <a className='group flex flex-col gap-0 hover:gap-1 items-center p-5 hover:text-white' title={content.contact.title.value} href={`mailto:${content.contact.email.value}`}>
                <div className=''><Feather size={36}/></div>
                <div className='group-hover:tracking-wider group-hover:text-md transition-all duration-300'>{content.contact.email}</div>
              </a>
          </div>
          <div id="social-links" className="pt-2">
            {/* Social Media Icons */}
            <div className="flex justify-center items-center gap-4 mb-8">
              {content.links.social.map((props, index) => (
                <SocialIcon key={index} title={props.label.value} target="_blank" className="transition-all duration-300 transform hover:scale-110" url={props.url.value} />
              ))}
            </div>
            {locale === Locales.ENGLISH && <div className="flex justify-center items-center gap-4 mb-8">
              <a href="https://www.producthunt.com/products/1234s-org-a-philosophical-movement?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-1234s&#0045;org&#0045;a&#0045;philosophical&#0045;movement" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1036802&theme=light&t=1762851644144" alt="1234S&#0046;org&#0032;&#0124;&#0032;A&#0032;Philosophical&#0032;Movement - Logical&#0032;Spirituality&#0058;&#0032;Interconnectedness&#0044;&#0032;Justice&#0044;&#0032;Health | Product Hunt" style={{width: "250px", height: "54px"}} width="250" height="54" /></a>
            </div>}
            <div className="flex flex-col gap-3 mt-6 mb-2 items-center justify-center text-gray-400 text-xs whitespace-pre-line my-2">
              <p>2025 - {new Date().getFullYear()} © {content.association.name}</p>
              {content.association.description && <p>{content.association.description}</p>}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;