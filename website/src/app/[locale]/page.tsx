import { type NextPageIntlayer } from 'next-intlayer';

import HomePage from '@/app/components/Pages/Home';

const Page: NextPageIntlayer = async ({ params }) => {
  const { locale } = await params;

  return <HomePage locale={locale} />;
};

export default Page;
