import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center">  
      <div className="flex flex-col w-full max-w-7xl px-12">
        <section className="flex justify-between">
          <div>logo</div>
          <div>menu</div>
          <div>sign in</div>
        </section>
      </div>
      <div className="flex flex-col w-full max-w-5xl px-12">    
        <section className='flex flex-col items-center'>
          <h1>Borrow thUSD against your tBTC</h1>
          <p className="text-center">First bridge your BTC to tBTC. <br/>Then borrow USD stablecoin with tBTC trustlessly.</p>
          <div className="flex gap-4">
            <button className="border border-black">Sign in</button>
            <button className="border border-black">Watch video</button>
          </div>
        </section>
        <section className='flex justify-center'>
          <div className="flex flex-col items-center gap-2 border border-black rounded-l-lg">
            <div>Trades volume</div>
            <div>$1,649,325,333</div>
            <div>LAST 24H</div>
          </div>
          <div className="flex flex-col items-center gap-2 border border-black">
            <div>Trades volume</div>
            <div>$1,649,325,333</div>
            <div>LAST 24H</div>
          </div>
          <div className="flex flex-col items-center gap-2 border border-black rounded-r-lg">
            <div>Trades volume</div>
            <div>$1,649,325,333</div>
            <div>LAST 24H</div>
          </div>
        </section>
        <section className='flex justify-center'>
          <div className="flex flex-col gap-2 text-left w-full px-20">
            <div>Support of multiple collaterals</div>
            <div>Support initially tBTC and ETH</div>
            <div className="flex gap-3">
              <div>img</div>
              <div className="flex flex-col gap-2">
                <div>Stablecoin backed on 110% collateral ratio</div>
                <div>The price stability is maintaned by a robust system around the collateral ratio of the backing asset</div>
              </div>
            </div>
            <div className="flex gap-3">
              <div>img</div>
              <div className="flex flex-col gap-2">
                <div>Stablecoin backed on 110% collateral ratio</div>
                <div>The price stability is maintaned by a robust system around the collateral ratio of the backing asset</div>
              </div>
            </div>
            <div className="flex gap-3">
              <div>img</div>
              <div className="flex flex-col gap-2">
                <div>Stablecoin backed on 110% collateral ratio</div>
                <div>The price stability is maintaned by a robust system around the collateral ratio of the backing asset</div>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            img
          </div>
        </section>
        <section className="flex flex-col">
          <h2 className="">
            Security By Design
          </h2>
          <p>
            Alongside to the fact that the base protocol has been derived from Liquity protocol, our modified contracts <br/>
            are currently being audited by respected 3rd parties companies.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col">
              <div>img</div>
              <div>Contracts being audited</div>
              <p>Our contracts are undergoing an audit, which will soon be completed
                allowing for the deployment of mainnet contracts.

                In the meantime, we invite you to check out our testnet app which is now fully operational and accessible here.
              </p>
            </div>
            <div className="flex flex-col">
              <div>img</div>
              <div>Contracts being audited</div>
              <p>The thUSD stablecoin is backed initially by ETH and tBTC on a collateral ratio of at least 110%.
                So users that holds BTC can bridge to tBTC and deposit their tBTC to borrow thUSD directly.
              </p>
            </div>
            <div className="flex flex-col">
              <div>img</div>
              <div>Contracts being audited</div>
              <p>Our contracts are undergoing an audit, which will soon be completed
                allowing for the deployment of mainnet contracts.

                In the meantime, we invite you to check out our testnet app which is now fully operational and accessible here.
              </p>
            </div>
          </div>
        </section>
        <section className="flex flex-col mt-10">
          <h3 className="">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <div>img</div>
              <div>Contracts being audited</div>
              <p>Our contracts are undergoing an audit, which will soon be completed
                allowing for the deployment of mainnet contracts.

                In the meantime, we invite you to check out our testnet app which is now fully operational and accessible here.
              </p>
            </div>
            <div className="flex flex-col">
              <div>img</div>
              <div>Contracts being audited</div>
              <p>The thUSD stablecoin is backed initially by ETH and tBTC on a collateral ratio of at least 110%.
                So users that holds BTC can bridge to tBTC and deposit their tBTC to borrow thUSD directly.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <div>img</div>
              <div>Contracts being audited</div>
              <p>Our contracts are undergoing an audit, which will soon be completed
                allowing for the deployment of mainnet contracts.

                In the meantime, we invite you to check out our testnet app which is now fully operational and accessible here.
              </p>
            </div>
            <div className="flex flex-col">
              <div>img</div>
              <div>Contracts being audited</div>
              <p>The thUSD stablecoin is backed initially by ETH and tBTC on a collateral ratio of at least 110%.
                So users that holds BTC can bridge to tBTC and deposit their tBTC to borrow thUSD directly.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <div>img</div>
              <div>Contracts being audited</div>
              <p>
                Our contracts are undergoing an audit, which will soon be completed
              </p>
            </div>
          </div>
        </section>
        <section className='flex flex-col items-center'>
          <div>Get Involved</div>
          <p className="text-center">We are a project driven by the community and open source. 
            <br/>If you have any feedback, ideas or questions, feel free to drop in and say hello!
          </p>
          <div className="flex gap-12">
            <div className="flex flex-col items-center gap-4">
              <div>img</div>
              <span>Discord</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div>img</div>
              <span>Twitter</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div>img</div>
              <span>Youtube</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
