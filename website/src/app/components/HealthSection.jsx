"use client";

import React from 'react';
import { useIntlayer } from 'next-intlayer';

import ContentLayout from './ContentLayout';
import { Card, CardContent } from './ui/card';
import { Description } from './Custom/Description';

import {
  Shield,
  Smile,
  Eye,
  Stethoscope,
  HeartOff,
  EyeOff,
  EarOff,
  CircleX,
  Accessibility,
  CandyOff
} from 'lucide-react';


const HealthSection = () => {
  const id = "health";
  const sectionKey = "health";
  const content = useIntlayer(`${sectionKey}-section`);
  
  // Icon mappings for health examples
  const getHealthExampleIcon = (index) => {
    const IconComponent = [EyeOff, EarOff, HeartOff, Accessibility, CandyOff, CircleX];
    return IconComponent[index];
  }

  return (
    <ContentLayout sectionKey={sectionKey} id={id}>
      <div className="grid gap-8 space-y-8">
        {/* Organ-Action-Consequence Analogy Box */}
        <Card className="bg-gradient-to-br from-rose-50 to-pink-100 border-0 shadow-xl">
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-2 lg:gap-10 gap-2">
              <div>
                <h3 className="text-2xl font-bold text-rose-900 mb-6 flex items-center gap-3">
                  <Stethoscope className="text-rose-500" size={28} />
                  {content.analogy.title}
                </h3>
                <blockquote className="text-rose-800 italic bg-white/60 p-4 rounded-lg border-l-4 border-rose-400 mb-6">
                  {content.analogy.quote}  
                </blockquote>
              </div>
              <ul className="space-y-3 text-rose-800 lg:mt-14">
                <li className="flex items-start gap-3">
                  <Smile className="text-rose-500 mt-1 flex-shrink-0" size={18} />
                  <span>{content.analogy.items[0]}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Eye className="text-rose-500 mt-1 flex-shrink-0" size={18} />
                  <span>{content.analogy.items[1]}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="text-rose-500 mt-1 flex-shrink-0" size={18} />
                  <span>{content.analogy.items[2]}</span>
                </li>
              </ul>
            </div>
            <div className="grid md:grid-cols-2 gap-6 pt-6">
              {content.examples.map((example, index) => {
                const IconComponent = getHealthExampleIcon(index);
                const content = example;
                
                return (
                  <Card key={index} className="bg-white/60 backdrop-blur-sm shadow-xl border-0 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4 whitespace-pre-line">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-rose-600 flex-shrink-0">
                          <IconComponent className="text-white" size={24} />
                        </div>
                        <div className="flex-1">
                          <p className="text-rose-900 leading-relaxed">
                            {content}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </CardContent>   
        </Card>

        <Description text={content.paragraph1.value} />
      </div>
    </ContentLayout>
  );
};

export default HealthSection;