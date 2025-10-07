"use client";

import React from 'react';
import { useIntlayer } from 'next-intlayer';

import { useIntersectionObserver } from '../hooks/useScrollEffects';
import { Description } from './Custom/Description';

import {
  Globe,
  Scale,
  Heart, 
  Lightbulb,
} from 'lucide-react';


const ContentLayout = ({ sectionKey, id, children }) => {
  const [sectionRef] = useIntersectionObserver();
  const content = useIntlayer(`${sectionKey}-section`);

  const getIcon = () => {
    if(sectionKey == "interconnectedness") {
      return Globe;
    }
    if(sectionKey == "justiceInNature") {
      return Scale;
    }
    if(sectionKey == "health") {
      return Heart;
    }
    if(sectionKey == "movement") {
      return Lightbulb;
    }
  };

  const Icon = getIcon();

  const getIconColor = () => {
    switch (sectionKey) {
      case 'interconnectedness': return 'text-blue-600';
      case 'justiceInNature': return 'text-green-600';
      case 'health': return 'text-rose-600';
      case 'movement': return 'text-amber-600';
      default: return 'text-gray-600';
    }
  };

  const getBackgroundColor = () => {
    switch (sectionKey) {
      case 'interconnectedness': return 'text-blue-50';
      case 'justiceInNature': return 'bg-green-50';
      case 'health': return 'bg-rose-50';
      case 'movement': return 'bg-amber-50';
      default: return 'bg-gray-50';
    }
  };

  const getAccentColor = () => {
    switch (sectionKey) {
      case 'interconnectedness': return 'from-blue-50 to-indigo-50';
      case 'justiceInNature': return 'from-green-50 to-emerald-50';
      case 'health': return 'from-rose-50 to-pink-50';
      case 'movement': return 'from-amber-50 to-yellow-50';
      default: return 'from-gray-50 to-slate-50';
    }
  };

  return (
    <section 
      id={id}
      ref={sectionRef}
      className="relative py-24 px-2 overflow-hidden"
    >
      {/* Background Color */}
      <div 
        className={`absolute inset-0 ${getBackgroundColor()}`}
      />
      
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${getAccentColor()} opacity-80`} />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg mb-8 ${getIconColor()} transition-all duration-300 hover:scale-105`}>
              <Icon size={40} />
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-12 leading-tight whitespace-pre-line">
              {content.title}
            </h2>
            
            {/* Quote */}
            {content.quote &&
              <div className="max-w-4xl mx-auto mb-12">
                <blockquote className="text-xl sm:text-2xl lg:text-3xl font-light italic  leading-relaxed pl-2 pr-2 border-l-4 border-emerald-500 bg-white/80 backdrop-blur-sm rounded-r-lg py-6 shadow-sm whitespace-pre-line">
                  {content.quote.value.split('**').map((part, index) => 
                    index % 2 === 1 ? <strong key={index} className="text-bold">{part}</strong> : part
                  ).map((part, index) => 
                    typeof part === 'string' && part.includes('*') 
                      ? part.split('*').map((subpart, subindex) => 
                          subindex % 2 === 1 ? <em key={`${index}-${subindex}`} className="text-gray-800 font-medium">{subpart}</em> : subpart
                        )
                      : part
                  )}
                </blockquote>
              </div>
            }
            
            {/* Description */}
            <Description text={content.description.value} />
          </div>

          {children}
        </div>
      </div>
    </section>
  );
};

export default ContentLayout;