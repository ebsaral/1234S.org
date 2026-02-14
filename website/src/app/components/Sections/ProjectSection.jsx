'use client';

import { useIntlayer } from 'next-intlayer';

import { Gift, Globe, HeartIcon, ImagePlay, Lightbulb, TreeDeciduous } from 'lucide-react';

import ContentLayout from '../ContentLayout';
import SupportLink from '../Custom/Buttons/SupportLink';
import Description from '../Custom/Description';
import Quote from '../Custom/Quote';
import { Card, CardContent } from '../ui/card';

const ProjectSection = () => {
  const id = 'project';
  const sectionKey = 'project';
  const content = useIntlayer(`${sectionKey}-section`);

  // Icon mappings for real-world cases
  const getCaseIcon = (index) => {
    const icons = [HeartIcon, ImagePlay, Globe, Gift];
    const IconComponent = icons[index] || Lightbulb;
    return IconComponent;
  };

  return (
    <ContentLayout
      sectionKey={sectionKey}
      id={id}
      icon={TreeDeciduous}
      iconColor='text-emerald-700'
      titleColor='text-emerald-700'
      backgroundColor='bg-white'
      accentColor='bg-white'
      className='pb-10'
    >
      {/* Project message section */}
      {content.message && (
        <div className='max-w-5xl mx-auto mt-5 text-center flex flex-col lg:flex-row items-center gap-6'>
          <h3 className='lg:-mt-10 text-2xl sm:text-3xl lg:text-3xl'>{content.message.title}</h3>
          <Quote text={content.message.description.value} quoteClassName={'border-emerald-700'} />
        </div>
      )}

      <div className='max-w-5xl mx-auto mb-12 text-left text-xl'>
        <Description text={content.explanation.value} />
      </div>

      {/* Project Steps section */}
      {content.items && (
        <div className='grid md:grid-cols-2 gap-6 mb-12'>
          {content.items.map((example, index) => {
            const IconComponent = getCaseIcon(index);
            const title = example.title;
            const content = example.subtitle;

            return (
              <Card key={index} className='bg-purple-100/50 backdrop-blur-sm shadow-xl border-0'>
                <CardContent className='p-8 flex flex-col sm:items-center gap-4 whitespace-pre-line'>
                  <div className='sm:hidden sm:col-span-1 flex items-center justify-center w-24 h-24 -z-10 sm:opacity-100 sm:w-12 sm:h-12 rounded-full bg-purple-100/90 sm:bg-purple-900/90 absolute top-[-10px] left-[-10px] overflow-clip sm:static'>
                    <IconComponent className='text-purple-900 sm:text-white' size={24} />
                  </div>
                  <div className='hidden sm:visible sm:flex items-center justify-center opacity-100 w-12 h-12 rounded-full bg-purple-900/90'>
                    <IconComponent className='text-white' size={24} />
                  </div>
                  <div className='col-span-6'>
                    <h3 className='text-left sm:text-center text-xl font-bold text-purple-900 mt-6 sm:mt-0 mb-3'>
                      {title}
                    </h3>
                    <p className='text-gray-900 leading-relaxed'>{content}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
      <div className='max-w-5xl mx-auto flex flex-col gap-6 items-center mt-12 text-center text-lg'>
        {content.support}
        <SupportLink />
      </div>
    </ContentLayout>
  );
};

export default ProjectSection;
