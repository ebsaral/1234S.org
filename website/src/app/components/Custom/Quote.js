const Quote = function ({ text, className }) {
  return (
    <div className={`max-w-4xl mx-auto mb-12 sm:text-left ${className}`}>
      <blockquote className='text-xl sm:text-2xl lg:text-3xl font-normal leading-relaxed pl-5 pr-4 border-l-4 border-emerald-500 bg-white/80 backdrop-blur-sm rounded-r-lg py-6 shadow-sm whitespace-pre-line'>
        {text
          .split('**')
          .map((part, index) =>
            index % 2 === 1 ? (
              <strong key={index} className='text-bold'>
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
                    <em key={`${index}-${subindex}`} className='text-gray-800 font-medium'>
                      {subpart}
                    </em>
                  ) : (
                    subpart
                  ),
                )
              : part,
          )}
      </blockquote>
    </div>
  );
};

export default Quote;
