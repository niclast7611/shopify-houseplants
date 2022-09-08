const domain = process.env.SHOPIFY_STORE_DOMAIN
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN

// pulls shopfiydata from shopfiy api that matches my stores domain 
//All other queries/mutations wait for this function to run 
// ?? maybe all other functions are piped into this one via props(query)
async function ShopifyData(query) {
  const URL = `https://${domain}/api/2022-07/graphql.json`

  const options = {
    endpoint: URL,
    method: 'POST',
    headers: {
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query })
  }
  try {
    const data = await fetch(URL, options).then((response) => {
      return response.json()
    })
    return data
  } catch (error) {
    throw new Error('Product not fetched')
  }
}


// gets first 25 products from my shopfiy with certain information 
// uses queries to fetch data (GET, POST)
export async function getAllProducts() {
  const query = `
  {
    products(first:25){
      edges{
        node{
          handle
          id
        }
      }
    }
  }`

  const response = await ShopifyData(query)

  const slugs = response.data.products.edges ? response.data.products.edges : []

  return slugs
}

// gets products by handle and pulls variants/options 
// uses queries to fetch data (GET, POST)
export async function getProduct(handle) {
  const query = `
  {
    productByHandle(handle: "${handle}") {
    collections(first: 1){
      edges{
        node{
          products(first: 5){
            edges{
              node{
                priceRange{
                  minVariantPrice{
                    amount
                  }
                }
                handle
                title
                id
                images(first: 5){
                  edges{
                    node{
                      originalSrc
                      altText
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
      id
      title
      handle
      description
      images(first: 5){
        edges{
          node{
            originalSrc
            altText
          }
        }
      }
      options{
        name
        values
        id
      }
      variants(first: 25){
        edges{
          node{
            selectedOptions{
              name
              value
            }
            image{
              originalSrc
              altText
            }
            title
            id
            priceV2{
              amount
            }
          }
        }
      }
    }
  }`
  const response = await ShopifyData(query)

  const product = response.data.productByHandle ? response.data.productByHandle : []

  return product
}

// creates checkout based on products id and how many then makes a url 
// uses mutation which modifies server side data (DELETE, PUT, PATCH)
export async function createCheckout(id, quantity) {
  const query = `
  mutation{
    checkoutCreate(input: {
      lineItems: [{ variantId: "${id}", quantity: ${quantity}}]
    }){
      checkout {
        id
        webUrl
      }
    }
  }`

  const response = await ShopifyData(query)

  const checkout = response.data.checkoutCreate.checkout ? response.data.checkoutCreate.checkout : []

  return checkout
}

// updates the checkout to have up to date information 
// uses mutation which modifies server side data (DELETE, PUT, PATCH)

export async function updateCheckout(id, lineItems) {
  const lineItemsObject = lineItems.map(item => {
    return `{
      variantId: "${item.id}",
      quantity: ${item.variantQuantity}
    }`
  })

  const query = `
  mutation{
    checkoutLineItemsReplace(lineItems: [${lineItemsObject}], checkoutId: "${id}"){
      checkout{
        id
        webUrl
        lineItems(first: 25){
          edges{
            node{
              id
              title
              quantity
            }
          }
        }
      }
    }
  }
  `

  const response = await ShopifyData(query)
  const checkout = response.data.checkoutLineItemsReplace.checkout ? response.data.checkoutLineItemsReplace.checkout : []

  return checkout
}

// pulls all products that are in my specific homepage collection with certain information that I want 
// uses queries to fetch data (GET, POST)
export async function getProductsInHomeCollection() {
  const query = `
    {
        collectionByHandle(handle: "frontpage"){
         title
         products(first: 25){
           edges{
             node{
               id
               title
               handle
               priceRange {
                minVariantPrice{
                  amount
                }
              }
               images(first: 5){
                 edges{
                   node{
                     originalSrc
                     altText
                   }
                 }
               }
             }
           }
         }
       }
       }`

  const response = await ShopifyData(query)

  const allProducts = response.data.collectionByHandle.products.edges ? response.data.collectionByHandle.products.edges : []

  return allProducts
}

export async function getProductsInSmallCollection() {
  const query = `
    {
        collectionByHandle(handle: "small-plants"){
         title
         products(first: 25){
           edges{
             node{
               id
               title
               handle
               priceRange {
                minVariantPrice{
                  amount
                }
              }
               images(first: 5){
                 edges{
                   node{
                     originalSrc
                     altText
                   }
                 }
               }
             }
           }
         }
       }
       }`

  const response = await ShopifyData(query)

  const allSmallPlants = response.data.collectionByHandle.products.edges ? response.data.collectionByHandle.products.edges : []
  // console.log('allSmallPlants in shopify', allSmallPlants)

  return allSmallPlants
}

export async function getProductsInMediumCollection() {
  const query = `
    {
        collectionByHandle(handle: "medium-plants"){
         title
         products(first: 25){
           edges{
             node{
               id
               title
               handle
               priceRange {
                minVariantPrice{
                  amount
                }
              }
               images(first: 5){
                 edges{
                   node{
                     originalSrc
                     altText
                   }
                 }
               }
             }
           }
         }
       }
       }`

  const response = await ShopifyData(query)

  const allMediumPlants = response.data.collectionByHandle.products.edges ? response.data.collectionByHandle.products.edges : []
  // console.log('allMediumPlants', allMediumPlants)

  return allMediumPlants
}

export async function getProductsInLargeCollection() {
  const query = `
    {
        collectionByHandle(handle: "large-plants"){
         title
         products(first: 25){
           edges{
             node{
               id
               title
               handle
               priceRange {
                minVariantPrice{
                  amount
                }
              }
               images(first: 5){
                 edges{
                   node{
                     originalSrc
                     altText
                   }
                 }
               }
             }
           }
         }
       }
       }`

  const response = await ShopifyData(query)

  const allLargePlants = response.data.collectionByHandle.products.edges ? response.data.collectionByHandle.products.edges : []
  // console.log('allLargePlants', allLargePlants)
  return allLargePlants
}

export async function getProductsInSucculentCollection() {
  const query = `
    {
        collectionByHandle(handle: "succulents"){
         title
         products(first: 25){
           edges{
             node{
               id
               title
               handle
               priceRange {
                minVariantPrice{
                  amount
                }
              }
               images(first: 5){
                 edges{
                   node{
                     originalSrc
                     altText
                   }
                 }
               }
             }
           }
         }
       }
       }`

  const response = await ShopifyData(query)

  const allSucculents = response.data.collectionByHandle.products.edges ? response.data.collectionByHandle.products.edges : []

  // console.log('allSucculents', allSucculents)
  return allSucculents
}

