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
        className={`text-sm font-medium transition-all duration-300 relative b-1 border-white py-2 px-5 rounded-lg text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 ${isActive? "underline underline-offset-8 decoration-double ring-white" : ""} ${className}`}
        prefetch={true}
        >
        {content.support.text}
    </Link>
    );
};
export default SupportLink;