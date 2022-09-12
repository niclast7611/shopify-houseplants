import { getProductsInCollection, getProductsForHomePage } from "../lib/shopify"
import ProductList from "../components/ProductList"
import Hero from "../components/Hero"
export default function Home({ homePageProducts }) {

  // console.log(homePageProducts.length)
  return (
    <div className='bg-[#fcf9f3]'>
      <Hero />
      <ProductList homePageProducts={homePageProducts} />
    </div>
  )
}

export async function getStaticProps() {
  const products = await getProductsInCollection()
  const homePageProducts = await getProductsForHomePage()

  return {
    props: { products, homePageProducts },
  }
}