'use client';

import { useIntlayer } from 'next-intlayer';
import React from 'react';

import ContentLayout from '../ContentLayout';
import Description from '../Custom/Description';
import { Card, CardContent } from '../ui/card';

import {
  Activity,
  CheckCircle,
  Cloud,
  FerrisWheel,
  Frown,
  LoaderPinwheel,
  Scale,
  ScanHeart,
  Smile,
  Sun,
  XCircle,
} from 'lucide-react';

const JusticeSection = () => {
  const id = '2';
  const sectionKey = 'justice';
  const content = useIntlayer(`${sectionKey}-section`);

  // Icon mappings for positive consequences
  const getPositiveIcon = (index) => {
    const icons = [Sun, ScanHeart, Smile];
    const IconComponent = icons[index] || Sun;
    return <IconComponent className='text-emerald-500 mt-1 flex-shrink-0' size={18} />;
  };

  // Icon mappings for negative consequences
  const getNegativeIcon = (index) => {
    const icons = [Cloud, Frown, Activity];
    const IconComponent = icons[index] || Cloud;
    return <IconComponent className='text-red-500 mt-1 flex-shrink-0' size={18} />;
  };

  return (
    <ContentLayout
      sectionKey={sectionKey}
      id={id}
      icon={Scale}
      iconColor='text-green-600'
      backgroundColor='bg-green-50'
      accentColor='from-green-50 to-emerald-50'
    >
      {/* Section-Specific Content */}
      <div className='grid lg:grid-cols-1 gap-12 items-start'>
        <div className='space-y-8'>
          {/* Equality and Freedom Cards */}
          <div className='grid md:grid-cols-2 gap-8 mb-4'>
            <Card className='bg-white/90 backdrop-blur-sm shadow-xl border-0 transition-all duration-300 hover:scale-105'>
              <CardContent className='p-8'>
                <h3 className='text-2xl font-bold text-blue-900 mb-4 flex items-center gap-3'>
                  <LoaderPinwheel className='text-blue-600' size={28} />
                  {content.equality.title}
                </h3>
                <p className='text-gray-800 text-xl leading-relaxed mb-4'>{content.equality.subtitle}</p>
                <Description text={content.equality.description.value} size='' />
              </CardContent>
            </Card>

            <Card className='bg-white/90 backdrop-blur-sm shadow-xl border-0 transition-all duration-300 hover:scale-105'>
              <CardContent className='p-8'>
                <h3 className='text-2xl font-bold text-purple-900 mb-4 flex items-center gap-3'>
                  <FerrisWheel className='text-purple-600' size={28} />
                  {content.freedom.title}
                </h3>
                <p className='text-gray-800 text-xl leading-relaxed mb-4'>{content.freedom.subtitle}</p>
                <Description text={content.freedom.description.value} size='' />
              </CardContent>
            </Card>
          </div>

          <div className='py-8'>
            <Description text={content.paragraph1.value} />
          </div>

          {/* Nature's Justice - Positive and Negative Cards */}
          <div className='space-y-6'>
            <Card className='grid lg:grid-cols-2 gap-12 bg-white/90 backdrop-blur-sm shadow-xl border-0 transition-all duration-300 hover:scale-105'>
              <CardContent className='p-8'>
                <h3 className='text-2xl font-bold text-emerald-900 mb-6 flex items-center gap-3'>
                  <CheckCircle className='text-emerald-500' size={28} />
                  {content.positiveConsequences.title}
                </h3>
                <ul className='space-y-4'>
                  <li className='flex items-start gap-3'>
                    {getPositiveIcon(0)}
                    <span className='text-gray-800 leading-relaxed'>{content.positiveConsequences.nature}</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    {getPositiveIcon(1)}
                    <span className='text-gray-800 leading-relaxed'>{content.positiveConsequences.health}</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    {getPositiveIcon(2)}
                    <span className='text-gray-800 leading-relaxed'>{content.positiveConsequences.luck}</span>
                  </li>
                </ul>
              </CardContent>
              <CardContent className='p-8'>
                <h3 className='text-2xl font-bold text-red-900 mb-6 flex items-center gap-3'>
                  <XCircle className='text-red-500' size={28} />
                  {content.negativeConsequences.title}
                </h3>
                <ul className='space-y-4'>
                  <li className='flex items-start gap-3'>
                    {getNegativeIcon(0)}
                    <span className='text-gray-800 leading-relaxed'>{content.negativeConsequences.nature}</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    {getNegativeIcon(1)}
                    <span className='text-gray-800 leading-relaxed'>{content.negativeConsequences.health}</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    {getNegativeIcon(2)}
                    <span className='text-gray-800 leading-relaxed'>{content.negativeConsequences.luck}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
};

export default JusticeSection;
