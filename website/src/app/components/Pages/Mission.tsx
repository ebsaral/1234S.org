import { LocalesValues } from 'intlayer';
import ProjectSection from '../Sections/ProjectSection';
import StorySection from '../Sections/StorySection';

const Mission = ({ locale }: { locale: LocalesValues }) => {
  return (
    <main>
      <StorySection />
      <ProjectSection />
    </main>
  );
};

export default Mission;
