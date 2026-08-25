'use client';

import { getLocalizedUrl } from 'intlayer';
import { useIntlayer, useLocale } from 'next-intlayer';
import Link from 'next/link';
import { LuFlower2 } from 'react-icons/lu';
import { MarkdownRenderer } from 'react-intlayer/markdown';

import { Tooltip } from 'react-tooltip';

const Story = () => {
  const id = 'story';
  const sectionKey = 'story';
  const content = useIntlayer(`${sectionKey}-section`);
  const { locale } = useLocale();

  return (
    <section id={id} className='relative max-w-screen mx-auto overflow-hidden bg-purple-900 pb-24 px-6'>
      <div className=' max-w-5xl mx-auto'>
        <div className='relative mx-auto mt-10 mb-6 pb-1 rounded-2xl text-center'>
          <div
            className={`z-20 relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg my-8 group transition-all duration-300 hover:scale-110`}
          >
            <LuFlower2
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
      <article className='prose-custom-all max-w-4xl mx-auto my-12 text-left text-white [&_a]:text-white [&_a]:font-semibold [&_a.tooltip-link]:!text-white [&_a.tooltip-link]:font-semibold'>
        <MarkdownRenderer>{content.description.value}</MarkdownRenderer>
      </article>
      <Link
        href={getLocalizedUrl('/spirituality', locale)}
        className='relative z-10 inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-lg font-semibold text-purple-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-purple-100 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50 active:translate-y-0 active:scale-95'
      >
        <div className='max-w-4xl mx-auto text-center'>{content.visit}</div>
      </Link>

      <div className='absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent' />
    </section>
  );
};

export default Story;
