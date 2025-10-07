"use client";

import React from 'react';
import { useIntersectionObserver } from '../hooks/useScrollEffects';
import { useIntlayer } from 'next-intlayer';

import { Heart, Globe, Scale } from 'lucide-react';

const IntroTextSection = ({id}) => {
  const content = useIntlayer("intro-section");
  const [sectionRef, isSectionVisible] = useIntersectionObserver();

  return (
    <section
      id={id} 
      ref={sectionRef}
      className="bg-gradient-to-b from-gray-50 to-white overflow-hidden pt-24 px-2"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          {/* Main Content */}
          <div className="mb-16">
            
            {/* Decorative Icons */}
            <div className="flex justify-center items-center gap-8 mb-8">
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg mb-8 text-blue-600 transition-all duration-300 hover:scale-105`}>
                <Globe size={40} />
              </div>
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg mb-8 text-green-600 transition-all duration-300 hover:scale-105`}>
                <Scale size={40} />
              </div>
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg mb-8 text-rose-600 transition-all duration-300 hover:scale-105`}>
                <Heart size={40} />
              </div>
            </div>
            <div className="lg:col-span-2 space-y-8 text-justify">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-90 leading-relaxed text-lg mb-6">
                  {content.paragraph1.value.split('**').map((part, index) => 
                    index % 2 === 1 ? <strong key={index} className="text-emerald-900">{part}</strong> : part
                  )}
                </p>
                
                <p className="text-gray-900 leading-relaxed text-lg mb-6">
                  {content.paragraph2.value.split('**').map((part, index) => 
                    index % 2 === 1 ? <strong key={index} className="text-emerald-900">{part}</strong> : part
                  ).map((part, index) => 
                    typeof part === 'string' && part.includes('*') 
                      ? part.split('*').map((subpart, subindex) => 
                          subindex % 2 === 1 ? <em key={`${index}-${subindex}`} className="text-gray-900 font-medium">{subpart}</em> : subpart
                        )
                      : part
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroTextSection;