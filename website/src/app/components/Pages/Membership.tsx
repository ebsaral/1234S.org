import { LocalesValues } from "intlayer";
import MembershipSection from "@/app/components/Sections/MembershipSection";

const Membership = ({locale}: {locale: LocalesValues}) => {
    return(
        <main>    
            <MembershipSection />
        </main>
    )
}

export default Membership;