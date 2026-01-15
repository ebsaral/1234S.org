"use client";

import { getLocalizedUrl } from "intlayer";
import { useIntlayer, useLocale } from "next-intlayer";
import Link from "next/link";

const JoinLink = ({className,}: {className?: string}) => {
    const content = useIntlayer("team-section");
    const {locale, pathWithoutLocale} = useLocale();

    return (
    <Link
        href={getLocalizedUrl("/membership", locale)}
        className={`flex flex-col items-center justify-center w-auto font-medium relative b-1 border-white text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 rounded-2xl hover:rounded-lg transition-all duration-200 ease-in-out ${className}`}
        prefetch={true}
        >
        {content.join}
    </Link>
    );
};
export default JoinLink;