
import Cart from "./cartWidget"
function Navbar(){
    return(
        
    <nav>
        <h1>GuitarraStore</h1>
        <ul>
            <li><a href="#">inicio</a></li>
            <li><a href="#">productos</a></li>
            <li><a href="#">contacto</a></li>
        </ul>
        <Cart></Cart>
    </nav>        
        
    )
}
export default Navbar