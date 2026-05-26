import type { ReactNode } from 'react'

export const metadata = {
  title: 'Riverhead Budget Live',
  description: 'Living municipal fiscal intelligence',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
