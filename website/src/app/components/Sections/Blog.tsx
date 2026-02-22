'use client';

import { getLocalizedUrl } from 'intlayer';
import { MarkdownProvider, useIntlayer } from 'next-intlayer';

import { Link, Pencil } from 'lucide-react';
import Image from 'next/image';
import { useLocale } from 'react-intlayer';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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
          <div className='relative mx-auto my-8 pb-1 rounded-2xl text-center'>
            <div
              className={`z-20 relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg my-8 transition-all duration-300 hover:scale-110`}
            >
              <Pencil className='text-gray-600' size={40} />
            </div>

            {content.title}
            {content.description}
          </div>
        </article>

        <div className='relative z-10 max-w-4xl mx-auto flex flex-col sm:flex-row items-center sm:items-start justify-center gap-10'>
          {content.items.map((item, index) => {
            return (
              <a
                key={`item-${index}`}
                href={getLocalizedUrl(item.href.value, locale)}
                className='relative group flex flex-col w-full sm:w-96 gap-4 items-center bg-gray-200/80 hover:bg-gray-200/90 active:bg-gray-200/80 p-8 rounded-lg'
              >
                <span className='absolute -left-3 -top-3 inline-flex items-center justify-center rounded-full bg-gray-600 text-sm text-center text-white w-10 h-10'>
                  #{index + 1}
                </span>
                <Image
                  className='rounded-lg'
                  src={item.image.src.value}
                  width={item.image.size.value}
                  height={item.image.size.value}
                  alt={item.title.value}
                />
                <h3 className='font-bold text-lg text-center'>{item.title}</h3>
                <p className='text-sm'>{item.subtitle}</p>
                <div className='inline-flex gap-2 text-xs'>
                  <Link size={16} />
                  <p className='underline group-hover:no-underline'>{getLocalizedUrl(item.href.value, locale)}</p>
                </div>
                <p className='text-center text-xs'>
                  {new Date(item.date.published.value).toLocaleString(locale, {
                    year: 'numeric',
                    month: 'long',
                    day: '2-digit',
                  })}
                </p>
              </a>
            );
          })}
        </div>
      </section>
    </MarkdownProvider>
  );
};

export default Blog;
