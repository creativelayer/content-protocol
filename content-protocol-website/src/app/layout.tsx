import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Creative Layer',
  description: 'Programmable Content. Gamified Experiences. Real Value.',
}

export default function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
