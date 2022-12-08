import "../styles/NavBar.css"

import CartWidget from "../components/CartWidget";
function NavBar(){
   
   
   
    return(
        <div className="container-fluid px-0 py-0">
              <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div class="container-fluid">
                              <a class="navbar-brand" href="...">
                                 <img src="..." alt="Logo" width="60" height="40" class="d-inline-block align-text-top0"/>
                                    
                                </a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                  <span class="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse " id="navbarText">
                                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                      <a class="nav-link active" aria-current="page" href="....">Hombres</a>
                                    </li>
                                    <li class="nav-item">
                                      <a class="nav-link" href="..">Mujeres</a>
                                    </li>
                                    <li class="nav-item">
                                      <a class="nav-link" href="..">Niños</a>
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