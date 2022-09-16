import Item from "./Item";
import { Link } from "react-router-dom";


const ItemList = ({ lista }) => {
   
  return (
    <div>
        {lista.map((product) => (

              <Link
              key={product.id}
              to={`/details/${product.id}`}
              style={{ textDecoration: 'none'}}

          
              >
                <Item
                
                title={product.title}
                price={product.price} 
                image={product.image}
                detail={product.detail}
                />
          </Link>
                
                
                
            ))
        }
    </div>
  )
}

export default ItemList