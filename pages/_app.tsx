import localFont from 'next/font/local'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

const inter = localFont({
  src: [
    {
      path: '../asset/Inter/Inter-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../asset/Inter/Inter-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../asset/Inter/Inter-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../asset/Inter/Inter-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../asset/Inter/Inter-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../asset/Inter/Inter-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-inter'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} font-sans flex flex-col min-h-screen items-center`}>
      <Component className={`${inter.variable} font-sans`} {...pageProps} />
    </main>
  )
}
