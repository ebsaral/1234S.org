'use client';

import { Heart } from 'lucide-react';
import { MarkdownProvider, useIntlayer } from 'react-intlayer';

import { Analogy } from '@/app/components/Sections/Health';
import { Statement } from '@/app/components/Sections/Justice';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Quote from '../Quote';

const Health = ({ id }: { id?: string }) => {
  const sectionKey = 'health';
  const content = useIntlayer(`${sectionKey}-section`);

  return (
    <MarkdownProvider renderMarkdown={(markdown) => <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>}>
      <section id={id} className='relative max-w-screen mx-auto'>
        {/* Background Color */}
        <div className={`-z-10 absolute inset-0 bg-rose-50`} />

        {/* Gradient Overlay */}
        <div className={`-z-10 absolute inset-0 bg-gradient-to-br from-rose-50 to-pink-50 opacity-80`} />
        <Statement className='border-b-2 border-green-700/80' />

        <div className='relative max-w-4xl mx-auto px-4'>
          {/* Header */}
          <div className='mx-auto'>
            <div className='relative -top-0 flex flex-col items-center h-32 overflow-hidden'>
              <div className='relative -top-32'>
                <Heart className='text-rose-600' size={250} />
              </div>
            </div>

            <div
              className={`z-20 relative -mt-24  mb-0 mx-auto flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg transition-all duration-300 hover:scale-110`}
            >
              <Heart className='text-rose-600' size={40} />
            </div>

            <article className='prose-custom-all -mt-4 sm:-mt-10 md:-mt-12 lg:-mt-16 w-full mx-auto'>
              <h2 className='text-center mb-8'>{content.title}</h2>
              <h3 className='text-center'>
                <b>
                  <em>{content.subtitle}</em>
                </b>
              </h3>
            </article>

            <Quote text={content.quote.value} />
          </div>

          {/* Description */}

          <article className='prose-custom-all max-w-4xl mx-auto px-6 sm:px-10'>{content.description}</article>
        </div>

        <div className='relative max-w-5xl mx-auto my-8 px-4'>
          {/* Analogy */}
          <Analogy className='mx-auto' />
        </div>

        {/* Ending */}
        <article className='relative prose-custom-all max-w-4xl mx-auto mt-12 pb-24 px-6 sm:px-10'>
          {content.paragraph1}
        </article>

        {/* Decorative Elements */}
        <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent' />
      </section>
    </MarkdownProvider>
  );
};

export default Health;
