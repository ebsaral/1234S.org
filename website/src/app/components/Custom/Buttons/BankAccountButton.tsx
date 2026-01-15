import { useLocale } from 'next-intlayer';
import Link from 'next/link';

const BankAccountButton = ({label, href, className=''}: {className?:string, label: string, href:string}) => {

    const {locale} = useLocale();

    return (
        <Link className={`bg-red-600 hover:bg-red-700 text-white rounded-2xl hover:rounded-md transition-all duration-200 ease-in-out ${className}`} href={href} prefetch={true}>
            {label}
        </Link>
    );
};

export default BankAccountButton;