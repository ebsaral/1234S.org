export default function FormattedText({ className = '', text, boldClassName = '', italicClassName = '' }) {
  return (
    <p className={`whitespace-pre-line ${className || ''}`}>
      {text
        .toString()
        .split('**')
        .map((part, index) =>
          index % 2 === 1 ? (
            <strong key={index} className={boldClassName}>
              {part}
            </strong>
          ) : (
            part
          ),
        )
        .map((part, index) =>
          typeof part === 'string' && part.includes('*')
            ? part.split('*').map((subpart, subindex) =>
                subindex % 2 === 1 ? (
                  <i key={`${index}-${subindex}`} className={italicClassName}>
                    {subpart}
                  </i>
                ) : (
                  subpart
                ),
              )
            : part,
        )}
    </p>
  );
}
