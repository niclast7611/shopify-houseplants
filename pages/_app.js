import '../styles/globals.css'
import Layout from '../components/Layout'
import ShopProvider from '../context/shopContext'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    // cart
    <ShopProvider>
      {/* nav bar and footer */}
      <Layout>
        {/* actual information */}
        <Component {...pageProps} key={router.asPath} />
      </Layout>
    </ShopProvider>
  )
}

export default MyApp
