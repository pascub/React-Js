import ItemCount from "./ItemCount";
import Item from "./Item";
import { useState } from 'react';
import { Link} from 'react-router-dom'

 export const ItemDetail = ({ product }) => {
  console.log(product);

  const [count, setCount] = useState(0);
  const handleClick = () => {
    console.log(count)
  }
  return (
    <div>
       <img  src={product.img}/>
       <h2>{product.title}</h2>
       <div>
        <p>{product.price}</p>
        <p>Detalles del producto..</p>
        <p>{product.description}</p>
        <ItemCount setCount={setCount} count={count}/>
        <Link to='/carrito' onClick={handleClick}>
          ir al carrito
        </Link>
       </div>
    </div>
  )
}

export default ItemDetail