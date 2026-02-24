const Quote = ({ className, quoteClassName, text }: { className?: string; quoteClassName?: string; text: string }) => {
  return (
    <div className='relative'>
      <blockquote
        className={`max-w-4xl m-10 px-8 sm:px-12 py-10 text-center text-lg sm:text-xl lg:text-2xl bg-white text-gray-800 rounded-3xl ${quoteClassName}`}
      >
        {text}
      </blockquote>
    </div>
  );
};

export default Quote;
