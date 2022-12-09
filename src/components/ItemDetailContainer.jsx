import { useState,useEffect } from "react";
import {data} from "../data/data.js";
import customFetch from '../data/customFetch.js';
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail.jsx";
const ItemDetailContainer = () => {
   
  const[dato,Setdato]=useState([]);
  const {idProduct}=useParams();

  
   useEffect(() => {
   
    customFetch(2000,data.find(item=>item.id ===parseInt(idProduct)))
    .then(response => Setdato(response))
    .catch(err => console.log(err))
  
   }, []);


    return (
     <ItemDetail item={dato}/>
    );
  };
  
  export default ItemDetailContainer;