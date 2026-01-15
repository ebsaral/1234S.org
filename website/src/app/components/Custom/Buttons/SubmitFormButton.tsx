"use client";

const SubmitFormButton = ({className, text, onSubmitText, isSubmitting }: {className?: string, text: string, onSubmitText: string, isSubmitting: boolean}) => {

    return (<button
          disabled={isSubmitting}
          type="submit"
          className={`w-48 text-sm font-medium relative b-1 border-white py-2 px-5 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 rounded-2xl hover:rounded-lg transition-all duration-200 ease-in-out ${className}`}
        >
          {isSubmitting ? onSubmitText : text}
        </button>
    );
};
export default SubmitFormButton;