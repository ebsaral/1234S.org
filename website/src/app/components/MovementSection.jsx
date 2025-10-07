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
                  <div className="flex items-start gap-4 whitespace-pre-line">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 flex-shrink-0">
                      <IconComponent className="text-amber-600" size={24} />
                    </div>
                    <div className="flex-1">
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
              <h3>{content.status.title}</h3>
              <br />
              <ul>
                {content.status.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-8 text-center">
            <h3>{content.contact.title}</h3>
            <br />
            <p><Link className='underline hover:no-underline' href={content.contact.leader.href.value}>{content.contact.leader.text}</Link></p>
            <p><i>{content.contact.description}</i></p>
          </CardContent>
        </Card>
      </div>
    </ContentLayout>
  );
};

export default MovementSection;