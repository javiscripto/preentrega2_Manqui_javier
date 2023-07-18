import Item from "./item"


const ItemList=(props)=>{
return(
    <div>
        {
            props.productos.map(prod=>{
                return <Item key={prod.id} nombre={prod.nombre} precio={prod.precio} descripcion={""} img={prod.imagen} />
            })
        }

    </div>
)

}
export default ItemList

