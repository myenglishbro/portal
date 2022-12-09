import React from "react"
import '../styles/Item.css'
const Item=(props)=>{
 return(
    
        <div class="card">
            <img src={props.img} class="card-img-top product-image" alt="asd"/>
            <div class="card-body">
                <h3 class="card-title">{props.name}</h3>
                <p class=" product-description">{props.description}</p>
                <a href=".." class="btn product-button">Comprar</a>
            </div>
 </div>
   
 );
}
export default Item