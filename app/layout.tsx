import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
  weight: ['200','300','400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})
export const metadata: Metadata = {
  title: 'BlueBee || Home',
  description: 'Generated by create BlueBee',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="emerald">
      <body className={poppins.className}>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  )
}