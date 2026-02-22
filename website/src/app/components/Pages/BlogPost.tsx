'use client';
import { useMenu } from '@/app/hooks/useMenu';
import { MarkdownProvider, useIntlayer } from 'next-intlayer';

import { useLocale } from 'next-intlayer';
import Image from 'next/image';
import { useEffect } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Title from '../Custom/Title';

const BlogPost = ({ slug }: { slug: string }) => {
  const id = 'blog';
  const sectionKey = 'blog';
  const { locale } = useLocale();
  const content = useIntlayer(`${sectionKey}-section`, locale);
  const metadata = useIntlayer(`${sectionKey}-page-metadata`, locale);
  const { setActiveMenu } = useMenu();
  useEffect(() => {
    setActiveMenu({ root: 'blog' });
  }, []);

  const post = content.items.find((item) => 'slug' in item && item.slug.value == slug);

  if (!post) {
    return (
      <section id={id} className='relative max-w-screen mx-auto overflow-hidden px-4 py-16 bg-gray-500'>
        <div className={`z-0 absolute inset-0 bg-gradient-to-br from-gray-500 to-gray-100   opacity-80'}`} />
        {content.notFound}
      </section>
    );
  }

  return (
    <main>
      <Title title={post.title.value + ' - ' + metadata.title.value} />
      <MarkdownProvider renderMarkdown={(markdown) => <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>}>
        <section id={id} className='relative max-w-screen mx-auto overflow-hidden px-4 py-16 bg-gray-500'>
          <div className={`z-0 absolute inset-0 bg-gradient-to-br from-gray-500 to-gray-100 opacity-80'}`} />
          <div className='relative z-10 mx-auto w-full mt-10 flex flex-col items-center'>
            <article className='prose-custom-all max-w-4xl mx-auto'>
              <h1>{post.title}</h1>
              <blockquote>{post.subtitle}</blockquote>
            </article>
            <Image className='rounded-lg' src={post.image.src.value} width={500} height={500} alt={post.title.value} />

            <article className='prose-custom-all text-gray-900 max-w-4xl mx-auto'>
              {'content' in post && post?.content[locale]}
            </article>

            <div className='mt-10 flex flex-row gap-10 items-center text-xs'>
              <p className='flex flex-col gap-2'>
                <span>{content.labels.author}</span>
                <span>
                  <strong>
                    <a href={post.author.href.value}>{post.author.title}</a>
                  </strong>
                </span>
              </p>
              <p className='flex flex-col gap-2'>
                <span>{content.labels.published}</span>
                <span>
                  <strong>
                    {new Date(post.date.published.value).toLocaleString(locale, {
                      year: 'numeric',
                      month: 'long',
                      day: '2-digit',
                    })}
                  </strong>
                </span>
              </p>
              {'updated' in post.date && (
                <p className='flex flex-col gap-2'>
                  <span>{content.labels.updated}</span>
                  <span>
                    <strong>
                      {new Date(post.date.updated.value).toLocaleString(locale, {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit',
                      })}
                    </strong>
                  </span>
                </p>
              )}
            </div>
          </div>
        </section>
      </MarkdownProvider>
    </main>
  );
};

export default BlogPost;
