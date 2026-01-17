import BankAccountsSection from '@/app/components/Sections/BankAccountsSection';
import { LocalesValues } from 'intlayer';

const BankAccounts = ({ locale }: { locale: LocalesValues }) => {
  return (
    <main>
      <BankAccountsSection />
    </main>
  );
};

export default BankAccounts;
