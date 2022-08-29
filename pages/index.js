import { getProductsInCollection } from "../lib/shopify"

export default function Home({ products }) {

  console.log(products)
  return (
    <div className='text-4xl'>
      <h1>Hello World</h1>
    </div>
  )
}

export async function getStaticProps() {
  const products = await getProductsInCollection()

  return {
    props: { products },
  }
}