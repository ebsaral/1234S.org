import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollEffects } from '../hooks/useScrollEffects';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { LogoSrc } from '../lib/utils';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

const Header = () => {
  const { t, currentLanguage, changeLanguage, availableLanguages } = useLanguage();
  const { scrollY } = useScrollEffects();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const isScrolled = scrollY > 50;
  
  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'interconnectedness', href: '#interconnectedness' },
    { key: 'naturesJustice', href: '#natures-justice' },
    { key: 'health', href: '#health' },
    { key: 'examples', href: '#examples' }
  ];

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => ({
        id: item.href.substring(1),
        element: document.querySelector(item.href)
      })).filter(section => section.element);

      const scrollPosition = window.scrollY + 100; // Offset for header height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  const isActiveSection = (itemKey, href) => {
    const sectionId = href.substring(1);
    return activeSection === sectionId;
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div 
            className="group flex flex-row items-center text-2xl rounded-md font-bold cursor-pointer transition-colors duration-300"
            onClick={() => scrollToSection('#home')}
            style={{
              background: isScrolled 
                ? 'linear-gradient(135deg, #FFF 0%, #FFF 0%)'
                : 'none',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            <img src={LogoSrc('white')} className='ml-[50px] mr-[50px] mt-[2px] mb-[2px] size-[30px] group-hover:ml-[48px] group-hover:mr-[48px] group-hover:mt-[0] group-hover:mb-[0] group-hover:size-[34px] rounded-md' alt={t("home") + " header logo"} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-all duration-300 relative ${
                  isActiveSection(item.key, item.href)
                    ? isScrolled 
                      ? 'text-emerald-600' 
                      : 'text-white'
                    : isScrolled 
                      ? 'text-gray-700 hover:text-emerald-600' 
                      : 'text-white/90 hover:text-white'
                }`}
              >
                {t(item.key)}
                {/* Active indicator */}
                {isActiveSection(item.key, item.href) && (
                  <span 
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full transition-all duration-300 ${
                      isScrolled ? 'bg-emerald-600' : 'bg-white'
                    }`}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop Language Switcher & Mobile Controls */}
          <div className="flex items-center gap-4">
            {/* Language Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-emerald-600 hover:bg-gray-100 border border-gray-200' 
                      : 'text-white/90 hover:text-white hover:bg-white/10 border border-white/20'
                  }`}
                >
                  <span className="text-base">
                    {availableLanguages.find(lang => lang.code === currentLanguage)?.flag}
                  </span>
                  <span className="text-sm font-medium hidden sm:inline">
                    {availableLanguages.find(lang => lang.code === currentLanguage)?.name}
                  </span>
                  <ChevronDown size={14} className="opacity-70" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white/95 backdrop-blur-md border border-gray-200/20 shadow-lg">
                {availableLanguages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`flex items-center gap-3 cursor-pointer px-4 py-2 transition-colors duration-200 ${
                      currentLanguage === lang.code 
                        ? 'bg-emerald-50 text-emerald-700 font-medium' 
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span>{lang.name}</span>
                    {currentLanguage === lang.code && (
                      <div className="ml-auto w-2 h-2 bg-emerald-500 rounded-full"></div>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 transition-colors duration-300 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-t border-gray-200/20 shadow-lg">
            <nav className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left font-medium transition-all duration-300 p-2 rounded-lg relative ${
                    isActiveSection(item.key, item.href)
                      ? 'text-emerald-700 bg-emerald-50 border-l-4 border-emerald-600'
                      : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50'
                  }`}
                >
                  {t(item.key)}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;