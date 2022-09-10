import {  getProduct, getAllCollections } from "../../lib/shopify"

export default function CollectionPage() {
    // const { collectionName } = 'small-plants'
    // const smProducts = products.filter(product => product.collection === collectionName)
    // const products = allSmallPlants
    return (
        <div>
            hello world 
        </div>
    );
}

export async function getStaticPaths() {
    const collections = await getAllCollections()

//pre-renders collection paths for each collection name and returns an array of objects with each collections handle in a string
// Pre-rendered at build time
    const paths = collections.map(item => {
        const collectionName = String(item.node.handle)
        
        return {
            params: { collectionName }
        }
    })

    console.log(paths)
    return {
        paths,
        fallback: false
    }
}

  // This function will run only at build time.
export async function getStaticProps({ params }) {
    const product = await getProduct(params.product)

    return {
        props: {
            product
        }
    }

}