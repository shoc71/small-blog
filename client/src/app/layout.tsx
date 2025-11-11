import './globals.css'

export const metadata = {
  title: 'My Next.js App',
  description: 'Next.js + TypeScript + Tailwind + ShadCN UI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-black text-white">{children}</body>
    </html>
  )
}
