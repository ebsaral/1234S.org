import Blog from '@/app/components/Pages/Blog';
import BlogPost from '@/app/components/Pages/BlogPost';
import { getIntlayer, getMultilingualUrls } from 'intlayer';
import type { Metadata } from 'next';
import { LocalPromiseParams, type NextPageIntlayer } from 'next-intlayer';

export const generateMetadata = async ({ params }: LocalPromiseParams<{ slug: string }>): Promise<Metadata> => {
  const { locale, slug } = await params;

  const metadata = getIntlayer('blog-page-metadata', locale);

  const url = 'https://www.1234s.org/blog';
  const multilingualUrls = getMultilingualUrls(url);

  return {
    ...metadata,
    alternates: {
      canonical: multilingualUrls[locale as keyof typeof multilingualUrls],
      languages: { ...multilingualUrls, 'x-default': url },
    },
    openGraph: {
      ...metadata.openGraph,
      url: multilingualUrls[locale as keyof typeof multilingualUrls],
    },
  };
};

const Page: NextPageIntlayer<{ slug: string }> = async ({ params }) => {
  const { slug } = await params;
  return <BlogPost slug={slug} />;
};

export default Page;
