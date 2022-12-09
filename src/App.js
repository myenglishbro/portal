import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar.jsx'

function App() {
  return (
    <div className="App">
       
     <BrowserRouter>
      <NavBar/>
        <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
            <Route path='/item/:idProducto' element={  <ItemDetailContainer/>}/>
           
        </Routes>
               
             
           
      </BrowserRouter>
    </div>
  );
}

export default App;
