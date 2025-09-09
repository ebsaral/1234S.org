import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Heart, Globe, Scale, Twitter, Youtube, Linkedin, Github } from 'lucide-react';
import { LogoSrc } from '../lib/utils';
import MediumSVG from './svg/Medium'; 

const Footer = () => {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState('home');
  const lastUpdate = 1757433083016;
  const githubCommitLink = "https://github.com/ebsaral/Logical-Spirituality/commits/main/";

  const socialLinks = [
    { icon: MediumSVG, href: "https://medium.com/@logical-spirituality", label: "Medium (Blog)" },
    { icon: Youtube, href: "https://www.youtube.com/@0LogicalSpirituality1", label: "YouTube" },
    { icon: Twitter, href: "https://x.com/L_Spirituality", label: "X (Twitter)" }, 
    { icon: Linkedin, href: "https://www.linkedin.com/in/logical-spirituality", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/ebsaral/Logical-Spirituality", label: "GitHub" }
  ];

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'interconnectedness', href: '#interconnectedness' },
    { key: 'naturesJustice', href: '#natures-justice' },
    { key: 'health', href: '#health' },
    { key: 'examples', href: '#examples' }
  ];

  // Track active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => ({
        id: item.href.substring(1),
        element: document.querySelector(item.href)
      })).filter(section => section.element);

      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActiveSection = (itemKey, href) => {
    const sectionId = href.substring(1);
    return activeSection === sectionId;
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo */}
          <div className='flex justify-center caret-transparent'>
            <img className='m-10 size-[120px] sm:size-[160px] rounded-full' src={LogoSrc('white')} alt={t("home") + " footer logo"}/>
          </div>
          
          {/* Decorative Icons */}
          <div className="flex justify-center items-center gap-8 mb-8">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg transition-all duration-300 transform hover:scale-110">
              <Globe className="text-blue-600" size={24} />
            </div>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg transition-all duration-300 transform hover:scale-110">
              <Scale className="text-green-600" size={24} />
            </div>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg transition-all duration-300 transform hover:scale-110">
              <Heart className="text-rose-600" size={24} />
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 mb-8 text-sm text-gray-300 caret-transparent">
            {navItems.map((item) => (
              <button 
                key={item.key}
                onClick={() => document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' })}
                className={`transition-all duration-300 relative ${
                  isActiveSection(item.key, item.href)
                    ? 'text-emerald-400 font-medium'
                    : 'hover:text-emerald-400'
                }`}
              >
                {t(item.key)}
                {/* Active indicator for footer */}
                {isActiveSection(item.key, item.href) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-400 rounded-full" />
                )}
              </button>
            ))}
          </div>
          
          

          {/* Copyright */}
          <div className="pt-8 border-t border-gray-700">
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
                >
                  <social.icon className="text-white hover:text-emerald-400 transition-colors duration-300" size={20} />
                </a>
              ))}
            </div>

            <p className="text-gray-400 text-sm whitespace-pre-line">
              {t('copyright')}
            </p>
            <p className="text-gray-400 text-xs whitespace-pre-line">
              {t('lastUpdate')}: <a className='underline hover:no-underline underline-offset-2' href={githubCommitLink} target="_blank">{new Date(lastUpdate).toLocaleString()}</a>
            </p>
            <p className="text-gray-400 text-sm m-2 underline-offset-4 p-2 transition-all duration-300 transform hover:text-base">
              <a className='underline hover:no-underline' href="https://ebsaral.vercel.app" target='_blank'>{t('developer')}</a>
            </p>
            
            <p className="text-gray-400 text-xs mt-6 underline-offset-4">
              <a className='underline hover:no-underline' href="https://emergent.sh" target='_blank'>{t('themeCredit')}</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;