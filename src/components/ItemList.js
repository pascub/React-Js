import Item from "./Item";
import { Link } from "react-router-dom";


const ItemList = ({ lista }) => {
   
  return (
    <div>
        {lista.map((product) => (

              <Link
              key={product.id}
              to={`/detail/${product.id}`}
              style={{ textDecoration: 'none'}}

          
              >
                <Item
                
                title={product.title}
                price={product.price} 
                category={product.category}
                image={product.image}
                description={product.description}
                />
          </Link>
                
                
                
            ))
        }
    </div>
  )
}

export default ItemList