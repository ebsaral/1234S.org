'use client';
import { useMenu } from '@/app/hooks/useMenu';
import { MarkdownProvider, useIntlayer } from 'next-intlayer';

import { Post } from '@/app/lib/posts';
import { useLocale } from 'next-intlayer';
import Image from 'next/image';
import { useEffect } from 'react';
import { default as Markdown, default as ReactMarkdown } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Title from '../Custom/Title';

const BlogPost = ({ post }: { post: Post }) => {
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
      </section>
    );
  }
  return (
    <main>
      <Title title={item.metadata.title + ' - ' + metadata.title.value} />
      <MarkdownProvider renderMarkdown={(markdown) => <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>}>
        <section id={id} className='relative max-w-screen mx-auto overflow-hidden px-4 py-16 bg-gray-50'>
          <div
            className={`z-10 absolute inset-0 top-0 h-[70px] bg-gradient-to-br from-gray-800 to-gray-500 opacity-80'}`}
          />
          <div className={`z-0 absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-50 opacity-80'}`} />
          <div className='relative z-10 mx-auto w-full mt-10 flex flex-col items-center'>
            <article className='prose-custom-all max-w-2xl mx-auto'>
              <h1>{item.metadata.title}</h1>
              <blockquote>{item.metadata.subtitle}</blockquote>
            </article>

            <div className='mt-5 grid grid-cols-2 gap-4 items-center text-xs'>
              <p className='flex flex-row gap-2'>
                <span>{content.labels.author}</span>
                <span>
                  <strong>
                    <a href={item.metadata.authorUrl}>{item.metadata.authorName}</a>
                  </strong>
                </span>
              </p>
              <p className='flex flex-row gap-2'>
                <span>{content.labels.published}</span>
                <span>
                  <strong>
                    {new Date(item.metadata.created).toLocaleString(locale, {
                      year: 'numeric',
                      month: 'short',
                      day: '2-digit',
                    })}
                  </strong>
                </span>
              </p>

              {item.metadata.updated && (
                <p className='flex flex-row gap-2'>
                  <span>{content.labels.updated}</span>
                  <span>
                    <strong>
                      {new Date(item.metadata.updated).toLocaleString(locale, {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit',
                      })}
                    </strong>
                  </span>
                </p>
              )}
              {item.metadata.updated && (
                <p>
                  <a
                    className='underline hover:no-underline hover:opacity-85'
                    href={
                      content.history.href({
                        slug: item.metadata.slug,
                        locale,
                      }).value
                    }
                  >
                    {content.history.label}
                  </a>
                </p>
              )}
            </div>

            <Image
              className='my-10 rounded-lg hover:scale-105 transition-all duration-300'
              src={item.metadata.image}
              width={500}
              height={500}
              alt={item.metadata.title}
              title={item.metadata.title}
            />

            <article className='prose-custom-all text-gray-900 max-w-2xl mx-auto'>
              <ReactMarkdown>{item.content}</ReactMarkdown>
            </article>
          </div>
        </section>
      </MarkdownProvider>
    </main>
  );
};

export default BlogPost;
