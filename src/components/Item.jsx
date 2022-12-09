import React from "react"
import '../styles/Item.css'
import { Link } from "react-router-dom";
const Item=(props)=>{
 return(
    
        <div class="card">
            <img src={props.img} class="card-img-top product-image" alt="asd"/>
            <div class="card-body">
                <h3 class="card-title">{props.name}</h3>
                <p class=" product-description">{props.description.tallarecomendada}</p>
                <a href=".." class="btn product-button">Comprar</a>
               <Link to={`/item/${props.id}`}><a href=".." class="btn product-button">Detalles</a></Link> 
            </div>
 </div>
   
 );
}
export default Item