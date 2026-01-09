import { IntlayerClientProvider, type NextPageIntlayer } from "next-intlayer";
import { IntlayerServerProvider } from "next-intlayer/server";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const Page: NextPageIntlayer = async ({ params }) => {
  const { locale } = await params;

  return (
    <IntlayerServerProvider locale={locale}>
      <IntlayerClientProvider locale={locale}>
        <div className="App">
          <Header />
          
          <main>
            
          </main>
          
          <Footer />
        </div>
      </IntlayerClientProvider>
    </IntlayerServerProvider>
  );
}

export default Page;