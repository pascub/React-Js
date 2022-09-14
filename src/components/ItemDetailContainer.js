import data from "./MockData"
import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
    const [productItem, setProductItem] = useState([])

    useEffect(() => {
        getItem.then((response) => {
          setProductItem(response)
    
        })
      }, [])

      const getItem = new Promise ((resolve, reject) => {
        setTimeout(()=>{
            resolve(data)
        }, 2000)

      })





  return (
    <div>
        <ItemDetail  item={productItem}/>
    </div>
  )
}

export default ItemDetailContainer