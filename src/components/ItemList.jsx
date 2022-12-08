import Item from "./Item";
import React from "react";
const ItemList=(props)=>{
return(
   <>
      {
        props.datos.map(item=><Item key={item.id} {...item}/> )

      }
   </>
);
}

export default ItemList;