
import Cart from "./cartWidget"
import { NavLink } from "react-router-dom"
function Navbar(){
    return(     
    
    
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <NavLink class="navbar-brand" to="/home">
          GuitarraStore
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <NavLink class="nav-link active" aria-current="page" to="/home">
                inicio
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" to="/productos/Guitarras">
                guitarras
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" to="/productos/Amplificadores">
                amplificadores
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

     <Cart/>
    </nav>
 
        
    )
}
export default Navbar