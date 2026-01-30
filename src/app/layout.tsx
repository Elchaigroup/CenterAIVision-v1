import type { Metadata } from 'next'
import { ClientLayout } from '@/components/client-layout'
import './globals.css'

export const metadata: Metadata = {
  title: 'Center AI Vision | Bitcoin Mining & AI GPU Platform',
  description: 'Professional Bitcoin mining and AI compute infrastructure. Enterprise-grade technology for digital assets and artificial intelligence applications.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-urbanist antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
