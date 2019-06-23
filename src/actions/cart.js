import axios from "../config/axios";
import cookies from "universal-cookie";

const cookie = new cookies();


  // DELETE PRODUCT
  export const deleteCart = id => {
    console.log(id);
    return async dispatch => {
    try{
      
       await axios.delete(`/deleteCart/${id}`)
      }catch (e) {
        console.log(e); 
    } 
  } 
  }
