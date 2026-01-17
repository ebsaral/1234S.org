import { LocalesValues } from 'intlayer';
import Hero from '@/app/components/Sections/Hero';
import Intro from '@/app/components/Sections/Intro';
import InterconnectednessSection from '@/app/components/Sections/InterconnectednessSection';
import JusticeSection from '@/app/components/Sections/JusticeSection';
import HealthSection from '@/app/components/Sections/HealthSection';
import EndingSection from '@/app/components/Sections/EndingSection';
import Interconnectedness from '@/app/components/Sections/Interconnectedness';

const Philosophy = ({ locale }: { locale: LocalesValues }) => {
  return (
    <main>
      <Hero />
      <Intro locale={locale} />
      <Interconnectedness locale={locale} />
      <JusticeSection />
      <HealthSection />
      <EndingSection id='ending' />
    </main>
  );
};

export default Philosophy;
