import Link from 'next/link';
import Header from '../components/Header';
import React, { useState } from 'react';
import Image from 'next/image';
import Footer from '@/components/Footer';
import GovernancePanel from '@/components/GovernancePanel';
import GovernanceConstitution from '@/components/GovernanceConstitution';

const governancePanels = [
  {
    imageUrl: "/icons/governance-threshold.svg",
    imageAlt: "threshold DAO forum icon",
    title: "DAO Forum",
    description: "Get active in the Meta governance discussions within the community on the Governance forum.",
    url: "https://docs.threshold.network/governance/dao/governance-process"
  },
  {
    imageUrl: "/icons/snapshot-logo.svg",
    imageAlt: "snapshot logo",
    title: "Snapshot",
    description: "A decentralized governance platform that makes it easy to create and vote on proposals.",
    url: "https://snapshot.org/#/threshold.eth"
  },
  {
    imageUrl: "/icons/delegates-icon.svg",
    imageAlt: "govnernance delegates icon",
    title: "Delegates",
    description: "Vote delegation is the process of granting a delegate the power to vote on your behalf.",
    url: "https://threshold-delegate.vercel.app/"
  },
]

const Governance = (): JSX.Element => {
  const [isActivatedOnMount, setIsActivatedOnMount] = useState(true);
  return (
    <>
      <Header />
      <div className="flex flex-col w-full max-w-7xl">    
        <section className="flex flex-col-reverse md:flex-row items-center xl:pl-20 z-0">
          <div className="flex flex-col items-center sm:items-start w-full text-center sm:text-left sm:ml-16 xl:ml-12">
            <span className="text-4xl sm:text-55xl font-bold lg:-mt-20">Governance</span>
            <p className="mt-4 text-lg sm:text-xl font-semibold text-grey6">
              Threshold is community-driven and <br /> governed by an eponymous DAO.
            </p>
            <div className="flex mt-10">
              <Link href="https://docs.threshold.network/governance/dao" target="_blank" rel="noopener noreferrer">
                <button className="flex items-center gap-2 button-with-gradient bg-transparent text-black text-sm font-bold rounded-full px-10 py-2.5 hover:opacity-70">
                  <span>
                    {"Read More ->"}
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center w-full">
            <div className="relative w-[24rem] h-[24rem] sm:w-[40rem] sm:h-[40rem]">
              <Image src="/governance-banner.svg" alt="herobanner image" fill={true} sizes="(min-width: 1rem) 24vw" />
            </div>
          </div>
        </section>
        <section className="flex flex-col sm:flex-row items-start gap-4 lg:gap-7 w-full mt-20 lg:-mt-28 z-10 px-8 lg:px-16 xl:px-32 mb-20">
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
            )
          })}
        </section>
        <div className="relative block border-b border-grey7 mx-32"></div>
        <section className="flex flex-col gap-16 w-full px-8 lg:px-16 xl:px-32 mb-20 mt-12">
         <GovernanceConstitution/>
        </section>
        <div className="px-12 sm:mt-20">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Governance;