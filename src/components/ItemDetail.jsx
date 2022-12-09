import React from "react"
const ItemDetail=(props)=>{
    return(
       

        <div class="card">
                    <img src={props.item.img} class="card-img-top product-image" alt="asd"/>
                    <div class="card-body">
                        <h3 class="card-title">{props.item.name}</h3>
                      
                        <a href=".." class="btn product-button">Agregar</a>
                 
                    </div>
 </div>
        
    );
}

export default ItemDetail;