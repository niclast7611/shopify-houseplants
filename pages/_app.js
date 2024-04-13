import '../styles/globals.css'
import Layout from '../components/Layout'
import ShopProvider from '../context/shopContext'
import { useRouter } from 'next/router'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://ripe.chat/islands/client-chat-button.island.umd.js';
    script.setAttribute('chatbotId', '112');
    script.setAttribute('domain', 'https://shopify-houseplants.vercel.app/');
    document.head.appendChild(script);

    return () => {
      // Cleanup the script when component unmounts
      document.head.removeChild(script);
    };
  }, []);
  
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
