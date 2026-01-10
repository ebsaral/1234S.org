import { IntlayerClientProvider, type NextPageIntlayer } from "next-intlayer";
import { IntlayerServerProvider } from "next-intlayer/server";

import Header from "@/app/components/Header";
import HeroSection from "@/app/components/HeroSection";
import IntroTextSection from "@/app/components/IntroTextSection";
import EndingSection from "@/app/components/EndingSection";
import Footer from "@/app/components/Footer";
import InterconnectednessSection from "../../components/InterconnectednessSection";
import JusticeSection from "../../components/JusticeSection";
import HealthSection from "../../components/HealthSection";
import { LocalPromiseParams } from "next-intlayer";
import { getIntlayer, getMultilingualUrls } from "intlayer";
import type { Metadata } from "next";


export const generateMetadata = async ({
  params,
}: LocalPromiseParams): Promise<Metadata> => {
  const { locale } = await params;

  const metadata = getIntlayer("philosophy-page-metadata", locale);
  
  const url = "https://www.1234s.org/philosophy";
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
            <HeroSection />
            {/* <VideoSection /> */}
            <IntroTextSection id="intro" />
            <InterconnectednessSection />
            <JusticeSection />
            <HealthSection />
            <EndingSection id="ending" />
          </main>
          
          <Footer />
        </div>
      </IntlayerClientProvider>
    </IntlayerServerProvider>
  );
}

export default Page;