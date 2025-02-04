import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google"
import "./globals.css";
import { ThemeProvider } from "./components/ThemeSwitcher/theme-provider"
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] })
const poppins = Poppins({ 
  weight: ['800'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Turn expos into your #1 sales channel | XPOIQ",
  description: "Forget CRM chaos. Forget missed leads. Just results, on autopilot.",
  icons: {
    icon: [
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png'
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        url: '/favicon-48x48.png',
        sizes: '48x48',
        type: 'image/png'
      },
      {
        url: '/favicon-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        url: '/favicon-256x256.png',
        sizes: '256x256',
        type: 'image/png'
      }
    ],
    shortcut: '/favicon.png',
    apple: '/favicon-192x192.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${poppins.variable} light`}>
      <head />
      <body className={inter.className}>
        <Script 
          id="google-tag-manager" 
          strategy="worker"
          src={`https://www.googletagmanager.com/gtm.js?id=GTM-PSJJG42S`}
        />
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PSJJG42S"
            height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
        </noscript>
        <Script id="gtm-config" strategy="worker">
          {`
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              'gtm.start': new Date().getTime(),
              event: 'gtm.js'
            });
          `}
        </Script>
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
