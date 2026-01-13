import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { LocalPromiseParams, type NextLayoutIntlayer, generateStaticParams } from "next-intlayer";
import { getHTMLTextDir, getIntlayer, getMultilingualUrls } from "intlayer";
import type { Metadata } from "next";

import { Noto_Sans } from 'next/font/google'
import "../globals.css";
import "../App.css";
import BudgetIssue from '../components/Custom/BudgetIssue';
import { Bounce, ToastContainer } from 'react-toastify';

export { generateStaticParams };

export const generateMetadata = async ({
  params,
}: LocalPromiseParams): Promise<Metadata> => {
  const { locale } = await params;

  const metadata = getIntlayer("page-metadata", locale);

  /**
   * Generates an object containing all url for each locale.
   *
   * Example:
   * ```ts
   *  getMultilingualUrls('/about');
   *
   *  // Returns
   *  // {
   *  //   en: '/about',
   *  //   fr: '/fr/about',
   *  //   es: '/es/about',
   *  // }
   * ```
   */
  
  const url = "https://www.1234s.org";
  const multilingualUrls = getMultilingualUrls(url);

  return {
    ...metadata,
    alternates: {
      canonical: multilingualUrls[locale as keyof typeof multilingualUrls],
      languages: { ...multilingualUrls, "x-default": url },
    },
    openGraph: {
      ...metadata.openGraph,
      url: multilingualUrls[locale as keyof typeof multilingualUrls],
    },
  };
};

const noto_sans = Noto_Sans({ 
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-noto"
});

const LocaleLayout: NextLayoutIntlayer = async ({ children, params }) => {
  const { locale } = await params;
  return (
    <html lang={locale} dir={getHTMLTextDir(locale)} className={`${noto_sans.variable}`}>
      <head>
        <meta name="robots" content="all" />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
        <BudgetIssue />
        <ToastContainer
          position="top-left"
          autoClose={2000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnHover={false}
          theme="light"
          transition={Bounce}
          />
      </body>
    </html>
  );
};

export default LocaleLayout;