"use client";

import React, { useState, useEffect } from 'react';
import { useIntersectionObserver } from '../hooks/useScrollEffects';
import { Heart, Globe, Scale, Twitter, Youtube, Linkedin, Github, Instagram } from 'lucide-react';
import MediumSVG from './svg/Medium'; 
import { useIntlayer } from 'next-intlayer';

const Footer = () => {
  const navigation = useIntlayer("navigation");
  const content = useIntlayer("footer-section");
  
  const [sectionRef] = useIntersectionObserver();
  const [activeSection, setActiveSection] = useState('home');

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/logical.spirituality", label: "Instagram" },
    { icon: Youtube, href: "https://www.youtube.com/@0LogicalSpirituality1", label: "YouTube" },
    { icon: Twitter, href: "https://x.com/L_Spirituality", label: "X" }, 
    { icon: MediumSVG, href: "https://medium.com/@logical-spirituality", label: "Medium" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/1234s-org", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/ebsaral/Logical-Spirituality", label: "GitHub" }
  ];

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'interconnectedness', href: '#interconnectedness' },
    { key: 'justiceInNature', href: '#justice-in-nature' },
    { key: 'health', href: '#health' },
    { key: 'examples', href: '#examples' },
    { key: 'contact', href: '#contact', extra: "#social-links" }
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
    <footer id="contact" ref={sectionRef} className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo */}
          <div className='flex justify-center caret-transparent'>
            <img className='m-10 size-[120px] sm:size-[160px] rounded-full' src="/logos/logo-bg-white.png" title={navigation.home.text.value} alt={navigation.home.text.value + " footer logo"}/>
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
                onClick={() => document.querySelector(item.extra || item.href)?.scrollIntoView({ behavior: 'smooth' })}
                className={`transition-all duration-300 relative ${
                  isActiveSection(item.key, item.href)
                    ? 'text-emerald-400 font-medium'
                    : 'hover:text-emerald-400'
                }`}
              >
                {navigation[item.key].text}
                {/* Active indicator for footer */}
                {isActiveSection(item.key, item.href) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-400 rounded-full" />
                )}
              </button>
            ))}
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
            <p className="text-gray-400 mb-4 text-sm whitespace-pre-line">
              {content.title}{' '}{content.copyright.mark}{' '}{new Date().getFullYear()}<br></br>
              {content.description}
            </p>
            <p className="text-gray-400 text-xs whitespace-pre-line my-2">
              <b>{content.status.label}:</b> {content.status.text}<br></br><b>{content.lastUpdate.label}:</b> <a className='underline hover:no-underline underline-offset-2' href={content.links.githubCommits.value} title="GitHub" target="_blank">{new Date(content.lastUpdate.text.value).toLocaleString()}</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;