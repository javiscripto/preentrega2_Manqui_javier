import React, { useState, useEffect } from "react";
import Productos from "../productos.json";
import ItemList from "./itemList";
import { useParams } from "react-router-dom";

const ItemlistContainer = () => {
  const { nombre } = useParams(); 
  const [datos, setDatos] = useState([]);
  const [filtro, setFiltro] = useState([]); 
  useEffect(() => {
    setDatos(Productos);

    
    const filtroProductos = datos.filter((prod) => prod.categoria === nombre);

    
    setFiltro(filtroProductos);
  }, [nombre]);

  

  return <ItemList productos={filtro} categoria={nombre} />;
};

export default ItemlistContainer;
