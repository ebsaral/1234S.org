'use client';

import { GiHealthPotion } from 'react-icons/gi';
import { PiSmileyFill, PiWarningFill } from 'react-icons/pi';

import {
  LuAccessibility,
  LuCandyOff,
  LuCircleX,
  LuEarOff,
  LuEyeOff,
  LuHeartOff,
  LuSpeech,
  LuStethoscope,
} from 'react-icons/lu';

import { useIntlayer } from 'react-intlayer';
import FormattedText from '../../Custom/FormattedText';
import { Card, CardContent } from '../../ui/card';

const Analogy = ({ className }: { className?: string }) => {
  const content = useIntlayer('health-section');
  // Icon mappings for health examples
  const getHealthExampleIcon = (index: number) => {
    const IconComponent = [LuSpeech, LuEyeOff, LuEarOff, LuHeartOff, LuAccessibility, LuCandyOff, LuCircleX];
    return IconComponent[index];
  };

  return (
    <div className={`mx-auto grid gap-8 space-y-8 ${className}`}>
      {/* Organ-Action-Consequence Analogy Box */}
      <Card className='bg-gradient-to-br from-rose-50 to-pink-100 border-0 shadow-xl text-rose-700'>
        <CardContent className='p-8'>
          <h3 className='relative text-2xl font-bold mb-8 flex items-center gap-3'>
            <LuStethoscope className='absolute -left-12 rotate-12' size={45} />
            {content.analogy.title}
          </h3>

          <div className='grid lg:grid-cols-2 lg:gap-10 gap-2'>
            <blockquote className='  bg-white/60 p-4 rounded-lg border-l-4 border-rose-400 mb-6'>
              {content.analogy.quote}
            </blockquote>
            <ul className='-ml-4 sm:ml-0 space-y-5 text-gray-900'>
              <li className='flex items-start gap-4'>
                <PiSmileyFill className='text-emerald-700 mt-1 flex-shrink-0' size={36} />
                <span>{content.analogy.items[0]}</span>
              </li>
              <li className='flex items-start gap-4'>
                <PiWarningFill className='text-yellow-700 mt-1 flex-shrink-0' size={36} />
                <span>{content.analogy.items[1]}</span>
              </li>
            </ul>
          </div>

          <div className='flex flex-col items-center relative font-medium text-left sm:text-center bg-white/60 p-4 rounded-lg my-6 sm:mx-12 pb-5'>
            {content.analogy.subtitle}
            <GiHealthPotion className='animate-jump absolute -bottom-3' size={30} />
          </div>
          <div className='grid md:grid-cols-2 gap-6'>
            {content.analogy.examples.map((example, index) => {
              const IconComponent = getHealthExampleIcon(index);
              const content = example;

              return (
                <Card key={index} className='bg-white/60 backdrop-blur-sm shadow-xl border-0'>
                  <CardContent className='p-8 group'>
                    <div className='flex flex-col items-center gap-6 whitespace-pre-line'>
                      <div className='flex items-center justify-center w-12 h-12 rounded-full bg-rose-700 flex-shrink-0 group-hover:scale-110 transition-all duration-300 shadow-lg'>
                        <IconComponent className='text-white' size={24} />
                      </div>
                      <div className='flex-1 text-left'>
                        <p className='font-medium leading-relaxed'>{content}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            <div className='flex flex-col sm:flex-row items-center sm:items-start gap-4 whitespace-pre-line py-5 sm:p-5'>
              <div className='flex-1 text-left'>
                <FormattedText
                  className='text-gray-900 font-medium leading-relaxed'
                  text={content.analogy.info.value}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analogy;
