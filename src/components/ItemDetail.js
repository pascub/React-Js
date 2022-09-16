
import data from "./MockData";
import Item from "./Item"

 export const ItemDetail = ({ product }) => {
  console.log(product);
  return (
    <div>
       <img  src={product.img}/>
       <h2>{product.title}</h2>
       <div>
        <p>{product.price}</p>
        <p>{product.detail}</p>
       </div>
    </div>
  )
}

export default ItemDetail