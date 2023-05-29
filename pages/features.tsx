import Link from 'next/link';
import Header from '../components/Header';
import React from 'react';
import Image from 'next/image';
import SideText from '../components/SideText';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';

export type SideTextType = {
  imageUrl: string
  imageAlt: string
  title: string
  description: string
  isReversed: boolean
  buttonText?: string
  imageSizes?: string,
  gap?: string,
  textMargin?: string
}

const sideTexts: SideTextType[] = [
  {
    imageUrl: "/trading-ethereum.svg",
    imageAlt: "trading ethereum image",
    title: "Backed by tBTC and ETH",
    description: `Threshold USD is a decentralized borrowing protocol that allows
     you to draw loans against tBTC and ETH used as collateral. Loans are paid out in thUSD
     (a USD pegged stablecoin) and need to maintain a minimum collateral ratio of 110%.`,
    isReversed: false,
    imageSizes: "w-[12rem] h-[12rem] sm:w-[18rem] sm:h-[18rem]",
    gap: "sm:gap-14",
    textMargin: "lg:-ml-12"
  },
  {
    imageUrl: "/laptops.svg",
    imageAlt: "censorship resistant",
    title: "Censorship Resistant",
    description: `As a non-custodial system, all the tokens sent to the protocol will 
    be held and managed algorithmically without the interference of any person or legal entity. 
    That means your funds will only be subject to the rules set forth in the smart contract code.`,
    isReversed: true,
    textMargin: "lg:-mr-20"
  },
  {
    imageUrl: "/balance.svg",
    imageAlt: "capital efficiency",
    title: "Capital Efficiency",
    description: `With a low 0.9% interest rate for tBTC and ETH, and an optimal 110% 
    minimum collateral ratio for enhanced efficiency. Relying on a minimal governance, most of the 
    protocol operations are algorithmic and fully automated, and thUSD can be directly redeemed for 
    the underlying collateral at any time.`,
    isReversed: false,
    textMargin: "lg:-ml-12"
  },
]

