import axios from "../config/axios";
import cookies from "universal-cookie";

const cookie = new cookies();

// Edit data user
export const editUserData = (username, first_name, last_name, email, password, avatar) => {
    return async (dispatch) => {
      try {
  
        const formData = new FormData()
  
        formData.append('username', username)
        formData.append('first_name', first_name)
        formData.append('last_name', last_name)
        formData.append('email', email)
        formData.append('password', password)
        formData.append('avatar', avatar)
  
        const userId = cookie.get("idLogin")
        const res = await axios.patch(`/updateuser/${userId}/avatar`,formData, {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
      })
        console.log(res);
  
        if(res.data[0].username){
          return dispatch ({
            type: "EDIT_USERDATA",
            payload: res
          })
        }
        
      } catch (e) {
        console.log(e);
        
      }
    }
  }
  
  // Edit data address
  export const editUserAddress = (location_name, street, city, province, country, postal_code, phone) => {
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
          phone
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
  
  
  
  
  
  
  
  

  // get userData (username and email) => sebagai proteksi di register
export const getAuthUser = () => {
    return async () => {
      try {
        const email = cookie.get('email')
        const username = cookie.get("KEEP_LOGIN")
        const res = await axios.get(`/getuser/${email}/${username}`)
        console.log(res);
      } catch (e) {
        console.log(e);
        
      }
    }
  }

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
  