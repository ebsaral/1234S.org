import { LocalesValues } from "intlayer";
import SupportTopicsSection from "../Sections/SupportTopicsSection";
import SupportOptionsSection from "../Sections/SupportOptionsSection";

const Support = ({locale}: {locale: LocalesValues}) => {
    return(
        <main>    
            <SupportTopicsSection />
            <SupportOptionsSection />
        </main>
    )
}

export default Support;