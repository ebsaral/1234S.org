"use client";

import { useIntlayer } from 'next-intlayer';
import Image from 'next/image';

import { Card } from './ui/card';
import BankAccountInfo from './Custom/BankAccountInfo';
import BankAccountItem from './BankAccountItem';

const BankAccountContainer = ({bank}) => {
  const content = useIntlayer("bank-accounts-section");

  return (
    <Card className={`backdrop-blur-sm shadow-xl border-0 grid grid-cols-1 justify-center items-center p-4`}>

      <div className='flex flex-row gap-2 items-center justify-center text-base'>
        <Image src={bank.bank.logo.value} alt={bank.bank.name} width={100} height={50} className="object-contain"/>
        <div>{bank.bank.name}</div>
      </div>

      <div className='flex flex-col mx-auto text-sm'>
        <BankAccountInfo label={content.labels.bank.swift.value} text={bank.bank.swift.value} />

        <BankAccountInfo label={content.labels.bank.branch.name.value} text={bank.bank.branch.name.value} />

        <BankAccountInfo label={content.labels.bank.branch.code.value} text={bank.bank.branch.code.value} />

        <BankAccountInfo label={content.labels.account.title.value} text={bank.bank.title.value} />
      </div>

      <div className='grid grid-cols-1  md:grid-cols-2 gap-4 my-10'>
      {bank.accounts.map((account, index) => <BankAccountItem key={index} account={account} />)}
      </div>
    </Card>
  );
};

export default BankAccountContainer;