'use client';
import { useMenu } from '@/app/hooks/useMenu';

import { LocalePostPair } from '@/app/lib/posts';
import { getLocalizedUrl } from 'intlayer';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { FaRedhat } from 'react-icons/fa';
import { LuCircleChevronLeft, LuFilePen, LuFilePlus } from 'react-icons/lu';
import { useIntlayer, useLocale } from 'react-intlayer';

import { MarkdownRenderer } from 'react-intlayer/markdown';
import { Tooltip } from 'react-tooltip';
import MarkdownProvider from '../Custom/MarkdownProvider';
import Title from '../Custom/Title';

const BlogPost = ({ post }: { post: LocalePostPair }) => {
  const id = 'blog';
  const sectionKey = 'blog';
  const { locale } = useLocale();
  const content = useIntlayer(`${sectionKey}-section`, locale);
  const metadata = useIntlayer(`${sectionKey}-page-metadata`, locale);
  const { setActiveMenu } = useMenu();

  useEffect(() => {
    setActiveMenu({ root: 'blog' });
  }, []);

  useEffect(() => {}, [locale]);

  const item = post[locale];

  if (!item) {
    return (
      <section id={id} className='relative max-w-screen mx-auto overflow-hidden px-4 py-16 bg-gray-500'>
        <div
          className={`z-10 absolute inset-0 top-0 h-[70px] bg-gradient-to-br from-gray-800 to-gray-500 opacity-80'}`}
        />
        <p className='font-medium text-center text-lg mt-16 text-gray-100'>{content.notFound}</p>
        <p className='font-medium text-center text-lg mt-16 text-gray-100'>
          <Link
            className='underline hover:no-underline'
            href={getLocalizedUrl('/blog', locale)}
            aria-label={content.labels.viewAll.value}
            title={content.labels.viewAll.value}
            prefetch={true}
          >
            {content.labels.viewAll}
          </Link>
        </p>
      </section>
    );
  }
  return (
    <MarkdownProvider>
      <main>
        <Title title={item.metadata.title + ' - ' + metadata.title.value} />
        <section id={id} className='relative max-w-screen mx-auto overflow-hidden px-4 py-16 bg-gray-50'>
          <div
            className={`z-10 absolute inset-0 top-0 h-[70px] bg-gradient-to-br from-gray-800 to-gray-500 opacity-80'}`}
          />
          <div className={`z-0 absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-50 opacity-80'}`} />
          <div className='relative z-10 max-w-2xl mx-auto mt-10 flex items-start justify-start sm:-left-8'>
            <Link
              className='group text-gray-800'
              href={getLocalizedUrl('/blog', locale)}
              aria-label={content.labels.viewAll.value}
              title={content.labels.viewAll.value}
              prefetch={true}
            >
              <div className='inline-flex gap-2 text-sm'>
                <LuCircleChevronLeft className='text-gray-800' size={20} />
                <span className='font-medium underline underline-offset-2 group-hover:no-underline'>
                  {content.labels.viewAll}
                </span>
              </div>
            </Link>
          </div>
          <div className='relative z-10 mx-auto w-full mt-10 flex flex-col items-center'>
            <article className='prose-custom-all max-w-2xl mx-auto'>
              <h1>{item.metadata.title}</h1>
              <blockquote>{item.metadata.subtitle}</blockquote>
            </article>

            <div className='mt-2 grid grid-cols-2 sm:grid-cols-4 gap-4 items-center text-xs'>
              <p title={content.labels.author.value} className='inline-flex items-center gap-1'>
                <FaRedhat size={14} />
                <span>
                  <strong>
                    <a href={item.metadata.authorUrl}>{item.metadata.authorName}</a>
                  </strong>
                </span>
              </p>
              <p title={content.labels.published.value} className='inline-flex items-center sm:justify-center gap-1'>
                <span>
                  <LuFilePen size={14} />
                </span>
                <span>
                  {new Date(item.metadata.created).toLocaleString(locale, {
                    year: 'numeric',
                    month: 'long',
                    day: '2-digit',
                  })}
                </span>
              </p>

              {item.metadata.updated && (
                <p title={content.labels.updated.value} className='inline-flex items-center sm:justify-center gap-1'>
                  <LuFilePlus size={14} />
                  <span>
                    {new Date(item.metadata.updated).toLocaleString(locale, {
                      year: 'numeric',
                      month: 'long',
                      day: '2-digit',
                    })}
                  </span>
                </p>
              )}
              {item.metadata.updated && (
                <a
                  className='text-left underline hover:no-underline'
                  href={
                    content.history.href({
                      slug: item.metadata.slug,
                      locale,
                    }).value
                  }
                >
                  {content.history.label}
                </a>
              )}
            </div>
            <div className='relative w-full max-w-[600px] aspect-[3/2] my-10'>
              <a href={item.metadata.image} title={item.metadata.title}>
                <Image
                  className='rounded-lg object-cover hover:scale-105 transition-all duration-300'
                  src={item.metadata.image}
                  alt={item.metadata.title}
                  title={item.metadata.title}
                  fill
                />
              </a>
            </div>
            <Tooltip id='tooltip' className='font-medium p-2 rounded-md shadow-lg max-w-xs' />
            <article className='prose-custom-blog text-gray-900 max-w-2xl mx-auto'>
              <MarkdownRenderer>{item.content}</MarkdownRenderer>
            </article>
          </div>
          <div className='relative z-10 max-w-2xl mx-auto mt-10 flex items-center justify-center'>
            <Link
              className='group'
              href={getLocalizedUrl('/blog', locale)}
              aria-label={content.labels.viewAll.value}
              title={content.labels.viewAll.value}
              prefetch={true}
            >
              <div className='inline-flex gap-2 text-sm'>
                <span className='font-medium underline underline-offset-2 group-hover:no-underline'>
                  {content.labels.viewAll}
                </span>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </MarkdownProvider>
  );
};

export default BlogPost;
