import axios from "axios";
import cookies from "universal-cookie";

const cookie = new cookies();

export const onLoginClick = (user, pass) => {
  return dispatch => {
    // cek di database untuk username dan password yang di input
    axios
      .get(" http://localhost:1996/users", {
        params: {
          username: user,
          password: pass
        }
      })
      .then(res => {
        // jika data yang dicari ditemukan, maka res.data.length > 0
        if (res.data.length > 0) {
          // Jika data ada isinya
          console.log(res.data[0]);

          const { id, username } = res.data[0];

          dispatch({
            type: "LOGIN_SUCCESS",
            payload: { id, username }
          });

          // Membuat sebuah file dengan nama masihLogin, dan value nya adalah username
          // Membuat sebuah file cookie dengan nama masihLogin, dan valuenya adalah username yg login
          // path : "/" agar dapat diakses di setiap component
          cookie.set(
            "masihLogin",
            username /* data yang disimpan adalah username */,
            { path: "/" } /* setiap halaman yang ada / nya akan di cookie */
          );
        } else {
          dispatch({
            type: "AUTH_ERROR",
            payload: "Username and Password is incorrect"
          });
          setTimeout(() => {
            dispatch({
              type: "SET_TIMEOUT"
            });
          }, 3000);
        }
      })
      .catch(err => {
        console.log("Syestem Error");
      });
  };
};

export const onRegisterClick = (user, emayl, pass /*, confpass*/) => {
  return dispatch => {
    axios
      .get(" http://localhost:1996/users", {
        params: {
          username: user
        }
      })
      .then(res => {
        // Jika username yang diinput belum terpakai dan registrasi berhasil
        if (res.data.length === 0) {
          axios
            .post(" http://localhost:1996/users", {
              username: user,
              email: emayl,
              password: pass
              //confirmpassword: confpass
            })
            .then(res => {
              dispatch({
                type: "AUTH_SUCCESS",
                payload: "Registrasi berhasil cuk!"
              });
              setTimeout(() => {
                dispatch({
                  type: "SET_TIMEOUT"
                });
              }, 3000);
            });
        } else {
          dispatch({
            type: "AUTH_ERROR",
            payload: "Username has been taken"
          });
          setTimeout(() => {
            dispatch({
              type: "SET_TIMEOUT"
            });
          }, 3000);
        }
      });
  };
};

// export const onSetTimeOut = () => {
//   return { type: "SET_TIMEOUT" };
// };

export const onLogoutUser = () => {
  cookie.remove("masihLogin");
  return { type: "AUTH_LOGOUT" };
};

export const keepLogin = user => {
  return dispatch => {
    axios
      .get("http://localhost:1996/users", {
        params: {
          username: user
        }
      })
      .then(res => {
        if (res.data.length !== 0) {
          dispatch({
            type: "LOGIN_SUCCESS",
            payload: { username: user }
          });
        }
      });
  };
};

// post prodact to Manage Product

export const onUploadProduct = (namaProd, deskripsi, harga, gambar) => {
  return dispatch => {
    axios
      .get(" http://localhost:1996/products", {
        params: {
          name: namaProd
        }
      })
      .then(res => {
        // Jika nama dari Prodak yang diinput belum terpakai dan registrasi berhasil
        if (res.data.length === 0) {
          axios
            .post(" http://localhost:1996/products", {
              name: namaProd,
              desc: deskripsi,
              price: harga,
              src: gambar
            })
            .then(res => {
              dispatch({
                type: "AUTH_SUCCESS",
                payload: "Upload Product berhasil cuk!"
              });
              setTimeout(() => {
                dispatch({
                  type: "SET_TIMEOUT"
                });
              }, 3000);
            });
        } else {
          dispatch({
            type: "AUTH_ERROR",
            payload: "Prodact Name has been taken"
          });
          setTimeout(() => {
            dispatch({
              type: "SET_TIMEOUT"
            });
          }, 3000);
        }
      });
  };
};
