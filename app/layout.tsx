import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Manrope, Aleo } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

const _libreBaskerville = Manrope({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
})

const _aleo = Aleo({
  subsets: ["latin"],
  variable: "--font-aleo",
})

export const metadata: Metadata = {
  title: "Raise International - Building a Better Future Together",
  description:
    "Raise International partners with communities around the world to create lasting change through education, sustainable development, and social empowerment.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${_manrope.variable} ${_aleo.variable}`}>{children}</body>
    </html>
  )
}
