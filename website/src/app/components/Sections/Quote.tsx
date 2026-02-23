const Quote = ({ className, quoteClassName, text }: { className?: string; quoteClassName?: string; text: string }) => {
  return (
    <div className='relative'>
      <div className={`absolute left-7 top-1/2 -translate-y-1/2 text-7xl text-emerald-600/90 ${className}`}>⟨</div>
      <blockquote
        className={`max-w-4xl m-10 px-8 sm:px-12 py-10 text-center text-lg sm:text-xl lg:text-2xl bg-white text-gray-800 rounded-3xl ${quoteClassName}`}
      >
        {text}
      </blockquote>
      <div className='absolute right-7 bottom-1/2 translate-y-1/2 text-7xl text-emerald-600/90'>⟩</div>
    </div>
  );
};

export default Quote;
