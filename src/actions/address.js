import axios from "../config/axios";
import cookies from "universal-cookie";

const cookie = new cookies();

export const addAddress = (location_name, street, city, province, country, postal_code, phone, penerima) => {
    return async dispatch => {
      try {
        const user_id = cookie.get('idLogin')
        const res = await axios
        .post(`/addAddress/${user_id}`, {
          location_name,
          street,
          city,
          province,
          country,
          postal_code,
          phone,
          penerima
          
        })
        console.log(res.data);
        console.log(res.data[0]);
        console.log(res);
  
        return dispatch({
            type: "ADD_USERADDRESS",
            //type: "EDIT_USERADDRESS",
           
            payload: res
        
         
        });
     
    
      } catch (e){
        console.log(e);
        
      }
        
     
    };
  };


  // get userData(username, firstName, lastName, email, password) by userid
export const getUser = () => {
    return async dispatch => {
      try {
        const userId = cookie.get("idLogin")
        const res = await axios.get (`/getusers/${userId}`)
        console.log(res.data);
  
        return dispatch ({
          type: "EDIT_USERDATA",
          payload: res
        })
        
      } catch (e) {
        console.log(e);
        
      }
    }
  }
  
  
  // get userAddress by userId
export const getUserAddress = () => {
    return async dispatch => {
      try {
        const userId = cookie.get("idLogin")
        const res = await axios.get (`/getuserAddress/${userId}`)
        console.log(res.data);
  
        return dispatch ({
          type: "EDIT_USERADDRESS",
          payload: res
        })
        
      } catch (e) {
        console.log(e);
        
      }
    }
  }

  
  // Edit data address
export const editUserAddress = (location_name, street, city, province, country, postal_code, phone, penerima) => {
    return async (dispatch) => {
      try {
        const userId = cookie.get("idLogin")
        const res = await axios.patch(`/updateaddress/${userId}`,{
          location_name,
          street,
          city,
          province,
          country,
          postal_code,
          phone,
          penerima
        })
        console.log(res.data[0].location_name);
        
          return dispatch ({
            type: "EDIT_USERADDRESS",
            payload: res
          })
        
        
      } catch (e) {
        console.log(e);
        
      }
    }
  }