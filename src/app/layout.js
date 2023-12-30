import Layout from '@/components/layout/Layout'
import './globals.css'
export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Tracks Boutique',
  description: 'Mexican ecommerce created in NextJs App'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>Tracks Boutique</title>
        <script
          type='module'
          crossOrigin='true'
          src='https://assets.conekta.com/component/3.3.3/assets/component.min.js'
        />
      </head>
      <body>
        <Layout />
        <div>{children}</div>
      </body>
    </html>
  )
}
