"use client";

import { useIntlayer } from "next-intlayer";
import Link from "next/link";

const SupportLink = ({className}: {className?: string}) => {
    const content = useIntlayer("project-section");
    return (
    <Link
        href={content.sponsorship.href.value}
        className={`text-sm font-medium transition-all duration-300 relative b-1 border-white py-2 px-5 rounded-lg text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 ${className}`}
        >
        {content.sponsorship.support}
    </Link>
    );
};
export default SupportLink;