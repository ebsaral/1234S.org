import { IntlayerClientProvider, type NextPageIntlayer } from "next-intlayer";
import { IntlayerServerProvider } from "next-intlayer/server";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ProjectSection from "../../components/ProjectSection";
import { LocalPromiseParams } from "next-intlayer";
import { getIntlayer, getMultilingualUrls } from "intlayer";
import type { Metadata } from "next";
import StorySection from "@/app/components/StorySection";


export const generateMetadata = async ({
  params,
}: LocalPromiseParams): Promise<Metadata> => {
  const { locale } = await params;

  const metadata = getIntlayer("mission-page-metadata", locale);
  
  const url = "https://www.1234s.org/mission";
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

const Page: NextPageIntlayer = async ({params}) => {
  const { locale } = await params;

  return (
    <IntlayerServerProvider locale={locale}>
      <IntlayerClientProvider locale={locale}>
        <div className="App">
          <Header />
          <div id="home"></div>
          <main>
            <StorySection />
            <ProjectSection />
          </main>
          
          <Footer />
        </div>
      </IntlayerClientProvider>
    </IntlayerServerProvider>
  );
}

export default Page;