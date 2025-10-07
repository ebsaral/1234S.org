"use client";

import React from 'react';
import { useIntlayer } from 'next-intlayer';

import ContentLayout from './ContentLayout';
import { Card, CardContent } from './ui/card';

import {
  Lightbulb, 
  Activity,
  MapPin,
  Music,
  Gift,
} from 'lucide-react';

const MovementSection = () => {
  const id = "movement";
  const sectionKey = "movement";
  const content = useIntlayer(`${sectionKey}-section`);

  // Icon mappings for real-world cases
  const getCaseIcon = (index) => {
    const icons = [MapPin, Activity, Music, Gift];
    const IconComponent = icons[index] || Lightbulb;
    return IconComponent;
  };

  return (
    <ContentLayout sectionKey={sectionKey} id={id}>
      {content.items && (
        <div className="grid md:grid-cols-2 gap-6">
          {content.items.map((example, index) => {
            const IconComponent = getCaseIcon(index);
            const title = example.title;
            const content = example.subtitle;
            
            return (
              <Card key={index} className="bg-white/90 backdrop-blur-sm shadow-xl border-0 hover:shadow-2xl transition-all duration-300 hover:scale-105">
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
    </ContentLayout>
  );
};

export default MovementSection;