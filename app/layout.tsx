import type { Metadata } from 'next'
import { Clash_Display, Satoshi } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const clashDisplay = Clash_Display({
  subsets: ['latin'],
  variable: '--font-clash',
  weight: ['400', '500', '600', '700'],
})

const satoshi = Satoshi({
  subsets: ['latin'],
  variable: '--font-satoshi',
  weight: ['300', '400', '500', '700'],
})

const neueMonreal = localFont({
  src: [
    {
      path: '../public/fonts/NueeMontreal-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-montreal',
})

const generalSans = localFont({
  src: [
    {
      path: '../public/fonts/GeneralSans-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-general',
})

export const metadata: Metadata = {
  title: 'Neel Patel | Creative Frontend Engineer & AI Systems Builder',
  description: 'Building immersive digital experiences through code, motion & intelligent systems.',
  keywords: ['frontend', 'developer', 'react', 'next.js', 'motion design', 'AI', 'GIS'],
  authors: [{ name: 'Neel Patel' }],
  creator: 'Neel Patel',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://neelpatel.tech',
    siteName: 'Neel Patel Portfolio',
    title: 'Neel Patel | Creative Frontend Engineer',
    description: 'Building immersive digital experiences through code, motion & intelligent systems.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#050505" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body
        className={`${clashDisplay.variable} ${satoshi.variable} ${neueMonreal.variable} ${generalSans.variable} bg-bg-primary text-text-primary antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
