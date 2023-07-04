import Image from 'next/image';
import Link from 'next/link';
import LanguageSelector from './LanguageSelector';
import { StaticI18nLink } from './StaticI18nLink';
import LazyText from './LazyText';
import { useContext } from 'react';
import { ThemeContext } from '@/utils/ThemeContext';

const Footer = (): JSX.Element => {
  const { theme } = useContext(ThemeContext);

  return (
    <section className="flex flex-col-reverse sm:flex-row gap-20 sm:gap-12 items-start justify-between mt-4 sm:mt-12 mb-20 sm:mb-32 w-full">
      <div className="flex flex-col items-center sm:items-start justify-center sm:justify-start gap-7 w-full">
        <StaticI18nLink href="/">
          <div className="mt-2 sm:mt-1 relative w-52 sm:w-60 h-3 sm:h-4">
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
        <span className="text-grey dark:text-white text-sm">
          <LazyText text="footerText" className="w-40 h-3.5" />
        </span>
        <div className="flex justify-start items-center gap-3 mt-2">
          <Link
            href="https://www.youtube.com/@Threshold.Network"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative w-6 h-6">
              <Image
                src="/icons/footer-youtube.svg"
                alt="youtube logo"
                fill={true}
                sizes="(min-width: 1rem) 24vw"
                loading="lazy"
              />
            </div>
          </Link>
          <Link
            href="https://twitter.com/TheTNetwork"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative w-6 h-6">
              <Image
                src="/icons/footer-twitter.svg"
                alt="twitter logo"
                fill={true}
                sizes="(min-width: 1rem) 24vw"
                loading="lazy"
              />
            </div>
          </Link>
          <Link
            href="https://discord.com/invite/Threshold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative w-6 h-6">
              <Image
                src="/icons/footer-discord.svg"
                alt="discord logo"
                fill={true}
                sizes="(min-width: 1rem) 24vw"
                loading="lazy"
              />
            </div>
          </Link>
          <Link
            href="https://github.com/Threshold-USD/dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative w-6 h-6">
              <Image
                src="/icons/github.svg"
                alt="github logo"
                fill={true}
                sizes="(min-width: 1rem) 24vw"
                loading="lazy"
              />
            </div>
          </Link>
        </div>
        <span className="text-grey text-sm text-center sm:text-left dark:text-grey3">
          <LazyText text="footerCopyrightText" className="w-40 sm:w-60 h-3.5" />
        </span>
      </div>
      <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-end gap-16 mt-12 sm:mt-0 text-sm text-grey font-medium w-full">
        <div className="flex flex-col items-center sm:items-start gap-5">
          <span className="uppercase font-semibold text-lg text-black dark:text-white">
            Threshold-USD
          </span>
          <Link href="https://app.thresholdusd.org">
            <span className="hover:text-purple dark:text-grey3">
              <LazyText text="footerFirstMenuNav1" />
            </span>
          </Link>
          <StaticI18nLink href="/features">
            <span className="hover:text-purple dark:text-grey3">
              <LazyText text="footerFirstMenuNav2" />
            </span>
          </StaticI18nLink>
          <StaticI18nLink href="/governance">
            <span className="hover:text-purple dark:text-grey3">
              <LazyText text="footerFirstMenuNav3" />
            </span>
          </StaticI18nLink>
          <Link
            href="https://docs.threshold.network/applications/threshold-usd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="hover:text-purple dark:text-grey3">
              <LazyText text="footerFirstMenuNav4" />
            </span>
          </Link>
        </div>
        <div className="flex flex-col items-center sm:items-start gap-5">
          <span className="uppercase font-semibold text-lg text-black dark:text-white">
            <LazyText text="footerSecondMenuTitle" />
          </span>
          <Link
            href="https://forum.threshold.network/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="hover:text-purple dark:text-grey3">
              <LazyText text="footerSecondMenuNav1" />
            </span>
          </Link>
          <Link
            href="https://github.com/Threshold-USD/dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="hover:text-purple dark:text-grey3">
              <LazyText text="footerSecondMenuNav2" />
            </span>
          </Link>
          <Link
            href="https://discord.com/invite/Threshold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="hover:text-purple dark:text-grey3">
              <LazyText text="footerSecondMenuNav3" />
            </span>
          </Link>
          <Link
            href="https://twitter.com/TheTNetwork"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="hover:text-purple dark:text-grey3">
              <LazyText text="footerSecondMenuNav4" />
            </span>
          </Link>
        </div>
        <div className="hidden 2xl:flex">
          <LanguageSelector />
        </div>
      </div>
    </section>
  );
};

export default Footer;
