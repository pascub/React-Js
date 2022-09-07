import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListCointainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div className="App">
      <NavBar/>
      
      <ItemListContainer greeting={"Bienvenido"}/>
      
      
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
