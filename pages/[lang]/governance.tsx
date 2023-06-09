import Link from 'next/link';
import Header from '../../components/Header';
import React, { useContext, useState } from 'react';
import Image from 'next/image';
import Footer from '../../components/Footer';
import GovernancePanel from '../../components/GovernancePanel';
import GovernanceConstitution from '../../components/GovernanceConstitution';
import LazyText from '../../components/LazyText';
import { ThemeContext } from '../../utils/ThemeContext';

const Governance = (): JSX.Element => {
  const { theme } = useContext(ThemeContext);
  const [isActivatedOnMount, setIsActivatedOnMount] = useState(true);

  const governancePanels = [
    {
      imageUrl:
        theme === 'light'
          ? '/icons/governance-threshold.svg'
          : '/icons/dark-governance-threshold.svg',
      imageAlt: 'threshold DAO forum icon',
      title: (
        <LazyText
          text="governancePageFirstLinkCardTitle"
          className="h-3.5 w-40 sm:w-60"
        />
      ),
      description: (
        <LazyText
          text="governancePageFirstLinkCardDescription"
          className="h-3.5 w-40 sm:w-60"
          numberOfLines={2}
          classNameOfLines="h-3.5 w-40 sm:w-60"
        />
      ),
      url: 'https://docs.threshold.network/governance/dao/governance-process',
    },
    {
      imageUrl:
        theme === 'light'
          ? '/icons/snapshot-logo.svg'
          : '/icons/dark-snapshot-logo.svg',
      imageAlt: 'snapshot logo',
      title: (
        <LazyText
          text="governancePageSecondLinkCardTitle"
          className="h-3.5 w-40 sm:w-60"
        />
      ),
      description: (
        <LazyText
          text="governancePageSecondLinkCardDescription"
          className="h-3.5 w-40 sm:w-60"
          numberOfLines={2}
          classNameOfLines="h-3.5 w-40 sm:w-60"
        />
      ),
      url: 'https://snapshot.org/#/threshold.eth',
    },
    {
      imageUrl:
        theme === 'light'
          ? '/icons/delegates-icon.svg'
          : '/icons/dark-delegates-icon.svg',
      imageAlt: 'govnernance delegates icon',
      title: (
        <LazyText
          text="governancePageThirdLinkCardTitle"
          className="h-3.5 w-40 sm:w-60"
        />
      ),
      description: (
        <LazyText
          text="governancePageThirdLinkCardDescription"
          className="h-3.5 w-40 sm:w-60"
          numberOfLines={2}
          classNameOfLines="h-3.5 w-40 sm:w-60"
        />
      ),
      url: 'https://threshold-delegate.vercel.app/',
    },
  ];

  return (
    <>
      <Header />
      <div className="flex flex-col w-full max-w-7xl">
        <section className="flex flex-col xl:flex-row gap-8 items-center xl:pl-20 mt-12 z-0">
          <div className="flex flex-col items-center xl:items-start xl:w-full text-center sm:text-left sm:ml-16 xl:ml-12">
            <span className="text-4xl sm:text-55xl font-bold xl:-mt-20 dark:text-white">
              <LazyText
                text="governancePageTitle"
                className="h-14 w-40 sm:w-60 lg:w-80"
              />
            </span>
            <p className="mt-4 sm:text-xl font-semibold text-grey6 dark:text-grey3 px-4 sm:px-0">
              <LazyText
                text="governancePageSubtitleFirstLine"
                className="h-3.5 w-40 sm:w-60 lg:w-80"
              />
              <br />
              <LazyText
                text="governancePageSubtitleSecondLine"
                className="h-3.5 w-40 sm:w-60"
              />
            </p>
            <div className="flex mt-10">
              <Link
                href="https://docs.threshold.network/governance/dao"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center gap-2 button-with-gradient bg-transparent text-black text-sm font-bold rounded-full px-10 h-10 hover:opacity-70">
                  <span className="flex items-center justify-center dark:text-white">
                    <LazyText
                      text="governancePageButtonCTA"
                      className="h-3.5 w-24"
                    />
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center w-full">
            <div className="relative w-[24rem] h-[24rem] md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] xl:w-[40rem] 2xl:h-[40rem]">
              <Image
                src={
                  theme === 'light'
                    ? '/governance-banner.svg'
                    : '/dark-governance-banner.svg'
                }
                alt="governance banner"
                fill={true}
                sizes="(min-width: 1rem) 24vw"
                loading="lazy"
              />
            </div>
          </div>
        </section>
        <section className="flex flex-col sm:flex-row items-start gap-4 lg:gap-7 w-full mt-20 xl:-mt-28 z-10 px-8 lg:px-16 xl:px-32 mb-20">
          {governancePanels.map((panel, index) => {
            return (
              <GovernancePanel
                key={index}
                isActivatedOnMount={index === 0 && isActivatedOnMount}
                setIsActivatedOnMount={setIsActivatedOnMount}
                imageUrl={panel.imageUrl}
                imageAlt={panel.imageAlt}
                title={panel.title}
                description={panel.description}
                url={panel.url}
              />
            );
          })}
        </section>
        <div className="relative block border-b border-grey7 dark:border-grey/40 mx-32"></div>
        <section className="flex flex-col gap-16 w-full px-8 lg:px-16 xl:px-32 mb-20 mt-12">
          <GovernanceConstitution />
        </section>
        <div className="px-12 sm:mt-20">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Governance;
