import ItemList from "./ItemList";
import { useState,useEffect } from "react";
import {data} from "../data/data.js";
import customFetch from '../data/customFetch.js';
const ItemListContainer = () => {
   
  const[datos,Setdatos]=useState([]);

  
   useEffect(() => {
    customFetch(2000,data)
    .then(response => Setdatos(response))
    .catch(err => console.log(err))
   
   }, []);


    return (
     <ItemList datos={datos}/>
    );
  };
  
  export default ItemListContainer;