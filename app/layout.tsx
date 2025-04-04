import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HomeschoolJourney - Your Guide to Confident Homeschooling',
  description: 'Transform your homeschooling journey from overwhelmed to confident with our step-by-step guidance and supportive community.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <a href="/" className="text-xl font-bold text-blue-600">
                HomeschoolJourney
              </a>
              <a href="/get-started" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Get Started
              </a>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
