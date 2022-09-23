
const ItemCount = ({stock, setCount, count}) => {


    const onAdd = () => {
      if (count < stock)
       setCount(count + 1);
    };
    const onRemove = () => {
      if (count === 0) {
        return;
      }
      setCount(count - 1);
   };


  return (
    <div>
       <p>{count}</p>
        <button onClick={onAdd}> + </button> 
        <button onClick={onRemove}> - </button> 
    </div>
  )
}

export default ItemCount