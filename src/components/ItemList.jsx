import Item from "./Item";
import '../styles/ItemList.css';
import React from "react";

const ItemList=(props)=>{
return(
    
<div className="contenedor-cards">
  {
        props.datos.map(item=><Item key={item.id} {...item}/> )

      }
        </div>
);
}

export default ItemList;