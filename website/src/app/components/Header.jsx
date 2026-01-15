"use client";

import { useState, useEffect, useRef } from 'react';
import { useLocale, useIntlayer } from 'next-intlayer';
import { getLocaleName, getLocalizedUrl, Locales } from "intlayer";
import Image from 'next/image'
import Link from "next/link";

import { Menu, X, ChevronDown } from 'lucide-react';
import { useScrollEffects } from '../hooks/useScrollEffects';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import SupportLink from './Custom/Buttons/SupportLink';

const Header = () => {
  const { scrollY } = useScrollEffects();
  const ref = useRef(null)
  const lastScroll = useRef(scrollY)
  const velocity = useRef(0)
  const rotation = useRef(0)
  const raf = useRef(null)
  const { locale, pathWithoutLocale, availableLocales, setLocale } = useLocale();
  const content = useIntlayer("navigation");

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const isScrolled = scrollY > 50;

  const navItems = [
    { key: 'home', href: '/' },
    { key: 'philosophy', href: '/philosophy'},
    { key: 'mission', href: '/mission'},
  ];

  // Spin logo on scroll
  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY
      const delta = current - lastScroll.current
      // Scroll down = positive, scroll up = negative
      velocity.current += delta * 0.2
      lastScroll.current = current
    }

    const animate = () => {
      // friction
      velocity.current *= 0.7
      rotation.current += velocity.current

      if (ref.current) {
        ref.current.style.transform = `rotate(${rotation.current}deg)`
      }

      raf.current = requestAnimationFrame(animate)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    raf.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  const isActiveSection = (itemKey) => {
    const section = navItems.find(item => item.key === itemKey);
    if(!section) return false;
    
    if(section.href == pathWithoutLocale) {
      return true
    }

    return false
  };

  const handleLocaleChange = async (newLocale) => {
    await setLocale(newLocale);
    const newUrl = getLocalizedUrl(pathWithoutLocale, newLocale);
    window.location.href = newUrl; // Force a hard navigation for locale change
};

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-100 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div onClick={() => scrollToSection('#home')}
            className="group flex flex-row justify-end items-center rounded-md cursor-pointer transition-colors duration-300"
          >
            <Image
              ref={ref} 
              className='flex-none ml-[10px] mr-[15px] mt-[2px] mb-[2px] group-hover:ml-[8px] group-hover:mr-[13px] group-hover:mt-[0] group-hover:mb-[0] group-hover:size-[34px] rounded-md'
              src='/logos/logo-bg-transparent.png'
              title={content.home.text.value}
              alt={content.home.text.value + " header logo"}
              width={30}
              height={30}
            />
            <p className={`font-bold text-left text-2xl sm:text-3xl select-none ${
              isScrolled 
                      ? 'text-emerald-600' 
                      : 'text-white'
            }`}>{content.webpage.title}</p>
          </div>
          

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={getLocalizedUrl(item.extra || item.href, locale)}
                aria-label={content[item.key].text.value}
                onClick={() => scrollToSection(item.extra || item.href)}
                className={`text-sm font-medium transition-all duration-300 relative ${
                  isActiveSection(item.key, item.href)
                    ? isScrolled 
                      ? 'text-emerald-600' 
                      : 'text-white'
                    : isScrolled 
                      ? 'text-gray-700 hover:text-emerald-600' 
                      : 'text-white/90 hover:text-white'
                }`}
                prefetch={true}
              >
                {content[item.key].text}
                {/* Active indicator */}
                {isActiveSection(item.key, item.href) && (
                  <span 
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full transition-all duration-300 ${
                      isScrolled ? 'bg-emerald-600' : 'bg-white'
                    }`}
                  />
                )}
              </Link>
            ))}
            <SupportLink />
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
                    {content.flags[availableLocales.find(item => item === locale)]}
                  </span>
                  <span className="text-sm font-medium hidden sm:inline">
                    {getLocaleName(availableLocales.find(item => item === locale))}
                  </span>
                  <ChevronDown size={14} className="opacity-70" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white/95 backdrop-blur-md border border-gray-200/20 shadow-lg">
                {availableLocales.map((item, index) => (
                  <DropdownMenuItem
                    key={index}
                    className={`flex items-center gap-3 cursor-pointer px-4 py-2 transition-colors duration-200 ${
                      locale === item 
                        ? 'bg-emerald-50 text-emerald-700 font-medium' 
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <Link
                      className='flex items-center gap-3 w-full'
                      href={getLocalizedUrl(pathWithoutLocale, item)}
                      key={item}
                      aria-current={locale === item ? "page" : undefined}
                      onClick={() => handleLocaleChange(item)}
                      replace
                    >
                      <span className="text-lg">{content.flags[item]}</span>
                      <span>{getLocaleName(item)}</span>
                      {locale === item && (
                        <div className="ml-auto w-2 h-2 bg-emerald-500 rounded-full"></div>
                      )}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <button
              aria-label='menu'
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
                <Link
                  key={item.key}
                  href={getLocalizedUrl(item.extra || item.href, locale)}
                  aria-label={content[item.key].text.value}
                  onClick={() => scrollToSection(item.extra || item.href)}
                  className={`block w-full text-left font-medium transition-all duration-300 p-2 rounded-lg relative ${
                    isActiveSection(item.key, item.href)
                      ? 'text-emerald-700 bg-emerald-50 border-l-4 border-emerald-600'
                      : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50'
                  }`}
                >
                  {content[item.key].text}
                </Link>
              ))}
              <SupportLink className='block max-w-52' />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;