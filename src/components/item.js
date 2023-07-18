const Item=(props)=>{
    return(
        <div className="card">
            <img src={props.img} alt={props.nombre} />
            <p>{props.nombre}</p>
            <p>${props.precio} CLP</p>

        </div>
    )

}
export default Item