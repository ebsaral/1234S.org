import { LocalesValues } from "intlayer";
import Hero from '../Sections/Hero';
import Intro from '../Sections/Intro';
import InterconnectednessSection from '../Sections/InterconnectednessSection';
import JusticeSection from '../Sections/JusticeSection';
import HealthSection from '../Sections/HealthSection';
import EndingSection from '../Sections/EndingSection';

const Philosophy = ({locale}: {locale: LocalesValues}) => {
    return(
        <main>
            <Hero />
            <Intro locale={locale} />
            <InterconnectednessSection />
            <JusticeSection />
            <HealthSection />
            <EndingSection id="ending" />
        </main>
    )
}

export default Philosophy;