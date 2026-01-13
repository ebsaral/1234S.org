"use client";

import { useIntlayer } from 'next-intlayer';

import {
  Banknote
} from 'lucide-react';

import ContentLayout from './ContentLayout';

const BankAccountsSection = () => {
  const id = "bank-accounts";
  const sectionKey = "bank-accounts";
  const content = useIntlayer(`${sectionKey}-section`);

  return (
    <ContentLayout 
      sectionKey={sectionKey} id={id} icon={Banknote} iconColor="text-amber-600"
      backgroundColor="bg-amber-500"
      accentColor="from-amber-500 to-yellow-50"
      className="pb-10"
      descriptionClassName={"text-center"}
      descriptionColor={"text-gray-900"}
    >
      
    </ContentLayout>
  );
};

export default BankAccountsSection;