const faq = [
  {
    question: "What is ThresholdUSD?",
    answer: <div>
      Threshold USD is a decentralized borrowing protocol that allows you to draw loans against tBTC and ETH used as collateral. Loans are paid out in thUSD (a USD pegged stablecoin) and need to maintain a minimum collateral ratio of 110%
      <br /><br />In addition to the collateral, the loans are secured by a Stability Pool containing thUSD and by fellow borrowers collectively acting as guarantors of last resort. Learn more about these mechanisms under Liquidation.
    </div>,
    opened: true
  },
  {
    question: "What are the key benefits of ThresholdUSD?",
    answer: <div>
      <ul className="flex flex-col gap-3">
        Threshold USD’s key benefits include:
        <li className="mt-4">Low interest rate for tBTC (initially 0.9%)</li>
        <li>Minimum collateral ratio of 110% — more efficient usage of deposited tBTC</li>
        <li>Governance Minimized— most operations are algorithmic and fully automated, and most protocol parameters are set at time of contract deployment. </li>
        <li>Note: See section above for parameters that can be changed through governance</li>
        <li>Directly redeemable —  thUSD can be redeemed at face value for the underlying collateral at any time</li>
      </ul>
    </div>,
  },
  {
    question: "How does it works?",
    answer: <div>
      To ensure that the entire stablecoin supply remains fully backed by collateral, Vaults that fall under the minimum collateral ratio of 110% will be closed (liquidated).
      <br /><br />The debt of the Vault is canceled and absorbed by the Stability Pool and its collateral distributed among Stability Providers.
    </div>,
  },
  {
    question: "Where can I learn more about the protocol?",
    answer: <div>
      The technical documentation can be found <Link href="https://docs.threshold.network/applications/threshold-usd" target="_blank" rel="noopener noreferrer"><span className="text-purple">here</span></Link>. More resources can be found in our <Link href="https://discord.com/invite/Threshold" target="_blank" rel="noopener noreferrer"><span className="text-purple">Discord server</span></Link>. Stay up-to-date with the most recent news in our <Link href="https://twitter.com/TheTNetwork" target="_blank" rel="noopener noreferrer"><span className="text-purple">Twitter</span></Link>.</div>,
  },
  {
    question: "Can Threshold USD be upgraded or changed?",
    answer: <div>
      Yes. The Threshold USD token contracts mint function will be able to add additional contracts; this is how we keep the option to upgrade while leaving all the contracts immutable with the exception of the price feed contract.
    </div>,
  },
  {
    question: "Why would I use Threshold USD for borrowing?",
    answer: <div>
      Threshold USD protocol offers low interest loans and is more capital efficient than other borrowing systems (i.e. less collateral is needed for the same loan). Instead of selling tBTC to have liquid funds, you can use the protocol to lock up your tBTC, borrow against the collateral to withdraw thUSD, and then repay your loan at a future date.
      <br /><br />For example: Borrowers speculating on future tBTC price increases can use the protocol to leverage their tBTC positions up to 11 times, increasing their exposure to price changes. This is possible because thUSD can be borrowed against tBTC, sold on the open market to purchase more tBTC — rinse and repeat.*
      <br /><br />*Note: This is NOT a recommendation for how to use Threshold USD. Leverage can be very risky as you can lose all your funds and should be used only by those with experience and for speculative amounts.
    </div>,
  },
  {
    question: "What do I need in order to use Threshold USD?",
    answer: <div>
      To borrow thUSD, all you need is a wallet (e.g. MetaMask or <Link href="https://taho.xyz/" target="_blank" rel="noopener noreferrer"><span className="text-purple">TaHo</span></Link>) and sufficient tBTC or ETH to open a Trove and pay the gas fees. 
      <br /><br />To become a Stability Pool depositor you need to have thUSD, which can be borrowed by opening a Trove. You can also use Curve or another (decentralized) exchange to buy the tokens on the open market.
    </div>,
  },
  {
    question: "How can I borrow with Threshold USD?",
    answer: <div>
      To borrow you must open a Trove and deposit a certain amount of collateral (tBTC) to it. Then you can draw thUSD up to a collateral ratio of 110%. A minimum debt of 2,000 thUSD is required. This minimum debt threshold prevents an attacker from creating a large number of troves that are then unprofitable to liquidate.
    </div>,
  },
  {
    question: "How does thUSD closely follow the price of USD?",
    answer: <div>
      The ability to redeem thUSD for tBTC at face value (i.e. 1 thUSD for $1 of tBTC) and the minimum collateral ratio of 110% create a price floor and price ceiling (respectively) through arbitrage opportunities. We call these "hard peg mechanisms" since they are based on direct processes.
      <br /><br />thUSD also benefits from less direct mechanisms for USD parity — called "soft peg mechanisms". One of these mechanisms is parity as a Schelling point. Since Threshold USD treats thUSD as being equal to USD, parity between the two is an implied equilibrium state of the protocol. Another of these mechanisms is the borrowing fee on new debts. As redemptions increase (implying thUSD is below $1), so too does the baseRate — making borrowing less attractive which keeps new thUSD from hitting the market and driving the price below $1.
      <br /><br />Liquity (on which thUSD Protocol is based on) did a thorough analysis on the price stability of LUSD <Link href="https://www.liquity.org/blog/on-price-stability-of-liquity" target="_blank" rel="noopener noreferrer"><span className="text-purple">here</span></Link>. This analysis is equally relevant for thUSD.
    </div>,
  },
  {
    question: "What are redemptions?",
    answer: <div>
      A redemption is the process of exchanging thUSD for tBTC at face value, as if 1 thUSD is exactly worth $1. That is, for x thUSD you get x Dollars worth of tBTC in return.
      <br /><br />Users can redeem their thUSD for tBTC at any time without limitations. However, a redemption fee might be charged on the redeemed amount.
      <br /><br />For example, if the current redemption fee is 1%, the price of tBTC is $50,000 and you redeem 10,000 thUSD, you would get 0.198 tBTC (0.2 tBTC minus a redemption fee of 0.002 tBTC).
      <br /><br />Note that the redeemed amount is taken into account for calculating the base rate and might have an impact on the redemption fee, especially if the amount is large.
    </div>,
  },
  {
    question: "Is a redemption the same as paying back my debt?",
    answer: <div>
      No, redemptions are a completely separate mechanism. All one has to do to pay back their debt is adjust their Trove's debt and collateral.
    </div>,
  },
  {
    question: "How is the redemption fee calculated?",
    answer: <div>
      Under normal operation, the redemption fee is given by the formula (baseRate + 0.5%) * tBTCdrawn
    </div>,
  },
  {
    question: "What is Recovery Mode?",
    answer: <div>
      Recovery Mode kicks in when the Total Collateral Ratio (TCR) of the system falls below 150%.
      <br /><br />During Recovery Mode, Troves with a collateral ratio below 150% can be liquidated.
      <br /><br />Moreover, the system blocks borrower transactions that would further decrease the TCR. New LUSD may only be issued by adjusting existing Troves in a way that improves their collateral ratio, or by opening a new Trove with a collateral ratio>=150%. In general, if an existing Trove's adjustment reduces its collateral ratio, the transaction is only executed if the resulting TCR is above 150%.
    </div>,
  },
  {
    question: "What is the Total Collateral Ratio?",
    answer: <div>
      The Total Collateral Ratio or TCR is the ratio of the Dollar value of the entire system collateral at the current ETH:USD price, to the entire system debt. In other words, it's the sum of the collateral of all Troves expressed in USD, divided by the debt of all Troves expressed in LUSD.
    </div>,
  },
]

