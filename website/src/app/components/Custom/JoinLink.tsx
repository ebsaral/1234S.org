"use client";

import { getLocalizedUrl } from "intlayer";
import { useIntlayer, useLocale } from "next-intlayer";
import Link from "next/link";

const JoinLink = ({className,}: {className?: string}) => {
    const content = useIntlayer("team-section");
    const {locale, pathWithoutLocale} = useLocale();

    return (
    <Link
        href={getLocalizedUrl("/support", locale)}
        className={`flex flex-col items-center justify-center w-auto text-sm font-medium transition-all duration-300 relative b-1 border-white py-2 px-5 rounded-lg text-white bg-emerald-700 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 ${className}`}
        prefetch={true}
        >
        {content.join}
    </Link>
    );
};
export default JoinLink;