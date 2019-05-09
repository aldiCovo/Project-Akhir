// import axios from "axios";
// import cookies from "universal-cookie";

// const cookie = new cookies();

// export const onLoginClick = (email, pass) => {
//   return dispatch => {
//     // cek di database untuk username dan password yang di input
//     axios
//       .post(" http://localhost:2020/login", {
//         params: {
//           email: email,
//           password: pass
//         }
//       })
//       .then(res => {
//         // jika data yang dicari ditemukan, maka res.data.length > 0
//         if (res.data.length > 0) {
//           // Jika data ada isinya
//           console.log(res.data[0]);

//           const { id, email } = res.data[0];

//           dispatch({
//             type: "LOGIN_SUCCESS",
//             payload: { id, email }
//           });

//           // Membuat sebuah file dengan nama masihLogin, dan value nya adalah username
//           // Membuat sebuah file cookie dengan nama masihLogin, dan valuenya adalah username yg login
//           // path : "/" agar dapat diakses di setiap component
//           cookie.set(
//             "masihLogin",
//             email /* data yang disimpan adalah email */,
//             { path: "/" } /* setiap halaman yang ada / nya akan di cookie */
//           );
//         } else {
//           dispatch({
//             type: "AUTH_ERROR",
//             payload: "Email and Password is incorrect"
//           });
//           setTimeout(() => {
//             dispatch({
//               type: "SET_TIMEOUT"
//             });
//           }, 3000);
//         }
//       })
//       .catch(err => {
//         console.log("Syestem Error");
//       });
//   };
// };

// export const onRegisterClick = (a, b, c, d, e) => {
//   return dispatch => {
//     axios
//       .post("http://localhost:2020/register", {
//         username: a,
//         first_name: b,
//         last_name: c,
//         email: d,
//         password: e
//         // phone: f,
//         // address: g,
//         // city: h,
//         // negara: i,
//         // zip: j
//         //confirmpassword: confpass
//       })
//       .then(res => {
//         console.log(res.data);

//         dispatch({
//           type: "AUTH_SUCCESS",
//           payload: "Registrasi berhasil cuk!"
//         });
//         setTimeout(() => {
//           dispatch({
//             type: "SET_TIMEOUT"
//           });
//         }, 3000);
//       });
//   };
// };

// // export const onSetTimeOut = () => {
// //   return { type: "SET_TIMEOUT" };
// // };

// export const onLogoutUser = () => {
//   cookie.remove("masihLogin");
//   return { type: "AUTH_LOGOUT" };
// };

// export const keepLogin = email => {
//   return dispatch => {
//     axios
//       .get("http://localhost:2020/users", {
//         params: {
//           email: email
//         }
//       })
//       .then(res => {
//         if (res.data.length !== 0) {
//           dispatch({
//             type: "LOGIN_SUCCESS",
//             payload: { email: email }
//           });
//         }
//       });
//   };
// };

// // post prodact to Manage Product

// export const onUploadProduct = (namaProd, deskripsi, harga, gambar) => {
//   return dispatch => {
//     axios
//       .get(" http://localhost:1996/products", {
//         params: {
//           name: namaProd
//         }
//       })
//       .then(res => {
//         // Jika nama dari Prodak yang diinput belum terpakai dan registrasi berhasil
//         if (res.data.length === 0) {
//           axios
//             .post(" http://localhost:1996/products", {
//               name: namaProd,
//               desc: deskripsi,
//               price: harga,
//               src: gambar
//             })
//             .then(res => {
//               dispatch({
//                 type: "AUTH_SUCCESS",
//                 payload: "Upload Product berhasil cuk!"
//               });
//               setTimeout(() => {
//                 dispatch({
//                   type: "SET_TIMEOUT"
//                 });
//               }, 3000);
//             });
//         } else {
//           dispatch({
//             type: "AUTH_ERROR",
//             payload: "Prodact Name has been taken"
//           });
//           setTimeout(() => {
//             dispatch({
//               type: "SET_TIMEOUT"
//             });
//           }, 3000);
//         }
//       });
//   };
// };

import axios from "../config/axios";
import cookies from "universal-cookie";

const cookie = new cookies();

export const onRegisterClick = (a, b, c, d, e) => {
  return dispatch => {
    axios
      .post("http://localhost:2020/register", {
        username: a,
        first_name: b,
        last_name: c,
        email: d,
        password: e
        // phone: f,
        // address: g,
        // city: h,
        // negara: i,
        // zip: j
        //confirmpassword: confpass
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
  };
};
// export const onRegisterClick = (a, b, c, d, e) => {
//   return dispatch => {
//     axios
//       .post("/register", {
//         username: a,
//         first_name: b,
//         last_name: c,
//         email: d,
//         password: e
//         // phone: f,
//         // address: g,
//         // city: h,
//         // negara: i,
//         // zip: j
//         //confirmpassword: confpass
//       })
//       .then(res => {
//         console.log("YEaaaayyy");
//       })
//       .catch(e => {
//         console.log(e.response.data.replace("User validation failed: ", ""));
//       });
//   };
// };

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
      
      cookie.set("masihLogin", res.data.name, { path: "/" });
      cookie.set("idLogin", res.data.id, { path: "/" });
      cookie.set("usernameLogin", res.data.username, { path: "/" });
      cookie.set("last_nameLogin", res.data.last_name, { path: "/" });
      cookie.set("first_nameLogin", res.data.first_name, { path: "/" });
      cookie.set("emailLogin", res.data.email, { path: "/" });

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          id: res.data._id,
          name: res.data.name,
          age: res.data.age,
          email: res.data.email
        }
      });
    } catch (e) {
      console.log(e);
    }
  };
};

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

export const onEdit = (name, age, /*email,*/ userId) => {
  return async dispatch => {
    try {
      const res = await axios.patch(`/users/${userId}`, {
        name,
        age
        //email
      });
      cookie.set("masihLogin", res.data.name, { path: "/" });
      cookie.set("idLogin", res.data._id, { path: "/" });
      //cookie.set("emailLogin", res.data.email, { path: "/" });
      cookie.set("ageLogin", res.data.age, { path: "/" });
      dispatch({
        type: "EDIT_SUCCESS",
        payload: {
          id: res.data._id,
          name: res.data.name,
          // email: res.data.email,
          age: res.data.age
        }
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const keepLogin = (name, id, age, email) => {
  if (name === undefined || id === undefined) {
    return {
      type: "KEEP_LOGIN",
      payload: {
        id: "",
        name: "",
        email: "",
        age: 0
      }
    };
  }

  return {
    type: "KEEP_LOGIN",
    payload: {
      id,
      name,
      email,
      age
    }
  };
};

//
