import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import LanguageSelector from "./LanguageSelector";
import { StaticI18nLink } from "./StaticI18nLink";
import LazyText from "./LazyText";

const Header = (): JSX.Element => {
  const router = useRouter();
  
  return (
    <section className="flex flex-col w-full max-w-8xl pr-3 sm:pl-12 sm:pr-12">
      <div className="flex justify-between mt-4">
        <StaticI18nLink href="/">
          <div className="mt-2 sm:mt-1 relative w-52 sm:w-60 h-3 sm:h-4">
            <Image src="/icons/threshold-usd.svg" alt="thresholdusd logo" fill={true} sizes="(min-width: 1rem) 24vw" />
          </div>
        </StaticI18nLink>
        <nav className="hidden lg:flex -mt-1">
          <ul className="flex items-center gap-12">
            <StaticI18nLink href="/">
              <li className={`cursor-pointer uppercase font-bold text-sm py-2 ${router.pathname === '/' ? 'border-b-2 border-purple' : 'border-b-2 border-transparent'}`}>
                <LazyText text="headerMenuHome" />
              </li>
            </StaticI18nLink>
            <StaticI18nLink href="/features">
              <li className={`cursor-pointer uppercase font-bold text-sm py-2 ${router.pathname === '/features' ? 'border-b-2 border-purple' : 'border-b-2 border-transparent'}`}>
                <LazyText text="headerMenuExplore" />
              </li>
            </StaticI18nLink>
            <StaticI18nLink href="/governance">
              <li className={`cursor-pointer uppercase font-bold text-sm py-2 ${router.pathname === '/governance' ? 'border-b-2 border-purple' : 'border-b-2 border-transparent'}`}>
                <LazyText text="headerMenuGovernance" />
              </li>
            </StaticI18nLink>
            <Link href="https://docs.threshold.network/applications/threshold-usd" target="_blank" rel="noopener noreferrer">
              <li className="cursor-pointer uppercase font-bold text-sm border-b-2 border-transparent py-2">
                <LazyText text="headerMenuLearn" />
              </li>
            </Link>
          </ul>
        </nav>
        <div className="flex gap-8 items-center">
          <div className="hidden sm:flex">
            <LanguageSelector />
          </div>
          <Link href="https://app.thresholdusd.org">
            <button className="flex items-center gap-2 bg-purple text-white text-xs sm:text-sm font-semibold rounded-lg px-4 sm:px-12 h-9 capitalize">
              <LazyText text="headerButton" className="w-10 h-3" />
            </button>
          </Link>
        </div>
      </div>
  </section>
  );
};

export default Header;