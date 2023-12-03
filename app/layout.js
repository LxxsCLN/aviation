import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './context/ThemeContext'
import ClientThemeWrapper from './context/ClientThemeWrapper'
import NavBar from './components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aviation',
  description: 'luiseseberre',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <ClientThemeWrapper>
            <NavBar />
            {children}
          </ClientThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
