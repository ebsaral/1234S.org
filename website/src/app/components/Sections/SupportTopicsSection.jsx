'use client';

import { useIntlayer } from 'next-intlayer';

import { HandCoins } from 'lucide-react';

import ContentLayout from '../ContentLayout';
import { Card } from '../ui/card';
import Description from '../Custom/Description';

const SupportTopicsSection = () => {
  const id = 'support-topics';
  const sectionKey = 'support-topics';
  const content = useIntlayer(`${sectionKey}-section`);

  return (
    <ContentLayout
      sectionKey={sectionKey}
      id={id}
      icon={HandCoins}
      iconColor='text-rose-600'
      backgroundColor='bg-rose-500'
      accentColor='from-rose-500 to-yellow-50'
      className='pb-10'
      descriptionClassName={'text-center'}
      descriptionColor={'text-gray-900'}
    >
      <div className='max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start justify-center sm:px-20 gap-4'>
        {content.topics.items.map((item, index) => (
          <Card
            key={index}
            className='h-full bg-white/90 backdrop-blur-sm shadow-xl border-0 p-6 flex flex-col justify-start items-center gap-4 transition-transform duration-300 hover:scale-105'
          >
            <div className='sm:min-h-16 text-md font-bold'>{item.title}</div>
            <div>
              <Description size='text-sm sm:text-md' text={item.description.value} />
            </div>
          </Card>
        ))}
      </div>
    </ContentLayout>
  );
};

export default SupportTopicsSection;
