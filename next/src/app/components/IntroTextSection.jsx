"use client";

import React from 'react';
import { useIntersectionObserver } from '../hooks/useScrollEffects';
import { useIntlayer } from 'next-intlayer';

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
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8 text-justify">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  {content.paragraph1.value.split('**').map((part, index) => 
                    index % 2 === 1 ? <strong key={index} className="text-emerald-700">{part}</strong> : part
                  )}
                </p>
                
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  {content.paragraph2}
                </p>
                
                <p className="text-gray-700 leading-relaxed text-lg italic mb-6 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 whitespace-pre-line transition-all duration-300 hover:scale-105">
                  {content.paragraph3.value.split('*').map((part, index) => 
                    index % 2 === 1 ? <em key={index} className="text-blue-700 font-medium">{part}</em> : part
                  )}
                </p>
                
                <p className="text-gray-700 leading-relaxed text-lg">
                  {content.paragraph4.value.split('**').map((part, index) => 
                    index % 2 === 1 ? <strong key={index} className="text-emerald-700">{part}</strong> : part
                  ).map((part, index) => 
                    typeof part === 'string' && part.includes('*') 
                      ? part.split('*').map((subpart, subindex) => 
                          subindex % 2 === 1 ? <em key={`${index}-${subindex}`} className="text-gray-800 font-medium">{subpart}</em> : subpart
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