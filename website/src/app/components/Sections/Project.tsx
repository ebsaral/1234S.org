'use client';

import { useIntlayer } from 'next-intlayer';

import { LuGift, LuGlobe, LuHeart, LuImagePlay, LuLightbulb, LuTreeDeciduous } from 'react-icons/lu';

import { useEffect, useRef, useState } from 'react';
import MarkdownProvider from '../Custom/MarkdownProvider';
import { Card, CardContent } from '../ui/card';

const Project = () => {
  const id = 'project';
  const sectionKey = 'project';
  const content = useIntlayer(`${sectionKey}-section`);

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

  const getCaseIcon = (index: number) => {
    const icons = [LuHeart, LuImagePlay, LuGlobe, LuGift];
    const IconComponent = icons[index] || LuLightbulb;
    return IconComponent;
  };

  return (
    <MarkdownProvider>
      <section id={id} className='relative max-w-screen mx-auto overflow-hidden bg-white px-6'>
        <div className='max-w-5xl mx-auto'>
          <div className='relative mx-auto  mb-6 pb-1 rounded-2xl text-center'>
            <div
              className={`z-20 relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg my-8 group transition-all duration-300 hover:scale-110`}
            >
              <LuTreeDeciduous
                className='text-emerald-700 transition-all duration-500 ease-in-out group-hover:scale-125'
                size={40}
              />
            </div>

            <h2
              className={`text-3xl sm:text-5xl lg:text-6xl font-bold text-emerald-700 leading-tight overflow-ellipsis`}
            >
              {content.title}
            </h2>

            {content.message && (
              <div className='max-w-4xl mx-auto mt-16 text-center flex flex-col lg:flex-row items-center gap-6'>
                <div className='text-xl sm:text-3xl lg:text-3xl'>{content.message.title}</div>

                <div className='text-lg sm:text-xl lg:text-2xl bg-emerald-700 text-white py-4 px-8 rounded-xl'>
                  {content.message.description}
                </div>
              </div>
            )}
          </div>
        </div>

        <article className='prose-custom-all max-w-4xl mx-auto my-12 text-left'>{content.explanation}</article>

        <div className='max-w-5xl mx-auto relative top-0 flex flex-col items-center justify-start'>
          {content.items && (
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 mx-auto'>
              {content.items.map((example, index) => {
                const IconComponent = getCaseIcon(index);
                const title = example.title;
                const content = example.subtitle;

                return (
                  <Card
                    key={index}
                    ref={(el) => {
                      refs.current[index] = el;
                    }}
                    data-index={index}
                    style={{ willChange: 'transform' }}
                    className={`group bg-purple-100/50 backdrop-blur-sm shadow-xl border-0 bg-gradient-to-br sm:bg-gradient-to-b from-purple-100/60 to-emerald-100/60  relative transform transition-all duration-700 ease-out transform-origin-center ${
                      visibleItems[index] ? 'scale-100 translate-y-0' : 'scale-90 translate-y-4'
                    }`}
                  >
                    <CardContent className='p-8 flex flex-col sm:items-center gap-4 whitespace-pre-line'>
                      <div className='sm:hidden sm:col-span-1 flex items-center justify-center w-24 h-24 -z-10 sm:opacity-100 sm:w-12 sm:h-12 rounded-full bg-purple-100/90 sm:bg-emerald-900/90 absolute top-[-10px] left-[-10px] overflow-clip sm:static'>
                        <IconComponent className='text-emerald-900 sm:text-white' size={24} />
                      </div>
                      <div className='hidden sm:visible sm:flex items-center justify-center opacity-100 w-12 h-12 rounded-full bg-emerald-900/90'>
                        <IconComponent className='text-white' size={24} />
                      </div>
                      <div className='col-span-6'>
                        <h3 className='text-left sm:text-center text-xl font-bold text-emerald-900 mt-6 sm:mt-3 mb-5 sm:mb-5'>
                          {title}
                        </h3>
                        <article className='custom-prose-all'>{content}</article>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
        <article className='custom-prose-all project-support max-w-5xl mx-auto text-center items-center mt-8 mb-16'>
          {content.support}
        </article>
      </section>
    </MarkdownProvider>
  );
};

export default Project;
