'use client';

import { useMenu } from '@/app/hooks/useMenu';
import { useIntlayer } from 'next-intlayer';
import { useEffect } from 'react';
import Title from '../Custom/Title';
import BlogSection from '../Sections/Blog';

const Blog = () => {
  const content = useIntlayer('blog-page-metadata');
  const { setActiveMenu } = useMenu();
  useEffect(() => {
    setActiveMenu({ root: 'blog' });
  }, []);
  return (
    <main>
      <Title title={content.title.value} />
      <BlogSection />
    </main>
  );
};

export default Blog;
