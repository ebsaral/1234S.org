'use client';

import { useMenu } from '@/app/hooks/useMenu';
import { Post } from '@/app/lib/posts';
import Fuse from 'fuse.js';
import { getLocalizedUrl } from 'intlayer';
import { ArrowDownWideNarrow } from 'lucide-react';
import { MarkdownProvider, useIntlayer, useLocale } from 'next-intlayer';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import CustomPencil from '../Custom/CustomPencil';
import Filter from '../Custom/Filter';
import SearchBox from '../Custom/SearchBox';
import Title from '../Custom/Title';

enum SortBy {
  Created = 'created',
  Updated = 'updated',
}

enum SortIn {
  ASC = 'asc',
  DESC = 'desc',
}

const Blog = ({ posts }: { posts: Post[] }) => {
  const metadata = useIntlayer('blog-page-metadata');

  const { setActiveMenu } = useMenu();
  const id = 'blog';
  const sectionKey = 'blog';
  const content = useIntlayer(`${sectionKey}-section`);
  const { locale } = useLocale();
  const [sortBy, setSortBy] = useState(SortBy.Updated);
  const [sortIn, setSortIn] = useState(SortIn.DESC);
  const [searchText, setSearchText] = useState('');

  const fuse = new Fuse<Post>(posts, {
    keys: ['metadata.title', 'metadata.subtitle', 'content'], // fields to search
    threshold: 0.2, // fuzzy search tolerance (0 = exact, 1 = very fuzzy)
    ignoreLocation: true, // prevents Fuse from scoring low just because the word is far into the string.
  });

  useEffect(() => {
    setActiveMenu({ root: 'blog' });
  }, []);

  useEffect(() => {}, [locale, sortBy]);

  const getItems = () => {
    const searchedPosts: Post[] = searchText ? fuse.search(searchText).map((r) => r.item) : posts;
    const items = searchedPosts.filter((post) => post.metadata.locale == locale);
    const sorted = items.sort((a, b) => {
      const aDate = sortBy === SortBy.Created ? a.metadata.created : (a.metadata.updated ?? a.metadata.created);
      const bDate = sortBy === SortBy.Created ? b.metadata.created : (b.metadata.updated ?? b.metadata.created);
      if (sortIn === SortIn.DESC) {
        return new Date(bDate).getTime() - new Date(aDate).getTime();
      } else {
        return new Date(aDate).getTime() - new Date(bDate).getTime();
      }
    });

    if (searchText) {
    }

    return sorted;
  };

  return (
    <main>
      <Title title={metadata.title.value} />
      <MarkdownProvider renderMarkdown={(markdown) => <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>}>
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

            <div className='w-full max-w-md mx-auto flex items-center justify-center gap-2 sm:gap-5'>
              <ArrowDownWideNarrow />

              <Filter
                defaultValue={SortIn.DESC}
                onChange={(value) => setSortIn(value as SortIn)}
                values={[
                  { value: SortIn.DESC, label: content.labels.desc.value },
                  { value: SortIn.ASC, label: content.labels.asc.value },
                ]}
              />
              <Filter
                defaultValue={SortBy.Updated}
                onChange={(value) => setSortBy(value as SortBy)}
                values={[
                  { value: SortBy.Updated, label: content.labels.byUpdateDate.value },
                  { value: SortBy.Created, label: content.labels.byCreateDate.value },
                ]}
              />
            </div>
          </div>

          <div className='max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 content-between justify-items-center gap-10'>
            {getItems().map((item, index) => {
              return (
                <a
                  key={`item-${index}`}
                  href={getLocalizedUrl(`/blog/${item.metadata.slug}`, locale)}
                  className='relative group flex flex-col w-full gap-4 items-center bg-gray-100/90 hover:bg-gray-100 active:bg-gray-100 p-8 rounded-lg'
                >
                  <Image
                    className='mb-5 sm:h-36 group-hover:scale-105 transition-all duration-300 rounded-lg'
                    src={item.metadata.image}
                    width={200}
                    height={200}
                    alt={item.metadata.title}
                  />
                  <h3 className='font-bold text-lg text-center sm:min-h-[56px] line-clamp-2 inline-flex items-center'>
                    {item.metadata.title}
                  </h3>

                  <p className='text-sm'>{item.metadata.subtitle}</p>

                  <div className='mt-auto flex flex-col gap-2 text-xs'>
                    <div className='text-center'>
                      {new Date(item.metadata.created).toLocaleString(locale, {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit',
                      })}
                    </div>
                    {item.metadata.updated && (
                      <div className='flex flex-row gap-1'>
                        <div className='font-medium'>{content.labels.updated}:</div>
                        <div className='text-center'>
                          {new Date(item.metadata.updated).toLocaleString(locale, {
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
    </main>
  );
};

export default Blog;
