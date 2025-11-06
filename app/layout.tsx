import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://Fare2U.com'),
  title: "Best Farm Management Software | Livestock & Cattle Management | Fare2U",
  description: "Professional farm business management software for livestock, cattle, dairy, and poultry operations. Complete herd management system with farm record keeping, crop planning, and agricultural management solutions. One-time $99 payment - best farm management app for modern farmers.",
  keywords: "farm management software, livestock management software, cattle management software, farm business management software, dairy herd management software, poultry software, herd management software, farm record keeping software, farming software, farm management system, farm management app, livestock management app, cattle management app, sheep management software, best farm management software, farm planning software, crop management software, agriculture management software, dairy cattle management software, farm inventory software, cow management software, cattle software, livestock software, farming erp, agricultural management solutions, cattle ranch software, farm management tool, cattle manager software, dairy cow management software",
  authors: [{ name: "WUsoft" }],
  creator: "WUsoft",
  publisher: "Fare2U",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://Fare2U.com",
    title: "Fare2U - Best Farm Management Software | Livestock & Cattle Management System",
    description: "Complete farm business management software: track livestock, manage cattle & dairy herds, handle poultry operations, keep farm records, and plan crops. Best agricultural management solution with one-time $99 payment.",
    siteName: "Fare2U",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fare2U Livestock Management Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fare2U - Livestock Farm Management Software",
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
