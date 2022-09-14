import ItemCount from "./ItemCount";
import data from "./MockData";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";

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
      {/* <ItemCount/> */}
      </div>
   )
  }
  
  export default ItemListContainer