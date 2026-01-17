import Support from '@/app/components/Pages/Support';
import { getIntlayer, getMultilingualUrls } from 'intlayer';
import type { Metadata } from 'next';
import { LocalPromiseParams, type NextPageIntlayer } from 'next-intlayer';

export const generateMetadata = async ({ params }: LocalPromiseParams): Promise<Metadata> => {
  const { locale } = await params;

  const metadata = getIntlayer('support-page-metadata', locale);

  const url = 'https://www.1234s.org/support';
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

const Page: NextPageIntlayer = async ({ params }) => {
  const { locale } = await params;

  return <Support locale={locale} />;
};

export default Page;
