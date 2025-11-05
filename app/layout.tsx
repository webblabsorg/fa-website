import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://fare2u.com'),
  title: "Livestock Farm Management Software - $99 One-Time | Fare2u",
  description: "Professional farm management system for cattle, poultry, pigs, goats. Track livestock, health records, sales, and expenses. One-time payment of $99. Lifetime access with 6 months support.",
  keywords: "livestock management, farm software, cattle tracking, poultry management, farm management system, livestock software, agricultural software",
  authors: [{ name: "WUsoft" }],
  creator: "WUsoft",
  publisher: "Fare2u",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fare2u.com",
    title: "Fare2u - Livestock Farm Management Software",
    description: "Manage your entire farm from one dashboard. Track livestock, health, sales, expenses. $99 one-time payment for lifetime access.",
    siteName: "Fare2u",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fare2u Livestock Management Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fare2u - Livestock Farm Management Software",
    description: "Track livestock, health, sales, expenses. $99 lifetime access. Professional farm management made simple.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
