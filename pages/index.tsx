import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center">  
      <section className="flex flex-col w-full max-w-8xl px-12">
        <div className="flex justify-between mt-4">
          <div>
            <img src="./icons/threshold-usd.svg" alt="thresholdusd logo" className="mt-1"/>
          </div>
          <nav className="-mt-1 mr-20">
            <ul className="flex items-center gap-12">
              <li className="cursor-pointer uppercase font-bold text-sm border-b-2 border-purple py-2">home</li>
              <li className="cursor-pointer uppercase font-bold text-sm border-b-2 border-transparent py-2">learn</li>
              <li className="cursor-pointer uppercase font-bold text-sm border-b-2 border-transparent py-2">explore</li>
            </ul>
          </nav>
          <button className="flex items-center gap-2 bg-purple text-white text-sm font-semibold rounded-lg px-12 py-2 capitalize">sign in</button>
        </div>
      </section>
      <div className="flex flex-col w-full max-w-5xl px-12">    
        <section className='flex flex-col items-center mt-32'>
          <h1 className="max-w-4xl text-center">Borrow thUSD against your tBTC</h1>
          <p className="text-center mt-8 text-lg font-semibold text-grey">First bridge your BTC to tBTC. <br/>Then borrow USD stablecoin with tBTC trustlessly.</p>
          <div className="flex gap-8 mt-10">
            <button className="flex items-center gap-2 border bg-purple text-white text-sm font-semibold rounded-lg px-12 py-2.5">
              <img src="./icons/user-circle.svg" alt="user icon" />
              <span>
                Sign in
              </span>
            </button>
            <button className="flex gap-2 border-2 border-purple text-sm font-bold rounded-lg px-8 py-2.5">
              <img src="./icons/play-circle.svg" alt="play video" />
              <span>
                Watch video
              </span>
              </button>
          </div>
        </section>
        <section className='flex justify-center mt-24'>
          <div className="flex shadow-lg rounded-2xl">
            <div className="flex flex-col items-center gap-1 border-r border-grey2 px-16 py-6">
              <span className="text-sm font-semibold text-grey">Trades volume</span>
              <span className="text-3xl font-bold text-blue1">$1,649,325,333</span>
              <span className="text-xs font-semibold text-grey3">LAST 24H</span>
            </div>
            <div className="flex flex-col items-center gap-1 px-32 py-6">
            <span className="text-sm font-semibold text-grey">Trades</span>
              <span className="text-3xl font-bold text-blue1">499,932</span>
              <span className="text-xs font-semibold text-grey3">LAST 24H</span>
            </div>
            <div className="flex flex-col justify-center gap-1 border-l border-grey2 px-20 py-6y text-center">
            <span className="text-sm font-semibold text-grey">TVL</span>
              <span className="text-3xl font-bold text-blue1">$362,325,333</span>
              <span className="text-xs font-semibold text-grey3">LAST 24H</span>
            </div>
          </div>
        </section>
        <section className='flex justify-center mt-40'>
          <div className="flex flex-col gap-4 text-left w-full">
            <span className="text-2xl">Support of multiple collaterals</span>
            <span className="text-sm">Supporting initially tBTC and ETH</span>
            <div className="flex items-start gap-3 mt-4">
              <img src="./icons/wavy-check.svg" alt="wavy check" className="pt-0.5" />
              <div className="flex flex-col gap-2">
                <span className="font-bold">Stablecoin backed on 110% collateral ratio</span>
                <span className="text-xs text-grey4 font-medium">The price stability is maintaned by a robust system <br/> around the collateral ratio of the backing asset</span>
              </div>
            </div>
            <div className="flex items-start gap-3 mt-3">
              <img src="./icons/shield-check.svg" alt="wavy check" className="pt-0.5" />
              <div className="flex flex-col gap-2">
                <span className="font-bold">Censorship resistant</span>
                <span className="text-xs text-grey4 font-medium">No kyc, no permission required. Base code is immutable <br/> and the protocol is governed by the ThresholdDAO. </span>
              </div>
            </div>
            <div className="flex items-start gap-3 mt-3">
              <img src="./icons/note-search.svg" alt="wavy check" className="pt-0.5" />
              <div className="flex flex-col gap-2">
                <span className="font-bold">Don't trust, verify</span>
                <span className="text-xs text-grey4 font-medium">The development of the contracts has been done publicly <br/> and can be checked by anyone in Github here</span>
              </div>
            </div>
          </div>
          <div className="flex items-center w-full">
            <img src="./icons/tokens-cards.svg" alt="collateral tokens" className="pl-4" />
          </div>
        </section>
      </div>
      <div className="flex flex-col w-full max-w-7xl px-20">
        <section className="flex flex-col mt-48">
          <h2>
            Security By Design
          </h2>
          <p className="text-grey font-medium text-lg mt-6">
            Alongside to the fact that the base protocol has been derived from Liquity protocol, our modified contracts <br/>
            are currently being audited by respected 3rd parties companies.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-12">
            <div className="flex flex-col gap-2 max-w-xs">
              <img src="./icons/audit-code.svg" alt="audit code icon" className="w-14" />
              <span className="font-bold text-lg mt-2">Contracts being audited</span>
              <p className="text-grey text-sm font-medium">Our contracts are undergoing an audit, which will soon be completed
                allowing for the deployment of mainnet contracts.
                <br/><br/>
                In the meantime, we invite you to check out our testnet app which is now fully operational and accessible here.
              </p>
            </div>
            <div className="flex flex-col gap-2 max-w-xs">
              <img src="./icons/bitcoin.svg" alt="bitcoin icon" className="w-14" />
              <span className="font-bold text-lg mt-2">A Bitcoin-backed stablecoin</span>
              <p className="text-grey text-sm font-medium">The thUSD is a USD pegged stablecoin backed initially by ETH and tBTC on a collateral ratio of at least 110%. <br/><br/> So users that holds BTC can firstly bridge to tBTC and after that, deposit their tBTC to borrow thUSD directly.
              </p>
            </div>
            <div className="flex flex-col gap-2 max-w-xs">
              <img src="./icons/stacked-coins.svg" alt="stacked coins icon" className="w-14" />
              <span className="font-bold text-lg mt-2">Be a stability provider</span>
              <p className="text-grey text-sm font-medium">To ensure that the stablecoin supply remains backed, Vaults that fall under the minimum col. ratio will be liquidated. <br/><br/> The debt of the Vault is cancelled and its collateral distributed among all Stability Providers.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="flex flex-col w-full max-w-5xl px-12">
        <section className="flex flex-col mt-40">
          <h3>
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-2 gap-4 mt-5">
            <div className="flex flex-col gap-3 max-w-sm">
              <img src="./icons/question-mark.svg" alt="question mark icon" className="w-7" />
              <span className="mt-3 font-semibold">What is ThresholdUSD?</span>
              <p className="font-medium text-sm text-grey leading-6">
                ThresholdUSD is a decentralized protocol that enables you
                to borrow thUSD, a stablecoin soft-pegged against USD 
                and backed by ETH and tBTC as collaterals with a minimum 
                collateral ratio of 110%.
              </p>
            </div>
            <div className="flex flex-col gap-3 max-w-sm">
            <img src="./icons/question-mark.svg" alt="question mark icon" className="w-7" />
              <span className="mt-3 font-semibold">What are the key benefits of ThresholdUSD?</span>
              <p className="font-medium text-sm text-grey leading-6">
              Here follows some key benefits of using ThresholUSD:
              <br/>
              <br/>
              1. Borrow USD stablecoin with your a backed BTC asset
              <br/>
              2. Stake your thUSD in the BAMM contract natively
              <br/>
              3. Redeem your collateral assets at any time
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-9">
            <div className="flex flex-col gap-3 max-w-sm">
              <img src="./icons/question-mark.svg" alt="question mark icon" className="w-7" />
              <span className="mt-3 font-semibold">How does it works?</span>
              <p className="font-medium text-sm text-grey leading-6">
              To ensure that the entire stablecoin supply remains fully 
              backed by collateral, Vaults that fall under the minimum 
              collateral ratio of 110% will be closed (liquidated). 
              <br/>
              <br/>
              The debt of the Vault is canceled and absorbed by the 
              Stability Pool and its collateral distributed among Stability 
              Providers.
              </p>
            </div>
            <div className="flex flex-col gap-3 max-w-sm">
              <img src="./icons/question-mark.svg" alt="question mark icon" className="w-7" />
              <span className="mt-3 font-semibold">Where can I learn more about the protocol?</span>
              <p className="font-medium text-sm text-grey leading-6">
              The technical  documentation can be found <span className="text-blue">here.</span><br/>
              More resources can be found in our <span className="text-blue">Discord server.</span><br/>
               Stay up-to-date with the most recent news in our 
              <span className="text-blue"> Twitter.</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 max-w-sm mt-16">
              <img src="./icons/faq.svg" alt="question mark icon" className="w-7" />
              <span className="mt-3 font-semibold">Full Faqs</span>
              <p className="font-medium text-sm text-grey leading-6">
              For a full list of FAQs, visit our <span className="text-blue">Help Center.</span>
              </p>
            </div>
        </section>
        <section className='flex flex-col items-center mt-36 mb-28'>
          <span className="text-5xl font-bold">Get Involved</span>
          <p className="text-center text-grey font-medium mt-2">We are a project driven by the community and open source. 
            <br/>If you have any feedback, ideas or questions, feel free to drop in and say hello!
          </p>
          <div className="flex gap-12 mt-12">
            <div className="flex flex-col items-center gap-3">
              <img src="./icons/discord.svg" alt="discord logo" />
              <span className="text-sm font-bold">Discord</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <img src="./icons/twitter.svg" alt="twitter logo" />
              <span className="text-sm font-bold">Twitter</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <img src="./icons/youtube.svg" alt="youtube logo" />
              <span className="text-sm font-bold">Youtube</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
