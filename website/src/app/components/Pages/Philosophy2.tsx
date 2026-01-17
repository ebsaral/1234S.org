import EndingSection from '@/app/components/Sections/EndingSection';
import HealthSection from '@/app/components/Sections/HealthSection';
import Hero from '@/app/components/Sections/Hero';
import Interconnectedness from '@/app/components/Sections/Interconnectedness';
import InterconnectednessSection from '@/app/components/Sections/InterconnectednessSection';
import Intro from '@/app/components/Sections/Intro';
import JusticeSection from '@/app/components/Sections/JusticeSection';
import { LocalesValues } from 'intlayer';

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
