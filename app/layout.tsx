import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Header from '@/components/Header'
import MobileBar from '@/components/MobileBar'
import Motion from '@/components/Motion'
import { SITE_URL } from '@/lib/content'

// Fontes servidas do próprio site (subset latino que o Next já baixou), sem busca
// no Google durante o build. Arquivos em app/fonts/.
const serif = localFont({
  src: [
    { path: './fonts/newsreader-normal.woff2', weight: '300 500', style: 'normal' },
    { path: './fonts/newsreader-italic.woff2', weight: '300 500', style: 'italic' },
  ],
  variable: '--font-serif',
  display: 'swap',
})

const sans = localFont({
  src: [{ path: './fonts/manrope.woff2', weight: '400 700', style: 'normal' }],
  variable: '--font-sans',
  display: 'swap',
})

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
