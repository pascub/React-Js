import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './pages/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './pages/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      
      <NavBar/>
      
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={"Bienvenido"}/>}/> 
            <Route path="contact" element={<div>contact</div>}/>
            <Route path='detail/:id' element={<ItemDetailContainer />}/>
          </Routes>
        </BrowserRouter>
        
      </header>
    </div>
  );
}

export default App;
