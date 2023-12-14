import createMiddleware from 'next-intl/middleware';
import { locales, localePrefix, pathnames } from './navigation';

export default createMiddleware({
  locales,
  localePrefix,
  defaultLocale: 'en',
  pathnames
});

export const config = {
  matcher: ['/', '/(es|en)/:path*']
};