import { useContext } from "react"
import { CartContext } from "../context/cartContext"


const Cart = () => {
        const {cart, addToCart, removeItem} = useContext(CartContext)
    return 
    (<div>
        <h1>Cart</h1>
        
        {cart.map((item) => (
            <div key={item.id}>
                <img src={item.image} alt={item.title}/>
                <h3>{item.title}</h3>
                <p>{item.price}</p>
                <p>{item.quantity}</p>
                <button onClick={() => removeItem(item.id)}>Eliminar producto</button>
            </div>
        ))}
    </div>)

  
}

export default Cart