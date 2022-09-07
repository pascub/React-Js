import { useState } from 'react'

const ItemCount = () => {

    const [initialState, setInitialState] = useState(0);

    const suma = () => {
        setInitialState(initialState + 1);
    };

    const resta = () => {
        setInitialState(initialState -1 );
       
    }


  return (
    <div>
        <h3>{initialState}</h3>
        <button onClick={suma}> SUMA </button>
        <button onClick={resta}> RESTA </button> 
    </div>
  )
}

export default ItemCount