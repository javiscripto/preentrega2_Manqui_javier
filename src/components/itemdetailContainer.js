import { useState } from "react"



const ItemDetailContainer =()=>{

    let [cantidad,setcantidad]=useState(0);

    const handler1=()=>setcantidad(cantidad+1);
    const handerl2=()=>setcantidad(cantidad-1);


    return(
        <div className=" card card-detail">
            <img src="" alt="" />
            <p>descripcion del producto: </p>
            <p>precio:$  </p>
            <div className="card-acciones">
                <button onClick={handler1}>+</button>
                <button onClick={handler2}>-</button>
            </div>
            <button onClick={()=>{}}>agregar al carrito</button>
        
        </div>
    )

}
export default ItemDetailContainer