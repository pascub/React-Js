import ItemCount from "./ItemCount";
import Item from "./Item";
import { useState } from 'react';
import { Link} from 'react-router-dom'
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

 export const ItemDetail = ({ product }) => {
  console.log(product);
  const { addToCart } = useContext(CartContext)

  const [count, setCount] = useState(0);

  function onAdd(product, cantidad) {
    addToCart(product, cantidad)
  }

  return (
    <div>
       <img  src={product.img}/>
       <h2>{product.title}</h2>
       <div>
        <p>{product.price}</p>
        <p>Detalles del producto..</p>
        <p>{product.category}</p>
        <p>{product.description}</p>
        <ItemCount stock={3} setCount={setCount} count={count}/>
        <button onClick={() => onAdd(product)}>
         Agregar al carrito
        </button>
       </div>
    </div>
  )
}

export default ItemDetail