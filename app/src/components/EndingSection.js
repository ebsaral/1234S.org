import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useIntersectionObserver } from '../hooks/useScrollEffects';
import { Card, CardContent } from './ui/card';
import { Lightbulb } from 'lucide-react';

const EndingSection = ({id}) => {
  const { t } = useLanguage();
  const [sectionRef, isSectionVisible] = useIntersectionObserver();

  return (
    <section
      id={id} 
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`transition-all duration-1000 delay-200 ${
            isSectionVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Main Content */}
          <div className="mb-16">
            <div className="lg:col-span-2 space-y-8 text-justify">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {t('ending').paragraph.split('**').map((part, index) => 
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

        {/* Completion Statement */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 text-white border-0 shadow-2xl max-w-4xl mx-auto">
            <CardContent className="p-12">
              <Lightbulb className="text-yellow-400 mx-auto mb-6" size={48} />
              <blockquote className="text-xl sm:text-2xl font-light leading-relaxed italic">
                "{t('intro').completion}"
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EndingSection;