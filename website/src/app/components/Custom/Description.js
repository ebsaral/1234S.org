import React from "react";

export function Description({text, size="text-lg sm:text-xl"}) {
    return <p className={`text-left ${size} text-gray-800 leading-relaxed max-w-5xl mx-auto whitespace-pre-line`}>
        {text.toString().split('**').map((part, index) => 
            index % 2 === 1 ? <strong key={index}>{part}</strong> : part
        ).map((part, index) => 
            typeof part === 'string' && part.includes('*') 
            ? part.split('*').map((subpart, subindex) => 
                subindex % 2 === 1 ? <i key={`${index}-${subindex}`} className="text-gray-800">{subpart}</i> : subpart
                )
            : part
        )}
    </p>
}