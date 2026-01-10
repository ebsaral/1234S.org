"use client";

import { useIntlayer } from 'next-intlayer';
import Image from 'next/image';

import {
  HeartPulse
} from 'lucide-react';

import ContentLayout from './ContentLayout';
import { Card, CardContent } from './ui/card';
import Description from './Custom/Description';

const SupportSection = () => {
  const id = "support";
  const sectionKey = "support";
  const content = useIntlayer(`${sectionKey}-section`);

  return (
    <ContentLayout 
      sectionKey={sectionKey} id={id} icon={HeartPulse} iconColor="text-rose-600"
      backgroundColor="bg-rose-500"
      accentColor="from-rose-500 to-yellow-50"
      className="pb-10"
      descriptionClassName={"text-center"}
      descriptionColor={"text-gray-900"}
    >
      <div className='max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start justify-center sm:px-20 gap-4'>
        {content.topics.items.map((item, index) => (
          <Card key={index} className="h-full bg-white/90 backdrop-blur-sm shadow-xl border-0 p-6 flex flex-col justify-start items-center gap-4 transition-transform duration-300 hover:scale-105">
            <div className="sm:min-h-16 text-md font-bold">
              {item.title}
            </div>
            <div>
              <Description size="text-sm sm:text-md" text={item.description.value} />
            </div>
          </Card>
        ))}
      </div>
      
      <div className='max-w-5xl mx-auto flex flex-col gap-4 mt-20 sm:px-20'>
        <div className='text-center font-bold text-lg'>{content.methods.title}</div>
        {content.methods.items.map((item, index) => {
          return (
            <div 
              key={index} 
              className={`px-5 py-2 rounded ${item.style.value}`}
            >
              {item.title}
            </div>
          )
        })}
      </div>
    </ContentLayout>
  );
};

export default SupportSection;