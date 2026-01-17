import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hash Web - Secure File Sharing',
  description: 'Secure, encrypted, and self-destructing file sharing. Client-side encryption. Zero logs.',
  icons: {
    icon: '/hashweb.ico',
    shortcut: '/hashweb.ico',
    apple: '/hashweb.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
