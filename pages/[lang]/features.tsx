import Link from 'next/link';
import Header from '../../components/Header';
import React from 'react';
import Image from 'next/image';
import SideText from '../../components/SideText';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import LazyText from '@/components/LazyText';

export type SideTextType = {
  imageUrl: string
  imageAlt: string
  title: JSX.Element
  description: JSX.Element
  isReversed: boolean
  buttonText?: string
  imageSizes?: string,
  gap?: string,
  textMargin?: string
}

const Features = (): JSX.Element => {
  const faq = [
    {
      question: <LazyText text="firstFrequentAskedQuestion" className="w-40 sm:w-60 h-3.5" />,
      answer: <LazyText text="firstAnswer" />,
      opened: true
    },
    {
      question: <LazyText text="featuresPageFirstQuestion" className="w-40 sm:w-60 h-3.5" />,
      answer: <div>
        <ul className="flex flex-col gap-3">
          <LazyText text="featuresPageFirstAnswerFirstParagraph" />
          <li className="mt-4">
            <LazyText text="featuresPageFirstAnswerSecondParagraph" />
          </li>
          <li>
            <LazyText text="featuresPageFirstAnswerThirdParagraph" />
          </li>
          <li>
            <LazyText text="featuresPageFirstAnswerFourthParagraph" />
          </li>
          <li>
            <LazyText text="featuresPageFirstAnswerFifthParagraph" />
          </li>
          <li>
            <LazyText text="featuresPageFirstAnswerSixthParagraph" />
          </li>
        </ul>
      </div>,
    },
    {
      question: <LazyText text="featuresPageSecondQuestion" className="w-40 sm:w-60 h-3.5" />,
      answer: <div>
        <LazyText text="featuresPageSecondAnswerFirstParagraph" />
        <br /><br />
        <LazyText text="featuresPageSecondAnswerSecondParagraph" />
      </div>,
    },
    {
      question: <LazyText text="featuresPageThirdQuestion" className="w-40 sm:w-60 h-3.5" />,
      answer: <div>
        <LazyText text="featuresPageThirdAnswerFirstSentence" />
        <Link href="https://docs.threshold.network/applications/threshold-usd" target="_blank" rel="noopener noreferrer">
          <span className="text-purple">
            <LazyText text="featuresPageThirdAnswerSecondSentence" />
          </span>
        </Link>
        <LazyText text="featuresPageThirdAnswerThirdSentence" />
        <Link href="https://discord.com/invite/Threshold" target="_blank" rel="noopener noreferrer">
          <span className="text-purple">
            <LazyText text="featuresPageThirdAnswerFourthSentence" />
          </span>
        </Link>
        <LazyText text="featuresPageThirdAnswerFifthSentence" />
        <Link href="https://twitter.com/TheTNetwork" target="_blank" rel="noopener noreferrer">
          <span className="text-purple">
            <LazyText text="footerSecondMenuNav4" />
          </span>
        </Link>.
      </div>,
    },
    {
      question: <LazyText text="featuresPageFourthQuestion" className="w-40 sm:w-60 h-3.5" />,
      answer: <div>
        <LazyText text="featuresPageFourthAnswer" />
      </div>,
    },
    {
      question: <LazyText text="featuresPageFifthQuestion" className="w-40 sm:w-60 h-3.5" />,
      answer: <div>
        <LazyText text="featuresPageFifthAnswerFirstParagraph" />
        <br /><br />
        <LazyText text="featuresPageFifthAnswerSecondParagraph" />
        <br /><br />
        <LazyText text="featuresPageFifthAnswerThirdParagraph" />
      </div>,
    },
    {
      question: <LazyText text="featuresPageSixthQuestion" className="w-40 sm:w-60 h-3.5" />,
      answer: <div>
        <LazyText text="featuresPageSixthAnswerFirstParagraphFirstSentence" />
        <Link href="https://taho.xyz/" target="_blank" rel="noopener noreferrer">
          <span className="text-purple">
            TaHo
          </span>
        </Link>
        <LazyText text="featuresPageSixthAnswerFirstParagraphSecondSentence" />
        <br /><br />
        <LazyText text="featuresPageSixthAnswerSecondParagraph" />
      </div>,
    },
    {
      question: <LazyText text="featuresPageSeventhQuestion" className="w-40 sm:w-60 h-3.5" />,
      answer: <div>
        <LazyText text="featuresPageSeventhAnswer" />
      </div>,
    },
    {
      question: <LazyText text="featuresPageEighthQuestion" className="w-40 sm:w-60 h-3.5" />,
      answer: <div>
        <LazyText text="featuresPageEighthAnswerFirstParagraph" />
        <br /><br />
        <LazyText text="featuresPageEighthAnswerSecondParagraph" />
        <br /><br />
        <LazyText text="featuresPageEighthAnswerThirdParagraphFirstSentence" />
        <Link href="https://www.liquity.org/blog/on-price-stability-of-liquity" target="_blank" rel="noopener noreferrer">
          <span className="text-purple">
            <LazyText text="featuresPageEighthAnswerThirdParagraphSecondSentence" />
          </span>
        </Link>
        <LazyText text="featuresPageEighthAnswerThirdParagraphThirdSentence" />
      </div>,
    },
    {
      question: <LazyText text="featuresPageNinthQuestion" className="w-40 sm:w-60 h-3.5" />,
      answer: <div>
        <LazyText text="featuresPageNinthAnswerFirstParagraph" />
        <br /><br />
        <LazyText text="featuresPageNinthAnswerSecondParagraph" />
        <br /><br />
        <LazyText text="featuresPageNinthAnswerThirdParagraph" />
        <br /><br />
        <LazyText text="featuresPageNinthAnswerFourthParagraph" />
      </div>,
    },
    {
      question: <LazyText text="featuresPageTenthQuestion" className="w-40 sm:w-60 h-3.5" />,
      answer: <div>
        <LazyText text="featuresPageTenthAnswer" />
      </div>,
    },
    {
      question: <LazyText text="featuresPageEleventhQuestion" className="w-40 sm:w-60 h-3.5" />,
      answer: <div>
        <LazyText text="featuresPageEleventhAnswer" />
      </div>,
    },
    {
      question: <LazyText text="featuresPageTwelfthQuestion" className="w-40 sm:w-60 h-3.5" />,
      answer: <div>
        <LazyText text="featuresPageTwelfthAnswerFirstParagraph" />
        <br /><br />
        <LazyText text="featuresPageTwelfthAnswerSecondParagraph" />
        <br /><br />
        <LazyText text="featuresPageTwelfthAnswerThirdParagraph" />
      </div>,
    },
    {
      question: <LazyText text="featuresPageThirteenthQuestion" className="w-40 sm:w-60 h-3.5" />,
      answer: <div>
        <LazyText text="featuresPageThirteenthAnswer" />
      </div>,
    },
  ]

  const sideTexts: SideTextType[] = [
    {
      imageUrl: "/trading-ethereum.svg",
      imageAlt: "trading ethereum image",
      title: <LazyText text="featuresPageFirstFeatureTitle" className="h-6 w-40 sm:w-60" />,
      description: <>
        <LazyText text="featuresPageFirstFeatureDescription" className="h-3.5 w-40 sm:w-60 lg:w-80" numberOfLines={5} />
      </>,
      isReversed: false,
      imageSizes: "w-[12rem] h-[12rem] sm:w-[18rem] sm:h-[18rem]",
      gap: "sm:gap-14",
      textMargin: "lg:-ml-12"
    },
    {
      imageUrl: "/laptops.svg",
      imageAlt: "censorship resistant",
      title: <LazyText text="featuresPageSecondFeatureTitle" className="h-6 w-40 sm:w-60" />,
      description: <>
        <LazyText text="featuresPageSecondFeatureDescription" className="h-3.5 w-40 sm:w-60 lg:w-80" numberOfLines={5} />
      </>,
      isReversed: true,
      textMargin: "lg:-mr-20"
    },
    {
      imageUrl: "/balance.svg",
      imageAlt: "capital efficiency",
      title: <LazyText text="featuresPageThirdFeatureTitle" className="h-6 w-40 sm:w-60" />,
      description: <>
        <LazyText text="featuresPageThirdFeatureDescription" className="h-3.5 w-40 sm:w-60 lg:w-80" numberOfLines={5} />
      </>,
      isReversed: false,
      imageSizes: "w-[15rem] h-[15rem] sm:w-[22rem] sm:h-[22rem]",
    },
  ]

  return (
    <>
      <Header />
      <div className="flex flex-col w-full max-w-7xl px-4 sm:px-12">    
        <section className="flex flex-col-reverse md:flex-row items-center mt-12 sm:mt-12 m:gap-20 px-4">
          <div className="flex flex-col items-center sm:items-start w-full text-center sm:text-left sm:ml-8">
            <span className="text-4xl sm:text-5xl font-bold">
              <LazyText text="featuresPageHeroBannerTitle" className="h-8 w-40 sm:w-60 lg:w-80 xl:w-104" />
            </span>
            <p className="mt-3 sm:text-xl font-semibold text-grey6">
              <LazyText text="featuresPageHeroBannerSubtitle" className="h-4 w-40 sm:w-60 lg:w-80" />
            </p>
            <LazyText text="" className="h-4 w-40 sm:w-60" />
            <div className="flex gap-4 sm:gap-8 mt-10">
              <Link href="https://appthresholdusd.org">
                <button className="flex items-center gap-2 border bg-purple text-white text-xs sm:text-sm font-semibold rounded-full px-12 h-11">
                  <div className="relative w-5 h-5">
                    <Image src="/icons/user-circle.svg" alt="user icon" fill={true} sizes="(min-width: 1rem) 24vw" />
                  </div>
                  <span className="flex items-center justify-center">
                    <LazyText text="featuresPageHeroBannerButton" className="h-3.5 w-10" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center w-full">
            <div className="relative w-[20rem] h-[18rem] sm:w-[29.5rem] sm:h-[29.5rem]">
              <Image src="/herobanner.svg" alt="herobanner image" fill={true} sizes="(min-width: 1rem) 24vw" />
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
            <LazyText text="featuresPageResourcesComponentTitle" className="h-8 w-40 sm:w-60 lg:w-80 xl:w-100" />
          </span>
          <p className="text-grey text-center font-medium sm:font-semibold text-sm sm:text-lg mt-4 max-w-2xl">
            <LazyText text="featuresPageResourcesSubtitleFirstSentence" className="h-4 w-40 sm:w-60 lg:w-80" />
          </p>
          <LazyText text="" className="h-4 w-40 sm:w-60" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mt-12 sm:mt-20">
            <div className="flex flex-col items-center sm:items-start gap-2 max-w-xs">
              <div className="relative w-14 h-14">
                <Image src="/icons/notebook.svg" alt="notebook icon" fill={true} sizes="(min-width: 1rem) 24vw" />
              </div>
              <span className="text-center font-bold text-lg mt-2">
                <LazyText text="featuresPageFirstResourceTitle" className="h-4 w-40 sm:w-60" />
              </span>
              <p className="text-grey text-sm sm:text-base font-medium text-center sm:text-left">
                <LazyText text="featuresPageFirstResourceDescription" className="h-3.5 w-40 sm:w-60 lg:w-80" numberOfLines={2} />
                <br/><br/>
                <Link href="https://docs.threshold.network/applications/threshold-usd" target="_blank" rel="noopener noreferrer">
                  <span className="text-purple font-semibold text-sm sm:text-base">
                    <LazyText text="featuresPageResourcesCallToAction" className="h-3.5 w-32" />
                  </span>
                </Link>
              </p>
            </div>
            <div className="flex flex-col items-center sm:items-start gap-2 max-w-xs">
              <div className="relative w-12 h-12 mb-2">
                <Image src="/icons/github.svg" alt="github icon" fill={true} sizes="(min-width: 1rem) 24vw" />
              </div>
              <span className="text-center font-bold text-lg mt-2">
                <LazyText text="featuresPageSecondResourceTitle" className="h-4 w-40 sm:w-48" />
              </span>
              <p className="text-grey text-sm sm:text-base font-medium text-center sm:text-left">
                <LazyText text="featuresPageSecondResourceDescription" className="h-3.5 w-40 sm:w-60 lg:w-80" numberOfLines={2} />
                <br/><br/>
                <Link href="https://github.com/Threshold-USD/dev" target="_blank" rel="noopener noreferrer">
                  <span className="text-purple font-semibold text-sm sm:text-base">
                    <LazyText text="featuresPageResourcesCallToAction" className="h-3.5 w-32" />
                  </span>
                </Link>
              </p>
            </div>
            <div className="flex flex-col items-center sm:items-start gap-2 max-w-xs">
              <div className="relative w-11 h-11 mb-3">
                <Image src="/icons/tbtc.svg" alt="tbtc dashboard icon" fill={true} sizes="(min-width: 1rem) 24vw" />
              </div>
              <span className="text-center font-bold text-lg mt-2">
                <LazyText text="featuresPageThirdResourceTitle" className="h-4 w-28" />
              </span>
              <p className="text-grey text-sm sm:text-base font-medium text-center sm:text-left">
                <LazyText text="featuresPageThirdResourceDescription" className="h-3.5 w-40 sm:w-60 lg:w-80" numberOfLines={2} />
                <br/><br/>
                <Link href="https://dashboard.threshold.network/" target="_blank" rel="noopener noreferrer">
                  <span className="text-purple font-semibold text-sm sm:text-base">
                    <LazyText text="featuresPageResourcesCallToAction" className="h-3.5 w-32" />
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center sm:items-start justify-center sm:justify-start mt-24 sm:mt-52 mb-16 sm:mb-40 w-full px-4 sm:px-16" id="faq">
          <span className="text-2xl sm:text-45xl font-bold text-center sm:text-left">
            <LazyText text="featuresPageFaqComponentTitle" className="h-8 w-40 sm:w-60 lg:w-80 xl:w-96" />
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