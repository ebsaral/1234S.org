'use client';

import { useMenu } from '@/app/hooks/useMenu';
import { Post } from '@/app/lib/posts';
import Fuse from 'fuse.js';
import { getLocalizedUrl } from 'intlayer';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { LuFileClock, LuFilePen, LuFilePlus } from 'react-icons/lu';
import { useIntlayer, useLocale } from 'react-intlayer';
import readingTime from 'reading-time';
import CustomPencil from '../Custom/CustomPencil';
import MarkdownProvider from '../Custom/MarkdownProvider';
import SearchBox from '../Custom/SearchBox';
import Title from '../Custom/Title';

const Blog = ({ posts }: { posts: Post[] }) => {
  const metadata = useIntlayer('blog-page-metadata');

  const { setActiveMenu } = useMenu();
  const id = 'blog';
  const sectionKey = 'blog';
  const content = useIntlayer(`${sectionKey}-section`);
  const { locale } = useLocale();
  const [searchText, setSearchText] = useState('');

  const refs = useRef<(HTMLImageElement | null)[]>([]);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(Array(posts.length).fill(false));

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
        threshold: 0.2, // trigger when X of the item is visible
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
  }, [searchText]);

  const fuse = new Fuse<Post>(posts, {
    keys: ['metadata.title', 'metadata.subtitle', 'content'], // fields to search
    threshold: 0.2, // fuzzy search tolerance (0 = exact, 1 = very fuzzy)
    ignoreLocation: true, // prevents Fuse from scoring low just because the word is far into the string.
  });

  useEffect(() => {
    setActiveMenu({ root: 'blog' });
  }, []);

  const getItems = () => {
    const searchedPosts: Post[] = searchText ? fuse.search(searchText).map((r) => r.item) : posts;
    const items = searchedPosts.filter((post) => post.metadata.locale == locale);
    const sorted = items.sort((a, b) => {
      const aDate = a.metadata.updated ?? a.metadata.created;
      const bDate = b.metadata.updated ?? b.metadata.created;
      return new Date(bDate).getTime() - new Date(aDate).getTime();
    });

    return sorted;
  };

  return (
    <MarkdownProvider>
      <main>
        <Title title={metadata.title.value} />
        <section
          id={id}
          className='relative max-w-screen mx-auto overflow-hidden px-4 py-16 bg-gradient-to-br from-gray-400 to-green-100'
        >
          <div
            className={`z-10 absolute inset-0 top-0 h-[70px] bg-gradient-to-br from-gray-800 to-gray-500 opacity-80'}`}
          />
          <article className='prose-custom-all max-w-4xl mx-auto text-gray-900 [&_p:last-child]:font-medium'>
            <div className='relative mx-auto mb-2 pb-1 rounded-2xl text-center'>
              <CustomPencil />
              {content.title}
              {content.description}
            </div>
          </article>
          <div className='max-w-4xl mx-auto mb-8 flex flex-col items-center justify-center gap-4'>
            <SearchBox placeholder={content.labels.search.value} onSearch={(value) => setSearchText(value)} />
          </div>

          <div className='max-w-4xl mx-auto grid grid-cols-1 content-between justify-items-center gap-10'>
            {getItems().map((item, index) => {
              const stats = readingTime(item.content);
              const minutes = Math.max(1, Math.round(stats.minutes));
              return (
                <a
                  key={`item-${index}`}
                  href={getLocalizedUrl(`/blog/${item.metadata.slug}`, locale)}
                  title={item.metadata.title}
                  className='relative flex flex-col sm:flex-row w-full gap-6 sm:gap-14 items-center bg-gray-100/90 hover:bg-gray-100 active:bg-gray-100 p-8 rounded-lg'
                >
                  <Image
                    ref={(el) => {
                      refs.current[index] = el;
                    }}
                    data-index={index}
                    className={`relative w-80 h-44 sm:h-64 object-cover transition-all rounded-lg transform duration-700 ease-out transform-origin-center ${
                      visibleItems[index] ? 'scale-110 sm:scale-105' : 'scale-100'
                    }`}
                    src={item.metadata.image}
                    width={400}
                    height={400}
                    alt={item.metadata.title}
                  />
                  <div className='relative sm:h-full flex flex-col gap-5 items-center sm:items-start'>
                    <h3 className='font-bold text-xl sm:text-4xl text-center sm:text-left'>{item.metadata.title}</h3>

                    <p className='text-sm sm:text-lg'>{item.metadata.subtitle}</p>

                    <div className='mt-auto flex flex-row gap-4 sm:gap-6 text-xs sm:text-sm text-gray-800'>
                      <div className='inline-flex items-center gap-1'>
                        <LuFilePen size={14} />
                        {new Date(item.metadata.created).toLocaleString(locale, {
                          year: 'numeric',
                          month: 'short',
                          day: '2-digit',
                        })}
                      </div>
                      {item.metadata.updated && (
                        <div className='inline-flex items-center gap-1'>
                          <LuFilePlus size={14} />
                          <div className='text-center'>
                            {new Date(item.metadata.updated).toLocaleString(locale, {
                              year: 'numeric',
                              month: 'short',
                              day: '2-digit',
                            })}
                          </div>
                        </div>
                      )}
                      <div className='inline-flex gap-1 items-center justify-center text-xs text-center'>
                        <LuFileClock size={14} />
                        {content.labels.readingTime({ min: minutes })}
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </section>
      </main>
    </MarkdownProvider>
  );
};

export default Blog;
