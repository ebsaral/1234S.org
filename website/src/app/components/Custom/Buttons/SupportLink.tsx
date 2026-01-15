"use client";

import { getLocalizedUrl } from "intlayer";
import { useIntlayer, useLocale } from "next-intlayer";
import Link from "next/link";

const SupportLink = ({className,}: {className?: string}) => {
    const content = useIntlayer("navigation");
    const {locale, pathWithoutLocale} = useLocale();
    const isActive = pathWithoutLocale === "/support";

    return (
    <Link
        href={getLocalizedUrl("/support", locale)}
        className={`flex flex-col items-center justify-center w-auto text-sm font-medium  relative b-1 border-white py-2 px-5 text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 rounded-xl hover:rounded-lg transition-all duration-200 ease-in-out ${className}`}
        prefetch={true}
        >
        {content.support.text}
        
        {isActive && <span className="absolute bottom-1 left-2 right-2 h-0.5 rounded-full transition-all duration-300 bg-white"></span>}
    </Link>
    );
};
export default SupportLink;