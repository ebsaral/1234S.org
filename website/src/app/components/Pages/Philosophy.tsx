import { useIntlayer } from 'next-intlayer/server';
import Title from '../Custom/Title';
import EndingSection from '../Sections/EndingSection';
import HealthSection from '../Sections/HealthSection';
import HeroSection from '../Sections/HeroSection';
import InterconnectednessSection from '../Sections/InterconnectednessSection';
import IntroTextSection from '../Sections/IntroTextSection';
import JusticeSection from '../Sections/JusticeSection';

const Philosophy = () => {
  const content = useIntlayer('membership-page-metadata');
  return (
    <main>
      <Title title={content.title.value} />
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
