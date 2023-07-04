import { ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

interface StaticI18nLinkProps {
  children: ReactNode;
  href?: string;
  locale?: string;
  switchLocale?: boolean;
}

export function StaticI18nLink({
  href,
  locale: localeProp,
  children,
  switchLocale,
  ...props
}: StaticI18nLinkProps) {
  const { i18n } = useTranslation();
  const { asPath } = useRouter();

  const locale = i18n.language || 'en';

  let path;
  if (switchLocale) {
    const [_currentLocale, ...rest] = asPath.split('/').slice(1);
    const newPath = rest.join('/');
    path = `/${localeProp}/${newPath}`.replace(/\/\/+/g, '/');
  } else {
    const normalizedHref = href?.startsWith('/') ? href : `/${href}`;
    path = `/${locale}${normalizedHref}`.replace(/\/\/+/g, '/');
  }

  return (
    <Link href={path} {...props}>
      {children}
    </Link>
  );
}
