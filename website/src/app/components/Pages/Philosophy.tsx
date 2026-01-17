import { LocalesValues } from 'intlayer';
import HeroSection from '../Sections/HeroSection';
import IntroTextSection from '../Sections/IntroTextSection';
import InterconnectednessSection from '../Sections/InterconnectednessSection';
import JusticeSection from '../Sections/JusticeSection';
import HealthSection from '../Sections/HealthSection';
import EndingSection from '../Sections/EndingSection';

const Philosophy = ({ locale }: { locale: LocalesValues }) => {
  return (
    <main>
      <HeroSection />
      <IntroTextSection id='intro' />
      <InterconnectednessSection />
      <JusticeSection />
      <HealthSection />
      <EndingSection id='ending' />
    </main>
  );
};

export default Philosophy;
