import "../styles/NavBar.css"
import log from '../assets/LOG.png'
import { Link } from "react-router-dom";

import CartWidget from "../components/CartWidget";
function NavBar(){
   
   
   
    return(
        <div className="container-fluid px-0 py-0">
              <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div class="container-fluid">
                              <a class="navbar-brand" href="...">
                            <Link to="/"> <img src={log} alt="Logo" width="60" height="50" class="d-inline-block align-text-top0"/></Link>    
                                    
                                </a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                  <span class="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse " id="navbarText">
                                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                   <Link to="/category/1"><a class="nav-link active" aria-current="page" href="....">Hombres</a></Link>   
                                    </li>
                                    <li class="nav-item">
                                    <Link to="/category/2"><a class="nav-link" href="..">Mujeres</a></Link>
                                    </li>
                                    <li class="nav-item">
                                    <Link to="/category/3"> <a class="nav-link" href="..">Niños</a> </Link>
                                    </li>
                                  </ul>
                                  <CartWidget/>
                                </div>
                        </div>
               </nav>


  
        </div>
        
        

      


    );
}

export default NavBar;