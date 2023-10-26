import logo from './logo.svg';
import './App.css';

import ContactPagina from './paginas/ContactPagina';
import ShopPagina from './paginas/ShopPagina';
import AboutPagina from './paginas/AboutPagina';
import ReviewsPagina from './paginas/ReviewsPagina';



import { Routes , Route, BrowserRouter as Router} from "react-router-dom"

import Menu from './componentes/Menu';



function App() {
  return (
    <>
     <Router>
    <Menu />
    <div className="container pt-5 mt-5"> 
    
      <Routes>
        <Route path="/contact" element={<ContactPagina /> } />
        <Route path="/shop" element={<ShopPagina /> } />
        <Route path="/About" element={<AboutPagina /> } />
        <Route path="/Reviews" element={<ReviewsPagina /> } />
       
        
       
       
      </Routes>
      </div>
    </Router>

    </>
  );
}


export default App;
