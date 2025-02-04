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
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${poppins.variable} light`}>
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PSJJG42S');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PSJJG42S"
            height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
        </noscript>
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
