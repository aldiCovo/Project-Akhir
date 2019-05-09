const init = {
  id: "",
  username: "",
  first_name: "",
  last_name: "",
  email: ""
};

export default (state = init, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        id: action.payload.id,
        username: action.payload.name,
        first_name: action.payload.name,
        last_name: action.payload.name,
        email: action.payload.email
      };

    case "EDIT_SUCCESS":
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name
      };

    case "LOGOUT":
      return {
        ...state,
        id: "",
        username: "",
        first_name: "",
        last_name: "",
        email: ""
      };

    case "KEEP_LOGIN":
      return {
        ...state,
        id: action.payload.id,
        username: action.payload.name,
        first_name: action.payload.name,
        last_name: action.payload.name,
        email: action.payload.email
      };

    case "AUTH_ERROR":
      return { ...state, error: action.payload, success: "" };

    case "AUTH_SUCCESS":
      return { ...state, error: "", success: action.payload };

    case "SET_TIMEOUT":
      return { ...state, error: "", success: "" };

    case "AUTH_LOGOUT":
      return (state = init);

    default:
      return state;
  }
};
