'use client';

import {
  Accessibility,
  CandyOff,
  CircleX,
  EarOff,
  Eye,
  EyeOff,
  HeartOff,
  Shield,
  Smile,
  Speech,
  Stethoscope,
} from 'lucide-react';
import { MarkdownProvider, useIntlayer } from 'react-intlayer';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import FormattedText from '../../Custom/FormattedText';
import { Card, CardContent } from '../../ui/card';

const Analogy = ({ className }: { className?: string }) => {
  const content = useIntlayer('health-section');
  // Icon mappings for health examples
  const getHealthExampleIcon = (index: number) => {
    const IconComponent = [Speech, EyeOff, EarOff, HeartOff, Accessibility, CandyOff, CircleX];
    return IconComponent[index];
  };

  return (
    <MarkdownProvider renderMarkdown={(markdown) => <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>}>
      <div className={`mx-auto grid gap-8 space-y-8 ${className}`}>
        {/* Organ-Action-Consequence Analogy Box */}
        <Card className='bg-gradient-to-br from-rose-50 to-pink-100 border-0 shadow-xl'>
          <CardContent className='p-8'>
            <div className='grid lg:grid-cols-2 lg:gap-10 gap-2'>
              <div>
                <h3 className='relative text-2xl font-bold text-rose-900 mb-6 flex items-center gap-3'>
                  <Stethoscope className='absolute -left-12 rotate-12 text-rose-500' size={45} />
                  {content.analogy.title}
                </h3>
                <blockquote className='text-rose-800 italic bg-white/60 p-4 rounded-lg border-l-4 border-rose-400 mb-6'>
                  {content.analogy.quote}
                </blockquote>
              </div>
              <ul className='space-y-3 text-rose-800 lg:mt-14'>
                <li className='flex items-start gap-3'>
                  <Smile className='text-rose-500 mt-1 flex-shrink-0' size={18} />
                  <span>{content.analogy.items[0]}</span>
                </li>
                <li className='flex items-start gap-3'>
                  <Eye className='text-rose-500 mt-1 flex-shrink-0' size={18} />
                  <span>{content.analogy.items[1]}</span>
                </li>
                <li className='flex items-start gap-3'>
                  <Shield className='text-rose-500 mt-1 flex-shrink-0' size={18} />
                  <span>{content.analogy.items[2]}</span>
                </li>
              </ul>
            </div>
            <div className='grid md:grid-cols-2 gap-6 pt-6'>
              {content.analogy.examples.map((example, index) => {
                const IconComponent = getHealthExampleIcon(index);
                const content = example;

                return (
                  <Card key={index} className='bg-white/60 backdrop-blur-sm shadow-xl border-0'>
                    <CardContent className='p-8 group'>
                      <div className='flex flex-col items-center gap-6 whitespace-pre-line'>
                        <div className='flex items-center justify-center w-12 h-12 rounded-full bg-rose-600 flex-shrink-0 group-hover:scale-110 transition-all duration-300'>
                          <IconComponent className='text-white' size={24} />
                        </div>
                        <div className='flex-1 text-left'>
                          <p className='text-rose-900 leading-relaxed'>{content}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}

              <div className='flex flex-col sm:flex-row items-center sm:items-start gap-4 whitespace-pre-line p-5'>
                <div className='flex-1 text-center sm:text-left'>
                  <FormattedText className='text-gray-900 leading-relaxed' text={content.analogy.info.value} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </MarkdownProvider>
  );
};

export default Analogy;
