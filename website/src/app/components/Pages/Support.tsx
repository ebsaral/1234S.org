import { LocalesValues } from 'intlayer';
import SupportOptionsSection from '../Sections/SupportOptionsSection';
import SupportTopicsSection from '../Sections/SupportTopicsSection';

const Support = ({ locale }: { locale: LocalesValues }) => {
  return (
    <main>
      <SupportTopicsSection />
      <SupportOptionsSection />
    </main>
  );
};

export default Support;
