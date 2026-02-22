'use client';

import { MarkdownProvider, useIntlayer } from 'next-intlayer';

import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import useHash from '@/app/hooks/useHash';
import { useMenu } from '@/app/hooks/useMenu';
import { useIntersectionObserver } from '@/app/hooks/useScrollEffects';
import { MessageCircleQuestionMark } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import AccordionItem from './AccordionItem';

const HEADER_OFFSET = 96;

const FAQ = ({ id }: { id?: string }) => {
  const sectionKey = 'faq';
  const content = useIntlayer(`${sectionKey}-section`);
  const ref = useRef<HTMLDivElement | null>(null);
  const [isIntersecting] = useIntersectionObserver(ref);
  const { setActiveMenu } = useMenu();
  const { setHash } = useHash();

  useEffect(() => {
    if (isIntersecting) {
      if (id) {
        setHash(id);
      }
      setActiveMenu({ root: 'philosophy', child: id });
    }
  }, [isIntersecting]);

  const [open, setOpen] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const toggle = (i: number) => {
    setOpen((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));
  };

  const handleOpened = (i: number) => {
    const el = itemRefs.current[i];
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;

    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  // Keyboard navigation between headers (roving focus)
  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      buttonRefs.current[(i + 1) % content.items.length]?.focus();
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      buttonRefs.current[(i - 1 + content.items.length) % content.items.length]?.focus();
    }
    if (e.key === 'Home') {
      e.preventDefault();
      buttonRefs.current[0]?.focus();
    }
    if (e.key === 'End') {
      e.preventDefault();
      buttonRefs.current[content.items.length - 1]?.focus();
    }
  };

  return (
    <MarkdownProvider renderMarkdown={(markdown) => <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>}>
      <section id={id} ref={ref} className='relative max-w-screen mx-auto pt-16 overflow-hidden'>
        <article className='prose-custom-all max-w-4xl mx-auto px-6'>
          <div className='w-full mx-auto text-center'>
            <MessageCircleQuestionMark className='relative -z-10 mx-auto text-orange-200/80' size={250} />
            <h2 className={`-mt-44`}>{content.title}</h2>
            <div className='mt-16 lg:-mt-2 mx-auto flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg transition-all duration-300 hover:scale-110'>
              <MessageCircleQuestionMark className='text-orange-600' size={40} />
            </div>
          </div>
          <div className='prose-custom-all max-w-4xl mx-auto my-16 text-center'>{content.description}</div>
        </article>
        <div className='max-w-4xl mx-auto mb-16 pl-4 sm:px-6 space-y-8' role='region' aria-label={content.title.value}>
          {content.items.map((faq, i) => {
            const isOpen = open.includes(i);
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;

            return (
              <div key={i} className='scroll-mt-24'>
                <AccordionItem
                  key={i}
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  buttonRef={(el) => (buttonRefs.current[i] = el)}
                  isOpen={isOpen}
                  onToggle={() => toggle(i)}
                  onOpened={() => handleOpened(i)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                  question={faq.title}
                  answer={faq.subtitle}
                  panelId={panelId}
                  buttonId={buttonId}
                  index={i + 1}
                />
              </div>
            );
          })}
        </div>
        <article className='prose-custom-all max-w-4xl mx-auto px-6 mb-16'>{content.contact}</article>
      </section>
    </MarkdownProvider>
  );
};

export default FAQ;
