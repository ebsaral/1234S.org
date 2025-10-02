"use client";

import { useIntersectionObserver } from '../hooks/useScrollEffects';
import { Twitter, Youtube, Linkedin, Github, Instagram } from 'lucide-react';
import MediumSVG from './svg/Medium'; 
import { useIntlayer, useLocale } from 'next-intlayer';
import Image from 'next/image'

const Footer = () => {
  const { locale } = useLocale();
  const navigation = useIntlayer("navigation");
  const content = useIntlayer("footer-section");
  
  const [sectionRef] = useIntersectionObserver();

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/logical.spirituality", label: "Instagram" },
    //{ icon: Youtube, href: "https://www.youtube.com/@0LogicalSpirituality1", label: "YouTube" },
    { icon: Twitter, href: "https://x.com/L_Spirituality", label: "X" }, 
    //{ icon: MediumSVG, href: "https://medium.com/@logical-spirituality", label: "Medium" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/1234s-org", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/ebsaral/Logical-Spirituality", label: "GitHub" }
  ];


  return (
    <footer id="contact" ref={sectionRef} className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo */}
          <div className='flex justify-center caret-transparent'>
            <Image 
              className='m-10 size-[120px] sm:size-[160px] rounded-full'
              src="/logos/logo-bg-white.png"
              title={navigation.home.text.value}
              alt={navigation.home.text.value + " footer logo"}
              priority={false}
              width={160}
              height={160}
            />
          </div>
          
          <div id="social-links" className="pt-8 border-t border-gray-700">
            {/* Social Media Icons */}
            <div className="flex justify-center items-center gap-4 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-emerald-600/20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  aria-label={social.label}
                  title={social.label}
                >
                  <social.icon className="text-white hover:text-emerald-400 transition-colors duration-300" size={20} />
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm m-2 underline-offset-4 p-2 transition-all duration-300 transform hover:text-base hover:font-semibold h-10">
              <a className='underline hover:no-underline' href={content.links.developer.value} target='_blank' title={content.developer.value}>{content.developer}</a>
            </p>
            <p className="text-gray-400 mb-2 text-sm whitespace-pre-line">
              {content.title}<br></br>
              {content.description}
            </p>
            <div className="flex flex-col gap-3 mt-6 mb-2 items-center justify-center text-gray-400 text-xs whitespace-pre-line my-2">
              <p><b>{content.status.label}:</b> {content.status.text}</p>
              <p><b>{content.lastUpdate.label}:</b> <a className="underline hover:no-underline underline-offset-2" href={content.links.githubCommits.value} title="GitHub commits" target="_blank">{new Date(content.lastUpdate.text.value).toLocaleString(locale)}</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;