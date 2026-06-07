import { Clash_Display, Satoshi } from 'next/font/google'

export const clashDisplay = Clash_Display({
  subsets: ['latin'],
  variable: '--font-clash',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const satoshi = Satoshi({
  subsets: ['latin'],
  variable: '--font-satoshi',
  weight: ['300', '400', '500', '700'],
  display: 'swap',
})
