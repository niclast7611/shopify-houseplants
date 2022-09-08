import ProductList from '../../components/ProductList'


export default function CollectionPage({ products }) {
    const { collectionName } = 'small-plants'
    const smProducts = products.filter(product => product.collection === collectionName)
    // const products = allSmallPlants
    // console.log('products in collection', products)
    return (
        <ProductList products={smProducts} />
    );
}