import { LocalesValues } from "intlayer";
import BankAccountsSection from "@/app/components/Sections/BankAccountsSection";


const BankAccounts = ({locale}: {locale: LocalesValues}) => {
    return(
        <main>
            <BankAccountsSection />
        </main>
    )
}

export default BankAccounts;