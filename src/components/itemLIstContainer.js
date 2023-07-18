import React from "react"
import { useState, useEffect } from "react";
import Productos from "../productos.json"
import ItemList from "./itemList";


const ItemlistContainer=()=>{

    let [datos, setdatos]=useState([]);

    useEffect(()=>{
       setdatos(Productos)
    },[])


    if(datos){
        return(
           <ItemList productos={datos} />
        )
    }

}
export default ItemlistContainer