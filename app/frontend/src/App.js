import React, { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from './components/ThemeProvider';
import { ParallaxSection } from './components/ParallaxSection';
import { ScrollReveal } from './components/ScrollReveal';
import { useTheme } from './components/ThemeProvider';
import { Button } from './components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Separator } from './components/ui/separator';
import { 
  Network, 
  Scale, 
  Activity, 
  Heart, 
  Brain, 
  Shield, 
  Leaf, 
  Star, 
  TrendingUp, 
  Globe, 
  Zap,
  Moon,
  Sun,
  Languages
} from 'lucide-react';

const IconComponent = ({ name, ...props }) => {
  const icons = {
    Network, Scale, Activity, Heart, Brain, Shield, 
    Leaf, Star, TrendingUp, Globe, Zap
  };
  const Icon = icons[name] || Network;
  return <Icon {...props} />;
};

const HeroSection = () => {
  const { themeClasses, content, toggleTheme, toggleLanguage, theme, language } = useTheme();

  return (
    <ParallaxSection className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-purple-100/20" />
      
      {/* Theme and Language Controls */}
      <div className="fixed top-6 right-6 z-50 flex gap-3">
        <Button
          variant="outline"
          size="sm"
          onClick={toggleTheme}
          className={`${themeClasses.card} ${themeClasses.border} backdrop-blur-sm`}
        >
          {theme === 'spiritual' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={toggleLanguage}
          className={`${themeClasses.card} ${themeClasses.border} backdrop-blur-sm`}
        >
          <Languages className="w-4 h-4" />
          <span className="ml-1 text-xs">{language.toUpperCase()}</span>
        </Button>
      </div>

      <div className="container mx-auto px-6 text-center">
        <ScrollReveal delay={200}>
          <h1 className={`text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r ${themeClasses.primary} bg-clip-text text-transparent`}>
            {content.hero.title}
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={400}>
          <h2 className={`text-2xl md:text-3xl mb-8 ${themeClasses.text} opacity-80`}>
            {content.hero.subtitle}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={600}>
          <Card className={`max-w-4xl mx-auto ${themeClasses.card} ${themeClasses.border} border-2`}>
            <CardContent className="p-8">
              <blockquote className={`text-xl md:text-2xl italic ${themeClasses.text} mb-6`}>
                "{content.hero.quote}"
              </blockquote>
            </CardContent>
          </Card>
        </ScrollReveal>

        <ScrollReveal delay={800}>
          <div className={`max-w-5xl mx-auto mt-12 text-lg leading-relaxed ${themeClasses.text} space-y-6`}>
            {content.hero.intro.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-left">{paragraph}</p>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </ParallaxSection>
  );
};

const SectionWithQuote = ({ section, title, children }) => {
  const { themeClasses } = useTheme();

  return (
    <ParallaxSection className="py-20" parallaxOffset={0.3}>
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r ${themeClasses.primary} bg-clip-text text-transparent`}>
            {title}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <Card className={`max-w-4xl mx-auto mb-16 ${themeClasses.card} ${themeClasses.border} border-2`}>
            <CardContent className="p-8">
              <blockquote className={`text-xl md:text-2xl italic text-center ${themeClasses.text}`}>
                "{section.quote}"
              </blockquote>
            </CardContent>
          </Card>
        </ScrollReveal>

        {children}
      </div>
    </ParallaxSection>
  );
};

const IconTextArea = ({ icon, text, index }) => {
  const { themeClasses } = useTheme();

  return (
    <ScrollReveal delay={index * 100} direction="up">
      <Card className={`${themeClasses.card} ${themeClasses.border} hover:shadow-lg transition-all duration-300 hover:scale-105`}>
        <CardContent className="p-6 flex items-center space-x-4">
          <div className={`p-3 rounded-full bg-gradient-to-r ${themeClasses.secondary}`}>
            <IconComponent name={icon} className="w-6 h-6 text-white" />
          </div>
          <p className={`${themeClasses.text} text-sm`}>{text}</p>
        </CardContent>
      </Card>
    </ScrollReveal>
  );
};

const InterconnectednessSection = () => {
  const { content } = useTheme();
  const section = content.sections.interconnectedness;

  return (
    <SectionWithQuote section={section} title={section.title}>
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <ScrollReveal delay={300}>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Summary</h3>
            <p className="text-lg leading-relaxed">{section.summary}</p>
            <p className="text-lg leading-relaxed">{section.details}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={500}>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Experiment</h3>
            <div className="prose prose-lg">
              <p>{section.experiment}</p>
            </div>
            <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2">
              Key Takeaway: {section.keyTakeaway}
            </Badge>
          </div>
        </ScrollReveal>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-16">
        {section.iconAreas.map((area, index) => (
          <IconTextArea key={index} {...area} index={index} />
        ))}
      </div>
    </SectionWithQuote>
  );
};

const NaturesJusticeSection = () => {
  const { content, themeClasses } = useTheme();
  const section = content.sections.naturesJustice;

  return (
    <SectionWithQuote section={section} title={section.title}>
      <div className="max-w-6xl mx-auto space-y-16">
        <ScrollReveal delay={300}>
          <div className="text-center">
            <p className="text-xl leading-relaxed mb-8">{section.summary}</p>
            <div className="grid md:grid-cols-2 gap-8">
              {section.principles.map((principle, index) => (
                <Card key={index} className={`${themeClasses.card} ${themeClasses.border}`}>
                  <CardContent className="p-6">
                    <p className="text-lg">{principle}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12">
          <ScrollReveal delay={500}>
            <Card className={`${themeClasses.card} ${themeClasses.border} border-green-200`}>
              <CardHeader>
                <CardTitle className="text-green-600 flex items-center">
                  <TrendingUp className="w-6 h-6 mr-2" />
                  Positive Consequences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {section.positiveConsequences.map((consequence, index) => (
                  <p key={index} className="text-sm leading-relaxed">{consequence}</p>
                ))}
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={700}>
            <Card className={`${themeClasses.card} ${themeClasses.border} border-orange-200`}>
              <CardHeader>
                <CardTitle className="text-orange-600 flex items-center">
                  <Zap className="w-6 h-6 mr-2" />
                  Negative Consequences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {section.negativeConsequences.map((consequence, index) => (
                  <p key={index} className="text-sm leading-relaxed">{consequence}</p>
                ))}
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={900}>
          <Card className={`${themeClasses.card} ${themeClasses.border} border-purple-200`}>
            <CardContent className="p-8 text-center">
              <p className="text-lg italic mb-4">{section.insight}</p>
              <Separator className="my-6" />
              <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 text-sm">
                {section.keyTakeaway}
              </Badge>
            </CardContent>
          </Card>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {section.iconAreas.map((area, index) => (
            <IconTextArea key={index} {...area} index={index} />
          ))}
        </div>
      </div>
    </SectionWithQuote>
  );
};

const HealthSection = () => {
  const { content, themeClasses } = useTheme();
  const section = content.sections.health;

  return (
    <SectionWithQuote section={section} title={section.title}>
      <div className="max-w-6xl mx-auto space-y-16">
        <ScrollReveal delay={300}>
          <div className="text-center space-y-8">
            <p className="text-xl leading-relaxed">{section.summary}</p>
            <p className="text-lg leading-relaxed italic">{section.relationships}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={500}>
          <Card className={`${themeClasses.card} ${themeClasses.border} border-purple-200`}>
            <CardHeader>
              <CardTitle className="text-purple-600 flex items-center justify-center">
                <Activity className="w-6 h-6 mr-2" />
                Organ-Action-Consequence Analogy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg leading-relaxed">{section.organAnalogy}</p>
              <blockquote className="text-lg italic border-l-4 border-purple-400 pl-6 py-4 bg-purple-50/50 rounded-r-lg">
                "{section.organQuote}"
              </blockquote>
              <div className="space-y-4">
                {section.healthPrinciples.map((principle, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0" />
                    <p className="text-base leading-relaxed">{principle}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {section.iconAreas.map((area, index) => (
            <IconTextArea key={index} {...area} index={index} />
          ))}
        </div>
      </div>
    </SectionWithQuote>
  );
};

const ExamplesSection = () => {
  const { content, themeClasses } = useTheme();
  const section = content.sections.examples;

  return (
    <SectionWithQuote section={section} title={section.title}>
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="grid md:grid-cols-2 gap-8">
          {section.examples.map((example, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <Card className={`${themeClasses.card} ${themeClasses.border} h-full hover:shadow-lg transition-all duration-300`}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Badge className={`bg-gradient-to-r ${themeClasses.secondary} text-white mr-3`}>
                      {example.category}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base leading-relaxed">{example.description}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={600}>
          <Card className={`${themeClasses.card} ${themeClasses.border} border-indigo-200`}>
            <CardHeader>
              <CardTitle className="text-indigo-600 text-center">Understanding Nature's Language</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed italic text-center">{section.natureLanguage}</p>
            </CardContent>
          </Card>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {section.iconAreas.map((area, index) => (
            <IconTextArea key={index} {...area} index={index} />
          ))}
        </div>
      </div>
    </SectionWithQuote>
  );
};

const CompletionSection = () => {
  const { content, themeClasses } = useTheme();
  const section = content.sections.completion;

  return (
    <ParallaxSection className="py-20" parallaxOffset={0.2}>
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r ${themeClasses.primary} bg-clip-text text-transparent`}>
            {section.title}
          </h2>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto space-y-12">
          <ScrollReveal delay={200}>
            <p className="text-xl leading-relaxed text-center">{section.summary}</p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <Card className={`${themeClasses.card} ${themeClasses.border} border-2`}>
              <CardContent className="p-8">
                <blockquote className={`text-2xl md:text-3xl italic text-center ${themeClasses.text}`}>
                  "{section.quote}"
                </blockquote>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <div className="text-center">
              <p className="text-lg leading-relaxed mb-8">{section.conclusion}</p>
              <div className={`w-24 h-1 bg-gradient-to-r ${themeClasses.primary} mx-auto rounded-full`} />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </ParallaxSection>
  );
};

const VideoSection = () => {
  const { themeClasses } = useTheme();

  return (
    <ParallaxSection className="py-20 relative" parallaxOffset={0.4}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10" />
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h3 className={`text-3xl font-bold mb-6 bg-gradient-to-r ${themeClasses.primary} bg-clip-text text-transparent`}>
              Experience the Interconnected Flow
            </h3>
            <p className={`text-lg ${themeClasses.text} opacity-80`}>
              A visual journey through the principles of Logical Spirituality
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <Card className={`max-w-4xl mx-auto ${themeClasses.card} ${themeClasses.border} overflow-hidden`}>
            <CardContent className="p-0">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${themeClasses.primary} rounded-full flex items-center justify-center mx-auto`}>
                    <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1" />
                  </div>
                  <p className={`text-lg font-medium ${themeClasses.text}`}>Video Placeholder</p>
                  <p className={`text-sm ${themeClasses.text} opacity-70`}>Interactive content area for future video integration</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </ParallaxSection>
  );
};

const App = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <HeroSection />
        <InterconnectednessSection />
        <NaturesJusticeSection />
        <HealthSection />
        <ExamplesSection />
        <VideoSection />
        <CompletionSection />
      </div>
    </ThemeProvider>
  );
};

export default App;