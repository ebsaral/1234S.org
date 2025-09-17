import React from "react";

export function Description({text}) {
    return <p className="text-justify text-lg sm:text-xl text-gray-600 leading-relaxed max-w-5xl mx-auto whitespace-pre-line">
        {text.toString().split('**').map((part, index) => 
            index % 2 === 1 ? <strong key={index} className="text-bold">{part}</strong> : part
        ).map((part, index) => 
            typeof part === 'string' && part.includes('*') 
            ? part.split('*').map((subpart, subindex) => 
                subindex % 2 === 1 ? <em key={`${index}-${subindex}`} className="text-gray-800 font-medium">{subpart}</em> : subpart
                )
            : part
        )}
    </p>
}