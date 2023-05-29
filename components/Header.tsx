import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = (): JSX.Element => {
  const router = useRouter();
  
  return (
    <section className="flex flex-col w-full max-w-8xl pr-3 sm:pl-12 sm:pr-12">
      <div className="flex justify-between mt-4">
        <Link href="/">
          <div className="mt-2 sm:mt-1 relative w-52 sm:w-60 h-3 sm:h-4">
            <Image src="/icons/threshold-usd.svg" alt="thresholdusd logo" fill={true} sizes="(min-width: 1rem) 24vw" />
          </div>
        </Link>
        <nav className="hidden lg:flex -mt-1 mr-20">
          <ul className="flex items-center gap-12">
            <Link href="/">
              <li className={`cursor-pointer uppercase font-bold text-sm py-2 ${router.pathname === '/' ? 'border-b-2 border-purple' : 'border-b-2 border-transparent'}`}>
                  home
              </li>
            </Link>
            <Link href="/features">
              <li className={`cursor-pointer uppercase font-bold text-sm py-2 ${router.pathname === '/features' ? 'border-b-2 border-purple' : 'border-b-2 border-transparent'}`}>
                  explore
              </li>
            </Link>
            <Link href="https://docs.threshold.network/applications/threshold-usd" target="_blank" rel="noopener noreferrer">
              <li className="cursor-pointer uppercase font-bold text-sm border-b-2 border-transparent py-2">
                learn
              </li>
            </Link>
          </ul>
        </nav>
        <Link href="https://app.thresholdusd.org">
          <button className="flex items-center gap-2 bg-purple text-white text-xs sm:text-sm font-semibold rounded-lg px-4 sm:px-12 py-2 capitalize">
            sign in
          </button>
        </Link>
      </div>
  </section>
  );
};

export default Header;