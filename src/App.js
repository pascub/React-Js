import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './pages/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './pages/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider } from './context/CartProvider'

function App() {
  return (
     <CartProvider>

    <div className="App">
      <NavBar/>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/> 
            <Route path="/contact" element={<div>contact</div>}/>
            <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
          </Routes>
        </BrowserRouter>
      
    </div>
    </CartProvider>
  );
}

export default App;
