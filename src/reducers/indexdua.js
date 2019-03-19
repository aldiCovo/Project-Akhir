import { combineReducers } from "redux";

const initdua = {
  id: "",
  name: "",
  error: "",
  success: ""
};

const AuthReducerDua = (state = initdua, action) => {
  // Pengganti If else pakai switch default
  switch (action.type) {
    case "UPLOAD_SUCCESS":
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name
      };

    case "AUTH_ERROR":
      return { ...state, error: action.payload, success: "" };

    case "AUTH_SUCCESS":
      return { ...state, error: "", success: action.payload };

    case "SET_TIMEOUT":
      return { ...state, error: "", success: "" };

    default:
      return state;
  }
};

export default combineReducers({
  //auth: AuthReducer,
  authdua: AuthReducerDua
});
