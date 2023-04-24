import Link from 'next/link'
import axios from "axios";
import deployments from "../public/collaterals.json";
import { useEffect, useState } from 'react';
import { Decimal } from '@/utils/Decimal';
import Image from 'next/image';
import { fetchCoinGeckoPrice } from '@/utils/fetchCoinGeckoPrice';

type CoingeckoID = {
  eth: "ethereum",
  tbtc: "tbtc"
}

const coingeckoIds: CoingeckoID = {
  eth: "ethereum",
  tbtc: "tbtc"
}

const network = "goerli"
const query = `
query {
  global(id: "only") {
    numberOfOpenTroves
    currentSystemState {
      totalCollateral
      totalDebt
    }
  }
}`

const queryGraph = async (query: string, apiUrl: string) => {
  try {
    const response = await axios.post(apiUrl, { query });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

const queryCollateralsData = async (collateral: any) => {
  const queriedData: any = []

  for (const collateralVersion of collateral.subfolders) {
    const version = collateralVersion.name
    const thresholdUrlByNetwork = `https://api.thegraph.com/subgraphs/name/evandrosaturnino/${collateral.name}-${version}-${network}-thresholdusd`
    const queriedCollateralData = await queryGraph(query, thresholdUrlByNetwork)
    queriedData.push({ collateralName: coingeckoIds[collateral.name as keyof CoingeckoID], queriedCollateralData })
  }

  const data: any = await Promise.all(queriedData)
  return data
}

type HomeProps = {
  data: any
}

export default function Home({ data }: HomeProps) {
  const [numberOfOpenedVaults, setNumberOfOpenedVaults] = useState<Decimal>()
  const [tvlInEth, setTvlInEth] = useState<Decimal>()
  const [thusdSupply, setThusdSupply] = useState<Decimal>()
  const [tokensPrice, setTokensPrice] = useState<Record<string, Decimal>>({})

  useEffect(() => {
    if (Object.values(tokensPrice).length != data.length) return

    let totalCollateral: Decimal = Decimal.from(0)
    let totalVaults: Decimal = Decimal.from(0)
    let thusdSupply: Decimal = Decimal.from(0)
    
    data.forEach((dataElement: any) => {
      const tokenPrice = tokensPrice[dataElement.collateralName]
      const tvl = tokenPrice.mul(Decimal.from(dataElement.queriedCollateralData.data.global.currentSystemState.totalCollateral))
      totalCollateral = totalCollateral.add(tvl)
      totalVaults = totalVaults.add(Decimal.from(dataElement.queriedCollateralData.data.global.numberOfOpenTroves))
      thusdSupply = thusdSupply.add(Decimal.from(dataElement.queriedCollateralData.data.global.currentSystemState.totalDebt))
    })
    setNumberOfOpenedVaults(totalVaults)
    setTvlInEth(totalCollateral)
    setThusdSupply(thusdSupply)
  }, [tokensPrice])

  useEffect(() => {
    if (data.length === 0) return
    data.forEach(async (dataElement: any) => {
      const { tokenPriceUSD } = await fetchCoinGeckoPrice(dataElement.collateralName)
      setTokensPrice((prev) => { return { ...prev, [dataElement.collateralName]: tokenPriceUSD }})
    })
    
  }, [data])

  return (
    <div className="flex flex-col min-h-screen items-center">  
      <section className="flex flex-col w-full max-w-8xl pr-3 sm:pl-12 sm:pr-12">
        <div className="flex justify-between mt-4">
          <Link href="/">
            <div className="mt-2 sm:mt-1 relative w-52 sm:w-60 h-3 sm:h-4">
              <Image src="./icons/threshold-usd.svg" alt="thresholdusd logo" fill={true} sizes="(min-width: 1rem) 24vw" />
            </div>
          </Link>
          <nav className="hidden lg:flex -mt-1 mr-20">
            <ul className="flex items-center gap-12">
              <li className="cursor-pointer uppercase font-bold text-sm border-b-2 border-purple py-2">
                <Link href="/">
                  home
                </Link>
              </li>
              <li className="cursor-pointer uppercase font-bold text-sm border-b-2 border-transparent py-2">
                <Link href="https://docs.threshold.network/applications/threshold-usd" target="_blank">
                  learn
                </Link>
              </li>
              <li className="cursor-pointer uppercase font-bold text-sm border-b-2 border-transparent py-2">
                <Link href="https://app.thresholdusd.org">
                  explore
                </Link>
              </li>
            </ul>
          </nav>
          <Link href="https://app.thresholdusd.org">
            <button className="flex items-center gap-2 bg-purple text-white text-xs sm:text-sm font-semibold rounded-lg px-4 sm:px-12 py-2 capitalize">
              sign in
            </button>
          </Link>
        </div>
      </section>
      <div className="flex flex-col w-full max-w-5xl px-6 sm:px-12">    
        <section className='flex flex-col items-center mt-32'>
          <h1 className="max-w-4xl text-center">Borrow thUSD against your tBTC</h1>
          <p className="text-center mt-8 sm:text-lg font-semibold text-grey">First bridge your BTC to tBTC. <br/>Then borrow USD stablecoin with tBTC trustlessly.</p>
          <div className="flex gap-4 sm:gap-8 mt-10">
            <Link href="https://app.thresholdusd.org">
              <button className="flex items-center gap-2 border bg-purple text-white text-xs sm:text-sm font-semibold rounded-lg px-4 sm:px-12 py-2.5">
                <div className="relative w-5 h-5">
                  <Image src="./icons/user-circle.svg" alt="user icon" fill={true} sizes="(min-width: 1rem) 24vw" />
                </div>
                <span>
                  Sign in
                </span>
              </button>
            </Link>
            <Link href="https://youtu.be/VDPNVibbPFI?t=495" target="_blank">
              <button className="flex items-center gap-2 border-2 border-purple text-xs sm:text-sm font-bold rounded-lg px-3 sm:px-9 py-2">
                <div className="relative w-5.5 h-5.5">
                  <Image src="./icons/play-circle.svg" alt="play video" fill={true} sizes="(min-width: 1rem) 24vw" />
                </div>
                <span>
                  Watch video
                </span>
              </button>
            </Link>
          </div>
        </section>
        <section className='flex justify-center mt-24'>
          <div className="flex shadow-lg rounded-2xl mx-12">
            <div className="hidden lg:flex flex-col items-center gap-1 border-r border-grey2 px-20 py-6 w-80">
              <span className="text-sm font-semibold text-grey">Testnet thUSD Supply</span>
              <span className="text-3xl font-bold text-blue1">{thusdSupply?.shorten() ?? "Loading"}</span>
              <span className="text-xs font-semibold text-grey3">LAST 24H</span>
            </div>
            <div className="hidden lg:flex flex-col items-center gap-1 px-20 py-6 w-80">
              <span className="text-sm font-semibold text-grey text-center ">Opened Vaults</span>
              <span className="text-3xl font-bold text-blue1">{numberOfOpenedVaults?.prettify(0) ?? "Loading"}</span>
              <span className="text-xs font-semibold text-grey3">LAST 24H</span>
            </div>
            <div className="flex flex-col justify-center gap-1 border-l border-grey2 px-12 lg:px-16 xl:px-14 py-6 text-center w-60 sm:w-80">
            <span className="text-sm font-semibold text-grey">Testnet TVL</span>
            <div className='flex items-center gap-2 justify-center'>
              <span className="text-3xl font-bold text-blue1">{tvlInEth?.prettify(2) ? `$${tvlInEth?.prettify(2)}` : "Loading"}</span>
            </div>
              <span className="text-xs font-semibold text-grey3">LAST 24H</span>
            </div>
          </div>
        </section>
        <section className='flex flex-col md:flex-row gap-20 md:gap-0 justify-center mt-32 sm:mt-40'>
          <div className="flex flex-col gap-4 text-left w-full">
            <span className="text-2xl">Support of multiple collaterals</span>
            <span className="text-sm">Supporting initially tBTC and ETH</span>
            <div className="flex items-start gap-3 mt-4">
              <div className="relative w-6 h-6 pt-0.5">
                <Image src="./icons/wavy-check.svg" alt="wavy check" fill={true} sizes="(min-width: 1rem) 24vw" />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-bold">Stablecoin backed on 110% collateral ratio</span>
                <span className="text-xs text-grey4 font-medium">The price stability is maintaned by a robust system <br/> around the collateral ratio of the backing asset</span>
              </div>
            </div>
            <div className="flex items-start gap-3 mt-3">
              <div className="relative w-6 h-6 pt-0.5">
                <Image src="./icons/shield-check.svg" alt="shield check" fill={true} sizes="(min-width: 1rem) 24vw" />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-bold">Censorship resistant</span>
                <span className="text-xs text-grey4 font-medium">No kyc, no permission required. Base code is immutable <br/> and the protocol is governed by the ThresholdDAO. </span>
              </div>
            </div>
            <div className="flex items-start gap-3 mt-3">
              <div className="relative w-6 h-6 pt-0.5">
                <Image src="./icons/note-search.svg" alt="note search" fill={true} sizes="(min-width: 1rem) 24vw" />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-bold">Don`t trust, verify</span>
                <span className="text-xs text-grey4 font-medium">The development of the contracts has been done publicly <br/> and can be checked by anyone in Github here</span>
              </div>
            </div>
          </div>
          <div className="flex items-center w-full">
            <div className="relative w-98 h-98 -mt-4">
              <Image src="./icons/tokens-cards.svg" alt="collateral tokens" fill={true} sizes="(min-width: 1rem) 24vw" />
            </div>
          </div>
        </section>
      </div>
      <div className="flex flex-col w-full max-w-7xl px-12 lg:px-20">
        <section className="flex flex-col mt-24 sm:mt-36">
          <h2>
            Trustless and Unstoppable
          </h2>
          <p className="text-grey font-medium sm:text-lg mt-6">
            Alongside to the fact that the base protocol has been derived from Liquity protocol, our modified contracts <br/>
            are currently being audited by respected 3rd parties companies.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-4 mt-12">
            <div className="flex flex-col gap-2 max-w-xs">
              <div className="relative w-14 h-14">
                <Image src="./icons/audit-code.svg" alt="audit code icon" fill={true} sizes="(min-width: 1rem) 24vw" />
              </div>
              <span className="font-bold text-lg mt-2">Contracts being audited</span>
              <p className="text-grey text-sm font-medium">Our contracts are undergoing an audit, which will soon be completed
                allowing for the deployment of mainnet contracts.
                <br/><br/>
                In the meantime, we invite you to check out our testnet app which is now fully operational and accessible here.
              </p>
            </div>
            <div className="flex flex-col gap-2 max-w-xs">
              <div className="relative w-14 h-14">
                <Image src="./icons/bitcoin.svg" alt="bitcoin icon" fill={true} sizes="(min-width: 1rem) 24vw" />
              </div>
              <span className="font-bold text-lg mt-2">A Bitcoin-backed stablecoin</span>
              <p className="text-grey text-sm font-medium">The thUSD is a USD pegged stablecoin backed initially by ETH and tBTC on a collateral ratio of at least 110%. <br/><br/> So users that holds BTC can firstly bridge to tBTC and after that, deposit their tBTC to borrow thUSD directly.
              </p>
            </div>
            <div className="flex flex-col gap-2 max-w-xs">
              <div className="relative w-14 h-14">
                <Image src="./icons/stacked-coins.svg" alt="stacked coins icon" fill={true} sizes="(min-width: 1rem) 24vw" />
              </div>
              <span className="font-bold text-lg mt-2">Be a stability provider</span>
              <p className="text-grey text-sm font-medium">To ensure that the stablecoin supply remains backed, Vaults that fall under the minimum col. ratio will be liquidated. <br/><br/> The debt of the Vault is cancelled and its collateral distributed among all Stability Providers.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="flex flex-col w-full max-w-5xl px-12">
        <section className="flex flex-col mt-24 sm:mt-40">
          <h3>
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-4 mt-12 sm:mt-5">
            <div className="flex flex-col gap-3 max-w-sm">
              <div className="relative w-7 h-7">
                <Image src="./icons/question-mark.svg" alt="question mark icon" fill={true} sizes="(min-width: 1rem) 24vw" />
              </div>
              <span className="mt-3 font-semibold">What is ThresholdUSD?</span>
              <p className="font-medium text-sm text-grey leading-6">
                ThresholdUSD is a decentralized protocol that enables you
                to borrow thUSD, a stablecoin soft-pegged against USD 
                and backed by ETH and tBTC as collaterals with a minimum 
                collateral ratio of 110%.
              </p>
            </div>
            <div className="flex flex-col gap-3 max-w-sm">
              <div className="relative w-7 h-7">
                <Image src="./icons/question-mark.svg" alt="question mark icon" fill={true} sizes="(min-width: 1rem) 24vw" />
              </div>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-4 mt-9">
            <div className="flex flex-col gap-3 max-w-sm">
              <div className="relative w-7 h-7">
                <Image src="./icons/question-mark.svg" alt="question mark icon" fill={true} sizes="(min-width: 1rem) 24vw" />
              </div>
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
              <div className="relative w-7 h-7">
                <Image src="./icons/question-mark.svg" alt="question mark icon" fill={true} sizes="(min-width: 1rem) 24vw" />
              </div>
              <span className="mt-3 font-semibold">Where can I learn more about the protocol?</span>
              <p className="font-medium text-sm text-grey leading-6">
              The technical documentation can be found <Link href="https://docs.threshold.network/applications/threshold-usd" target="_blank"><span className="text-blue">here.</span></Link><br/>
              More resources can be found in our <Link href="https://app.thresholdusd.org" target="_blank"><span className="text-blue">Discord server.</span></Link><br/>
               Stay up-to-date with the most recent news in our 
               <Link href="https://twitter.com/ThresholdUSD" target="_blank"><span className="text-blue"> Twitter.</span></Link>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 max-w-sm mt-16">
            <div className="relative w-7 h-7">
              <Image src="./icons/question-mark.svg" alt="question mark icon" fill={true} sizes="(min-width: 1rem) 24vw" />
            </div>
            <span className="mt-3 font-semibold">Full Faqs</span>
            <p className="font-medium text-sm text-grey leading-6">
            For a full list of FAQs, visit our <Link href="https://docs.threshold.network/applications/threshold-usd" target="_blank"><span className="text-blue">Help Center.</span></Link>
            </p>
          </div>
        </section>
        <section className='flex flex-col items-center mt-20 sm:mt-36 mb-28'>
          <span className="text-3xl sm:text-5xl font-bold">Join our DAO</span>
          <p className="text-center text-grey font-medium mt-2 text-sm sm:text-base">If you have any feedback, ideas or questions, feel free to drop in and say hello!
            <br/>We are a project driven by the community and open source. 
          </p>
          <div className="flex gap-12 mt-12">
            <Link href="https://discord.com/invite/threshold" target="_blank">
              <div className="flex flex-col items-center gap-3">
                <div className="relative w-7 sm:w-10 h-5 sm:h-8">
                  <Image src="./icons/discord.svg" alt="discord logo" fill={true} sizes="(min-width: 1rem) 24vw" />
                </div>
                <span className="text-xs sm:text-sm font-bold">Discord</span>
              </div>
            </Link>
            <Link href="https://twitter.com/ThresholdUSD" target="_blank">
              <div className="flex flex-col items-center gap-3">
                <div className="relative w-7 sm:w-10 h-5 sm:h-8">
                  <Image src="./icons/twitter.svg" alt="twitter logo" fill={true} sizes="(min-width: 1rem) 24vw" />
                </div>
                <span className="text-xs sm:text-sm font-bold">Twitter</span>
              </div>
            </Link>
            <Link href="https://app.thresholdusd.org" target="_blank">
              <div className="flex flex-col items-center gap-3">
                <div className="relative w-8 sm:w-11 h-4.5 sm:h-7.5">
                  <Image src="./icons/youtube.svg" alt="youtube logo" fill={true} sizes="(min-width: 1rem) 24vw" />
                </div>
                <span className="text-xs sm:text-sm font-bold">Youtube</span>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  let collateralData: any = []
  const collaterals = deployments.subfolders;
  
  for (const collateral of collaterals) {
    await queryCollateralsData(collateral).then(async (result) => {
      result.forEach((element: any) => collateralData.push(element));
    })
  }
  return {
    props: { data: collateralData }, // will be passed to the page component as props
  }
}
