import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollEffects, useIntersectionObserver } from '../hooks/useScrollEffects';
import { Button } from './ui/button';
import { Play, ArrowDown } from 'lucide-react';
import { mockData } from '../data/mock';

const HeroSection = () => {
  const { t } = useLanguage();
  const { scrollY } = useScrollEffects();
  const [heroRef, isHeroVisible] = useIntersectionObserver();
  
  const parallaxOffset = scrollY * 0.5;
  
  const scrollToVideo = () => {
    const videoSection = document.querySelector('#video-section');
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${mockData.images.hero})`,
          transform: `translateY(${parallaxOffset}px)`,
          filter: 'brightness(0.4)'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div 
          className={`transition-all duration-1000 delay-300 ${
            isHeroVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
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
              {t('heroTitle').split(':')[0]}
            </span>
          </h1>
          
          {/* Subtitle with generous spacing */}
          <div className="mb-16 px-4 lg:px-12">
            <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-light italic leading-relaxed mb-8">
              {t('heroSubtitle')}
            </p>
            
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-4xl mx-auto">
              {t('heroDescription')}
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              onClick={scrollToVideo}
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Play className="w-5 h-5 mr-2" />
              {t('watchVideo')}
            </Button>
            
            <Button
              onClick={() => document.querySelector('#intro')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              {t('learnMore')}
            </Button>
          </div>
          
          {/* Scroll Indicator */}
          <div className="flex flex-col items-center animate-bounce">
            <p className="text-white/70 text-sm mb-2">Scroll to explore</p>
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