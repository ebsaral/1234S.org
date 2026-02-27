'use client';

import { getLocalizedUrl } from 'intlayer';
import { MarkdownProvider, useIntlayer } from 'next-intlayer';

import Image from 'next/image';
import { useLocale } from 'react-intlayer';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import CustomPencil from '../Custom/CustomPencil';

const Blog = () => {
  const id = 'blog';
  const sectionKey = 'blog';
  const content = useIntlayer(`${sectionKey}-section`);
  const { locale } = useLocale();

  return (
    <MarkdownProvider renderMarkdown={(markdown) => <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>}>
      <section id={id} className='relative max-w-screen mx-auto overflow-hidden px-4 py-16 bg-gray-500'>
        <div className={`z-0 absolute inset-0 bg-gradient-to-br from-gray-500 to-gray-100 opacity-80'}`} />

        <article className='prose-custom-all relative z-10 max-w-4xl mx-auto text-gray-900'>
          <div className='relative mx-auto mb-8 pb-1 rounded-2xl text-center'>
            <CustomPencil />
            {content.title}
            {content.description}
          </div>
        </article>

        <div className='relative z-10 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 content-between justify-items-center gap-10'>
          {content.items.map((item, index) => {
            return (
              <a
                key={`item-${index}`}
                href={getLocalizedUrl(item.href.value, locale)}
                className='relative group flex flex-col w-full gap-4 items-center bg-gray-200/80 hover:bg-gray-100/90 active:bg-gray-200/80 p-8 rounded-lg'
              >
                <span className='absolute -left-3 -top-3 inline-flex items-center justify-center rounded-full bg-gray-600 text-sm text-center text-white w-10 h-10'>
                  #{index + 1}
                </span>
                <Image
                  className='mb-5 sm:h-36 group-hover:scale-105 transition-all duration-300 rounded-lg'
                  src={item.image.src.value}
                  width={item.image.size.value}
                  height={item.image.size.value}
                  alt={item.title.value}
                />
                <h3 className='font-bold text-lg text-center sm:min-h-[56px] line-clamp-2 inline-flex items-center'>
                  {item.title}
                </h3>

                <p className='text-sm'>{item.subtitle}</p>

                <div className='mt-auto flex flex-col gap-4 text-xs'>
                  <div className='text-center'>
                    {new Date(item.date.published.value).toLocaleString(locale, {
                      year: 'numeric',
                      month: 'long',
                      day: '2-digit',
                    })}
                  </div>
                  {'updated' in item.date && (
                    <div className='flex flex-row gap-1'>
                      <div className='font-medium'>{content.labels.updated}:</div>
                      <div className='text-center'>
                        {new Date(item.date.updated.value).toLocaleString(locale, {
                          year: 'numeric',
                          month: 'long',
                          day: '2-digit',
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </a>
            );
          })}
        </div>
      </section>
    </MarkdownProvider>
  );
};

export default Blog;
