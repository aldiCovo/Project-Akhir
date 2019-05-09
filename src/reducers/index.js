// import { combineReducers } from "redux";

// const init = {
//   id: "",
//   email: "",
//   error: "",
//   success: ""
// };

// const AuthReducer = (state = init, action) => {
//   // Pengganti If else pakai switch default
//   switch (action.type) {
//     case "LOGIN_SUCCESS":
//       return {
//         ...state,
//         id: action.payload.id,
//         email: action.payload.email
//       };

//     case "AUTH_ERROR":
//       return { ...state, error: action.payload, success: "" };

//     case "AUTH_SUCCESS":
//       return { ...state, error: "", success: action.payload };

//     case "SET_TIMEOUT":
//       return { ...state, error: "", success: "" };

//     case "AUTH_LOGOUT":
//       return (state = init);

//     // case "AUTH_LOGOUT":
//     //   return {...state, ...init}

//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   auth: AuthReducer
// });

import { combineReducers } from "redux";

import AuthReducer from "./Authreducer";

export default combineReducers({
  auth: AuthReducer
});
