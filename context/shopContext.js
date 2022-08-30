import { createContext, useState, useEffect } from "react"
import { createCheckout, updateCheckout } from "../lib/shopify"

// access data from different nested components without neccessarily using props 
const CartContext = createContext()

export default function ShopProvider({ children }) {

    const [cart, setCart] = useState([])
    const [cartOpen, setCartOpen] = useState(false)
    const [checkoutId, setCheckoutId] = useState('')
    const [checkoutUrl, setCheckoutUrl] = useState('')

    // adds new item to cart if theres nothing in cart 
    async function addToCart(newItem) {
        if (cart.length === 0) {
            setCart([newItem])
            // calls createCheckout query from shopify.js
            const checkout = await createCheckout(newItem.id, newItem.variantQuantity)
            // creates checkout id and url 
            setCheckoutId(checkout.id)
            setCheckoutUrl(checkout.webUrl)

            // (google) localStorage is a web storage object that allows JavaScript sites and apps to keep key-value pairs in a web browser with no expiration date. This means the data survives page refreshes
            localStorage.setItem('checkout_id', JSON.stringify([newItem, checkout]))

        } else {
            // spread the cart so we can add new items to the end 
            let newCart = [...cart]
            // maps over cart if theres already an item with the same id in cart increase quantity
            cart.map(item => {
                if (item.id === newItem.id) {
                    item.variantQuantity++
                    newCart = [...cart]
                } else {
                    // catch all add new item to the end of the cart
                    newCart = [...cart, newItem]
                }
            })
            // sets cart state
            setCart(newCart)
            // updates a checkout to have new cart info 
            const newCheckout = await updateCheckout(checkoutId, newCart)
            localStorage.setItem('checkout_id', JSON.stringify([newCart, newCheckout]))
        }
    }

    return (

        // (google) Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes(all children subscribe to context changes listed in the value object)
        <CartContext.Provider value={{
            cart,
            cartOpen,
            setCartOpen,
            addToCart,
            checkoutUrl
        }}>
            {children}
        </CartContext.Provider>
    )
}

// (google) A React component that subscribes to context changes. Using this component lets you subscribe to a context within a function component.
const ShopConsumer = CartContext.Consumer
export { ShopConsumer, CartContext }
