import type { Metadata } from "next";
// import { Inter } from 'next/font/google';
import { Montserrat } from 'next/font/google';
import { ThemeProvider } from "./components/ThemeSwitcher/theme-provider"
import { ThemeSwitcher } from "./components/ThemeSwitcher/ThemeSwitcher"
import "./globals.css";
import Script from 'next/script';

// const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "TNG - One-Time Fee Cold LinkedIn Outreach Setup",
  description: "Transform your B2B sales with TNG's in-house department setup for cold LinkedIn outreach. One-time fee, lifetime independence.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M7BJTHHB');
          `}
        </Script>
      </head>
      <body className={`${montserrat.className} antialiased`}>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M7BJTHHB"
            height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
        </noscript>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <ThemeSwitcher />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
