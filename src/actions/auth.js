import axios from "../config/axios";
import cookies from "universal-cookie";

const cookie = new cookies();

export const onRegisterClick = (a, b, c, d, e) => {
  return async dispatch => {
    try {
      const res = await axios.get(`/getusers/${d}`)
      console.log(res.data);
      
     if (res.data.length === 0){
      axios
      .post("/register", {
        username: a,
        first_name: b,
        last_name: c,
        email: d,
        password: e
        
      })
      .then(res => {
        console.log(res.data);

        dispatch({
          type: "AUTH_SUCCESS",
          payload: "Registrasi berhasil "
        });
        setTimeout(() => {
          dispatch({
            type: "SET_TIMEOUT"
          });
        }, 3000);
      });
     } else {
       return dispatch({
         type: 'AUTH_ERROR',
         payload: 'Email or username has been taken'
       })
     }
  
    } catch (e){
      console.log(e);
      
    }
      
   
  };
};


// LOGIN
export const onLoginClick = (email, password) => {
    return async dispatch => {
      try {
        const res = await axios.post("/login", { email, password });
        console.log(res);
  
        if(!res.data.id){
          return dispatch({
            type: "AUTH_ERROR",
            payload: "Email and Password is incorrect"
         
          })
          
        }
        
        //cookie.set("masihLogin", res.data.name, { path: "/" });
        cookie.set("idLogin", res.data.id, { path: "/" });
        cookie.set("usernameLogin", res.data.username, { path: "/" });
        cookie.set("last_nameLogin", res.data.last_name, { path: "/" });
        cookie.set("first_nameLogin", res.data.first_name, { path: "/" });
        cookie.set("emailLogin", res.data.email, { path: "/" });
  
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: {
            id: res.data.id,
            username: res.data.username,
            first_name: res.data.first_name,
            last_name: res.data.last_name,
            email: res.data.email
          }
        });
      } catch (e) {
        console.log(e);
      }
    };
  };


// LOGOUT
export const onLogoutUser = () => {
    cookie.remove("masihLogin", { path: "/" });
    cookie.remove("idLogin", { path: "/" });
    cookie.remove("usernameLogin", { path: "/" });
    cookie.remove("last_nameLogin", { path: "/" });
    cookie.remove("first_nameLogin", {path:"/"});
    cookie.remove("emailLogin", { path: "/" });
    return {
      type: "AUTH_LOGOUT"
    };
  };

  export const keepLogin = (id, username, first_name, last_name, email) => {
    if (username === undefined || id === undefined) {
      return {
        type: "KEEP_LOGIN",
        payload: {
            id: "",
          username: "",
          first_name: "",
          last_name: "",
          email: ""
          
        }
      };
    }
  
    return {
      type: "KEEP_LOGIN",
      payload: {
        id,
        username,
        first_name,
        last_name,
        email,
        
      }
    };
  };