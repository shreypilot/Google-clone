import './globals.css'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Google-Clone',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      {children}
      

      <Footer  />
      </body>

    </html>
  )
}
