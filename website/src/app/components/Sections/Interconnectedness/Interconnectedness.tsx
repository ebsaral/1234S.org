'use client';

import { Globe } from 'lucide-react';
import { MarkdownProvider, useIntlayer } from 'react-intlayer';

import { Examples, Experiment } from '@/app/components/Sections/Interconnectedness';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Quote from '../Quote';

const Interconnectedness = () => {
  const id = '1';
  const sectionKey = 'interconnectedness';
  const content = useIntlayer(`${sectionKey}-section`);

  return (
    <MarkdownProvider renderMarkdown={(markdown) => <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>}>
      <section id={id} className='relative max-w-screen mx-auto overflow-hidden'>
        {/* Decorative Elements */}
        <div className='-z-10 absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent' />

        <div className='moving-bg'></div>
        <div className='moving-bg moving-bg2'></div>
        <div className='moving-bg moving-bg3'></div>

        <div className='max-w-4xl mx-auto px-4'>
          <div className='mx-auto my-32 pb-1 bg-white/80 rounded-2xl'>
            <div className='relative -top-0 flex flex-col items-center h-32 overflow-hidden'>
              <div className='relative -top-32'>
                <Globe className='text-blue-200' size={250} />
              </div>
            </div>

            <div
              className={`z-20 relative -mt-24  mb-0 mx-auto flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg transition-all duration-300 hover:scale-110`}
            >
              <Globe className='text-blue-600' size={40} />
            </div>

            <article className='prose-custom-all -mt-4 sm:-mt-10 md:-mt-12 lg:-mt-16 w-full mx-auto'>
              <h2 className='text-center mb-5'>{content.title}</h2>
              <h3 className='text-center'>
                <b>
                  <em>{content.subtitle}</em>
                </b>
              </h3>
            </article>

            <Quote text={content.quote.value} />

            <article className='prose-custom-all max-w-4xl mx-auto px-6 sm:px-10'>
              {content.description}
              {content.paragraph1}
            </article>

            <Experiment className='max-w-4xl mx-auto mt-16 mb-6 -ml-6 mr-6' />

            <article className='prose-custom-all max-w-4xl mx-auto my-12 px-6 sm:px-10'>
              {content.paragraph2}
              {content.paragraph3}
              {content.paragraph4}
            </article>

            <Examples className='max-w-4xl mx-auto mt-20 mb-6 ml-6 -mr-6' />
          </div>
        </div>

        {/* Decorative Elements */}
        <div className='-z-10 absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent' />
      </section>
    </MarkdownProvider>
  );
};

export default Interconnectedness;
