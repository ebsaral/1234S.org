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
      className="pb-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Completion Statement */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 text-white border-0 shadow-2xl max-w-4xl mx-auto">
            <CardContent className="p-12">
              <Lightbulb className="text-yellow-400 mx-auto mb-6" size={48} />
              <blockquote className="text-xl sm:text-2xl font-light leading-relaxed italic">
                "{t('endingStatement')}"
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EndingSection;