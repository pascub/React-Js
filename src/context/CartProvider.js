import { createContext, useState } from "react"
import { CartContext } from "./cartContext"

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addToCart = (item, quantity) => {
        if (isInCart(item.id)) {
            alert('ya esta en el carrito')
        } else {
            setCart([...cart, {...item, quantity}])
        }
    }
    const isInCart = (id) => {
        return cart.some((item) => item.id === id)
    }

    const clear = () => {
        setCart()
    }
    const removeItem = (productId) => {
        let nuevoArreglo = []
        cart.forEach((product) => {
            if (product.id === productId) {
            console.log(product);
        } else {
            nuevoArreglo.push(product)
        }
        })
        setCart(nuevoArreglo)
    }
    
  return (
    <CartContext.Provider value={{cart, addToCart, removeItem}}>
        {children}
    </CartContext.Provider>

   )
}

