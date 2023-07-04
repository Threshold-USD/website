import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Loading from '@/components/Loading';

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleRouteChange = () => setLoading(false);
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  useEffect(() => {
    const localStorageLang = localStorage.getItem('lang');
    const browserLang = navigator.language;
    const userLang =
      localStorageLang ||
      (browserLang.startsWith('pt')
        ? 'pt'
        : browserLang.startsWith('es')
        ? 'es'
        : 'en');

    if (!localStorageLang) {
      localStorage.setItem('lang', userLang);
    }

    router.replace(`/${userLang}`);
  }, [loading]);

  return <>{loading && <Loading />}</>;
}
