import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export type GovernancePanelProps = {
  setIsActivatedOnMount: React.Dispatch<React.SetStateAction<boolean>>
  imageUrl: string
  imageAlt: string
  title: JSX.Element
  description: JSX.Element
  url: string
  isActivatedOnMount?: boolean
}

const GovernancePanel = ({ isActivatedOnMount, setIsActivatedOnMount, imageUrl, imageAlt, title, description, url }: GovernancePanelProps): JSX.Element => {
  const [isActivated, setIsActivated] = useState(false);

  const activateBorder = () => {
    setIsActivated(true)
    setIsActivatedOnMount(false)
  }

  const deactivateBorder = () => {
    setIsActivated(false)
    setIsActivatedOnMount(true)
  }
  
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer" className="w-full sm:w-1/3">
      <button 
        className={`flex flex-col py-8 gap-3 px-7 w-full bg-grey5 rounded-2xl cursor-pointer border
        ${isActivated || isActivatedOnMount ? "border-transparent border-gradient" : "border-grey7"}`}
        onMouseOver={() => activateBorder()}
        onMouseLeave={() => deactivateBorder()}
      >
        <div className="flex justify-between w-full">
          <div className="relative w-14 h-14">
            <Image src={imageUrl} alt={imageAlt} fill={true} sizes="(min-width: 1rem) 24vw" />
          </div>
          <div className="relative w-5 h-5">
            <Image src={`${isActivated || isActivatedOnMount ? "/icons/purple-arrow.svg" : "/icons/grey-arrow.svg"}`} alt="Active Arrow" fill={true} sizes="(min-width: 1rem) 24vw" />
          </div>
        </div>
        <span className="mt-2 text-15xl font-bold">
          {title}
        </span>
        <span className="text-smallbase leading-6 pr-2 pb-1 text-grey font-medium text-left">
          {description} 
        </span>
      </button>
    </Link>
  );
};

export default GovernancePanel;