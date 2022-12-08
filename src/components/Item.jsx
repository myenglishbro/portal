import React from "react"
const Item=(props)=>{
 return(
    <div>
        <div>{props.name}</div>
        <div>{props.instock}</div>
        <div>{props.description}</div>
      <img src={props.img} alt="hs"/>
    </div>
 );
}
export default Item