'use client';

import { useIntlayer } from 'next-intlayer';

import { Flower2 } from 'lucide-react';

import { Tooltip } from 'react-tooltip';
import MarkdownProvider from '../Custom/MarkdownProvider';

const Story = () => {
  const id = 'story';
  const sectionKey = 'story';
  const content = useIntlayer(`${sectionKey}-section`);

  return (
    <MarkdownProvider>
      <section id={id} className='relative max-w-screen mx-auto overflow-hidden bg-purple-900 px-6 pb-28'>
        <div className='max-w-5xl mx-auto'>
          <div className='relative mx-auto mt-16 mb-6 pb-1 rounded-2xl text-center'>
            <div
              className={`z-20 relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg my-8 group transition-all duration-300 hover:scale-110`}
            >
              <Flower2
                className='text-purple-800 transition-all duration-500 ease-in-out group-hover:scale-125'
                size={40}
              />
            </div>

            <h2 className={`text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight overflow-ellipsis text-white`}>
              {content.title}
            </h2>
          </div>
        </div>
        <Tooltip
          id='tooltip'
          className='!bg-white !text-purple-900 font-medium p-2 rounded-md shadow-lg max-w-xs !opacity-100'
        />
        <article className='prose-custom-all max-w-4xl mx-auto my-12 text-left text-white [&_a.tooltip-link]:!text-white [&_a.tooltip-link]:font-semibold'>
          {content.description}
        </article>

        <div className='absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent' />
      </section>
    </MarkdownProvider>
  );
};

export default Story;
