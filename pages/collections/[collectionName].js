import {  getProductsInCollection, getAllCollections } from "../../lib/shopify"
import CollectionsPage from "../../components/CollectionsPage";

export default function CollectionPage({ products }) {
    // const { collectionName } = 'small-plants'
    // const smProducts = products.filter(product => product.collection === collectionName)
    // const products = allSmallPlants

    
    return (
        <div className="min-h-screen py-12 sm:pt-20 bg-[#fcf9f3]">
            <CollectionsPage products={products} />
        </div>
    );
}

export async function getStaticPaths() {
    const collections = await getAllCollections()

//pre-renders collection paths for each collection name and returns an array of objects with each collections handle in a string
// Pre-rendered at build time
    const paths = collections.map(item => {
        
        //needs to be same name as file 
        const collectionName = String(item.node.handle)
        
        return {
            params: { collectionName }
        }
    })

    // console.log(paths)
    return {
        paths,
        fallback: false
    }
}

  // This function will run only at build time.
  export async function getStaticProps() {
    const products = await getProductsInCollection()
  
    return {
      props: { products },
    }
  }