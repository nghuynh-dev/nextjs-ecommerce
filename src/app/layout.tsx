import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gadget Zone',
  description: 'The best choice for you',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="m-auto min-w-[300px] max-w-7xl p-4">
          {children}
        </main>
      </body>
    </html>
  )
}
