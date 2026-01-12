"use client";

import { useIntlayer, useLocale } from "next-intlayer"
import Description from "./Description"

import { Meh, X } from "lucide-react"
import { useState } from "react";

const BudgetIssue = () => {
    const [isHidden, setIsHidden] = useState(false);
    const {locale} = useLocale();
    const content = useIntlayer("navigation", locale);

    return (
        <div className={`${isHidden && "hidden"} fixed flex flex-col sm:flex-row z-10 bottom-2 left-1/2 -translate-x-1/2 w-full max-w-2xl bg-gray-100 border border-gray-400 rounded-3xl text-center py-4 px-10 sm:px-10 lg:px-16`}>
            <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-start font-bold gap-4">
                <Meh className="w-44 text-red-600" size={40} />
                <Description className="text-center sm:text-left" text={content.budgetIssue.value} size={"text-xs sm:text-sm"} />
            </div>
            <div className="flex flex-row p-3 items-center justify-center text-black cursor-pointer" onClick={() => setIsHidden(true)}>
                <X className="text-red-600" size={25} /> {content.closeButton}
            </div>
        </div>
    )
}

export default BudgetIssue;