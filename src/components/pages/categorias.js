import { useParams } from "react-router-dom";

function Categoria(){
const result = useParams()

return(
    <div className="category">
        <h1>{result.nombre}</h1>


    </div>
    
)
}
export default Categoria