import Image from "next/image";
import { useState } from "react";

type FaqProps = {
  question: JSX.Element
  answer: JSX.Element
  opened?: boolean
}

const Faq = ({ question, answer, opened }: FaqProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(opened);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <button className="border-b border-b-grey-100 w-full text-left"
      onClick={handleClick}
    >
      <div 
        className="cursor-pointer flex justify-between items-center h-20 hover:text-purple"
      >
        <span className={`text-sm sm:text-lg font-bold ${isOpen && 'text-purple'}`}>
          {question}
        </span>
        <div 
          className={`transform transition-transform duration-300 ${isOpen && 'rotate-180 text-purple'}`}
        >
          <div className="relative w-[1.2rem] h-[1.2em]">
            <Image 
              src={isOpen ? '/icons/purple-chevron.svg' : '/icons/chevron.svg'} 
              alt="arrow caret" 
              fill={true} 
              sizes="(min-width: 1rem) 24vw"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      {isOpen && 
      <div className="overflow-hidden transition-max-height duration-300 pb-12 text-grey font-medium text-sm sm:text-base pr-12 " style={{maxHeight: isOpen ? '100vh' : '0'}}>
        {answer}
       </div>}
    </button>
  );
};

export default Faq;
