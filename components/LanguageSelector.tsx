import Image from "next/image";
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from "react";
import { StaticI18nLink } from "./StaticI18nLink";
import LazyText from "./LazyText";

const LanguageSelector = (): JSX.Element => {
  const { i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as HTMLElement)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex gap-2 items-center bg-transparent border-0 cursor-pointer p-1 focus:outline-none"
        onClick={handleDropdownToggle}
      >
        <Image src="/icons/globe.svg" alt="Language" width={24} height={24} loading="lazy" />
        <span>
          {i18n.language.toUpperCase()}
        </span>
        <Image src="/icons/arrow-down.svg" alt="Arrow Down" width={8} height={8} loading="lazy" />
      </button>
      {isDropdownOpen && (
        <div className="absolute top-full right-0 mt-2 w-36 bg-white border border-gray-300 rounded shadow-lg z-10">
          <ul>
            <StaticI18nLink locale="/en" switchLocale>
              <li className="cursor-pointer py-2 px-4 hover:bg-grey5">
                <LazyText text="language1" />
              </li>
            </StaticI18nLink>
            <StaticI18nLink locale="/es" switchLocale>
              <li className="cursor-pointer py-2 px-4 hover:bg-grey5">
                <LazyText text="language2" />
              </li>
            </StaticI18nLink>
            <StaticI18nLink locale="/pt" switchLocale>
              <li className="cursor-pointer py-2 px-4 hover:bg-grey5">
                <LazyText text="language3" />
              </li>
            </StaticI18nLink>
          </ul>
        </div>
      )}
    </div>  
  );
};

export default LanguageSelector;