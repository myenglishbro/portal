import ItemList from "./ItemList";
import { useState,useEffect } from "react";
import {data} from "../data/data.js";
import customFetch from '../data/customFetch.js';
import { useParams } from "react-router-dom";
const ItemListContainer = () => {
   
  const[datos,Setdatos]=useState([]);
  const {idCategory}=useParams();

  
   useEffect(() => {
    if(idCategory){
    customFetch(2000,data.filter(item=>item.categoryId ===parseInt(idCategory)))
    .then(response => Setdatos(response))
    .catch(err => console.log(err))
  } else{
    customFetch(2000,data)
    .then(response => Setdatos(response))
    .catch(err => console.log(err))
  }
   }, [idCategory]);


    return (
     <ItemList datos={datos}/>
    );
  };
  
  export default ItemListContainer;