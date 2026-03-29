'use client';

import { useIntlayer } from 'react-intlayer';
import { MarkdownRenderer } from 'react-intlayer/markdown';

import Consequences from '@/app/components/Sections/Justice/Consequences';
import EqualityAndFreedom from '@/app/components/Sections/Justice/EqualityAndFreedom';
import { useMenu } from '@/app/hooks/useMenu';
import { useIntersectionObserver } from '@/app/hooks/useScrollEffects';
import { useEffect, useRef } from 'react';
import { LiaBalanceScaleSolid } from 'react-icons/lia';
import ExampleBox from '../../Custom/ExampleBox';
import ReadingSuggestion from '../../Custom/ReadingSuggestion';

const Justice = ({ id }: { id?: string }) => {
  const sectionKey = 'justice';
  const content = useIntlayer(`${sectionKey}-section`);
  const ref = useRef<HTMLDivElement | null>(null);
  const [isIntersecting] = useIntersectionObserver(ref);
  const { setActiveMenu } = useMenu();

  useEffect(() => {
    if (isIntersecting) {
      setActiveMenu({ root: 'philosophy', child: id });
    }
  }, [isIntersecting]);

  return (
    <section id={id} ref={ref} className='relative max-w-screen mx-auto pt-16 overflow-hidden'>
      <article className='prose-custom-all max-w-4xl mx-auto px-6'>
        <div className='w-full mx-auto text-center'>
          <LiaBalanceScaleSolid className='relative -z-10 mx-auto text-green-200/80' size={250} />
          <h2 className={`-mt-44 animate-sway `}>{content.title}</h2>
          <div className='group -mt-2 lg:-mt-8 mx-auto flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg transition-all duration-300 hover:scale-110 text-green-600'>
            <LiaBalanceScaleSolid className='transition-all duration-300 group-hover:scale-110' size={40} />
          </div>
          <h3 className='mt-6'>
            <b>
              <em>{content.subtitle}</em>
            </b>
          </h3>
        </div>
        <div className='max-w-4xl mx-auto'>
          <MarkdownRenderer>{content.description.value}</MarkdownRenderer>
        </div>
      </article>
      <div className='max-w-5xl mx-auto py-8 px-6'>
        <EqualityAndFreedom />
      </div>

      <article className='prose-custom-all max-w-4xl mx-auto p-6'>
        <MarkdownRenderer>{content.paragraph1.value}</MarkdownRenderer>
        <MarkdownRenderer>{content.paragraph2.value}</MarkdownRenderer>
        <ExampleBox className='my-8' title={content.examples.title.value} content={content.examples.items[0].value} />
        <MarkdownRenderer>{content.paragraph3.value}</MarkdownRenderer>
      </article>
      <div className='max-w-5xl mx-auto px-6'>
        <Consequences />
      </div>
      <article className='prose-custom-all max-w-4xl mx-auto p-6'>
        <MarkdownRenderer>{content.paragraph4.value}</MarkdownRenderer>
      </article>
      <ReadingSuggestion className='mb-24' content={content.reading.value} />
    </section>
  );
};

export default Justice;
