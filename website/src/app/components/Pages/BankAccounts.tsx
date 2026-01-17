'use client';

import BankAccountsSection from '@/app/components/Sections/BankAccountsSection';
import { useIntlayer } from 'next-intlayer';
import Title from '../Custom/Title';

const BankAccounts = () => {
  const content = useIntlayer('bank-accounts-page-metadata');

  return (
    <main>
      <Title title={content.title.value} />
      <BankAccountsSection />
    </main>
  );
};

export default BankAccounts;
