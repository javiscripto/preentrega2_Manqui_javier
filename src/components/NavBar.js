
import Cart from "./cartWidget"
import { NavLink } from "react-router-dom"
function Navbar(){
    return(     
    
    
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/home">
          GuitarraStore
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/home">
                inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink class="nav-link" to="/productos/Guitarras">
                guitarras
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/productos/Amplificadores">
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