import { useLocale } from 'next-intlayer';
import Link from 'next/link';

const BankAccountButton = ({label, href, className=''}: {className?:string, label: string, href:string}) => {

    const {locale} = useLocale();

    return (
        <Link className={`text-center bg-red-600 hover:bg-red-700 hover:outline-none hover:ring-2 hover:ring-red-400 hover:ring-offset-2 text-white rounded-xl hover:rounded-md transition-all duration-200 ease-in-out ${className}`} href={href} prefetch={true}>
            {label}
        </Link>
    );
};

export default BankAccountButton;