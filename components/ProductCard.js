import Link from 'next/link'
import Image from 'next/image'
import { formatter } from '../utils/helpers'

const ProductCard = ({ product }) => {
    // destructure from product object(shopify)
    const { handle, title } = product.node

    const { altText, originalSrc } = product.node.images.edges[0].node

    const price = product.node.priceRange.minVariantPrice.amount
    return (
        // dynamic route to individual product pages 
        <Link href={`/products/${handle}`} >
            <a className='group'>
                <div className='w-full bg-gray-200 rounded-3xl overflow-hidden'>
                    <div className='relative group-hover:opacity-75  h-72'>
                        <Image
                            src={originalSrc}
                            alt={altText}
                            layout='fill'
                            objectFit='cover'
                        />
                    </div>
                </div>
                <h3 className='mt-4 text-lg font-medium text-[#224229] group-hover:text-[#64aa85]'>{title}</h3>
                <p className='mt-1 text-sm text-[#224229] '>{formatter.format(price)}</p>
            </a>
        </Link>
    )
}

export default ProductCard