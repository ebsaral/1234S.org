'use client';

import { getLocalizedUrl } from 'intlayer';
import { useLocale } from 'next-intlayer';
import Link from 'next/link';

interface IBlueButton extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
  href: string;
}

const BlueButton = ({ className, text, href, ...rest }: IBlueButton) => {
  const { locale } = useLocale();

  return (
    <Link
      href={getLocalizedUrl(href, locale)}
      className={`text-center font-medium p-4 b-1 border-white text-white bg-blue-700 hover:bg-blue-800 hover:outline-none hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 rounded-xl hover:rounded-lg transition-all duration-200 ease-in-out ${className}`}
      prefetch={true}
      {...rest}
    >
      {text}
    </Link>
  );
};
export default BlueButton;
