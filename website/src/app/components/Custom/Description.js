export default function Description({className="", text, size="text-lg sm:text-xl", color="text-gray-800", boldColor="text-gray-800", italicColor="text-gray-800"}) {
    return <p className={`text-left ${size} ${color} leading-relaxed max-w-5xl mx-auto whitespace-pre-line ${className || ''}`}>
        {text.toString().split('**').map((part, index) => 
            index % 2 === 1 ? <strong key={index} className={boldColor}>{part}</strong> : part
        ).map((part, index) => 
            typeof part === 'string' && part.includes('*') 
            ? part.split('*').map((subpart, subindex) => 
                subindex % 2 === 1 ? <i key={`${index}-${subindex}`} className={italicColor}>{subpart}</i> : subpart
                )
            : part
        )}
    </p>
}