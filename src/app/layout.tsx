import "@/styles/globals.css"
import "@/styles/quill.css"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "next-themes"

import { siteConfig } from "@/config/site"
import { Footer } from "@/components/home-landing-page/Footer"
import { Navbar } from "@/components/home-landing-page/Navbar"
import { PopupWidget } from "@/components/home-landing-page/PopupWidget"
import GlobalProvider from "@/components/provider/global"

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url.base),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.url.author,
    },
  ],
  creator: siteConfig.author,
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteConfig.url.base,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@OryzaSystems",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <GlobalProvider>
          <Navbar />
          <div>{children}</div>
          <Footer />
          <PopupWidget />
        </GlobalProvider>
      </body>
    </html>
  )
}
