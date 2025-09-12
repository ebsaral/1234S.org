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
import { mockData } from "./data/mock";


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
            bgImage={mockData.images.interconnectedness}
          />
          
          <ContentSection 
            sectionKey="justiceInNature"
            id="justice-in-nature"
            icon={Scale}
            bgImage={mockData.images.naturesJustice}
          />
          
          <ContentSection 
            sectionKey="health"
            id="health"
            icon={Heart}
            bgImage={mockData.images.health}
          />
          
          <ContentSection 
            sectionKey="examples"
            id="examples"
            icon={Lightbulb}
            bgImage={mockData.images.examples}
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