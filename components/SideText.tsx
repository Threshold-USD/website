import { SideTextType } from "@/pages/[lang]/features";
import Image from "next/image";
import Link from "next/link";
import LazyText from "./LazyText";

type SideTextProps = SideTextType

const SideText = ({ imageUrl, imageAlt, title, description, isReversed, imageSizes, buttonText, gap, textMargin }: SideTextProps): JSX.Element => {
  return (
    <div className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 ${gap ?? "sm:gap-0"} w-full px-2`}>
      <div className="flex justify-center items-center w-full">
        <div className={`relative ${imageSizes ?? "w-[14rem] h-[14rem] sm:w-[20rem] sm:h-[20rem]"} saturate-75 sm:saturate-100`}>
          <Image src={imageUrl} alt={imageAlt} fill={true} sizes="(min-width: 1rem) 24vw" />
        </div>
      </div>
      <div className={`flex justify-center items-center ${textMargin} w-full text-center sm:text-left z-10`}>
        <div className="flex flex-col items-center sm:items-start justify-start">
          <span className="text-xl sm:text-4xl font-bold">
            {title}
          </span>
          <p className="mt-8 leading-7 font-semibold text-sm sm:text-base text-grey lg:w-100">
            {description}
          </p>
          <div className="flex gap-4 sm:gap-8 mt-10">
            <Link href="https://app.thresholdusd.org">
              <button className="flex items-center gap-2 border bg-purple text-white text-xs sm:text-sm font-semibold rounded-full px-12 h-11">
                <span>
                  {buttonText ?? <LazyText text="featuresPageFeaturesButtons" className="h-3.5 w-12" />}
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideText;
