import Link from 'next/link';
import axios from 'axios';
import deployments from '../../public/collaterals.json';
import { useContext, useEffect, useState } from 'react';
import { Decimal } from '@/utils/Decimal';
import Image from 'next/image';
import { fetchCoinGeckoPrice } from '@/utils/fetchCoinGeckoPrice';

import Header from '../../components/Header';
import Footer from '@/components/Footer';
import { GetStaticPaths } from 'next';
import LazyText from '@/components/LazyText';
import { ThemeContext } from '@/utils/ThemeContext';

type CoingeckoID = {
  eth: 'ethereum';
  tbtc: 'tbtc';
};

const coingeckoIds: CoingeckoID = {
  eth: 'ethereum',
  tbtc: 'tbtc',
};

const networks = ['goerli', 'sepolia'];
const query = `
query {
  global(id: "only") {
    numberOfOpenTroves
    currentSystemState {
      totalCollateral
      totalDebt
    }
  }
}`;

const queryGraph = async (query: string, apiUrl: string) => {
  try {
    const response = await axios.post(apiUrl, { query });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

const queryCollateralsData = async (collateral: any) => {
  const queriedData: any = [];

  for (const collateralVersion of collateral.subfolders) {
    const version = collateralVersion.name;
    for (const network of networks) {
      const thresholdUrlByNetwork = `https://api.thegraph.com/subgraphs/name/evandrosaturnino/${collateral.name}-${version}-${network}-thresholdusd`;
      const queriedCollateralData = await queryGraph(
        query,
        thresholdUrlByNetwork,
      ).catch((e) => console.log(e));
      queriedData.push({
        collateralName: coingeckoIds[collateral.name as keyof CoingeckoID],
        queriedCollateralData,
      });
    }
  }

  const data: any = await Promise.all(queriedData);
  return data;
};

type HomeProps = {
  data: any;
};

export default function Home({ data }: HomeProps): JSX.Element {
  const { theme } = useContext(ThemeContext);
  const [numberOfOpenedVaults, setNumberOfOpenedVaults] = useState<Decimal>();
  const [tvlInEth, setTvlInEth] = useState<Decimal>();
  const [thusdSupply, setThusdSupply] = useState<Decimal>();
  const [tokensPrice, setTokensPrice] = useState<Record<string, Decimal>>({});

  useEffect(() => {
    if (Object.values(tokensPrice).length != Object.values(coingeckoIds).length)
      return;
    let totalCollateral: Decimal = Decimal.from(0);
    let totalVaults: Decimal = Decimal.from(0);
    let thusdSupply: Decimal = Decimal.from(0);

    data.forEach((dataElement: any) => {
      if (!dataElement || !dataElement.queriedCollateralData.data) {
        return;
      }
      const tokenPrice = tokensPrice[dataElement.collateralName];
      const tvl = tokenPrice.mul(
        Decimal.from(
          dataElement.queriedCollateralData.data.global.currentSystemState
            .totalCollateral,
        ),
      );
      totalCollateral = totalCollateral.add(tvl);
      totalVaults = totalVaults.add(
        Decimal.from(
          dataElement.queriedCollateralData.data.global.numberOfOpenTroves,
        ),
      );
      thusdSupply = thusdSupply.add(
        Decimal.from(
          dataElement.queriedCollateralData.data.global.currentSystemState
            .totalDebt,
        ),
      );
    });
    setNumberOfOpenedVaults(totalVaults);
    setTvlInEth(totalCollateral);
    setThusdSupply(thusdSupply);
  }, [tokensPrice]);

  useEffect(() => {
    if (data.length === 0) return;
    data.forEach(async (dataElement: any) => {
      const { tokenPriceUSD } = await fetchCoinGeckoPrice(
        dataElement.collateralName,
      );
      setTokensPrice((prev) => {
        return { ...prev, [dataElement.collateralName]: tokenPriceUSD };
      });
    });
  }, [data]);

  return (
    <>
      <Header />
      <div className="flex flex-col w-full max-w-5xl px-6 sm:px-12 dark:text-white">
        <section className="flex flex-col items-center justify-center gap-4 mt-32">
          <h1 className="max-w-4xl text-center xl:leading-[5.25rem]">
            <LazyText
              text="heroBannerTitle"
              className="h-16 w-56 sm:w-96 -mt-4"
            />
          </h1>
          <LazyText className="h-12 w-40 sm:w-56" />
          <p className="text-center mt-4 sm:text-lg font-semibold text-grey dark:text-grey3">
            <LazyText
              text="heroBannerFirstSubTitle"
              className="mt-2 h-4 w-40 sm:w-56"
            />
            <br />
            <LazyText
              text="heroBannerSecondSubTitle"
              className="mb-2 h-4 w-20 sm:w-80"
            />
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-10 dark:text-white">
            <Link href="https://app.thresholdusd.org">
              <button className="flex items-center gap-2 bg-purple text-white text-xs sm:text-sm font-semibold rounded-lg px-8 sm:px-12 h-11">
                <div className="relative w-5 h-5">
                  <Image
                    src="/icons/user-circle.svg"
                    alt="user icon"
                    fill={true}
                    sizes="(min-width: 1rem) 24vw"
                    loading="lazy"
                  />
                </div>
                <span className="flex items-center justify-center">
                  <LazyText text="heroBannerButton" className="w-12 h-3.5" />
                </span>
              </button>
            </Link>
            <Link href="https://youtu.be/VDPNVibbPFI?t=495" target="_blank">
              <button className="flex items-center gap-2 border-2 border-purple text-xs sm:text-sm font-bold rounded-lg px-3 sm:px-9 h-11">
                <div className="relative w-5.5 h-5.5">
                  <Image
                    src={`/icons/${
                      theme === 'light'
                        ? 'play-circle.svg'
                        : 'dark-play-circle.svg'
                    }`}
                    alt="play video"
                    fill={true}
                    sizes="(min-width: 1rem) 24vw"
                    loading="lazy"
                  />
                </div>
                <span className="flex items-center justify-center">
                  <LazyText
                    text="secondHeroBannerButton"
                    className="w-20 h-3.5"
                  />
                </span>
              </button>
            </Link>
          </div>
        </section>
        <section className="flex justify-center mt-24">
          <div className="flex shadow-lg rounded-2xl mx-12 dark:bg-darkBlue">
            <div className="hidden lg:flex flex-col items-center gap-1 border-r border-grey2 dark:border-grey/40 px-20 py-6 w-80">
              <span className="text-sm font-semibold text-grey text-center dark:text-white">
                <LazyText text="card1" />
              </span>
              <span className="text-3xl font-bold text-blue1 dark:text-purple">
                {thusdSupply?.shorten() ?? <LazyText text="loading" />}
              </span>
              <span className="text-xs font-semibold text-grey3">
                <LazyText text="cardsBelow" />
              </span>
            </div>
            <div className="hidden lg:flex flex-col items-center gap-1 px-20 py-6 w-80">
              <span className="text-sm font-semibold text-grey text-center dark:text-white">
                <LazyText text="card2" />
              </span>
              <span className="text-3xl font-bold text-blue1 dark:text-purple">
                {numberOfOpenedVaults?.prettify(0) ?? (
                  <LazyText text="loading" />
                )}
              </span>
              <span className="text-xs font-semibold text-grey3">
                <LazyText text="cardsBelow" />
              </span>
            </div>
            <div className="flex flex-col justify-center gap-1 border-l border-grey2 dark:border-grey/40 px-12 lg:px-16 xl:px-14 py-6 text-center w-60 sm:w-80 pb-12">
              <span className="text-sm font-semibold text-grey text-center dark:text-white">
                <LazyText text="card3" />
              </span>
              <div className="flex items-center gap-2 justify-center">
                <span className="text-3xl font-bold text-blue1 dark:text-purple">
                  {tvlInEth?.prettify(2) ? (
                    `$${tvlInEth?.prettify(2)}`
                  ) : (
                    <LazyText text="loading" />
                  )}
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col md:flex-row gap-12 sm:gap-20 md:gap-0 justify-center mt-32 sm:mt-40">
          <div className="flex flex-col gap-4 text-left w-full">
            <span className="text-2xl text-center sm:text-left font-bold">
              <LazyText
                text="featuresComponentTitle"
                className="w-full sm:w-80 h-3.5"
              />
            </span>
            <span className="text-sm text-center sm:text-left dark:text-grey3">
              <LazyText
                text="featuresComponentSubTitle"
                className="w-full sm:w-96 h-3.5"
              />
            </span>
            <div className="flex items-start gap-3 mt-4">
              <div className="relative w-8 h-8 pt-0.5">
                <Image
                  src="/icons/wavy-check.svg"
                  alt="wavy check"
                  fill={true}
                  sizes="(min-width: 1rem) 24vw"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-bold">
                  <LazyText
                    text="firstFeatureTitle"
                    className="w-full sm:w-96 h-3.5"
                  />
                </span>
                <span className="text-xs text-grey4 font-medium pr-20 dark:text-grey3">
                  <LazyText
                    text="firstFeatureDescription"
                    className="w-full sm:w-96 h-3.5"
                    numberOfLines={2}
                  />
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3 mt-3">
              <div className="relative w-8 h-8 pt-0.5">
                <Image
                  src="/icons/shield-check.svg"
                  alt="shield check"
                  fill={true}
                  sizes="(min-width: 1rem) 24vw"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-bold">
                  <LazyText
                    text="secondFeatureTitle"
                    className="w-full sm:w-44 h-3.5"
                  />
                </span>
                <span className="text-xs text-grey4 font-medium pr-20 dark:text-grey3">
                  <LazyText
                    text="secondFeatureDescription"
                    className="w-full sm:w-80 h-3.5"
                    numberOfLines={2}
                  />
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3 mt-3">
              <div className="relative w-8 h-8 pt-0.5">
                <Image
                  src="/icons/note-search.svg"
                  alt="note search"
                  fill={true}
                  sizes="(min-width: 1rem) 24vw"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-bold">
                  <LazyText
                    text="thirdFeatureTitle"
                    className="w-full sm:w-40 h-3.5"
                  />
                </span>
                <span className="text-xs text-grey4 font-medium pr-20 dark:text-grey3">
                  <LazyText
                    text="thirdFeatureDescription"
                    className="w-full sm:w-96 h-3.5"
                    numberOfLines={2}
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center 2xl:justify-end w-full">
            <div className="relative w-60 h-60 sm:w-98 sm:h-98">
              <Image
                src={
                  theme === 'light'
                    ? '/icons/tokens-cards.svg'
                    : '/icons/dark-tokens-cards.svg'
                }
                alt="collateral tokens"
                fill={true}
                sizes="(min-width: 1rem) 24vw"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </div>
      <div className="flex flex-col w-full max-w-7xl px-12 lg:px-20">
        <section className="flex flex-col mt-24 sm:mt-36 dark:text-white">
          <h2>
            <LazyText
              text="highlightsComponentTitle"
              className="w-full sm:w-96 h-8"
            />
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-4 mt-12">
            <div className="flex flex-col gap-2 max-w-xs">
              <div className="relative w-14 h-14">
                <Image
                  src="/icons/audit-code.svg"
                  alt="audit code icon"
                  fill={true}
                  sizes="(min-width: 1rem) 24vw"
                  loading="lazy"
                />
              </div>
              <span className="font-bold text-lg mt-2">
                <LazyText text="firstHighlightTitle" className="w-full h-3.5" />
              </span>
              <p className="text-grey text-sm font-medium dark:text-grey3">
                <LazyText
                  text="firstHighlightDescriptionFirstParagraph"
                  className="w-full h-3.5"
                  numberOfLines={3}
                />
                <br />
                <br />
                <LazyText
                  text="firstHighlightDescriptionSecondParagraph"
                  className="w-full h-3.5"
                  numberOfLines={3}
                />
              </p>
            </div>
            <div className="flex flex-col gap-2 max-w-xs">
              <div className="relative w-14 h-14">
                <Image
                  src="/icons/bitcoin.svg"
                  alt="bitcoin icon"
                  fill={true}
                  sizes="(min-width: 1rem) 24vw"
                  loading="lazy"
                />
              </div>
              <span className="font-bold text-lg mt-2">
                <LazyText
                  text="secondHighlightTitle"
                  className="w-full h-3.5"
                />
              </span>
              <p className="text-grey text-sm font-medium dark:text-grey3">
                <LazyText
                  text="secondHighlightDescriptionFirstParagraph"
                  className="w-full h-3.5"
                  numberOfLines={3}
                />
                <br />
                <br />
                <LazyText
                  text="secondHighlightDescriptionSecondParagraph"
                  className="w-full h-3.5"
                  numberOfLines={3}
                />
              </p>
            </div>
            <div className="flex flex-col gap-2 max-w-xs">
              <div className="relative w-14 h-14">
                <Image
                  src="/icons/stacked-coins.svg"
                  alt="stacked coins icon"
                  fill={true}
                  sizes="(min-width: 1rem) 24vw"
                  loading="lazy"
                />
              </div>
              <span className="font-bold text-lg mt-2">
                <LazyText text="thirdHighlightTitle" className="w-full h-3.5" />
              </span>
              <p className="text-grey text-sm font-medium dark:text-grey3">
                <LazyText
                  text="thirdHighlightDescriptionFirstParagraph"
                  className="w-full h-3.5"
                  numberOfLines={3}
                />
                <br />
                <br />
                <LazyText
                  text="thirdHighlightDescriptionSecondParagraph"
                  className="w-full h-3.5"
                  numberOfLines={3}
                />
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="flex flex-col w-full max-w-5xl px-12">
        <section className="flex flex-col mt-24 sm:mt-40">
          <h3 className="dark:text-white">
            <LazyText text="faqComponentTitle" className="w-40 sm:w-60 h-6" />
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-4 mt-12 sm:mt-5">
            <div className="flex flex-col gap-3 max-w-sm">
              <div className="relative w-7 h-7">
                <Image
                  src="/icons/question-mark.svg"
                  alt="question mark icon"
                  fill={true}
                  sizes="(min-width: 1rem) 24vw"
                  loading="lazy"
                />
              </div>
              <span className="mt-3 font-semibold dark:text-white">
                <LazyText
                  text="firstFrequentAskedQuestion"
                  className="w-44 h-3.5"
                />
              </span>
              <p className="font-medium text-sm text-grey leading-6 dark:text-grey3">
                <LazyText
                  text="firstAnswer"
                  className="w-full h-3.5"
                  numberOfLines={5}
                />
              </p>
            </div>
            <div className="flex flex-col gap-3 max-w-sm">
              <div className="relative w-7 h-7">
                <Image
                  src="/icons/question-mark.svg"
                  alt="question mark icon"
                  fill={true}
                  sizes="(min-width: 1rem) 24vw"
                  loading="lazy"
                />
              </div>
              <span className="mt-3 font-semibold dark:text-white">
                <LazyText
                  text="secondFrequentAskedQuestion"
                  className="w-full h-3.5"
                />
              </span>
              <p className="font-medium text-sm text-grey leading-6 dark:text-grey3">
                <LazyText
                  text="secondAnswerFirstParagraph"
                  className="w-full h-3.5"
                />
                <LazyText className="w-20 h-3.5" />
                <br />
                <br />
                <LazyText
                  text="secondAnswerFirstPoint"
                  className="w-full h-3.5"
                />
                <br />
                <LazyText
                  text="secondAnswerSecondPoint"
                  className="w-full h-3.5"
                />
                <br />
                <LazyText
                  text="secondAnswerThirdPoint"
                  className="w-full h-3.5"
                />
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-4 mt-9">
            <div className="flex flex-col gap-3 max-w-sm">
              <div className="relative w-7 h-7">
                <Image
                  src="/icons/question-mark.svg"
                  alt="question mark icon"
                  fill={true}
                  sizes="(min-width: 1rem) 24vw"
                  loading="lazy"
                />
              </div>
              <span className="mt-3 font-semibold dark:text-white">
                <LazyText
                  text="thirdFrequentAskedQuestion"
                  className="w-36 h-3.5"
                />
              </span>
              <p className="font-medium text-sm text-grey leading-6 dark:text-grey3">
                <LazyText
                  text="thirdAnswerFirstParagraph"
                  className="w-full h-3.5"
                  numberOfLines={4}
                />
                <br />
                <br />
                <LazyText
                  text="thirdAnswerSecondParagraph"
                  className="w-full h-3.5"
                  numberOfLines={3}
                />
              </p>
            </div>
            <div className="flex flex-col gap-3 max-w-sm">
              <div className="relative w-7 h-7">
                <Image
                  src="/icons/question-mark.svg"
                  alt="question mark icon"
                  fill={true}
                  sizes="(min-width: 1rem) 24vw"
                  loading="lazy"
                />
              </div>
              <span className="mt-3 font-semibold dark:text-white">
                <LazyText
                  text="fourthFrequentAskedQuestion"
                  className="w-full h-3.5"
                />
              </span>
              <p className="font-medium text-sm text-grey leading-6 dark:text-grey3">
                <LazyText
                  text="fourthAnswerFirstSentence"
                  className="w-full h-3.5"
                />
                <Link
                  href="https://docs.threshold.network/applications/threshold-usd"
                  target="_blank"
                >
                  <span className="text-blue">
                    <LazyText
                      text="fourthAnswerSecondSentence"
                      className="w-20 h-3.5"
                    />
                  </span>
                </Link>
                <br />
                <LazyText
                  text="fourthAnswerThirdSentence"
                  className="w-full h-3.5"
                />
                <Link href="https://app.thresholdusd.org" target="_blank">
                  <span className="text-blue">
                    <LazyText
                      text="fourthAnswerFourthSentence"
                      className="w-20 h-3.5"
                    />
                  </span>
                </Link>
                <br />
                <br />
                <LazyText
                  text="fourthAnswerFifthSentence"
                  className="w-full h-3.5"
                />
                <Link href="https://twitter.com/ThresholdUSD" target="_blank">
                  <span className="text-blue">
                    <LazyText text="thirdSocialNetwork" />
                  </span>
                </Link>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 max-w-sm mt-16">
            <div className="relative w-7 h-7">
              <Image
                src="/icons/question-mark.svg"
                alt="question mark icon"
                fill={true}
                sizes="(min-width: 1rem) 24vw"
                loading="lazy"
              />
            </div>
            <span className="mt-3 font-semibold dark:text-white">
              <LazyText text="frequentAskedQuestionCTATitle" />
            </span>
            <p className="font-medium text-sm text-grey leading-6 dark:text-grey3">
              <LazyText
                text="frequentAskedQuestionCTADescriptionFirstSentence"
                className="w-full h-3.5"
              />
              <Link href="/features/#faq">
                <span className="text-blue">
                  <LazyText
                    text="frequentAskedQuestionCTADescriptionSecondSentence"
                    className="w-20 h-3.5"
                  />
                </span>
              </Link>
            </p>
          </div>
        </section>
      </div>
      <div className="flex flex-col w-full max-w-7xl px-12">
        <section className="flex flex-col items-center mt-20 sm:mt-36 mb-8 sm:mb-28">
          <span className="text-3xl sm:text-5xl font-bold text-center sm:text-left dark:text-white">
            <LazyText text="socialCTATitle" className="w-40 sm:w-60 h-8" />
          </span>
          <p className="text-center text-grey font-medium mt-6 sm:mt-2 text-sm sm:text-base sm:px-69.5 dark:text-grey3">
            <LazyText text="socialCTASubtitle" className="w-40 sm:w-80 h-3.5" />
          </p>
          <LazyText className="mt-1 w-40 sm:w-60 h-3.5" />
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 mt-12">
            <Link href="https://discord.com/invite/threshold" target="_blank">
              <div className="flex flex-col items-center gap-3">
                <div className="relative w-7 sm:w-10 h-5 sm:h-8">
                  <Image
                    src="/icons/discord.svg"
                    alt="discord logo"
                    fill={true}
                    sizes="(min-width: 1rem) 24vw"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs sm:text-sm font-bold dark:text-white">
                  <LazyText text="firstSocialNetwork" />
                </span>
              </div>
            </Link>
            <Link href="https://forum.threshold.network/" target="_blank">
              <div className="flex flex-col items-center gap-3">
                <div className="relative w-8 sm:w-11 h-4.5 sm:h-7.5 mt-0.5">
                  <Image
                    src="/icons/threshold.svg"
                    alt="Threshold logo"
                    fill={true}
                    sizes="(min-width: 1rem) 24vw"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs sm:text-sm font-bold dark:text-white">
                  <LazyText text="secondSocialNetwork" />
                </span>
              </div>
            </Link>
            <Link href="https://twitter.com/ThresholdUSD" target="_blank">
              <div className="flex flex-col items-center gap-3">
                <div className="relative w-7 sm:w-10 h-5 sm:h-8">
                  <Image
                    src="/icons/twitter.svg"
                    alt="twitter logo"
                    fill={true}
                    sizes="(min-width: 1rem) 24vw"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs sm:text-sm font-bold dark:text-white">
                  <LazyText text="thirdSocialNetwork" />
                </span>
              </div>
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Here we're hard coding the paths, but you could fetch these from an API or filesystem
  const paths = [
    { params: { lang: 'en' } },
    { params: { lang: 'pt' } },
    { params: { lang: 'es' } },
  ];

  return { paths, fallback: false };
};

export async function getStaticProps() {
  const collateralData: any = [];
  const collaterals = deployments.subfolders;

  for (const collateral of collaterals) {
    await queryCollateralsData(collateral).then(async (result) => {
      result.forEach((element: any) => collateralData.push(element));
    });
  }
  return {
    props: { data: collateralData }, // will be passed to the page component as props
  };
}
