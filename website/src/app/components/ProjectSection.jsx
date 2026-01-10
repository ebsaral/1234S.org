"use client";

import { useIntlayer } from 'next-intlayer';

import {
  Lightbulb, 
  HeartIcon,
  ImagePlay,
  Globe,
  Gift,
  SunMoon
} from 'lucide-react';

import ContentLayout from './ContentLayout';
import { Card, CardContent } from './ui/card';
import Quote from './Custom/Quote';
import Description from './Custom/Description';

const ProjectSection = () => {
  const id = "project";
  const sectionKey = "project";
  const content = useIntlayer(`${sectionKey}-section`);

  // Icon mappings for real-world cases
  const getCaseIcon = (index) => {
    const icons = [HeartIcon, ImagePlay, Globe, Gift];
    const IconComponent = icons[index] || Lightbulb;
    return IconComponent;
  };

  return (
    <ContentLayout 
      sectionKey={sectionKey} id={id} icon={SunMoon} iconColor="text-amber-600"
      backgroundColor="bg-amber-50"
      accentColor="from-amber-50 to-yellow-50"
      className="pb-10"
    >
      {/* Project message section */}
      {content.message && <div className='max-w-5xl mx-auto mt-5 text-center flex flex-col lg:flex-row items-center gap-6'>
        <h3 className='lg:-mt-10 text-2xl sm:text-3xl lg:text-3xl'>{content.message.title}</h3>
        <Quote text={content.message.description.value} />
      </div>
      }

      <div className="max-w-5xl mx-auto mb-12 text-left text-xl">
          <Description text={content.explanation.value} />
      </div>

      {/* Project Steps section */}
      {content.items && (
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {content.items.map((example, index) => {
            const IconComponent = getCaseIcon(index);
            const title = example.title;
            const content = example.subtitle;
            
            return (
              <Card key={index} className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
                <CardContent className="p-8 flex flex-col sm:items-center gap-4 whitespace-pre-line">
                    <div className="sm:hidden sm:col-span-1 flex items-center justify-center w-24 h-24 -z-10 opacity-35 sm:opacity-100 sm:w-12 sm:h-12 rounded-full bg-amber-100 absolute top-[-10px] left-[-10px] overflow-clip sm:static">
                      <IconComponent className="text-amber-600" size={24} />
                    </div>
                    <div className="flex items-center justify-center opacity-100 w-12 h-12 rounded-full bg-amber-100">
                      <IconComponent className="text-amber-600" size={24} />
                    </div>
                    <div className='col-span-6'>
                      <h3 className="text-left sm:text-center text-xl font-bold text-amber-900 mb-3">
                        {title}
                      </h3>
                      <p className="text-gray-800 leading-relaxed">
                        {content}
                      </p>
                    </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </ContentLayout>
  );
};

export default ProjectSection;