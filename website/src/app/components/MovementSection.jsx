"use client";

import React from 'react';
import { useIntlayer } from 'next-intlayer';

import ContentLayout from './ContentLayout';
import { Card, CardContent } from './ui/card';

import {
  Lightbulb, 
  HeartIcon,
  ImagePlay,
  Globe,
  Gift,
} from 'lucide-react';
import Link from 'next/link';

const MovementSection = () => {
  const id = "movement";
  const sectionKey = "movement";
  const content = useIntlayer(`${sectionKey}-section`);

  // Icon mappings for real-world cases
  const getCaseIcon = (index) => {
    const icons = [HeartIcon, ImagePlay, Globe, Gift];
    const IconComponent = icons[index] || Lightbulb;
    return IconComponent;
  };

  return (
    <ContentLayout sectionKey={sectionKey} id={id} icon={Lightbulb} iconColor="text-amber-600"
    backgroundColor="bg-amber-50"
    accentColor="from-amber-50 to-yellow-50">
      {content.items && (
        <div className="grid md:grid-cols-2 gap-6">
          {content.items.map((example, index) => {
            const IconComponent = getCaseIcon(index);
            const title = example.title;
            const content = example.subtitle;
            
            return (
              <Card key={index} className="bg-white/90 backdrop-blur-sm shadow-xl border-0 hover:shadow-2xl">
                <CardContent className="p-8">
                  <div className="grid grid-cols-6 gap-4 whitespace-pre-line relative sm:static">
                    <div className="sm:col-span-1 flex items-center justify-center w-24 h-24 -z-10 opacity-35 sm:opacity-100 sm:w-12 sm:h-12 rounded-full bg-amber-100 absolute top-[-50px] left-[-60px] overflow-clip sm:static">
                      <IconComponent className="text-amber-600" size={24} />
                    </div>
                    <div className='col-span-5'>
                      <h3 className="text-xl font-bold text-amber-900 mb-3">
                        {title}
                      </h3>
                      <p className="text-gray-800 leading-relaxed">
                        {content}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
      <div className='grid md:grid-cols-2 gap-6 mt-8'>
        <Card>
          <CardContent className="p-8 text-center">
              <h3 className='mb-2 text-xl font-bold'>{content.status.title}</h3>
              <ul className='list-disc px-2 text-left'>
                {content.status.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-8 text-center">
            <h3 className='mb-2 text-xl font-bold'>{content.contact.title}</h3>
            <div className='flex flex-col'>
              <div className='flex flex-col gap-2 text-xl'>
                <div className='flex flex-col text-center items-center gap-2'>
                  <Link className='underline underline-offset-2 hover:no-underline' href={content.contact.leader.href.value}>{content.contact.leader.text}</Link>
                  <div className='text-sm text-gray-800'>{content.contact.leader.description}</div>
                </div>
              
                <Link className='text-sm underline underline-offset-2 hover:no-underline' href={content.contact.resume.href.value}>{content.contact.resume.text}</Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <p className='text-center text-sm text-gray-800 mt-6'>{content.contact.note}</p>
    </ContentLayout>
  );
};

export default MovementSection;