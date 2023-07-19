import Item from "./item"


const ItemList=(props)=>{
return(
    <div className="container-fluid ">
        <h1>{props.categoria}</h1>
       <div className="container">
       {
            props.productos.map(prod=>{
                return <Item key={prod.id} nombre={prod.nombre} precio={prod.precio} descripcion={""} img={prod.imagen} />
            })
        }
        
        </div> 

    </div>
)

}
export default ItemList

