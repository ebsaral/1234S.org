import BlogPost from '@/app/components/Pages/BlogPost';
import { getPost } from '@/app/lib/posts';
import { getIntlayer, getMultilingualUrls } from 'intlayer';
import type { Metadata } from 'next';
import { LocalPromiseParams, type NextPageIntlayer } from 'next-intlayer';

export const generateMetadata = async ({ params }: LocalPromiseParams<{ slug: string }>): Promise<Metadata> => {
  const { locale, slug } = await params;

  const metadata = getIntlayer('blog-page-metadata', locale);
  const post = getPost(slug)[locale];

  const url = 'https://www.1234s.org/blog/' + slug;
  const multilingualUrls = getMultilingualUrls(url);

  const openGraph = post
    ? {
        type: 'website',
        images: [
          {
            url: 'https://www.1234s.org' + post.metadata.image,
            secureUrl: 'https://1234s.org' + post.metadata.image,
          },
        ],
      }
    : metadata.openGraph;

  return {
    ...metadata,
    title: post ? post.metadata.title : metadata.title,
    description: post ? post.metadata.subtitle : metadata.description,
    alternates: {
      canonical: multilingualUrls[locale as keyof typeof multilingualUrls],
      languages: { ...multilingualUrls, 'x-default': url },
    },
    openGraph: {
      ...openGraph,
      url: multilingualUrls[locale as keyof typeof multilingualUrls],
    },
  };
};

const Page: NextPageIntlayer<{ slug: string }> = async ({ params }) => {
  const { slug } = await params;
  return <BlogPost post={getPost(slug)} />;
};

export default Page;
