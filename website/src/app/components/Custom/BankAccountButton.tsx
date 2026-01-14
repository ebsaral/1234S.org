import { BellElectric} from 'lucide-react';
import { useLocale } from 'next-intlayer';
import Link from 'next/link';

const BankAccountButton = ({label, href, className=''}: {className?:string, label: string, href:string}) => {

    const {locale} = useLocale();

    return (
        <div className={`flex flex-col items-center justify-center gap-6 rounded text-center ${className}`}>
          <div className='flex items-center justify-center gap-2'><BellElectric /></div>
          <Link href={href} prefetch={true}>
            <span className='p-4 bg-red-600 hover:bg-red-700 text-white hover:text-gray-200 rounded-2xl hover:rounded-md transition-all duration-200 ease-in-out'>
              {label}
            </span>
          </Link>
        </div>
    );
};

export default BankAccountButton;