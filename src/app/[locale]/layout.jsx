import { Inter } from 'next/font/google'
import '../globals.css'
import { ThemeProvider } from '../context/ThemeContext'
import ClientThemeWrapper from '../context/ClientThemeWrapper'
import NavBar from '../components/NavBar'
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, useMessages } from 'next-intl';

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const locales = ['en', 'es'];
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aviation',
  description: 'luiseseberre',
}

export default function RootLayout({ children, params: { locale } }) {
  if (!locales.includes(locale)) notFound()
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <ThemeProvider>
          <ClientThemeWrapper>
            <NextIntlClientProvider locale={locale} messages={messages}>
              <NavBar locale={locale} />
              {children}
            </NextIntlClientProvider>
          </ClientThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
