'use client';

import { CircleQuestionMark, Sparkles } from 'lucide-react';
import { useIntlayer } from 'next-intlayer';

import FormattedText from '@/app/components/Custom/FormattedText';

const Intro = () => {
  const id = '0';
  const content = useIntlayer('intro-section');

  return (
    <section id={id} className='max-w-screen mx-auto overflow-hidden'>
      {/* Introduction */}
      <div className='mt-32 bg-gradient-to-r from-blue-200 via-red-200 to-green-200 my-10 mx-4 sm:mx-16 lg:mx-20 rounded-2xl'>
        <span className='relative -top-6 left-1/2 transform -translate-x-1/2 flex items-center justify-center bg-gray-900 rounded-full w-12 h-12 hover:scale-110 duration-300 transition-all text-white font-bold cursor-default'>
          <CircleQuestionMark size={48} />
        </span>
        <FormattedText
          className='max-w-4xl mx-auto p-8 text-gray-900 text-lg sm:text-xl leading-relaxed whitespace-pre-line'
          text={content.paragraph1.value}
        />
        <div className='max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 items-stretch justify-center text-gray-900 text-wrap gap-4 sm:gap-0 px-5'>
          <div className='flex flex-col items-left sm:items-center justify-start text-left sm:text-center pb-5 px-10 gap-3 text-wrap'>
            <p className='max-w-max relative -left-2 sm:left-0 font-semibold text-xl sm:text-lg px-2 py-1 bg-black/80 text-gray-100 rounded-md'>
              {content.logical.title}
            </p>
            <p>{content.logical.description}</p>
          </div>

          <div className='flex flex-col items-right sm:items-center justify-start text-left sm:text-center pb-5 px-10 gap-3 text-wrap'>
            <p className='max-w-max relative -left-2 sm:left-0 font-semibold text-xl sm:text-lg px-2 py-1 bg-black/80 text-gray-100 rounded-md'>
              {content.spirituality.title}
            </p>
            <p>{content.spirituality.description}</p>
          </div>
        </div>
      </div>

      <div className='max-w-5xl mx-auto'>
        {/* Description */}
        <div className='my-16 mx-12 sm:mx-24 lg:mx-24'>
          <div className='flex flex-col gap-4 prose prose-lg max-w-none'>
            <FormattedText
              className='leading-relaxed text-md sm:text-lg md:text-xl'
              boldClassName='text-gray-900'
              text={content.paragraph2.value}
            />
          </div>
        </div>

        {/* Insight */}
        <div className='mt-10 mx-4 sm:mx-16 lg:mx-20'>
          <div className='stars-box rounded-xl gap-5'>
            <div className='stars' />

            <div className='relative -top-6 left-1/2 transform -translate-x-1/2 flex items-center justify-center bg-white rounded-full w-12 h-12 hover:scale-110 duration-300 transition-all'>
              <span className='font-bold text-2xl cursor-default'>
                <Sparkles size={28} />
              </span>
            </div>

            <blockquote className='max-w-4xl mx-auto pb-16 pt-12 px-6 sm:px-8 lg:px-10 text-center text-md sm:text-lg lg:text-xl font-normal whitespace-pre-line text-gray-100'>
              {content.quote}
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
