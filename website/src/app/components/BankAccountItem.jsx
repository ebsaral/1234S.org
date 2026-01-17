'use client';

import { useIntlayer } from 'next-intlayer';

import BankAccountInfo from './Custom/BankAccountInfo';
import { Card } from './ui/card';

const BankAccountItem = ({ account }) => {
  const content = useIntlayer('bank-accounts-section');

  return (
    <Card className={`flex flex-col items-start p-3 text-sm gap-4`}>
      <div className='flex flex-row'>
        <div className='font-bold text-red-800'>{account.currency}</div>
      </div>

      <BankAccountInfo label={content.labels.account.name.value} text={account.name.value} />
      <BankAccountInfo label={content.labels.account.number.value} text={account.number.value} />
      <BankAccountInfo
        label={content.labels.account.iban.value}
        text={account.iban.value}
        className='flex-col justify-start '
        copy
      />
    </Card>
  );
};

export default BankAccountItem;
