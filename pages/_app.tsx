import localFont from 'next/font/local'
import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import '@/styles/globals.css';
import { useRouter } from 'next/router';
import Loading from '@/components/Loading';

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
});

export default function App({ Component, pageProps }: AppProps) {
  const [i18nInitialized, setI18nInitialized] = useState(false);
  const router = useRouter();

  useEffect(() => {
    i18n
      .use(HttpApi) 
      .use(initReactI18next)
      .init({
        backend: {
          loadPath: '/locales/{{lng}}/{{ns}}.json'
        },
        lng: 'en',
        fallbackLng: 'en',
        preload: ['en', 'es', 'pt'],
        ns: ['translation'],
        defaultNS: 'translation',
        keySeparator: false,
        interpolation: {
          escapeValue: false,
          formatSeparator: ','
        }
      }, () => {
        setI18nInitialized(true);
      });
  }, []);

  useEffect(() => {
    if (i18nInitialized) {
      const { lang } = router.query;
      if (typeof lang === 'string') {
        i18n.changeLanguage(lang);
      }
    }
  }, [router.query.lang, i18nInitialized]);

  if (!i18nInitialized) {
    return <Loading />;
  }

  return (
    <I18nextProvider i18n={i18n}>
      <main className={`${inter.variable} font-sans flex flex-col min-h-screen items-center`}>
        <Component className={`${inter.variable} font-sans`} {...pageProps} />
      </main>  
    </I18nextProvider>
  );
};
