import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['en', 'es'];
export const localePrefix = 'always';

export const pathnames = {
  '/': '/',
  '/flights': {
    en: '/flights',
    es: '/vuelos'
  },
  '/shop': {
    en: '/shop',
    es: '/tienda'
  },
  '/news': {
    en: '/news',
    es: '/noticias'
  },
  '/about': {
    en: '/about',
    es: '/sobre'
  },
  '/contact': {
    en: '/contact',
    es: '/contacto'
  },
  '/blog': '/blog'

  /* // Dynamic params are supported via square brackets
  '/news/[articleSlug]-[articleId]': {
    en: '/news/[articleSlug]-[articleId]',
    de: '/neuigkeiten/[articleSlug]-[articleId]'
  },
 
  // Also (optional) catch-all segments are supported
  '/categories/[...slug]': {
    en: '/categories/[...slug]',
    de: '/kategorien/[...slug]'
  } */
}

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });