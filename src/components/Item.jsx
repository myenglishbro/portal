import React from "react"
import '../styles/Item.css'
const Item=(props)=>{
 return(
    
        <div class="card">
            <img src={props.img} class="card-img-top" alt="asd"/>
            <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                <p class="card-text">{props.description}</p>
                <a href=".." class="btn btn-primary">Comprar</a>
            </div>
 </div>
   
 );
}
export default Item