const Features = (): JSX.Element => {
  return (
    <>
      <Header />
      <div className="flex flex-col w-full max-w-7xl px-4 sm:px-12">    
        <section className="flex flex-col-reverse md:flex-row items-center mt-12 sm:mt-24 m:gap-20 px-4">
          <div className="flex flex-col items-center sm:items-start w-full text-center sm:text-left sm:ml-8">
            <span className="text-4xl sm:text-6xl font-bold">Core Features</span>
            <p className="mt-6 sm:text-15xl font-semibold text-grey">
              First USD-pegged stablecoin backed by a decentralized scalable Bitcoin-backed asset.
            </p>
            <div className="flex gap-4 sm:gap-8 mt-10">
              <Link href="https://app.thresholdusd.org">
                <button className="flex items-center gap-2 border bg-purple text-white text-xs sm:text-sm font-semibold rounded-full px-12 py-2.5">
                  <div className="relative w-5 h-5">
                    <Image src="/icons/user-circle.svg" alt="user icon" fill={true} sizes="(min-width: 1rem) 24vw" />
                  </div>
                  <span>
                    Sign in
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center w-full">
            <div className="relative w-[20rem] h-[18rem] sm:w-[29rem] sm:h-[29rem]">
              <Image src="/hero-banner.svg" alt="herobanner image" fill={true} sizes="(min-width: 1rem) 24vw" />
            </div>
          </div>
        </section>
        <section className="flex flex-col items-start gap-16 sm:gap-40 mt-20 sm:mt-36">
          {
            sideTexts.map(({ ...sideTexts }, index) => {
              return (
                <SideText
                  key={index}
                  { ...sideTexts } 
                />
              )
            })
          }
        </section>
        <section className="flex flex-col items-center justify-center px-2 sm:px-0 mt-28 sm:mt-52 w-full">
          <span className='text-2xl sm:text-4xl font-semibold text-center sm:text-left'>
            ThresholdUSD Resources
          </span>
          <p className="text-grey text-center font-medium sm:font-semibold text-sm sm:text-lg mt-4 max-w-2xl">
            Explore our resources in detail through our comprehensive documentation. Engage and learn alongside our active community.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mt-12 sm:mt-20">
            <div className="flex flex-col items-center sm:items-start gap-2 max-w-xs">
              <div className="relative w-14 h-14">
                <Image src="/icons/notebook.svg" alt="notebook icon" fill={true} sizes="(min-width: 1rem) 24vw" />
              </div>
              <span className="font-bold text-lg mt-2">ThresholdUSD Docs</span>
              <p className="text-grey text-sm sm:text-base font-medium text-center sm:text-left">
                For in-depth understanding, refer to our detailed documentation.
                <br/><br/>
                <Link href="https://docs.threshold.network/applications/threshold-usd" target="_blank" rel="noopener noreferrer">
                  <span className="text-purple font-semibold text-sm sm:text-base">
                    Get Started
                  </span>
                </Link>
              </p>
            </div>
            <div className="flex flex-col items-center sm:items-start gap-2 max-w-xs">
              <div className="relative w-12 h-12 mb-2">
                <Image src="/icons/github.svg" alt="github icon" fill={true} sizes="(min-width: 1rem) 24vw" />
              </div>
              <span className="font-bold text-lg mt-2">Github Repo</span>
              <p className="text-grey text-sm sm:text-base font-medium text-center sm:text-left">
                Check out our GitHub repository for more technical details. 
                <br/><br/>
                <Link href="https://github.com/Threshold-USD/dev" target="_blank" rel="noopener noreferrer">
                  <span className="text-purple font-semibold text-sm sm:text-base">
                    Get Started
                  </span>
                </Link>
              </p>
            </div>
            <div className="flex flex-col items-center sm:items-start gap-2 max-w-xs">
              <div className="relative w-11 h-11 mb-3">
                <Image src="/icons/tbtc.svg" alt="tbtc dashboard icon" fill={true} sizes="(min-width: 1rem) 24vw" />
              </div>
              <span className="font-bold text-lg mt-2">tBTC Bridge</span>
              <p className="text-grey text-sm sm:text-base font-medium text-center sm:text-left">
                To mint thUSD, first bridge your BTC trustlessly to DeFi on tBTC bridge.
                <br/><br/>
                <Link href="https://dashboard.threshold.network/" target="_blank" rel="noopener noreferrer">
                  <span className="text-purple font-semibold text-sm sm:text-base">
                    Get Started
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center sm:items-start justify-center sm:justify-start mt-24 sm:mt-52 mb-16 sm:mb-40 w-full px-4 sm:px-16" id="faq">
          <span className="text-2xl sm:text-45xl font-bold text-center sm:text-left">
            Frequently Asked Questions
          </span>
          <div className="flex flex-col mt-2 gap-2 w-full md:w-2/3">
            {
            faq.map(
              ({ ...question }, index) => {
                return (
                  <Faq
                    key={index}
                    {...question} 
                  />
                )
              })
            }
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Features;