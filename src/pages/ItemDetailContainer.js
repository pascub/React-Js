import data from "../components/MockData"
import { useEffect, useState } from "react"
import ItemDetail from "../components/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [productItem, setProductItem] = useState([])

    useEffect(() => {
        getItem.then((response) => {
          setProductItem(response)
    
        })
      }, [])

      const getItem = new Promise ((resolve, reject) => {
        setTimeout(()=>{
            resolve(data.filter((product) => product.id === id))
        }, 2000)

      })
 


  return (
    <div>
        {productItem && <ItemDetail  product={productItem}/>}
    </div>
  )
}

export default ItemDetailContainer