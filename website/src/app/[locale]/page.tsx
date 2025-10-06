import { IntlayerClientProvider, type NextPageIntlayer } from "next-intlayer";
import { IntlayerServerProvider } from "next-intlayer/server";

import Header from "@/app/components/Header";
import HeroSection from "@/app/components/HeroSection";
import IntroTextSection from "@/app/components/IntroTextSection";
import ContentSection from "@/app/components/ContentSection";
import EndingSection from "@/app/components/EndingSection";
import Footer from "@/app/components/Footer";

const Page: NextPageIntlayer = async ({ params }) => {
  const { locale } = await params;

  return (
    <IntlayerServerProvider locale={locale}>
      <IntlayerClientProvider locale={locale}>
        <div className="App">
          <Header />
          
          <main>
            <HeroSection />
            
            {/* <VideoSection /> */}
            
            <IntroTextSection
              id="intro"
            />
            
            <ContentSection 
              sectionKey="interconnectedness"
              id="interconnectedness"
            />
            
            <ContentSection 
              sectionKey="justiceInNature"
              id="justice-in-nature"
            />
            
            <ContentSection 
              sectionKey="health"
              id="health"
            />
            
            <ContentSection 
              sectionKey="movement"
              id="movement"
            />
  
            <EndingSection
              id="ending"
            />
          </main>
          
          <Footer />
        </div>
      </IntlayerClientProvider>
    </IntlayerServerProvider>
  );
}

export default Page;