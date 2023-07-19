import { NavLink } from "react-router-dom"

const Item=(props)=>{
    return(
        
        <div className="card" >
            <NavLink to="/product/detail">
            <img class="card-img-top" src={props.img} alt={props.nombre} />
            </NavLink>
        
            <div class="card-body">
            <h5>{props.nombre}</h5>
            <p>${props.precio} CLP</p>
            <button className="boton-detalles">ver detalles</button>
            </div>
            
            

        </div>
    )

}
export default Item