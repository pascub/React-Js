import ItemCount from "../components/ItemCount";
import data from "../components/MockData";
import { useEffect, useState } from "react";
import ItemList from "../components/ItemList";

const ItemListContainer = () => {
  const [productList, setProductList] = useState([])

  useEffect(() => {
    getProducts.then((response) => {
      setProductList(response)

    })
  }, [])

const getProducts =  new Promise ((resolve, reject) => {
    setTimeout(()=> {
      resolve(data)
    }, 2000)
  })
 

    return (
      <div>
      <ItemList lista={productList}/>
      </div>
   )
  }
  
  export default ItemListContainer