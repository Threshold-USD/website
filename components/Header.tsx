import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import LanguageSelector from './LanguageSelector';
import { StaticI18nLink } from './StaticI18nLink';
import LazyText from './LazyText';
import ThemeToggleButton from './ThemeToggleButton';
import { useContext, useState } from 'react';
import { ThemeContext } from '@/utils/ThemeContext';

const Header = (): JSX.Element => {
  const router = useRouter();
  const { theme } = useContext(ThemeContext);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const isHomePage = (): boolean => {
    const path = router.asPath;
    const pathParts = path.split('/');
    return pathParts.length === 3;
  };

  return (
    <section className="relative flex flex-col w-full max-w-8xl pr-3 pl-3 sm:pl-6 sm:pr-6 2xl:pl-12 2xl:pr-12 dark:text-white">
      <div className="flex items-center justify-between mt-4">
        <StaticI18nLink href="/">
          <div className="flex items-center relative w-52 sm:w-60 h-10 sm:h-14">
            <Image
              src={`/icons/${
                theme === 'light'
                  ? 'threshold-usd.svg'
                  : 'dark-thresholdusd-logo.svg'
              }`}
              alt="thresholdusd logo"
              fill={true}
              sizes="(min-width: 1rem) 24vw"
              loading="lazy"
            />
          </div>
        </StaticI18nLink>
        <button
          className="lg:hidden block"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          {!isMenuOpen ? (
            <div className="relative w-8 h-8">
              <Image
                src="/icons/hamburger.svg"
                alt="hamburger menu icon"
                fill={true}
                sizes="(min-width: 1rem) 24vw"
                loading="lazy"
              />
            </div>
          ) : (
            <span className="text-purple font-bold text-xl">X</span>
          )}
        </button>
        <nav
          className={`${
            isMenuOpen
              ? 'absolute bg-white dark:bg-darkBlue top-full left-0 right-0 z-10 ml-10 mr-4 mt-2 p-6 pb-8 rounded-xl border-2 border-purple'
              : 'hidden'
          } lg:relative lg:bg-transparent lg:flex`}
        >
          <ul
            className={`${
              isMenuOpen
                ? 'flex-col gap-1 mr-4 items-end'
                : 'flex-row gap-12 items-center'
            } flex`}
          >
            <StaticI18nLink href="/">
              <li
                className={`cursor-pointer uppercase font-bold text-sm py-2 ${
                  isHomePage()
                    ? 'border-b-2 border-purple'
                    : 'border-b-2 border-transparent'
                }`}
              >
                <LazyText text="headerMenuHome" />
              </li>
            </StaticI18nLink>
            <StaticI18nLink href="/features">
              <li
                className={`cursor-pointer uppercase font-bold text-sm py-2 ${
                  router.asPath.includes('/features')
                    ? 'border-b-2 border-purple'
                    : 'border-b-2 border-transparent'
                }`}
              >
                <LazyText text="headerMenuExplore" />
              </li>
            </StaticI18nLink>
            <StaticI18nLink href="/governance">
              <li
                className={`cursor-pointer uppercase font-bold text-sm py-2 ${
                  router.asPath.includes('/governance')
                    ? 'border-b-2 border-purple'
                    : 'border-b-2 border-transparent'
                }`}
              >
                <LazyText text="headerMenuGovernance" />
              </li>
            </StaticI18nLink>
            <Link
              href="https://docs.threshold.network/applications/threshold-usd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="cursor-pointer uppercase font-bold text-sm border-b-2 border-transparent py-2">
                <LazyText text="headerMenuLearn" />
              </li>
            </Link>
          </ul>
          <div className="flex flex-col gap-4 items-center lg:hidden mt-3 w-full">
            <div className="flex items-center justify-end gap-4 w-full">
              <ThemeToggleButton />
              <LanguageSelector />
            </div>
            <Link href="https://app.thresholdusd.org" className="flex w-full">
              <button className="flex justify-center items-center gap-2 bg-purple text-white text-xs sm:text-sm font-semibold rounded-lg px-4 sm:px-12 h-9 capitalize w-full">
                <LazyText text="headerButton" className="w-10 h-3" />
              </button>
            </Link>
          </div>
        </nav>
        <div
          className={`hidden lg:flex gap-8 items-center ${
            isMenuOpen ? 'hidden' : 'flex'
          }`}
        >
          <div className="flex gap-5 items-center hidden sm:flex">
            <ThemeToggleButton />
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
