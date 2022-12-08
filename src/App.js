import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar.jsx'

function App() {
  return (
    <div className="App">
       
  <NavBar/>
  <ItemListContainer greetings="Bienvenidos a mi ecommerce"/>
    
    </div>
  );
}

export default App;
