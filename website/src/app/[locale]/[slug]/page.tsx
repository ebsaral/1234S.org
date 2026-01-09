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
import ProjectSection from "../../components/ProjectSection";
import { notFound } from "next/navigation";

const Page: NextPageIntlayer<{slug: string}> = async ({params}) => {
  const { locale, slug } = await params;
  if(!["spirituality", "maneviyat"].includes(slug)) {
    notFound();
  }

  return (
    <IntlayerServerProvider locale={locale}>
      <IntlayerClientProvider locale={locale}>
        <div className="App">
          <Header />
          <main>
            <HeroSection />
            {/* <VideoSection /> */}
            <IntroTextSection id="intro" />
            <InterconnectednessSection />
            <JusticeSection />
            <HealthSection />
            <ProjectSection />
            <EndingSection id="ending" />
          </main>
          
          <Footer />
        </div>
      </IntlayerClientProvider>
    </IntlayerServerProvider>
  );
}

export default Page;