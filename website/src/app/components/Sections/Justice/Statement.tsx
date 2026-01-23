'use client';

import { MarkdownProvider, useIntlayer } from 'next-intlayer';

import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { Sun, TreePine } from 'lucide-react';

const Statement = ({ className }: { className?: string }) => {
  const sectionKey = 'justice';
  const content = useIntlayer(`${sectionKey}-section`);

  return (
    <MarkdownProvider renderMarkdown={(markdown) => <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>}>
      <section className={`relative mx-auto py-12 px-6 overflow-hidden ${className}`}>
        {/* fractal background */}
        <div className='absolute inset-0 bg-effect opacity-70' />

        <article className='relative z-10 prose-custom-all max-w-4xl mx-auto py-4 px-24 bg-green-100/90 rounded-2xl text-center'>
          {/* Background Icon */}
          <Sun
            className='
          absolute
          -top-28 -left-24
          w-40 h-40
          text-yellow-400
          opacity-80
          translate-x-1/4 translate-y-1/4
          pointer-events-none
          select-none
        '
          />
          <TreePine
            className='
          absolute
          -bottom-4 -right-6
          w-40 h-40
          text-green-700
          opacity-80
          translate-x-1/4 translate-y-1/4
          pointer-events-none
          select-none
        '
          />
          {content.statement}
        </article>
      </section>
    </MarkdownProvider>
  );
};

export default Statement;
