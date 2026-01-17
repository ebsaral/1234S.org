import Philosophy from '@/app/components/Pages/Philosophy2';
import { getIntlayer, getMultilingualUrls } from 'intlayer';
import type { Metadata } from 'next';
import { LocalPromiseParams, type NextPageIntlayer } from 'next-intlayer';

export const generateMetadata = async ({ params }: LocalPromiseParams): Promise<Metadata> => {
  const { locale } = await params;

  const metadata = getIntlayer('philosophy-page-metadata', locale);

  const url = 'https://www.1234s.org/philosophy';
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

  return <Philosophy locale={locale} />;
};

export default Page;
