'use client';

import { MarkdownProvider, useIntlayer } from 'next-intlayer';

import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { Scale } from 'lucide-react';
// import Consequences from './Consequences';
import EqualityAndFreedom from './EqualityAndFreedom';
import Statement from './Statement';

const Justice = () => {
  const id = '2';
  const sectionKey = 'justice';
  const content = useIntlayer(`${sectionKey}-section`);

  return (
    <MarkdownProvider renderMarkdown={(markdown) => <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>}>
      <section id={id} className='relative max-w-screen mx-auto pt-16 overflow-hidden'>
        <article className='prose-custom-all max-w-4xl mx-auto px-6'>
          <div className='w-full mx-auto text-center'>
            <Scale className='relative -z-10 mx-auto text-green-200/80' size={250} />
            <h2 className={`-mt-44 animate-sway `}>{content.title}</h2>
            <div className='mt-16 lg:-mt-2 mx-auto flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg transition-all duration-300 hover:scale-110'>
              <Scale className='text-green-600' size={40} />
            </div>
            <h3>
              <b>
                <em>{content.subtitle}</em>
              </b>
            </h3>
          </div>
          <div className='max-w-4xl mx-auto'>{content.description}</div>
        </article>
        <div className='max-w-5xl mx-auto py-8 px-6'>
          <EqualityAndFreedom />
        </div>
        {/* <div className='max-w-5xl mx-auto mt-10 px-6'>
          <Consequences />
        </div> */}
        <article className='prose-custom-all max-w-4xl mx-auto p-6'>
          {content.paragraph1}
          {content.paragraph2}
          {content.paragraph3}
        </article>

        <Statement />
        {/* Decorative Elements max-w-4xl mx-auto px-6 sm:px-10 py-0 sm:py-5  */}
        <div className='-z-10 absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent' />
      </section>
    </MarkdownProvider>
  );
};

export default Justice;
