'use client';

import { useIntlayer } from 'react-intlayer';

import { getLocalizedUrl } from 'intlayer';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { FaBuildingShield } from 'react-icons/fa6';
import { GiLifeSupport } from 'react-icons/gi';
import { useLocale } from 'react-intlayer';
import { MarkdownRenderer } from 'react-intlayer/markdown';
import { Card, CardContent } from '../ui/card';

const Action = () => {
  const id = 'action';
  const sectionKey = 'action';
  const content = useIntlayer(`${sectionKey}-section`);
  const { locale } = useLocale();

  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(Array(content.items.length).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          setVisibleItems((prev) => {
            const updated = [...prev];
            updated[index] = entry.isIntersecting;
            return updated;
          });
        });
      },
      {
        threshold: 0.2, // trigger when 20% of the item is visible
      },
    );

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [content.items.length]);

  const getProcessClass = (statusKey: string) => {
    if (statusKey == 'on-hold') {
      return 'animate-pulse';
    }
    if (statusKey == 'not-started') {
      return 'opacity-60';
    }
  };

  return (
    <section id={id} className='relative max-w-screen mx-auto overflow-hidden bg-white px-6'>
      <div className='max-w-5xl mx-auto'>
        <div className='relative mx-auto  mb-6 pb-1 rounded-2xl text-center'>
          <div
            className={`z-20 relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg my-8 group transition-all duration-300 hover:scale-110`}
          >
            <FaBuildingShield
              className='text-rose-700 transition-all duration-500 ease-in-out group-hover:scale-125'
              size={40}
            />
          </div>

          <h2 className={`text-3xl sm:text-5xl lg:text-6xl font-bold text-rose-700 leading-tight overflow-ellipsis`}>
            {content.title}
          </h2>
        </div>
      </div>

      <div className='max-w-5xl mx-auto mt-10 mb-16 flex flex-row gap-3 items-center justify-center'>
        {content.items.map((item, index) => {
          return (
            <div
              key={`action-item-${index}`}
              className={`text-white bg-rose-700 font-bold text-xl w-8 h-8 rounded-full flex items-center justify-center ${getProcessClass(item.status.key.value)}`}
              title={item.status.text.value}
            >
              {index + 1}
            </div>
          );
        })}
      </div>

      <div className='max-w-5xl mx-auto relative my-10 flex flex-col items-center justify-start'>
        {content.items && (
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 mx-auto'>
            {content.items.map((example, index) => {
              const title = example.title;
              const content = example.subtitle;
              const status = example.status;

              return (
                <Card
                  key={index}
                  ref={(el) => {
                    refs.current[index] = el;
                  }}
                  data-index={index}
                  style={{ willChange: 'transform' }}
                  className={`group bg-purple-100/50 backdrop-blur-sm shadow-xl border-0 bg-gradient-to-br sm:bg-gradient-to-b from-purple-100/60 to-black-100/60  relative transform transition-all duration-700 ease-out transform-origin-center ${
                    visibleItems[index] ? 'scale-100 translate-y-0' : 'scale-90 translate-y-4'
                  }`}
                >
                  <CardContent className='p-8 pb-0 flex flex-col sm:items-center gap-4 whitespace-pre-line'>
                    <div className='sm:hidden sm:col-span-1 flex items-center justify-center w-24 h-24 -z-10 sm:opacity-100 sm:w-12 sm:h-12 rounded-full bg-purple-100/80 sm:bg-rose-700/90 absolute top-[-10px] left-[-10px] overflow-clip sm:static'>
                      <div className='text-rose-700 font-bold text-2xl'>{index + 1}</div>
                    </div>
                    <div className='hidden sm:visible sm:flex items-center justify-center absolute left-[-10px] top-[-10px] opacity-100 w-12 h-12 rounded-full bg-rose-700/90'>
                      <div className='text-white font-bold text-2xl'>{index + 1}</div>
                    </div>
                    <div className='col-span-6'>
                      <h3 className='text-left sm:text-center text-xl font-bold text-rose-700 mt-8 sm:mt-0'>{title}</h3>

                      <div className='text-left sm:text-center italic text-sm mt-4'>{status.text}</div>
                      <article className='prose-custom-all mt-[-12]'>
                        <MarkdownRenderer>{content.value}</MarkdownRenderer>
                      </article>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
            <Card
              ref={(el) => {
                refs.current[content.items.length] = el;
              }}
              data-index={content.items.length}
              style={{ willChange: 'transform' }}
              className={`group bg-purple-100/50 backdrop-blur-sm shadow-xl border-0 bg-gradient-to-br sm:bg-gradient-to-b from-white to-purple-100/60  relative transform transition-all duration-700 ease-out transform-origin-center ${
                visibleItems[content.items.length] ? 'scale-100 translate-y-0' : 'scale-90 translate-y-4'
              }`}
            >
              <CardContent className='p-8 flex flex-col sm:items-center gap-4 whitespace-pre-line'>
                <Link href={getLocalizedUrl('contact', locale)}>
                  <div className='col-span-6'>
                    <div className='flex items-center justify-center text-xl font-bold text-rose-700 mb-8 mt-[-5]'>
                      <GiLifeSupport
                        className='text-rose-700 transition-all duration-500 ease-in-out group-hover:scale-125'
                        size={80}
                      />
                    </div>
                    <article className='prose-custom-all'>
                      <MarkdownRenderer>{content.support.value}</MarkdownRenderer>
                    </article>
                  </div>
                </Link>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default Action;
