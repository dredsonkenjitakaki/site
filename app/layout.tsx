import type { Metadata, Viewport } from 'next'
import { Manrope, Newsreader } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import MobileBar from '@/components/MobileBar'
import Motion from '@/components/Motion'
import { SITE_URL } from '@/lib/content'

const serif = Newsreader({ subsets: ['latin'], weight: ['300', '400', '500'], style: ['normal', 'italic'], variable: '--font-serif', display: 'swap' })
const sans = Manrope({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-sans', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: 'Dr. Edson Kenji Takaki',
  openGraph: { type: 'website', locale: 'pt_BR', siteName: 'Dr. Edson Kenji Takaki', images: [{ url: '/img/og.jpg', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true, googleBot: { 'max-image-preview': 'large' } },
}

export const viewport: Viewport = { themeColor: '#1F5FD4', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${serif.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: 'document.documentElement.classList.add("js")' }} />
      </head>
      <body>
        <a className="skip" href="#conteudo">Pular para o conteúdo</a>
        <Header />
        {children}
        <MobileBar />
        <Motion />
      </body>
    </html>
  )
}
