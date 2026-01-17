import { ClipboardPenLine } from 'lucide-react';
import { useIntlayer, useLocale } from 'next-intlayer';
import { toast } from 'react-toastify';

const BankAccountInfo = ({
  label,
  text,
  className = '',
  copy = false,
}: {
  className?: string;
  label: string;
  text: string;
  copy?: boolean;
}) => {
  const { locale } = useLocale();
  const content = useIntlayer('notification', locale);

  return (
    <div className={`flex flex-row gap-2 ${className}`}>
      <div className='font-bold text-gray-800'>{label}:</div>
      <div>{text}</div>
      {copy && (
        <div
          className={`flex items-center justify-center hover:cursor-pointer w-8 h-8 bg-emerald-200 text-gray-800 rounded-lg transform transition-transform duration-300 active:bg-gray-800 active:text-white active:scale-110`}
          onClick={() => {
            toast.dismiss();
            navigator.clipboard.writeText(text);
            toast.success(content.copyIbanSuccess.value, { closeOnClick: true });
          }}
        >
          <ClipboardPenLine />
        </div>
      )}
    </div>
  );
};

export default BankAccountInfo;
