import React from "react";
import "./App.css";
import { LanguageProvider } from "./contexts/LanguageContext";
import Meta from "./components/Meta";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import VideoSection from "./components/VideoSection";
import IntroTextSection from "./components/IntroTextSection";
import ContentSection from "./components/ContentSection";
import EndingSection from "./components/EndingSection";
import Footer from "./components/Footer";
import { Globe, Scale, Heart, Lightbulb } from 'lucide-react';
import { data } from "./data/data";


function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Meta />
        <Header />
        
        <main>
          <HeroSection />
          
          <VideoSection />
          
          <IntroTextSection
            id="intro"
          />
          
          <ContentSection 
            sectionKey="interconnectedness"
            id="interconnectedness"
            icon={Globe}
            bgImage={data.images.interconnectedness}
          />
          
          <ContentSection 
            sectionKey="justiceInNature"
            id="justice-in-nature"
            icon={Scale}
            bgImage={data.images.naturesJustice}
          />
          
          <ContentSection 
            sectionKey="health"
            id="health"
            icon={Heart}
            bgImage={data.images.health}
          />
          
          <ContentSection 
            sectionKey="examples"
            id="examples"
            icon={Lightbulb}
            bgImage={data.images.examples}
          />

          <EndingSection
            id="ending"
          />
        </main>
        
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;