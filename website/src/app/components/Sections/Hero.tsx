"use client";

import { useScrollEffects } from '../../hooks/useScrollEffects';
import { Heart, Globe, Scale } from 'lucide-react';
import { ArrowDown } from 'lucide-react';
import { useIntlayer, useLocale } from "next-intlayer";

const Hero  = () => {
  const { locale } = useLocale()
  const content = useIntlayer("hero-section", locale);
  const { scrollY } = useScrollEffects();  
  const parallaxOffset = scrollY * 0.5;
  
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundColor: 'black',
          transform: `translateY(${parallaxOffset}px)`,
          filter: 'brightness(0.4)'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div>
          {/* Main Title with generous spacing */}
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-12 leading-tight">
            <span 
              className="mb-6 bg-gradient-to-r via-rose-500 to-green-600 from-blue-500 bg-clip-text text-transparent"
            >
              {content.title}
            </span>
          </h1>
          
          {/* Subtitle with generous spacing */}
          <div className="mb-16 px-4 lg:px-12">
            <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-light leading-relaxed mb-8 whitespace-normal sm:whitespace-pre-line">
              {content.subtitle}
            </p>
            
          </div>
          
          {/* Decorative Icons */}
          <div className="flex justify-center items-center gap-12">
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100/10 shadow-lg mb-8 text-blue-600 transition-all duration-300 scale-75 hover:scale-100 sm:scale-100 sm:hover:scale-110`}>
              <Globe size={40} />
              </div>
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100/10 shadow-lg mb-8 text-green-600 transition-all duration-300 scale-75 hover:scale-100 sm:scale-100 sm:hover:scale-110`}>
              <Scale size={40} />
              </div>
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100/10 shadow-lg mb-8 text-rose-600 transition-all duration-300 scale-75 hover:scale-100 sm:scale-100 sm:hover:scale-110`}>
              <Heart size={40} />
              </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="flex flex-col items-center animate-bounce">
            <p className="text-white/70 text-sm mb-2">{content.scrollIndicator}</p>
            <ArrowDown className="w-6 h-6 text-white/70" />
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default Hero;