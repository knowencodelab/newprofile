import "@/styles/globals.css"
import { Inter, Outfit } from 'next/font/google'
import Navigation from "@/components/navigation"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" })

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="bg-slate-50 dark:bg-slate-900 min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  )
}

