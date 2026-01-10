"use client";

import { useScrollEffects, useIntersectionObserver } from '../hooks/useScrollEffects';
import { Button } from './ui/button.jsx';
import { ArrowDown } from 'lucide-react';
import { useIntlayer } from "next-intlayer";

const HeroSection  = () => {
  const content = useIntlayer("hero-section");
  const { scrollY } = useScrollEffects();
  const [heroRef] = useIntersectionObserver();
  
  const parallaxOffset = scrollY * 0.5;
  
  const scrollToVideo = () => {
    const videoSection = document.querySelector(content.videoQuerySelector);
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(/backgrounds/hero.jpeg)`,
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
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-12 leading-tight">
            <span 
              className="mb-6"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #e0f2fe 50%, #81c784 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {content.title}
            </span>
          </h1>
          
          {/* Subtitle with generous spacing */}
          <div className="mb-16 px-4 lg:px-12">
            <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-light italic leading-relaxed mb-8 whitespace-normal sm:whitespace-pre-line">
              {content.subtitle}
            </p>
            
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-4xl mx-auto">
              {content.description}
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            {/* <Button
              onClick={scrollToVideo}
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Play className="w-5 h-5 mr-2" />
              {content.watchVideo}
            </Button> */}
            
            <Button
              onClick={() => document.querySelector('#intro')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:text-white backdrop-blur-sm"
            >
              {content.learnMore}
            </Button>
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

export default HeroSection;