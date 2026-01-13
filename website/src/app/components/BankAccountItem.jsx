"use client";

import { useIntlayer } from 'next-intlayer';

import { Card } from './ui/card';
import BankAccountInfo from './Custom/BankAccountInfo';


const BankAccountItem = ({account}) => {
  const content = useIntlayer("bank-accounts-section");

  return (
    <Card className={`flex flex-col p-4 text-sm gap-2`}>
      <div className='flex flex-row'>
        <div className='font-bold text-red-800'>{account.currency}</div>
      </div>

      <BankAccountInfo label={content.labels.account.name.value} text={account.name.value} />
      <BankAccountInfo label={content.labels.account.number.value} text={account.number.value} />
      <BankAccountInfo label={content.labels.account.iban.value} text={account.iban.value} copy />
    </Card>
  );
};

export default BankAccountItem;