"use client";

import { useIntlayer } from 'next-intlayer';

import FormattedText from '@/app/components/Custom/FormattedText';

const Intro = () => {
  const content = useIntlayer("intro-section");

  return (
    <section
      className="overflow-hidden mb-10 px-2"
    >
      <div className='max-w-screen mx-auto bg-gradient-to-r from-blue-200 via-red-200 to-green-200 my-10 rounded-2xl'>
        <div className='relative -top-6 left-1/2 transform -translate-x-1/2 flex items-center justify-center bg-black/80 rounded-full w-12 h-12'>
            <span className='font-bold text-2xl'>❔</span>
        </div>
        <FormattedText className="max-w-4xl mx-auto p-10 text-gray-900 text-lg sm:text-xl leading-relaxed whitespace-pre-line" text={content.paragraph1.value} />
        <div className='max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 items-stretch justify-center text-gray-900 text-wrap gap-4 sm:gap-0 px-5'>
            <div className='flex flex-col items-left sm:items-center justify-start text-left sm:text-center pb-5 px-10 gap-3 border-gray-600 sm:border-b-2 text-wrap'>
                <p className='max-w-max relative -left-2 sm:left-0 font-semibold text-xl sm:text-lg px-2 py-1 bg-black/80 text-gray-100 rounded-md'>{content.logical.title}</p>
                <p>{content.logical.description}</p>
            </div>

            <div className='flex flex-col items-right sm:items-center justify-start text-left sm:text-center pb-5 px-10 gap-3 border-b-2 border-gray-600 text-wrap'>
                <p className='max-w-max relative -left-2 sm:left-0 font-semibold text-xl sm:text-lg px-2 py-1 bg-black/80 text-gray-100 rounded-md'>{content.spirituality.title}</p>
                <p>{content.spirituality.description}</p>
            </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto my-16 px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-4 prose prose-lg max-w-none">            
          <FormattedText className='leading-relaxed text-md sm:text-ld md:text-xl' boldClassName='text-gray-900' text={content.paragraph2.value}  />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className='stars-box rounded-xl gap-5'>
          <div className='stars' />

          <div className='relative -top-6 left-1/2 transform -translate-x-1/2 flex items-center justify-center bg-pink-200/80 rounded-full w-12 h-12'>
            <span className='font-bold text-2xl'>🌟</span>
          </div>

          <blockquote className="max-w-4xl mx-auto py-4 px-6 sm:px-8 lg:px-10 text-center text-md sm:text-lg lg:text-xl font-normal pb-10 whitespace-pre-line text-gray-100">
              {content.quote}
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Intro;