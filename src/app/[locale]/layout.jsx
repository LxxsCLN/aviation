import { Inter } from 'next/font/google'
import '../globals.css'
import { ThemeProvider } from '../context/ThemeContext'
import ClientThemeWrapper from '../context/ClientThemeWrapper'
import NavBar from '../components/NavBar'
import { notFound } from 'next/navigation';
import { useTranslations } from 'next-intl';

const locales = ['en', 'es'];
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Aviation',
    description: 'luiseseberre',
}

export default function RootLayout({ children, params: { locale } }) {
    if (!locales.includes(locale)) notFound()
    const t = useTranslations('Index');
    console.log(locale)
    return (
        <html lang={locale}>
            <body className={inter.className}>
                <ThemeProvider>
                    <ClientThemeWrapper>
                        <NavBar locale={locale} />
                        {children}
                    </ClientThemeWrapper>
                </ThemeProvider>
            </body>
        </html>
    )
}
