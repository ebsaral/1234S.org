import { Analytics } from '@vercel/analytics/next';
import { LocalPromiseParams, type NextLayoutIntlayer, generateStaticParams } from "next-intlayer";
import { getHTMLTextDir, getIntlayer, getMultilingualUrls } from "intlayer";
import type { Metadata } from "next";

import { Inter, Playfair_Display } from 'next/font/google'
import "../globals.css";
import "../App.css";

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
  const multilingualUrls = getMultilingualUrls("/");

  return {
    ...metadata,
    alternates: {
      canonical: multilingualUrls[locale as keyof typeof multilingualUrls],
      languages: { ...multilingualUrls, "x-default": "/" },
    },
    openGraph: {
      url: multilingualUrls[locale],
    },
  };
};

const inter = Inter({ 
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-inter"
});

const playfair = Playfair_Display({ 
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-playfair"
})

const LocaleLayout: NextLayoutIntlayer = async ({ children, params }) => {
  const { locale } = await params;
  return (
    <html lang={locale} dir={getHTMLTextDir(locale)} className={`${inter.variable} ${playfair.variable}`}>
      <body>
        {children}
        <Analytics />  
      </body>
    </html>
  );
};

export default LocaleLayout;