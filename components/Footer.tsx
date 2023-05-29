import Image from "next/image";
import Link from "next/link";

const Footer = (): JSX.Element => {
  return (
    <section className="flex flex-col-reverse sm:flex-row gap-20 sm:gap-12 items-start justify-between mt-4 sm:mt-12 mb-20 sm:mb-32 w-full">
      <div className="flex flex-col items-center sm:items-start justify-center sm:justify-start gap-7 w-full">
        <Link href="/">
          <div className="mt-2 sm:mt-1 relative w-52 sm:w-72 h-3 sm:h-6">
            <Image src="/icons/threshold-usd.svg" alt="thresholdusd logo" fill={true} sizes="(min-width: 1rem) 24vw" />
          </div>
        </Link>
        <span className="text-grey">Managed by ThresholdDAO</span>
        <div className="flex justify-start items-center gap-3 mt-2">
          <Link href="https://www.youtube.com/@Threshold.Network" target="_blank" rel="noopener noreferrer">
            <div className="relative w-6 h-6">
              <Image src="/icons/footer-youtube.svg" alt="youtube logo" fill={true} sizes="(min-width: 1rem) 24vw" />
            </div>
          </Link>
          <Link href="https://twitter.com/TheTNetwork" target="_blank" rel="noopener noreferrer">
            <div className="relative w-6 h-6">
              <Image src="/icons/footer-twitter.svg" alt="twitter logo" fill={true} sizes="(min-width: 1rem) 24vw" />
            </div>
          </Link>
          <Link href="https://discord.com/invite/Threshold" target="_blank" rel="noopener noreferrer">
            <div className="relative w-6 h-6">
              <Image src="/icons/footer-discord.svg" alt="discord logo" fill={true} sizes="(min-width: 1rem) 24vw" />
            </div>
          </Link>
          <Link href="https://github.com/Threshold-USD/dev" target="_blank" rel="noopener noreferrer">
            <div className="relative w-6 h-6">
              <Image src="/icons/github.svg" alt="github logo" fill={true} sizes="(min-width: 1rem) 24vw" />
            </div>
          </Link>
        </div>
        <span className="text-grey text-sm text-center sm:text-left">2023 ThresholdUSD. All the rights reserved.</span>
      </div>
      <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-end gap-16 mt-12 sm:mt-0 text-sm text-grey font-medium w-full">
        <div className="flex flex-col items-center sm:items-start gap-5">
          <span className="uppercase font-semibold text-lg text-black">Threshold-USD</span>
          <Link href="https://app.thresholdusd.org">
            <span className="hover:text-purple">Application</span>
          </Link>
          <span className="cursor-pointer hover:text-purple">Features</span>
          <Link href="https://docs.threshold.network/applications/threshold-usd" target="_blank" rel="noopener noreferrer">
            <span className="hover:text-purple">Documentation</span>
          </Link>
          <Link href="https://forum.threshold.network/" target="_blank" rel="noopener noreferrer">
            <span className="hover:text-purple">Governance</span>
          </Link>
        </div>
        <div className="flex flex-col items-center sm:items-start gap-5">
          <span className="uppercase font-semibold text-lg text-black">Get connected</span>
          <Link href="https://forum.threshold.network/" target="_blank" rel="noopener noreferrer">
            <span className="hover:text-purple">DAO Forum</span>
          </Link>
          <Link href="https://github.com/Threshold-USD/dev" target="_blank" rel="noopener noreferrer">
            <span className="hover:text-purple">Github</span>
          </Link>
          <Link href="https://discord.com/invite/Threshold" target="_blank" rel="noopener noreferrer">
            <span className="hover:text-purple">Discord</span>
          </Link>
          <Link href="https://twitter.com/TheTNetwork" target="_blank" rel="noopener noreferrer">
            <span className="hover:text-purple">Twitter</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;