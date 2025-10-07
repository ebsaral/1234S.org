"use client";

import React from 'react';
import { useIntlayer } from 'next-intlayer';

import ContentLayout from './ContentLayout';
import { Card, CardContent } from './ui/card';
import { Description } from './Custom/Description';

import { 
  Brain,
  Globe
} from 'lucide-react';

const InterconnectednessSection = () => {
  const id = "interconnectedness";
  const sectionKey = "interconnectedness";
  const content = useIntlayer(`${sectionKey}-section`);

  return (
    <ContentLayout sectionKey={sectionKey} id={id} icon={Globe} iconColor="text-blue-600"
    backgroundColor="bg-blue-50"
    accentColor="from-blue-50 to-indigo-50">
      {/* Section-Specific Content */}
      <div className="grid lg:grid-cols-1 gap-12 items-start">
        <div className="space-y-8">
          {/* Experiment Card */}
          <div className='grid gap-16'>
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-0 shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-3">
                  <Brain className="text-blue-600" size={28} />
                  {content.experiment.title}
                </h3>
                <p className="text-blue-800 leading-relaxed italic">
                  {content.experiment.description}
                </p>
              </CardContent>
            </Card>

            <Description text={content.paragraph1.value} />
          </div>
        </div>
      </div>
    </ContentLayout>
  );
};

export default InterconnectednessSection;