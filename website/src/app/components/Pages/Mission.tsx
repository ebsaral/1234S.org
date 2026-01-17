import { LocalesValues } from 'intlayer';
import StorySection from '../Sections/StorySection';
import ProjectSection from '../Sections/ProjectSection';

const Mission = ({ locale }: { locale: LocalesValues }) => {
  return (
    <main>
      <StorySection />
      <ProjectSection />
    </main>
  );
};

export default Mission;
