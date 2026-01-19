'use client';

import { CircleQuestionMark, Sparkles } from 'lucide-react';
import { MarkdownProvider, useIntlayer } from 'next-intlayer';

import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Intro = () => {
  const id = '0';
  const content = useIntlayer('intro-section');

  return (
    <MarkdownProvider renderMarkdown={(markdown) => <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>}>
      <section id={id} className='max-w-screen mx-auto overflow-hidden'>
        {/* Introduction */}
        <div className='mt-32 full-w-mx flex flex-col items-center justify-center bg-gradient-to-r from-blue-200 via-red-200 to-green-200 rounded-2xl py-4'>
          <span className='relative -top-10 flex items-center justify-center bg-gray-900 rounded-full w-12 h-12 hover:scale-110 duration-300 transition-all text-white font-bold cursor-default'>
            <CircleQuestionMark size={48} />
          </span>
          <article className='apply-custom-prose max-w-3xl mx-6 text-gray-900'>{content.paragraph1}</article>

          <article className='apply-custom-prose max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 items-stretch justify-center text-gray-900 text-wrap'>
            <div className='flex flex-col items-start justify-start text-left sm:text-center px-10 text-wrap'>
              <h3 className='max-w-max relative -left-2 sm:left-0 px-2 py-1 bg-black/80 text-gray-100 rounded-md'>
                {content.logical.title}
              </h3>
              <p className='text-left'>{content.logical.description}</p>
            </div>

            <div className='flex flex-col items-start justify-start text-left sm:text-center px-10 text-wrap'>
              <h3 className='max-w-max relative -left-2 sm:left-0 px-2 py-1 bg-black/80 text-gray-100 rounded-md'>
                {content.spirituality.title}
              </h3>
              <p className='text-left'>{content.spirituality.description}</p>
            </div>
          </article>
        </div>

        <div className='max-w-5xl mx-auto mt-8 flex flex-col gap-4 items-center justify-center'>
          {/* Description */}
          <article className='apply-custom-prose max-w-3xl mx-6'>{content.paragraph2}</article>

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
    </MarkdownProvider>
  );
};

export default Intro;
