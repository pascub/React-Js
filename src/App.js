import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListCointainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div className="App">
      
      <NavBar/>
      
      <header className="App-header">
      
      <ItemListContainer greeting={"Bienvenido"}/>
        
      </header>
    </div>
  );
}

export default App;
